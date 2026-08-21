# Skye Powered website

One-page marketing site for skyepowered.com. Next.js 16 App Router, React 19,
TypeScript, Tailwind CSS v4. Fully static.

## Layout

- `src/lib/site.ts` - all copy and links. Change content here, not in components.
- `src/app/page.tsx` - the single page.
- `src/app/layout.tsx` - metadata, fonts, mounts `<SkyBackground />`.
- `src/app/globals.css` - theme tokens (day/night via `prefers-color-scheme`),
  sky/cloud animation, `.surface` and `.link-tile` helpers.
- `src/components/SkyBackground.tsx` - CSS/SVG animated clouds, no dependencies.
- `src/components/Logo.tsx` - wraps `public/logo.svg`.

## Conventions

- Colors come from CSS custom properties surfaced to Tailwind via
  `@theme inline` (`bg-background`, `text-foreground`, `text-muted`,
  `text-on-accent`). Don't hardcode hex values in components.
- Server components by default; nothing here needs `"use client"`.
- Keep the page static with no runtime data fetching.

## Checks

```bash
npm run lint && npm run build
```
