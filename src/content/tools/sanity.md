---
name: Sanity
description: Workspace de contenido personalizable sobre una plataforma realtime.
category: cms
tags: [headless-cms, content, realtime, graphql, studio]
officialSite: https://www.sanity.io
github: https://github.com/sanity-io/sanity
pricing: freemium
openSource: true
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Sanity Studio personalizable construido en React
  - Lenguaje de consultas GROQ muy flexible
  - Contenido en tiempo real con edición colaborativa
  - APIs de lectura y escritura con CDN global
  - Esquemas como código versionados en tu repo
  - Webhooks, plugins y ecosistema amplio
alternatives: [contentful, storyblok, hygraph, datocms, prismic]
relatedTools: [postman]
howToUse:
  - step: 1
    title: "Inicializa el proyecto"
    description: "Ejecuta npm create sanity@latest para crear un proyecto con el Studio. Define tus esquemas de contenido en TypeScript y despliega el Studio donde quieras."
  - step: 2
    title: "Crea contenido en el Studio"
    description: "El equipo editorial trabaja en el Studio, una SPA de React que puedes personalizar con tus propios componentes, validaciones y vistas previas."
  - step: 3
    title: "Consulta con GROQ o GraphQL"
    description: "Desde tu frontend, consulta el contenido con GROQ usando el cliente oficial o con la API GraphQL, servido por CDN para lecturas rápidas."
whenToUse:
  - title: "Contenido estructurado con máxima flexibilidad"
    description: "Cuando necesitas modelar contenido complejo con esquemas como código y un editor totalmente personalizable para el equipo de contenido."
  - title: "Experiencias realtime y colaborativas"
    description: "Si varias personas editan a la vez y quieres colaboración en tiempo real, historial de cambios y previews en vivo integradas."
examples:
  - title: "Consulta GROQ de posts publicados"
    code: |
      import { createClient } from '@sanity/client'

      const client = createClient({
        projectId: 'tuProjectId',
        dataset: 'production',
        apiVersion: '2026-07-21',
        useCdn: true
      })

      const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...10]{ title, slug, "author": author->name }`
      )
    output: "Devuelve los 10 posts más recientes con título, slug y nombre del autor resuelto."
tips:
  - text: "Aprende GROQ: las proyecciones y joins con -> te ahorran muchísimas llamadas a la API."
  - text: "Versiona los esquemas en Git junto al frontend para que contenido y código evolucionen juntos."
  - text: "Activa useCdn en lecturas públicas para latencia mínima, y desactívalo solo si necesitas el dato más fresco posible."
faq:
  - question: "¿Qué incluye el plan gratuito de Sanity?"
    answer: "El plan gratuito incluye 20 usuarios, 2 datasets, 10.000 documentos, 100.000 peticiones y 100 GB de CDN al mes."
  - question: "¿Sanity es open source?"
    answer: "El Sanity Studio y las librerías cliente son open source y están en GitHub; el backend de contenido es un servicio gestionado en la nube de Sanity."
  - question: "¿Qué es GROQ?"
    answer: "GROQ es el lenguaje de consultas de Sanity: permite filtrar, ordenar, proyectar campos y resolver referencias entre documentos en una sola petición."
  - question: "¿Puedo usar GraphQL en vez de GROQ?"
    answer: "Sí, Sanity puede desplegar una API GraphQL generada a partir de tus esquemas, aunque GROQ suele ser más expresivo para consultas de contenido."
publishedAt: 2026-07-21
---

## ¿Qué es?

Sanity es una plataforma de contenido headless que combina un Studio de edición open source y personalizable con un backend realtime gestionado. El contenido se consulta con GROQ o GraphQL a través de APIs con CDN.

## ¿Para qué sirve?

Sirve para gestionar contenido estructurado de webs, apps y productos digitales, dando a los desarrolladores esquemas como código y a los editores una interfaz colaborativa en tiempo real.

## Cuándo usarla

- Cuando necesitas un editor de contenido muy personalizable.
- Si tu equipo quiere esquemas versionados en el repo.
- Para proyectos con edición colaborativa y previews en vivo.

## Cuándo NO usarla

- Si buscas un CMS con editor visual de páginas tipo drag and drop.
- Para proyectos muy simples donde un CMS tradicional basta.
- Cuando el equipo no quiere aprender un lenguaje de consultas propio.

## Pros

- Studio open source y extensible con React.
- GROQ muy potente para consultas de contenido.
- Colaboración en tiempo real de serie.
- Plan gratuito generoso con 20 usuarios.

## Contras

- GROQ tiene curva de aprendizaje.
- El backend es servicio gestionado, no autoalojable.
- Personalizar el Studio requiere trabajo de desarrollo.
