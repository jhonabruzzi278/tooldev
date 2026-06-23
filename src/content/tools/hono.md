---
name: Hono
description: Framework web ultraligero para edge computing y entornos serverless con máxima velocidad y rendimiento.
category: backend
tags: [framework, edge, serverless, api, javascript, typescript, http]
officialSite: https://hono.dev
github: https://github.com/honojs/hono
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Web, Node.js, Deno, Bun, Cloudflare]
featured: false
verified: true
screenshots:
  - /screenshots/hono.webp
features:
  - Framework ultraligero (~12 KB) con rendimiento excepcional
  - Soporte para múltiples runtimes (Node.js, Deno, Bun, Cloudflare Workers)
  - Enrutamiento rápido con trie tree
  - Middleware nativo y middleware del ecosistema
  - Validación de peticiones con Zod integrado
  - Soporte nativo para JSX y HTML templating
  - Cliente RPC tipado para frontend y backend
alternatives: [express]
relatedTools: [node-js, bun, drizzle-orm, supabase]
howToUse:
  - step: 1
    title: "Inicializar un proyecto Hono"
    description: "Crea un nuevo proyecto usando `npm create hono@latest` y selecciona el runtime de destino (Cloudflare Workers, Node.js, Bun o Deno). Esto genera la estructura base con TypeScript configurado."
  - step: 2
    title: "Definir rutas y middlewares"
    description: "Crea una instancia de `Hono()` y define rutas con los métodos HTTP: `app.get()`, `app.post()`, `app.put()`, `app.delete()`. Añade middlewares como CORS, logger o autenticación con `app.use()`."
  - step: 3
    title: "Validar peticiones y manejar errores"
    description: "Usa el middleware de validación con Zod para tipar y validar automáticamente los parámetros de ruta, query strings y body de las peticiones. Maneja errores con `onError` y devuelve respuestas tipadas."
  - step: 4
    title: "Crear un cliente RPC tipado para el frontend"
    description: "Exporta el tipo de tu aplicación con `export type AppType = typeof app` y usa `hono/client` en el frontend para consumir las rutas con autocompletado completo, tipos compartidos y sin necesidad de fetch manual."
whenToUse:
  - title: "APIs y aplicaciones en entornos edge"
    description: "Para construir APIs que se ejecutan en el edge (Cloudflare Workers, Deno Deploy, Vercel Edge) donde el tamaño del bundle y la velocidad de arranque en frío son críticos."
  - title: "Microservicios y funciones serverless ligeras"
    description: "Cuando necesitas crear endpoints pequeños, rápidos y fáciles de desplegar en plataformas como AWS Lambda, Google Cloud Functions o cualquier entorno serverless."
  - title: "Aplicaciones con frontend y backend tipados"
    description: "Para proyectos full-stack TypeScript donde quieres compartir tipos entre frontend y backend mediante el cliente RPC, eliminando la necesidad de duplicar interfaces o hacer fetch manual."
examples:
  - title: "API REST con Hono, Zod y RPC"
    code: "import { Hono } from 'hono';\nimport { zValidator } from '@hono/zod-validator';\nimport { z } from 'zod';\n\nconst app = new Hono();\n\nconst schema = z.object({\n  name: z.string(),\n  email: z.string().email()\n});\n\napp.post('/users', zValidator('json', schema), async (c) => {\n  const data = c.req.valid('json');\n  return c.json({ created: true, user: data }, 201);\n});\n\nexport default app;\nexport type AppType = typeof app;"
    output: "API que recibe un POST a /users, valida el body con Zod, devuelve una respuesta tipada con código 201 y expone el tipo AppType para el cliente RPC."
  - title: "Middleware de autenticación personalizado"
    code: "import { Hono } from 'hono';\nimport { bearerAuth } from 'hono/bearer-auth';\n\nconst app = new Hono();\n\napp.use('/api/*', bearerAuth({ token: 'my-secret-token' }));\n\napp.get('/api/protected', (c) => {\n  return c.json({ message: 'Acceso autorizado' });\n});"
    output: "Todas las rutas bajo /api requieren un token Bearer válido. Si el token no coincide, Hono devuelve automáticamente un error 401."
