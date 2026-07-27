---
name: Groq
description: Plataforma de inferencia ultrarrápida de modelos abiertos mediante una API compatible con OpenAI, impulsada por chips LPU.
category: ia
tags: [inference, fast, llm, api, open-models]
officialSite: https://console.groq.com
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Inferencia de muy baja latencia gracias a chips LPU propios
  - API compatible con el formato de OpenAI
  - Modelos abiertos populares como Llama, Mixtral y Gemma
  - Consola web con playground y gestión de claves API
  - Streaming de respuestas token a token
  - SDKs oficiales para Python y JavaScript
alternatives: [cerebras, fireworks-ai, nvidia-nim]
relatedTools: [openrouter]
howToUse:
  - step: 1
    title: "Crea una cuenta y genera tu clave API"
    description: "Regístrate en console.groq.com, accede a la sección de API Keys y crea una clave. El plan gratuito se activa sin tarjeta."
  - step: 2
    title: "Haz tu primera llamada con el SDK"
    description: "Instala el SDK de Groq o el de OpenAI apuntando a la URL base de Groq. Elige un modelo como llama-3.3-70b-versatile y envía un mensaje de chat."
  - step: 3
    title: "Ajusta límites y pasa a producción"
    description: "Revisa los límites de peticiones y tokens por minuto de tu plan, activa streaming si lo necesitas y monitoriza el uso desde la consola."
whenToUse:
  - title: "Aplicaciones en tiempo real sensibles a latencia"
    description: "Cuando tu chatbot, agente de voz o autocompletado necesita respuestas casi instantáneas de un LLM."
  - title: "Migrar desde OpenAI con cambios mínimos"
    description: "Cuando quieres cambiar de proveedor modificando solo la URL base y la clave, manteniendo tu cliente OpenAI."
examples:
  - title: "Chat completion con Groq usando el formato OpenAI"
    code: |
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'user', content: 'Resume qué es una LPU' }]
        })
      })
    output: "Respuesta de chat en formato OpenAI con latencia muy baja, típicamente cientos de tokens por segundo."
tips:
  - text: "Aprovecha la velocidad para casos en tiempo real como autocompletado, agentes de voz o chat interactivo donde la latencia se nota."
  - text: "Los límites del plan gratuito varían por modelo; consulta la página de rate limits de la consola antes de lanzar una demo pública."
  - text: "Activa streaming para mejorar la experiencia percibida mostrando la respuesta mientras se genera."
faq:
  - question: "¿Qué incluye el plan gratuito de Groq?"
    answer: "Plan API gratis con límites de peticiones y tokens según el modelo, suficiente para desarrollo y pruebas; los límites exactos se muestran en la consola."
  - question: "¿Groq es compatible con el SDK de OpenAI?"
    answer: "Sí, la API sigue el formato de OpenAI. Basta cambiar la URL base a https://api.groq.com/openai/v1 y usar tu clave de Groq."
  - question: "¿Qué modelos hay disponibles?"
    answer: "Groq sirve modelos abiertos populares como Llama, Mixtral y Gemma, además de modelos de transcripción de audio. El catálogo se actualiza en la consola."
publishedAt: 2026-07-21
---

## ¿Qué es?

Groq es un proveedor de inferencia de IA conocido por su velocidad extrema, lograda con chips LPU (Language Processing Unit) diseñados en la propia compañía. Ofrece una API compatible con OpenAI para ejecutar modelos abiertos con latencias muy bajas.

## ¿Para qué sirve?

Sirve para construir aplicaciones que necesitan respuestas de LLM casi instantáneas: chatbots en tiempo real, agentes de voz, autocompletado y pipelines donde cada milisegundo de latencia importa, usando modelos abiertos en lugar de propietarios.

## Cuándo usarla

- Cuando la latencia de inferencia es el factor crítico de tu producto.
- Para usar modelos abiertos potentes sin gestionar GPUs propias.
- Si quieres migrar desde la API de OpenAI cambiando mínimamente el código.

## Cuándo NO usarla

- Si necesitas un modelo propietario concreto que Groq no sirva.
- Cuando tu volumen exige límites muy altos y aún no quieres pagar un plan superior.

## Pros

- Velocidad de inferencia entre las más altas del mercado.
- Compatibilidad directa con el ecosistema de OpenAI.
- Plan gratuito útil para desarrollo y pruebas.

## Contras

- Catálogo limitado a modelos abiertos que Groq decide servir.
- Los límites gratuitos por modelo pueden quedarse cortos en producción.
