# Translation System Guide

This guide explains how the translation system works in this multilingual Next.js application and how to ensure all content is properly translated.

## Overview

The application uses **next-intl** for internationalization with support for:
- 🇺🇸 English (en) - Primary language
- 🇫🇷 French (fr)
- 🇸🇦 Arabic (ar) - with RTL support

## Translation Files Structure

```
messages/
├── en.json     # English translations
├── fr.json     # French translations
└── ar.json     # Arabic translations
```

Each file contains nested objects with translation keys:

```json
{
  "hero": {
    "title": "Professional Construction & Renovation Services",
    "subtitle": "Transform your space...",
    "cta": "Get Free Quote"
  },
  "stats": {
    "years_experience": "Years Experience",
    "projects_completed": "Projects Completed"
  }
}
```

## How to Use Translations in Components

### 1. Import the Hook
```tsx
import { useTranslations } from 'next-intl';
```

### 2. Use in Component
```tsx
export function MyComponent() {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{tStats('years_experience')}</p>
    </div>
  );
}
```

### 3. For Complex Data (Arrays/Objects)
```tsx
const faqItems = t.raw('items') as FAQItem[];
```

## What NOT to Do ❌

### Inline Conditional Translations
```tsx
// DON'T DO THIS
const text = locale === "en" ? "Hello" : locale === "fr" ? "Bonjour" : "مرحبا";
```

### Hardcoded Text
```tsx
// DON'T DO THIS
<div>Years Experience</div>
<div>Contact Now</div>
```

## Validation & Automation

### Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run translations:validate` | Check for translation issues |
| `npm run translations:fix` | Auto-fix common problems |
| `npm run translations:check` | Full validation check |

### Pre-commit Hook

A pre-commit hook automatically runs translation validation before each commit. If validation fails, the commit is blocked until issues are fixed.

### Build-time Validation

The `prebuild` script ensures translations are valid before building for production.

## Common Translation Issues & Solutions

### 1. Missing Translation Keys

**Problem**: Key exists in `en.json` but not in `fr.json` or `ar.json`

**Solution**: Add the missing keys to all locale files
```bash
npm run translations:validate  # Shows missing keys
```

### 2. Hardcoded Text

**Problem**: Text directly in components instead of translation keys

**Solution**:
1. Add text to translation files
2. Use `useTranslations` hook
3. Replace hardcoded text with `t('key')`

### 3. Inline Conditionals

**Problem**: `locale === "en" ? "text" : ...` patterns

**Solution**: Move to translation files and use proper hooks

### 4. Inconsistent Structure

**Problem**: Different structure between locale files

**Solution**: Ensure all locale files have identical key structure

## Adding New Translations

### 1. Add to All Locale Files
```json
// messages/en.json
{
  "new_section": {
    "title": "New Section Title",
    "description": "Section description"
  }
}
```

### 2. Add French Translation
```json
// messages/fr.json
{
  "new_section": {
    "title": "Titre de Nouvelle Section",
    "description": "Description de la section"
  }
}
```

### 3. Add Arabic Translation
```json
// messages/ar.json
{
  "new_section": {
    "title": "عنوان القسم الجديد",
    "description": "وصف القسم"
  }
}
```

### 4. Use in Component
```tsx
const t = useTranslations('new_section');
// Use t('title'), t('description')
```

## Best Practices

### ✅ Do's

1. **Always use translation keys** for user-facing text
2. **Keep consistent structure** across all locale files
3. **Use descriptive key names** (`hero.title` not `h1`)
4. **Group related translations** in logical sections
5. **Run validation regularly** during development
6. **Test in all languages** before deploying

### ❌ Don'ts

1. **Don't hardcode text** in components
2. **Don't use inline conditionals** for translations
3. **Don't forget to translate new content**
4. **Don't break the translation structure**
5. **Don't commit without validation passing**

## Workflow for New Features

1. **Plan translations**: Identify all text that needs translation
2. **Add to en.json**: Create keys and English text
3. **Add to fr.json & ar.json**: Translate to French and Arabic
4. **Use in components**: Implement with `useTranslations`
5. **Validate**: Run `npm run translations:validate`
6. **Test**: Check all locales work correctly
7. **Commit**: Pre-commit hook will validate automatically

## Troubleshooting

### Validation Fails
1. Run `npm run translations:validate` to see specific issues
2. Use `npm run translations:fix` for automatic fixes
3. Manually fix complex issues (inline conditionals)

### Missing Translations
1. Check which keys are missing in validation output
2. Add missing keys to appropriate locale files
3. Ensure structure matches across all files

### Build Fails
1. Translation validation runs before build
2. Fix all validation errors first
3. Run `npm run translations:check` to verify

## File Locations

### Components with Proper Translations ✅
- `src/components/sections/Hero.tsx`
- `src/components/sections/FAQ.tsx`

### Legacy Files Needing Conversion ⚠️
- `src/legacy-pages/*.tsx` (marked with TODO comments)

### Translation Files
- `messages/en.json`
- `messages/fr.json`
- `messages/ar.json`

### Validation Scripts
- `scripts/validate-translations.js`
- `scripts/fix-translations.js`

## Getting Help

1. Run validation scripts to identify specific issues
2. Check this guide for common problems and solutions
3. Look at properly translated components for examples
4. Test in all three languages before finalizing changes

Remember: **Every user-facing text should be translatable!**