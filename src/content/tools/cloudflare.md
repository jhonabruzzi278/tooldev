---
name: Cloudflare
description: Plataforma de red global con CDN, DNS, protección DDoS, Workers serverless y seguridad web.
category: devops
tags: [cdn, dns, security, serverless, edge, workers, performance]
officialSite: https://cloudflare.com
pricing: freemium
openSource: false
license: Propietaria
technicalLevel: intermedio
compatibility: ["Web", API, Workers, Pages]
featured: false
features:
  - CDN global con 330+ ciudades y caché inteligente
  - DNS autoritativo rápido con DNSSEC y protección
  - Protección DDoS y firewall de aplicaciones web (WAF)
  - Cloudflare Workers para cómputo serverless en edge
  - Cloudflare Pages para hosting de sitios estáticos
  - R2 Object Storage (compatible con S3, sin fees de salida)
  - Durable Objects, KV, Queues y D1 (SQLite en edge)
alternatives: [aws-cloudfront, fastly, vercel]
relatedTools: [docker, kubernetes, github, next-js, astro]
howToUse:
  - step: 1
    title: "Configurar DNS con Cloudflare"
    description: "Añade tu dominio a Cloudflare, actualiza los nameservers en tu registrador de dominios y configura los registros DNS (A, CNAME, MX). Cloudflare empezará a proteger y acelerar tu sitio automáticamente en minutos."
  - step: 2
    title: "Activar SSL/TLS y seguridad"
    description: "Selecciona el modo SSL (Flexible, Full o Full Strict) según tu configuración de servidor. Habilita el firewall WAF, protección DDoS y reglas de seguridad personalizadas desde el dashboard."
  - step: 3
    title: "Desplegar Workers serverless"
    description: "Instala wrangler CLI con npm, autentícate con wrangler login y crea tu primer Worker con wrangler init. Escribe tu lógica en el archivo generado y despliega con wrangler deploy para ejecutar código en el edge."
  - step: 4
    title: "Configurar almacenamiento y bases de datos"
    description: "Crea buckets R2 para almacenamiento de objetos, bases de datos D1 para SQLite o stores KV para datos clave-valor. Vincula estos recursos a tus Workers desde wrangler.toml para usarlos en el edge."
whenToUse:
  - title: "Acelerar un sitio web existente"
    description: "Si tu sitio tiene visitantes globales, Cloudflare reduce latencia con su CDN de 330+ ciudades y optimiza automáticamente imágenes, CSS y JS sin cambiar tu código."
  - title: "API serverless con Workers"
    description: "Ejecuta funciones serverless en el edge a milisegundos de tus usuarios. Ideal para APIs ligeras, proxies, redirects, A/B testing y lógica que debe correr cerca del cliente."
  - title: "Hosting de sitios estáticos con Pages"
    description: "Conecta tu repositorio Git y Cloudflare Pages construye y despliega automáticamente tu sitio estático con SSL, CDN global y preview deployments por rama."
examples:
  - title: "Worker básico: API de saludo"
    code: |
      export default {
        async fetch(request) {
          const url = new URL(request.url)
          const name = url.searchParams.get('name') || 'Mundo'
          return new Response(JSON.stringify({ hola: name }), {
            headers: { 'Content-Type': 'application/json' }
          })
        }
      }
    output: "Al visitar la URL del Worker con ?name=Juan, responde {\"hola\":\"Juan\"}. Sin parámetros, usa 'Mundo' por defecto."
  - title: "Transformar respuesta de origen"
    code: |
      export default {
        async fetch(request) {
          const response = await fetch(request)
          const modified = new Response(response.body, response)
          modified.headers.set('X-Powered-By', 'Cloudflare Workers')
          return modified
        }
      }
    output: "El Worker actúa como proxy, añadiendo el header X-Powered-By a todas las respuestas del servidor de origen."
