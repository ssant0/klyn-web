# SEO To-Do — Klyn.com.mx

> Audit date: 2026-05-21
> Site: https://www.klyn.com.mx

---

## Score: 78/100 — Bueno, con oportunidades claras

---

## ✅ Completados

- [x] **`sameAs` vacío** — Rellenado con Facebook, Instagram, LinkedIn en WholesaleStore y Organization
- [x] **FAQPage schema** — JSON-LD con 8 preguntas/respuestas inyectado en homepage y contacto
- ~~**Sitemap** — Se gestiona automáticamente con `@astrojs/sitemap` en build time~~

## 🚨 Crítico (arreglar inmediato)

- [ ] **CSP `unsafe-inline` en scripts** — Migrar a hashes o nonces para eliminar riesgo XSS

## 🔴 Alto (1 semana)

- [ ] **H1 sin keyword principal** — Homepage: `"El aliado que tu negocio necesita."` — no incluye "suministros de limpieza", "proveedor B2B", "Los Mochis".
- [ ] **Sin blog / contenido** — 6 páginas total. Sin capacidad de rankear keywords informativas.
- [ ] **Sin `x-default` hreflang** — Solo `es-MX` presente. Agregar `x-default` apuntando a la misma URL.

## 🟡 Medio (1 mes)

- [ ] **`links.astro` en sitemap pero es `noindex`** — Inconsistente. Excluir del sitemap o quitar noindex.
- [ ] **Sin páginas de producto individuales** — `/productos` solo tiene categorías. Sin URLs únicas para "cloro industrial", "papel bond", etc. — se pierde long-tail SEO.
- [ ] **Misma OG image en todas las páginas** — Usar OG image específica por página para mejor preview en redes.
- [ ] **Inline event handlers** (`onmouseover`, `onmouseout`) — Violan CSP y son mala práctica.
- [ ] **Sin srcset ni responsive images** — Misma imagen sirve a mobile y desktop.

## 🟢 Bajo (nice to have)

- [ ] **Sin llms.txt** — Para AI search readiness (GEO / AI Overviews).
- [ ] **Sin Google Business Profile visible en la web** — Conectar reseñas y SEO local.
- [ ] **Sin testimonios / casos de éxito** — Falta social proof (E-E-A-T).
- [ ] **Sin `Product` schema** — Categorías no tienen datos estructurados de producto.
