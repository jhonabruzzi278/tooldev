---
name: PostHog
description: Analítica de producto, replay, feature flags y experimentos en un sitio.
category: analytics
tags: [product-analytics, session-replay, feature-flags, experiments, open-source]
officialSite: https://posthog.com
github: https://github.com/PostHog/posthog
license: MIT
pricing: freemium
openSource: true
technicalLevel: intermedio
compatibility: [Web]
featured: true
verified: false
features:
  - Analítica de producto con funnels, retención y cohortes
  - Session replay para ver cómo usan tu producto
  - Feature flags con despliegues progresivos
  - Tests A/B y experimentos integrados
  - Captura automática de eventos sin instrumentación manual
  - Encuestas in-app y seguimiento de errores
  - Opción self-hosted open source bajo licencia MIT
alternatives: [mixpanel, amplitude, google-analytics]
relatedTools: [microsoft-clarity, umami]
howToUse:
  - step: 1
    title: "Crear el proyecto e instalar el snippet"
    description: "Regístrate en PostHog Cloud o despliega la versión self-hosted. Crea un proyecto y añade el snippet de JavaScript a tu web o instala el SDK correspondiente con npm install posthog-js."
  - step: 2
    title: "Capturar eventos e identificar usuarios"
    description: "Activa el autocapture para registrar clics y páginas automáticamente. Usa posthog.identify() al iniciar sesión para vincular eventos con usuarios y posthog.capture() para eventos de negocio personalizados."
  - step: 3
    title: "Analizar, experimentar y lanzar con flags"
    description: "Construye funnels y análisis de retención en el panel, revisa grabaciones de sesión para entender problemas y usa feature flags para lanzar funciones de forma progresiva con experimentos A/B."
whenToUse:
  - title: "Analítica de producto todo en uno"
    description: "Cuando quieres funnels, retención, cohortes, session replay y feature flags en una sola plataforma sin integrar varios proveedores."
  - title: "Equipos de producto con cultura de datos"
    description: "Ideal para product managers y desarrolladores que necesitan responder preguntas de comportamiento sin depender del equipo de datos."
  - title: "Control de datos con self-hosting"
    description: "Si tu empresa exige que los datos de usuarios residan en tu propia infraestructura, la edición open source lo permite."
tips:
  - text: "Activa el autocapture al principio para tener datos desde el día uno, pero define eventos personalizados con nombres claros para las acciones clave del negocio."
  - text: "Usa los feature flags para todo lanzamiento nuevo: te permiten apagar una función problemática al instante sin redesplegar."
  - text: "Configura alertas de excepciones para enterarte de errores en producción antes de que los reporten los usuarios."
  - text: "Vigila el consumo de eventos del plan gratuito agrupando eventos de baja prioridad y ajustando el muestreo del session replay."
faq:
  - question: "¿Qué incluye el plan gratuito de PostHog?"
    answer: "Al mes incluye 1 millón de eventos, 5.000 grabaciones de sesión, 1 millón de peticiones de feature flags y 100.000 excepciones. Superados los límites, se factura por uso."
  - question: "¿PostHog es realmente open source?"
    answer: "Sí, el núcleo está publicado bajo licencia MIT en GitHub y puede desplegarse en tu propia infraestructura. Algunas funciones enterprise avanzadas son de pago."
  - question: "¿En qué se diferencia de Google Analytics?"
    answer: "PostHog es analítica de producto: se centra en qué hacen los usuarios dentro de tu aplicación, con eventos, cohortes y replay. GA se centra en tráfico web y adquisición de visitantes."
  - question: "¿Puedo usar PostHog en apps móviles?"
    answer: "Sí, ofrece SDKs oficiales para iOS, Android, React Native y Flutter, además de los SDKs web y de servidor como Node.js, Python y Go."
publishedAt: 2026-07-21
---

## ¿Qué es?

PostHog es una plataforma open source de analítica de producto que reúne eventos, funnels, session replay, feature flags, experimentos A/B y captura de errores en una sola herramienta, disponible en la nube o autoalojada.

## ¿Para qué sirve?

Sirve para entender cómo los usuarios interactúan con un producto digital: qué funciones usan, dónde abandonan en un funnel, cómo retienen por cohortes y qué errores encuentran, permitiendo lanzar y validar funcionalidades con datos.

## Cuándo usarla

- Cuando necesitas analítica de producto y no solo métricas de tráfico web.
- Para lanzar funciones con feature flags y medir su impacto con experimentos.
- Si quieres session replay junto a los datos cuantitativos.
- Cuando el self-hosting es un requisito por privacidad o compliance.

## Cuándo NO usarla

- Si solo necesitas métricas básicas de visitas para un blog o web estática.
- Cuando el equipo no tiene recursos para instrumentar eventos correctamente.
- Para proyectos donde el volumen de eventos haría el coste por uso impredecible.

## Pros

- Plataforma muy completa: analytics, replay, flags y experimentos.
- Free tier generoso con 1M de eventos mensuales.
- Open source con opción self-hosted.
- SDKs para web, móvil y servidor bien mantenidos.

## Contras

- La curva de aprendizaje es mayor que en analíticas simples.
- El coste por uso puede crecer rápido con mucho volumen.
- Requiere disciplina en la taxonomía de eventos para no caos de datos.
