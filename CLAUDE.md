# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual construction/renovation business website built with **Next.js 15** and **TypeScript**. The project supports internationalization (i18n) for English, French, and Arabic languages with RTL support for Arabic.

## Architecture

### Framework & Tech Stack
- **Next.js 15** with App Router (`app/` directory structure)
- **TypeScript** with relaxed strict mode
- **next-intl** for internationalization
- **Tailwind CSS** for styling
- **Radix UI** components with shadcn/ui
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **Supabase** integration (configured but not fully implemented)

### Project Structure
```
├── app/[locale]/           # Next.js App Router with locale parameter
├── src/
│   ├── components/
│   │   ├── ui/            # Radix UI components (shadcn/ui)
│   │   ├── sections/      # Page sections (Hero, About, Services, etc.)
│   │   ├── layout/        # Header, Footer
│   │   ├── contact/       # Contact form
│   │   ├── projects/      # Project gallery
│   │   └── services/      # Service grid
│   ├── pages/            # Page components (AboutPage, ContactPage, etc.)
│   ├── providers/        # Theme and Locale providers
│   └── types/           # TypeScript types including Supabase types
├── messages/            # i18n JSON files (en.json, fr.json, ar.json)
└── middleware.ts        # Next.js middleware for locale handling
```

### Internationalization
- Uses **next-intl** with locale-based routing (`/en`, `/fr`, `/ar`)
- Messages stored in `messages/{locale}.json`
- RTL support for Arabic via `dir="rtl"` attribute
- Middleware handles locale detection and routing
- Custom validation scripts (`scripts/validate-translations.js`, `scripts/fix-translations.js`) ensure translation consistency
- Translation validation runs automatically during prebuild

## Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production server
npm start

# Linting (with fallback to prevent failures)
npm run lint || true

# Generate Supabase types
npm run types:supabase

# Translation validation and fixing
npm run translations:validate   # Validate translations across all locales
npm run translations:fix        # Auto-fix translation issues
npm run translations:check      # Validate + confirm all translations are valid
```

## Component Architecture

### UI Components
- Uses **shadcn/ui** components built on **Radix UI**
- All UI components in `src/components/ui/`
- Consistent styling with **Tailwind CSS** and **CVA** (Class Variance Authority)

### Page Structure
- Main home component: `src/components/home.tsx`
- Modular sections: Hero, About, Services, Projects, Testimonials, Contact
- Each section supports multilingual content with inline translations

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **next-themes** for dark/light mode support
- **Framer Motion** for smooth animations
- Responsive design with mobile-first approach

## Key Features

### Multilingual Support
- English (en), French (fr), Arabic (ar)
- RTL layout support for Arabic
- Locale-based routing with Next.js App Router

### Component Features
- Contact form with React Hook Form validation
- Project gallery with image optimization
- Service carousel with responsive cards and image focus
- Testimonials with star ratings
- Animated hero section with Framer Motion

## Configuration Files

### TypeScript Configuration
- `strict: false` in tsconfig.json but `ignoreBuildErrors: false` in Next.js config (build will fail on TS errors)
- Path mapping: `@/*` → `./src/*`
- Next.js plugin enabled

### Next.js Configuration
- **next-intl** plugin integration
- Image domains: `images.unsplash.com`, `api.dicebear.com`
- Sitemap rewrite rule to `/api/sitemap`
- File tracing root configured for monorepo compatibility

## Notes for Development

- The project uses Next.js 15 with App Router (note: README.md incorrectly mentions Vite and is outdated)
- The project has both App Router pages in `app/[locale]/` and component pages in `src/pages/` - prefer App Router for new pages
- Supabase integration is partially configured but may not be fully implemented
- Extensive UI component library available through shadcn/ui
- All text content uses inline translations rather than translation keys
- Images use external sources (Unsplash, Dicebear) for placeholders
- Translation validation scripts automatically check for missing keys and inconsistencies across locales