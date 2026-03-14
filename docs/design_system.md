# Design System — Klyn

Lineamientos de diseño del sitio web de Klyn (`www.klyn.com.mx`).
Stack: Astro · Bootstrap 5 · CSS custom en `<style>` por página.

---

## 1. Colores

| Nombre | Valor | Uso |
|---|---|---|
| Azul marca | `#6cace3` | Color principal, bordes de tarjetas, eyebrows, íconos |
| Azul oscuro | `#1e4a7c` | Punto medio del gradiente hero |
| Azul navy | `#0d2341` | Base del gradiente hero, textos oscuros de énfasis |
| Dorado marca | `#fab60a` | Acento, eyebrows activos, números destacados |
| Dorado oscuro | `#c98b00` | Texto sobre fondo dorado claro (legibilidad) |
| Verde WhatsApp | `#25d366` | Exclusivo para botones y cards de WhatsApp |
| Blanco | `#ffffff` | Fondos de tarjetas, texto sobre oscuro |
| Gris claro azulado | `#f5f9ff` | Fondo de secciones primarias (Químicos, FAQ, etc.) |
| Crema cálido | `#fffcf0` | Fondo de secciones alternadas (Herramientas, Proceso) |
| Gris texto | `#6c757d` | `text-body-secondary` — cuerpo de texto secundario |

### Gradiente hero (consistente en todas las páginas)
```css
background: linear-gradient(150deg, #0d2341 0%, #1e4a7c 50%, #6cace3 100%);
```

### Fondos de sección (alternancia)
Usar en este orden para crear ritmo visual entre secciones:
1. `#f5f9ff` — azul muy suave
2. `#ffffff` — blanco
3. `#fffcf0` — crema cálido
4. Gradiente navy (solo para banners de estadísticas o CTA final)

---

## 2. Tipografía

Bootstrap 5 system font stack. No se usan fuentes externas.

| Elemento | Clase / style | Notas |
|---|---|---|
| H1 hero | `font-size: clamp(2.8rem, 6vw, 4.5rem)` | `line-height: 1.05`, `letter-spacing: -0.03em` |
| H2 sección | `font-size: clamp(1.9rem, 3.5vw, 2.75rem)` | `letter-spacing: -0.02em` |
| H2 CTA final | `font-size: clamp(2rem, 4vw, 3rem)` | `letter-spacing: -0.025em`, `line-height: 1.15` |
| H3 tarjeta featured | `font-size: 1.2rem` | `fw-bold` |
| H6 tarjeta compacta | Bootstrap `h6` | `fw-bold` |
| Cuerpo principal | `font-size: 1.05rem`, `line-height: 1.7` | `text-body-secondary` |
| Cuerpo compacto | `font-size: 0.95rem`, `line-height: 1.7` | En tarjetas pequeñas |
| Eyebrow / etiqueta | `font-size: 0.75rem`, `font-weight: 700` | `text-transform: uppercase`, `letter-spacing: 0.08–0.12em` |

---

## 3. Hero section

Todas las páginas usan la misma estructura de hero:

```html
<section style="
  background: linear-gradient(150deg, #0d2341 0%, #1e4a7c 50%, #6cace3 100%);
  margin-top: -87px;        /* compensa la altura del navbar */
  padding-top: 150px;
  padding-bottom: 72-80px;
  position: relative;
  overflow: hidden;
">
  <!-- Dot grid -->
  <div style="position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px);
    background-size: 30px 30px; pointer-events: none;">
  </div>
  <!-- Glow blob (opcional, esquina superior derecha) -->
  <div style="position: absolute; top: -80px; right: -100px;
    width: 500px; height: 500px; border-radius: 50%;
    background: rgba(108,172,227,0.15); filter: blur(80px); pointer-events: none;">
  </div>
  ...
</section>
```

**Elementos internos del hero (en orden):**
1. Eyebrow badge dorado
2. H1 en blanco con `clamp()`
3. Párrafo subtexto `rgba(255,255,255,0.72)`
4. CTAs (opcional) o stats row

### Eyebrow badge (hero)
```html
<span style="
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(250,182,10,0.18); color: #fab60a;
  padding: 6px 16px; border-radius: 999px;
  font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
">
  <span style="width: 6px; height: 6px; border-radius: 50%; background: #fab60a; display: inline-block;"></span>
  Texto del eyebrow
</span>
```

