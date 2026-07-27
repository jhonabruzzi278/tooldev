---
name: Uptime.com
description: Monitorización de webs, APIs y usuarios reales con alertas y gestión de incidentes.
category: observabilidad
tags: [uptime, synthetic, monitoring, alerts, rum]
officialSite: https://uptime.com
pricing: pago
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Chequeos HTTP(S), ping, TCP, UDP, DNS, SMTP y SSH
  - Monitorización sintética de transacciones con navegador real
  - Real User Monitoring (RUM) para medir la experiencia real
  - Verificación de caídas desde múltiples ubicaciones globales
  - Alertas con escalado, guardias y reintentos antes de notificar
  - Páginas de estado y SLA reports automáticos
  - API completa e integraciones con Slack, PagerDuty y webhooks
alternatives: [uptimerobot, better-stack, checkly]
relatedTools: [new-relic, grafana]
howToUse:
  - step: 1
    title: "Activar la prueba y crear el primer chequeo"
    description: "Regístrate en uptime.com para la prueba de los planes de pago, crea un chequeo HTTP(S) con la URL de tu servicio y define el intervalo y las ubicaciones de verificación."
  - step: 2
    title: "Configurar contactos y escalado de alertas"
    description: "Añade contactos (email, SMS, voz, Slack, webhook) y define la cadena de escalado para que el aviso llegue a la persona correcta si la primera no responde."
  - step: 3
    title: "Añadir chequeos sintéticos y RUM"
    description: "Graba transacciones de usuario con el transaction recorder para monitorizar flujos críticos como login o checkout, e instala el snippet de RUM para medir tiempos reales."
whenToUse:
  - title: "SLA y compliance"
    description: "Cuando necesitas informes de uptime auditables y verificación fiable desde múltiples ubicaciones para cumplir acuerdos de nivel de servicio."
  - title: "Monitorizar flujos críticos de negocio"
    description: "Para validar de forma continua procesos completos como registro, login o compra con chequeos sintéticos de navegador."
  - title: "Equipos con guardias y escalado"
    description: "Cuando las alertas deben escalar entre personas y canales hasta recibir confirmación."
tips:
  - text: "Configura que una caída se confirme desde al menos 2 o 3 ubicaciones antes de alertar para eliminar falsos positivos."
  - text: "Usa chequeos de contenido (string to check) en endpoints de salud para validar que la API responde datos correctos, no solo un 200."
  - text: "Programa ventanas de mantenimiento durante los despliegues para evitar ruido de alertas en operaciones planificadas."
  - text: "Exporta los SLA reports mensuales para compartirlos con clientes o con la dirección."
faq:
  - question: "¿Uptime.com tiene plan gratuito?"
    answer: "No. Uptime.com no ofrece una capa gratuita permanente; solo dispone de una prueba temporal de sus planes de pago, tras la cual hay que suscribirse para seguir usándolo."
  - question: "¿Qué diferencia hay entre chequeos sintéticos y RUM?"
    answer: "Los chequeos sintéticos simulan usuarios ejecutando transacciones programadas desde los navegadores de Uptime.com, mientras que RUM recopila métricas de los usuarios reales que visitan tu sitio."
  - question: "¿Puedo monitorizar servicios internos?"
    answer: "Sí, mediante chequeos de puertos TCP/UDP, ping y servicios como SMTP o SSH, además de los chequeos HTTP(S) habituales."
  - question: "¿Cómo evita los falsos positivos?"
    answer: "Confirma cada caída desde varias ubicaciones geográficas y permite definir reintentos y sensibilidad antes de disparar una alerta."
publishedAt: 2026-07-21
---

## ¿Qué es?

Uptime.com es una plataforma profesional de monitorización que cubre disponibilidad de webs y servicios, chequeos sintéticos de transacciones y monitorización de usuarios reales (RUM), con énfasis en fiabilidad y reporting de SLA.

## ¿Para qué sirve?

Sirve para detectar caídas con verificación multi-ubicación, monitorizar flujos completos de usuario, medir la experiencia real de los visitantes y generar informes de uptime para clientes y compliance.

## Cuándo usarla

- Cuando necesitas informes de SLA auditables y verificación fiable.
- Para monitorizar transacciones críticas como login o checkout.
- Si tu equipo necesita escalado de alertas con guardias.

## Cuándo NO usarla

- Si buscas una opción gratuita permanente (no existe; usa UptimeRobot o Better Stack).
- Para proyectos personales pequeños donde un chequeo básico es suficiente.

## Pros

- Verificación multi-ubicación con pocos falsos positivos.
- Sintéticos, RUM y uptime en la misma plataforma.
- Reporting de SLA listo para clientes.

## Contras

- Sin plan gratuito permanente, solo prueba temporal.
- Precio orientado a empresas, elevado para proyectos pequeños.
