# SEO ToDo — Klyn.com.mx

> Plan maestro de ejecución para **resolver los 29 fixes del audit SEO** (`.seo-audit/ACTION-PLAN.md` + reportes de detalle) **más** la estrategia de contenido blog/GEO/AEO/AIO.
>
> Fuentes: `FULL-AUDIT-REPORT.md` (score 76/100) · `ACTION-PLAN.md` (29 items) · `technical.md` · `content.md` · `schema.md` · `performance.md` · `visual.md` · `AGENTS.md`.

## Leyenda de estado

| Símbolo | Significado |
|---|---|
| `[ ]` | Pendiente |
| `[~]` | En progreso |
| `[x]` | Completado |

---

## Estado actual verificado (2026-08-24)

> **Actualización 2026-09-07 (quick wins de código):** completados Fixes 3, 6, 7, 9, 10, 12, 14, 19, 22, 24, 25 (parcial: falta PurgeCSS y patrón muerto) y 8/16 (parciales). Verificar con re-audit.

- **Fix #4 completado** (bundle JS): 719KB → 98KB raw; `bootstrap.bundle.min.js` + `aos.js` + `klyn.js` en `public/assets/js/`. Resuelve también el warning de Jarallax.
- Fix #21 (fotos de producto) **arrancó**: `public/assets/img/products/blanca-nieves-10kg.webp` + cambio en `src/data/products.ts`.
- Lo que **ya está bien** (no tocar, solo verificar tras cada cambio):
  - Canonical absoluto y auto-referencial en 12/13 páginas; hreflang `es-MX` + `x-default`; títulos/descripciones únicos; 1 H1 por página.
  - Catálogo 100% server-rendered (191 productos en HTML, sin dependencia de JS).
  - 55/55 bloques JSON-LD válidos; grafo de entidades `#business`/`#organization`/`#website` con NAP idéntico.
  - Security headers completos (HSTS, CSP, XCTO, XFO, Referrer, Permissions) en `public/_headers`.
  - 100% `<img>` con alt + width/height + formatos modernos (SVG/WebP).
  - `llms.txt`, `robots.txt`, sitemap-index → sitemap-0 válidos.
  - Blog: 5 posts con BlogPosting + BreadcrumbList + FAQPage, answer-first, citabilidad 7.6/10.

---

## FIX MASTER — los 29 del ACTION-PLAN (sin saltarse ninguno)

