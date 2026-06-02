---
name: Sentry
description: Plataforma de monitoreo de aplicaciones con detección de errores, rendimiento y trazabilidad distribuida.
category: devops
tags: [monitoring, errors, performance, debugging, observability, apm]
officialSite: https://sentry.io
pricing: freemium
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web", "iOS", Android, Node.js, Python, Go, Rust]
featured: false
features:
  - Captura de errores con stack traces completos y contexto
  - Trazabilidad distribuida entre servicios (tracing)
  - Monitoreo de rendimiento con transacciones y spans
  - Sesiones de usuario con replay de errores (Session Replay)
  - Alertas inteligentes con agrupación y frecuencia
  - Integración con CI/CD para detectar regresiones
  - Dashboards personalizables con métricas y trends
alternatives: [datadog, new-relic, bugsnag]
relatedTools: [github, gitlab, docker, kubernetes, next-js]
howToUse:
  - step: 1
    title: "Crear un proyecto en Sentry"
    description: "Regístrate en sentry.io, crea un proyecto y selecciona el lenguaje o framework de tu aplicación para obtener las instrucciones de instalación específicas."
  - step: 2
    title: "Instalar el SDK en tu aplicación"
    description: "Agrega el SDK de Sentry a tu proyecto (npm install @sentry/nextjs para Next.js, por ejemplo) e inicialízalo con el DSN de tu proyecto."
  - step: 3
    title: "Configurar alertas y monitoreo"
    description: "Define reglas de alerta para notificarte por email, Slack o webhooks cuando ocurran errores críticos o se superen umbrales de frecuencia."
  - step: 4
    title: "Analizar y resolver errores desde el dashboard"
    description: "Usa el panel de Sentry para ver stack traces completos, contexto de cada error, sesiones de usuario y tracing distribuido para diagnosticar y solucionar problemas."
whenToUse:
  - title: "Monitoreo de errores en producción"
    description: "Cuando necesitas detectar, diagnosticar y corregir errores que afectan a los usuarios reales antes de que escalen a problemas mayores."
  - title: "Aplicaciones con microservicios"
    description: "Para sistemas distribuidos donde necesitas trazabilidad entre múltiples servicios y entender el camino completo de una solicitud fallida."
  - title: "Detección de regresiones en deploys"
    description: "Integra Sentry con tu pipeline de CI/CD para identificar automáticamente nuevos errores introducidos en cada release."
examples:
  - title: "Configuración básica en Next.js"
    code: |
      // sentry.config.js
      import { init } from '@sentry/nextjs';
      init({
        dsn: 'https://xxx@sentry.io/xxx',
        tracesSampleRate: 0.5,
      });
    output: "Sentry comienza a capturar errores y transacciones en tu aplicación Next.js."
tips:
  - text: "Configura tracesSampleRate en producción a un valor bajo (0.1-0.3) para controlar el volumen de datos de rendimiento sin exceder los límites del plan."
  - text: "Usa release tracking con git commit hashes (sentry-cli releases new v1.0.0) para mapear cada error a la versión exacta del código que lo causó."
  - text: "Aprovecha Session Replay para ver reproducciones visuales de lo que el usuario hizo justo antes de encontrar un error."
  - text: "Agrupa notificaciones en Slack o Discord por severidad usando filtros de alerta para evitar fatiga de notificaciones en el equipo."
  - text: "Sube source maps en cada deploy para que los stack traces minificados en producción muestren el código fuente original."
faq:
  - question: "¿Cuánto cuesta Sentry?"
    answer: "Sentry ofrece un plan gratuito con límite de eventos mensuales y 1 usuario. Los planes de pago escalan por volumen de eventos, errores, transacciones y attachments, con precios desde $26/mes."
  - question: "¿Puedo auto-hospedar Sentry?"
    answer: "Sí, Sentry es open source (licencia MIT) y puedes desplegarlo en tu propia infraestructura con Docker. Sin embargo, el mantenimiento del self-hosting requiere recursos de DevOps."
  - question: "¿Qué diferencia a Sentry de Datadog?"
    answer: "Sentry está especializado en errores de aplicación y experiencia de desarrollador, mientras que Datadog cubre monitoreo de infraestructura, logs, APM y más. Muchos equipos usan ambos complementariamente."
  - question: "¿Sentry afecta el rendimiento de mi aplicación?"
    answer: "El SDK de Sentry está diseñado para tener un impacto mínimo en rendimiento. Las operaciones son asíncronas y el muestreo configurable te permite controlar la carga."
publishedAt: 2026-06-01
---

## ¿Qué es?

Sentry es una plataforma open-source de monitoreo de aplicaciones que ayuda a los equipos a ver y solucionar errores en tiempo real. Ofrece captura de errores, trazabilidad distribuida, monitoreo de rendimiento y session replay.

## ¿Para qué sirve?

Sentry sirve para detectar, diagnosticar y solucionar errores en aplicaciones en producción. Es ideal para equipos que quieren visibilidad completa del estado de sus aplicaciones, desde errores frontend hasta tracing backend.

## Cuándo usarla

- Cuando necesitas detectar errores en producción antes que los usuarios.
- Para aplicaciones distribuidas donde necesitas tracing entre servicios.
- Si quieres session replay para ver exactamente qué pasó antes de un error.
- Para equipos que hacen deploys frecuentes y necesitan detectar regresiones.
- Cuando buscas una alternativa open-source a Datadog o New Relic.

## Cuándo NO usarla

- Para proyectos muy pequeños donde el log básico es suficiente.
- Si ya usas una solución de monitoreo completa (Datadog, Grafana).
- Cuando el costo del plan freemium se vuelve prohibitivo al escalar.
- Para aplicaciones que no requieren monitoreo en producción.

## Pros

- Open-source con self-hosting posible.
- Captura de errores con contexto completo.
- Session Replay para debugging visual.
- Trazabilidad distribuida integrada.
- Amplia compatibilidad de lenguajes y frameworks.

## Contras

- Plan gratuito limitado en eventos por mes.
- Self-hosting puede ser complejo de mantener.
- Costo puede escalar rápido con el volumen de errores.
- Configuración avanzada de alertas requiere aprendizaje.

## CLI

Sentry CLI para gestión de proyectos, releases y source maps:

```bash
npm install -g @sentry/cli           # Instalar CLI
sentry-cli login                     # Autenticación
sentry-cli projects list             # Listar proyectos
sentry-cli releases new <version>    # Crear release
sentry-cli releases set-commits <version> --auto
sentry-cli sourcemaps upload <dir>   # Subir source maps
sentry-cli monitors run <monitor-id> # Ejecutar monitor cron
```
