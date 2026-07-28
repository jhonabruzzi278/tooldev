---
name: OpenRouter
description: >-
  Gateway unificado que da acceso a cientos de LLM de distintos proveedores con
  una sola API compatible con OpenAI.
category: ia
tags:
  - llm
  - gateway
  - api
  - models
  - routing
officialSite: 'https://openrouter.ai'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Una sola API para cientos de modelos de muchos proveedores
  - Compatibilidad con el formato de la API de OpenAI
  - Selección cambiante de modelos gratuitos
  - Routing y fallback automático entre proveedores
  - 'Panel de uso, costes y rankings de modelos'
  - Playground web para comparar respuestas entre modelos
alternatives:
  - portkey
  - keywords-ai
  - groq
relatedTools:
  - openai
  - claude
  - mistral-ai
howToUse:
  - step: 1
    title: Crea una cuenta y una clave API
    description: >-
      Regístrate en openrouter.ai y genera tu clave API. Puedes empezar con los
      modelos gratuitos sin añadir créditos.
  - step: 2
    title: Elige un modelo y llama a la API
    description: >-
      Consulta el catálogo de modelos, copia su identificador (por ejemplo
      openai/gpt-4o-mini o un modelo :free) y haz una petición de chat
      completion con el formato de OpenAI.
  - step: 3
    title: Configura fallbacks y controla costes
    description: >-
      Define modelos alternativos en la petición para que OpenRouter haga
      fallback si uno falla, y revisa el panel de uso para controlar el gasto.
whenToUse:
  - title: Comparar muchos modelos con una sola clave
    description: >-
      Cuando quieres probar modelos de distintos proveedores sin crear una
      cuenta en cada uno.
  - title: Prototipos con modelos gratuitos
    description: >-
      Cuando quieres construir una demo sin gastar créditos usando los modelos
      free con cuota diaria.
  - title: Resiliencia con fallbacks en producción
    description: >-
      Cuando necesitas que tu aplicación sobreviva a la caída de un proveedor
      concreto cambiando de modelo automáticamente.
examples:
  - title: Chat completion a través de OpenRouter
    code: |
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.3-70b-instruct:free',
          messages: [{ role: 'user', content: 'Dame tres ideas de side projects' }]
        })
      })
    output: >-
      Respuesta de chat en formato OpenAI, enrutada por OpenRouter al proveedor
      disponible del modelo elegido.
tips:
  - text: >-
      Los identificadores de modelo terminados en :free usan la cuota gratuita;
      ideales para prototipos y demos sin gastar créditos.
  - text: >-
      Usa el ranking de la web para descubrir qué modelos usa la comunidad y
      comparar precios por token entre proveedores.
  - text: >-
      Configura fallbacks de modelo en producción para sobrevivir a caídas de un
      proveedor concreto.
faq:
  - question: ¿Qué incluye el plan gratuito de OpenRouter?
    answer: >-
      Modelos gratuitos con 50 peticiones al día, o 1.000 al día tras comprar al
      menos 10 $ en créditos.
  - question: ¿OpenRouter cobra comisión?
    answer: >-
      OpenRouter cobra el precio del proveedor más una pequeña comisión sobre
      los créditos comprados; los modelos :free no consumen créditos pero tienen
      los límites diarios indicados.
  - question: ¿Puedo usar el SDK de OpenAI con OpenRouter?
    answer: >-
      Sí, basta apuntar la URL base a https://openrouter.ai/api/v1 y usar tu
      clave de OpenRouter; el formato de la API es compatible.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/openrouter.webp
---

## ¿Qué es?

OpenRouter es un gateway de LLM que unifica el acceso a cientos de modelos de distintos proveedores (OpenAI, Anthropic, Google, Meta, Mistral y más) detrás de una única API compatible con OpenAI, con routing, fallbacks y un panel de costes.

## ¿Para qué sirve?

Sirve para no casarte con un único proveedor de modelos: puedes comparar precios, cambiar de modelo con una línea de configuración, usar modelos gratuitos para prototipos y añadir redundancia en producción sin reescribir tu integración.

## Cuándo usarla

- Cuando quieres probar y comparar muchos modelos con una sola API key.
- Para prototipos que aprovechan la selección de modelos gratuitos.
- En producción, para tener fallbacks automáticos entre proveedores.

## Cuándo NO usarla

- Si prefieres contratar directamente con un proveedor y minimizar intermediarios.
- Cuando necesitas acuerdos empresariales o SLAs que solo da el proveedor original.

## Pros

- Acceso unificado a prácticamente todo el mercado de LLM.
- Modelos gratuitos con cuota diaria para experimentar.
- Routing y fallback que simplifican la resiliencia.

## Contras

- Añade un intermediario entre tu app y el proveedor del modelo.
- La cuota gratuita diaria es limitada para aplicaciones con tráfico real.
