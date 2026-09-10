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
- **JS: `public/assets/js/`** — `bootstrap.bundle.min.js` (solo Collapse: navbar + FAQ) + `aos.js` + `klyn.js` (init AOS `{duration:700, easing:'ease-out-quad', once:true, startEvent:'load'}` + countup ligero vía MutationObserver sobre `.aos-animate`). El legacy Landkit `vendor.bundle.js`/`theme.bundle.js` se eliminó (Fix 4) — no restaurarlo.
- Brand colors via inline styles: `#6cace3` (blue), `#fab60a` (gold). No custom Bootstrap theme.

## Page structure

- Layout: `src/layouts/Layout.astro` — navbar, footer, GTM (`GTM-MD6LZ974`), schema.org JSON-LD (WholesaleStore, Organization, WebSite), floating WhatsApp button.
- Blog layout: `src/layouts/BlogLayout.astro` — wraps Layout, adds BlogPosting + BreadcrumbList schema per post.
- `src/pages/links.astro` is **standalone** (no Layout, no navbar/footer). Has its own GTM + Bootstrap bundles.
- Footer rendered via `<slot name="footer">` — can be overridden per page.
- Active route in Navbar: exact match for `/`, `startsWith` for others.
- Pages: `/` · `/nosotros` · `/productos` · `/contacto` · `/aviso-de-privacidad` · `/links` · `/blog/` · `/blog/posts/[slug]/`

## Blog

- Content collection built with `@astrojs/mdx` + `astro/loaders` (glob loader).
- Posts: `src/content/blog/*.mdx` — frontmatter: title, description, datePublished, author, tags, category.
- `src/content.config.ts` defines the blog collection schema.
- Blog post page: `src/pages/blog/posts/[slug].astro` — renders MDX with `<Content />` via `render()` from `astro:content`.
- Blog listing: `src/pages/blog/index.astro` — sorted by date desc.
- On each post: BlogPosting JSON-LD + BreadcrumbList, SEO meta, OG/Twitter, canonical, hreflang es-MX + x-default.
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

## Business facts

- Nombre: **KLYN solutions**. Slogan: "El aliado que tu negocio necesita!". Fundada 2025.
- Diferenciador: suministros básicos (limpieza + papelería) de un solo proveedor; cotización rápida, trato directo.
- Valores: trabajo en equipo, constancia. Cliente ideal: dueño/administrador de negocio (~45 años).
- Top ventas: cloro, limpiador multiusos, jabón líquido. Precios fijos que mejoran por volumen.
- Competidores: Provelim, Cleep, Vima, Proveedora.
- FAQs de clientes: ¿servicio a domicilio? · ¿aceptan tarjeta? · ¿facturan? · ¿dan crédito? · ¿mejoran precios?
- Sin testimonios, certificaciones ni campañas pagadas aún. Única sucursal: Los Mochis.

## Content Strategy

- Patrón de contenido blog: frontmatter → `<div class="key-takeaway">` (respuesta directa, < 50 palabras, extractable por AI) → H2/H3 con tablas comparativas y listas → `<BlogFaq>` component con FAQPage schema (3-5 Q&A) → Conclusión + CTA WhatsApp.
- Categorías (`content.config.ts` enum): `limpieza`, `papeleria`, `industrias`, `guias`.
- **GEO optimization:** answer-first format en H2, tablas para datos comparativos (citables por LLMs), headings con preguntas naturales, datos específicos/estadísticas.
- **SEO on-page:** keyword principal en title, description, H2s, primer párrafo visible; internal links contextuales a `/productos/` y WhatsApp; BlogPosting + BreadcrumbList + FAQPage schema vía BlogLayout.
- **Backlog SEO:** 29 fixes del audit + plan de 12 artículos. Leyenda: `[x]` completo · `[~]` en progreso · `[ ]` pendiente.

### Backlog SEO — fixes

| # | Fix | Estado |
|---|-----|--------|
| 1 | 301 apex `http://klyn.com.mx` → `https://www.` (522) — Cloudflare dashboard | [ ] |
| 2 | De-orphan `/instituciones-educativas/` + CTA a `/productos/` | [ ] |
| 3 | Trailing slashes en links internos | [x] |
| 4 | `vendor.bundle.js` → bootstrap.bundle + AOS | [x] |
| 5 | `font-display: swap` + preload heading font — CSS bundle, `Layout.astro` | [ ] |
| 6 | Tap targets catálogo ≥44px | [x] |
| 7 | Titles ≤60 / descriptions ≤160 (5 posts) | [x] |
| 8 | Autores humanos + personas reales en nosotros | [~] |
| 9 | `/links/` noindex + fuera de sitemap | [x] |
| 10 | Cache headers `/_astro/*` inmutable | [x] |
| 11 | Schema URLs con slash + nodo `Blog` en `/blog/` | [ ] |
| 12 | ItemList de Product quote-only en `/productos` | [x] |
| 13 | Feather icon-font → SVGs inline | [ ] |
| 14 | Categorías de `/productos` como H2 | [x] |
| 15 | Related-posts + cross-links post→post — `[slug].astro` | [ ] |
| 16 | Reconciliar trust numbers (200+ vs reales) | [~] |
| 17 | FAQ diferenciado en `/` vs `/contacto/` | [ ] |
| 18 | Expandir 2 posts <800w + tabla comparativa — MDX | [ ] |
| 19 | Tipografía catálogo ≥12px y más oscura | [x] |
| 20 | Reducir DOM de `/productos/` <1,500 nodos | [ ] |
| 21 | Fotos reales de producto (top 20) — `products.ts` `image` | [~] |
| 22 | `lastmod` en sitemap | [x] |
| 23 | Imágenes por post (BlogPosting) | [ ] |
| 24 | GBP en `sameAs` + address en Organization | [x] |
| 25 | Preconnect GTM + PurgeCSS + patrón muerto 404 | [~] |
| 26 | Colisión WhatsApp float en mobile | [ ] |
| 27 | Contraste oro `#fab60a` sobre blanco → `#b97e00` | [ ] |
| 28 | RSS feed del blog | [ ] |
| 29 | Cache rule HTML — Cloudflare dashboard | [ ] |

