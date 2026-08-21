# skyepowered.com

One-page site for **Skye Powered, LLC**. Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind CSS v4. Statically rendered — no database, no API routes.

## Develop

```bash
npm run dev
```

http://localhost:3000

```bash
npm run build   # production build
npm run lint    # eslint
```

## Edit the content

Everything text-and-links lives in [`src/lib/site.ts`](src/lib/site.ts) —
company name, tagline, email, and the GitHub / LinkedIn / kevbarnes.com links.

The prose paragraph is in [`src/app/page.tsx`](src/app/page.tsx).

## Adding privacy policies / terms later

1. Create the page, e.g. `src/app/legal/privacy/page.tsx`.
2. Add it to `legalLinks` in `src/lib/site.ts`.

The footer legal row renders itself from that array and stays hidden while the
array is empty. `sitemap.ts` lists only the home page today — add new routes
there as you go.

## The sky background

`src/components/SkyBackground.tsx` plus the sky section of
`src/app/globals.css`. SVG clouds drifting right-to-left across three depth
tiers, animated entirely in CSS — no three.js, no canvas, no extra dependency,
and it holds still under `prefers-reduced-motion`.

Tune the clouds by editing the `clouds` array (position, size, blur, speed).
Day/night palettes are CSS custom properties at the top of `globals.css` and
follow the OS `prefers-color-scheme`.

If it ever needs real volumetric depth, swap `<SkyBackground />` in
`src/app/layout.tsx` for a three.js canvas — nothing else on the page depends
on it.

## Deploy

Static output, so anything works. Vercel is the least-effort path: import the
repo, add `skyepowered.com` as a custom domain, point DNS. No environment
variables are needed.
