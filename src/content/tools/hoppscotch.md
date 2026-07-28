---
name: Hoppscotch
description: 'Cliente web rápido para APIs REST, GraphQL y protocolos realtime.'
category: apis
tags:
  - api-client
  - rest
  - graphql
  - websocket
  - testing
officialSite: 'https://hoppscotch.io'
github: 'https://github.com/hoppscotch/hoppscotch'
license: MIT
pricing: open-source
openSource: true
technicalLevel: intermedio
compatibility:
  - Web
  - PWA
  - Self-hosted
featured: false
verified: false
features:
  - Cliente web ligero para APIs REST y GraphQL
  - 'Soporte para WebSocket, SSE, MQTT y Socket.IO'
  - 'Colecciones, entornos y variables'
  - Tests con scripts en JavaScript
  - Edición Community autoalojable
  - Sincronización cloud con workspace personal gratuito
alternatives:
  - postman
relatedTools:
  - beeceptor
  - jsonplaceholder
howToUse:
  - step: 1
    title: Abre el cliente web
    description: >-
      Entra en hoppscotch.io y empieza a hacer peticiones sin instalar nada.
      Opcionalmente crea una cuenta gratuita para sincronizar colecciones y
      entornos.
  - step: 2
    title: Organiza colecciones y entornos
    description: >-
      Crea colecciones para agrupar peticiones por API y define entornos con
      variables como la URL base o el token, cambiando de entorno con un clic.
  - step: 3
    title: Prueba y autoaloja si quieres
    description: >-
      Ejecuta peticiones REST, GraphQL o realtime, añade tests con scripts y, si
      tu equipo lo necesita, despliega la edición Community en vuestros
      servidores con Docker.
whenToUse:
  - title: Alternativa open source a Postman
    description: >-
      Cuando quieres un cliente de APIs rápido y ligero sin el peso ni las
      cuentas obligatorias de las suites comerciales, con opción de
      autoalojarlo.
  - title: Pruebas de APIs realtime
    description: >-
      Si trabajas con WebSocket, SSE o MQTT además de REST y GraphQL, y quieres
      probar todos los protocolos desde la misma herramienta.
tips:
  - text: >-
      Instálalo como PWA para tenerlo a un clic como si fuera una app de
      escritorio.
  - text: >-
      Importa tus colecciones desde Postman o desde un archivo OpenAPI para
      migrar en segundos.
  - text: >-
      Usa los pre-request scripts para firmar peticiones o renovar tokens antes
      de cada llamada.
faq:
  - question: ¿Qué incluye el plan gratuito de Hoppscotch?
    answer: >-
      El cliente web y la edición Community autoalojada son gratis y open
      source, y el cloud incluye un workspace personal gratuito.
  - question: ¿Hoppscotch es realmente open source?
    answer: >-
      Sí, el código está publicado en GitHub bajo licencia MIT y puedes
      autoalojar la edición Community en tu propia infraestructura.
  - question: ¿Qué protocolos soporta además de REST?
    answer: >-
      Soporta GraphQL, WebSocket, Server-Sent Events, MQTT y Socket.IO, además
      de las peticiones HTTP REST habituales.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/hoppscotch.webp
---

## ¿Qué es?

Hoppscotch es un cliente de APIs open source y ultraligero que funciona en el navegador. Soporta REST, GraphQL y protocolos realtime como WebSocket, SSE y MQTT, con opción de cloud o self-hosted.

## ¿Para qué sirve?

Sirve para probar y depurar APIs de todo tipo sin instalar aplicaciones pesadas: organizar colecciones, gestionar entornos con variables, ejecutar tests y colaborar con el equipo.

## Cuándo usarla

- Cuando buscas una alternativa open source y ligera a Postman.
- Si necesitas probar WebSocket, SSE o MQTT además de HTTP.
- Para equipos que quieren autoalojar su cliente de APIs.

## Cuándo NO usarla

- Si necesitas funciones enterprise avanzadas tipo mock servers integrados o monitores.
- Cuando tu flujo exige la automatización CI/CD madura del ecosistema Postman.
- Si prefieres una app de escritorio nativa con integración profunda del sistema.

## Pros

- Muy rápido y ligero, directo desde el navegador.
- Open source con licencia MIT y opción self-hosted.
- Soporta más protocolos realtime que la mayoría de clientes.
- Workspace personal en cloud gratuito.

## Contras

- Menos funciones enterprise que Postman (monitores, mocks avanzados).
- La colaboración en equipo completa requiere planes de pago o self-hosting.
- Ecosistema de integraciones más pequeño.
