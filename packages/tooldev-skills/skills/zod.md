---
name: zod
description: Biblioteca TypeScript-first para validación de esquemas con inferencia de tipos automática y composición declarativa. Úsala cuando el usuario mencione o pregunte sobre validation, schema, typescript, types.
---

# Zod

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
- **Official Site:** https://zod.dev
- **GitHub:** https://github.com/colinhacks/zod
- **Alternatives:** yup, joi

## Features
- Inferencia de tipos TypeScript automática desde esquemas
- Validación en runtime para datos externos no confiables
- Composición de esquemas con refinamiento y transformación
- Mensajes de error personalizados y localizados
- Integración con formularios React (React Hook Form)
- Soporte para parsing asíncrono y efectos secundarios
- Compatibilidad con OpenAPI y generación de documentación

## Steps
### 1. Instala Zod en tu proyecto
Ejecuta `npm install zod` o `pnpm add zod`. Zod no tiene dependencias externas y funciona en Node.js, Deno, Bun y navegadores. Importa con `import { z } from 'zod'` para comenzar a definir esquemas.

### 2. Define esquemas para tus datos
Crea esquemas con tipos primitivos (`z.string()`, `z.number()`, `z.boolean()`) y compuestos (`z.object()`, `z.array()`, `z.enum()`, `z.union()`). Agrega validaciones con `.min()`, `.max()`, `.email()`, `.url()`, `.regex()` y transformaciones con `.transform()`.

### 3. Valida datos en runtime con parse o safeParse
Usa `esquema.parse(datos)` para validar (lanza error si falla) o `esquema.safeParse(datos)` para obtener un resultado con `{ success: true, data }` o `{ success: false, error }`. Los datos validados quedan tipados automáticamente por TypeScript.

### 4. Extrae tipos TypeScript e integra con otras herramientas
Usa `type Usuario = z.infer<typeof esquemaUsuario>` para obtener el tipo estático desde el esquema en runtime. Integra Zod con tRPC para APIs typesafe, React Hook Form para formularios y variables de entorno con validación tipada.

## When to Use
- **Validación de datos en límites de la aplicación:** Cuando recibes datos de APIs externas, formularios de usuario, variables de entorno o archivos de configuración. Zod garantiza que los datos cumplan la forma esperada antes de que entren a la lógica de negocio.
- **Proyectos TypeScript que quieren fuente única de verdad:** Ideal cuando quieres que el esquema de validación sea la única fuente de verdad, generando los tipos TypeScript automáticamente mediante `z.infer`. Elimina la duplicación entre interfaces TypeScript y validación en runtime.
- **Integración con formularios React y tRPC:** Perfecto para formularios con React Hook Form (resolver: `zodResolver`) y APIs con tRPC (`.input(z.object({...}))`). La validación del lado del servidor y del cliente comparten los mismos esquemas.

## Examples
### Esquema y validación con Zod
```
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
tput: "Resultado con `success: false` mostrando errores: nombre debe tener mínimo 2 caracteres, email es inválido. Los errores están estructurados por campo para fácil manejo en formularios."
```

### Validación de variables de entorno
```
import { z } from 'zod';
const esquemaEnv = z.object({
  PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});
const env = esquemaEnv.parse(process.env);
// env.PORT es number, env.DATABASE_URL es string, env.NODE_ENV es enum tipado
tput: "Variables de entorno validadas al iniciar la aplicación. Si alguna falta o es inválida, la aplicación falla inmediatamente con un mensaje claro en lugar de romper en runtime con errores confusos."
```

## Tips
- Usa `safeParse` en lugar de `parse` en producción. `safeParse` retorna un resultado sin lanzar excepciones, permitiendo manejar errores de validación de forma elegante con if/else.
- Aprovecha `.transform()` para convertir datos durante la validación. Por ejemplo, transformar un string de query param a número, o formatear fechas antes de que lleguen a la lógica de negocio.
- Define esquemas base y extiéndelos con `.extend()`, `.merge()` o `.pick()`/`.omit()`. Esto evita duplicación y mantiene la consistencia entre esquemas relacionados (crear vs actualizar, público vs privado).
- Usa `z.coerce` para validar datos que vienen de formularios HTML o query strings donde todo es string. `z.coerce.number()` convierte automáticamente el string '42' al número 42 durante la validación.
- Personaliza los mensajes de error con el segundo argumento de cada validador: `z.string().min(1, 'Este campo es requerido')`. Mensajes claros en español mejoran la experiencia de usuario en formularios.

## FAQ
- **¿Zod reemplaza a TypeScript?** No, Zod complementa a TypeScript. TypeScript valida en tiempo de compilación; Zod valida en tiempo de ejecución. Zod infiere los tipos TypeScript mediante `z.infer`, eliminando la necesidad de definir interfaces manualmente que dupliquen la validación.
- **¿Cuál es la diferencia entre Zod, Yup y Joi?** Zod es TypeScript-first con inferencia automática de tipos. Yup es más popular en proyectos legacy pero tiene soporte TypeScript más débil. Joi es el más antiguo y robusto para validación compleja, pero es más pesado y no tiene inferencia de tipos nativa.
- **¿Zod funciona sin TypeScript?** Sí, Zod funciona perfectamente en JavaScript puro. La validación en runtime es independiente de TypeScript. Sin embargo, pierdes la inferencia automática de tipos con `z.infer`, que es una de sus principales ventajas.
- **¿Puedo usar Zod para validar datos que vienen de Prisma o bases de datos?** Sí, aunque Prisma ya define schemas. Zod es útil para validar datos antes de insertarlos en la base de datos o para validar respuestas de APIs que usan Prisma. Puedes usar `zod-prisma-types` para generar esquemas Zod desde tu schema de Prisma.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://zod.dev
- **Source Code Issues:** Check the repository at https://github.com/colinhacks/zod for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
