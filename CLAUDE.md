# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:5173
pnpm build      # Type-check (tsc -b) then build to dist/
pnpm preview    # Serve the dist/ build locally
pnpm lint       # ESLint with TypeScript + React rules
```

## Stack

- **React 19 + TypeScript**, built with **Vite 7**
- **Tailwind CSS 3 + DaisyUI 4** for styling (dark theme default)
- **i18next** for FR/EN translations — all user-visible text lives in `src/i18n/locales/{fr,en}.json`; never hardcode strings in components
- **Embla Carousel** for the projects slider, **SweetAlert2** for the contact form feedback, **Web3Forms** as the form backend
- Deployed on **Hostinger** at `paulblanc.fr`

## Architecture

Single-page portfolio with one route. `src/App.tsx` is the shell (background blobs + animated layers); each section is a standalone component in `src/components/`.

**Key constraints:**
- Every piece of content is i18n-keyed — add to both `fr.json` and `en.json` together
- Custom animations (float, shimmer, fade-up, blob-pulse, scale-in) are declared in `tailwind.config.js`; add new ones there, not inline
- DaisyUI theme tokens (e.g. `bg-base-100`, `text-primary`) drive colors — avoid raw hex values
- Assets are WebP images in `src/assets/`; keep new images compressed

## SEO

Meta tags, Open Graph, Twitter Card, canonical URL, and JSON-LD structured data are all in `index.html`. The site targets French-speaking clients searching for "Paul Blanc", "consultant data Lyon", "freelance data", and related terms.
