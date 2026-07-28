---
name: WorkOS
description: 'Gestión de usuarios y funciones enterprise como SSO, SCIM y logs de auditoría.'
category: auth
tags:
  - auth
  - sso
  - scim
  - enterprise
  - audit-logs
officialSite: 'https://workos.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - AuthKit para autenticación completa con UI alojada
  - Enterprise SSO con SAML y OIDC para decenas de proveedores
  - Directory Sync (SCIM) para sincronizar usuarios corporativos
  - Logs de auditoría exportables para compliance
  - Organizations y roles para aplicaciones B2B
  - Admin Portal para que tus clientes configuren su SSO
  - 'SDKs para Node, Python, Go, Ruby y más'
alternatives:
  - auth0
  - stytch
  - descope
relatedTools:
  - clerk
  - logto
howToUse:
  - step: 1
    title: Crear una cuenta y obtener las API keys
    description: >-
      Regístrate en workos.com, crea un entorno (sandbox o producción) y copia
      el client ID y la API key desde el dashboard.
  - step: 2
    title: Integrar AuthKit o User Management
    description: >-
      Instala el SDK de tu lenguaje, configura las credenciales y redirige el
      login a AuthKit, o usa las APIs de User Management para construir tu
      propia UI.
  - step: 3
    title: Activar SSO y Directory Sync para clientes enterprise
    description: >-
      Cuando un cliente corporativo lo pida, comparte el enlace del Admin Portal
      para que configure su proveedor SAML/OIDC y la sincronización SCIM sin
      ayuda de tu equipo.
whenToUse:
  - title: Vender a empresas que exigen SSO y SCIM
    description: >-
      Cuando tus clientes enterprise piden SAML SSO, sincronización de
      directorios y audit logs para cerrar el contrato.
  - title: SaaS B2B con organizaciones
    description: >-
      Para gestionar usuarios, organizaciones y roles con una API pensada
      específicamente para productos B2B.
tips:
  - text: >-
      Empieza con AuthKit gratuito y añade SSO solo cuando un cliente lo
      necesite: así no pagas funciones enterprise antes de tiempo.
  - text: >-
      Usa el entorno sandbox para probar los flujos de SSO con proveedores de
      prueba antes de activarlos en producción.
  - text: >-
      El Admin Portal ahorra mucho soporte: delega la configuración del SSO en
      el propio cliente en lugar de hacerlo por email.
faq:
  - question: ¿Qué incluye el plan gratuito de WorkOS?
    answer: >-
      AuthKit es gratis hasta 1 millón de usuarios activos al mes, y SSO y
      Directory Sync son gratuitos durante el periodo de onboarding.
  - question: ¿WorkOS es solo para B2B?
    answer: >-
      Su punto fuerte es B2B (SSO, SCIM, organizaciones), pero AuthKit y User
      Management sirven igualmente para autenticación de aplicaciones B2C.
  - question: ¿Qué proveedores de SSO soporta?
    answer: >-
      Soporta SAML y OIDC con los principales proveedores empresariales: Okta,
      Entra ID (Azure AD), Google Workspace, OneLogin, PingFederate y muchos
      más.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/workos.webp
---

## ¿Qué es?

WorkOS es una plataforma de gestión de usuarios y funciones enterprise para aplicaciones SaaS. Proporciona autenticación (AuthKit), SSO empresarial, Directory Sync con SCIM y logs de auditoría mediante APIs y SDKs.

## ¿Para qué sirve?

Sirve para que un producto SaaS cumpla los requisitos de los clientes corporativos (SSO SAML, provisionamiento SCIM, auditoría) sin implementar estos estándares desde cero.

## Cuándo usarla

- Cuando tus clientes enterprise exigen SSO y SCIM.
- Para SaaS B2B con organizaciones y roles.
- Si necesitas audit logs exportables para compliance.

## Cuándo NO usarla

- Para apps B2C simples donde Clerk o Auth0 pueden ser más directos.
- Si buscas una solución open source autoalojable (mira Logto).

## Pros

- AuthKit gratis hasta 1M MAU, muy generoso.
- SSO y SCIM resueltos con Admin Portal autoservicio.
- APIs limpias y buena documentación para desarrolladores.

## Contras

- Las funciones enterprise se facturan aparte por conexión.
- Ecosistema más pequeño que el de Auth0 u Okta.
