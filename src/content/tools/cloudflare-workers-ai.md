---
name: Cloudflare Workers AI
description: >-
  Inferencia serverless de modelos de IA open source en la red global de GPU de
  Cloudflare, integrada con Workers.
category: ia
tags:
  - serverless
  - edge
  - gpu
  - inference
  - workers
officialSite: 'https://developers.cloudflare.com/workers-ai/'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Catálogo de modelos open source de texto, imagen, audio y embeddings'
  - Inferencia en GPU distribuida en la red global de Cloudflare
  - Integración nativa con Cloudflare Workers mediante bindings
  - API REST compatible con el formato de OpenAI
  - Facturación por Neurons consumidos
  - Baja latencia al ejecutarse cerca del usuario final
alternatives:
  - groq
  - fireworks-ai
  - nvidia-nim
relatedTools:
  - openrouter
howToUse:
  - step: 1
    title: Activa Workers AI en tu cuenta
    description: >-
      Crea una cuenta de Cloudflare, entra al dashboard de Workers AI y revisa
      el catálogo de modelos disponibles. La cuota gratuita se aplica
      automáticamente.
  - step: 2
    title: Llama a un modelo desde un Worker
    description: >-
      Añade el binding de AI en tu wrangler.toml y ejecuta modelos con
      env.AI.run() directamente en tu Worker, sin gestionar claves externas.
  - step: 3
    title: O usa la API REST
    description: >-
      Si no usas Workers, llama al endpoint REST de tu cuenta con tu API token
      de Cloudflare, con formato compatible con OpenAI.
whenToUse:
  - title: Añadir IA a un stack de Cloudflare
    description: >-
      Cuando ya usas Workers, Pages o KV y quieres inferencia sin salir del
      ecosistema ni gestionar claves externas.
  - title: Inferencia global de baja latencia
    description: >-
      Cuando tus usuarios están distribuidos por el mundo y se benefician de
      ejecutar el modelo cerca de ellos en el edge.
examples:
  - title: Inferencia desde un Cloudflare Worker
    code: |
      export default {
        async fetch(request, env) {
          const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [{ role: 'user', content: 'Hola, ¿cómo estás?' }]
          })
          return Response.json(response)
        }
      }
    output: >-
      El Worker devuelve un JSON con la respuesta del modelo ejecutada en la red
      de GPU de Cloudflare.
tips:
  - text: >-
      Si ya usas Workers o Pages, el binding de AI es la vía más simple: no
      necesitas claves externas ni URLs de terceros.
  - text: >-
      Vigila el consumo de Neurons en el dashboard; los modelos más grandes
      consumen más por petición.
  - text: >-
      Combina Workers AI con Workers KV o Vectorize para construir RAG
      serverless completo en el edge.
faq:
  - question: ¿Qué incluye el plan gratuito de Cloudflare Workers AI?
    answer: >-
      10.000 Neurons diarios de inferencia sin coste, suficientes para
      desarrollo y proyectos pequeños.
  - question: ¿Qué son los Neurons?
    answer: >-
      Neurons es la unidad de facturación de Workers AI; cada modelo consume una
      cantidad distinta según su tamaño y el tipo de tarea (texto, imagen, audio
      o embeddings).
  - question: ¿Necesito usar Workers para consumir Workers AI?
    answer: >-
      No es obligatorio; además del binding de Workers existe una API REST por
      cuenta usable desde cualquier backend con tu API token de Cloudflare.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/cloudflare-workers-ai.webp
---

## ¿Qué es?

Cloudflare Workers AI es la plataforma de inferencia serverless de Cloudflare que ejecuta modelos open source (texto, imagen, audio y embeddings) en su red global de GPU, integrada de forma nativa con el ecosistema de Workers.

## ¿Para qué sirve?

Sirve para añadir capacidades de IA a aplicaciones serverless con muy baja latencia, ejecutando la inferencia cerca del usuario final y pagando solo por lo consumido, sin gestionar servidores ni GPUs.

## Cuándo usarla

- Cuando ya construyes sobre Cloudflare Workers y quieres añadir IA sin salir del ecosistema.
- Para aplicaciones globales que se benefician de inferencia en el edge.
- Si buscas modelos open source con facturación por uso y cuota diaria gratuita.

## Cuándo NO usarla

- Si necesitas modelos propietarios de OpenAI o Anthropic, que no están en el catálogo.
- Cuando prefieres un proveedor de inferencia especializado con catálogo más amplio y configurable.

## Pros

- Cuota gratuita diaria generosa para empezar.
- Integración nativa con Workers y el resto del ecosistema Cloudflare.
- Latencia baja gracias a la red global.

## Contras

- Catálogo limitado a los modelos open source que Cloudflare decide servir.
- La unidad de facturación en Neurons puede ser poco intuitiva al estimar costes.
