---
name: Google AI Studio
description: Playground web gratuito de Google para probar modelos Gemini, experimentar con prompts y generar claves API para desarrollo.
category: ia
tags: [gemini, api, playground, prompts, google]
officialSite: https://aistudio.google.com
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - Playground web para probar modelos Gemini sin escribir código
  - Generación de claves API gratuitas para la API de Gemini
  - Ajuste de parámetros como temperatura, top-p y top-k
  - Soporte para prompts multimodales con texto, imágenes, audio y vídeo
  - Historial de prompts y comparación de respuestas entre modelos
  - Acceso anticipado a modelos Gemini experimentales
alternatives: [openai, claude, mistral-ai]
relatedTools: [notebooklm, stitch, jules]
howToUse:
  - step: 1
    title: "Accede con tu cuenta de Google"
    description: "Entra en aistudio.google.com e inicia sesión con tu cuenta de Google. No hace falta tarjeta ni configurar facturación para empezar a usar el playground."
  - step: 2
    title: "Prueba prompts en el playground"
    description: "Selecciona un modelo Gemini, escribe tu prompt y ajusta parámetros como la temperatura. Puedes subir imágenes o documentos para prompts multimodales y guardar tus experimentos."
  - step: 3
    title: "Genera una clave API e intégrala"
    description: "Haz clic en Get API key para crear una clave gratuita. Úsala en tu aplicación con el SDK oficial de Google AI o con llamadas REST directas a la API de Gemini."
whenToUse:
  - title: "Prototipar prompts con modelos Gemini"
    description: "Cuando quieres iterar sobre prompts y parámetros con feedback inmediato antes de escribir el código de integración."
  - title: "Obtener una clave API de Gemini sin coste"
    description: "Cuando necesitas credenciales para la API de Gemini en desarrollo sin configurar facturación en Google Cloud."
examples:
  - title: "Llamada básica a la API de Gemini"
    code: |
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
        {
          method: 'POST',
          headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Explica qué es un webhook' }] }]
          })
        }
      )
      const data = await res.json()
    output: "Devuelve un JSON con el texto generado por Gemini en candidates[0].content.parts[0].text."
tips:
  - text: "Usa los prompts estructurados para definir instrucciones del sistema y ejemplos de entrada y salida que mejoren la consistencia de las respuestas."
  - text: "Prueba el mismo prompt en varios modelos Gemini desde el playground para comparar calidad y velocidad antes de elegir uno para producción."
  - text: "Las claves API gratuitas tienen límites de peticiones por minuto y por día; revisa la página de rate limits si tu aplicación empieza a crecer."
faq:
  - question: "¿Qué incluye el plan gratuito de Google AI Studio?"
    answer: "AI Studio es gratis; además, algunos modelos de la API de Gemini incluyen cuota gratuita con límites específicos de peticiones por minuto y por día según el modelo."
  - question: "¿Necesito una tarjeta de crédito para empezar?"
    answer: "No. Google AI Studio y la generación de claves API funcionan con solo una cuenta de Google, sin configurar facturación."
  - question: "¿Qué diferencia hay con Vertex AI?"
    answer: "AI Studio es la herramienta gratuita y rápida para prototipado; Vertex AI es la plataforma empresarial de Google Cloud con MLOps, más controles y facturación por uso."
publishedAt: 2026-07-21
---

## ¿Qué es?

Google AI Studio es el playground web oficial de Google para trabajar con los modelos Gemini. Permite experimentar con prompts, probar capacidades multimodales y generar claves API para integrar los modelos en aplicaciones propias, todo desde el navegador y sin coste inicial.

## ¿Para qué sirve?

Sirve para prototipar aplicaciones con modelos Gemini antes de escribir código, ajustar prompts y parámetros con feedback inmediato, y obtener credenciales de API para llevar esos experimentos a producción con el SDK de Google AI.

## Cuándo usarla

- Cuando quieres probar modelos Gemini sin configurar infraestructura ni pagar nada.
- Para iterar rápido sobre prompts y comparar respuestas entre modelos.
- Para generar tu primera clave API de Gemini en minutos.

## Cuándo NO usarla

- Si necesitas controles empresariales, MLOps o despliegue en tu propia nube; para eso está Vertex AI.
- Cuando tu stack ya depende de otro proveedor de LLM y no planeas migrar.

## Pros

- Acceso gratuito inmediato con solo una cuenta de Google.
- Interfaz simple ideal para principiantes.
- Permite pasar del experimento al código con la misma clave API.

## Contras

- Los límites de la capa gratuita pueden quedarse cortos en producción.
- Menos opciones de gobernanza y despliegue que Vertex AI.
