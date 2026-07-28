---
name: Portkey
description: >-
  Gateway y panel de control de IA con logs, routing inteligente, caché,
  fallbacks y guardrails para aplicaciones LLM.
category: ia
tags:
  - gateway
  - routing
  - guardrails
  - cache
  - observability
officialSite: 'https://portkey.ai'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Gateway unificado para cientos de modelos y proveedores
  - 'Routing condicional, load balancing y fallbacks automáticos'
  - Caché de respuestas para reducir coste y latencia
  - Guardrails para filtrar entradas y salidas
  - 'Observabilidad con logs, trazas y métricas de coste'
  - API compatible con el formato de OpenAI
alternatives:
  - openrouter
  - keywords-ai
  - langfuse
relatedTools:
  - braintrust
howToUse:
  - step: 1
    title: Crea tu cuenta y una virtual key
    description: >-
      Regístrate en portkey.ai, conecta tus claves de proveedor como virtual
      keys y obtén tu clave de Portkey para el gateway.
  - step: 2
    title: Enruta tus peticiones por el gateway
    description: >-
      Apunta tu cliente OpenAI al endpoint de Portkey y define el proveedor en
      la petición; puedes añadir configs con fallbacks y reintentos.
  - step: 3
    title: 'Activa caché, guardrails y monitorización'
    description: >-
      Configura caché para prompts repetidos, añade guardrails de contenido y
      revisa el panel de logs y métricas para optimizar coste y fiabilidad.
whenToUse:
  - title: Resiliencia ante caídas de proveedores
    description: >-
      Cuando tu aplicación en producción no puede permitirse que una caída de
      OpenAI o Anthropic la deje fuera de servicio.
  - title: Reducir costes con caché
    description: >-
      Cuando tienes prompts repetidos y quieres ahorrar tokens cacheando
      respuestas en el gateway.
tips:
  - text: >-
      Activa la caché semántica en endpoints con preguntas repetidas; el ahorro
      de tokens puede ser considerable.
  - text: >-
      Define fallbacks entre proveedores en la config para que una caída de
      OpenAI o Anthropic no tumbe tu aplicación.
  - text: >-
      Usa las virtual keys para rotar claves de proveedor sin tocar el código de
      tus servicios.
faq:
  - question: ¿Qué incluye el plan gratuito de Portkey?
    answer: >-
      Plan developer gratis con gateway, caché, fallbacks y una cuota mensual de
      logs; la inferencia de los modelos se paga aparte a cada proveedor.
  - question: ¿Qué es una virtual key?
    answer: >-
      Es una clave gestionada por Portkey que encapsula tus credenciales de
      proveedor, permitiendo rotarlas y aplicar políticas sin cambiar el código
      de la aplicación.
  - question: ¿Portkey añade latencia a mis peticiones?
    answer: >-
      El gateway añade una sobrecarga mínima, que suele compensarse con las
      funciones de caché y enrutamiento al edge; conviene medirlo con tus
      propios prompts.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/portkey.webp
---

## ¿Qué es?

Portkey es un gateway de IA con panel de control que se sitúa entre tu aplicación y los proveedores de modelos. Añade routing, caché, fallbacks, guardrails y observabilidad sobre una API compatible con OpenAI.

## ¿Para qué sirve?

Sirve para hacer tus aplicaciones de IA más fiables y baratas: reintentos y fallbacks automáticos ante fallos de proveedor, caché de respuestas repetidas, filtros de contenido y visibilidad completa de logs y costes.

## Cuándo usarla

- Cuando tu app de IA está en producción y necesita resiliencia ante caídas de proveedores.
- Para reducir costes con caché y controlar gasto por feature o usuario.
- Si necesitas guardrails y auditoría sobre las interacciones con los modelos.

## Cuándo NO usarla

- En proyectos muy pequeños donde llamar directo al proveedor es más simple.
- Si prefieres un gateway totalmente open source y self-hosteado como componente crítico.

## Pros

- Funciones de producción listas: caché, fallbacks, guardrails.
- Compatible con el SDK de OpenAI, fácil de adoptar.
- Plan developer gratuito para validar el enfoque.

## Contras

- Añade una capa intermediaria en el camino crítico de las peticiones.
- La cuota de logs del plan gratuito limita el uso en producción real.