| # | Sev | Fix (resumen) | Estado | Dónde |
|---|-----|---------------|--------|-------|
| 1 | 🔴 | 522 en `http://klyn.com.mx/` → Redirect Rule 301 a `https://www.klyn.com.mx/$1` | [ ] | Cloudflare dashboard |
| 2 | 🟠 | De-orphan `/instituciones-educativas/` + CTA a `/productos/` | [ ] | `Layout.astro`, `index.astro`, `instituciones-educativas.astro`, blog |
| 3 | 🟠 | Trailing slashes en ~120 links internos | [x] | `Navbar.astro`, `Footer.astro`, CTAs páginas |
| 4 | 🟠 | Reemplazar `vendor.bundle.js` (711KB) por bootstrap.bundle + AOS | [x] | `public/assets/js/`, `Layout.astro` |
| 5 | 🟠 | `font-display: swap` ×4 + `rel="preload"` heading font | [ ] | CSS bundle, `Layout.astro` |
| 6 | 🟠 | `.pc__add` y steppers ≥44×44px (hoy 34×34) | [x] | `productos.astro` styles |
| 7 | 🟠 | Titles ≤60 chars y descriptions ≤160 (5 posts) | [x] | `src/content/blog/*.mdx` |
| 8 | 🟠 | Autores humanos con bio + personas reales en nosotros | [~] | MDX, `BlogLayout.astro`, `nosotros.astro` |
| 9 | 🟡 | `/links/`: noindex, fuera de sitemap, canonical/og con slash | [x] | `links.astro`, sitemap |
| 10 | 🟡 | Cache headers: `/_astro/*` inmutable 1 año | [x] | `public/_headers` |
| 11 | 🟡 | Schema URLs con trailing slash (contacto/nosotros/productos) + `Blog` node en `/blog/` | [ ] | `Layout.astro`, page schema slots |
| 12 | 🟡 | ItemList de Product (quote-only, sin offers) en /productos | [x] | `productos.astro` |
| 13 | 🟡 | Reemplazar icon-font Feather (81.6KB) por SVGs inline | [ ] | Layout/icons |
| 14 | 🟡 | Categorías de /productos como `<h2>` (hoy 1 solo H2) | [x] | `productos.astro` |
| 15 | 🟡 | Related-posts + cross-links post→post | [ ] | `BlogLayout.astro` / `[slug].astro` |
| 16 | 🟡 | Reconciliar trust numbers (200+ reales vs 150+/191; testimonios) | [~] | `index.astro`, `instituciones-educativas.astro` |
| 17 | 🟡 | Diferenciar FAQ de 8 preguntas duplicado en `/` y `/contacto/` | [ ] | `index.astro`, `contacto.astro` |
| 18 | 🟡 | Expandir 2 posts <800w + tabla comparativa en guía-productos | [ ] | MDX files |
| 19 | 🟡 | Tipografía catálogo ≥12px y más oscura | [x] | `productos.astro` styles |
| 20 | 🟡 | Reducir DOM de /productos/ (3,416 nodos; 361KB HTML) | [ ] | `productos.astro` |
| 21 | 🟡 | Fotos reales de producto (top 20 primero) | [~] | `src/data/products.ts` `image` + `public/assets/img/products/` |
| 22 | 🔵 | `lastmod` en sitemap | [x] | sitemap config |
| 23 | 🔵 | Imágenes por post (BlogPosting) | [ ] | MDX + `BlogLayout.astro` |
| 24 | 🔵 | Google Business Profile en `sameAs` + `address` en Organization | [x] | `Layout.astro` schema |
| 25 | 🔵 | `preconnect` a GTM; purgar theme CSS; quitar patrón muerto 404 | [~] | `Layout.astro`, CSS |
| 26 | 🔵 | Colisión del float de WhatsApp en mobile | [ ] | Layout/styles |
| 27 | 🔵 | Contraste oro `#fab60a` sobre blanco (≈1.9:1) | [ ] | Layout + pages |
| 28 | 🔵 | RSS feed del blog | [ ] | integración Astro |
| 29 | 🔵 | Cache rule HTML en Cloudflare (`DYNAMIC` hoy) | [ ] | Cloudflare dashboard |

---

## 🔴 FASE 1 — Crítico + higiene de indexación (ROI máximo)

> Orden recomendado por el audit. Objetivo: cerrar el 522, eliminar hops de redirect, limpiar `/links/` y des-orphanizar.

### Fix 1 — 522 `http://klyn.com.mx/` (Cloudflare, 5 min)
- [ ] Cloudflare dashboard → Rules → **Redirect Rules**: `http://klyn.com.mx/*` → 301 → `https://www.klyn.com.mx/$1`.
- [ ] Activar **Always Use HTTPS** para el apex.
- [ ] Verificar: `curl -sI http://klyn.com.mx/` → `301` (no 522). También normalizar el 303 del apex-HTTPS a 301.

### Fix 3 — Trailing slashes en links internos (~120 hops 308) ✅ COMPLETADO (2026-09-07)
- [x] `src/components/Navbar.astro`: `href="/nosotros"` → `/nosotros/`, `/productos/`, `/blog/`, `/contacto/`.
- [x] `src/components/Footer.astro`: ídem + `/aviso-de-privacidad/`.
- [x] CTAs de páginas: `index.astro`, `productos.astro` (2 CTAs), `[slug].astro`, `404.astro`, `nosotros.astro`.
- [x] Normalizar anchors: `/productos#quimicos` → `/productos/#quimicos`, etc.
- [x] Verificar: `rg -n 'href="/(contacto|productos|nosotros|blog)' src/` → 0 coincidencias sin slash.

### Fix 10 — Cache headers ✅ COMPLETADO (2026-09-07)
- [x] En `public/_headers` agregar:
  ```
  /_astro/*
    Cache-Control: public, max-age=31536000, immutable
  /assets/fonts/*
    Cache-Control: public, max-age=31536000, immutable
  /assets/css/*
  /assets/js/*
  /assets/img/*
    Cache-Control: public, max-age=604800, must-revalidate
  ```

