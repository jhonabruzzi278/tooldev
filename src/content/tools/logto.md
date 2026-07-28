---
name: Logto
description: Infraestructura de autenticación y autorización para aplicaciones B2C y B2B.
category: auth
tags:
  - auth
  - identity
  - b2c
  - b2b
  - open-source
officialSite: 'https://logto.io'
github: 'https://github.com/logto-io/logto'
pricing: freemium
openSource: true
license: MPL-2.0
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Autenticación con email, social login, MFA y passkeys'
  - 'Organizations, roles y permisos para multi-tenancy B2B'
  - 'Basado en estándares OIDC, OAuth 2.1 y SAML'
  - Logto Cloud gestionado y edición open source autoalojable
  - Páginas de sign-in personalizables con tu marca
  - 'SDKs para web, móvil y frameworks modernos'
  - 'Gestión de usuarios, audit logs y webhooks'
alternatives:
  - auth0
  - clerk
  - supabase
relatedTools:
  - workos
  - pocketbase
howToUse:
  - step: 1
    title: Elegir Cloud o self-hosted
    description: >-
      Regístrate en logto.io para usar Logto Cloud, o despliega la edición open
      source con Docker en tu propia infraestructura si prefieres control total.
  - step: 2
    title: Crear una aplicación y conectar el SDK
    description: >-
      Crea una aplicación en la consola (tradicional, SPA, máquina a máquina),
      instala el SDK de tu framework y configura el endpoint y las credenciales.
  - step: 3
    title: Configurar conectores y organizaciones
    description: >-
      Activa conectores sociales o de email/SMS, personaliza la experiencia de
      sign-in y habilita organizations y roles si tu producto es B2B.
whenToUse:
  - title: Auth moderna con opción open source
    description: >-
      Cuando quieres una plataforma de identidad completa que puedas empezar
      usando en cloud gratis y autoalojar más adelante si lo necesitas.
  - title: Productos B2C y B2B a la vez
    description: >-
      Para equipos que construyen varias aplicaciones y necesitan una sola
      infraestructura de identidad para consumidores y empresas.
tips:
  - text: >-
      Usa Logto Cloud en desarrollo para iterar rápido y evalúa el self-hosting
      solo cuando tengas requisitos claros de datos o compliance.
  - text: >-
      Define los roles y permisos (RBAC) por organización desde el inicio para
      no refactorizar la autorización más tarde.
  - text: >-
      Personaliza la página de sign-in con tu marca desde la consola: mejora la
      conversión sin montar UI propia.
faq:
  - question: ¿Qué incluye el plan gratuito de Logto?
    answer: >-
      Logto Cloud gratis incluye 50.000 usuarios activos al mes, y la edición
      open source autoalojable es completamente gratuita.
  - question: ¿Logto es realmente open source?
    answer: >-
      Sí, el núcleo está publicado bajo licencia MPL-2.0 en GitHub y puedes
      autoalojarlo con Docker sin límites de usuarios.
  - question: ¿Soporta B2B con organizaciones?
    answer: >-
      Sí, incluye organizations, roles y permisos multi-tenant, además de SSO
      empresarial en los planes superiores.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/logto.webp
---

## ¿Qué es?

Logto es una infraestructura de autenticación y autorización para aplicaciones B2C y B2B, basada en estándares como OIDC y OAuth 2.1. Ofrece una versión cloud gestionada y una edición open source autoalojable.

## ¿Para qué sirve?

Sirve para añadir registro, login, MFA, gestión de usuarios, organizaciones y control de acceso por roles a tus aplicaciones, con la flexibilidad de elegir entre cloud o self-hosting.

## Cuándo usarla

- Cuando quieres auth completa con opción open source.
- Para productos B2C y B2B sobre una misma identidad.
- Si el plan gratuito de 50.000 MAU encaja con tu escala.

## Cuándo NO usarla

- Si necesitas el ecosistema y marketplace de Auth0 ya maduros.
- Para funciones enterprise muy específicas sin presupuesto.

## Pros

- Open source (MPL-2.0) con self-hosting ilimitado.
- Plan cloud gratuito generoso con 50.000 MAU.
- Cubre B2C y B2B con organizations y RBAC.

## Contras

- Ecosistema y conectores más limitados que Auth0.
- Algunas funciones enterprise solo en planes de pago.
