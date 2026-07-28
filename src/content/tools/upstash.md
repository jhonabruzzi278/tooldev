---
name: Upstash
description: 'Redis, Kafka y workflows serverless con capas gratuitas por uso.'
category: backend
tags:
  - redis
  - kafka
  - serverless
  - qstash
  - cache
officialSite: 'https://upstash.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Redis serverless accesible por REST y por protocolo estándar
  - Kafka gestionado con pricing por uso
  - QStash para mensajería y tareas programadas por HTTP
  - Workflows durables para orquestar procesos de larga duración
  - Vector database para búsqueda semántica e IA
  - Replicación multi-región para lecturas de baja latencia
  - 'Facturación por petición, ideal para serverless'
alternatives:
  - redis
  - kafka
  - turso
relatedTools:
  - neon
  - cloudflare
howToUse:
  - step: 1
    title: Crear una base de datos Redis
    description: >-
      Regístrate en upstash.com, crea una base de datos Redis eligiendo la
      región principal y, si quieres, réplicas de lectura en otras regiones.
  - step: 2
    title: Conectar desde tu aplicación
    description: >-
      Copia el endpoint y el token, y usa el SDK @upstash/redis (vía HTTPS,
      perfecto para edge y serverless) o cualquier cliente Redis estándar con la
      URL TLS.
  - step: 3
    title: Explorar QStash y Workflows
    description: >-
      Publica mensajes o programa tareas con QStash mediante simples llamadas
      HTTP, y usa Workflows para procesos con reintentos y pasos durables sin
      infraestructura propia.
whenToUse:
  - title: Caché en entornos serverless y edge
    description: >-
      Cuando necesitas Redis desde Cloudflare Workers, Vercel o AWS Lambda sin
      mantener conexiones TCP abiertas.
  - title: Colas y cron sin servidores
    description: >-
      Para encolar trabajos, programar tareas y orquestar procesos con QStash y
      Workflows usando solo HTTP.
tips:
  - text: >-
      Usa el SDK REST de @upstash/redis en funciones edge: evita los problemas
      de conexiones persistentes en entornos efímeros.
  - text: >-
      Activa la replicación multi-región si tus usuarios están distribuidos y la
      latencia de lectura importa.
  - text: >-
      Con el pricing por petición, monitoriza los comandos mensuales desde la
      consola para no salirte de la capa gratuita sin darte cuenta.
faq:
  - question: ¿Qué incluye el plan gratuito de Upstash?
    answer: >-
      La capa gratuita de Redis incluye 256 MB de almacenamiento y 500.000
      comandos al mes, y QStash permite 1.000 mensajes al día.
  - question: ¿Upstash Redis es compatible con clientes Redis normales?
    answer: >-
      Sí, soporta el protocolo Redis estándar sobre TLS, además de su API REST y
      sus SDKs pensados para entornos serverless y edge.
  - question: ¿Qué es QStash?
    answer: >-
      QStash es un servicio de mensajería y programación de tareas por HTTP:
      publicas un mensaje o defines un cron y Upstash llama a tu endpoint con
      reintentos y garantías de entrega.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/upstash.webp
---

## ¿Qué es?

Upstash es una plataforma de servicios de datos serverless que ofrece Redis, Kafka, QStash (mensajería y cron), Workflows y una base de datos vectorial, todo con acceso por HTTP y facturación por uso.

## ¿Para qué sirve?

Sirve para añadir caché, colas, tareas programadas y mensajería a aplicaciones serverless y edge sin gestionar servidores ni conexiones persistentes.

## Cuándo usarla

- Para caché y sesiones en funciones serverless o edge.
- Si necesitas colas y crons vía HTTP sin infraestructura.
- Cuando quieres Kafka gestionado con pago por uso.

## Cuándo NO usarla

- Para cargas masivas y constantes donde un Redis autoalojado sale más barato.
- Si necesitas módulos específicos de Redis no soportados.

## Pros

- REST y SDKs pensados para serverless y edge.
- Capa gratuita usable en producción pequeña.
- Varios servicios de datos en una sola plataforma.

## Contras

- El coste por petición puede crecer con mucho tráfico.
- Menos control fino que gestionando tu propio Redis o Kafka.
