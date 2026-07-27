---
name: Mozilla Observatory
description: Escáner gratuito de Mozilla que audita headers y prácticas habituales de seguridad web.
category: seguridad
tags: [security, headers, audit, scanner, mozilla]
officialSite: https://observatory.mozilla.org
pricing: gratis
openSource: true
license: MPL-2.0
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - Análisis de headers de seguridad HTTP (CSP, HSTS, X-Frame-Options...)
  - Tests complementarios de terceros (TLS, cookies, redirects)
  - Puntuación con letra (A+ a F) y recomendaciones priorizadas
  - Escaneo bajo demanda sin cuenta ni registro
  - Historial público de escaneos por dominio
  - API gratuita para integrar escaneos en pipelines
alternatives: [snyk, gitguardian]
relatedTools: [nginx, have-i-been-pwned]
howToUse:
  - step: 1
    title: "Escanea tu dominio"
    description: "Entra en observatory.mozilla.org, escribe el dominio de tu sitio y lanza el análisis. En menos de un minuto obtendrás una puntuación global y el detalle de cada test de seguridad, sin crear ninguna cuenta."
  - step: 2
    title: "Interpreta los resultados"
    description: "Revisa los tests fallidos ordenados por impacto: Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, cookies sin flags seguras... Cada resultado enlaza a documentación de Mozilla explicando cómo corregirlo."
  - step: 3
    title: "Corrige los headers y vuelve a escanear"
    description: "Aplica los headers recomendados en tu servidor (Nginx, Apache, CDN o framework) y repite el escaneo para verificar la mejora. Sube la puntuación de forma iterativa empezando por los fallos más críticos."
whenToUse:
  - title: "Auditoría rápida de seguridad antes de un lanzamiento"
    description: "Cuando vas a publicar un sitio y quieres una revisión objetiva de sus headers y configuración de seguridad en minutos, sin contratar nada."
  - title: "Aprendizaje de seguridad web práctica"
    description: "Para entender qué hace cada header de seguridad con explicaciones claras y ejemplos, usando tu propio sitio como caso de estudio."
  - title: "Benchmarks y demostraciones a clientes"
    description: "Cuando necesitas evidencia pública y neutral de que la configuración de seguridad de un dominio cumple las buenas prácticas del sector."
tips:
  - text: "No persigas el A+ ciegamente: una CSP estricta puede romper scripts inline; implementa Content-Security-Policy-Report-Only primero y afina antes de bloquear."
  - text: "Activa HSTS con preload solo cuando estés seguro de que todo el dominio y subdominios servirán HTTPS siempre; es difícil de revertir."
  - text: "Usa la API del Observatory en CI para detectar regresiones: un deploy que quite un header de seguridad debería hacer fallar el pipeline."
  - text: "Complementa el escaneo con una revisión de cookies (Secure, HttpOnly, SameSite), donde muchos sitios suspenden aunque los headers estén bien."
faq:
  - question: "¿Qué incluye el plan gratuito de Mozilla Observatory?"
    answer: "Es completamente gratis: es un escáner público con análisis bajo demanda sin cuenta, sin registro y sin límites relevantes, incluida su API."
  - question: "¿Qué evalúa exactamente el Observatory?"
    answer: "Analiza headers HTTP de seguridad (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy...), configuración de cookies, redirects a HTTPS y ejecución de tests de terceros como análisis TLS."
  - question: "¿La puntuación baja significa que mi sitio es inseguro?"
    answer: "No necesariamente. Mide el cumplimiento de buenas prácticas defensivas, no vulnerabilidades activas. Un sitio con F no está hackeado, pero le faltan capas de defensa recomendadas."
  - question: "¿Puedo automatizar escaneos en mi pipeline?"
    answer: "Sí, el Observatory ofrece una API HTTP gratuita y existe una CLI de referencia para lanzar escaneos y consultar resultados, lo que permite validar headers de seguridad en CI/CD."
publishedAt: 2026-07-21
---

## ¿Qué es?

Mozilla Observatory es un escáner público y gratuito de seguridad web mantenido por Mozilla: analiza los headers HTTP, las cookies y la configuración TLS de cualquier dominio y devuelve una puntuación con recomendaciones claras para mejorarla.

## ¿Para qué sirve?

Sirve para auditar en minutos la postura defensiva de un sitio web, aprender qué headers de seguridad faltan y verificar tras cada cambio que la configuración cumple las buenas prácticas recomendadas por el sector.

## Cuándo usarla

- Antes de lanzar un sitio, como checklist automática de seguridad básica.
- Para aprender seguridad web práctica con tu propio dominio como ejemplo.
- Cuando necesitas evidencia pública y neutral de la configuración de un sitio.

## Cuándo NO usarla

- No sustituye a un pentest ni detecta vulnerabilidades en la aplicación.
- Para auditar infraestructura interna no accesible desde internet.

## Pros

- Totalmente gratis, sin cuenta ni límites relevantes.
- Recomendaciones educativas enlazadas a documentación de Mozilla.
- Open source (MPL-2.0) y con API para automatización.
- Resultados públicos comparables entre dominios.

## Contras

- Solo evalúa la superficie pública: headers, cookies y TLS.
- La puntuación puede inducir a optimizar la nota en lugar del riesgo real.
