---
name: Deno
description: Runtime moderno de JavaScript/TypeScript con seguridad por defecto, estándares web y herramientas integradas.
category: backend
tags: [runtime, javascript, typescript, server, web-standards, deno]
officialSite: https://deno.com
github: https://github.com/denoland/deno
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web", Windows, macOS, Linux]
featured: false
verified: true
features:
  - Seguridad por defecto (sin permisos de red/archivo)
  - TypeScript nativo sin configuración adicional
  - Estándares web nativos (fetch, Request, Response, WebSocket)
  - Gestor de paquetes integrado (npm, JSR y URLs)
  - Herramientas incluidas (linter, formatter, test runner, doc gen)
  - Deno Deploy para despliegue serverless global
  - Compatibilidad con paquetes npm mediante compatibilidad Node.js
alternatives: [node-js, bun]
relatedTools: [typescript, visual-studio-code, next-js, hono]
howToUse:
  - step: 1
    title: "Instalar Deno"
    description: "Descarga e instala Deno desde deno.com siguiendo las instrucciones para tu sistema operativo. En Windows usa el instalador .msi, en macOS/Linux usa curl o brew. Verifica la instalación con deno --version."
  - step: 2
    title: "Crear y ejecutar tu primer script"
    description: "Crea un archivo .ts y escribe código TypeScript directamente sin configuración. Ejecuta con deno run archivo.ts. Por seguridad, Deno pedirá permisos explícitos para acceder a red, archivos o variables de entorno (--allow-net, --allow-read)."
  - step: 3
    title: "Usar las herramientas integradas"
    description: "Aprovecha deno lint para revisar código, deno fmt para formatear, deno test para ejecutar pruebas, y deno check para verificar tipos sin ejecutar. Todo funciona sin instalar dependencias adicionales ni configurar archivos de tooling."
  - step: 4
    title: "Compilar y distribuir tu aplicación"
    description: "Usa deno compile para generar un binario standalone de tu aplicación que se ejecuta sin necesidad de tener Deno instalado. Publica paquetes en JSR (JavaScript Registry) con deno publish para compartir librerías."
whenToUse:
  - title: "TypeScript sin configuración"
    description: "Cuando quieres escribir TypeScript directamente sin instalar tsconfig, tsc, ts-node ni configurar tooling. Deno ejecuta TypeScript nativo con soporte completo de tipos y verificación integrada."
  - title: "CLIs y herramientas de desarrollo"
    description: "Ideal para crear herramientas de línea de comandos con compilación a binario standalone. El modelo de permisos granulares de Deno es perfecto para scripts que necesitan acceso controlado al sistema."
  - title: "APIs con estándares web"
    description: "Si prefieres usar fetch, Request, Response y WebSocket nativos del navegador en lugar de APIs específicas de Node.js. Deno sigue los estándares web para máxima portabilidad entre plataformas."
examples:
  - title: "Servidor HTTP con Deno"
    code: |
      Deno.serve((req: Request) => {
        const url = new URL(req.url)
        const name = url.searchParams.get("name") || "Mundo"
        return new Response(JSON.stringify({ hola: name }), {
          headers: { "Content-Type": "application/json" }
        })
      })
    output: "Inicia un servidor HTTP en localhost. Al visitar /?name=Juan responde {\"hola\":\"Juan\"} usando exclusivamente APIs web estándar."
  - title: "Script con permisos controlados"
    code: |
      // Ejecutar con: deno run --allow-read --allow-env script.ts
      const contenido = await Deno.readTextFile("./datos.json")
      const apiKey = Deno.env.get("API_KEY")
      const datos = JSON.parse(contenido)
      console.log(`Procesando ${datos.length} registros con key ${apiKey}`)
    output: "El script lee el archivo datos.json y accede a la variable de entorno API_KEY. Sin los flags --allow-read y --allow-env, Deno rechazaría la ejecución por seguridad."
