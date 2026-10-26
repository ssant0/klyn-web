# Landings locales — plan

Estado: borrador de trabajo. La empresa entrega **solo dentro de la ciudad de Los Mochis, Sinaloa**. No hay reparto propio en otros municipios ni presencia operativa fuera del estado. Este plan se limita a esa realidad.

## Decisión

Concentrar toda la autoridad local en **Los Mochis** y no crear páginas por ciudad. Un negocio reciente con una sola zona de entrega gana más con una landing fuerte y un Google Business Profile bien trabajado que con diez páginas casi iguales.

- Una ciudad: Los Mochis.
- Un hub de suministros.
- Una intención por URL.
- Cero páginas para Ahome, Guasave, El Fuerte, Culiacán o Mazatlán.

## Contexto y restricciones

- Cobertura real: toda la ciudad de Los Mochis, Sinaloa.
- Fuera de la ciudad solo existe envío por paquetería; eso no es presencia local y no justifica una landing por ciudad.
- Empresa fundada en 2025, con poco reconocimiento fuera de Sinaloa.
- Hay permiso para nombrar clientes, pero la lista es corta y sin marcas de alto prestigio.
- El catálogo tiene 190 productos y 26 con foto real; la mayoría de las tarjetas usa placeholder.
- El sitio no tiene ninguna landing local dedicada. La home, `/nosotros/`, `/contacto/` y `/links/` mencionan Los Mochis, pero compiten por muchas intenciones a la vez.

## Inventario actual

| URL | Señal local | ¿Landing local? |
|---|---|---|
| `/` | Los Mochis en title, description y tarjeta de entrega | No |
| `/nosotros/` | Sede, equipo y origen en Los Mochis | No |
| `/contacto/` | Dirección, mapa y entrega local | No |
| `/links/` | Dirección y “Los Mochis, Sinaloa · Todo México” | No |
| `/blog/` y posts | Menciones dispersas a Los Mochis y Sinaloa | No |
| `/instituciones-educativas/` | Landing por giro, sin ciudad | No |

Schema actual: `WholesaleStore` con dirección y geo de Los Mochis, pero `areaServed` declarado como México completo. No hay página de zonas de entrega.

## Arquitectura propuesta

Formato de URL: keyword primero, ciudad al final. Una intención por página.

| Fase | URL | Keyword principal | Intención | Por qué |
|---|---|---|---|---|
| 1 | `/suministros-de-limpieza-los-mochis/` | suministros de limpieza Los Mochis | Comercial local | Es la intención principal y hoy solo la cubre la home de forma indirecta |
| 1 | `/papeleria-los-mochis/` | papelería Los Mochis | Comercial local | Intención distinta; el catálogo hoy no dice “papelería” en su title/H1 |
| 1 | `/suministros-para-cafeterias-los-mochis/` | suministros para cafeterías Los Mochis | Comercial local | Une limpieza + desechables, el diferenciador de Klyn |
| 2 | `/limpieza-para-restaurantes-los-mochis/` | limpieza para restaurantes Los Mochis | Comercial local | Aprovecha el post nacional que ya existe |
| 2 | `/suministros-para-escuelas-los-mochis/` | suministros para escuelas Los Mochis | Comercial estacional | Julio-agosto y regreso a clases |
| 2 | `/zonas-de-entrega-los-mochis/` | entregas de suministros Los Mochis | Confianza | Colonias, días, mínimos y mapa; reduce fricción antes de cotizar |
| 3 | `/suministros-para-oficinas-los-mochis/` | suministros para oficinas Los Mochis | Comercial local | Solo si el hub ya trae tráfico y hay capacidad de atenderlo |
| 3 | `/suministros-para-clinicas-los-mochis/` | suministros para clínicas Los Mochis | Comercial local | Solo después de publicar el post de clínicas |

No crear una página de “proveedor de suministros Los Mochis” aparte del hub: compite por la misma intención y canibaliza.

## Brief: hub de suministros

**URL:** `/suministros-de-limpieza-los-mochis/`
**Title:** Suministros de limpieza en Los Mochis | Klyn
**H1:** Suministros de limpieza en Los Mochis para tu negocio

Secciones:

