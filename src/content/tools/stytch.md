---
name: Stytch
description: 'APIs y SDKs para autenticación, identidad B2B y prevención de fraude.'
category: auth
tags:
  - auth
  - passwordless
  - b2b
  - fraud-prevention
  - api
officialSite: 'https://stytch.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Passwordless con magic links, OTP y passkeys'
  - 'OAuth social y login con Google, GitHub y más'
  - 'B2B con organizaciones, RBAC y SSO SAML'
  - Device fingerprinting y detección de fraude
  - Sesiones con JWT y gestión de tokens
  - SDKs para frontend y backend con UI preconstruida opcional
  - API-first con webhooks de eventos de usuario
alternatives:
  - descope
  - auth0
  - workos
relatedTools:
  - clerk
  - kinde
howToUse:
  - step: 1
    title: Crear un proyecto y elegir B2C o B2B
    description: >-
      Regístrate en stytch.com, crea un proyecto de tipo Consumer (B2C) o B2B
      según tu producto y copia el project ID y el secret del entorno de test.
  - step: 2
    title: Integrar el SDK
    description: >-
      Instala el SDK de frontend o backend de tu stack y configura los métodos
      de auth que quieras ofrecer: magic links, OTP, OAuth o contraseñas.
  - step: 3
    title: Activar protección anti-fraude y producción
    description: >-
      Habilita device fingerprinting y reglas de detección de bots, verifica tu
      dominio de email y pasa las claves al entorno live cuando estés listo.
whenToUse:
  - title: Login passwordless como experiencia principal
    description: >-
      Cuando quieres que tus usuarios entren con magic links, OTP o passkeys con
      una implementación cuidada y lista para producción.
  - title: SaaS B2B con organizaciones y SSO
    description: >-
      Para productos B2B que necesitan organizaciones, RBAC, discovery de
      dominios y SSO SAML vía API.
  - title: Combatir registros falsos y fraude
    description: >-
      Si tu aplicación sufre abuso de cuentas y quieres fingerprinting y señales
      de riesgo integradas en el login.
tips:
  - text: >-
      Empieza con magic links de email: reducen la fricción de registro y
      eliminan los problemas de contraseñas olvidadas.
  - text: >-
      En B2B, usa el domain discovery para llevar a cada usuario automáticamente
      al SSO de su organización.
  - text: >-
      Activa device fingerprinting desde el principio aunque no lo uses aún:
      acumularás señales útiles si luego aparece fraude.
faq:
  - question: ¿Qué incluye el plan gratuito de Stytch?
    answer: >-
      El plan gratuito incluye hasta 10.000 usuarios activos al mes en
      aplicaciones B2C o 1.000 usuarios activos al mes en B2B.
  - question: ¿Stytch soporta passkeys?
    answer: >-
      Sí, soporta passkeys/WebAuthn además de magic links, OTP por SMS y email,
      OAuth social y contraseñas tradicionales.
  - question: ¿Puedo construir mi propia UI de login?
    answer: >-
      Sí, Stytch es API-first: puedes usar sus componentes preconstruidos o
      llamar directamente a la API para una experiencia totalmente
      personalizada.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/stytch.webp
---

## ¿Qué es?

Stytch es una plataforma de autenticación API-first con SDKs para login passwordless, OAuth, gestión de sesiones, identidad B2B con organizaciones y herramientas de prevención de fraude.

## ¿Para qué sirve?

Sirve para implementar flujos de autenticación modernos (magic links, OTP, passkeys, SSO) y proteger el registro y login contra bots y fraude, tanto en productos B2C como B2B.

## Cuándo usarla

- Cuando el passwordless es tu experiencia de login principal.
- Para SaaS B2B con organizaciones, RBAC y SSO.
- Si necesitas señales anti-fraude integradas en la auth.

## Cuándo NO usarla

- Si buscas una opción open source autoalojable (mira Logto).
- Para proyectos con más de 10.000 MAU y presupuesto cero.

## Pros

- Excelente soporte de passwordless y passkeys.
- Modelo B2B completo con organizaciones y SSO.
- Device fingerprinting y anti-fraude integrados.

## Contras

- La capa B2B gratuita es limitada (1.000 MAU).
- SMS y funciones avanzadas encarecen el coste al escalar.