tips:
  - text: "Usa deno.json para configurar imports, tareas personalizadas (deno task), linter y formatter en un solo archivo sin necesidad de package.json."
  - text: "Aprovecha la compatibilidad con npm escribiendo npm:nombre-paquete en los imports, Deno lo resuelve automáticamente con Node.js compat layer."
  - text: "Configura deno fmt y deno lint en tu editor (VS Code tiene extensión oficial) para formateo y linting automático al guardar."
  - text: "Usa import maps en deno.json para crear alias de imports y versionar dependencias de forma centralizada, similar a package.json."
  - text: "Para producción, usa deno compile para distribuir binarios standalone que no requieren que el usuario final instale Deno."
faq:
  - question: "¿Puedo usar paquetes npm en Deno?"
    answer: "Sí, Deno 2.x tiene compatibilidad completa con npm. Puedes importar paquetes con npm:nombre-paquete y Deno los instala automáticamente con la capa de compatibilidad de Node.js."
  - question: "¿Deno reemplaza a Node.js?"
    answer: "Deno no busca reemplazar a Node.js sino ofrecer una alternativa moderna. Ambos pueden coexistir. Deno es mejor para proyectos nuevos que quieren TypeScript nativo y tooling integrado; Node.js sigue siendo la opción más soportada en producción empresarial."
  - question: "¿Necesito package.json en Deno?"
    answer: "No, Deno usa deno.json como configuración principal. Sin embargo, puedes tener un package.json si usas paquetes npm que lo requieren. Deno lee ambos archivos."
  - question: "¿Qué es JSR y cómo se relaciona con Deno?"
    answer: "JSR (JavaScript Registry) es un registro de paquetes moderno creado por el equipo de Deno, pero compatible con Node.js, Deno y Bun. A diferencia de npm, JSR está diseñado para TypeScript nativo con generación automática de tipos y documentación."
publishedAt: 2026-06-01
---

## ¿Qué es?

Deno es un runtime moderno para JavaScript, TypeScript y WebAssembly creado por Ryan Dahl (creador de Node.js). Ofrece seguridad por defecto, TypeScript nativo, estándares web integrados y un conjunto de herramientas incluidas para desarrollo productivo.

## ¿Para qué sirve?

Deno sirve para ejecutar aplicaciones JavaScript y TypeScript del lado del servidor con seguridad granulear, sin configuración de tooling. Es ideal para APIs, scripts, herramientas CLI y aplicaciones serverless con Deno Deploy.

## Cuándo usarla

- Cuando quieres TypeScript sin configuración de tsconfig.json.
- Para aplicaciones que requieren seguridad de permisos granulear.
- Si prefieres estándares web sobre APIs propietarias de Node.js.
- Para scripts y herramientas CLI con tooling integrado.
- Cuando quieres desplegar serverless con Deno Deploy.

## Cuándo NO usarla

- Si dependes de paquetes npm que usan APIs internas de Node.js sin compatibilidad.
- Cuando tu equipo ya está establecido con Node.js y npm.
- Para proyectos que requieren versiones LTS estrictas (Deno es más rápido en versiones).
- Si necesitas compatibilidad total con el ecosistema Node.js legacy.

## Pros

- TypeScript nativo sin configuración.
- Seguridad por defecto con permisos explicitos.
- Estándares web integrados (fetch, WebSocket, etc.).
- Tooling incluido (linter, formatter, test, doc).
- Compatibilidad con npm y JSR.

## Contras

- Ecosistema más pequeño que Node.js.
- Compatibilidad Node.js no es 100% completa.
- Menos recursos de aprendizaje y tutoriales.
- Adopción empresarial aún limitada.

## CLI

Deno CLI incluye runtime, linter, formatter, test runner y más en un solo binario:

```bash
deno init my_project                 # Nuevo proyecto
deno run main.ts                     # Ejecutar script
deno serve main.ts                   # Servidor HTTP (Deno 2+)
deno lint                            # Linter integrado
deno fmt                             # Formatter integrado
deno test                            # Test runner integrado
deno check main.ts                   # Type-checking sin ejecutar
deno compile main.ts                 # Compilar a binario standalone
deno doc                             # Generar documentación
deno publish                         # Publicar paquete en JSR
```
