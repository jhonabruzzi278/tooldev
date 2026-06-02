---
name: Zod
description: Biblioteca TypeScript-first para validación de esquemas con inferencia de tipos automática y composición declarativa.
category: backend
tags: [validation, schema, typescript, types, data, runtime]
officialSite: https://zod.dev
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web", Node.js, Deno, Bun]
featured: false
features:
  - Inferencia de tipos TypeScript automática desde esquemas
  - Validación en runtime para datos externos no confiables
  - Composición de esquemas con refinamiento y transformación
  - Mensajes de error personalizados y localizados
  - Integración con formularios React (React Hook Form)
  - Soporte para parsing asíncrono y efectos secundarios
  - Compatibilidad con OpenAPI y generación de documentación
alternatives: [yup, joi]
relatedTools: [typescript, react, prisma, next-js]
howToUse:
  - step: 1
    title: "Instala Zod en tu proyecto"
    description: "Ejecuta `npm install zod` o `pnpm add zod`. Zod no tiene dependencias externas y funciona en Node.js, Deno, Bun y navegadores. Importa con `import { z } from 'zod'` para comenzar a definir esquemas."
  - step: 2
    title: "Define esquemas para tus datos"
    description: "Crea esquemas con tipos primitivos (`z.string()`, `z.number()`, `z.boolean()`) y compuestos (`z.object()`, `z.array()`, `z.enum()`, `z.union()`). Agrega validaciones con `.min()`, `.max()`, `.email()`, `.url()`, `.regex()` y transformaciones con `.transform()`."
  - step: 3
    title: "Valida datos en runtime con parse o safeParse"
    description: "Usa `esquema.parse(datos)` para validar (lanza error si falla) o `esquema.safeParse(datos)` para obtener un resultado con `{ success: true, data }` o `{ success: false, error }`. Los datos validados quedan tipados automáticamente por TypeScript."
  - step: 4
    title: "Extrae tipos TypeScript e integra con otras herramientas"
    description: "Usa `type Usuario = z.infer<typeof esquemaUsuario>` para obtener el tipo estático desde el esquema en runtime. Integra Zod con tRPC para APIs typesafe, React Hook Form para formularios y variables de entorno con validación tipada."
whenToUse:
  - title: "Validación de datos en límites de la aplicación"
    description: "Cuando recibes datos de APIs externas, formularios de usuario, variables de entorno o archivos de configuración. Zod garantiza que los datos cumplan la forma esperada antes de que entren a la lógica de negocio."
  - title: "Proyectos TypeScript que quieren fuente única de verdad"
    description: "Ideal cuando quieres que el esquema de validación sea la única fuente de verdad, generando los tipos TypeScript automáticamente mediante `z.infer`. Elimina la duplicación entre interfaces TypeScript y validación en runtime."
  - title: "Integración con formularios React y tRPC"
    description: "Perfecto para formularios con React Hook Form (resolver: `zodResolver`) y APIs con tRPC (`.input(z.object({...}))`). La validación del lado del servidor y del cliente comparten los mismos esquemas."
examples:
  - title: "Esquema y validación con Zod"
    code: |
      import { z } from 'zod';

      const esquemaUsuario = z.object({
        nombre: z.string().min(2, 'Mínimo 2 caracteres'),
        email: z.string().email('Email inválido'),
        edad: z.number().int().min(18).max(120).optional(),
        rol: z.enum(['admin', 'usuario', 'invitado']).default('usuario'),
      });

      type Usuario = z.infer<typeof esquemaUsuario>;

      const resultado = esquemaUsuario.safeParse({
        nombre: 'A',
        email: 'no-es-email',
      });

      if (!resultado.success) {
        console.log(resultado.error.flatten());
      }
    output: "Resultado con `success: false` mostrando errores: nombre debe tener mínimo 2 caracteres, email es inválido. Los errores están estructurados por campo para fácil manejo en formularios."
  - title: "Validación de variables de entorno"
    code: |
      import { z } from 'zod';

      const esquemaEnv = z.object({
        PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)),
        DATABASE_URL: z.string().url(),
        NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
      });

      const env = esquemaEnv.parse(process.env);
      // env.PORT es number, env.DATABASE_URL es string, env.NODE_ENV es enum tipado
    output: "Variables de entorno validadas al iniciar la aplicación. Si alguna falta o es inválida, la aplicación falla inmediatamente con un mensaje claro en lugar de romper en runtime con errores confusos."
