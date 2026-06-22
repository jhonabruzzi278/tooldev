---
name: bun
description: Runtime JavaScript todo-en-uno con bundler, test runner, package manager y alta velocidad de ejecución. Úsala cuando el usuario mencione o pregunte sobre javascript, runtime, bundler, test.
---

# Bun

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux
- **Official Site:** https://bun.sh
- **GitHub:** https://github.com/oven-sh/bun
- **Alternatives:** node-js

## Features
- Runtime JavaScript con arranque ultrarrápido
- Package manager nativo compatible con npm packages
- Bundler integrado para builds de producción
- Test runner compatible con Jest API
- Soporte nativo para TypeScript y JSX
- APIs de Node.js compatibles (fs, path, http, etc.)
- SQLite integrado sin dependencias externas

## Steps
### 1. Instala Bun en tu sistema
Ejecuta el script oficial de instalación: curl -fsSL https://bun.sh/install | bash en macOS/Linux, o usa npm install -g bun en Windows. Bun se instala como un solo binario que incluye runtime, package manager, bundler y test runner.

### 2. Inicializa o migra un proyecto existente
Usa bun init para crear un proyecto nuevo con package.json interactivo. Para proyectos existentes, ejecuta bun install en lugar de npm install; Bun lee tu package.json y lockfile sin cambios, instalando dependencias hasta 25x más rápido.

### 3. Desarrolla y ejecuta tu aplicación
Ejecuta TypeScript directamente con bun run index.ts sin configuración. Usa bun --hot run server.ts para hot reload automático durante el desarrollo. Bun implementa las APIs de Node.js (fs, path, http) de forma nativa.

### 4. Testea y construye para producción
Escribe tests con bun test usando la API de Jest (describe, it, expect). Genera builds optimizadas con bun build ./src/index.ts --outdir ./dist que incluyen bundling, minificación y tree-shaking para producción.

## When to Use
- **Nuevos proyectos que buscan máxima velocidad:** Para proyectos greenfield en JavaScript/TypeScript donde quieres arranque instantáneo, instalación de dependencias ultrarrápida y ejecución optimizada con JavaScriptCore desde el día uno.
- **Simplificación radical del toolchain:** Cuando quieres reemplazar cuatro herramientas separadas (Node.js + npm + Jest + esbuild/Webpack) con un solo binario integrado que reduce dependencias, configuraciones y complejidad.
- **Desarrollo ágil con TypeScript nativo:** Para equipos que usan TypeScript y quieren ejecutar archivos .ts y .tsx directamente sin pasos de compilación, tsconfig complejos ni dependencias como ts-node o tsx.

## Examples
### Servidor HTTP con Bun en 4 líneas
```
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("¡Hola desde Bun!");
  },
});
console.log("Servidor en http://localhost:3000");
tput: "Servidor HTTP corriendo en localhost:3000 con respuesta texto plano. Arranque en milisegundos comparado con segundos para un equivalente en Node.js con Express."
```

### Test unitario con bun test
```
import { describe, it, expect } from 'bun:test';
function suma(a: number, b: number): number {
  return a + b;
}
describe('suma()', () => {
  it('debe sumar dos números', () => {
    expect(suma(2, 3)).toBe(5);
  });
});
tput: "Suite de tests ejecutada con bun test. Compatible con la API de Jest, incluyendo describe, it, expect y matchers como toBe, toEqual y toThrow."
```

## Tips
- Usa bun --hot run para development con recarga automática; Bun monitorea cambios en archivos y reinicia el proceso instantáneamente sin perder el estado de la aplicación.
- Aprovecha Bun.sqlite para bases de datos locales integradas sin instalar controladores, crear conexiones ni dependencias externas. Ideal para prototipos, herramientas CLI y aplicaciones locales.
- Ejecuta bun outdated y bun update regularmente para mantener tus dependencias al día; Bun resuelve e instala paquetes significativamente más rápido que npm o yarn.
- Migra gradualmente: puedes empezar usando bun como package manager (reemplazando npm/yarn) mientras mantienes Node.js como runtime, y luego adoptar el runtime progresivamente.
- Aprovecha el soporte nativo de .env: Bun carga automáticamente archivos .env sin necesidad de dotenv, y soporta variables con comillas, expansión y multilínea por defecto.

## FAQ
- **¿Bun es un reemplazo completo de Node.js?** Bun implementa la mayoría de las APIs de Node.js (fs, path, http, crypto, stream, child_process) y ejecuta paquetes npm. Sin embargo, algunos módulos nativos de Node.js compilados en C++ no funcionan, y ciertos edge cases aún no son 100% compatibles.
- **¿Funciona Bun en Windows?** Sí, Bun tiene soporte nativo para Windows 10 y 11 desde la versión 1.1 (abril 2024). Anteriormente solo funcionaba en WSL, pero ahora es completamente compatible con Windows de forma nativa.
- **¿Qué tan compatible es Bun con el ecosistema npm?** Muy compatible. Bun puede instalar y ejecutar React, Next.js, Express, Vite, Prisma, Tailwind CSS y la mayoría de paquetes populares. La compatibilidad mejora con cada release mensual.
- **¿Bun es más rápido que Node.js en todos los casos?** Bun es significativamente más rápido en arranque, instalación de paquetes, operaciones de archivos y manejo de streams. En computación CPU-bound, la diferencia es menor porque ambos motores (JavaScriptCore vs V8) tienen rendimiento similar.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://bun.sh
- **Source Code Issues:** Check the repository at https://github.com/oven-sh/bun for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
