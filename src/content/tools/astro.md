---
name: Astro
description: Framework web moderno que genera sitios estáticos ultra rápidos con islas de interactividad y soporte para múltiples frameworks.
category: frontend
tags: [framework, estatico, ssr, islas, rendimiento, javascript]
officialSite: https://astro.build
github: https://github.com/withastro/astro
pricing: open-source
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux, Web]
featured: true
features:
  - Generación estática por defecto con cero JavaScript
  - Islas de arquitectura para interactividad selectiva
  - Soporte multi-framework (React, Vue, Svelte, etc.)
  - Content Collections con tipado seguro
  - SSR opcional con adaptadores de servidor
  - Integraciones oficiales para Tailwind, MDX, y más
  - Optimización automática de imágenes
alternatives: []
relatedTools: [figma, github-copilot]
howToUse:
  - step: 1
    title: "Crea un proyecto Astro"
    description: "Ejecuta npm create astro@latest en tu terminal. El asistente te guiará para elegir entre plantillas (blog, portfolio, docs, minimal), configurar TypeScript e instalar add-ons como Tailwind CSS durante la inicialización."
  - step: 2
    title: "Crea páginas y componentes con islas"
    description: "Escribe páginas .astro combinando HTML, CSS y la sección de frontmatter (---) para lógica del servidor. Integra componentes de React, Vue o Svelte como islas interactivas usando directivas client:load, client:idle o client:visible."
  - step: 3
    title: "Define colecciones de contenido tipado"
    description: "Configura content collections con esquemas Zod en src/content/config.ts. Define los campos del frontmatter de blogs, docs o portfolios. Astro genera tipado automático y valida el contenido en tiempo de build."
  - step: 4
    title: "Construye y despliega a producción"
    description: "Ejecuta npm run build para generar HTML estático ultra-optimizado en la carpeta dist/. Despliega en Netlify, Vercel, Cloudflare Pages o cualquier hosting de archivos estáticos arrastrando la carpeta o conectando el repositorio Git."
whenToUse:
  - title: "Sitios de contenido con SEO prioritario"
    description: "Para blogs, documentación, portfolios y landing pages donde el rendimiento y el posicionamiento en buscadores son críticos. Astro envía HTML puro y cero JavaScript al navegador por defecto, logrando puntuaciones perfectas en Lighthouse."
  - title: "Proyectos multi-framework sin overhead"
    description: "Cuando tu equipo usa React, Vue, Svelte o SolidJS y quieres combinarlos en un mismo proyecto sin conflictos ni bundles pesados. Cada componente solo carga el JavaScript de su framework asociado."
  - title: "Migración progresiva de sitios existentes"
    description: "Para modernizar gradualmente un sitio legacy página por página, manteniendo URLs y contenido existente. Astro permite convivir con otras tecnologías durante la transición sin romper nada."
examples:
  - title: "Página Astro con isla interactiva en React"
    code: |
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
    output: "HTML renderizado estáticamente en build con un componente React que se hidrata solo cuando la página carga, enviando JavaScript únicamente para esa isla."
  - title: "Esquema de content collection para blog"
    code: |
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
    output: "Colección de blog definida con validación de esquema. Astro tipa automáticamente cada entrada y muestra errores en desarrollo si falta algún campo requerido."
tips:
  - text: "Usa client:visible en componentes que deben cargarse solo cuando el usuario hace scroll hasta ellos, ahorrando JavaScript y mejorando el rendimiento en la parte baja de la página."
  - text: "Aprovecha las content collections para cualquier contenido repetitivo (blog, docs, productos); Astro valida esquemas, genera tipado TypeScript y permite consultas filtradas por campos."
  - text: "Sigue la filosofía de 'cero JavaScript por defecto': pregunta siempre si una funcionalidad realmente necesita JS antes de añadir una isla interactiva."
  - text: "Utiliza adaptadores SSR (@astrojs/node, @astrojs/vercel) solo si necesitas renderizado en servidor para dashboards o APIs. Por defecto genera HTML estático que es más rápido, seguro y barato de hospedar."
  - text: "Explora el catálogo de integraciones oficiales de Astro (Tailwind, MDX, Sitemap, Partytown) que se instalan con npx astro add y vienen preconfiguradas listas para usar."
faq:
  - question: "¿Astro reemplaza a Next.js o Nuxt?"
    answer: "Depende del caso de uso. Astro es superior para sitios enfocados en contenido (marketing, blogs, docs). Next.js y Nuxt son mejores para aplicaciones web altamente interactivas con estado global y navegación SPA."
  - question: "¿Puedo usar React, Vue y Svelte en el mismo proyecto Astro?"
    answer: "Sí, esa es una ventaja distintiva. Puedes importar componentes de diferentes frameworks simultáneamente y cada uno se renderiza de forma aislada sin interferir con los demás."
  - question: "¿Qué es la arquitectura de islas en Astro?"
    answer: "Es un patrón donde la página es HTML estático con 'islas' de interactividad aisladas. Cada isla es un componente que se hidrata de forma independiente en el navegador, sin afectar al resto de la página que permanece como HTML puro y rápido."
  - question: "¿Puedo agregar SSR a un sitio Astro existente?"
    answer: "Sí, instalando un adaptador SSR como @astrojs/node o @astrojs/vercel. Puedes tener rutas estáticas y dinámicas en el mismo proyecto, eligiendo el modo óptimo de renderizado para cada página con export const prerender."
publishedAt: 2026-05-31
---

## ¿Qué es?

Astro es un framework web enfocado en rendimiento que genera HTML estático por defecto y permite agregar interactividad solo donde la necesitas mediante "islas". Su arquitectura única te permite usar componentes de React, Vue, Svelte y otros frameworks en el mismo proyecto, enviando solo el JavaScript necesario al navegador.

## ¿Para qué sirve?

Astro sirve para construir sitios web extremadamente rápidos como blogs, documentación, portfolios y landing pages. También es ideal para sitios de contenido que necesitan SEO óptimo, proyectos que combinan múltiples frameworks y aplicaciones que priorizan el rendimiento sobre la interactividad compleja.

## Cuándo usarla

- Para sitios de contenido donde el rendimiento y el SEO son críticos.
- Cuando quieres usar componentes de diferentes frameworks en un mismo proyecto.
- Para blogs, documentación, portfolios y landing pages.
- Si necesitas generar miles de páginas estáticas de forma eficiente.
- Cuando quieres migrar progresivamente de un framework a otro.

## Cuándo NO usarla

- Para aplicaciones SPA altamente interactivas tipo dashboard.
- Cuando necesitas estado global complejo compartido entre muchos componentes.
- Si tu equipo solo conoce un framework y no necesita las ventajas de Astro.
- Para prototipos rápidos donde la configuración extra no vale la pena.

## Pros

- Rendimiento excepcional con cero JavaScript por defecto.
- Flexibilidad para usar cualquier framework de UI.
- Content Collections con validación de esquemas y tipado.
- Ecosistema de integraciones en crecimiento activo.
- Documentación clara y comunidad acogedora.

## Contras

- Ecosistema más joven comparado con Next.js o Nuxt.
- Menos plugins y templates de terceros disponibles.
- La arquitectura de islas requiere cambio de mentalidad.
- Algunas integraciones pueden tener menos madurez que las oficiales.
- SSR requiere configuración adicional con adaptadores.
