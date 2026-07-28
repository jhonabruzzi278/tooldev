---
name: Auth0
description: 'Identidad alojada con login social, SSO y flujos de auth extensibles.'
category: auth
tags:
  - auth
  - sso
  - oauth
  - identity
  - login
officialSite: 'https://auth0.com'
github: 'https://github.com/auth0'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: true
verified: false
features:
  - Universal Login alojado y personalizable
  - 'Login social con Google, GitHub, Microsoft y decenas más'
  - 'MFA, passwordless y passkeys'
  - Organizations para aplicaciones B2B multi-tenant
  - Actions para extender los flujos de autenticación con código
  - SDKs para los principales frameworks web y móviles
  - SSO empresarial con SAML y OIDC
alternatives:
  - clerk
  - workos
  - logto
relatedTools:
  - supabase
  - stytch
howToUse:
  - step: 1
    title: Crear un tenant y una aplicación
    description: >-
      Regístrate en auth0.com, crea un tenant y registra tu aplicación (SPA, web
      regular o API) para obtener el dominio, client ID y client secret.
  - step: 2
    title: Integrar el SDK en tu app
    description: >-
      Instala el SDK de tu framework (por ejemplo @auth0/nextjs-auth0) y
      configura las variables de entorno con el dominio y las credenciales del
      tenant.
  - step: 3
    title: Configurar conexiones y acciones
    description: >-
      Activa conexiones sociales o de base de datos, habilita MFA si lo
      necesitas y usa Actions para personalizar tokens o ejecutar lógica tras el
      login.
whenToUse:
  - title: Autenticación completa sin construirla
    description: >-
      Cuando quieres login social, MFA y gestión de sesiones listos para
      producción sin implementar OAuth y seguridad desde cero.
  - title: SaaS B2B con organizaciones
    description: >-
      Para aplicaciones multi-tenant que necesitan organizaciones, roles y SSO
      empresarial para clientes corporativos.
tips:
  - text: >-
      Usa Universal Login alojado al principio: reduce la superficie de ataque y
      te da MFA y reseteo de contraseña resueltos.
  - text: >-
      Extiende los flujos con Actions en lugar de lógica en el cliente para
      mantener las reglas de auth centralizadas.
  - text: >-
      Configura tenants separados para desarrollo, staging y producción desde el
      inicio para no mezclar usuarios.
faq:
  - question: ¿Qué incluye el plan gratuito de Auth0?
    answer: >-
      El plan gratuito incluye hasta 25.000 usuarios activos al mes, conexiones
      sociales, passwordless y 5 organizaciones.
  - question: ¿Auth0 pertenece a Okta?
    answer: >-
      Sí, Auth0 fue adquirida por Okta y se comercializa como Okta Customer
      Identity Cloud, manteniendo su marca y plataforma para desarrolladores.
  - question: ¿Puedo personalizar la pantalla de login?
    answer: >-
      Sí, Universal Login permite personalizar marca, colores y plantillas, y en
      planes superiores se puede usar un dominio propio.
  - question: ¿Auth0 sirve también para autorización de APIs?
    answer: >-
      Sí, puedes registrar tus APIs y emitir access tokens JWT con scopes,
      validándolos en tu backend con las claves del tenant.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/auth0.webp
---

## ¿Qué es?

Auth0 (Okta Customer Identity Cloud) es una plataforma de identidad como servicio que proporciona autenticación, login social, MFA, SSO y gestión de usuarios mediante SDKs y una pantalla de login alojada.

## ¿Para qué sirve?

Sirve para añadir autenticación segura y flujos de identidad a aplicaciones web y móviles sin construir ni mantener la infraestructura de auth propia.

## Cuándo usarla

- Cuando necesitas auth robusta y probada rápidamente.
- Para SaaS B2B con organizaciones y SSO empresarial.
- Si quieres extender los flujos de login con lógica propia (Actions).

## Cuándo NO usarla

- Si tu presupuesto es cero y superarás los 25.000 MAU pronto (mira Logto o Kinde).
- Para proyectos donde quieres control total del código de auth (mejor open source autoalojado).

## Pros

- Plataforma madura con amplio ecosistema de SDKs.
- Login social, MFA y passwordless incluidos en la capa gratuita.
- Muy extensible mediante Actions y reglas.

## Contras

- Los precios escalan rápido al crecer en MAU o funciones enterprise.
- Cierta complejidad de conceptos (tenants, aplicaciones, APIs, conexiones).
