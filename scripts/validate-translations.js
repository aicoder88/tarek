#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

class TranslationValidator {
  constructor() {
    this.messagesDir = path.join(process.cwd(), 'messages');
    this.sourceDir = path.join(process.cwd(), 'src');
    this.appDir = path.join(process.cwd(), 'app');
    this.locales = ['en', 'fr', 'ar'];
    this.translations = {};
    this.issues = [];
  }

  async validate() {
    console.log(`${colors.blue}🔍 Starting translation validation...${colors.reset}\n`);

    // Load all translation files
    await this.loadTranslations();

    // Check for missing translations
    await this.checkMissingTranslations();

    // Scan for hardcoded text
    await this.scanForHardcodedText();

    // Generate report
    this.generateReport();

    return this.issues.length === 0;
  }

  async loadTranslations() {
    console.log('📁 Loading translation files...');

    for (const locale of this.locales) {
      const filePath = path.join(this.messagesDir, `${locale}.json`);

      if (fs.existsSync(filePath)) {
        try {
          this.translations[locale] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          console.log(`  ✅ ${locale}.json loaded`);
        } catch (error) {
          console.log(`  ❌ Error loading ${locale}.json: ${error.message}`);
          this.issues.push({
            type: 'parse_error',
            file: `${locale}.json`,
            message: `Failed to parse JSON: ${error.message}`
          });
        }
      } else {
        console.log(`  ❌ Missing ${locale}.json`);
        this.issues.push({
          type: 'missing_file',
          file: `${locale}.json`,
          message: 'Translation file does not exist'
        });
      }
    }
    console.log('');
  }

  async checkMissingTranslations() {
    console.log('🔗 Checking for missing translations across locales...');

    if (Object.keys(this.translations).length < 2) {
      console.log('  ⚠️  Not enough translation files to compare');
      return;
    }

    // Use English as the reference
    const referenceKeys = this.getAllKeys(this.translations.en || {});

    for (const locale of this.locales) {
      if (locale === 'en' || !this.translations[locale]) continue;

      const localeKeys = this.getAllKeys(this.translations[locale]);

      // Find missing keys
      const missingKeys = referenceKeys.filter(key => !localeKeys.includes(key));
      const extraKeys = localeKeys.filter(key => !referenceKeys.includes(key));

      if (missingKeys.length > 0) {
        console.log(`  ❌ ${locale}.json missing keys: ${missingKeys.join(', ')}`);
        this.issues.push({
          type: 'missing_keys',
          file: `${locale}.json`,
          keys: missingKeys,
          message: `Missing ${missingKeys.length} translation keys`
        });
      }

      if (extraKeys.length > 0) {
        console.log(`  ⚠️  ${locale}.json has extra keys: ${extraKeys.join(', ')}`);
        this.issues.push({
          type: 'extra_keys',
          file: `${locale}.json`,
          keys: extraKeys,
          message: `Has ${extraKeys.length} extra translation keys`
        });
      }

      if (missingKeys.length === 0 && extraKeys.length === 0) {
        console.log(`  ✅ ${locale}.json structure matches reference`);
      }
    }
    console.log('');
  }

