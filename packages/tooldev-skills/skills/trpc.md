---
name: trpc
description: Framework para construir APIs end-to-end typesafe con TypeScript automático entre cliente y servidor. Úsala cuando el usuario mencione o pregunte sobre api, typescript, rpc, fullstack.
---

# tRPC

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web, Node.js, Deno, Bun
- **Official Site:** https://trpc.io
- **GitHub:** https://github.com/trpc/trpc
- **Alternatives:** graphql, rest

## Features
- Tipos TypeScript inferidos automáticamente del servidor al cliente
- Sin necesidad de generar schemas o código duplicado
- Routing declarativo con procedimientos y middlewares
- Soporte para queries, mutations y subscriptions en tiempo real
- Integración nativa con React, Next.js, Express, Fastify
- Sin dependencias de runtime pesadas (funciona con cualquier fetch)
- Compatible con React Query, Zod, Prisma y más

## Steps
### 1. Instala tRPC y configura el servidor
Ejecuta `npm install @trpc/server @trpc/client zod`. Crea un router tRPC con `initTRPC.create()` y define procedimientos con `.query()`, `.mutation()` o `.subscription()`. Cada procedimiento recibe un input validado y retorna datos tipados.

### 2. Define procedimientos con validación Zod
Crea procedimientos tipados usando `.input(z.object({ ... }))` para validar entradas y `.query(({ input }) => { ... })` para la lógica. Los tipos de entrada y salida se infieren automáticamente en el cliente sin código duplicado.

### 3. Configura el cliente con los tipos del servidor
Exporta el tipo del router con `export type AppRouter = typeof appRouter`. En el cliente, crea una instancia con `createTRPCReact<AppRouter>()` y envuélvela en un provider. El compilador TypeScript garantiza la sincronización de tipos.

### 4. Usa queries y mutations con React Query
Llama a `trpc.posts.list.useQuery()` para consultas y `trpc.posts.create.useMutation()` para mutaciones. React Query maneja caché, revalidación y estado de carga automáticamente con tipos completos inferidos del servidor.

## When to Use
- **Aplicaciones full-stack TypeScript con frontend y backend propios:** Cuando tanto el cliente como el servidor están en TypeScript y necesitas compartir tipos sin duplicación. tRPC elimina la necesidad de generar schemas OpenAPI o mantener tipos manualmente sincronizados.
- **Equipos pequeños que priorizan velocidad de desarrollo:** Ideal para startups y equipos reducidos donde agregar un endpoint debe ser rápido y seguro. Sin codegen, sin documentación que mantener manualmente y con inferencia automática que acelera el ciclo de desarrollo.
- **Proyectos que ya usan Zod para validación:** Si validas datos con Zod, tRPC se integra de forma natural. Los esquemas Zod definen tanto la validación en runtime como los tipos estáticos, eliminando la duplicación entre validación y tipado.

## Examples
### Router tRPC con query y mutation
```
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
tput: "Router definido con dos procedimientos tipados. El cliente puede llamar `trpc.saludar.useQuery({ nombre: 'Mundo' })` con autocompletado e inferencia de tipos completa."
```

### Cliente React con React Query
```
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server';
const trpc = createTRPCReact<AppRouter>();
function Componente() {
  const saludo = trpc.saludar.useQuery({ nombre: 'Dev' });
  const mutacion = trpc.crearPost.useMutation();
  return <div>{saludo.data}</div>;
}
tput: "Componente React con tipos completos. `saludo.data` es `string` y la mutación recibe `{ titulo: string, contenido: string }` inferidos automáticamente del servidor."
```

## Tips
- Usa middlewares de tRPC para manejo de autenticación, logging y autorización de forma centralizada. Define `protectedProcedure` para endpoints que requieren sesión.
- Combina tRPC con Zod para validación de entrada y salida. Los esquemas Zod se convierten automáticamente en tipos TypeScript, eliminando la necesidad de interfaces duplicadas.
- Aprovecha las subscriptions de tRPC con WebSockets para funcionalidades en tiempo real como notificaciones, chats o dashboards en vivo sin configurar infraestructura adicional compleja.
- Organiza tus routers por dominio: `user.router.ts`, `post.router.ts`, `auth.router.ts`. Usa `t.mergeRouters()` para combinarlos en un router raíz mantenible y escalable.
- Para testing, instancia el router directamente sin HTTP con `appRouter.createCaller({})`. Esto permite probar procedimientos de forma aislada sin levantar un servidor.

## FAQ
- **¿tRPC reemplaza a REST y GraphQL?** tRPC es una alternativa para aplicaciones donde frontend y backend son del mismo equipo y ambos usan TypeScript. No reemplaza REST o GraphQL para APIs públicas externas, donde la documentación OpenAPI o la flexibilidad de GraphQL son más apropiadas.
- **¿tRPC funciona sin React?** Sí. tRPC tiene clientes vanilla para cualquier framework (Vue, Svelte, Solid) y funciona con fetch estándar. La integración con React Query es opcional pero recomendada para React.
- **¿Cómo despliego tRPC en producción?** tRPC se ejecuta sobre adaptadores HTTP (Express, Fastify, Node HTTP, Fetch API). Puedes desplegarlo en cualquier plataforma que soporte Node.js: Vercel, Railway, Fly.io, AWS Lambda o Docker. Next.js con tRPC es una combinación muy popular.
- **¿Los errores de tipo en el cliente muestran mensajes claros?** Sí, pero pueden ser largos debido a la inferencia profunda de tipos. tRPC genera tipos precisos, y TypeScript señala exactamente qué propiedad del input es incorrecta. Para mejorar la experiencia, usa Zod con mensajes de error personalizados.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://trpc.io
- **Source Code Issues:** Check the repository at https://github.com/trpc/trpc for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