### Fix 9 — `/links/` noindex + fuera de sitemap ✅ COMPLETADO (2026-09-07)
- [x] `links.astro`: `<meta name="robots" content="noindex, follow">`.
- [x] `canonicalURL` y `og:url` → `https://www.klyn.com.mx/links/` (con slash).
- [x] Quitar `/links` del sitemap (config o filtro en `astro.config.mjs`).
- [x] Verificar `npm run build` y que `/links/` no aparezca en `sitemap-0.xml`.

### Fix 2 — De-orphan `/instituciones-educativas/`
- [ ] Link en Footer (o dropdown "Sectores") en `Layout.astro`.
- [ ] Sección/link desde `index.astro` (contextual, p. ej. junto a la foto de hoteles/escuelas).
- [ ] CTA "Ver catálogo completo" → `/productos/` (hoy `#beneficios`, línea 578 de `instituciones-educativas.astro`).
- [ ] Links contextuales desde posts afines (`guia-limpieza-hoteles...`, y el futuro post de escuelas).
- [ ] Verificar: `rg -n "instituciones-educativas" src/` → al menos 2 páginas distintas lo enlazan.

---

## 🟠 FASE 2 — Rendimiento y E-E-A-T (High)

### Fix 4 — Reemplazar `vendor.bundle.js` (711KB raw / 202KB br) ✅ COMPLETADO (2026-08-24)
- [x] Inventariar qué usa el sitio: Bootstrap 5 + AOS (data-aos en home/nosotros/contacto/blog) + JS del catálogo.
  - Uso real: **Collapse** (navbar toggler + FAQ.astro), **AOS** (13–17 elems/página), **countup** (3 stats en home).
  - Vendor traía 20+ libs muertas (Quill, Flickity, Isotope, Jarallax, Dropzone, Choices, Typed, mapbox…).
- [x] Servir `bootstrap.bundle.min.js` (5.3.8) + `aos.js` (2.3.4) standalone desde `public/assets/js/`.
- [x] Quitar `vendor.bundle.js` y `theme.bundle.js` de `Layout.astro`; migrar init de AOS a `public/assets/js/klyn.js`.
  - `links.astro` no usaba nada del bundle → scripts eliminados sin reemplazo.
  - ⚠️ La build de AOS de Landkit estaba parcheada y emitía `aos:in:<id>`; la oficial **no emite eventos** → `klyn.js` dispara el countup vía MutationObserver sobre `.aos-animate`.
- [x] Objetivo superado: **719KB → 98KB raw** (~206KB → ~30KB gzip; ~26KB br). `.map` legacy borrados.
- [x] Verificado (`.seo-audit/verify_fix4.py`, Playwright): 0 errores consola, AOS 13/13 anima, countup anima 0→200/150/32, navbar collapse y FAQ accordion abren/cierran, catálogo (stepper) OK.

### Fix 5 — Fonts: `font-display` + preload
- [ ] Agregar `font-display: swap;` a los 4 `@font-face` (3× HKGroteskPro + Feather) en `theme.bundle.css`.
- [ ] `<link rel="preload" as="font" type="font/woff2" crossorigin href=".../HKGroteskPro-Bold.woff2">` (+ Regular) en `Layout.astro`.
- [ ] Shorten hero animation: `.hero-heading` delay ≤100ms o excluir el H1 (LCP). 

### Fix 6 — Tap targets del catálogo ✅ COMPLETADO (2026-09-07)
- [x] `.pc__add`: 34×34 → 44×44.
- [x] Botones ± del `.pc__stepper` → 44×44; span qty 26px; `.pc__foot` min-height 44px.

### Fix 7 — Titles ≤60 / Descriptions ≤160 (5 posts) ✅ COMPLETADO (2026-09-07)
- [x] Recortar el sufijo `" - Blog Klyn"` (eliminado en `[slug].astro`) y reescribir titles: hoy 69–87 → ≤60.
- [x] Reescribir descriptions: hoy 157–187 → ≤160 (target ~150).
- [x] Mantener keyword front-loaded. Verificado con script de conteo: titles 48–58, desc 145–157.

