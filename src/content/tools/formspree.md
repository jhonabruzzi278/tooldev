---
name: Formspree
description: Añade un backend fiable para formularios sin escribir código de servidor.
category: email
tags:
  - forms
  - static-sites
  - backend
  - email
  - antispam
officialSite: 'https://formspree.io'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Endpoints de formulario sin backend propio
  - Notificaciones por email en cada envío
  - Filtrado antispam integrado
  - Panel con historial de envíos
  - Integraciones con herramientas externas en planes de pago
  - Compatible con cualquier sitio estático o framework
alternatives:
  - web3forms
  - tally
relatedTools: []
howToUse:
  - step: 1
    title: Crea un formulario en el panel
    description: >-
      Regístrate en formspree.io y crea un nuevo formulario. Obtendrás un
      endpoint único del tipo https://formspree.io/f/tu-id que recibirá los
      envíos.
  - step: 2
    title: Apunta tu HTML al endpoint
    description: >-
      Pon ese endpoint como action de tu etiqueta form con method POST. Cada
      campo con atributo name se enviará automáticamente, sin JavaScript ni
      servidor.
  - step: 3
    title: Recibe y gestiona los envíos
    description: >-
      Formspree te avisará por email de cada envío y los guardará en el panel,
      donde puedes exportarlos, marcar spam o conectar integraciones.
whenToUse:
  - title: Formularios en sitios estáticos
    description: >-
      Cuando tu web es estática (Astro, Next.js export, Hugo) y necesitas un
      formulario de contacto funcional sin montar un servidor.
  - title: Landing pages rápidas
    description: >-
      Para captar leads en una landing sin invertir tiempo en backend,
      validaciones de servidor ni configuración de email.
examples:
  - title: Formulario de contacto en HTML puro
    code: |
      <form action="https://formspree.io/f/tu-id" method="POST">
        <input type="text" name="nombre" placeholder="Tu nombre" required>
        <input type="email" name="email" placeholder="Tu email" required>
        <textarea name="mensaje" placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    output: >-
      Al enviarlo, Formspree guarda el envío y te llega una notificación por
      email.
tips:
  - text: >-
      Añade un campo honeypot oculto (name=_gotcha) para reforzar el antispam
      sin captchas.
  - text: >-
      Usa el campo oculto _subject para personalizar el asunto de las
      notificaciones por email.
  - text: >-
      Si envías con fetch y Accept: application/json, puedes mostrar
      confirmación sin recargar la página.
faq:
  - question: ¿Qué incluye el plan gratuito de Formspree?
    answer: >-
      El plan gratuito incluye 50 envíos de formulario al mes, formularios y
      proyectos ilimitados, protección antispam y avisos por email.
  - question: ¿Necesito escribir código de servidor?
    answer: >-
      No. Solo apuntas el action del formulario al endpoint de Formspree y ellos
      se encargan de recibir, filtrar y notificar los envíos.
  - question: ¿Puedo enviar archivos adjuntos?
    answer: >-
      La subida de archivos está disponible en los planes de pago. El plan
      gratuito está pensado para formularios de texto sencillos.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/formspree.webp
---

## ¿Qué es?

Formspree es un servicio que actúa como backend para formularios HTML. Apuntas el action de tu form a su endpoint y ellos reciben los datos, filtran el spam y te notifican por email.

## ¿Para qué sirve?

Sirve para tener formularios de contacto, feedback o suscripción funcionando en sitios estáticos sin escribir ni una línea de código de servidor ni configurar envío de emails.

## Cuándo usarla

- En sitios estáticos sin backend propio.
- Para landings y portfolios con formulario de contacto.
- Cuando quieres algo funcionando en minutos sin mantenimiento.

## Cuándo NO usarla

- Si necesitas lógica compleja tras el envío (pagos, registros en DB).
- Cuando superas los 50 envíos/mes del plan gratuito.
- Si prefieres autoalojar el procesamiento por privacidad.

## Pros

- Cero código de servidor: solo HTML.
- Antispam incluido sin captchas obligatorios.
- Formularios ilimitados en el plan gratis.
- Funciona con cualquier framework o HTML puro.

## Contras

- Solo 50 envíos al mes en el plan gratuito.
- Archivos adjuntos e integraciones avanzadas son de pago.
- Dependencia de un servicio externo para datos de usuarios.
