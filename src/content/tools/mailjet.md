---
name: Mailjet
description: Envía email transaccional y marketing con APIs, SMTP y plantillas.
category: email
tags: [email, smtp, api, templates, marketing]
officialSite: https://www.mailjet.com
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web, API, SMTP]
featured: false
verified: false
features:
  - API REST y relay SMTP para email transaccional
  - Editor de plantillas con colaboración en tiempo real
  - Campañas de marketing con segmentación
  - Estadísticas de entregas, aperturas y clics
  - Webhooks de eventos de envío
  - Gestión de listas y contactos
alternatives: [brevo, resend, mailtrap]
relatedTools: [postman]
howToUse:
  - step: 1
    title: "Obtén tus credenciales"
    description: "Regístrate en mailjet.com y copia tu API key y secret key desde el panel de API. Añade y verifica tu dominio de envío con los registros DNS indicados."
  - step: 2
    title: "Elige API o SMTP"
    description: "Para integración directa usa la API REST v3.1 o un SDK oficial. Si tu herramienta solo soporta SMTP, configura el relay de Mailjet con las mismas credenciales."
  - step: 3
    title: "Envía y monitoriza"
    description: "Envía tu primer email transaccional o crea una campaña desde el editor. Revisa las estadísticas de entrega y configura webhooks para recibir eventos en tu backend."
whenToUse:
  - title: "Transaccional y marketing juntos"
    description: "Cuando quieres cubrir los emails de la aplicación y las newsletters con un mismo proveedor, compartiendo dominio verificado y reputación de envío."
  - title: "Equipos que editan plantillas en conjunto"
    description: "Si marketing y desarrollo necesitan colaborar en tiempo real sobre las mismas plantillas de email sin pisarse los cambios."
examples:
  - title: "Envío transaccional con la API v3.1"
    code: |
      const res = await fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('API_KEY:SECRET_KEY'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Messages: [{
            From: { Email: 'hola@tudominio.com', Name: 'Acme' },
            To: [{ Email: 'usuario@ejemplo.com' }],
            Subject: 'Tu pedido va en camino',
            HTMLPart: '<p>Gracias por tu compra</p>'
          }]
        })
      })
    output: "Devuelve el estado del envío y el identificador del mensaje por cada destinatario."
tips:
  - text: "Aprovecha los 6.000 emails/mes del plan gratis, pero reparte los envíos para no chocar con el límite de 200 al día."
  - text: "Usa plantillas con variables para reutilizar el mismo diseño en varios emails transaccionales."
  - text: "Activa los webhooks de bounce y spam para depurar tu lista de contactos automáticamente."
faq:
  - question: "¿Qué incluye el plan gratuito de Mailjet?"
    answer: "El plan gratuito incluye 6.000 emails al mes con un límite de 200 emails al día, contactos ilimitados, acceso a las APIs, SMTP y un usuario."
  - question: "¿Mailjet sirve tanto para transaccional como para marketing?"
    answer: "Sí, combina email transaccional por API o SMTP con campañas de marketing, editor de plantillas y segmentación en la misma plataforma."
  - question: "¿Qué SDKs ofrece Mailjet?"
    answer: "Mailjet mantiene librerías oficiales para Node.js, PHP, Python, Java y otros lenguajes, además de la API REST y el relay SMTP."
publishedAt: 2026-07-21
---

## ¿Qué es?

Mailjet es un servicio de email que cubre tanto el envío transaccional por API y SMTP como las campañas de marketing, con un editor de plantillas colaborativo y estadísticas detalladas.

## ¿Para qué sirve?

Sirve para centralizar todos los correos de un producto: los automáticos de la aplicación y las campañas comerciales, con reputación de envío gestionada y métricas unificadas.

## Cuándo usarla

- Cuando necesitas transaccional y marketing con un solo proveedor.
- Si varias personas editan plantillas y quieres colaboración en tiempo real.
- Para proyectos europeos que valoran un proveedor con presencia en la UE.

## Cuándo NO usarla

- Si solo buscas la API transaccional más simple posible.
- Cuando necesitas varios usuarios en el plan gratuito (está limitado a uno).
- Si prefieres una solución open source autoalojada.

## Pros

- Plan gratuito generoso en volumen mensual.
- Editor de plantillas colaborativo poco común en el sector.
- API, SMTP y SDKs para los lenguajes habituales.
- Estadísticas y webhooks completos.

## Contras

- Límite de 200 emails/día en el plan gratuito.
- Un solo usuario en el plan gratis.
- La interfaz tiene curva de aprendizaje por la cantidad de opciones.
