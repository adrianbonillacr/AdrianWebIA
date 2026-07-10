# Sitio web — 19°89° Arquitectura

Sitio completo del estudio (Next.js + Tailwind CSS + TypeScript), construido según el Libro de Marca 2025. Seis páginas: Inicio, Proyecto desde 0, Proyecto ya construido, Portafolio (+ case-studies), Equipo y Contacto.

## Cómo correr el proyecto

Requisitos: Node.js 20 o superior (en esta máquina hay una copia portable en `C:\Users\adria\nodejs` — agregarla al PATH o instalar Node desde nodejs.org).

```bash
npm install       # solo la primera vez
npm run dev       # desarrollo → http://localhost:3000
npm run build     # build de producción (debe pasar sin errores)
npm start         # servir el build
```

Deploy recomendado: **Vercel** (importar el repo y listo, sin configuración extra).

## Dónde reemplazar los datos de contacto

Todo está centralizado en **`/lib/site-config.ts`** — ningún dato de contacto vive en componentes:

- `whatsapp` → link real de WhatsApp (`https://wa.me/506XXXXXXXX`)
- `email` → correo real
- `calendarUrl` → link de agenda (Calendly o similar); hoy es `#`
- `instagram` / `instagramHandle` → ya apuntan a `@19.89_arquitectura`
- `domain` → dominio final (afecta SEO, sitemap y JSON-LD)

## Qué imágenes subir y con qué nombres

El mapa completo está en **`/lib/images.ts`** (cada ruta tiene su `// TODO: foto real`). Mientras un archivo no exista, el sitio muestra automáticamente un placeholder tonal de marca — al subir la foto con el nombre exacto, aparece sola, sin tocar código.

Resumen de rutas dentro de `/public`:

| Carpeta | Archivos | Uso |
|---|---|---|
| `images/hero/` | `home.jpg`, `proyecto-desde-cero.jpg`, `proyecto-ya-construido.jpg` | Heros y cards de caminos |
| `images/texturas/` | `concreto.jpg`, `madera.jpg`, `travertino.jpg` | Fondos de secciones y banners |
| `images/servicios/` | `desde-cero-etapa-01.jpg` … `04.jpg` | Zigzag de etapas |
| `images/proyectos/<slug>/` | `cover.jpg` + `01.jpg` … `05.jpg` | Card + galería de cada proyecto |
| `images/equipo/` | `retrato-01.jpg` … `retrato-06.jpg` | Retratos (3:4 vertical) |

Formato: horizontal 16:9 o 4:3, **mínimo 2400px de ancho** (retratos: 3:4, mínimo 1200px). Slugs de proyectos: `tree-lodge`, `cafetal`, `diciembre-seis`, `kahwi`, `amarea`, `edica`, `flex-center`.

Otros contenidos pendientes del cliente:

- Nombres y roles del equipo → `/lib/team.ts`
- Descripciones de proyectos (solo Tree Lodge tiene texto real) → `/lib/projects.ts` (campo `excerpt`)
- Logo oficial en SVG → reemplazar el interior de `/components/Logo.tsx`
- Formulario de contacto → envía correos reales vía [FormSubmit](https://formsubmit.co) a `siteConfig.email`. **El primer envío desde el sitio publicado dispara un correo de activación a esa bandeja: hay que abrirlo y confirmar una única vez.** Para control total a futuro, migrar a Resend (`TODO` en `/components/ContactForm.tsx`)

## Swap de Poppins a Gilroy (cuando exista la licencia)

La tipografía se consume vía la variable CSS `--font-sans`, así que el cambio es 1:1 y en un solo archivo:

1. Colocar los archivos de Gilroy (woff2, pesos 300/400/500/600) en `/assets/fonts/`.
2. En `app/layout.tsx`, reemplazar la carga de Google Fonts por `next/font/local`:

```ts
import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    { path: "../assets/fonts/Gilroy-Light.woff2", weight: "300" },
    { path: "../assets/fonts/Gilroy-Regular.woff2", weight: "400" },
    { path: "../assets/fonts/Gilroy-Medium.woff2", weight: "500" },
    { path: "../assets/fonts/Gilroy-SemiBold.woff2", weight: "600" },
  ],
  variable: "--font-poppins", // mantener el nombre de la variable: nada más cambia
  display: "swap",
});
```

3. Usar `gilroy.variable` en el `<html>` (mismo lugar donde hoy está `poppins.variable`). Ningún componente se toca.

(La imagen Open Graph usa los TTF de `/assets/fonts/` — opcionalmente reemplazarlos también por Gilroy en `app/opengraph-image.tsx`.)

## Idiomas (ES / EN)

El sitio es bilingüe con rutas por idioma: `/es/...` y `/en/...` (la raíz redirige a `/es`; las URLs viejas sin prefijo redirigen 308 al español). El selector ES / EN está en la navbar.

**Todo el contenido vive en los diccionarios** `lib/i18n/es.ts` (fuente de verdad) y `lib/i18n/en.ts` (misma estructura). Para corregir un texto, editarlo en ambos archivos — las páginas no tienen textos hardcodeados.

## Estructura

- `/app/[lang]` — páginas por idioma (App Router); `/app` también tiene sitemap, robots e imagen OG generada en build
- `/components` — UI (Navbar, Footer, SectionHeader, Button, ArrowLink, BrandImage, DisciplineGrid, CtaBanner…)
- `/lib/i18n` — diccionarios de contenido ES/EN; `/lib` — proyectos, imágenes y config
- `/public/images` — fotografías optimizadas del sitio
