---
name: Web3Forms
description: Recibe formularios de sitios estáticos en tu email mediante una API.
category: email
tags:
  - forms
  - api
  - static-sites
  - email
  - no-backend
officialSite: 'https://web3forms.com'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - API de formularios con access key
  - No requiere backend ni panel complejo
  - Envío de los datos del formulario a tu email
  - Protección antispam con honeypot y reCAPTCHA
  - 'Compatible con HTML puro, JavaScript y frameworks'
  - Respuestas JSON para integración con fetch
alternatives:
  - formspree
  - tally
relatedTools: []
howToUse:
  - step: 1
    title: Obtén tu access key
    description: >-
      Entra en web3forms.com, introduce tu email y recibe una access key al
      instante. No hace falta crear una cuenta con contraseña para empezar.
  - step: 2
    title: Añade la key a tu formulario
    description: >-
      Incluye un campo oculto con name=access_key y tu clave en el formulario
      HTML, apuntando el action a https://api.web3forms.com/submit, o envía los
      datos con fetch.
  - step: 3
    title: Recibe los envíos en tu email
    description: >-
      Cada envío del formulario llega directamente a tu bandeja de correo con
      los campos rellenados, sin dashboards intermedios obligatorios.
whenToUse:
  - title: Contacto en sitios estáticos sin fricción
    description: >-
      Cuando quieres un formulario funcional en una web estática sin crear
      cuentas complejas, paneles ni backend propio: solo una access key y un
      form.
  - title: Proyectos personales y portfolios
    description: >-
      Para añadir contacto a un portfolio o landing personal en minutos, con
      antispam incluido y cero mantenimiento.
examples:
  - title: Envío con fetch desde JavaScript
    code: |
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'TU_ACCESS_KEY',
          nombre: 'Ana',
          email: 'ana@ejemplo.com',
          mensaje: 'Hola, me interesa tu trabajo'
        })
      })
      const data = await res.json()
    output: Devuelve success true y el mensaje llega a tu correo electrónico.
tips:
  - text: >-
      Activa el honeypot incluyendo un campo checkbox oculto con name=botcheck
      para frenar bots sin captcha visible.
  - text: >-
      Usa el campo subject o from_name para personalizar el asunto de los emails
      que recibes.
  - text: >-
      Guarda la access key en el HTML solo en sitios públicos: es su modelo de
      uso, pero no la reutilices en entornos privados.
faq:
  - question: ¿Qué incluye el plan gratuito de Web3Forms?
    answer: >-
      El plan gratuito incluye 250 envíos al mes, formularios y sitios web
      ilimitados, sin necesidad de backend ni de crear una cuenta completa.
  - question: ¿Necesito registrarme para usar Web3Forms?
    answer: >-
      No hace falta una cuenta con contraseña: introduces tu email, recibes una
      access key y ya puedes recibir envíos de formularios.
  - question: ¿Cómo evita el spam Web3Forms?
    answer: >-
      Incluye honeypot integrado y soporte para reCAPTCHA, además de filtros
      automáticos en el servidor antes de reenviarte el mensaje.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/web3forms.webp
---

## ¿Qué es?

Web3Forms es una API que convierte cualquier formulario HTML en un canal directo a tu email, sin backend ni registro complejo. Con una access key y un form apuntando a su endpoint, los envíos llegan a tu bandeja.

## ¿Para qué sirve?

Sirve para añadir formularios de contacto a sitios estáticos, portfolios y landings sin montar servidor, sin configurar SMTP y sin paneles pesados: la respuesta de la API y la notificación por email lo resuelven todo.

## Cuándo usarla

- En sitios estáticos que necesitan contacto sin backend.
- Cuando quieres cero fricción: sin cuenta, sin panel, solo una key.
- Para proyectos personales con volumen moderado de envíos.

## Cuándo NO usarla

- Si necesitas almacenar y consultar los envíos en un dashboard completo.
- Cuando superas los 250 envíos/mes del plan gratuito.
- Si requieres lógica de servidor tras cada envío.

## Pros

- Empezar lleva menos de dos minutos.
- No exige backend ni cuenta tradicional.
- Antispam con honeypot y reCAPTCHA.
- Funciona con HTML puro o cualquier framework JS.

## Contras

- 250 envíos/mes pueden quedarse cortos en webs con tráfico.
- Funciones avanzadas (adjuntos, más volumen) son de pago.
- Menos opciones de gestión de envíos que alternativas con panel completo.