### Fix 8 — Autoría humana (E-E-A-T) (~EN PROGRESO)
- [x] `author` en frontmatter → persona real en los 5 posts: Manuel Samaniego (guia-productos, cloro), Iván Franco (papelería, hoteles), Polo Rivera (proveedor). Todos: "Socio · Ventas y distribución en Klyn".
- [x] `BlogLayout.astro`: esquema `author` → `Person` con `jobTitle` + `worksFor #organization`; `[slug].astro`: byline visible con avatar (iniciales), nombre y rol.
- [ ] `nosotros.astro`: nombrar al equipo/fundador(es) con fotos y credenciales; quitar la sola marca. *(requiere fotos y bios)*
- [ ] Bio/autor page opcional para enlazar `sameAs`/`url` del Person.

---

## 🟡 FASE 3 — Schema, contenido y UX (Medium)

### Fix 11 — Schema URLs con trailing slash + `Blog` node
- [ ] `@id`/`url`/breadcrumb de /contacto, /nosotros, /productos → forma canónica con `/`.
- [ ] Agregar `Blog` node + `blogPost[]` refs en `/blog/` (posts ya apuntan a `/blog/#blog`).
- [ ] BreadcrumbList + WebPage en `/blog/`, `/instituciones-educativas/`, `/aviso-de-privacidad/` (Service para instituciones).
- [ ] Validar JSON-LD con Schema Markup Validator (o `npx`/script local).

### Fix 12 — ItemList de Product (quote-only, sin offers) ✅ COMPLETADO (2026-09-07)
- [x] Generar ItemList (`name`, `numberOfItems`, `itemListElement` con `Product @id /productos#p-<id>`) desde `src/data/products.ts` en build (`itemListSchema` en frontmatter).
- [x] `mainEntity` en el CollectionPage → `@id` `#catalogo` del ItemList. No inventar precios.

### Fix 13 — Feather → SVGs inline
- [ ] Mapear los ~12 glifos `.fe fe-*` usados a SVGs inline (stroke 24×24).
- [ ] Borrar `@font-face` de Feather y el woff (81.6KB).

### Fix 14 — Categorías de /productos como H2 ✅ COMPLETADO (2026-09-07)
- [x] Secciones por categoría (`<section class="cat-section">` + `<h2 class="cat-head">` ×5: Químicos, Herramientas, Higiénicos, Papelería, Empaques) con las cards fluyendo en el mismo grid (`display: contents`).
- [x] Corregir salto h1→h5 ("Sin resultados" ahora `<h2>`).
- [x] JS: ocultar secciones vacías al filtrar/buscar (`allSections` en `applyFilters`).

### Fix 15 — Related-posts + cross-links
- [ ] Módulo "Artículos relacionados" (2–3) al final de cada post.
- [ ] 2–3 links contextuales post→post (cloro↔guía-productos, hoteles↔proveedor, papelería↔guía-productos).

### Fix 16 — Reconciliar trust numbers (~EN PROGRESO)
- [x] Home hero + "Klyn en números": productos "150+" → **200+** (cifra confirmada por el socio; etiqueta "Productos disponibles").
- [~] Badge dinámico del catálogo muestra `products.length` real (≈192) — revisar al completar la carga de SKUs a 200 en `products.ts` (ver Fix 21) si se quiere idéntico al marketing.
- [ ] Suavizar/verificar "200+ Clientes" (empresa fundada 2025).
- [ ] Testimonios: nombrar fuentes reales con permiso o retirar los anónimos.

### Fix 17 — FAQ diferenciado por página
- [ ] `/` mantiene el FAQ transaccional general (pedido mínimo, envíos, cotización).
- [ ] `/contacto/` FAQ orientado a canal/tiempos (WhatsApp, horario, correo, teléfono).
- [ ] Evitar FAQPage duplicado byte-por-byte en ambas.

### Fix 18 — Expandir posts sub-800w + tabla comparativa
- [ ] `guia-productos-limpieza-profesional` (728w): agregar la tabla comparativa de productos (categoría | uso | ventaja | cuándo elegir) + resolver canibalización "cómo elegir proveedor" → resumen + link al post dedicado.
- [ ] `suministros-papeleria-oficina` (750w): detalle por marca/gramaje, consumo, storage.

