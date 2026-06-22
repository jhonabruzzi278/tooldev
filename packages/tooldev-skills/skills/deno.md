---
name: deno
description: Runtime moderno de JavaScript/TypeScript con seguridad por defecto, estándares web y herramientas integradas. Úsala cuando el usuario mencione o pregunte sobre runtime, javascript, typescript, server.
---

# Deno

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web, Windows, macOS, Linux
- **Official Site:** https://deno.com
- **GitHub:** https://github.com/denoland/deno
- **Alternatives:** node-js, bun

## Features
- Seguridad por defecto (sin permisos de red/archivo)
- TypeScript nativo sin configuración adicional
- Estándares web nativos (fetch, Request, Response, WebSocket)
- Gestor de paquetes integrado (npm, JSR y URLs)
- Herramientas incluidas (linter, formatter, test runner, doc gen)
- Deno Deploy para despliegue serverless global
- Compatibilidad con paquetes npm mediante compatibilidad Node.js

## Steps
### 1. Instalar Deno
Descarga e instala Deno desde deno.com siguiendo las instrucciones para tu sistema operativo. En Windows usa el instalador .msi, en macOS/Linux usa curl o brew. Verifica la instalación con deno --version.

### 2. Crear y ejecutar tu primer script
Crea un archivo .ts y escribe código TypeScript directamente sin configuración. Ejecuta con deno run archivo.ts. Por seguridad, Deno pedirá permisos explícitos para acceder a red, archivos o variables de entorno (--allow-net, --allow-read).

### 3. Usar las herramientas integradas
Aprovecha deno lint para revisar código, deno fmt para formatear, deno test para ejecutar pruebas, y deno check para verificar tipos sin ejecutar. Todo funciona sin instalar dependencias adicionales ni configurar archivos de tooling.

### 4. Compilar y distribuir tu aplicación
Usa deno compile para generar un binario standalone de tu aplicación que se ejecuta sin necesidad de tener Deno instalado. Publica paquetes en JSR (JavaScript Registry) con deno publish para compartir librerías.

## When to Use
- **TypeScript sin configuración:** Cuando quieres escribir TypeScript directamente sin instalar tsconfig, tsc, ts-node ni configurar tooling. Deno ejecuta TypeScript nativo con soporte completo de tipos y verificación integrada.
- **CLIs y herramientas de desarrollo:** Ideal para crear herramientas de línea de comandos con compilación a binario standalone. El modelo de permisos granulares de Deno es perfecto para scripts que necesitan acceso controlado al sistema.
- **APIs con estándares web:** Si prefieres usar fetch, Request, Response y WebSocket nativos del navegador en lugar de APIs específicas de Node.js. Deno sigue los estándares web para máxima portabilidad entre plataformas.

## Examples
### Servidor HTTP con Deno
```
Deno.serve((req: Request) => {
  const url = new URL(req.url)
  const name = url.searchParams.get("name") || "Mundo"
  return new Response(JSON.stringify({ hola: name }), {
    headers: { "Content-Type": "application/json" }
  })
})
tput: "Inicia un servidor HTTP en localhost. Al visitar /?name=Juan responde {\"hola\":\"Juan\"} usando exclusivamente APIs web estándar."
```

### Script con permisos controlados
```
// Ejecutar con: deno run --allow-read --allow-env script.ts
const contenido = await Deno.readTextFile("./datos.json")
const apiKey = Deno.env.get("API_KEY")
const datos = JSON.parse(contenido)
console.log(`Procesando ${datos.length} registros con key ${apiKey}`)
tput: "El script lee el archivo datos.json y accede a la variable de entorno API_KEY. Sin los flags --allow-read y --allow-env, Deno rechazaría la ejecución por seguridad."
```

## Tips
- Usa deno.json para configurar imports, tareas personalizadas (deno task), linter y formatter en un solo archivo sin necesidad de package.json.
- Aprovecha la compatibilidad con npm escribiendo npm:nombre-paquete en los imports, Deno lo resuelve automáticamente con Node.js compat layer.
- Configura deno fmt y deno lint en tu editor (VS Code tiene extensión oficial) para formateo y linting automático al guardar.
- Usa import maps en deno.json para crear alias de imports y versionar dependencias de forma centralizada, similar a package.json.
- Para producción, usa deno compile para distribuir binarios standalone que no requieren que el usuario final instale Deno.

## FAQ
- **¿Puedo usar paquetes npm en Deno?** Sí, Deno 2.x tiene compatibilidad completa con npm. Puedes importar paquetes con npm:nombre-paquete y Deno los instala automáticamente con la capa de compatibilidad de Node.js.
- **¿Deno reemplaza a Node.js?** Deno no busca reemplazar a Node.js sino ofrecer una alternativa moderna. Ambos pueden coexistir. Deno es mejor para proyectos nuevos que quieren TypeScript nativo y tooling integrado; Node.js sigue siendo la opción más soportada en producción empresarial.
- **¿Necesito package.json en Deno?** No, Deno usa deno.json como configuración principal. Sin embargo, puedes tener un package.json si usas paquetes npm que lo requieren. Deno lee ambos archivos.
- **¿Qué es JSR y cómo se relaciona con Deno?** JSR (JavaScript Registry) es un registro de paquetes moderno creado por el equipo de Deno, pero compatible con Node.js, Deno y Bun. A diferencia de npm, JSR está diseñado para TypeScript nativo con generación automática de tipos y documentación.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://deno.com
- **Source Code Issues:** Check the repository at https://github.com/denoland/deno for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