tips:
  - text: "Exporta siempre el tipo `AppType` de tu aplicación para habilitar el cliente RPC tipado y aprovechar el autocompletado en el frontend sin necesidad de duplicar tipos."
  - text: "Usa el middleware `prettyJSON` en desarrollo para que las respuestas JSON sean legibles y `compress()` en producción para reducir el tamaño de las respuestas."
  - text: "Organiza las rutas en módulos separados usando `app.route()` para mantener el código limpio y escalable cuando la aplicación crece."
  - text: "Aprovecha los helpers integrados como `c.html()` para devolver HTML renderizado, `c.redirect()` para redirecciones y `c.stream()` para streaming de datos."
  - text: "Utiliza el CLI de Hono (`hono optimize`) antes de desplegar a producción para reducir automáticamente el tamaño del bundle hasta un 38%."
faq:
  - question: "¿En qué se diferencia Hono de Express?"
    answer: "Hono es ultraligero (~12 KB vs ~2 MB de Express), está diseñado para entornos edge y serverless con arranque en frío casi instantáneo, tiene cliente RPC tipado nativo y soporta múltiples runtimes sin cambios de código."
  - question: "¿Hono funciona en Cloudflare Workers?"
    answer: "Sí, Cloudflare Workers es uno de los runtimes principales de Hono. El framework fue diseñado originalmente para Workers y aprovecha APIs como Web Standard Request/Response."
  - question: "¿Puedo usar Hono con bases de datos?"
    answer: "Sí, Hono funciona con cualquier ORM o cliente de base de datos compatible con el runtime elegido. Drizzle ORM y Prisma son las opciones más comunes en el ecosistema Hono."
  - question: "¿Hono soporta WebSockets?"
    answer: "Sí, Hono tiene soporte nativo para WebSockets mediante un helper que funciona en los runtimes compatibles como Cloudflare Workers, Deno y Bun."
publishedAt: 2026-06-01
---

## ¿Qué es?

Hono es un framework web ultraligero (~12 KB) diseñado para entornos edge y serverless. Ofrece enrutamiento ultrarrápido con trie tree, middleware extensible y soporte para los principales runtimes JavaScript incluyendo Node.js, Deno, Bun y Cloudflare Workers.

## ¿Para qué sirve?

Hono sirve para construir APIs y aplicaciones web en entornos edge y serverless con máximo rendimiento. Es ideal para Cloudflare Workers, Lambda, Deno Deploy y cualquier entorno donde el tamaño del bundle y la velocidad de inicio importen.

## Cuándo usarla

- Cuando necesitas un framework ultraligero para edge computing.
- Para APIs serverless con Cloudflare Workers o Lambda.
- Si buscas un framework que funcione en múltiples runtimes sin cambios.
- Para proyectos donde el tamaño del bundle es crítico.
- Cuando quieres un cliente RPC tipado entre frontend y backend.

## Cuándo NO usarla

- Si necesitas un framework full-stack con ORM y autenticación incluida.
- Para aplicaciones monolíticas grandes con muchos archivos.
- Cuando tu equipo prefiere Express por su ecosistema maduro.
- Si no trabajas con entornos edge o serverles.

## Pros

- Tamaño ultraligero (~12 KB) y rendimiento excepcional.
- Funciona en Node.js, Deno, Bun y Cloudflare Workers.
- Enrutamiento rápido con trie tree.
- Middleware extensible y fácil de escribir.
- Cliente RPC con tipos compartidos entre frontend y backend.

## Contras

- Ecosistema más pequeño que Express o Fastify.
- Documentación en crecimiento pero aún limitada.
- No es ideal para aplicaciones monolíticas grandes.
- Comunidad pequeña comparada con otros frameworks.
- Algunas integraciones maduras aún faltan.

## CLI

Hono CLI (`@hono/cli`) ofrece comandos para documentación, testing y optimización:

```bash
npm install -g @hono/cli              # Instalar CLI global
hono --help                           # Ayuda general
hono docs                             # Documentación en terminal
hono search middleware --pretty        # Búsqueda en docs
hono request src/index.ts             # Testing sin servidor
hono serve src/index.ts               # Servidor local
hono optimize src/index.ts            # App optimizada (38% más pequeña)
```
