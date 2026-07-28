---
name: Logtail
description: Centraliza logs estructurados y consúltalos con una sintaxis tipo SQL.
category: observabilidad
tags:
  - logs
  - sql
  - logging
  - aggregation
  - debugging
officialSite: 'https://betterstack.com/logs'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Ingesta de logs desde agentes, Docker, Kubernetes y SDKs'
  - Live tail para ver los logs en tiempo real
  - Consultas con sintaxis tipo SQL sobre logs estructurados
  - Alertas por umbrales y patrones sobre el flujo de logs
  - Dashboards con gráficos de series temporales
  - Integración con uptime e incidentes de Better Stack
alternatives:
  - axiom
  - better-stack
  - new-relic
relatedTools:
  - grafana
  - sentry
howToUse:
  - step: 1
    title: Crear una fuente de logs
    description: >-
      Regístrate en Better Stack, entra en Logs y crea una nueva source
      eligiendo tu plataforma (Node.js, Docker, Kubernetes, syslog, Vector) para
      obtener el token de ingesta.
  - step: 2
    title: Enviar los logs de tu aplicación
    description: >-
      Instala el SDK o agente indicado y envía logs estructurados en JSON; por
      ejemplo en Node.js con el logger oficial de Logtail usando tu source
      token.
  - step: 3
    title: Consultar y alertar
    description: >-
      Usa Live tail para depurar en directo, guarda consultas SQL para tus
      dashboards y crea alertas que avisen por Slack o email cuando aparezcan
      errores o patrones anómalos.
whenToUse:
  - title: Depurar producción con logs centralizados
    description: >-
      Cuando tus logs están dispersos en varios servidores o contenedores y
      necesitas buscarlos y correlacionarlos en un solo sitio.
  - title: Alertas basadas en contenido de logs
    description: >-
      Para recibir avisos cuando aparecen errores concretos, picos de
      excepciones o patrones sospechosos en el flujo de logs.
tips:
  - text: >-
      Envía los logs en formato JSON estructurado desde el principio para poder
      filtrar por campos en las consultas SQL.
  - text: >-
      Guarda las consultas frecuentes (errores 5xx, latencias altas) como vistas
      reutilizables y compártelas con el equipo.
  - text: >-
      Filtra los logs de nivel debug en producción para no consumir la cuota de
      ingesta con ruido.
faq:
  - question: ¿Qué incluye el plan gratuito de Logtail?
    answer: >-
      El plan gratuito incluye 1 GB de logs al mes y 3 días de retención, con
      Live tail, consultas SQL y alertas, dentro de la plataforma Better Stack.
  - question: ¿Logtail sigue existiendo como producto independiente?
    answer: >-
      Logtail es ahora el módulo de logs de Better Stack; se accede desde
      betterstack.com/logs y comparte cuenta con uptime e incidentes.
  - question: ¿Cómo envío logs desde Docker o Kubernetes?
    answer: >-
      Mediante las integraciones oficiales con Vector, Fluent Bit y el agente de
      Better Stack, que recogen los logs de los contenedores y los envían con tu
      source token.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/logtail.webp
---

## ¿Qué es?

Logtail es el servicio de gestión de logs de Better Stack. Centraliza logs estructurados de aplicaciones, contenedores e infraestructura, y permite consultarlos en tiempo real con una sintaxis tipo SQL.

## ¿Para qué sirve?

Sirve para depurar incidencias en producción, buscar patrones en grandes volúmenes de logs, crear dashboards de series temporales y alertar sobre errores o anomalías.

## Cuándo usarla

- Cuando necesitas centralizar logs de varios servicios.
- Para depurar en vivo con Live tail durante un incidente.
- Si quieres alertas basadas en patrones de logs sin montar ELK.

## Cuándo NO usarla

- Si necesitas retención larga en el plan gratuito (solo 3 días).
- Para volúmenes de logs enormes con presupuesto mínimo (valora autoalojar).

## Pros

- Consultas SQL familiares sin aprender un lenguaje nuevo.
- Live tail rápido para depuración en directo.
- Integración natural con uptime e incidentes de Better Stack.

## Contras

- Retención de solo 3 días en el plan gratuito.
- La cuota de 1 GB/mes se queda corta con mucho tráfico.
