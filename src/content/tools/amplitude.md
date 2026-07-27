---
name: Amplitude
description: Analítica digital para journeys, comportamiento y experimentos.
category: analytics
tags: [product-analytics, journeys, experiments, behavior, web]
officialSite: https://amplitude.com
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web]
featured: false
verified: false
features:
  - Analítica de producto basada en eventos y usuarios
  - Análisis de journeys y comportamiento entre sesiones
  - Cohortes, retención y segmentación avanzada
  - Experimentos A/B y feature flags integrados
  - Session replay en el plan Starter
  - Conexiones con data warehouses y CDPs
alternatives: [mixpanel, posthog, google-analytics]
relatedTools: [microsoft-clarity]
howToUse:
  - step: 1
    title: "Crear la organización y el proyecto"
    description: "Regístrate en amplitude.com, crea un proyecto y obtén la API key. Instala el SDK con npm install @amplitude/analytics-browser o usa los SDKs para iOS, Android y backend."
  - step: 2
    title: "Instrumentar eventos e identificar usuarios"
    description: "Define un tracking plan con eventos y propiedades consistentes. Envía eventos con amplitude.track() y asigna user ID al autenticar para seguir el journey completo de cada usuario."
  - step: 3
    title: "Analizar comportamiento y experimentar"
    description: "Usa los charts de funnels, retención y journeys para encontrar cuellos de botella. Lanza experimentos A/B con feature flags y mide el impacto directamente en el mismo panel."
whenToUse:
  - title: "Entender journeys complejos de usuario"
    description: "Cuando necesitas visualizar los caminos reales que siguen los usuarios entre páginas, sesiones y dispositivos, no solo funnels lineales."
  - title: "Productos digitales en crecimiento"
    description: "Ideal para equipos que ya superaron la analítica básica y necesitan segmentación avanzada, cohortes y experimentación."
  - title: "Experimentación basada en datos"
    description: "Si quieres lanzar tests A/B con feature flags y medir su efecto sobre métricas de producto sin herramientas adicionales."
tips:
  - text: "Empieza con pocos eventos bien definidos (registro, activación, acción core, compra) y amplía la instrumentación solo cuando tengas preguntas concretas que responder."
  - text: "Usa los journey maps para descubrir caminos inesperados: suelen revelar funciones infrautilizadas o flujos rotos que los funnels lineales no muestran."
  - text: "Aprovecha el session replay del plan Starter para validar con contexto cualitativo los números que ves en los informes cuantitativos."
  - text: "Conecta Amplitude con tu data warehouse si ya centralizas datos, para evitar silos y cruzar comportamiento con datos de negocio."
faq:
  - question: "¿Qué incluye el plan gratuito de Amplitude?"
    answer: "El plan Starter incluye hasta 50.000 usuarios medidos al mes con analítica base, session replay y feature flags, sin coste y sin tarjeta de crédito."
  - question: "¿Qué diferencia hay entre Amplitude y Mixpanel?"
    answer: "Ambas son analíticas de producto basadas en eventos. Amplitude destaca en análisis de journeys y experimentación integrada; Mixpanel suele elogiarse por su rapidez de consulta y simplicidad en funnels."
  - question: "¿Amplitude funciona en apps móviles?"
    answer: "Sí, dispone de SDKs para iOS, Android, React Native y Flutter, además de web y servidores, con identidad de usuario unificada entre plataformas."
  - question: "¿Puedo importar datos históricos a Amplitude?"
    answer: "Sí, ofrece una API de batch y conectores para importar eventos históricos desde warehouses como BigQuery o Snowflake, útil al migrar desde otra herramienta."
publishedAt: 2026-07-21
---

## ¿Qué es?

Amplitude es una plataforma de analítica digital centrada en el comportamiento del usuario. Permite analizar journeys, construir cohortes, medir retención y ejecutar experimentos A/B, con SDKs para web, móvil y servidores.

## ¿Para qué sirve?

Sirve para entender cómo se usa un producto digital a nivel de usuario: qué caminos siguen, dónde convierten o abandonan, qué segmentos retienen mejor y qué impacto tienen los experimentos sobre las métricas clave.

## Cuándo usarla

- Cuando necesitas analizar journeys de usuario más allá de funnels lineales.
- Para equipos de producto con experimentación continua.
- Si quieres session replay y feature flags junto a la analítica.
- En productos con usuarios identificados en web y móvil.

## Cuándo NO usarla

- Si solo necesitas métricas de tráfico para una web de contenidos.
- Cuando tu volumen supera el free tier y el presupuesto es cero.
- Para equipos sin capacidad de mantener una instrumentación seria.

## Pros

- Análisis de comportamiento y journeys muy completo.
- Starter gratis con replay y feature flags incluidos.
- Experimentación A/B integrada en la misma plataforma.
- SDKs maduros para todas las plataformas.

## Contras

- La instrumentación inicial exige planificación y tiempo.
- Los planes de pago son caros para startups pequeñas.
- Puede resultar excesiva para necesidades de analítica simples.