tips:
  - text: "Usa wrangler tail para ver logs en tiempo real de tus Workers durante el desarrollo, facilita enormemente el debugging."
  - text: "Configura Page Rules o Cache Rules para afinar el comportamiento de caché por rutas específicas y reducir carga en tu origen."
  - text: "Aprovecha R2 para almacenar archivos sin fees de salida de datos, ideal para assets estáticos, backups y contenido generado por usuarios."
  - text: "Habilita Early Hints en Cloudflare para mejorar el rendimiento de carga inicial enviando preload hints antes de que el servidor responda."
  - text: "Usa entornos en wrangler.toml para separar configuraciones de staging y producción, evitando sobrescribir recursos accidentalmente."
faq:
  - question: "¿Cloudflare ralentiza mi sitio?"
    answer: "No, todo lo contrario. El CDN de Cloudflare cachea contenido estático en 330+ ciudades, reduciendo la latencia para usuarios globales. En la mayoría de los casos, la velocidad mejora significativamente."
  - question: "¿Puedo usar mi propio certificado SSL?"
    answer: "Sí, Cloudflare permite subir certificados SSL personalizados en planes Business y Enterprise. En planes gratuitos y Pro, Cloudflare genera certificados automáticos con Universal SSL."
  - question: "¿Qué limitaciones tienen los Workers gratuitos?"
    answer: "El plan gratuito incluye 100,000 solicitudes por día, 10ms de CPU por solicitud y 128MB de memoria. Para producción con tráfico alto, el plan Workers Paid elimina estos límites y reduce latencia de cold starts."
  - question: "¿R2 realmente no cobra fees de salida?"
    answer: "Correcto, Cloudflare R2 no cobra por el tráfico de salida (egress). Solo pagas por almacenamiento, operaciones de escritura/lectura y clase de almacenamiento, lo que lo hace muy competitivo frente a S3."
publishedAt: 2026-06-01
---

## ¿Qué es?

Cloudflare es una plataforma integral de red y seguridad que acelera y protege sitios web y aplicaciones. Ofrece CDN, DNS, protección DDoS, Workers serverless, Pages hosting y almacenamiento R2 en una red global de más de 330 ciudades.

## ¿Para qué sirve?

Cloudflare sirve para acelerar, proteger y optimizar sitios web y aplicaciones. También permite ejecutar código serverless en el edge con Workers, hostear sitios estáticos con Pages y almacenar objetos con R2.

## Cuándo usarla

- Cuando necesitas CDN y protección DDoS para tu sitio web.
- Para acelerar APIs y aplicaciones globalmente.
- Si quieres ejecutar código serverless en el edge (Workers).
- Para hostear sitios estáticos con Pages.
- Cuando buscas almacenamiento S3 sin fees de salida (R2).

## Cuándo NO usarla

- Para aplicaciones on-premise sin salida a internet pública.
- Si ya tienes CDN y seguridad con otro proveedor.
- Cuando necesitas control granular sobre la infraestructura de red.
- Para proyectos pequeños sin necesidad de red global.

## Pros

- CDN y DNS gratuitos con plan generoso.
- Red global en 330+ ciudades.
- Workers para cómputo serverless en edge.
- Protección DDoS y WAF incluidos.
- R2 sin fees de salida de datos.

## Contras

- Vendor lock-in con Workers.
- Depuración de Workers en edge puede ser compleja.
- Plan gratuito tiene límites en Workers y Pages.
- Algunas features avanzadas son costosas.

## CLI

Cloudflare CLI (wrangler) para gestionar Workers, Pages y configuraciones:

```bash
npm install -g wrangler              # Instalar CLI (Workers/Pages)
wrangler login                       # Autenticación
wrangler init                        # Inicializar proyecto Worker
wrangler deploy                      # Desplegar Worker
wrangler pages project create        # Crear proyecto Pages
wrangler d1 create my-db             # Crear base de datos D1
wrangler r2 bucket create my-bucket  # Crear bucket R2
wrangler tail                        # Ver logs en tiempo real
```
