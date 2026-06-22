---
name: hono
description: Framework web ultraligero para edge computing y entornos serverless con máxima velocidad y rendimiento. Úsala cuando el usuario mencione o pregunte sobre framework, edge, serverless, api.
---

# Hono

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web, Node.js, Deno, Bun, Cloudflare
- **Official Site:** https://hono.dev
- **GitHub:** https://github.com/honojs/hono
- **Alternatives:** express

## Features
- Framework ultraligero (~12 KB) con rendimiento excepcional
- Soporte para múltiples runtimes (Node.js, Deno, Bun, Cloudflare Workers)
- Enrutamiento rápido con trie tree
- Middleware nativo y middleware del ecosistema
- Validación de peticiones con Zod integrado
- Soporte nativo para JSX y HTML templating
- Cliente RPC tipado para frontend y backend

## Steps
### 1. Inicializar un proyecto Hono
Crea un nuevo proyecto usando `npm create hono@latest` y selecciona el runtime de destino (Cloudflare Workers, Node.js, Bun o Deno). Esto genera la estructura base con TypeScript configurado.

### 2. Definir rutas y middlewares
Crea una instancia de `Hono()` y define rutas con los métodos HTTP: `app.get()`, `app.post()`, `app.put()`, `app.delete()`. Añade middlewares como CORS, logger o autenticación con `app.use()`.

### 3. Validar peticiones y manejar errores
Usa el middleware de validación con Zod para tipar y validar automáticamente los parámetros de ruta, query strings y body de las peticiones. Maneja errores con `onError` y devuelve respuestas tipadas.

### 4. Crear un cliente RPC tipado para el frontend
Exporta el tipo de tu aplicación con `export type AppType = typeof app` y usa `hono/client` en el frontend para consumir las rutas con autocompletado completo, tipos compartidos y sin necesidad de fetch manual.

## When to Use
- **APIs y aplicaciones en entornos edge:** Para construir APIs que se ejecutan en el edge (Cloudflare Workers, Deno Deploy, Vercel Edge) donde el tamaño del bundle y la velocidad de arranque en frío son críticos.
- **Microservicios y funciones serverless ligeras:** Cuando necesitas crear endpoints pequeños, rápidos y fáciles de desplegar en plataformas como AWS Lambda, Google Cloud Functions o cualquier entorno serverless.
- **Aplicaciones con frontend y backend tipados:** Para proyectos full-stack TypeScript donde quieres compartir tipos entre frontend y backend mediante el cliente RPC, eliminando la necesidad de duplicar interfaces o hacer fetch manual.

## Examples
### API REST con Hono, Zod y RPC
```
import { Hono } from 'hono';\nimport { zValidator } from '@hono/zod-validator';\nimport { z } from 'zod';\n\nconst app = new Hono();\n\nconst schema = z.object({\n  name: z.string(),\n  email: z.string().email()\n});\n\napp.post('/users', zValidator('json', schema), async (c) => {\n  const data = c.req.valid('json');\n  return c.json({ created: true, user: data }, 201);\n});\n\nexport default app;\nexport type AppType = typeof app;
```
**Output:** API que recibe un POST a /users, valida el body con Zod, devuelve una respuesta tipada con código 201 y expone el tipo AppType para el cliente RPC.

### Middleware de autenticación personalizado
```
import { Hono } from 'hono';\nimport { bearerAuth } from 'hono/bearer-auth';\n\nconst app = new Hono();\n\napp.use('/api/*', bearerAuth({ token: 'my-secret-token' }));\n\napp.get('/api/protected', (c) => {\n  return c.json({ message: 'Acceso autorizado' });\n});
```
**Output:** Todas las rutas bajo /api requieren un token Bearer válido. Si el token no coincide, Hono devuelve automáticamente un error 401.

## Tips
- Exporta siempre el tipo `AppType` de tu aplicación para habilitar el cliente RPC tipado y aprovechar el autocompletado en el frontend sin necesidad de duplicar tipos.
- Usa el middleware `prettyJSON` en desarrollo para que las respuestas JSON sean legibles y `compress()` en producción para reducir el tamaño de las respuestas.
- Organiza las rutas en módulos separados usando `app.route()` para mantener el código limpio y escalable cuando la aplicación crece.
- Aprovecha los helpers integrados como `c.html()` para devolver HTML renderizado, `c.redirect()` para redirecciones y `c.stream()` para streaming de datos.
- Utiliza el CLI de Hono (`hono optimize`) antes de desplegar a producción para reducir automáticamente el tamaño del bundle hasta un 38%.

## FAQ
- **¿En qué se diferencia Hono de Express?** Hono es ultraligero (~12 KB vs ~2 MB de Express), está diseñado para entornos edge y serverless con arranque en frío casi instantáneo, tiene cliente RPC tipado nativo y soporta múltiples runtimes sin cambios de código.
- **¿Hono funciona en Cloudflare Workers?** Sí, Cloudflare Workers es uno de los runtimes principales de Hono. El framework fue diseñado originalmente para Workers y aprovecha APIs como Web Standard Request/Response.
- **¿Puedo usar Hono con bases de datos?** Sí, Hono funciona con cualquier ORM o cliente de base de datos compatible con el runtime elegido. Drizzle ORM y Prisma son las opciones más comunes en el ecosistema Hono.
- **¿Hono soporta WebSockets?** Sí, Hono tiene soporte nativo para WebSockets mediante un helper que funciona en los runtimes compatibles como Cloudflare Workers, Deno y Bun.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://hono.dev
- **Source Code Issues:** Check the repository at https://github.com/honojs/hono for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
