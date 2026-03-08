# Klyn — Sitio Web Corporativo

Sitio informativo B2B para **Klyn**, empresa mexicana de suministros de limpieza y papelería con sede en Los Mochis, Sinaloa. Construido con Astro y desplegado en Cloudflare Pages.

## Stack

- **Framework:** Astro 5 (sitio estático)
- **CSS:** Bootstrap 5 (via bundles en `public/assets/`)
- **Deploy:** Cloudflare Pages — adapter `@astrojs/cloudflare` en `mode: 'directory'`
- **Dominio:** [www.klyn.com.mx](https://www.klyn.com.mx)

## Comandos

| Comando            | Acción                                        |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Instala dependencias                          |
| `npm run dev`      | Inicia servidor local en `localhost:4321`     |
| `npm run build`    | Build de producción en `./dist/`              |
| `npm run preview`  | Vista previa del build local                  |

## Estructura

```
/
├── public/
│   ├── assets/
│   │   ├── css/          # libs.bundle.css, theme.bundle.css
│   │   ├── js/           # vendor.bundle.js, theme.bundle.js
│   │   ├── favicon/      # favicon.ico, PNGs, apple-touch-icon, PWA icons
│   │   └── logo/         # klyn-logo.png
│   └── site.webmanifest  # Manifiesto PWA
├── src/
│   ├── layouts/
│   │   └── Layout.astro  # Layout base (navbar, footer, modals)
│   └── pages/
│       ├── index.astro   # Inicio (/)
│       ├── contact.astro # Contacto (/contacto)
│       ├── nosotros.astro     # (pendiente)
│       └── productos.astro    # (pendiente)
└── wrangler.jsonc
```

## Deploy

El proyecto usa la integración Git de Cloudflare Pages. También se puede desplegar manualmente:

```sh
npm run build
wrangler pages deploy
```

## Contacto del negocio

- Email: contacto@klyn.com.mx
- Teléfono / WhatsApp: +52 668 162 9654
