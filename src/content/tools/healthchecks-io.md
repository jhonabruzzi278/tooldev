---
name: healthchecks.io
description: Monitoriza tareas cron y procesos en background con URLs heartbeat.
category: observabilidad
tags: [cron, monitoring, alerts, heartbeat, jobs]
officialSite: https://healthchecks.io
github: https://github.com/healthchecks/healthchecks
pricing: freemium
openSource: true
license: BSD-3-Clause
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - URLs heartbeat únicas a las que tu tarea hace ping al terminar
  - Soporte de expresiones cron y grace time configurable
  - Alertas cuando una tarea no llega, llega tarde o falla
  - Integraciones con email, Slack, Discord, Telegram y webhooks
  - Badges de estado para READMEs y dashboards
  - Open source y autoalojable con Docker
alternatives: [uptimerobot, better-stack]
relatedTools: [prometheus, grafana]
howToUse:
  - step: 1
    title: "Crear un check"
    description: "Regístrate en healthchecks.io, crea un nuevo check y define su programación con una expresión cron o un intervalo simple, más el grace time permitido."
  - step: 2
    title: "Hacer ping desde tu tarea"
    description: "Copia la URL única del check y añade al final de tu script o cron job una petición a esa URL (curl, wget o fetch) para señalar que se ejecutó correctamente."
  - step: 3
    title: "Configurar las notificaciones"
    description: "Activa los canales de alerta (email, Slack, webhook) para recibir un aviso cuando el ping no llegue a tiempo o la tarea reporte un fallo."
whenToUse:
  - title: "Vigilar copias de seguridad y crons"
    description: "Cuando tienes backups, imports o tareas nocturnas que fallan en silencio y quieres enterarte si no se ejecutan."
  - title: "Procesos en background sin logs visibles"
    description: "Para workers, colas y scripts programados en servidores donde no tienes otra monitorización instalada."
tips:
  - text: "Haz ping al inicio y al final del script (URLs /start y la normal) para medir también la duración de cada ejecución."
  - text: "Ajusta el grace time con margen: si tu backup tarda unos 10 minutos, dale 30 para evitar falsas alarmas."
  - text: "Envía una señal de fallo añadiendo /fail a la URL cuando el script capture una excepción, para recibir la alerta al momento."
faq:
  - question: "¿Qué incluye el plan gratuito de healthchecks.io?"
    answer: "El plan gratuito incluye 20 checks para un solo miembro, con integraciones de alerta por email, webhooks y servicios de chat."
  - question: "¿Cómo monitoriza un cron job exactamente?"
    answer: "Tu tarea hace una petición HTTP a una URL única al ejecutarse; si healthchecks.io no recibe el ping dentro del horario y grace time definidos, envía una alerta."
  - question: "¿Puedo autoalojarlo?"
    answer: "Sí, es open source (BSD-3-Clause) y puedes desplegarlo con Docker en tu propia infraestructura sin límites de checks."
publishedAt: 2026-07-21
---

## ¿Qué es?

healthchecks.io es un servicio de monitorización de tareas programadas y procesos en background basado en pings heartbeat. Cada tarea recibe una URL única a la que debe llamar; si el ping no llega a tiempo, el servicio avisa. Es open source y autoalojable.

## ¿Para qué sirve?

Sirve para vigilar cron jobs, copias de seguridad, workers y scripts periódicos, detectando tanto fallos como ejecuciones que nunca ocurrieron, algo que los monitores de uptime clásicos no ven.

## Cuándo usarla

- Cuando tus crons o backups fallan en silencio.
- Para monitorizar workers y procesos en background.
- Si quieres una solución simple y autoalojable de heartbeat.

## Cuándo NO usarla

- Para monitorizar la disponibilidad pública de una web (usa UptimeRobot).
- Si necesitas métricas y dashboards de infraestructura (mejor Prometheus y Grafana).

## Pros

- Concepto simple: una URL por tarea y listo.
- Open source con opción de self-hosting.
- Detecta tareas que no se ejecutan, no solo errores.

## Contras

- Plan gratuito limitado a 20 checks.
- No monitoriza recursos ni rendimiento, solo ejecuciones.