### Stats row (hero)
```html
<div class="d-flex justify-content-center align-items-center gap-4">
  <div class="d-flex flex-column align-items-center">
    <span class="hero-stat-num">200+</span>
    <span class="hero-stat-label">Etiqueta</span>
  </div>
  <div class="hero-divider"></div>
  ...
</div>
```
```css
.hero-stat-num  { font-size: 2.1rem; font-weight: 800; color: #fab60a; line-height: 1; }
.hero-stat-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.65); margin-top: 5px; }
.hero-divider   { width: 1px; height: 42px; background: rgba(255,255,255,0.18); }
```

**Excepción — `/nosotros`:** el hero usa imagen de fondo real con overlay de marca en lugar del gradiente puro:
```css
.hero-nosotros {
  background-image: url(/assets/img/covers/cover-5.jpg);
  background-size: cover; background-position: center;
}
.hero-nosotros::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(150deg,
    rgba(13,35,65,0.88) 0%, rgba(30,74,124,0.78) 55%, rgba(108,172,227,0.55) 100%
  );
}
```

---

## 4. Eyebrow de sección

Para encabezados de sección (fuera del hero):

```html
<span class="section-eyebrow eyebrow-blue">Texto</span>
<span class="section-eyebrow eyebrow-gold">Texto</span>
```

```css
.section-eyebrow {
  display: inline-flex; align-items: center; gap: 6px;
  margin-bottom: 0.75rem; padding: 6px 14px; border-radius: 999px;
  font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.eyebrow-blue { background: rgba(108,172,227,0.12); color: #6cace3; }
.eyebrow-gold { background: rgba(250,182,10,0.14); color: #c98b00; }
```

---

## 5. Tarjetas de producto / feature

### Layout por sección
Cada sección de contenido usa un patrón **featured + compact**:
- **2 tarjetas featured** (`col-12 col-md-6`) — más padding, icono grande
- **4 tarjetas compactas** (`col-12 col-sm-6 col-lg-3`) — layout horizontal icono+texto o más ajustado

### Estilos de tarjeta
```css
.product-card, .feature-card, .value-card, .contact-card {
  border-radius: 1rem !important;
  border: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
/* Al hover todas levantan 5px */
.product-card:hover { transform: translateY(-5px); }

/* Variante azul (Químicos, Papelería, Historia, FAQ) */
.product-card-blue {
  box-shadow: 0 2px 18px rgba(108,172,227,0.10);
  border-left: 4px solid #6cace3 !important;
}
.product-card-blue:hover { box-shadow: 0 10px 32px rgba(108,172,227,0.22) !important; }

/* Variante dorada (Herramientas, Servicios, Valores) */
.product-card-gold {
  box-shadow: 0 2px 18px rgba(250,182,10,0.10);
  border-left: 4px solid #fab60a !important;
}
.product-card-gold:hover { box-shadow: 0 10px 32px rgba(250,182,10,0.22) !important; }

/* Variante verde (solo WhatsApp en /contacto) */
.contact-card-green {
  box-shadow: 0 2px 18px rgba(37,211,102,0.12);
  border-left: 4px solid #25d366 !important;
}
```

> **Regla:** nunca combinar `border-0` de Bootstrap con `border-left` inline — usar solo `border: none` en inline style.

### Icon boxes
```css
.icon-box      { display: inline-flex; align-items: center; justify-content: center; border-radius: 14px; margin-bottom: 1rem; }
.icon-box-lg   { width: 64px; height: 64px; font-size: 1.9rem; }   /* tarjetas featured */
.icon-box-md   { width: 52px; height: 52px; font-size: 1.5rem; border-radius: 12px; }  /* tarjetas compactas */
.icon-box-sm   { width: 50px; height: 50px; font-size: 1.45rem; border-radius: 12px; } /* variante alternativa */
.icon-box-blue { background: rgba(108,172,227,0.12); }
.icon-box-gold { background: rgba(250,182,10,0.12); }
.icon-box-green{ background: rgba(37,211,102,0.12); }
```

---

## 6. Botones

Todos los botones usan `border-radius: 999px` (píldora).

| Variante | Código | Uso |
|---|---|---|
| Principal azul | `background: #6cace3; color: #fff; border-radius: 999px; padding: 14px 32px;` | CTA primario |
| Claro (sobre oscuro) | `btn btn-light fw-bold lift` + `border-radius: 999px; padding: 14px 28px; color: #1a2e4a;` | Hero y banners navy |
| Outline claro | `btn btn-outline-light fw-bold lift` + `border-radius: 999px; padding: 14px 28px;` | Secundario en hero |
| WhatsApp | `background: #25d366; color: #fff; border-radius: 999px; padding: 12-14px 28px;` | Siempre con ícono de mensajes |
| Dorado CTA | `background: #fab60a; color: #1a2e4a; border-radius: 999px;` | Nav strip de productos |