### Fix 19 — Tipografía del catálogo ✅ COMPLETADO (2026-09-07)
- [x] `.pc__sub`, `.sidebar-label`, `.mob-pill-n`, `.s-badge`, `.pc__hint` → ≥12px (0.75rem); `.sidebar-sub` → 0.81rem. Colores a `#4a5a6e`/`#4a7fb0`/`#b97e00` (contraste >4.5:1).

### Fix 20 — Reducir DOM de /productos/ (3,416 nodos)
- [ ] Opción A (rápida): podar divs anidados y atributos duplicados por card (~2.6KB c/u).
- [ ] Opción B: render de variantes client-side desde el JSON; paginación o secciones por categoría.
- [ ] Target: <1,500 nodos. Medir con el script de Playwright del audit.

### Fix 21 — Fotos reales de producto (en progreso)
- [ ] `public/assets/img/products/` (ya hay `blanca-nieves-10kg.webp`).
- [ ] Cargar foto en `src/data/products.ts` (`image`) para el top 20 de más vendidos.
- [ ] Placeholder: agrandar emoji ~2.5× + patrón de fondo más rico mientras no haya foto.

---

## 🔵 FASE 4 — Backlog (Low)

### Fix 22 — `lastmod` en sitemap ✅ COMPLETADO (2026-09-07)
- [x] `@astrojs/sitemap` con `lastmod` (fecha de `datePublished`/`dateModified` de posts vía lectura de frontmatter en `astro.config.mjs`).

### Fix 23 — Imágenes por post
- [ ] Agregar `ogImage`/imagen destacada por post en MDX; `BlogLayout` la usa en `image` y en el card del listing; fallback a `og-image.png`.

### Fix 24 — `sameAs` GBP + `address` en Organization ✅ COMPLETADO (2026-09-07)
- [x] URL de Google Business Profile/Maps en `sameAs` (WholesaleStore + Organization): `https://www.google.com/maps?cid=10369337440073808156` (CID decimal derivado de `0x8fe749766fc1f91c`).
- [x] Copiar `PostalAddress` al nodo Organization (Layout.astro).

### Fix 25 — preconnect GTM + purgar CSS + patrón muerto (~EN PROGRESO)
- [x] `<link rel="preconnect" href="https://www.googletagmanager.com">` (y `dns-prefetch` GA/Facebook).
- [ ] PurgeCSS de `theme.bundle.css` (399KB raw / 55KB br → <15KB br).
- [ ] Eliminar/restaurar referencia muerta `img/patterns/pattern-2.png` (404).

### Fix 26 — WhatsApp float mobile
- [ ] `padding-right`/safe-zone de 92px o float 56px + inset 12px para no tapar stats/H2s/excerpts.

### Fix 27 — Contraste oro
- [ ] `#fab60a` solo sobre navy; sobre blanco usar ámbar oscuro `#b97e00` o azul (eyebrows, badges).

### Fix 28 — RSS feed del blog
- [ ] Integrar feed (p. ej. `@astrojs/rss`) en `/blog/rss.xml`; enlazarlo en `/blog/` y `llms.txt`.

### Fix 29 — Cache rule HTML en Cloudflare
- [ ] Cloudflare Cache Rule para HTML con TTL corto (p. ej. 300s stale-while-revalidate) — hoy `DYNAMIC`.

### Extras detectados en detalle (sub-fixes)
- [ ] `sitemap.xml` → alias/redirect a `sitemap-index.xml` (hoy 404, queja común de tools).
- [ ] Corregir skips de heading en home (h2→h4) y nosotros (h2→h4/h5); footer usa h6 para estilos.
- [ ] H1 débil en money pages: meter keyword en H1 de `/contacto/` ("¡Estamos para apoyarte!") y reforzar title/H1 de `/productos/` con "papelería".
- [ ] H1 de contacto no debe concatenar "paraapoyarte" (whitespace en el markup).
- [ ] AOS: fallback `.no-js`/noscript `opacity:1` para renders de full-page.
- [ ] Placeholder de búsqueda mobile: "Buscar: cloro, mopa, bolsa…" (no truncado).
- [ ] CTA de WhatsApp dentro del hero de `/contacto/` + link "Cómo llegar" a Maps en la tarjeta de dirección.
- [x] Warning de consola "Jarallax Element is DEPRECATED" — resuelto con Fix 4 (bundle eliminado).

---

## 📝 FASE 5 — Contenido: blog + GEO/AEO/AIO (heredado y expandido)

