---
name: Prismic
description: CMS para construir páginas con slices reutilizables y previews visuales.
category: cms
tags: [headless-cms, slices, pages, previews, content]
officialSite: https://prismic.io
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Slices reutilizables para componer páginas
  - Slice Machine para desarrollo local de componentes
  - Previews visuales de borradores
  - API REST con CDN global
  - Versionado y planificación de publicaciones
  - Integraciones con Next.js, Nuxt y SvelteKit
alternatives: [sanity, contentful, storyblok, hygraph, datocms]
relatedTools: [postman]
howToUse:
  - step: 1
    title: "Modela slices con Slice Machine"
    description: "Instala Slice Machine en tu proyecto y define los slices (secciones reutilizables como hero, galería o testimonios) con sus campos, sincronizándolos con tu repositorio de Prismic."
  - step: 2
    title: "Compón páginas en el editor"
    description: "Los editores crean páginas combinando slices en el editor de Prismic, con vista previa visual y la posibilidad de programar publicaciones y versiones."
  - step: 3
    title: "Renderiza con el cliente oficial"
    description: "Usa el cliente de Prismic en tu framework para obtener los documentos y mapear cada slice a su componente del frontend, con previews de borradores activadas."
whenToUse:
  - title: "Sitios de marketing por secciones"
    description: "Cuando las páginas se construyen apilando secciones reutilizables y el equipo de marketing necesita componerlas sin tocar código."
  - title: "Flujo developer-editor bien separado"
    description: "Si quieres que desarrollo defina los componentes (slices) con Slice Machine y el equipo editorial solo combine y rellene contenido."
examples:
  - title: "Obtener una página con el cliente de Prismic"
    code: |
      import * as prismic from '@prismicio/client'

      const client = prismic.createClient('tu-repo')

      const page = await client.getByUID('pagina', 'home')
      console.log(page.data.slices.map(s => s.slice_type))
    output: "Devuelve el documento home con su array de slices listo para mapear a componentes."
tips:
  - text: "Desarrolla los slices en local con Slice Machine y su simulador antes de publicarlos en el repositorio de Prismic."
  - text: "Usa las variaciones de un mismo slice para cubrir casos de diseño sin multiplicar componentes."
  - text: "Activa los previews para que los editores vean los borradores renderizados en la web real antes de publicar."
faq:
  - question: "¿Qué incluye el plan gratuito de Prismic?"
    answer: "El plan gratuito incluye hasta 4 usuarios, documentos e idiomas ilimitados, 100 GB de CDN y 4 millones de llamadas API al mes."
  - question: "¿Qué son los slices?"
    answer: "Los slices son secciones reutilizables de página (hero, galería, texto) definidas por desarrollo con Slice Machine y combinadas libremente por los editores para construir páginas."
  - question: "¿Prismic tiene API GraphQL?"
    answer: "La API principal es REST con CDN; además ofrece integración con GraphQL a través de su ecosistema para frameworks como Gatsby."
publishedAt: 2026-07-21
---

## ¿Qué es?

Prismic es un CMS headless centrado en la construcción de páginas por secciones: el desarrollo define slices reutilizables con Slice Machine y los editores componen páginas combinándolos con previews visuales.

## ¿Para qué sirve?

Sirve para sitios de marketing y contenido editorial donde las páginas se montan apilando secciones modulares, separando claramente el trabajo de desarrollo (componentes) y el editorial (contenido).

## Cuándo usarla

- Cuando las páginas son composiciones de secciones reutilizables.
- Si trabajas con Next.js, Nuxt o SvelteKit y quieres integración oficial.
- Para equipos que valoran previews visuales de borradores.

## Cuándo NO usarla

- Si tu contenido es más relacional que visual (mejor Hygraph o Sanity).
- Cuando prefieres un CMS open source o autoalojable.
- Si necesitas API GraphQL nativa como primera opción.

## Pros

- Modelo de slices muy productivo para marketing.
- Slice Machine con desarrollo local y simulador.
- Plan gratuito muy generoso en llamadas API.
- Previews visuales bien integradas con los frameworks.

## Contras

- Menos flexible para contenido puramente estructurado.
- API principal REST, sin GraphQL nativo de entrega.
- La personalización del editor es limitada frente a Sanity.