Clase `lift` del tema Bootstrap aplicada en todos para el efecto de elevación al hover.

---

## 7. CTA final (consistente en todas las páginas)

```html
<section style="
  background: linear-gradient(150deg, #0d2341 0%, #1e4a7c 55%, #6cace3 100%);
  padding-top: 80px; padding-bottom: 80px;
  position: relative; overflow: hidden;
">
  <!-- Dot grid -->
  <div style="position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px);
    background-size: 32px 32px; pointer-events: none;">
  </div>
  <div class="container position-relative">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-7 text-center">
        <!-- Eyebrow dorado -->
        <p style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #fab60a;">
          Texto corto
        </p>
        <!-- H2 -->
        <h2 style="font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.025em; line-height: 1.15;" class="fw-bold text-white mb-4">
          Llamada a la acción.
        </h2>
        <!-- Subtext -->
        <p style="color: rgba(255,255,255,0.68); font-size: 1.05rem;" class="mb-8">
          Descripción breve.
        </p>
        <!-- Botones -->
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <a href="https://wa.me/526681629654" class="btn btn-light fw-bold lift"
             style="border-radius: 999px; padding: 14px 28px; color: #1a2e4a;">
            <i class="fe fe-message-circle me-2"></i> WhatsApp
          </a>
          <a href="/contacto" class="btn btn-outline-light fw-bold lift"
             style="border-radius: 999px; padding: 14px 28px;">
            Opción secundaria <i class="fe fe-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 8. Separadores entre secciones

Usar divisores SVG suaves para transiciones de color entre secciones:

```html
<!-- De #f5f9ff a #fffcf0 -->
<div style="background: #f5f9ff; line-height: 0;">
  <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H1440V20C1200 40 960 40 720 40C480 40 240 40 0 20V0Z" fill="#fffcf0"/>
  </svg>
</div>
```

El `background` del div = color de la sección de arriba. El `fill` del path = color de la sección de abajo.

> **No usar** wave dividers al final del hero (eliminados por preferencia de diseño).

---

## 9. Accordion / FAQ dropdowns

Patrón para evitar el "trabón" de Bootstrap en la animación:

```html
<!-- El div .collapse NO lleva padding -->
<div id="dropXbody" class="collapse faq-drop-body" data-bs-parent="#faqAccordion">
  <!-- El padding va en el div interior -->
  <div class="faq-drop-inner">Texto de respuesta.</div>
</div>
```

```css
/* Wrapper externo: sin padding, Bootstrap anima su height desde 0 */
.faq-drop-body { overflow: hidden; }

/* Div interior: lleva el padding y el borde */
.faq-drop-inner {
  padding: 1rem 1.4rem 1.2rem;
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.7;
  border-top: 1px solid rgba(108,172,227,0.1);
}
```

---

## 10. Datos de contacto

| Canal | Valor |
|---|---|
| WhatsApp / Teléfono | `+52 668 162 9654` |
| Link WhatsApp (con prefill) | `https://wa.me/526681629654?text=Hola%2C+me+interesa+cotizar+suministros+para+mi+negocio.` |
| Link tel | `tel:+526681629654` |
| Email | `contacto@klyn.com.mx` |
| Dirección | Melchor Ocampo 1054, Col. Álamos 1, Los Mochis, Sin., C.P. 81200 |
| Horario | Lun–Vie 9:00–18:00 · Sáb 9:00–14:00 |

---

## 11. Convenciones generales

- **Sin Tailwind.** Solo Bootstrap 5 + CSS custom en bloques `<style>` dentro de cada `.astro`.
- **Sin precios públicos.** El sitio es informativo B2B — siempre redirigir a cotización.
- **Sombras:** usar las sombras definidas por variante de tarjeta, no `.shadow-soft` en tarjetas nuevas.
- **`border-0` + `border-left`:** incompatibles. Usar `border: none` en inline style y agregar `border-left` también inline con `!important`.
- **Imágenes:** `border-radius: 1.25rem` + `box-shadow: 0 8px 40px rgba(0,0,0,0.10)` para imágenes en secciones about.
- **AOS animations:** `data-aos="fade-up"` en tarjetas, `data-aos-delay` en pasos de 60–80ms por columna.
- **Logo:** pendiente SVG del cliente. Por ahora texto "Klyn" en navbar.
- **WhatsApp flotante:** implementado en `Layout.astro`, no repetir en páginas individuales.
