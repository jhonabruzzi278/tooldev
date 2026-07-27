---
name: DatoCMS
description: CMS headless con entrega GraphQL y pipeline de imágenes integrado.
category: cms
tags: [headless-cms, graphql, images, content, cdn]
officialSite: https://www.datocms.com
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - API GraphQL de entrega de contenido con CDN
  - Pipeline de imágenes con transformaciones integradas
  - Interfaz de edición sencilla y cuidada
  - Entornos y migraciones de esquema
  - Borradores, publicación programada y previews
  - Plugins y webhooks para extender la interfaz
alternatives: [sanity, contentful, storyblok, hygraph, prismic]
relatedTools: [postman]
howToUse:
  - step: 1
    title: "Modela tu contenido"
    description: "Crea un proyecto en datocms.com y define modelos con campos modulares y bloques. La API GraphQL se genera automáticamente a partir de tus modelos."
  - step: 2
    title: "Carga contenido e imágenes"
    description: "El equipo editorial trabaja en la interfaz de DatoCMS: las imágenes subidas pasan por el pipeline integrado y se sirven optimizadas con parámetros por URL."
  - step: 3
    title: "Consulta la Content Delivery API"
    description: "Haz queries GraphQL al endpoint de entrega con tu token de solo lectura: contenido e imágenes llegan optimizados por CDN."
whenToUse:
  - title: "Sitios con muchas imágenes"
    description: "Cuando el proyecto es intensivo en imágenes y quieres redimensión, formato y optimización automáticos sin integrar un servicio aparte."
  - title: "Equipos que quieren simplicidad editorial"
    description: "Si buscas un CMS headless con interfaz de edición limpia y poco abrumadora para equipos de contenido pequeños o medianos."
examples:
  - title: "Query GraphQL con imagen optimizada"
    code: |
      const res = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer TU_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `{ allPosts(first: 5) { titulo imagen { url(imgixParams: { w: 800 }) } } }`
        })
      })
    output: "Devuelve los posts con la URL de imagen ya transformada al ancho solicitado."
tips:
  - text: "Pasa imgixParams en las queries para recibir las imágenes ya recortadas y optimizadas desde la CDN."
  - text: "Usa los entornos para probar migraciones de esquema sin arriesgar el contenido en producción."
  - text: "Los campos de bloques modulares permiten a los editores componer páginas flexibles sin romper el diseño."
faq:
  - question: "¿Qué incluye el plan gratuito de DatoCMS?"
    answer: "El plan gratuito incluye 3 miembros, 2 entornos, 300 registros, 10 GB de tráfico y 100.000 llamadas API al mes."
  - question: "¿DatoCMS tiene API REST además de GraphQL?"
    answer: "La entrega de contenido es principalmente GraphQL con CDN; existe una API de gestión para administrar el proyecto, pero el consumo típico desde el frontend es GraphQL."
  - question: "¿Cómo funciona el pipeline de imágenes?"
    answer: "Las imágenes subidas se sirven a través de un pipeline integrado que permite redimensionar, recortar y convertir formato pasando parámetros en la URL o en la query."
publishedAt: 2026-07-21
---

## ¿Qué es?

DatoCMS es un CMS headless con una API GraphQL de entrega muy cuidada y un pipeline de imágenes integrado. Combina una interfaz editorial sencilla con entornos, migraciones y publicación programada.

## ¿Para qué sirve?

Sirve para gestionar contenido estructurado y assets visuales de webs y apps, entregando tanto el contenido como las imágenes optimizadas desde un mismo lugar y una sola API.

## Cuándo usarla

- Cuando el proyecto depende mucho de imágenes optimizadas.
- Si quieres GraphQL de entrega con CDN sin montar nada.
- Para equipos editoriales que valoran una interfaz simple.

## Cuándo NO usarla

- Si necesitas editor visual de páginas sobre la web real.
- Cuando los 300 registros del plan gratuito se quedan cortos.
- Si prefieres soluciones open source autoalojables.

## Pros

- Pipeline de imágenes excelente e integrado.
- API GraphQL con CDN rápida y consistente.
- Interfaz editorial limpia y fácil de adoptar.
- Entornos y migraciones bien resueltos.

## Contras

- 300 registros en el plan gratuito es poco para proyectos grandes.
- Tráfico de 10 GB/mes limitado en el plan gratis.
- Menos extensible que Sanity en personalización profunda.
