---
name: Mistral AI
description: >-
  API europea de modelos de lenguaje, código, embeddings y multimodales de
  Mistral, con opciones abiertas y propietarias.
category: ia
tags:
  - llm
  - models
  - api
  - embeddings
  - multilingual
officialSite: 'https://mistral.ai'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Modelos de lenguaje propietarios como Mistral Large y Mistral Small
  - Modelos abiertos con pesos publicados bajo Apache 2.0
  - Codestral para generación y completado de código
  - API de embeddings para búsqueda semántica y RAG
  - Modelos multimodales con capacidad de visión
  - Le Chat como interfaz de chat para probar los modelos
alternatives:
  - openai
  - deepseek
  - claude
relatedTools:
  - openrouter
  - groq
howToUse:
  - step: 1
    title: Crea una cuenta en la consola
    description: >-
      Regístrate en console.mistral.ai y activa el modo gratuito de
      experimentación para obtener tu clave API sin pagar.
  - step: 2
    title: Elige un modelo y haz tu primera llamada
    description: >-
      Selecciona un modelo como mistral-small-latest o codestral-latest y envía
      una petición de chat completion con el SDK de Mistral o el de OpenAI.
  - step: 3
    title: Explora embeddings y visión
    description: >-
      Prueba la API de embeddings para búsqueda semántica y los modelos con
      visión para analizar imágenes, según las necesidades de tu aplicación.
whenToUse:
  - title: Productos multilingües europeos
    description: >-
      Cuando tu aplicación trabaja con varios idiomas de la UE y valoras un
      proveedor europeo por soberanía de datos.
  - title: Tareas de código y RAG en la misma plataforma
    description: >-
      Cuando necesitas autocompletado de código con Codestral o embeddings para
      búsqueda semántica sin cambiar de proveedor.
examples:
  - title: Chat completion con la API de Mistral
    code: |
      const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'mistral-small-latest',
          messages: [{ role: 'user', content: 'Hola, preséntate en una frase' }]
        })
      })
    output: >-
      Respuesta de chat en formato OpenAI generada por el modelo Mistral
      elegido.
tips:
  - text: >-
      Mistral destaca en multilingüe europeo; si tu producto trabaja en varios
      idiomas de la UE, haz benchmarks contra OpenAI y DeepSeek.
  - text: >-
      Los modelos abiertos de Mistral se pueden descargar y self-hostear, útil
      si más adelante necesitas salir de la API.
  - text: >-
      Usa Codestral para autocompletado de código; está optimizado para
      fill-in-the-middle.
faq:
  - question: ¿Qué incluye el plan gratuito de Mistral AI?
    answer: >-
      Modo API gratis para experimentación con límites reducidos de uso, pensado
      para probar los modelos antes de pasar a un plan de pago.
  - question: ¿Mistral tiene modelos open source?
    answer: >-
      Sí, varios modelos como Mistral 7B, Mixtral y Mistral Small se publican
      con pesos abiertos bajo licencia Apache 2.0, aunque la plataforma en sí es
      un servicio propietario.
  - question: ¿La API es compatible con OpenAI?
    answer: >-
      Sí, el endpoint de chat completions sigue un formato muy similar al de
      OpenAI y existen SDKs oficiales para Python y JavaScript.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/mistral-ai.webp
---

## ¿Qué es?

Mistral AI es una empresa europea de IA que desarrolla modelos de lenguaje propietarios y abiertos. Su plataforma La Plateforme ofrece acceso por API a modelos de chat, código, embeddings y visión, con sede y procesamiento en Europa.

## ¿Para qué sirve?

Sirve para integrar modelos de lenguaje competitivos en aplicaciones, especialmente cuando importan el multilingüismo europeo, la soberanía de datos en la UE o la posibilidad de combinar API gestionada con modelos abiertos autoalojados.

## Cuándo usarla

- Cuando tu producto trabaja con varios idiomas europeos.
- Si valoras un proveedor europeo por cumplimiento o soberanía de datos.
- Para tareas de código con Codestral o RAG con sus embeddings.

## Cuándo NO usarla

- Si el modo gratuito se te queda corto y buscas la opción más barata del mercado.
- Cuando necesitas ecosistema y herramientas tan maduras como las de OpenAI.

## Pros

- Modelos competitivos con buen rendimiento multilingüe.
- Combina modelos propietarios y abiertos bajo la misma API.
- Proveedor europeo con opciones de despliegue flexibles.

## Contras

- El modo gratuito tiene límites reducidos solo para experimentar.
- Ecosistema de herramientas menor que el de OpenAI o Anthropic.
