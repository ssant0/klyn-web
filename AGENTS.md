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
- Blog layout: `src/layouts/BlogLayout.astro` — wraps Layout, adds Article + BreadcrumbList schema per post.
- `src/pages/links.astro` is **standalone** (no Layout, no navbar/footer). Has its own GTM + Bootstrap bundles.
- Footer rendered via `<slot name="footer">` — can be overridden per page.
- Active route in Navbar: exact match for `/`, `startsWith` for others.
- Pages: `/` · `/nosotros` · `/productos` · `/productos-v2` · `/contacto` · `/aviso-de-privacidad` · `/links` · `/blog/` · `/blog/posts/[slug]/`

## Blog

- Content collection built with `@astrojs/mdx` + `astro/loaders` (glob loader).
- Posts: `src/content/blog/*.mdx` — frontmatter: title, description, datePublished, author, tags, category.
- `src/content.config.ts` defines the blog collection schema.
- Blog post page: `src/pages/blog/posts/[slug].astro` — renders MDX with `<Content />` via `render()` from `astro:content`.
- Blog listing: `src/pages/blog/index.astro` — sorted by date desc.
- On each post: Article JSON-LD + BreadcrumbList, SEO meta, OG/Twitter, canonical, hreflang es-MX + x-default.
- Blog link added to Navbar and Footer.

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

## Content Strategy

- `seo-ToDo.md` tiene el plan de 12 artículos (3 completados, 9 pendientes).
- Patrón de contenido blog: frontmatter → `<div class="key-takeaway">` (respuesta directa, < 50 palabras, extractable por AI) → H2/H3 con tablas comparativas y listas → FAQ inline (3-5 Q&A) → Conclusión + CTA WhatsApp.
- Categorías (`content.config.ts` enum): `limpieza`, `papeleria`, `industrias`, `guias`.
- **GEO optimization:** answer-first format en H2, tablas para datos comparativos (citables por LLMs), headings con preguntas naturales, datos específicos/estadísticas.
- **SEO on-page:** keyword principal en title, description, H2s, primer párrafo visible; internal links contextuales a `/productos/` y WhatsApp; Article + BreadcrumbList schema vía BlogLayout.

## Productos data (`src/data/products.ts`)

- Standalone data file exporting `Product` interface and `products` array (119 items).
- Fields: `id`, `name`, `category`, `subcategory`, `categoryKey` (`quimicos|herramientas|higienicos|papeleria`), `accent` (`blue|gold`).
- Imported by `src/pages/productos.astro`. Ready to reuse in other pages.

## Catálogo (`/productos`)

Main catalog at `src/pages/productos.astro`. Full filter + quote builder:

- **Card selection**: click/tap a `.pc` card to toggle selection. Cards get `.sel` class. Selected state persists across filter/tab switches.
- **Add-to-quote badge**: each card has a `+` icon in a squared badge (`border-radius: 6px`) at `bottom: 8px; right: 8px`. When selected, the `+` fades out and a checkmark scales in with brand colors (`#6cace3` / `#fab60a`). CSS-only transition — no JS required for badge animation.
- **Sidebar filters**: `.sidebar-btn` for categories, `.sidebar-sub` for subcategories. Active filter gets `.is-active`.
- **Mobile filter strip**: horizontally scrollable pills (`.mob-pill`), same filter logic.
- **Real-time search**: vanilla JS `input` event, filters `allCards` by `data-name`. Clear button appears when query active.
- **Quote bar** (`#quoteBar`): fixed bottom bar slides up when ≥1 product selected. Shows category chips with counts, plus two action buttons:
  - **WhatsApp** (`#quoteWaBtn`): builds grouped-by-category message with markdown (`*Category*`, `• items`) → `wa.me` URL.
  - **Email** (`#quoteMailBtn`): same grouped message → `mailto:contacto@klyn.com.mx` with subject.
  - **Clear** (`#quoteClearBtn`): resets all selections.
- `define:vars={{ products }}` passes the full array to client as `window.__KLYN_PRODUCTS__`.

## Productos v2 (`/productos-v2`)

Experimental catalog page at `src/pages/productos-v2.astro` with three UX improvements:

- **Bootstrap 5 nav-tabs** — category tabs (Químicos, Herramientas, Higiénicos, Papelería) with product count badges. Active tab uses `#6cace3` background. Tabs scroll horizontally on mobile via `overflow-x: auto` + `flex-nowrap`.
- **Real-time search** — vanilla JS on `input` event, filters `.product-row` visibility across active tab-pane. Shows/hides `.subcategory-card` and `.no-results` state. Clear button appears when query active.
- **Quote builder** — `<input type="checkbox">` per product with `data-name`, `data-category`, `data-subcategory` attributes. "Select all / Deselect all" button per subcategory card. Sticky `fixed-bottom` bar with count + WhatsApp button that builds grouped-by-category message. Event delegation via document `change`/`click`.

### Patterns
- `data-category="Químicos|Herramientas|Higiénicos|Papelería"` — used for grouping in WhatsApp message.
- `data-name` — product name (unique identifier for selection Map).
- `CSS.escape()` used in selector construction for safe querying.
- Quote state (`selected` Map) persists across tab switches.
- Search scoped to active tab only; re-applies on `shown.bs.tab` event.

## Misc

- `pnpm-workspace.yaml` has `allowBuilds` for esbuild, sharp, workerd. `package-lock.json` also present.
- Wrangler: `pages_build_output_dir: ./dist`, compat `2026-02-18`, `nodejs_compat`.
- Astro `is:inline` used for bundled JS in `public/assets/js/`.
- Logo SVG `viewBox="0 0 536 301"`, rendered at `height="72" width="128"`.
- Address: Melchor Ocampo 1054, Colonia Romanillo, Los Mochis, Sinaloa, CP 81285.
- Hours: Mon–Fri 9:00–18:00, Sat 9:30–13:30.
