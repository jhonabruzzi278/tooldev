---
name: Pipedream
description: Conecta APIs y ejecuta workflows por eventos usando código cuando haga falta.
category: apis
tags:
  - automation
  - workflows
  - apis
  - integrations
  - serverless
officialSite: 'https://pipedream.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Workflows activados por HTTP, cron o eventos de apps'
  - Miles de integraciones listas con APIs populares
  - 'Pasos con código Node.js, Python, Go o Bash'
  - Gestión de credenciales de APIs integrada
  - Data stores para mantener estado entre ejecuciones
  - Logs detallados de cada ejecución
alternatives: []
relatedTools:
  - postman
  - beeceptor
howToUse:
  - step: 1
    title: Elige un disparador
    description: >-
      Crea un workflow y selecciona qué lo arranca: un webhook HTTP, una
      programación cron o un evento de una app conectada como GitHub, Slack o
      Stripe.
  - step: 2
    title: Encadena pasos y código
    description: >-
      Añade acciones preconstruidas de las integraciones o pasos de código
      propio en Node.js o Python. Cada paso recibe los datos del anterior y
      puedes inspeccionarlos en el editor.
  - step: 3
    title: Prueba y despliega
    description: >-
      Ejecuta el workflow con eventos de prueba desde el editor tantas veces
      como quieras, revisa los logs paso a paso y actívalo cuando esté listo.
whenToUse:
  - title: Automatizaciones entre APIs con código
    description: >-
      Cuando Zapier se queda corto y necesitas transformar datos con código real
      entre servicios, sin mantener infraestructura serverless propia.
  - title: Webhooks y glue code de backend
    description: >-
      Para recibir webhooks de terceros, validarlos, enriquecerlos llamando a
      otras APIs y persistir resultados, todo en un workflow gestionado.
examples:
  - title: Paso Node.js que transforma un webhook
    code: |
      export default defineComponent({
        async run({ steps, $ }) {
          const evento = steps.trigger.event
          const resumen = {
            usuario: evento.body.user?.email,
            total: evento.body.amount / 100,
            recibido: new Date().toISOString()
          }
          return resumen
        }
      })
    output: >-
      Devuelve un objeto normalizado disponible como steps.tu_paso.$return_value
      para los siguientes pasos.
tips:
  - text: >-
      Usa los eventos de prueba del editor para iterar rápido: son ilimitados y
      no consumen créditos del plan.
  - text: >-
      Guarda secretos en la gestión de credenciales de Pipedream, nunca en el
      código de los pasos.
  - text: >-
      Divide workflows largos en varios encadenados por webhooks para depurarlos
      y reutilizarlos mejor.
faq:
  - question: ¿Qué incluye el plan gratuito de Pipedream?
    answer: >-
      El plan gratuito incluye 100 créditos de workflows al mes, 3 workflows
      activos y pruebas ilimitadas en el editor.
  - question: ¿Pipedream es como Zapier?
    answer: >-
      Cubre un terreno parecido, pero está orientado a desarrolladores: permite
      escribir pasos en Node.js, Python, Go o Bash y controlar con precisión los
      datos entre pasos.
  - question: ¿Puedo ejecutar código propio con dependencias npm?
    answer: >-
      Sí, los pasos de Node.js permiten importar paquetes de npm directamente en
      el editor, sin configurar entornos ni despliegues.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/pipedream.webp
---

## ¿Qué es?

Pipedream es una plataforma de automatización orientada a desarrolladores que conecta APIs mediante workflows disparados por eventos, combinando acciones preconstruidas con pasos de código real.

## ¿Para qué sirve?

Sirve para integrar servicios sin mantener servidores: recibir webhooks, transformar datos con Node.js o Python, llamar a otras APIs y coordinar procesos, con credenciales y logs gestionados.

## Cuándo usarla

- Cuando necesitas automatizaciones con lógica más allá de conectar cajas.
- Para gestionar webhooks y glue code entre servicios sin infraestructura.
- Si quieres probar integraciones rápido con pruebas ilimitadas en el editor.

## Cuándo NO usarla

- Para automatizaciones sencillas que una herramienta no-code resuelve más rápido.
- Cuando el volumen de ejecuciones excede con creces los créditos gratuitos.
- Si necesitas procesos de larga duración o estado complejo persistente.

## Pros

- Código real en los pasos, no solo bloques visuales.
- Enorme catálogo de integraciones listas.
- Pruebas ilimitadas en el editor.
- Credenciales de APIs gestionadas de forma segura.

## Contras

- El modelo de créditos requiere vigilar el consumo.
- Solo 3 workflows activos en el plan gratuito.
- Menos amigable para perfiles no técnicos que Zapier.
