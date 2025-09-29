# Repository Guidelines

## Project Structure & Module Organization
- `app/` runs the Next.js App Router; locale routes in `app/[locale]/` render components from `src`.
- `src/components` groups feature UI (`layout`, `services`, `projects`, `contact`, `sections`); place additions beside peers.
- `src/providers` centralizes shared context, while `src/lib` and `src/data` separate utilities from structured copy.
- `messages/` and `scripts/` manage localisation, and `public/` stores shared static assets and SEO files.

## Build, Test, and Development Commands
- `npm run dev` starts the Next.js dev server with hot reload and locale routing.
- `npm run build` produces the production bundle; run before PRs that touch infra or dependencies.
- `npm run start` serves the build locally for smoke tests.
- `npm run lint` runs ESLint + TypeScript; fix or justify warnings before committing.
- Localisation upkeep: `npm run translations:validate`, `npm run translations:fix`, plus `npm run types:supabase` to refresh generated types.

## Coding Style & Naming Conventions
- Use TypeScript everywhere; name components with `PascalCase` files and default exports when singular.
- Prefer functional components and hooks, colocating feature hooks with their consumers.
- Style with Tailwind utilities, breaking long class lists over lines as in `src/components/home.tsx`.
- Pull copy through `useTranslations` dotted keys (`home.hero.title`) instead of hard-coded strings.

## Testing Guidelines
- Use Playwright for e2e coverage; store specs in `tests/e2e` as `*.spec.ts` and run `npx playwright test`.
- Cover new flows (navigation, forms, RTL) and capture responsive variants when UI changes.
- Add React Testing Library smoke tests when components gain stateful logic or branching UI.
- Run `npm run lint` and `npm run translations:validate` before pushing to keep CI green.

## Commit & Pull Request Guidelines
- Write imperative, sentence-case commit subjects under ~72 characters (e.g., `Improve hero carousel animation`).
- Reference related issues with `#id` in commits or PR descriptions.
- PRs should state what changed, why it matters, proof of testing (`npm run build`, Playwright output), and UI screenshots or GIFs.
- Flag translation updates or regenerated Supabase types so reviewers can skim generated diffs.

## Internationalization Workflow
- Locale negotiation lives in `middleware.ts`; new routes must pass through the active `locale` prop.
- Keep translations in `messages/{locale}.json`; run `npm run translations:check` after edits to confirm parity.
- For RTL locales like Arabic, verify layout across breakpoints to confirm logical order and `dir="rtl"`.
- Note nuanced copy or layout rules in `TRANSLATION_GUIDE.md` for translators and future contributors.
