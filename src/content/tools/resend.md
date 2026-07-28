---
name: Resend
description: API moderna de email transaccional con gran integración con React.
category: email
tags:
  - email
  - transactional
  - react
  - api
  - smtp
officialSite: 'https://resend.com'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
  - SMTP
featured: true
verified: false
features:
  - API REST simple y SDKs para los lenguajes populares
  - Integración con React Email para plantillas en JSX
  - Envío transaccional con alta entregabilidad
  - 'Webhooks para eventos de entrega, apertura y bounce'
  - Gestión guiada de dominios y registros DNS
  - Logs y analíticas de envío en el dashboard
alternatives:
  - brevo
  - mailjet
  - mailtrap
relatedTools:
  - postman
howToUse:
  - step: 1
    title: Crea una API key
    description: >-
      Regístrate en resend.com y genera una API key desde el dashboard. Guárdala
      en una variable de entorno de tu proyecto, nunca en código que se ejecute
      en el cliente.
  - step: 2
    title: Verifica tu dominio
    description: >-
      Añade tu dominio y configura los registros DNS (SPF y DKIM) que Resend te
      indica. Mientras tanto puedes probar con el dominio de pruebas
      onboarding@resend.dev.
  - step: 3
    title: Envía tu primer email
    description: >-
      Instala el SDK con npm install resend y llama a resend.emails.send() con
      from, to, subject y un cuerpo en HTML o un componente de React Email.
whenToUse:
  - title: Emails transaccionales en apps modernas
    description: >-
      Cuando necesitas enviar confirmaciones de registro, recuperaciones de
      contraseña o notificaciones desde una app Next.js o Node con el mínimo
      código posible.
  - title: Plantillas construidas con React
    description: >-
      Si tu equipo ya trabaja con React y quiere crear plantillas de email como
      componentes tipados, con preview local y reutilización de piezas entre
      emails.
examples:
  - title: Enviar un email con el SDK de Node
    code: |
      import { Resend } from 'resend'

      const resend = new Resend(process.env.RESEND_API_KEY)

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'usuario@ejemplo.com',
        subject: 'Bienvenido',
        html: '<strong>Gracias por registrarte</strong>'
      })
    output: >-
      Devuelve el id del email enviado y el envío queda registrado en los logs
      del dashboard.
tips:
  - text: >-
      Usa el dominio de pruebas onboarding@resend.dev en desarrollo y verifica
      tu dominio propio antes de salir a producción.
  - text: >-
      Construye las plantillas con React Email para previsualizarlas en local y
      mantener consistencia visual entre emails.
  - text: >-
      Configura el webhook para reaccionar a bounces y quejas, y así mantener
      limpia tu lista de destinatarios.
faq:
  - question: ¿Qué incluye el plan gratuito de Resend?
    answer: >-
      El plan gratuito incluye 3.000 emails al mes con un límite de 100 emails
      al día, un dominio, un webhook y logs conservados durante un día.
  - question: ¿Puedo usar Resend solo con SMTP?
    answer: >-
      Sí, además de la API y los SDKs, Resend ofrece credenciales SMTP para
      integrarlo en herramientas que solo soportan envío por SMTP.
  - question: ¿Qué es React Email?
    answer: >-
      Es una librería del ecosistema de Resend para crear plantillas de email
      con componentes de React, que se renderizan a HTML compatible con los
      clientes de correo.
  - question: ¿Resend sirve para newsletters masivas?
    answer: >-
      Está centrado en email transaccional y comunicaciones de producto. Para
      campañas de marketing con editor visual y segmentación, herramientas como
      Brevo o Mailjet encajan mejor.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/resend.webp
---

## ¿Qué es?

Resend es una plataforma de envío de email transaccional diseñada para desarrolladores. Ofrece una API REST moderna, SDKs oficiales y una integración muy cuidada con React Email para construir plantillas como componentes.

## ¿Para qué sirve?

Sirve para enviar emails de registro, recuperación de contraseña, recibos y notificaciones desde tu aplicación con pocas líneas de código, monitorizando entregas, aperturas y errores desde un dashboard sencillo.

## Cuándo usarla

- Cuando quieres integrar email transaccional en minutos con un SDK moderno.
- Si tu stack es React/Next.js y quieres plantillas de email como componentes.
- Para equipos que valoran una buena DX: docs claras, tipado y logs útiles.

## Cuándo NO usarla

- Si necesitas campañas de marketing con editor visual y automatizaciones complejas.
- Para volúmenes muy altos donde otros proveedores salen más baratos.
- Si buscas una solución open source autoalojada.

## Pros

- DX excelente: API simple, SDKs tipados y buena documentación.
- Integración nativa con React Email.
- Alta entregabilidad y webhooks de eventos.
- Plan gratuito útil para empezar.

## Contras

- Logs de solo un día en el plan gratuito.
- Un solo dominio y un webhook en el plan gratis.
- Menos orientado a marketing que las suites todo en uno.
