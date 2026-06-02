---
name: Stripe
description: Plataforma de infraestructura de pagos para internet con soporte global, suscripciones y facturación.
category: backend
tags: [payments, billing, subscriptions, api, fintech, ecommerce]
officialSite: https://stripe.com
pricing: freemium
openSource: false
license: Propietaria
technicalLevel: intermedio
compatibility: ["Web", "iOS", Android, API]
featured: false
features:
  - Pagos con tarjetas, wallets y métodos locales en 135+ monedas
  - Suscripciones y facturación recurrente con prorrateo
  - Stripe Connect para plataformas con pagos entre usuarios
  - Stripe Elements para UI de pagos personalizable y segura
  - Stripe Radar para detección de fraude con machine learning
  - Facturación y recibos automatizados con soporte fiscal
  - Dashboard en tiempo real con reportes y reconciliación
alternatives: [paypal, square, mercadopago]
relatedTools: [react, next-js, node-js, docker]
howToUse:
  - step: 1
    title: "Crear una cuenta y obtener las API keys"
    description: "Regístrate en stripe.com, verifica tu negocio y obtén las claves publicables (pk_test_...) y secretas (sk_test_...) desde el dashboard para comenzar a integrar."
  - step: 2
    title: "Instalar el SDK y configurar el backend"
    description: "Instala el SDK oficial (npm install stripe), configura las API keys como variables de entorno y crea endpoints para Payment Intents o Checkout Sessions."
  - step: 3
    title: "Integrar la UI de pagos"
    description: "Usa Stripe Elements en el frontend para mostrar un formulario de pago seguro, o redirige al Checkout hospedado de Stripe para una integración más rápida."
  - step: 4
    title: "Configurar webhooks y pruebas"
    description: "Usa stripe listen --forward-to para probar webhooks localmente y configura los eventos (payment_intent.succeeded, invoice.paid) que actualizarán el estado en tu aplicación."
whenToUse:
  - title: "Suscripciones y pagos recurrentes"
    description: "Para negocios SaaS o membresías que necesitan facturación recurrente con prorrateo automático, cambios de plan y gestión de cancelaciones."
  - title: "Marketplaces con pagos entre usuarios"
    description: "Cuando construyes una plataforma como Uber o Airbnb que necesita aceptar pagos de clientes y transferir fondos a proveedores (Stripe Connect)."
  - title: "E-commerce con ventas globales"
    description: "Ideal para tiendas online que venden internacionalmente y necesitan aceptar múltiples métodos de pago locales en 135+ monedas."
examples:
  - title: "Checkout Session en Node.js"
    code: |
      const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: 'price_xxx', quantity: 1 }],
        mode: 'payment',
        success_url: 'https://tusitio.com/success',
        cancel_url: 'https://tusitio.com/cancel',
      });
    output: "Stripe crea una sesión de pago y devuelve una URL de Checkout hospedada lista para redirigir al usuario."
tips:
  - text: "Siempre usa las API keys de prueba (sk_test_ y pk_test_) durante el desarrollo y nunca expongas la clave secreta en código de frontend."
  - text: "Implementa idempotency keys para operaciones críticas como cobros, evitando cargos duplicados si una solicitud se reintenta por fallos de red."
  - text: "Prueba todos los escenarios con las tarjetas de prueba de Stripe (4242424242424242 para éxito, 4000000000000002 para declinación) antes de ir a producción."
  - text: "Configura webhooks en lugar de depender solo de la respuesta síncrona de la API, ya que algunos eventos (como disputas) ocurren de forma asíncrona."
  - text: "Activa Stripe Radar desde el dashboard para obtener protección básica contra fraude y considera configurar reglas personalizadas según los patrones de tu negocio."
faq:
  - question: "¿Cuánto cobra Stripe por transacción?"
    answer: "La tarifa estándar es 2.9% + $0.30 por transacción exitosa con tarjeta en EE.UU. Las tarifas varían por país y método de pago. Stripe no cobra tarifas mensuales fijas."
  - question: "¿En qué países está disponible Stripe?"
    answer: "Stripe está disponible en 46+ países para aceptar pagos. Sin embargo, puedes aceptar pagos de clientes en prácticamente cualquier país del mundo en 135+ monedas."
  - question: "¿Necesito un servidor para usar Stripe?"
    answer: "Sí, Stripe requiere un backend para crear Payment Intents o Checkout Sessions usando la clave secreta. El frontend solo usa la clave publicable para tokenizar datos de tarjeta de forma segura."
  - question: "¿Qué es Stripe Connect?"
    answer: "Es la solución para plataformas que facilitan pagos entre terceros, permitiendo cobrar a clientes, tomar una comisión y transferir el resto a vendedores o proveedores de forma automatizada."
publishedAt: 2026-06-01
---

## ¿Qué es?

Stripe es la plataforma de infraestructura de pagos más utilizada por desarrolladores. Permite aceptar pagos, gestionar suscripciones, facturar clientes y operar marketplaces con una API moderna y bien documentada.

## ¿Para qué sirve?

Stripe sirve para integrar pagos en cualquier aplicación web o móvil. Es ideal para startups y empresas que necesitan aceptar pagos globales, manejar suscripciones recurrentes o construir plataformas con pagos entre usuarios.

## Cuándo usarla

- Cuando necesitas aceptar pagos con tarjeta, PayPal, Apple Pay y más.
- Para negocios con suscripciones y facturación recurrente.
- Si construyes un marketplace o plataforma con pagos entre usuarios.
- Para facturación automatizada con soporte fiscal multi-país.
- Cuando quieres detección de fraude integrada.

## Cuándo NO usarla

- Para pagos únicos simples en un solo país (alternativas más baratas).
- Si operas en países donde Stripe no está disponible.
- Cuando el volumen de transacciones es muy bajo y las fees impactan.
- Para proyectos que requieren procesamiento 100% offline.

## Pros

- API moderna y bien documentada.
- Soporte en 135+ monedas y métodos de pago locales.
- Stripe Connect para plataformas.
- Dashboard y reportes en tiempo real.
- Radar anti-fraude con ML.

## Contras

- Fees por transacción (2.9% + $0.30 típicamente).
- No disponible en todos los países.
- Cuentas pueden ser congeladas por riesgo.
- Configuración fiscal compleja en múltiples países.

## CLI

Stripe CLI para testing local, webhooks y gestión:

```bash
npm install -g stripe                # Instalar CLI
stripe login                         # Autenticación
stripe listen --forward-to localhost:3000/webhook
stripe trigger payment_intent.succeeded
stripe products list                 # Listar productos
stripe prices list                   # Listar precios
stripe customers list                # Listar clientes
stripe logs tail                     # Ver logs en tiempo real
```
