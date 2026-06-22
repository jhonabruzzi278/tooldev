---
name: astro
description: Framework web moderno que genera sitios estáticos ultra rápidos con islas de interactividad y soporte para múltiples frameworks. Úsala cuando el usuario mencione o pregunte sobre framework, estatico, ssr, islas.
---

# Astro

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** open-source
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux, Web
- **Official Site:** https://astro.build
- **GitHub:** https://github.com/withastro/astro

## Features
- Generación estática por defecto con cero JavaScript
- Islas de arquitectura para interactividad selectiva
- Soporte multi-framework (React, Vue, Svelte, etc.)
- Content Collections con tipado seguro
- SSR opcional con adaptadores de servidor
- Integraciones oficiales para Tailwind, MDX, y más
- Optimización automática de imágenes

## Steps
### 1. Crea un proyecto Astro
Ejecuta npm create astro@latest en tu terminal. El asistente te guiará para elegir entre plantillas (blog, portfolio, docs, minimal), configurar TypeScript e instalar add-ons como Tailwind CSS durante la inicialización.

### 2. Crea páginas y componentes con islas
Escribe páginas .astro combinando HTML, CSS y la sección de frontmatter (---) para lógica del servidor. Integra componentes de React, Vue o Svelte como islas interactivas usando directivas client:load, client:idle o client:visible.

### 3. Define colecciones de contenido tipado
Configura content collections con esquemas Zod en src/content/config.ts. Define los campos del frontmatter de blogs, docs o portfolios. Astro genera tipado automático y valida el contenido en tiempo de build.

### 4. Construye y despliega a producción
Ejecuta npm run build para generar HTML estático ultra-optimizado en la carpeta dist/. Despliega en Netlify, Vercel, Cloudflare Pages o cualquier hosting de archivos estáticos arrastrando la carpeta o conectando el repositorio Git.

## When to Use
- **Sitios de contenido con SEO prioritario:** Para blogs, documentación, portfolios y landing pages donde el rendimiento y el posicionamiento en buscadores son críticos. Astro envía HTML puro y cero JavaScript al navegador por defecto, logrando puntuaciones perfectas en Lighthouse.
- **Proyectos multi-framework sin overhead:** Cuando tu equipo usa React, Vue, Svelte o SolidJS y quieres combinarlos en un mismo proyecto sin conflictos ni bundles pesados. Cada componente solo carga el JavaScript de su framework asociado.
- **Migración progresiva de sitios existentes:** Para modernizar gradualmente un sitio legacy página por página, manteniendo URLs y contenido existente. Astro permite convivir con otras tecnologías durante la transición sin romper nada.

## Examples
### Página Astro con isla interactiva en React
```
---
// src/pages/index.astro
import Contador from '../components/Contador.jsx';
const mensaje = '¡Bienvenido a mi sitio!';
---
<html>
  <head><title>Mi sitio Astro</title></head>
  <body>
    <h1>{mensaje}</h1>
    <Contador client:load />
  </body>
</html>
tput: "HTML renderizado estáticamente en build con un componente React que se hidrata solo cuando la página carga, enviando JavaScript únicamente para esa isla."
```

### Esquema de content collection para blog
```
// src/content/config.ts
import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    autor: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});
export const collections = { blog };
tput: "Colección de blog definida con validación de esquema. Astro tipa automáticamente cada entrada y muestra errores en desarrollo si falta algún campo requerido."
```

## Tips
- Usa client:visible en componentes que deben cargarse solo cuando el usuario hace scroll hasta ellos, ahorrando JavaScript y mejorando el rendimiento en la parte baja de la página.
- Aprovecha las content collections para cualquier contenido repetitivo (blog, docs, productos); Astro valida esquemas, genera tipado TypeScript y permite consultas filtradas por campos.
- Sigue la filosofía de 'cero JavaScript por defecto': pregunta siempre si una funcionalidad realmente necesita JS antes de añadir una isla interactiva.
- Utiliza adaptadores SSR (@astrojs/node, @astrojs/vercel) solo si necesitas renderizado en servidor para dashboards o APIs. Por defecto genera HTML estático que es más rápido, seguro y barato de hospedar.
- Explora el catálogo de integraciones oficiales de Astro (Tailwind, MDX, Sitemap, Partytown) que se instalan con npx astro add y vienen preconfiguradas listas para usar.

## FAQ
- **¿Astro reemplaza a Next.js o Nuxt?** Depende del caso de uso. Astro es superior para sitios enfocados en contenido (marketing, blogs, docs). Next.js y Nuxt son mejores para aplicaciones web altamente interactivas con estado global y navegación SPA.
- **¿Puedo usar React, Vue y Svelte en el mismo proyecto Astro?** Sí, esa es una ventaja distintiva. Puedes importar componentes de diferentes frameworks simultáneamente y cada uno se renderiza de forma aislada sin interferir con los demás.
- **¿Qué es la arquitectura de islas en Astro?** Es un patrón donde la página es HTML estático con 'islas' de interactividad aisladas. Cada isla es un componente que se hidrata de forma independiente en el navegador, sin afectar al resto de la página que permanece como HTML puro y rápido.
- **¿Puedo agregar SSR a un sitio Astro existente?** Sí, instalando un adaptador SSR como @astrojs/node o @astrojs/vercel. Puedes tener rutas estáticas y dinámicas en el mismo proyecto, eligiendo el modo óptimo de renderizado para cada página con export const prerender.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://astro.build
- **Source Code Issues:** Check the repository at https://github.com/withastro/astro for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
