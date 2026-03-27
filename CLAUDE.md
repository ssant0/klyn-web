# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production (outputs to ./dist)
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI commands
```

No test or lint commands are configured.

## Architecture

## Project Context

**Klyn** es una empresa mexicana de venta y entrega de suministros de limpieza y papelería (cloro, limpiadores, papel, plumas, etc.), con sede en Los Mochis, Sinaloa. Realiza envíos a todo México y entregas presenciales en Los Mochis.

El sitio es **informativo B2B** — sin e-commerce ni precios visibles. El objetivo es que negocios contacten directamente a Klyn vía WhatsApp, teléfono o email. Existe plan futuro de escalar a B2C.

**Identidad visual:**
- Colores de marca: `#6cace3` (azul), `#ffffff` (blanco), `#fab60a` (amarillo/dorado)
- Logo SVG disponible en `public/assets/logo/klyn-logotipo.svg` (viewBox 536×301). Usado en navbar (`height="72" width="128"`) y footer (ídem + `filter: brightness(0) invert(1)` para fondo oscuro).

**Páginas planeadas:** Inicio, Nosotros, Productos (showcase por categorías, sin precios), Contacto

**Pendientes del cliente:** template de diseño, logo en SVG, copy/texto, fotos de productos

**Dominio:** www.klyn.com.mx

---

## Architecture

This is an **Astro static site** deployed to **Cloudflare Pages**.

**Key integrations:**
- `@astrojs/cloudflare` — wraps the Astro build as a Cloudflare Worker; the entry point is `dist/_worker.js/index.js`
- `@astrojs/sitemap` — generates a sitemap at build time
- ~~`@tailwindcss/vite`~~ — **eliminado**. No usar Tailwind CSS; el proyecto usa Bootstrap 5 exclusivamente.

**CSS Framework: Bootstrap 5**
- Bootstrap se carga vía archivos bundle en `public/assets/css/libs.bundle.css` y `public/assets/css/theme.bundle.css`
- JS en `public/assets/js/vendor.bundle.js` y `public/assets/js/theme.bundle.js`
- NO agregar Tailwind ni ningún otro framework CSS — conflicto con Bootstrap
- `src/styles/global.css` contiene utilidades custom: `.shadow-soft` (sombra discreta), estilos de `.accordion-button`, `.accordion-icon`, `.accordion-chevron`

**Deployment:** Targets **Cloudflare Pages** (not Workers). `wrangler.jsonc` sets `pages_build_output_dir: ./dist`. Deploy with `wrangler pages deploy` or via the Cloudflare Pages Git integration. The adapter uses `mode: 'directory'` which outputs a `_worker.js` inside `dist/` for Pages to pick up automatically.

**Layout:** `src/layouts/Layout.astro` es el layout base. Incluye navbar, footer y modales. Props: `title`, `bodyClass`.

**Pages/routing:** Archivos en `src/pages/` son las rutas. Estado actual:
- `src/pages/index.astro` — Home (contenido de Klyn, tema claro)
- `src/pages/contact.astro` → `/contacto` (en español, con datos reales)
- Todas las páginas ya existen: `/`, `/nosotros`, `/productos`, `/contacto`
- El navbar apunta a: `/`, `/nosotros`, `/productos`, `/contacto`

**Datos de contacto reales:**
- Email: `contacto@klyn.com.mx`
- Teléfono / WhatsApp: `+52 668 162 9654`
- WhatsApp link: `https://wa.me/526681629654`
- Tel link: `tel:+526681629654`

**Assets pendientes del cliente:**
- ~~Logo en SVG~~ — recibido e integrado (`klyn-logotipo.svg`)
- Fotos de productos reales
- Logos de clientes/empresas colaboradoras (reemplazar SVGs placeholder en home)

**Convención de sombras:** Usar `.shadow-soft` para profundidad sutil. No combinar con la clase `border` de Bootstrap — produce doble contorno visual indeseado. Usar `border-0` cuando se aplique sombra.

**Convenciones de color en código:**
- Azul marca: `style="color: #6cace3"` o `style="background-color: #6cace3"`
- Amarillo marca: `style="color: #fab60a"`
- No hay custom Bootstrap theme configurado; usar inline styles para colores de marca