  getAllKeys(obj, prefix = '') {
    let keys = [];

    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        keys = keys.concat(this.getAllKeys(value, fullKey));
      } else {
        keys.push(fullKey);
      }
    }

    return keys;
  }

  async scanForHardcodedText() {
    console.log('🔍 Scanning for hardcoded text patterns...');

    const patterns = [
      // Inline conditional translations
      {
        regex: /locale\s*===\s*["']en["']\s*\?\s*["'][^"']+["']\s*:\s*locale\s*===\s*["']fr["']\s*\?\s*["'][^"']+["']\s*:\s*["'][^"']+["']/g,
        type: 'inline_conditional',
        description: 'Inline conditional translation'
      },
      // Hardcoded English strings (common construction terms)
      {
        regex: /"(Years Experience|Projects Completed|Satisfaction Rate|Support Available|Happy Clients|Average Rating|Contact Now|Get Free Quote|Schedule Appointment)"/g,
        type: 'hardcoded_english',
        description: 'Hardcoded English text'
      },
      // Component text without translation
      {
        regex: /"[A-Z][a-z\s]{10,}"/g,
        type: 'potential_hardcoded',
        description: 'Potential hardcoded text (long capitalized strings)'
      }
    ];

    const filePatterns = [
      'src/**/*.{tsx,ts,jsx,js}',
      'app/**/*.{tsx,ts,jsx,js}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/.next/**'
    ];

    for (const pattern of filePatterns) {
      const files = await glob(pattern);

      for (const file of files) {
        await this.scanFile(file, patterns);
      }
    }

    console.log('');
  }

  async scanFile(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      for (const pattern of patterns) {
        const matches = [...content.matchAll(pattern.regex)];

        if (matches.length > 0) {
          console.log(`  ⚠️  ${filePath}: Found ${matches.length} ${pattern.description} instances`);

          for (const match of matches) {
            const lineNumber = content.substring(0, match.index).split('\n').length;
            this.issues.push({
              type: pattern.type,
              file: filePath,
              line: lineNumber,
              match: match[0],
              message: pattern.description
            });
          }
        }
      }
    } catch (error) {
      console.log(`  ❌ Error reading ${filePath}: ${error.message}`);
    }
  }

  generateReport() {
    console.log('📊 Translation Validation Report');
    console.log('================================\n');

    if (this.issues.length === 0) {
      console.log(`${colors.green}✅ All translations are valid! No issues found.${colors.reset}\n`);
      return;
    }

    // Group issues by type
    const issuesByType = this.issues.reduce((acc, issue) => {
      if (!acc[issue.type]) {
        acc[issue.type] = [];
      }
      acc[issue.type].push(issue);
      return acc;
    }, {});

    console.log(`${colors.red}❌ Found ${this.issues.length} issues:${colors.reset}\n`);

    // Report missing files
    if (issuesByType.missing_file) {
      console.log(`${colors.red}Missing Translation Files (${issuesByType.missing_file.length}):${colors.reset}`);
      issuesByType.missing_file.forEach(issue => {
        console.log(`  - ${issue.file}: ${issue.message}`);
      });
      console.log('');
    }

    // Report parsing errors
    if (issuesByType.parse_error) {
      console.log(`${colors.red}Translation File Errors (${issuesByType.parse_error.length}):${colors.reset}`);
      issuesByType.parse_error.forEach(issue => {
        console.log(`  - ${issue.file}: ${issue.message}`);
      });
      console.log('');
    }

    // Report missing keys
    if (issuesByType.missing_keys) {
      console.log(`${colors.yellow}Missing Translation Keys (${issuesByType.missing_keys.length}):${colors.reset}`);
      issuesByType.missing_keys.forEach(issue => {
        console.log(`  - ${issue.file}: ${issue.keys.join(', ')}`);
      });
      console.log('');
    }

    // Report hardcoded text
    if (issuesByType.inline_conditional) {
      console.log(`${colors.yellow}Inline Conditional Translations (${issuesByType.inline_conditional.length}):${colors.reset}`);
      issuesByType.inline_conditional.forEach(issue => {
        console.log(`  - ${issue.file}:${issue.line} - ${issue.message}`);
      });
      console.log('');
    }

    if (issuesByType.hardcoded_english) {
      console.log(`${colors.yellow}Hardcoded English Text (${issuesByType.hardcoded_english.length}):${colors.reset}`);
      issuesByType.hardcoded_english.forEach(issue => {
        console.log(`  - ${issue.file}:${issue.line} - "${issue.match}"`);
      });
      console.log('');
    }

    // Provide fix suggestions
    console.log(`${colors.blue}🔧 Fix Suggestions:${colors.reset}`);

    if (issuesByType.inline_conditional) {
      console.log('1. Replace inline conditionals with useTranslations hook:');
      console.log('   Replace: locale === "en" ? "text" : locale === "fr" ? "texte" : "نص"');
      console.log('   With: const t = useTranslations("section"); t("key")');
      console.log('');
    }

    if (issuesByType.hardcoded_english) {
      console.log('2. Move hardcoded text to translation files:');
      console.log('   Add keys to messages/en.json, fr.json, and ar.json');
      console.log('   Use t("key") in components');
      console.log('');
    }

    if (issuesByType.missing_keys) {
      console.log('3. Add missing translation keys to ensure consistency across locales');
      console.log('');
    }

    console.log(`${colors.blue}Run this script again after fixes to verify improvements.${colors.reset}\n`);
  }
}

// Run the validator
async function main() {
  const validator = new TranslationValidator();
  const isValid = await validator.validate();

  process.exit(isValid ? 0 : 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Error running translation validator:', error);
    process.exit(1);
  });
}

export default TranslationValidator;