---
name: Mailtrap
description: Prueba emails en sandboxes y envía mensajes transaccionales en producción.
category: email
tags:
  - email
  - testing
  - sandbox
  - smtp
  - transactional
officialSite: 'https://mailtrap.io'
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
  - Sandbox SMTP que captura emails sin enviarlos de verdad
  - Email API y SMTP para envío transaccional en producción
  - 'Inspección de HTML, headers y puntuación de spam'
  - Bandejas de prueba compartibles con el equipo
  - Plantillas con variables dinámicas
  - Logs y analíticas de entrega
alternatives:
  - resend
  - mailjet
  - brevo
relatedTools:
  - postman
  - beeceptor
howToUse:
  - step: 1
    title: Configura el sandbox en desarrollo
    description: >-
      Crea un inbox de prueba en Mailtrap y copia sus credenciales SMTP a tu
      entorno de desarrollo. Todos los emails de tu app quedarán capturados ahí,
      sin llegar a usuarios reales.
  - step: 2
    title: Inspecciona y valida los emails
    description: >-
      Abre cada email capturado para revisar su renderizado HTML, el texto
      plano, los headers y la puntuación de spam antes de aprobar el diseño.
  - step: 3
    title: Pasa a producción con Email API
    description: >-
      Cuando el diseño esté validado, cambia a las credenciales de Email API o
      SMTP de producción, verifica tu dominio y empieza a enviar emails reales
      con la misma integración.
whenToUse:
  - title: Testing de emails en desarrollo y staging
    description: >-
      Cuando quieres probar flujos de registro, recuperación de contraseña o
      notificaciones sin riesgo de enviar emails reales a usuarios durante las
      pruebas.
  - title: Un mismo proveedor para test y producción
    description: >-
      Si quieres evitar configurar un sandbox por un lado y un proveedor de
      envío por otro, manteniendo una sola integración SMTP o API.
examples:
  - title: Enviar con la Email API de Mailtrap
    code: |
      const res = await fetch('https://send.api.mailtrap.io/api/send', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer TU_API_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: { email: 'hola@tudominio.com', name: 'Acme' },
          to: [{ email: 'usuario@ejemplo.com' }],
          subject: 'Restablece tu contraseña',
          html: '<p>Haz clic aquí para restablecerla</p>'
        })
      })
    output: Devuelve confirmación del envío con los ids de mensaje aceptados.
tips:
  - text: >-
      Usa siempre el sandbox en CI: los tests de registro no deben enviar emails
      reales nunca.
  - text: >-
      Revisa la puntuación de spam que muestra Mailtrap y corrige el HTML antes
      de producción.
  - text: >-
      Crea un inbox de prueba por entorno o por feature branch para no mezclar
      capturas del equipo.
faq:
  - question: ¿Qué incluye el plan gratuito de Mailtrap?
    answer: >-
      El plan Email API Free incluye 4.000 emails al mes con un límite de 150 al
      día, un dominio y logs conservados durante 3 días.
  - question: ¿Qué diferencia hay entre el sandbox y Email API?
    answer: >-
      El sandbox (Email Testing) captura los emails en una bandeja falsa para
      inspeccionarlos sin enviarlos. Email API es el servicio de envío
      transaccional real para producción.
  - question: ¿Puedo compartir las bandejas de prueba con mi equipo?
    answer: >-
      Sí, los inboxes de testing se pueden compartir, de modo que QA y diseño
      revisen los mismos emails capturados sin acceso a tu cuenta.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/mailtrap.webp
---

## ¿Qué es?

Mailtrap es una plataforma de email con dos caras: un sandbox SMTP para capturar y revisar emails durante el desarrollo, y una API/SMTP de envío transaccional para producción.

## ¿Para qué sirve?

Sirve para probar todos los emails de una aplicación sin riesgo de enviarlos a usuarios reales, inspeccionar su HTML y su puntuación de spam, y luego enviarlos de verdad con la misma integración.

## Cuándo usarla

- Cuando quieres testear flujos de email sin tocar buzones reales.
- Para validar el renderizado y el spam score antes de lanzar.
- Si prefieres un único proveedor para testing y envío en producción.

## Cuándo NO usarla

- Si necesitas campañas de marketing con editor visual y segmentación.
- Para volúmenes de producción muy altos en el plan gratuito.
- Si tu única necesidad es una API transaccional minimalista.

## Pros

- Sandbox excelente para desarrollo y QA.
- Inspección de HTML y spam score integrada.
- Transición suave de testing a envío real.
- Buen plan gratuito para la API de envío.

## Contras

- Logs de solo 3 días en el plan gratuito.
- Un solo dominio en el plan gratis.
- No cubre marketing masivo con editor visual.
