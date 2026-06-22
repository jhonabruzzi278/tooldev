---
name: Next.js
description: Framework React full-stack con renderizado híbrido, rutas anidadas y optimización automática.
category: frontend
tags: [react, framework, ssr, ssg, fullstack, javascript, typescript]
officialSite: https://nextjs.org
github: https://github.com/vercel/next.js
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Web]
featured: false
verified: true
features:
  - Renderizado híbrido (SSR, SSG, ISR) en una sola aplicación
  - File-based routing con layouts anidados
  - Server Components y Server Actions
  - Optimización automática de imágenes y fuentes
  - API Routes para backend integrado
  - Turbopack para desarrollo ultrarrápido
  - App Router con React 19+
alternatives: [astro]
relatedTools: [tailwind-css, visual-studio-code, github-copilot]
howToUse:
  - step: 1
    title: "Crear un proyecto Next.js"
    description: "Ejecuta `npx create-next-app@latest` y elige las opciones de configuración: TypeScript, ESLint, Tailwind CSS, App Router y el directorio src/. Next.js configurará automáticamente todo el proyecto con la estructura recomendada."
  - step: 2
    title: "Definir rutas con el sistema de archivos"
    description: "Crea archivos `page.tsx` dentro de carpetas en `app/` para definir rutas. Usa `layout.tsx` para layouts compartidos, `loading.tsx` para estados de carga y `error.tsx` para manejo de errores por segmento."
  - step: 3
    title: "Elegir la estrategia de renderizado adecuada"
    description: "Por defecto, Next.js usa Server Components. Para datos dinámicos usa `fetch` con `{ cache: 'no-store' }` (SSR), para contenido estático `{ cache: 'force-cache' }` (SSG), y `next.revalidate` para ISR con revalidación programada."
  - step: 4
    title: "Desplegar en producción"
    description: "Conecta tu repositorio a Vercel para despliegues automáticos en cada push. Next.js también se puede desplegar en Node.js, Docker o cualquier plataforma que soporte servidores Node, usando `next build && next start`."
whenToUse:
  - title: "Aplicación web con SEO y renderizado del servidor"
    description: "Cuando necesitas que los motores de búsqueda indexen correctamente tu contenido dinámico. Next.js renderiza el HTML en el servidor antes de enviarlo al cliente, garantizando SEO óptimo para cada página."
  - title: "Proyecto full-stack con React"
    description: "Next.js integra frontend y backend en un solo proyecto. Con Server Actions y API Routes puedes manejar formularios, autenticación y consultas a bases de datos sin necesidad de un servidor externo."
  - title: "Sitio de contenido con actualizaciones periódicas"
    description: "Usa Incremental Static Regeneration (ISR) para sitios como blogs, ecommerce o documentación. Las páginas se generan estáticamente y se revalidan en intervalos configurables sin reconstruir todo el sitio."
examples:
  - title: "Página con Server Side Rendering"
    code: |
      export default async function Pagina() {
        const datos = await fetch('https://api.example.com', {
          cache: 'no-store'
        }).then(res => res.json());
        return <main>{datos.map(d => <p key={d.id}>{d.nombre}</p>)}</main>;
      }
    output: "HTML renderizado en el servidor con datos actualizados en cada solicitud"
  - title: "Server Action para formulario"
    code: |
      async function crearPost(formData: FormData) {
        'use server';
        const titulo = formData.get('titulo');
        await db.insert(posts).values({ titulo });
      }

      export default function Formulario() {
        return (
          <form action={crearPost}>
            <input name="titulo" />
            <button type="submit">Crear</button>
          </form>
        );
      }
    output: "Formulario procesado en el servidor sin JavaScript en el cliente"
tips:
  - text: "Usa Server Components por defecto. Solo añade `'use client'` cuando realmente necesites interactividad, estado o hooks del navegador. Esto reduce el JavaScript enviado al cliente."
  - text: "Aprovecha el componente `Image` de Next.js para optimizar automáticamente las imágenes con lazy loading, formatos modernos (WebP, AVIF) y dimensiones correctas según el viewport."
  - text: "Utiliza `revalidatePath` y `revalidateTag` en Server Actions para invalidar la caché después de mutaciones, manteniendo los datos siempre actualizados sin esperar al intervalo de ISR."
  - text: "Organiza tu proyecto con la carpeta `@/lib` para utilidades, `@/components` para componentes compartidos y `@/hooks` para hooks personalizados. Mantén las rutas de la app limpias con solo lógica de página."
  - text: "Configura `next.config.js` para dominios de imágenes externos y redirecciones. Usa `trailingSlash: true` si migras desde otro framework para mantener compatibilidad de URLs."
faq:
  - question: "¿Cuál es la diferencia entre App Router y Pages Router?"
    answer: "El App Router (carpeta `app/`) es la nueva arquitectura con Server Components, layouts anidados y streaming por defecto. El Pages Router (carpeta `pages/`) es el sistema anterior. Para nuevos proyectos se recomienda App Router."
  - question: "¿Next.js solo funciona con Vercel?"
    answer: "No. Next.js puede desplegarse en cualquier plataforma que ejecute Node.js, incluyendo Docker, AWS, Google Cloud y self-hosting. Vercel solo ofrece integraciones optimizadas adicionales como ISR y analytics."
  - question: "¿Puedo usar Next.js sin TypeScript?"
    answer: "Sí, Next.js funciona perfectamente con JavaScript puro. Sin embargo, TypeScript es altamente recomendado por el tipado, mejor autocompletado y detección temprana de errores."
  - question: "¿Cómo manejo la autenticación en Next.js?"
    answer: "Usa NextAuth.js (Auth.js) para autenticación con múltiples proveedores. Con middleware en el App Router puedes proteger rutas verificando la sesión antes de renderizar cualquier página."
publishedAt: 2026-06-01
---

## ¿Qué es?

Next.js es el framework React más popular para producción. Ofrece renderizado híbrido (SSR + SSG + ISR), enrutamiento basado en archivos, Server Components y un ecosistema completo para construir aplicaciones web full-stack con mínimo esfuerzo de configuración.

## ¿Para qué sirve?

Next.js sirve para construir aplicaciones web modernas: desde landing pages estáticas hasta dashboards complejos con autenticación, bases de datos y APIs. Su modelo híbrido permite elegir la estrategia de renderizado óptima para cada página.

## Cuándo usarla

- Cuando necesitas SEO con React y renderizado del lado del servidor.
- Para construir aplicaciones full-stack sin separar frontend y backend.
- Si quieres SSG con React pero necesitas contenido dinámico vía ISR.
- Para equipos que valoran convenciones sobre configuración.
- Cuando necesitas rendimiento óptimo con optimizaciones automáticas.

## Cuándo NO usarla

- Si tu proyecto es una SPA simple sin necesidades de SEO.
- Cuando prefieres un meta-framework más minimalista como Astro.
- Si tu equipo no está familiarizado con React o el ecosistema Next.js.
- Para sitios puramente estáticos sin contenido dinámico (Astro es más ligero).

## Pros

- Excelente rendimiento con optimizaciones automáticas.
- Comunidad masiva y ecosistema maduro.
- Flexibilidad total de renderizado por página.
- Integración nativa con Vercel para deploys instantáneos.
- Server Components reducen el JavaScript del lado del cliente.

## Contras

- Curva de aprendizaje alta por la cantidad de conceptos.
- Puede ser excesivo para proyectos pequeños o simples.
- Dependencia del ecosistema Vercel para ciertas features avanzadas.
- El App Router aún tiene APIs en evolución.
- Mayor complejidad de build comparado con frameworks estáticos.