> Ejes temáticos y 12 artículos del plan original + gaps detectados por el audit.

### Plan de artículos (12)
- [x] **1. Guía completa de productos de limpieza profesional para empresas en México** *(guia-productos-limpieza-profesional — requiere Fix 18)*
- [x] **2. ¿Cloro o desinfectante? Cuándo usar cada uno en tu negocio** *(cloro-o-desinfectante-cuando-usar)*
- [x] **3. Cómo elegir el proveedor de suministros de limpieza adecuado para tu empresa** *(como-elegir-proveedor)*
- [x] **4. Suministros de papelería básicos que toda oficina necesita** *(suministros-papeleria-oficina — requiere Fix 18)*
- [x] **5. Guía de limpieza para hoteles: productos y protocolos esenciales** *(guia-limpieza-hoteles)*
- [ ] **6. Productos de limpieza para escuelas: seguridad y eficiencia** → cross-link obligatorio a `/instituciones-educativas/` (Fix 2)
- [ ] **7. Limpieza para restaurantes: desengrasantes, desinfectantes y sanidad**
- [ ] **8. Trapos de microfibra vs algodón: ¿cuál elegir para tu negocio?**
- [ ] **9. Cómo calcular el consumo mensual de suministros de limpieza**
- [ ] **10. Guía de compra: químicos de limpieza industrial en México**
- [ ] **11. Importancia de la limpieza profesional en espacios de trabajo**
- [ ] **12. Cómo organizar el almacén de suministros de limpieza en tu empresa**

### Content gaps del audit (oportunidades nuevas)
- [ ] Landing `/hoteles/`, `/restaurantes/`, `/oficinas/` (verticales — hoy solo escuelas, y orfana).
- [ ] Página local "suministros de limpieza en Los Mochis" + cobertura Ahome/Guasave/El Fuerte.
- [ ] Páginas indexables por categoría ("químicos de limpieza mayoreo", "papelería mayoreo") — hoy filtros son anchors no indexables.
- [ ] Contenido de marca/comparación: "Cloralex vs genérico", "mejor desinfectante para restaurantes", "precio cloro 20L mayoreo".

### Disciplina por post (mantener)
- [x] Frontmatter + `key-takeaway` answer-first (<50 palabras).
- [x] FAQPage 3–5 Q&A vía `<BlogFaq>`.
- [x] Tablas comparativas citables + H2 con preguntas naturales + datos específicos.
- [ ] Tabla de contenido (ToC) con anchor links al inicio de cada artículo.
- [ ] Citar fuentes/datos cuando se usen estadísticas (LLMs prefieren datos atribuidos).
- [ ] 2–3 links internos contextuales por post (post→post + catálogo + WhatsApp).

### GEO / AIO
- [x] `llms.txt` completo · `llms-full.txt` con resúmenes extendidos.
- [x] robots.txt permite crawlers de IA.
- [ ] Mover datos de contacto y posts clave también a `llms-full.txt` cuando se publiquen (regenerar).
- [ ] E-E-A-T: autores + bio + personas en nosotros (Fix 8) y casos de éxito reales.

---

## ✅ FASE 6 — Validación y re-audit (definición de "terminado")

- [ ] `npm run build` sin errores tras cada fase.
- [ ] `npm run preview` + recorrido manual (navbar, footer, catálogo, carrito, blog, links).
- [ ] `rg -n 'href="/(contacto|productos|nosotros|blog)' src/` → 0 sin slash.
- [ ] JSON-LD: 0 errores de validación; `Blog` node cerrado con los posts.
- [ ] Reconteo de nodos DOM en /productos/ < 1,500.
- [ ] Re-audit (re-run del `.seo-audit/`): esperado **~85 tras Crítico+High**, **~92 tras Medium**.
- [ ] PSI/CrUX en producción (cuando la quota lo permita): LCP <2.5s, INP <200ms, CLS <0.1.

---

## 📊 KPIs

- Indexadas: 13 → 25+ (blog completo + verticales + categorías).
- Trafico orgánico informativo + conversión vía catálogo/WhatsApp.
- CWV: LCP/INP/CLS dentro de verde en CrUX.
- Citaciones en AI Overviews / ChatGPT / Perplexity con autores reales y datos atribuidos.