1. **Qué surtimos en Los Mochis.** Limpieza, papelería, higiénicos, herramientas y empaques. Enlaza a `/productos/` y a `/papeleria-los-mochis/`.
2. **Entrega en toda la ciudad.** Colonias cubiertas, días y horario de reparto, pedido mínimo y cómo se coordina la entrega. Datos por confirmar.
3. **Cómo hacer tu pedido.** WhatsApp, cotización, confirmación y factura. Explica el mínimo local y el CFDI.
4. **Por qué comprar local.** Almacén en la ciudad, trato directo, reposición rápida y un solo proveedor para limpieza y papelería.
5. **Prueba local.** Foto del almacén o del reparto, reseñas de Google y un cliente nombrado si hay permiso.
6. **Preguntas frecuentes.** 3–5 preguntas locales: ¿entregan en mi colonia?, ¿cuánto tarda?, ¿cuál es el mínimo?, ¿facturan?, ¿puedo pedir solo papelería?
7. **CTA.** WhatsApp con mensaje precargado: “Hola, vengo de la página de suministros en Los Mochis”.

Extensión objetivo: 700–1,000 palabras.

## Brief: papelería

**URL:** `/papeleria-los-mochis/`
**Title:** Papelería para oficinas y escuelas en Los Mochis | Klyn
**H1:** Papelería en Los Mochis para tu oficina o escuela

Secciones:

- Categorías: papel, escritura, archivo, impresión, escolares.
- Marcas y presentaciones que realmente se manejan; no listar lo que no hay.
- Entrega local, mínimo y factura.
- Prueba: una oficina o escuela local con permiso, o el segmento y la colonia.
- FAQ: ¿venden por caja o por pieza?, ¿entregan el mismo día?, ¿hacen factura?, ¿surten listas escolares?

Enlaces: `/productos/`, hub de limpieza, `/blog/posts/suministros-papeleria-oficina/`, `/contacto/`.

## Brief: cafeterías

**URL:** `/suministros-para-cafeterias-los-mochis/`
**Title:** Suministros para cafeterías en Los Mochis | Klyn
**H1:** Suministros para tu cafetería en Los Mochis

Secciones:

- Limpieza de barra, máquina de espresso, vaporizador y vitrina.
- Desechables y empaques: vasos, tapas, servilletas, bolsas.
- Paquete de arranque para cafetería nueva.
- Entrega local y frecuencia sugerida.
- Prueba: una cafetería local con permiso.
- FAQ: ¿venden vasos por caja?, ¿tienen limpiador para espresso?, ¿entregan completo el pedido?, ¿facturan?

Enlaces: post de cafeterías, post de máquina de espresso, `/productos/`, `/contacto/`. Cuando existan los posts I3, I7, L8 y G7 del banco de ideas, enlazarlos aquí y desde ellos a esta landing.

## Fase 2

### Restaurantes

`/limpieza-para-restaurantes-los-mochis/` reutiliza el ángulo del post nacional: desengrase, sanidad, superficies de contacto. La prueba local manda: un restaurante con permiso o una foto de entrega.

### Escuelas

`/suministros-para-escuelas-los-mochis/` se publica antes de julio. Usa la landing de `/instituciones-educativas/` como enlace de apoyo y los testimonios reales de CBTA 81 y CUCII Los Mochis, que ya están autorizados.

### Zonas de entrega

`/zonas-de-entrega-los-mochis/` es una página de confianza, no de keywords. Debe incluir:

- Lista de colonias o sectores con cobertura.
- Días y horario de reparto.
- Pedido mínimo y forma de coordinar.
- Mapa con la ubicación del almacén.
- Enlaces a las landings de producto y a `/contacto/`.

## Prueba local sin logos grandes

La falta de clientes prestigiosos no impide construir confianza. Funciona mejor lo específico que lo grande:

- **Clientes pequeños con nombre y permiso.** “Café [nombre], colonia Centro” vale más que un logo genérico. Si no hay permiso, usa segmento + colonia: “una cafetería de especialidad en el centro”.
- **Reseñas de Google.** Pide una reseña después de cada entrega; responde todas. Muestra el conteo y la calificación solo si son reales.
- **Fotos propias.** Almacén, vehículo de reparto, pedido preparado, equipo. Una foto real del almacén en Los Mochis comunica más que una imagen de stock.
- **Datos operativos.** Días de entrega, colonias cubiertas, tiempo de respuesta, mínimo, facturación y años operando.
- **Casos cortos.** 150–250 palabras: problema del cliente, qué se surtió, cómo se resolvió. Sin cifras inventadas.
- **Cercanía.** “Somos de aquí, entregamos aquí y conocemos la ciudad” es un argumento real frente a un proveedor foráneo.

