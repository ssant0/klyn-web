# 🧹 Klyn — Sitio Web Corporativo

> Sitio informativo B2B para **Klyn**, empresa mexicana de suministros de limpieza y papelería con sede en Los Mochis, Sinaloa.

![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)
![Bootstrap](https://img.shields.io/badge/CSS-Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-Privado-lightgrey)

---

## Descripción

Klyn vende y entrega suministros de limpieza y papelería (cloro, limpiadores, papel, plumas, etc.) a negocios en todo México, con entregas presenciales en Los Mochis. Este sitio es el punto de contacto B2B: comunica la propuesta de valor y dirige a los clientes a WhatsApp, teléfono o email. No tiene e-commerce ni precios visibles.

---

## Tabla de Contenidos

- [Stack](#stack)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Comandos](#comandos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Páginas](#páginas)
- [Analytics y Seguridad](#analytics-y-seguridad)
- [Deploy](#deploy)
- [Contacto del Negocio](#contacto-del-negocio)

---

## Stack

- **Framework:** [Astro 7](https://astro.build) (`astro@^7.4.1`) — salida estática (`output: 'static'`)
- **Contenido:** `@astrojs/mdx` + content collections
- **CSS:** Bootstrap 5 (bundles pre-compilados en `public/assets/`)
- **Linter:** [Biome](https://biomejs.dev) (en `devDependencies`, aún sin configurar)
- **Sitemap:** `@astrojs/sitemap` — generado automáticamente en build
- **RSS:** `@astrojs/rss` — feed en `/rss.xml`
- **Deploy:** [Cloudflare Pages](https://pages.cloudflare.com) — solo assets estáticos, sin adapter
- **Dominio:** [www.klyn.com.mx](https://www.klyn.com.mx)

---

## Requisitos

- **Node.js** >= 22.22.0
- **pnpm** >= 10
- **Wrangler CLI** >= 3.x (solo para deploy manual)

---

## Instalación

```bash
git clone https://github.com/ssant0/klyn-web.git
cd klyn-web
pnpm install
```

---

## Comandos

| Comando           | Acción                                    |
| :---------------- | :---------------------------------------- |
| `pnpm dev`        | Servidor local en `http://localhost:4321` |
| `pnpm build`      | Build de producción en `./dist/`          |
| `pnpm preview`    | Vista previa del build local              |
| `pnpm astro`      | CLI de Astro                              |

---

## Estructura del Proyecto

```
/
├── public/
│   ├── _headers              # Headers de seguridad para Cloudflare Pages
│   ├── robots.txt
│   ├── site.webmanifest
│   └── assets/
│       ├── css/
│       │   ├── libs.bundle.css
│       │   └── theme.bundle.css
│       ├── js/
│       │   ├── aos.js
│       │   ├── bootstrap.bundle.min.js
│       │   └── klyn.js
│       ├── favicon/
│       ├── fonts/
│       ├── img/
│       └── logo/
│           └── klyn-logotipo.svg
├── src/
│   ├── components/
│   │   ├── blog/BlogFaq.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── content/blog/          # Posts .mdx (content collection)
│   ├── data/
│   │   ├── config.ts
│   │   └── products.ts        # Catálogo (~190 productos)
│   ├── layouts/
│   │   ├── Layout.astro       # Layout base: navbar, footer, GTM, schema
│   │   └── BlogLayout.astro   # Wrapper con BlogPosting + BreadcrumbList
│   ├── pages/
│   │   ├── blog/
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── productos.astro
│   │   ├── contacto.astro
│   │   ├── instituciones-educativas.astro
│   │   ├── aviso-de-privacidad.astro
│   │   ├── links.astro        # Linktree standalone (noindex)
│   │   ├── 404.astro
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css         # Utilidades custom (.shadow-soft, accordion)
│   ├── utils/
│   │   └── email.ts
│   └── content.config.ts
├── astro.config.mjs
└── wrangler.jsonc
```

---

## Páginas

| Ruta                     | Descripción                                          |
| :----------------------- | :--------------------------------------------------- |
| `/`                      | Home — propuesta de valor, categorías, testimonios   |
| `/nosotros`              | Historia, equipo y valores de Klyn                   |
| `/productos`             | Catálogo interactivo de productos (sin precios)      |
| `/instituciones-educativas` | Landing B2B para escuelas                         |
| `/contacto`              | Formulario + datos de contacto directo               |
| `/blog/`                 | Listado de artículos                                 |
| `/blog/posts/[slug]/`    | Artículo individual (MDX) con FAQ y schema           |
| `/aviso-de-privacidad`   | Aviso de privacidad LFPDPPP                          |
| `/links`                 | Linktree de marca (sin navbar/footer, con `noindex`) |
| `/rss.xml`               | Feed RSS del blog                                    |

---

## Analytics y Seguridad

**Google Tag Manager** (`GTM-MD6LZ974`) está instalado en `Layout.astro`. GA4 y Meta Pixel se gestionan desde GTM — no hay base code directo en el HTML.

**Headers de seguridad** declarados en `public/_headers` (aplicados por Cloudflare Pages):

- `Strict-Transport-Security` con preload
- `Content-Security-Policy` — incluye GTM, GA4, Facebook Pixel y Cloudflare Insights
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

> [!IMPORTANT]
> Para agregar nuevos orígenes externos (scripts, fuentes, etc.), edita `public/_headers` y actualiza el CSP correspondiente.

---

## Deploy

El proyecto se despliega automáticamente en **Cloudflare Pages** vía la integración Git (push a `main` = nuevo deploy).

**Deploy manual:**

```bash
pnpm build
wrangler pages deploy
```

El build genera sitios estáticos en `dist/`, que Cloudflare Pages publica directamente. No hay adapter SSR ni worker (`_worker.js`).

---

## Contacto del Negocio

| Canal     | Datos                                                                            |
| :-------- | :------------------------------------------------------------------------------- |
| Email     | contacto@klyn.com.mx                                                             |
| WhatsApp  | [+52 668 162 9654](https://wa.me/526681629654)                                   |
| Instagram | [@klyn.com.mx](https://www.instagram.com/klyn.com.mx/)                           |
| Facebook  | [Klyn](https://www.facebook.com/share/1DqQxgT3Zk/?mibextid=wwXIfr)              |
| LinkedIn  | [Klyn Solutions](https://www.linkedin.com/company/klyn-solutions/)               |
| Maps      | [Google Business Profile](https://share.google/7RC0N9AkTWpyH5JYr)               |
