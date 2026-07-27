---
name: Axiom
description: Almacena y explora eventos y logs con consultas rápidas y dashboards.
category: observabilidad
tags: [logs, events, observability, dashboards, queries]
officialSite: https://axiom.co
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Ingesta de eventos y logs vía API, SDKs y agentes
  - Consultas rápidas con APL (Axiom Processing Language)
  - Dashboards con gráficos y monitores de alerta
  - Live tail y exploración interactiva de eventos
  - Integraciones con Vercel, Cloudflare, Docker y Kubernetes
  - Alertas hacia Slack, Discord, PagerDuty y webhooks
alternatives: [logtail, new-relic, grafana]
relatedTools: [better-stack, sentry]
howToUse:
  - step: 1
    title: "Crear un dataset y una API token"
    description: "Regístrate en axiom.co, crea un dataset para tu servicio y genera una API token con permisos de ingesta para enviar eventos desde tu aplicación."
  - step: 2
    title: "Enviar eventos y logs"
    description: "Usa uno de los SDKs (JavaScript, Go, Python), la integración con Vercel o Cloudflare, o un agente como Vector para mandar eventos estructurados al dataset."
  - step: 3
    title: "Consultar, crear dashboards y monitores"
    description: "Explora los datos con APL, guarda consultas como dashboards y configura monitores que disparen alertas cuando una métrica supera un umbral o aparecen errores."
whenToUse:
  - title: "Analítica de eventos y logs a gran escala"
    description: "Cuando necesitas consultar millones de eventos rápidamente sin gestionar clústeres de Elasticsearch o ClickHouse."
  - title: "Observabilidad en plataformas serverless"
    description: "Para capturar logs de Vercel, Cloudflare Workers o AWS Lambda, donde no hay servidores en los que instalar agentes clásicos."
tips:
  - text: "Separa los datos en varios datasets por servicio o entorno para acotar consultas y controlar la retención de cada uno."
  - text: "Aprende lo básico de APL (where, summarize, project) para aprovechar agregaciones difíciles de expresar en SQL simple."
  - text: "Crea monitores de coincidencia y de umbral sobre tus consultas guardadas para convertir cualquier consulta en una alerta."
faq:
  - question: "¿Qué incluye el plan gratuito de Axiom?"
    answer: "El plan gratuito incluye 500 GB-horas de consulta y 25 GB de ingesta al mes, con 30 días de retención."
  - question: "¿Qué es APL?"
    answer: "APL (Axiom Processing Language) es el lenguaje de consulta de Axiom, inspirado en KQL de Kusto, pensado para filtrar, agregar y transformar eventos rápidamente."
  - question: "¿Axiom sirve también para métricas y trazas?"
    answer: "Está centrado en eventos y logs; puedes derivar métricas con consultas, pero para APM completo con trazas suele complementarse con herramientas como New Relic o Sentry."
publishedAt: 2026-07-21
---

## ¿Qué es?

Axiom es una plataforma de almacenamiento y consulta de eventos y logs pensada para volumen y velocidad. Permite ingerir datos desde casi cualquier fuente y analizarlos con su lenguaje APL, dashboards y monitores.

## ¿Para qué sirve?

Sirve para centralizar logs y eventos de aplicaciones e infraestructura, explorarlos en tiempo real, construir dashboards de observabilidad y alertar sobre condiciones anómalas.

## Cuándo usarla

- Para analizar grandes volúmenes de eventos sin gestionar clústeres.
- En entornos serverless como Vercel o Cloudflare Workers.
- Si quieres consultas rápidas tipo KQL sin montar Elastic.

## Cuándo NO usarla

- Si necesitas APM con trazas distribuidas completas (mejor New Relic).
- Cuando tu volumen supera con creces la capa gratuita y buscas self-hosting.

## Pros

- Consultas muy rápidas sobre grandes volúmenes.
- Integraciones nativas con plataformas serverless.
- Plan gratuito generoso en retención (30 días).

## Contras

- APL es un lenguaje más que aprender.
- No es un APM completo: se centra en eventos y logs.
