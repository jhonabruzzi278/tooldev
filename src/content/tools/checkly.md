---
name: Checkly
description: Monitorización sintética como código para webs y APIs con Playwright.
category: observabilidad
tags:
  - synthetic
  - playwright
  - monitoring
  - api-checks
  - testing
officialSite: 'https://www.checklyhq.com'
github: 'https://github.com/checkly'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Checks de API con aserciones sobre respuestas HTTP
  - Browser checks con scripts de Playwright para flujos reales
  - Monitoring as code con CLI y constructs de TypeScript
  - Ejecución desde múltiples ubicaciones y private locations
  - Integración con CI/CD para validar despliegues
  - 'Alertas por email, Slack, PagerDuty, Opsgenie y webhooks'
alternatives:
  - uptimerobot
  - uptime-com
  - better-stack
relatedTools:
  - playwright
  - sentry
howToUse:
  - step: 1
    title: Crear el primer check desde el dashboard
    description: >-
      Regístrate en checklyhq.com y crea un API check indicando la URL, el
      método y las aserciones (código de estado, tiempo de respuesta, contenido
      JSON), o un browser check pegando un script de Playwright.
  - step: 2
    title: 'Definir frecuencia, ubicaciones y alertas'
    description: >-
      Configura cada cuánto se ejecuta el check y desde qué regiones, y conecta
      canales de alerta como Slack o PagerDuty para enterarte de los fallos al
      momento.
  - step: 3
    title: Pasar a monitoring as code con la CLI
    description: >-
      Instala la CLI con npm install checkly --save-dev, define tus checks como
      constructs en TypeScript junto al código de tu app y despliega con npx
      checkly deploy.
whenToUse:
  - title: Validar flujos críticos con navegador real
    description: >-
      Cuando un 200 OK no basta y necesitas comprobar que login, carrito o
      checkout funcionan de verdad con scripts de Playwright.
  - title: Monitorización versionada junto al código
    description: >-
      Para equipos que quieren definir, revisar y desplegar sus monitores como
      código dentro del mismo repositorio y pipeline.
  - title: Comprobar despliegues automáticamente
    description: >-
      Para ejecutar los checks como paso del CI/CD tras cada despliegue y
      detectar regresiones antes de que lleguen a producción.
tips:
  - text: >-
      Reutiliza tus tests de Playwright existentes como browser checks para no
      duplicar esfuerzo entre testing y monitorización.
  - text: >-
      Empieza con frecuencias de 1 a 5 minutos en los endpoints críticos y
      ajusta según el consumo de tu cuota mensual de checks.
  - text: >-
      Usa las variables de entorno y secretos de Checkly para las credenciales
      de los scripts en lugar de hardcodearlas.
  - text: >-
      Agrupa los checks con tags para filtrar dashboards y dirigir las alertas a
      los equipos correctos.
faq:
  - question: ¿Qué incluye el plan gratuito de Checkly?
    answer: >-
      El plan gratuito incluye 10.000 checks de API y 1.500 checks de navegador
      al mes, con frecuencia de hasta 1 minuto y 7 días de retención de
      resultados.
  - question: ¿Necesito saber Playwright para usar Checkly?
    answer: >-
      No para los API checks, que se configuran con formularios. Para los
      browser checks sí se usan scripts de Playwright, aunque puedes partir de
      plantillas.
  - question: ¿Qué es monitoring as code?
    answer: >-
      Es definir los monitores como código TypeScript con la CLI de Checkly,
      versionarlos en git y desplegarlos con npx checkly deploy como parte de tu
      pipeline.
  - question: ¿Puedo monitorizar servicios privados?
    answer: >-
      Sí, con private locations puedes ejecutar checks desde dentro de tu propia
      red o VPC usando un agente autoalojado.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/checkly.webp
---

## ¿Qué es?

Checkly es una plataforma de monitorización sintética que usa scripts reales de Playwright y checks de API para verificar que tus aplicaciones funcionan como esperan los usuarios. Su enfoque de monitoring as code permite definir los monitores en TypeScript junto al código de la aplicación.

## ¿Para qué sirve?

Sirve para monitorizar APIs y flujos web críticos con navegadores reales, validar despliegues en CI/CD y mantener la configuración de monitorización versionada y desplegable junto a la infraestructura.

## Cuándo usarla

- Cuando necesitas verificar flujos completos con navegador real.
- Si quieres la monitorización como código dentro de tu repositorio.
- Para validar despliegues automáticamente en el pipeline.

## Cuándo NO usarla

- Si solo necesitas un ping de uptime básico y gratis (UptimeRobot basta).
- Cuando tu equipo no usa JavaScript/TypeScript ni quiere escribir scripts.

## Pros

- Browser checks con Playwright, el estándar de testing E2E.
- Monitoring as code con CLI y revisión en git.
- Plan gratuito útil para APIs con 10.000 ejecuciones mensuales.

## Contras

- Los browser checks consumen cuota rápido y encarecen el plan.
- Requiere conocimientos de scripting para sacarle todo el partido.
