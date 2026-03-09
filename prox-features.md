# Próximas mejoras — Klyn

> Pendientes activos. Lo ya implementado fue eliminado.

---

## Pendientes del dueño (bloqueantes)

Estas tareas requieren que el dueño provea contenido antes de que Claude pueda integrarlas:

| # | Tarea | Para qué sirve |
|---|-------|----------------|
| A | Logos de clientes reales (PNG/SVG fondo transparente) | Reemplazar los 6 logos genéricos del home |
| B | 2–3 testimonios reales (nombre del negocio, giro, ciudad) | Sección de credibilidad — clave para B2B |
| C | Fotos de productos organizadas por categoría | Reemplazar emojis en página de Productos |
| D | Foto del equipo o instalaciones de Klyn | Reemplazar foto de stock en Nosotros |
| E | URLs de redes sociales (Facebook, Instagram, Google Business) | Completar campo `sameAs` del schema LocalBusiness |
| F | Decisión: ¿formulario de contacto por email o solo WhatsApp? | Define qué servicio usar (Formspree vs Web3Forms) |

---

## Tareas de Claude (desbloqueadas o sin dependencia del dueño)

### 1. Activar formulario de contacto
El formulario en `contacto.astro` está comentado. Una vez que el dueño decida el servicio (punto F arriba):
- Formspree: solo apuntar `action` al endpoint y descomentar
- Web3Forms: similar, token en el `action`

### 2. Sección de testimoniales
Diseñar e integrar sección en el home. Bloqueada hasta tener contenido real (punto B).

### 3. Zonas de cobertura
Agregar sección o página que mencione los estados/ciudades a los que se envía. No requiere contenido del dueño — puede construirse con info ya conocida.

### 4. Lazy loading e imágenes
- Agregar `loading="lazy"` a imágenes fuera del fold
- Alt text descriptivo en imágenes genéricas/stock

### 5. Landing pages por segmento (futuro, cuando haya tráfico)
- "Suministros de limpieza para hoteles"
- "Papelería para oficinas en Sinaloa"
- "Proveedor de limpieza para restaurantes"

---

## Google Business Profile
No es código pero es la acción SEO local de mayor impacto.
**Pendiente del dueño:** crear o reclamar perfil en business.google.com con fotos, categorías y horario.
