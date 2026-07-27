---
name: New Relic
description: Monitorización full-stack del rendimiento e infraestructura.
category: observabilidad
tags: [apm, observability, logs, infrastructure, tracing]
officialSite: https://newrelic.com
pricing: freemium
openSource: false
technicalLevel: avanzado
compatibility: [Web, API]
featured: false
verified: false
features:
  - APM con trazas distribuidas para los lenguajes más usados
  - Monitorización de infraestructura, Kubernetes y servicios cloud
  - Logs en contexto unidos a trazas y métricas
  - Real User Monitoring y monitorización sintética
  - Dashboards y consultas con el lenguaje NRQL
  - Alertas con detección de anomalías
  - Cientos de integraciones rápidas (quickstarts)
alternatives: [grafana, sentry, axiom]
relatedTools: [prometheus, logtail]
howToUse:
  - step: 1
    title: "Crear cuenta e instalar el agente"
    description: "Regístrate en newrelic.com y usa la instalación guiada para tu stack: el agente APM para tu lenguaje (Node, Java, Python, .NET, Go, Ruby, PHP) o la integración de infraestructura y Kubernetes."
  - step: 2
    title: "Instrumentar trazas y logs"
    description: "Activa distributed tracing y los logs en contexto para que cada traza incluya sus logs asociados, y redespliega la aplicación con el agente configurado."
  - step: 3
    title: "Crear dashboards y alertas"
    description: "Construye dashboards con consultas NRQL sobre tu telemetría y define condiciones de alerta con umbrales o detección de anomalías conectadas a Slack o PagerDuty."
whenToUse:
  - title: "Observabilidad full-stack en sistemas complejos"
    description: "Cuando tienes varios servicios y necesitas correlacionar métricas, trazas y logs de toda la arquitectura en una sola plataforma."
  - title: "Diagnóstico de rendimiento de aplicaciones"
    description: "Para encontrar cuellos de botella a nivel de transacción, consulta SQL o llamada externa con APM y trazas distribuidas."
tips:
  - text: "Aprovecha los 100 GB gratuitos de ingesta mensual instrumentando primero los servicios más críticos y ajustando el muestreo de trazas."
  - text: "Usa los usuarios básicos ilimitados para dar acceso de solo lectura a todo el equipo sin coste adicional."
  - text: "Empieza con los quickstarts de tu stack: incluyen dashboards y alertas predefinidos que puedes personalizar después."
  - text: "Etiqueta la telemetría por entorno y equipo para filtrar dashboards y asignar alertas con precisión."
faq:
  - question: "¿Qué incluye el plan gratuito de New Relic?"
    answer: "El plan gratuito incluye 100 GB de ingesta de datos al mes, un usuario full-platform y usuarios básicos ilimitados."
  - question: "¿Cómo se factura New Relic?"
    answer: "Principalmente por los GB ingeridos más allá de los 100 GB gratuitos y por los usuarios full-platform adicionales; los usuarios básicos son gratuitos e ilimitados."
  - question: "¿New Relic sirve para Kubernetes?"
    answer: "Sí, tiene integración nativa con Kubernetes que muestra clusters, pods y contenedores junto al APM y los logs de las aplicaciones que corren en ellos."
  - question: "¿Qué es NRQL?"
    answer: "NRQL es el lenguaje de consulta de New Relic, similar a SQL, que permite consultar métricas, eventos, logs y trazas para crear dashboards y alertas personalizadas."
publishedAt: 2026-07-21
---

## ¿Qué es?

New Relic es una plataforma de observabilidad full-stack que reúne APM, monitorización de infraestructura, logs, RUM y sintéticos en un solo lugar. Usa un modelo de datos unificado consultable con su lenguaje NRQL.

## ¿Para qué sirve?

Sirve para entender el rendimiento de aplicaciones e infraestructura, diagnosticar errores y latencias con trazas distribuidas, y alertar sobre anomalías antes de que afecten a los usuarios.

## Cuándo usarla

- En arquitecturas de microservicios que requieren trazas de extremo a extremo.
- Para equipos que quieren métricas, logs y trazas correlacionados.
- Si necesitas dashboards técnicos y ejecutivos sobre los mismos datos.

## Cuándo NO usarla

- Para proyectos pequeños donde un monitor de uptime y logs básicos bastan.
- Si tu presupuesto es muy ajustado y no controlas el volumen de ingesta.

## Pros

- Cobertura completa: APM, infra, logs, RUM y sintéticos.
- Plan gratuito con 100 GB de ingesta mensual.
- NRQL potente para consultas y dashboards a medida.

## Contras

- Curva de aprendizaje alta por la amplitud de la plataforma.
- Los costes pueden dispararse si la ingesta crece sin control.
