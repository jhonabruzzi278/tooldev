---
name: Kinde
description: Autenticación, organizaciones y acceso a funciones para aplicaciones SaaS.
category: auth
tags: [auth, organizations, billing, saas, feature-flags]
officialSite: https://kinde.com
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Autenticación con email, social login, MFA y passwordless
  - Organizations multi-tenant con roles y permisos
  - Feature flags y entitlements vinculados a la auth
  - Facturación integrada para planes y suscripciones SaaS
  - Páginas de login alojadas y personalizables
  - SDKs para React, Next.js, Node, Python y más
alternatives: [auth0, clerk, logto]
relatedTools: [workos, supabase]
howToUse:
  - step: 1
    title: "Crear tu dominio Kinde"
    description: "Regístrate en kinde.com sin tarjeta, crea tu dominio de autenticación y registra tu aplicación para obtener el client ID y el issuer URL."
  - step: 2
    title: "Integrar el SDK en tu aplicación"
    description: "Instala el SDK de tu framework (por ejemplo @kinde-oss/kinde-auth-nextjs) y configura las variables de entorno con los datos de tu dominio Kinde."
  - step: 3
    title: "Configurar organizaciones y funciones"
    description: "Activa organizations para multi-tenancy, define roles y permisos, y crea feature flags para controlar el acceso a funciones según el plan de cada cliente."
whenToUse:
  - title: "SaaS que cobra por planes y funciones"
    description: "Cuando necesitas autenticación unida a feature flags, entitlements y facturación para monetizar tu producto por niveles."
  - title: "Multi-tenancy con organizaciones"
    description: "Para aplicaciones B2B donde cada cliente es una organización con sus propios usuarios, roles y configuración."
tips:
  - text: "Usa los feature flags de Kinde en lugar de gestionar planes a mano en tu base de datos: se evalúan junto a la sesión del usuario."
  - text: "Personaliza las páginas alojadas con tu marca desde el dashboard para dar una experiencia coherente sin montar UI propia."
  - text: "Activa MFA solo para roles sensibles (admins de organización) si quieres equilibrar seguridad y fricción."
faq:
  - question: "¿Qué incluye el plan gratuito de Kinde?"
    answer: "El plan gratuito incluye 10.500 usuarios activos al mes, 5 organizaciones y la autenticación base, sin necesidad de tarjeta."
  - question: "¿Kinde incluye facturación?"
    answer: "Sí, Kinde ofrece funciones de billing para gestionar planes y suscripciones SaaS conectadas con la autenticación y los entitlements."
  - question: "¿Sirve tanto para B2C como para B2B?"
    answer: "Sí, soporta aplicaciones B2C con login social y passwordless, y B2B con organizations, roles y permisos multi-tenant."
publishedAt: 2026-07-21
---

## ¿Qué es?

Kinde es una plataforma de autenticación pensada para aplicaciones SaaS que combina login, gestión de usuarios, organizaciones multi-tenant, feature flags y facturación en un solo producto.

## ¿Para qué sirve?

Sirve para autenticar usuarios, gestionar organizaciones y roles, y controlar qué funciones puede usar cada cliente según su plan, sin integrar varias herramientas distintas.

## Cuándo usarla

- Para SaaS con planes, feature flags y facturación integrados.
- Si necesitas multi-tenancy con organizaciones y roles.
- Cuando quieres empezar gratis sin tarjeta y escalar después.

## Cuándo NO usarla

- Si necesitas SSO SAML empresarial avanzado desde el día uno (mira WorkOS).
- Para proyectos que requieren self-hosting open source.

## Pros

- Auth, organizaciones, flags y billing en una sola plataforma.
- Plan gratuito sin tarjeta con 10.500 MAU.
- SDKs modernos para los frameworks más usados.

## Contras

- Plataforma más joven que Auth0 u Okta.
- Funciones enterprise como SSO SAML limitadas a planes superiores.
