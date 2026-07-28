---
name: Storyblok
description: CMS headless con editor visual y contenido basado en componentes.
category: cms
tags:
  - headless-cms
  - visual-editor
  - components
  - content
officialSite: 'https://www.storyblok.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Editor visual en tiempo real sobre tu propia web
  - Contenido basado en componentes reutilizables (bloks)
  - API de entrega de contenido con CDN
  - Gestión de imágenes con transformaciones por URL
  - Flujos de publicación y versionado de contenido
  - 'SDKs para Next.js, Nuxt, Astro y más frameworks'
alternatives:
  - sanity
  - contentful
  - hygraph
  - datocms
  - prismic
relatedTools:
  - postman
howToUse:
  - step: 1
    title: Define tus componentes (bloks)
    description: >-
      Crea un espacio en storyblok.com y modela el contenido como componentes:
      hero, galería, texto enriquecido. Cada blok define sus campos editables.
  - step: 2
    title: Edita con el editor visual
    description: >-
      Conecta tu frontend al editor visual: los editores ven la web real y
      editan el contenido haciendo clic sobre cada componente, con preview en
      tiempo real.
  - step: 3
    title: Renderiza el contenido por API
    description: >-
      Consume la Content Delivery API con un SDK oficial: cada página llega como
      un árbol de bloks que mapeas a tus componentes del frontend.
whenToUse:
  - title: Equipos que quieren edición visual
    description: >-
      Cuando el equipo de contenido necesita ver y editar la página real en vez
      de formularios abstractos, manteniendo la arquitectura headless.
  - title: Sitios construidos con componentes
    description: >-
      Si tu frontend ya está hecho de componentes reutilizables (React, Vue,
      Astro), el modelo de bloks encaja de forma natural con tu código.
examples:
  - title: Obtener una página con el SDK
    code: |
      import StoryblokClient from 'storyblok-js-client'

      const Storyblok = new StoryblokClient({ accessToken: 'TU_TOKEN' })

      const { data } = await Storyblok.get('cdn/stories/home', {
        version: 'published'
      })
      console.log(data.story.content.body)
    output: >-
      Devuelve el array de bloks de la página home listo para mapear a
      componentes.
tips:
  - text: >-
      Nombra los bloks igual que tus componentes del frontend para que el mapeo
      sea directo y predecible.
  - text: >-
      Usa el servicio de imágenes (/m/ en las URLs) para redimensionar y
      optimizar assets sin procesarlos tú.
  - text: >-
      Configura el preview con la URL de desarrollo para editar en vivo contra
      tu entorno local.
faq:
  - question: ¿Qué incluye el plan gratuito de Storyblok?
    answer: >-
      El plan gratuito incluye un espacio, un usuario, 100.000 peticiones API al
      mes y el editor visual.
  - question: ¿Qué diferencia a Storyblok de otros CMS headless?
    answer: >-
      Su editor visual en tiempo real: los editores trabajan sobre la página
      real montada con tu frontend, en lugar de formularios desconectados del
      diseño.
  - question: ¿Storyblok funciona con cualquier framework?
    answer: >-
      Sí, la API es agnóstica y hay SDKs oficiales para Next.js, Nuxt, Astro,
      SvelteKit, Remix y más, además de la API REST genérica.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/storyblok.webp
---

## ¿Qué es?

Storyblok es un CMS headless que organiza el contenido en componentes reutilizables (bloks) y destaca por su editor visual: los equipos editan directamente sobre la página real con preview en tiempo real.

## ¿Para qué sirve?

Sirve para construir sitios y aplicaciones donde el contenido se compone de bloques modulares, dando autonomía visual a los editores sin sacrificar la arquitectura headless ni la libertad de framework.

## Cuándo usarla

- Cuando los editores necesitan edición visual sobre la web real.
- Si tu frontend está basado en componentes reutilizables.
- Para proyectos de marketing con páginas modulares frecuentes.

## Cuándo NO usarla

- Si prefieres un CMS open source o autoalojable.
- Para contenido puramente estructurado sin componentes visuales.
- Cuando el plan gratuito de un usuario se queda corto para tu equipo.

## Pros

- Editor visual único en su categoría.
- Modelo de componentes que encaja con frameworks modernos.
- Buenos SDKs y servicio de imágenes integrado.
- API sencilla y bien documentada.

## Contras

- Plan gratuito limitado a un espacio y un usuario.
- No es open source.
- El modelado fino de datos relacionales es menos potente que en CMS orientados a grafos.