No usar “200+ clientes” ni “32 estados” mientras no exista evidencia. Ese es el fix 16 de `docs/fixes.md`.

## On-page y SEO técnico

- Title de menos de 60 caracteres y meta description de 140–155.
- H1 único con keyword y ciudad.
- 700–1,000 palabras, sin copiar el texto entre landings.
- Una o dos tablas: colonias/días, categorías/productos o mínimos.
- 3–5 FAQ locales con `FAQPage`.
- 2–4 enlaces internos: home, `/productos/`, posts relacionados y `/contacto/`.
- Schema `WholesaleStore` con `areaServed` de tipo `City` para Los Mochis, además del país si se mantiene el envío nacional. `BreadcrumbList` en cada landing.
- NAP idéntico en el sitio, Google Business Profile y directorios.
- Imágenes WebP con `alt` natural que incluya la ciudad cuando aporte.
- Sitemap automático; canonical propio.
- Enlaces desde el footer, la home y los posts hacia las landings.

## Google Business Profile y citaciones

La landing no reemplaza el perfil de Google; lo alimenta.

- Categoría principal: proveedor o distribuidor de productos de limpieza. Secundaria: papelería.
- Servicios y productos cargados con nombres reales.
- Fotos nuevas cada mes: almacén, entregas, equipo.
- Publicaciones periódicas con ofertas o productos de temporada.
- Preguntas y respuestas propias.
- Reseñas: pedir después de cada entrega y responder en menos de 48 horas.
- Citaciones con NAP consistente: Apple Maps, Bing Places, Facebook, Instagram, LinkedIn, CANACO Los Mochis y directorios locales.

## Medición

Línea base antes de publicar:

- Search Console: consultas con “Los Mochis”, impresiones, clics y posición.
- Google Business Profile: llamadas, indicaciones, clics al sitio y mensajes.
- WhatsApp: mensajes con texto precargado por landing.
- Evento `whatsapp_click` en GTM con `page_location` para separar landings.
- Solicitudes de cotización por landing.

Revisión mensual: posición de las 5 consultas objetivo, clics, conversiones y costo por lead si se activa campaña.

## Roadmap

| Momento | Entregable |
|---|---|
| Semana 0 | Confirmar datos operativos y línea base; revisar Google Business Profile |
| Semana 1 | Schema `areaServed`, enlaces internos y NAP |
| Semana 2–3 | Hub `/suministros-de-limpieza-los-mochis/` |
| Semana 4–5 | `/papeleria-los-mochis/` y `/suministros-para-cafeterias-los-mochis/` |
| Mes 3 | Restaurantes, escuelas y zonas de entrega |
| Mes 4 | Evaluar oficinas y clínicas con datos de Search Console |

## No hacer

- Páginas para otras ciudades o municipios.
- La misma landing cambiando solo el nombre de la ciudad.
- Una página por colonia.
- Reseñas, clientes o cifras inventadas.
- Prometer entrega el mismo día si no está confirmado.
- Duplicar la intención del hub con “proveedor de suministros en Los Mochis”.

## Datos por confirmar

| Dato | Estado |
|---|---|
| Colonias o sectores con cobertura | Confirmado: toda la ciudad de Los Mochis |
| Días y horario de reparto | Confirmado: lunes a sábado, 9:00–18:00 |
| Tiempo de entrega real | Confirmado: 24–48 h o la fecha que se pacte |
| Pedido mínimo local | Confirmado: no hay mínimo; envío gratis desde $500 y $50 en compras menores |
| Facturación y datos fiscales | Confirmado: CFDI 4.0 con RFC y régimen fiscal del cliente |
| Clientes mencionables y permiso | Confirmado: CBTA 81 y CUCII Los Mochis |
| Reseñas actuales en Google | [confirmar] |
| Fotos disponibles de almacén y reparto | Pendiente: el hero del hub reserva el marco para la foto del almacén |
| Responsable de contenido y aprobación | [confirmar] |

## Estado de publicación

- `/suministros-de-limpieza-los-mochis/` publicado con los datos operativos confirmados arriba.
- Schema `WholesaleStore` actualizado: `areaServed` incluye `City` Los Mochis además del país.
- La landing emite `Service` con `areaServed` City, `WebPage`, `BreadcrumbList` y `FAQPage`.
- Enlazada desde el footer, la tarjeta "Entrega en Los Mochis" de la home y el bloque de guías del blog.

Este archivo se actualiza cuando esos datos estén definidos. Las landings se trabajan después, una por una, empezando por el hub.
