---
name: OpenGraph.to
description: >-
  Extrae tags Open Graph, Twitter Card y SEO de cualquier URL pública: título,
  descripción, imagen, puntuación y meta tags sugeridos en JSON.
category: apis
tags:
  - open-graph
  - seo
  - meta-tags
  - api
  - scraping
officialSite: 'https://www.opengraph.to'
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Extracción de tags Open Graph y Twitter Card
  - 'Título, descripción e imagen de cualquier URL pública'
  - Puntuación SEO de los meta tags
  - Sugerencias de meta tags en la respuesta
  - Sin registro ni API key
  - Respuesta JSON con caché de 5 minutos
alternatives: []
relatedTools:
  - postman
howToUse:
  - step: 1
    title: Llama a la API con una URL
    description: >-
      Haz una petición GET a la API de OpenGraph.to pasando la URL pública que
      quieres analizar. No hace falta registro ni clave de acceso.
  - step: 2
    title: Lee los datos extraídos
    description: >-
      La respuesta JSON incluye el título, la descripción, la imagen destacada y
      los tags Open Graph y Twitter Card detectados en la página.
  - step: 3
    title: Usa la puntuación y sugerencias
    description: >-
      Aprovecha la puntuación SEO y los meta tags sugeridos para auditar tus
      propias páginas o para generar previews de enlaces en tu app.
whenToUse:
  - title: Previews de enlaces en tu app
    description: >-
      Cuando quieres mostrar tarjetas de preview con título, descripción e
      imagen al pegar un enlace, sin montar un scraper propio.
  - title: Auditoría rápida de meta tags
    description: >-
      Para comprobar qué tags Open Graph y Twitter Card publica una página y
      recibir sugerencias de mejora SEO en una sola llamada.
examples:
  - title: Obtener los datos Open Graph de una URL
    code: |
      const url = encodeURIComponent('https://astro.build')
      const res = await fetch(`https://www.opengraph.to/api/og?url=${url}`)
      const data = await res.json()
      console.log(data.title, data.image, data.score)
    output: >-
      Devuelve el título, la imagen destacada, los meta tags detectados y la
      puntuación SEO de la URL.
tips:
  - text: >-
      Respeta el límite de 10 peticiones por hora por IP: cachea los resultados
      en tu servidor para no desperdiciar cuota.
  - text: >-
      La API cachea cada URL durante 5 minutos: si acabas de cambiar tus meta
      tags, espera unos minutos para ver el cambio.
  - text: >-
      Codifica siempre la URL objetivo con encodeURIComponent antes de pasarla
      como parámetro.
faq:
  - question: ¿Qué incluye el plan gratuito de OpenGraph.to?
    answer: >-
      Es una API pública gratis sin registro ni clave, con 10 peticiones por
      hora por IP y caché de 5 minutos por URL.
  - question: ¿Qué datos devuelve exactamente?
    answer: >-
      Devuelve en JSON el título, la descripción, la imagen destacada, los tags
      Open Graph y Twitter Card detectados, una puntuación SEO y meta tags
      sugeridos.
  - question: ¿Puedo usarlo para generar previews en producción?
    answer: >-
      Sí, pero con el límite de 10 peticiones por hora por IP conviene cachear
      las respuestas en tu backend para no agotar la cuota con picos de tráfico.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/opengraph-to.webp
---

## ¿Qué es?

OpenGraph.to es una API pública y gratuita que extrae los meta tags Open Graph y Twitter Card de cualquier URL y devuelve título, descripción, imagen, puntuación SEO y sugerencias en JSON, sin registro.

## ¿Para qué sirve?

Sirve para generar previews de enlaces en aplicaciones, auditar los meta tags de tus propias páginas y obtener recomendaciones de mejora SEO sin montar un scraper ni gestionar proxies.

## Cuándo usarla

- Cuando necesitas tarjetas de preview de enlaces sin scrapear tú mismo.
- Para auditorías puntuales de Open Graph y Twitter Cards.
- Si quieres una API sin registro ni claves para proyectos pequeños.

## Cuándo NO usarla

- Si necesitas más de 10 peticiones por hora por IP.
- Para scraping profundo de contenido más allá de los meta tags.
- Cuando requieres un SLA o soporte garantizado.

## Pros

- Gratis, sin registro ni API key.
- Respuesta JSON completa con puntuación y sugerencias.
- Ideal para previews de enlaces rápidos.
- Caché integrado de 5 minutos.

## Contras

- Solo 10 peticiones por hora por IP.
- Limitado a meta tags, no extrae contenido completo.
- Dependencia de un servicio externo sin planes garantizados.
