---
name: Brevo
description: 'Email transaccional, campañas y gestión de contactos en una plataforma.'
category: email
tags:
  - email
  - marketing
  - transactional
  - campaigns
  - crm
officialSite: 'https://www.brevo.com'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
  - SMTP
featured: false
verified: false
features:
  - Email transaccional vía API y relay SMTP
  - Campañas de email marketing con editor drag and drop
  - Gestión de contactos con segmentación
  - Automatizaciones de marketing por comportamiento
  - SMS y WhatsApp en canales adicionales
  - 'Estadísticas de aperturas, clics y entregas'
alternatives:
  - mailjet
  - resend
  - mailtrap
relatedTools:
  - tally
howToUse:
  - step: 1
    title: Crea tu cuenta y obtén las claves
    description: >-
      Regístrate en brevo.com y genera una API key o credenciales SMTP desde el
      panel de SMTP y API. Verifica tu dominio de envío para mejorar la
      entregabilidad.
  - step: 2
    title: Importa tus contactos
    description: >-
      Sube tu lista de contactos por CSV o vía API, créales atributos
      personalizados y organiza segmentos para las campañas de marketing.
  - step: 3
    title: Envía transaccionales o campañas
    description: >-
      Usa la API transactional para emails de tu app (confirmaciones, recibos) y
      el editor de campañas para newsletters, midiendo aperturas y clics en el
      panel.
whenToUse:
  - title: Marketing y transaccional en un solo sitio
    description: >-
      Cuando quieres enviar tanto los emails de tu aplicación como newsletters y
      campañas sin pagar ni integrar dos plataformas distintas.
  - title: Equipos sin recursos de desarrollo
    description: >-
      Si el equipo de marketing necesita crear campañas con editor visual
      mientras desarrollo usa la API transaccional, todo sobre la misma base de
      contactos.
examples:
  - title: Enviar un email transaccional con la API
    code: |
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: { name: 'Acme', email: 'hola@tudominio.com' },
          to: [{ email: 'usuario@ejemplo.com' }],
          subject: 'Confirma tu cuenta',
          htmlContent: '<p>Gracias por registrarte</p>'
        })
      })
    output: Devuelve el messageId del email en cola para su envío.
tips:
  - text: >-
      El plan gratuito limita a 300 emails al día: programa los envíos
      transaccionales con prioridad para no agotar la cuota con campañas.
  - text: >-
      Verifica tu dominio con SPF y DKIM desde el primer día para evitar la
      carpeta de spam.
  - text: >-
      Usa los atributos de contacto para personalizar asuntos y contenido sin
      duplicar plantillas.
faq:
  - question: ¿Qué incluye el plan gratuito de Brevo?
    answer: >-
      El plan gratuito incluye 300 emails al día, contactos ilimitados, email
      transaccional y las herramientas básicas de campañas.
  - question: ¿Brevo cobra por contactos o por emails?
    answer: >-
      Los planes se tarifan principalmente por volumen de emails enviados, no
      por número de contactos almacenados, que es ilimitado incluso en el plan
      gratuito.
  - question: ¿Antes se llamaba Sendinblue?
    answer: >-
      Sí, Brevo es el nuevo nombre de Sendinblue desde 2023. La plataforma
      mantiene el email marketing y transaccional, y ha añadido CRM y más
      canales.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/brevo.webp
---

## ¿Qué es?

Brevo (antes Sendinblue) es una plataforma todo en uno de comunicación: email transaccional, campañas de marketing, gestión de contactos y automatizaciones, con API y SMTP para desarrolladores.

## ¿Para qué sirve?

Sirve para centralizar los emails de una app y las campañas de marketing en una sola herramienta, compartiendo la misma base de contactos y estadísticas, sin integrar varios proveedores.

## Cuándo usarla

- Cuando necesitas email transaccional y marketing en la misma plataforma.
- Si quieres contactos ilimitados sin pagar por el tamaño de la lista.
- Para equipos mixtos de marketing y desarrollo.

## Cuándo NO usarla

- Si solo necesitas envío transaccional puro con la mejor DX posible.
- Cuando superas los 300 emails/día y no quieres pasar a un plan de pago.
- Si buscas una herramienta open source autoalojable.

## Pros

- Contactos ilimitados incluso en el plan gratuito.
- Transaccional, campañas y automatización en un solo producto.
- Editor visual de campañas accesible para no técnicos.
- API y SMTP bien documentados.

## Contras

- El límite diario de 300 emails del plan gratis se queda corto rápido.
- La interfaz puede resultar densa por la cantidad de funciones.
- Funciones avanzadas de automatización reservadas a planes superiores.
