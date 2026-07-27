---
name: Keywords AI
description: Gateway y plataforma de monitorización para usar y observar muchos modelos de lenguaje desde una interfaz común.
category: ia
tags: [gateway, llm, monitoring, logs, evals]
officialSite: https://keywordsai.co
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Acceso unificado a muchos modelos de lenguaje mediante una sola API
  - Logging automático de peticiones y respuestas de LLM
  - Evaluaciones sobre los logs registrados
  - Métricas de latencia, coste y uso por modelo
  - API compatible con el formato de OpenAI
  - Dashboard para depurar y analizar conversaciones
alternatives: [portkey, openrouter, langfuse]
relatedTools: [braintrust, comet-opik]
howToUse:
  - step: 1
    title: "Regístrate y obtén tu clave"
    description: "Crea una cuenta en keywordsai.co y genera tu clave API. El plan developer gratuito se activa sin tarjeta."
  - step: 2
    title: "Redirige tus llamadas por el gateway"
    description: "Cambia la URL base de tu cliente OpenAI al endpoint de Keywords AI y configura tus claves de proveedor; las peticiones quedan registradas automáticamente."
  - step: 3
    title: "Analiza logs y ejecuta evaluaciones"
    description: "Usa el dashboard para filtrar conversaciones, detectar errores y lanzar evaluaciones sobre los logs para medir la calidad de tus prompts."
whenToUse:
  - title: "Varios proveedores con un solo punto de logging"
    description: "Cuando usas modelos de distintos proveedores y quieres registrar y analizar todo desde un único dashboard."
  - title: "Depurar conversaciones de producción"
    description: "Cuando necesitas revisar qué respondió el modelo a usuarios reales y evaluar la calidad de esas respuestas."
tips:
  - text: "Recuerda que la inferencia del proveedor se paga aparte; el plan gratuito cubre la plataforma de logs y evaluaciones con límites."
  - text: "Etiqueta las peticiones con metadatos (usuario, feature, entorno) para segmentar costes y errores en el dashboard."
  - text: "Usa las evaluaciones sobre logs de producción para construir datasets de regresión a partir de casos reales."
faq:
  - question: "¿Qué incluye el plan gratuito de Keywords AI?"
    answer: "Plan developer gratis con logs y evaluaciones mensuales limitados; la inferencia del proveedor se paga aparte con tus propias claves."
  - question: "¿Keywords AI cobra por la inferencia?"
    answer: "La plataforma se centra en gateway, monitorización y evaluaciones; el consumo de tokens se factura según el proveedor del modelo que uses con tus claves."
  - question: "¿Es compatible con mi código actual basado en OpenAI?"
    answer: "Sí, al seguir el formato de la API de OpenAI, normalmente basta cambiar la URL base y la clave para empezar a registrar y enrutar peticiones."
publishedAt: 2026-07-21
---

## ¿Qué es?

Keywords AI es una plataforma que combina gateway de LLM con monitorización y evaluación. Permite acceder a muchos modelos desde una API común compatible con OpenAI mientras registra automáticamente las peticiones para analizarlas.

## ¿Para qué sirve?

Sirve para centralizar el acceso a múltiples proveedores de modelos, depurar conversaciones con usuarios reales, controlar costes y latencias, y evaluar la calidad de las respuestas sin montar una infraestructura de observabilidad propia.

## Cuándo usarla

- Cuando usas varios proveedores de LLM y quieres un punto único de acceso y logging.
- Para depurar y evaluar respuestas de tu app de IA en producción.
- Si necesitas métricas de coste y latencia por modelo sin instrumentar todo a mano.

## Cuándo NO usarla

- Si solo usas un único proveedor y su propio dashboard te basta.
- Cuando prefieres una solución open source self-hosteable como Langfuse.

## Pros

- Combina gateway, logs y evaluaciones en una sola herramienta.
- API compatible con OpenAI, migración sencilla.
- Plan developer gratuito para empezar.

## Contras

- La inferencia se paga aparte a cada proveedor de modelos.
- Los límites del plan gratuito obligan a pasar a pago con cierto volumen.
