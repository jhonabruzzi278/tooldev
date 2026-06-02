---
name: Clerk
description: Plataforma moderna de autenticación y gestión de usuarios con componentes UI y API completas.
category: backend
tags: [authentication, auth, users, security, saas, user-management]
officialSite: https://clerk.com
pricing: freemium
openSource: false
license: Propietaria
technicalLevel: intermedio
compatibility: ["Web", "iOS", Android, API]
featured: false
features:
  - Autenticación multi-factor con email, SMS, OAuth y passkeys
  - Componentes UI pre-construidos (login, registro, perfil, user button)
  - Organizaciones y roles con permisos granulares
  - Webhooks y sincronización con base de datos propia
  - Sesiones y JWT con renovación automática
  - Detección de bots y protección contra fuerza bruta
  - Integración con Next.js, React, Remix, Astro, Qwik, SvelteKit
alternatives: [auth0, supabase, firebase-auth]
relatedTools: [next-js, react, prisma, supabase, neon]
howToUse:
  - step: 1
    title: "Crear cuenta y proyecto"
    description: "Regístrate en clerk.com, crea un proyecto y selecciona los métodos de autenticación que deseas habilitar (email, OAuth, SMS, passkeys). Configura los redirect URLs para tu aplicación."
  - step: 2
    title: "Instalar el SDK en tu aplicación"
    description: "Instala el paquete correspondiente a tu framework (ej. @clerk/nextjs para Next.js) y envuelve tu aplicación con el provider de Clerk. Copia las claves de API desde el dashboard a tu archivo .env.local."
  - step: 3
    title: "Agregar componentes de autenticación"
    description: "Utiliza los componentes pre-construidos como <SignIn />, <SignUp /> y <UserButton /> en tus páginas. Configura rutas públicas y protegidas con middleware de Clerk para controlar el acceso."
  - step: 4
    title: "Gestionar usuarios y organizaciones"
    description: "Accede a los datos del usuario autenticado con useUser() o auth(). Crea organizaciones y asigna roles desde el dashboard o via API. Configura webhooks para sincronizar usuarios con tu base de datos."
whenToUse:
  - title: "Aplicación SaaS con múltiples tenants"
    description: "Ideal cuando necesitas organizaciones, roles y permisos granulares para diferentes equipos dentro de tu plataforma, con componentes UI listos para usar."
  - title: "Autenticación rápida para prototipos y MVPs"
    description: "Perfecto cuando quieres lanzar rápido con login social, MFA y gestión de sesiones sin escribir código de autenticación desde cero."
  - title: "Sincronización de usuarios con base de datos propia"
    description: "Usa los webhooks de Clerk para mantener tu base de datos sincronizada con los eventos de usuario (creación, actualización, eliminación) sin duplicar lógica."
examples:
  - title: "Middleware de protección de rutas en Next.js"
    code: |
      import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

      const publicRoutes = createRouteMatcher(['/', '/api/public(.*)'])
      export default clerkMiddleware((auth, req) => {
        if (!publicRoutes(req)) auth().protect()
      })
    output: "Todas las rutas excepto las especificadas requerirán autenticación. El usuario será redirigido automáticamente al login si no tiene sesión activa."
  - title: "Obtener datos del usuario en un API route"
    code: |
      import { auth, currentUser } from '@clerk/nextjs/server'

      export async function GET() {
        const { userId } = auth()
        if (!userId) return new Response('No autorizado', { status: 401 })
        const user = await currentUser()
        return Response.json({ email: user.emailAddresses[0].emailAddress })
      }
    output: "El API devuelve el email del usuario autenticado o un error 401 si la sesión no es válida."
tips:
  - text: "Usa las variables de entorno públicas (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) solo para la clave publicable; la clave secreta siempre debe estar en el servidor."
  - text: "Configura webhooks desde el inicio para mantener tu base de datos sincronizada con los eventos de usuario en tiempo real."
  - text: "Aprovecha el modo de desarrollo (Development Mode) para probar webhooks localmente con herramientas como ngrok."
  - text: "Organiza las rutas con createRouteMatcher para mantener limpia la lógica de acceso público y protegido."
  - text: "Personaliza los temas de los componentes UI usando appearance prop para que coincidan con el diseño de tu aplicación."
faq:
  - question: "¿Puedo migrar mis usuarios existentes a Clerk?"
    answer: "Sí, Clerk soporta migración de usuarios con la API Backend. Puedes importar usuarios con sus contraseñas hasheadas manteniendo la compatibilidad de login."
  - question: "¿Qué pasa si el servicio de Clerk está caído?"
    answer: "Clerk ofrece 99.99% de uptime. Las sesiones se almacenan en cookies del cliente, por lo que los usuarios autenticados pueden seguir navegando incluso durante interrupciones temporales."
  - question: "¿Puedo usar Clerk solo para la API sin componentes UI?"
    answer: "Sí, Clerk ofrece una API Backend completa. Puedes usar solo los endpoints de autenticación y gestión de usuarios sin incluir ningún componente visual en el frontend."
  - question: "¿Cómo manejo roles y permisos personalizados?"
    answer: "Usa la metadata pública y privada de usuarios para almacenar roles personalizados. Para casos complejos, utiliza las organizaciones de Clerk que soportan roles y permisos granulares nativamente."
publishedAt: 2026-06-01
---

## ¿Qué es?

Clerk es una plataforma de autenticación y gestión de usuarios moderna que ofrece componentes UI listos para usar, APIs completas y seguridad integrada. Soporta multi-factor, OAuth, organizaciones y sincronización con bases de datos externas.

## ¿Para qué sirve?

Clerk sirve para añadir autenticación completa a aplicaciones web y móviles en minutos. Proporciona desde login/registro hasta gestión de organizaciones, roles y sesiones, con componentes UI que se integran directamente en tu app.

## Cuándo usarla

- Cuando necesitas autenticación multi-factor y OAuth lista para usar.
- Para aplicaciones SaaS con organizaciones y roles de usuario.
- Si quieres componentes UI de auth sin construirlos desde cero.
- Para equipos que usan Next.js, React o Astro.
- Cuando necesitas sincronizar usuarios con tu base de datos.

## Cuándo NO usarla

- Para proyectos muy pequeños donde un login simple basta.
- Si prefieres autenticación self-hosted (Supabase o NextAuth).
- Cuando el costo del plan freemium es limitante (10k usuarios gratis).
- Para aplicaciones que requieren compliance offline estricto.

## Pros

- Componentes UI listos para usar.
- Multi-factor, OAuth y passkeys incluidos.
- Organizaciones con roles y permisos.
- Integración con principales frameworks.
- Webhooks para sincronización externa.

## Contras

- No open-source (dependencia del servicio cloud).
- Plan gratuito limitado a 10,000 usuarios.
- Personalización UI puede ser limitada.
- Vendor lock-in si usas componentes propietarios.

## CLI

Clerk CLI para sincronización local y gestión de usuarios:

```bash
npm install @clerk/clerk-sdk-node   # SDK Backend Node.js
npm install @clerk/nextjs           # Integración Next.js
npm install @clerk/react            # Integración React
npx @clerk/clerk sync               # Sincronizar usuarios localmente
npx @clerk/clerk list-users         # Listar usuarios (con API key)
```