tips:
  - text: "Usa `safeParse` en lugar de `parse` en producción. `safeParse` retorna un resultado sin lanzar excepciones, permitiendo manejar errores de validación de forma elegante con if/else."
  - text: "Aprovecha `.transform()` para convertir datos durante la validación. Por ejemplo, transformar un string de query param a número, o formatear fechas antes de que lleguen a la lógica de negocio."
  - text: "Define esquemas base y extiéndelos con `.extend()`, `.merge()` o `.pick()`/`.omit()`. Esto evita duplicación y mantiene la consistencia entre esquemas relacionados (crear vs actualizar, público vs privado)."
  - text: "Usa `z.coerce` para validar datos que vienen de formularios HTML o query strings donde todo es string. `z.coerce.number()` convierte automáticamente el string '42' al número 42 durante la validación."
  - text: "Personaliza los mensajes de error con el segundo argumento de cada validador: `z.string().min(1, 'Este campo es requerido')`. Mensajes claros en español mejoran la experiencia de usuario en formularios."
faq:
  - question: "¿Zod reemplaza a TypeScript?"
    answer: "No, Zod complementa a TypeScript. TypeScript valida en tiempo de compilación; Zod valida en tiempo de ejecución. Zod infiere los tipos TypeScript mediante `z.infer`, eliminando la necesidad de definir interfaces manualmente que dupliquen la validación."
  - question: "¿Cuál es la diferencia entre Zod, Yup y Joi?"
    answer: "Zod es TypeScript-first con inferencia automática de tipos. Yup es más popular en proyectos legacy pero tiene soporte TypeScript más débil. Joi es el más antiguo y robusto para validación compleja, pero es más pesado y no tiene inferencia de tipos nativa."
  - question: "¿Zod funciona sin TypeScript?"
    answer: "Sí, Zod funciona perfectamente en JavaScript puro. La validación en runtime es independiente de TypeScript. Sin embargo, pierdes la inferencia automática de tipos con `z.infer`, que es una de sus principales ventajas."
  - question: "¿Puedo usar Zod para validar datos que vienen de Prisma o bases de datos?"
    answer: "Sí, aunque Prisma ya define schemas. Zod es útil para validar datos antes de insertarlos en la base de datos o para validar respuestas de APIs que usan Prisma. Puedes usar `zod-prisma-types` para generar esquemas Zod desde tu schema de Prisma."
publishedAt: 2026-06-01
---

## ¿Qué es?

Zod es una biblioteca de validación de esquemas para TypeScript que elimina la duplicación entre tipos estáticos y validación en runtime. Con inferencia automática de tipos, composición declarativa y mensajes de error personalizados, Zod es el estándar moderno para validación de datos.

## ¿Para qué sirve?

Zod sirve para validar datos en el límite de tu aplicación (APIs, formularios, configuraciones) con tipos TypeScript inferidos automáticamente. Es ideal para APIs REST, GraphQL, formularios React y cualquier punto donde entren datos externos.

## Cuándo usarla

- Cuando necesitas validar datos de APIs externas o formularios.
- Para proyectos TypeScript que quieren tipos inferidos automáticamente.
- Si usas React Hook Form y necesitas validación de esquemas.
- Para validar variables de entorno en tiempo de ejecución.
- Cuando quieres reutilizar esquemas entre frontend y backend.

## Cuándo NO usarla

- Si tu proyecto es JavaScript puro sin TypeScript.
- Para validación simple donde la inferencia de tipos no aporta valor.
- Cuando el bundle size es crítico (Zod añade ~8KB min+gzip).
- Si prefieres la sintaxis de Yup o Joi por familiaridad del equipo.

## Pros

- Inferencia de tipos TypeScript automática.
- Composición declarativa y reutilizable.
- Mensajes de error personalizables.
- Integración con React Hook Form y tRPC.
- Sin dependencias externas.

## Contras

- Curva de aprendizaje para esquemas complejos.
- Bundle size no despreciable (~8KB).
- Sintaxis verbosa para validaciones muy simples.
- Rendimiento inferior a validadores nativos en benchmarks extremos.

## CLI

Zod es una biblioteca, no tiene CLI propio. Se usa directamente en código:

```bash
npm install zod                      # Instalar
pnpm add zod                         # Con pnpm
bun add zod                          # Con Bun
# Uso en código:
# import { z } from 'zod'
# const schema = z.object({ name: z.string() })
```
