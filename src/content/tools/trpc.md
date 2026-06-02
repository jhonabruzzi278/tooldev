---
name: tRPC
description: Framework para construir APIs end-to-end typesafe con TypeScript automático entre cliente y servidor.
category: backend
tags: [api, typescript, rpc, fullstack, realtime, framework]
officialSite: https://trpc.io
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web", Node.js, Deno, Bun]
featured: false
features:
  - Tipos TypeScript inferidos automáticamente del servidor al cliente
  - Sin necesidad de generar schemas o código duplicado
  - Routing declarativo con procedimientos y middlewares
  - Soporte para queries, mutations y subscriptions en tiempo real
  - Integración nativa con React, Next.js, Express, Fastify
  - Sin dependencias de runtime pesadas (funciona con cualquier fetch)
  - Compatible con React Query, Zod, Prisma y más
alternatives: [graphql, rest]
relatedTools: [next-js, react, zod, prisma, typescript]
howToUse:
  - step: 1
    title: "Instala tRPC y configura el servidor"
    description: "Ejecuta `npm install @trpc/server @trpc/client zod`. Crea un router tRPC con `initTRPC.create()` y define procedimientos con `.query()`, `.mutation()` o `.subscription()`. Cada procedimiento recibe un input validado y retorna datos tipados."
  - step: 2
    title: "Define procedimientos con validación Zod"
    description: "Crea procedimientos tipados usando `.input(z.object({ ... }))` para validar entradas y `.query(({ input }) => { ... })` para la lógica. Los tipos de entrada y salida se infieren automáticamente en el cliente sin código duplicado."
  - step: 3
    title: "Configura el cliente con los tipos del servidor"
    description: "Exporta el tipo del router con `export type AppRouter = typeof appRouter`. En el cliente, crea una instancia con `createTRPCReact<AppRouter>()` y envuélvela en un provider. El compilador TypeScript garantiza la sincronización de tipos."
  - step: 4
    title: "Usa queries y mutations con React Query"
    description: "Llama a `trpc.posts.list.useQuery()` para consultas y `trpc.posts.create.useMutation()` para mutaciones. React Query maneja caché, revalidación y estado de carga automáticamente con tipos completos inferidos del servidor."
whenToUse:
  - title: "Aplicaciones full-stack TypeScript con frontend y backend propios"
    description: "Cuando tanto el cliente como el servidor están en TypeScript y necesitas compartir tipos sin duplicación. tRPC elimina la necesidad de generar schemas OpenAPI o mantener tipos manualmente sincronizados."
  - title: "Equipos pequeños que priorizan velocidad de desarrollo"
    description: "Ideal para startups y equipos reducidos donde agregar un endpoint debe ser rápido y seguro. Sin codegen, sin documentación que mantener manualmente y con inferencia automática que acelera el ciclo de desarrollo."
  - title: "Proyectos que ya usan Zod para validación"
    description: "Si validas datos con Zod, tRPC se integra de forma natural. Los esquemas Zod definen tanto la validación en runtime como los tipos estáticos, eliminando la duplicación entre validación y tipado."
examples:
  - title: "Router tRPC con query y mutation"
    code: |
      import { initTRPC } from '@trpc/server';
      import { z } from 'zod';

      const t = initTRPC.create();

      export const appRouter = t.router({
        saludar: t.procedure
          .input(z.object({ nombre: z.string() }))
          .query(({ input }) => `¡Hola, ${input.nombre}!`),
        crearPost: t.procedure
          .input(z.object({ titulo: z.string(), contenido: z.string() }))
          .mutation(({ input }) => {
            return { id: 1, ...input, fecha: new Date() };
          }),
      });

      export type AppRouter = typeof appRouter;
    output: "Router definido con dos procedimientos tipados. El cliente puede llamar `trpc.saludar.useQuery({ nombre: 'Mundo' })` con autocompletado e inferencia de tipos completa."
  - title: "Cliente React con React Query"
    code: |
      import { createTRPCReact } from '@trpc/react-query';
      import type { AppRouter } from '../server';

      const trpc = createTRPCReact<AppRouter>();

      function Componente() {
        const saludo = trpc.saludar.useQuery({ nombre: 'Dev' });
        const mutacion = trpc.crearPost.useMutation();

        return <div>{saludo.data}</div>;
      }
    output: "Componente React con tipos completos. `saludo.data` es `string` y la mutación recibe `{ titulo: string, contenido: string }` inferidos automáticamente del servidor."
