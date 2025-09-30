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

class TranslationFixer {
  constructor() {
    this.sourceDir = path.join(process.cwd(), 'src');
    this.legacyPagesDir = path.join(this.sourceDir, 'legacy-pages');
    this.fixes = 0;
  }

  async fix() {
    console.log(`${colors.blue}🔧 Starting automatic translation fixes...${colors.reset}\n`);

    // Fix legacy pages with inline conditionals
    await this.fixLegacyPages();

    // Fix other components with hardcoded text
    await this.fixHardcodedText();

    console.log(`\n${colors.green}✅ Translation fixes complete! Applied ${this.fixes} fixes.${colors.reset}`);
    console.log(`${colors.yellow}⚠️  Please review the changes and test the application.${colors.reset}`);

    return this.fixes;
  }

  async fixLegacyPages() {
    console.log('📁 Fixing legacy pages with inline conditionals...');

    const legacyFiles = await glob('src/legacy-pages/*.tsx');

    for (const file of legacyFiles) {
      console.log(`  🔧 Converting ${file} to use translation system...`);

      // For now, we'll just add a note to manually convert these files
      // since they have complex inline conditional logic
      const content = fs.readFileSync(file, 'utf8');

      if (content.includes('locale === "en" ?')) {
        console.log(`    ⚠️  ${file} contains inline conditionals - manual conversion needed`);

        // Add a comment to the file indicating it needs manual conversion
        const updatedContent = `// TODO: Convert this file to use useTranslations hook instead of inline conditionals\n// See src/components/sections/Hero.tsx and src/components/sections/FAQ.tsx for examples\n${content}`;

        if (!content.startsWith('// TODO: Convert this file')) {
          fs.writeFileSync(file, updatedContent);
          this.fixes++;
          console.log(`    ✅ Added conversion notice to ${file}`);
        }
      }
    }

    console.log('');
  }

  async fixHardcodedText() {
    console.log('🔍 Fixing hardcoded text in components...');

    const patterns = [
      {
        files: 'src/components/**/*.{tsx,ts}',
        replacements: [
          // Common stats text
          { from: '"Years Experience"', to: '{tStats("years_experience")}' },
          { from: '"Projects Completed"', to: '{tStats("projects_completed")}' },
          { from: '"Satisfaction Rate"', to: '{tStats("satisfaction_rate")}' },
          { from: '"Support Available"', to: '{tStats("support_available")}' },
          { from: '"Happy Clients"', to: '{tStats("happy_clients")}' },
          { from: '"Average Rating"', to: '{tStats("average_rating")}' },
        ],
        addImport: 'const tStats = useTranslations("stats");'
      }
    ];

    for (const pattern of patterns) {
      const files = glob.sync(pattern.files, { ignore: ['**/node_modules/**', '**/.next/**'] });

      for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Apply replacements
        for (const replacement of pattern.replacements) {
          if (content.includes(replacement.from)) {
            content = content.replace(new RegExp(replacement.from, 'g'), replacement.to);
            modified = true;
            console.log(`    ✅ Fixed hardcoded text in ${file}: ${replacement.from}`);
          }
        }

        // Add translation hook if replacements were made
        if (modified && pattern.addImport) {
          // Check if useTranslations is already imported
          if (content.includes('useTranslations') && !content.includes('tStats')) {
            // Add the stats translation hook after existing useTranslations calls
            const hookRegex = /(const t[A-Za-z]* = useTranslations\([^)]+\);)/g;
            const matches = content.match(hookRegex);
            if (matches && matches.length > 0) {
              const lastHook = matches[matches.length - 1];
              content = content.replace(lastHook, `${lastHook}\n  ${pattern.addImport}`);
            }
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.fixes++;
        }
      }
    }

    console.log('');
  }
}

// Run the fixer
async function main() {
  const fixer = new TranslationFixer();
  await fixer.fix();
}

if (require.main === module) {
  main().catch(error => {
    console.error('Error running translation fixer:', error);
    process.exit(1);
  });
}

module.exports = TranslationFixer;