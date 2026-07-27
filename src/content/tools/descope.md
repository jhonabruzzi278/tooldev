---
name: Descope
description: Flujos visuales de autenticación con APIs y SDKs para experiencias propias.
category: auth
tags: [auth, no-code, flows, passwordless, ciam]
officialSite: https://www.descope.com
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Descope Flows para diseñar journeys de auth sin código
  - Passwordless con magic links, OTP, passkeys y biometría
  - SSO SAML/OIDC y organizaciones para B2B
  - Pantallas de login embebibles y personalizables
  - Conectores con terceros (CRM, email, fraude) desde los flujos
  - SDKs para React, Next.js, Vue, móvil y backend
alternatives: [stytch, auth0, kinde]
relatedTools: [workos, clerk]
howToUse:
  - step: 1
    title: "Crear un proyecto y un flujo"
    description: "Regístrate en descope.com, crea un proyecto y abre Descope Flows para diseñar visualmente el journey de registro y login: métodos de auth, pantallas y condiciones."
  - step: 2
    title: "Integrar el SDK en tu app"
    description: "Instala el SDK de tu framework y renderiza el componente de Descope con tu flow ID; el flujo diseñado en el editor se ejecuta dentro de tu aplicación."
  - step: 3
    title: "Iterar sin desplegar"
    description: "Modifica el flujo en el editor (añadir MFA, cambiar textos, conectar un CRM) y publica los cambios sin tocar el código de tu aplicación."
whenToUse:
  - title: "Cambiar la auth sin redeploys"
    description: "Cuando producto o marketing necesitan ajustar los journeys de registro y login sin pedir cambios de código al equipo de desarrollo."
  - title: "Experiencias de onboarding personalizadas"
    description: "Para crear flujos condicionales (por ejemplo MFA solo en ciertos casos) y enriquecer el registro con integraciones de terceros."
tips:
  - text: "Aprovecha los conectores de los Flows para enriquecer perfiles o detectar bots durante el registro sin escribir código de backend."
  - text: "Versiona tus flujos y pruébalos en un proyecto de staging antes de publicarlos en producción."
  - text: "Empieza con las plantillas de flujo predefinidas y personalízalas: es más rápido que diseñar desde cero."
faq:
  - question: "¿Qué incluye el plan gratuito de Descope?"
    answer: "El plan gratuito incluye 7.500 usuarios activos al mes, aplicaciones ilimitadas y los flujos base de autenticación."
  - question: "¿Qué son los Descope Flows?"
    answer: "Son journeys de autenticación diseñados visualmente (drag and drop) que definen pantallas, métodos de login, condiciones y acciones, ejecutables vía SDK sin código adicional."
  - question: "¿Puedo usar mi propia UI en lugar de las pantallas de Descope?"
    answer: "Sí, además de los componentes embebibles, Descope ofrece APIs y SDKs de backend para construir experiencias totalmente personalizadas."
publishedAt: 2026-07-21
---

## ¿Qué es?

Descope es una plataforma CIAM que permite diseñar flujos de autenticación visualmente (Descope Flows) y ejecutarlos en tu aplicación mediante SDKs, combinando enfoque no-code con APIs para desarrolladores.

## ¿Para qué sirve?

Sirve para crear y evolucionar journeys de registro y login (passwordless, MFA, SSO, B2B) sin redeployar la aplicación, conectando además con servicios de terceros durante el flujo.

## Cuándo usarla

- Cuando quieres iterar la auth sin cambios de código.
- Para onboarding con lógica condicional e integraciones.
- Si necesitas passwordless y SSO B2B con UI embebible.

## Cuándo NO usarla

- Si prefieres control total del flujo en tu propio código.
- Para proyectos que exigen self-hosting open source.

## Pros

- Editor visual de flujos muy productivo.
- Passwordless, MFA y SSO listos para usar.
- Cambios de auth publicables sin despliegues.

## Contras

- Capa gratuita limitada a 7.500 MAU.
- La dependencia del editor puede no gustar a equipos code-first.
