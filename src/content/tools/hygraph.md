---
name: Hygraph
description: Plataforma de contenido GraphQL para datos estructurados y múltiples fuentes.
category: cms
tags:
  - graphql
  - headless-cms
  - content
  - federation
  - api
officialSite: 'https://hygraph.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - API GraphQL nativa para todo el contenido
  - Modelado de contenido estructurado muy expresivo
  - Federación de contenido desde fuentes externas
  - Localización y entornos de proyecto
  - Webhooks y extensiones de UI
  - Assets con transformaciones por URL
alternatives:
  - sanity
  - contentful
  - storyblok
  - datocms
  - prismic
relatedTools:
  - postman
  - hoppscotch
howToUse:
  - step: 1
    title: Modela tu esquema
    description: >-
      Crea un proyecto en hygraph.com y define modelos con campos, relaciones y
      validaciones desde el editor de esquema. La API GraphQL se genera
      automáticamente.
  - step: 2
    title: Crea contenido y locales
    description: >-
      El equipo editorial crea entradas desde la interfaz, con versiones por
      idioma, borradores y flujos de publicación configurables.
  - step: 3
    title: Consulta con GraphQL
    description: >-
      Consume la API con cualquier cliente GraphQL usando un token de acceso:
      filtra, pagina y atraviesa relaciones en una sola query.
whenToUse:
  - title: Equipos que ya trabajan con GraphQL
    description: >-
      Cuando tu stack frontend usa GraphQL de forma nativa y quieres un CMS cuya
      API sea GraphQL de verdad, no una capa sobre REST.
  - title: Contenido muy relacional o federado
    description: >-
      Si tu contenido tiene muchas relaciones entre modelos o necesitas unir
      datos de fuentes externas bajo una única API GraphQL.
examples:
  - title: Query GraphQL de artículos con autor
    code: >
      const res = await
      fetch('https://api-eu-central-1.hygraph.com/v2/TU_PROYECTO/master', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer TU_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `{ articulos(first: 5) { titulo slug autor { nombre } } }`
        })
      })

      const { data } = await res.json()
    output: Devuelve los 5 primeros artículos con su autor resuelto en la misma query.
tips:
  - text: >-
      Diseña las relaciones entre modelos desde el inicio: es donde Hygraph más
      brilla y más difícil es refactorizar después.
  - text: >-
      Usa stages (borrador/publicado) en las queries para controlar exactamente
      qué contenido ve cada entorno.
  - text: >-
      Explora la federación de contenido para enriquecer tu API con datos de
      otros servicios sin duplicarlos.
faq:
  - question: ¿Qué incluye el plan gratuito de Hygraph?
    answer: >-
      El plan Hobby gratuito incluye 3 usuarios, 2 idiomas, 100.000 llamadas API
      al mes, 1 GB de assets y 100 GB de tráfico.
  - question: ¿Hygraph solo funciona con GraphQL?
    answer: >-
      Sí, la API de contenido es GraphQL nativa: el esquema se genera desde tus
      modelos y se consulta con cualquier cliente GraphQL estándar.
  - question: ¿Qué es la federación de contenido?
    answer: >-
      Es la capacidad de exponer datos de APIs y servicios externos a través de
      la misma API GraphQL de Hygraph, uniendo fuentes sin migrar los datos.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/hygraph.webp
---

## ¿Qué es?

Hygraph es un CMS headless GraphQL nativo: modelas contenido estructurado con relaciones ricas y lo consultas todo a través de una API GraphQL generada automáticamente, con opción de federar fuentes externas.

## ¿Para qué sirve?

Sirve para gestionar contenido muy relacional (catálogos, directorios, conocimiento) y para equipos que quieren una única API GraphQL tanto para el contenido del CMS como para datos federados de otros servicios.

## Cuándo usarla

- Cuando tu stack ya gira en torno a GraphQL.
- Si el contenido tiene muchas relaciones entre modelos.
- Para unificar varias fuentes de datos bajo una API.

## Cuándo NO usarla

- Si tu equipo prefiere APIs REST simples.
- Cuando necesitas edición visual de páginas integrada.
- Si buscas una solución open source autoalojable.

## Pros

- GraphQL nativo y muy bien implementado.
- Modelado relacional potente.
- Federación de contenido diferencial.
- Assets con transformaciones incluidas.

## Contras

- Sin API REST: todo pasa por GraphQL.
- Plan Hobby limitado a 3 usuarios y 1 GB de assets.
- Menos editor visual que alternativas como Storyblok.
