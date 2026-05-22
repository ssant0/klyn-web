# AGENTS.md — Klyn

## Commands

```bash
npm run dev        # localhost:4321
npm run build      # output ./dist/
npm run preview    # preview production build
npm run astro      # Astro CLI
```

No test/lint/typecheck commands configured. Biome 2.4.9 in devDependencies but no config file — not wired.

## Architecture

- **Astro 6 static site** (`output: 'static'`). Deployed to Cloudflare Pages via Git integration (auto on `main` push) or `wrangler pages deploy`.
- **CSS: Bootstrap 5 only** — pre-compiled bundles in `public/assets/css/`. Do NOT add Tailwind.
- Brand colors via inline styles: `#6cace3` (blue), `#fab60a` (gold). No custom Bootstrap theme.

## Page structure

- Layout: `src/layouts/Layout.astro` — navbar, footer, GTM (`GTM-MD6LZ974`), schema.org JSON-LD (WholesaleStore, Organization, WebSite), floating WhatsApp button.
- `src/pages/links.astro` is **standalone** (no Layout, no navbar/footer, `noindex`). Has its own GTM + Bootstrap bundles.
- Footer rendered via `<slot name="footer">` — can be overridden per page.
- Active route in Navbar: exact match for `/`, `startsWith` for others.
- Pages: `/` · `/nosotros` · `/productos` · `/contacto` · `/aviso-de-privacidad` · `/links`

## Conventions

- `.shadow-soft` for subtle depth. Never combine with `.border` — use `border-0` instead.
- Logo: `public/assets/logo/klyn-logotipo.svg`. On dark backgrounds: `filter: brightness(0) invert(1)`.
- Per-page schema: use `<script slot="head-schema" type="application/ld+json">` (see `nosotros.astro` for pattern).
- Site is Spanish: `lang="es"`, `og:locale="es_MX"`, `hreflang="es-MX"`.

## Security / Analytics

- CSP and security headers in `public/_headers` — edit that file to add new external origins.
- GA4 + Meta Pixel fired through GTM, not hardcoded.
- GTM noscript needs `frame-src https://www.googletagmanager.com` in CSP.

## Contact

- WhatsApp: `https://wa.me/526681629654` · Tel: `+526681629654` · Email: `contacto@klyn.com.mx`
- Social: Facebook / Instagram (`@klyn.com.mx`) / LinkedIn / Google Maps

## Misc

- `pnpm-workspace.yaml` has `allowBuilds` for esbuild, sharp, workerd. `package-lock.json` also present.
- Wrangler: `pages_build_output_dir: ./dist`, compat `2026-02-18`, `nodejs_compat`.
- Astro `is:inline` used for bundled JS in `public/assets/js/`.
- Logo SVG `viewBox="0 0 536 301"`, rendered at `height="72" width="128"`.
- Address: Melchor Ocampo 1054, Colonia Romanillo, Los Mochis, Sinaloa, CP 81285.
- Hours: Mon–Fri 9:00–18:00, Sat 9:30–13:30.
