# ADR-001: Astro SSG con Islands Architecture, desplegado en Vercel

**Estado:** Aceptado (implementado)
**Fecha:** Reconstruido — decisión presente desde el commit inicial (`3388643`, "ToolDev MVP with Astro, Tailwind, shadcn/ui")
**Contexto:** Sitio de descubrimiento de herramientas con ~150 páginas de contenido, requisitos fuertes de SEO y performance, más interactividad puntual (FAQ, galerías, chat, favoritos, toggles).

## Decisión

- Generar el 100% de las páginas estáticamente con **Astro 6** (output pre-renderizado).
- Usar **islas React 19** (`client:load`) solo donde hay interactividad: AnimatedFAQ, ScreenshotGallery, ContactForm, ChatIA, FavoritesList, ThemeToggle.
- Alojar en **Vercel** con el adapter oficial `@astrojs/vercel`; un único endpoint serverless (`/api/recommend`) con `prerender = false`.

## Consecuencias

**Positivas:**
- Build ~7s para 150 páginas; HTML puro sin JS de servidor → performance y SEO máximos.
- Coste de hosting ~0 (tier gratuito Vercel suficiente).
- Superficie de ataque mínima: no hay servidor de aplicación permanente.

**Negativas / riesgos:**
- Acoplamiento a Vercel para el endpoint del chat y los headers (vercel.json). Migrable (Astro multi-adapter) pero los security headers tendrían que reimplementarse.
- Cada cambio de contenido requiere rebuild completo (aceptable a 7s).

## Alternativas consideradas (inferidas)

- Next.js SSG: descartada probablemente por el modelo de islands de Astro, más ligero para sitios de contenido.
- CMS headless + API: descartada — ver ADR-002.
