---
name: UptimeRobot
description: Monitorización sencilla de uptime con alertas y páginas de estado.
category: observabilidad
tags:
  - uptime
  - monitoring
  - alerts
  - status-page
officialSite: 'https://uptimerobot.com'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
  - iOS
  - Android
featured: false
verified: false
features:
  - 'Monitores HTTP(s), ping, puerto, keyword y heartbeat'
  - 'Alertas por email, Slack, Telegram, SMS y webhooks'
  - Páginas de estado públicas personalizables
  - Verificación de caídas desde múltiples ubicaciones
  - App móvil para gestión y notificaciones
  - Registro de tiempos de respuesta e histórico de incidentes
alternatives:
  - better-stack
  - uptime-com
  - checkly
relatedTools:
  - healthchecks-io
  - grafana
howToUse:
  - step: 1
    title: Crear una cuenta y añadir el primer monitor
    description: >-
      Regístrate en uptimerobot.com, pulsa Add New Monitor, elige el tipo
      (HTTP(s), ping, puerto o keyword) e introduce la URL o IP de tu servicio.
  - step: 2
    title: Configurar las alertas
    description: >-
      Define los contactos de alerta (email, Slack, SMS, webhook) y asígnalos al
      monitor para recibir avisos cuando el servicio caiga y cuando se recupere.
  - step: 3
    title: Publicar una página de estado
    description: >-
      Crea una Status Page desde el dashboard, selecciona los monitores que
      quieres mostrar y comparte la URL pública o conéctala a un dominio propio.
whenToUse:
  - title: Saber cuándo tu web o API se cae
    description: >-
      Cuando necesitas una alerta inmediata si tu sitio, API o servidor deja de
      responder, sin montar infraestructura de monitorización propia.
  - title: Página de estado para tus usuarios
    description: >-
      Para comunicar de forma transparente el estado del servicio y los
      incidentes con una página pública lista en minutos.
tips:
  - text: >-
      Usa monitores de tipo keyword para verificar que la página no solo
      devuelve un 200, sino que contiene (o no contiene) un texto esperado.
  - text: >-
      Configura al menos dos canales de alerta (por ejemplo email y Slack) para
      no depender de un único canal que también podría fallar.
  - text: >-
      El monitor de tipo heartbeat es ideal para tareas programadas: tu cron
      hace ping a una URL única y UptimeRobot avisa si deja de llegar.
faq:
  - question: ¿Qué incluye el plan gratuito de UptimeRobot?
    answer: >-
      El plan gratuito incluye 50 monitores con chequeos cada 5 minutos,
      retención de logs de 3 meses y una página de estado básica.
  - question: ¿UptimeRobot puede monitorizar APIs y no solo webs?
    answer: >-
      Sí, los monitores HTTP(s) pueden apuntar a endpoints de API y puedes usar
      keyword checking para validar el contenido de la respuesta.
  - question: ¿Cómo evita los falsos positivos?
    answer: >-
      Cuando un chequeo falla, UptimeRobot lo confirma desde otras ubicaciones
      antes de declarar la caída y enviar la alerta.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/uptimerobot.webp
---

## ¿Qué es?

UptimeRobot es un servicio de monitorización de disponibilidad que comprueba periódicamente si tus sitios web, APIs y servidores responden correctamente. Es una de las herramientas más populares para enterarte al instante cuando un servicio se cae.

## ¿Para qué sirve?

Sirve para detectar caídas y tiempos de respuesta anómalos, recibir alertas por múltiples canales y comunicar el estado del servicio a los usuarios mediante páginas de estado públicas.

## Cuándo usarla

- Cuando necesitas saber inmediatamente si tu web o API deja de responder.
- Para publicar una página de estado sin desarrollarla desde cero.
- Si buscas monitorización básica gratuita y fácil de configurar.

## Cuándo NO usarla

- Si necesitas APM profundo con trazas y profiling (usa New Relic o Sentry).
- Para monitorización sintética de flujos complejos de usuario (mejor Checkly).

## Pros

- Plan gratuito generoso con 50 monitores.
- Configuración en minutos sin conocimientos de DevOps.
- Múltiples canales de alerta y app móvil.

## Contras

- Chequeos cada 5 minutos como máximo en el plan gratuito.
- Funciones avanzadas como intervalos de 30 segundos son de pago.