### Backlog SEO — artículos (12)

- [x] 1. Guía completa de productos de limpieza profesional — `guia-productos-limpieza-profesional`
- [x] 2. ¿Cloro o desinfectante? — `cloro-o-desinfectante-cuando-usar`
- [x] 3. Cómo elegir proveedor de suministros — `como-elegir-proveedor`
- [x] 4. Suministros de papelería para oficina — `suministros-papeleria-oficina`
- [x] 5. Guía de limpieza para hoteles — `guia-limpieza-hoteles`
- [ ] 6. Limpieza para escuelas → cross-link a `/instituciones-educativas/` (Fix 2)
- [ ] 7. Limpieza para restaurantes: desengrasantes y sanidad
- [ ] 8. Trapos microfibra vs algodón
- [ ] 9. Cómo calcular consumo mensual de suministros
- [ ] 10. Químicos de limpieza industrial en México
- [ ] 11. Importancia de la limpieza profesional en espacios de trabajo
- [ ] 12. Cómo organizar el almacén de suministros

## Productos data (`src/data/products.ts`)

- Standalone data file exporting `Product` interface and `products` array (119 items).
- Fields: `id`, `name`, `category`, `subcategory`, `categoryKey` (`quimicos|herramientas|higienicos|papeleria`), `accent` (`blue|gold`).
- Optional fields: `image` (future photo path, placeholder emoji shown until set), `variants` (`ProductVariant[]` — `{ key, label, options[] }`; 23 products have them, e.g. presentación 1L/3.75L/5L/20L, esencia, talla, color).
- Reusable presets at top of file: `PRES_LIQUIDO`, `PRES_POLVO`.
- Imported by `src/pages/productos.astro`. Ready to reuse in other pages.

## Catálogo (`/productos`) — delivery-app style

Main catalog at `src/pages/productos.astro`. UX modeled after Uber Eats / Rappi. Quote-only (no prices); order sent via WhatsApp/Email.

- **Product cards** (`.pc`): image area on top (aspect 4/3) — real `<img>` if `p.image`, else emoji placeholder by subcategory (`SUB_EMOJI` map in frontmatter). Round `+` button (`.pc__add`) bottom-right. Products with variants show "Personalizable" hint and a navy qty badge (`.pc__qty`) when in cart.
- **No-variant products**: `+` adds directly and morphs into an inline stepper (`.pc__stepper`).
- **Variant products**: `+` (or card tap) opens the **product bottom sheet** (`#productSheet`) — bottom sheet on mobile, full-height right side panel on ≥768px (430px, same pattern as cart drawer). Variant groups render as single-select chips (`.vchip`), default = first option. Footer: qty stepper + "Agregar al pedido".
- **Floating cart button** (`#cartFab`): centered navy pill with count badge, slides in when cart non-empty. Also lifts the Layout's WhatsApp float to `bottom: 92px` via JS.
- **Cart drawer** (`#cartDrawer`): right panel on desktop (430px), 92vh bottom sheet on mobile. Lines (`.cline`) with emoji thumb, options text, stepper, delete. Order notes textarea. WhatsApp (primary) + Email buttons. Empty state when no items.
- **Cart model**: `CartLine { key: "${id}|${opts}", id, name, category, emoji, accent, opts, qty }` — lines merge when product + options match. `opts` is pre-formatted (e.g. `"Presentación: 5L · Esencia: Lavanda"`).
- **Persistence**: `localStorage` key `klyn-cart-v1` (`{ lines, notes }`), restored on load; stale product ids dropped.
- **WhatsApp message**: grouped by category with markdown (`*Category*`), lines as `• 2× Fabuloso (Presentación: 5L · Esencia: Lavanda)`, plus optional notes.
- **Shared overlay** (`#overlay`) + `Esc` close both panels; body scroll locked while open. z-index: overlay 10000, sheet/drawer 10001 (above WhatsApp float's 9999).
- **Sidebar filters** (`.sidebar-btn` / `.sidebar-sub`, `.is-active`) on desktop; **mobile pills** (`.mob-pill`) + search live in a sticky `.tools-bar` (`top: 0` — navbar is not fixed).
- **Real-time search**: vanilla JS `input` event, filters `allCards` by `data-name`.
- `define:vars={{ clientProducts }}` passes products + emoji + variants to client as `window.__KLYN_PRODUCTS__`.
- **Gotcha**: elements created via `createElement` (chips, cart lines) don't get Astro's scoped-CSS attribute — their styles live in a separate `<style is:global>` block. Keep JS-generated element styles there.

## Misc

- `pnpm-workspace.yaml` has `allowBuilds` for esbuild, sharp, workerd. `package-lock.json` also present.
- Wrangler: `pages_build_output_dir: ./dist`, compat `2026-02-18`, `nodejs_compat`.
- Astro `is:inline` used for bundled JS in `public/assets/js/`.
- Logo SVG `viewBox="0 0 536 301"`, rendered at `height="72" width="128"`.
- Address: Melchor Ocampo 1054, Colonia Romanillo, Los Mochis, Sinaloa, CP 81285.
- Hours: Mon–Fri 9:00–18:00, Sat 9:30–13:30.