tips:
  - text: "Usa middlewares de tRPC para manejo de autenticación, logging y autorización de forma centralizada. Define `protectedProcedure` para endpoints que requieren sesión."
  - text: "Combina tRPC con Zod para validación de entrada y salida. Los esquemas Zod se convierten automáticamente en tipos TypeScript, eliminando la necesidad de interfaces duplicadas."
  - text: "Aprovecha las subscriptions de tRPC con WebSockets para funcionalidades en tiempo real como notificaciones, chats o dashboards en vivo sin configurar infraestructura adicional compleja."
  - text: "Organiza tus routers por dominio: `user.router.ts`, `post.router.ts`, `auth.router.ts`. Usa `t.mergeRouters()` para combinarlos en un router raíz mantenible y escalable."
  - text: "Para testing, instancia el router directamente sin HTTP con `appRouter.createCaller({})`. Esto permite probar procedimientos de forma aislada sin levantar un servidor."
faq:
  - question: "¿tRPC reemplaza a REST y GraphQL?"
    answer: "tRPC es una alternativa para aplicaciones donde frontend y backend son del mismo equipo y ambos usan TypeScript. No reemplaza REST o GraphQL para APIs públicas externas, donde la documentación OpenAPI o la flexibilidad de GraphQL son más apropiadas."
  - question: "¿tRPC funciona sin React?"
    answer: "Sí. tRPC tiene clientes vanilla para cualquier framework (Vue, Svelte, Solid) y funciona con fetch estándar. La integración con React Query es opcional pero recomendada para React."
  - question: "¿Cómo despliego tRPC en producción?"
    answer: "tRPC se ejecuta sobre adaptadores HTTP (Express, Fastify, Node HTTP, Fetch API). Puedes desplegarlo en cualquier plataforma que soporte Node.js: Vercel, Railway, Fly.io, AWS Lambda o Docker. Next.js con tRPC es una combinación muy popular."
  - question: "¿Los errores de tipo en el cliente muestran mensajes claros?"
    answer: "Sí, pero pueden ser largos debido a la inferencia profunda de tipos. tRPC genera tipos precisos, y TypeScript señala exactamente qué propiedad del input es incorrecta. Para mejorar la experiencia, usa Zod con mensajes de error personalizados."
publishedAt: 2026-06-01
---

## ¿Qué es?

tRPC es un framework que permite construir APIs TypeScript completamente typesafe entre cliente y servidor, sin necesidad de generar schemas, decoradores ni código duplicado. Los tipos se infieren automáticamente desde el servidor al cliente.

## ¿Para qué sirve?

tRPC sirve para construir APIs rápidas y seguras donde el compilador TypeScript garantiza que cliente y servidor estén sincronizados. Ideal para aplicaciones full-stack donde quieres evitar la duplicación de tipos y la desincronización entre frontend y backend.

## Cuándo usarla

- Cuando quieres TypeScript typesafe end-to-end sin código generado.
- Para aplicaciones full-stack con React, Next.js o cualquier framework.
- Si buscas una alternativa moderna a REST o GraphQL.
- Para equipos pequeños que quieren moverse rápido sin sacrificar tipos.
- Cuando usas Zod para validación y quieres tipos inferidos automáticamente.

## Cuándo NO usarla

- Si necesitas una API pública para consumidores externos (REST/GraphQL es mejor).
- Para aplicaciones donde el backend no está en TypeScript.
- Cuando necesitas separación estricta entre frontend y backend.
- Si tu equipo prefiere la documentación generada de OpenAPI/Swagger.

## Pros

- Typesafe end-to-end sin código generado.
- Inferencia automática de tipos.
- Sin schemas ni decoradores.
- Integración con React Query y Zod.
- Rápido de configurar y productivo.

## Contras

- No ideal para APIs públicas externas.
- Dependencia total de TypeScript.
- Ecosistema de plugins aún pequeño.
- Depuración de tipos puede ser compleja.

## CLI

tRPC no tiene CLI propio. Se instala vía npm y se usa directamente en código:

```bash
npm install @trpc/server @trpc/client @trpc/react-query
# Con servidor HTTP:
npm install @trpc/next @trpc/express @trpc/fastify
```
