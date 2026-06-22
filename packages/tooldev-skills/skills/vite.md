---
name: vite
description: Entorno de desarrollo frontend ultrarrápido con HMR instantáneo, build optimizado y soporte nativo para ESM. Úsala cuando el usuario mencione o pregunte sobre bundler, dev-server, hmr, build.
---

# Vite

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web
- **Official Site:** https://vite.dev
- **GitHub:** https://github.com/vitejs/vite

## Features
- Dev server con HMR instantáneo y ESM nativo
- Build con Rollup optimizado para producción
- Soporte nativo para TypeScript, JSX, CSS, JSON
- Plugins con compatibilidad con Rollup
- Optimización de assets con Asset Hashes
- Soporte para SSR y bibliotecas
- VitePress para documentación con Vite

## Steps
### 1. Crea un nuevo proyecto con Vite
Ejecuta `npm create vite@latest` y sigue el asistente interactivo. Selecciona el nombre del proyecto y el framework (React, Vue, Svelte, vanilla, etc.). Vite genera la estructura del proyecto lista para comenzar a desarrollar en segundos.

### 2. Ejecuta el servidor de desarrollo con HMR instantáneo
Usa `npm run dev` para iniciar el servidor de desarrollo. Abre `http://localhost:5173` en el navegador. Cualquier cambio en el código fuente se refleja instantáneamente gracias al Hot Module Replacement basado en ESM nativo.

### 3. Configura plugins y personaliza el build
Edita `vite.config.js` para agregar plugins oficiales (`@vitejs/plugin-react`, `@vitejs/plugin-vue`), configurar alias de rutas, definir variables de entorno con prefijo `VITE_` y ajustar opciones del servidor de desarrollo.

### 4. Construye para producción
Ejecuta `npm run build` para generar los archivos optimizados en la carpeta `dist/`. Vite usa Rollup internamente para tree-shaking, división de código y hashes de assets. El resultado es un bundle mínimo listo para desplegar.

## When to Use
- **Nuevos proyectos frontend que buscan máxima velocidad:** Cuando inicias un proyecto desde cero y quieres el mejor rendimiento en desarrollo. Vite arranca en milisegundos sin importar el tamaño del proyecto, a diferencia de Webpack que puede tardar minutos en proyectos grandes.
- **Prototipado rápido con zero-config:** Ideal para crear prototipos, demos o pruebas de concepto sin perder tiempo en configuraciones. Vite soporta TypeScript, JSX, CSS modules y preprocesadores (Sass, Less) sin configuración adicional.
- **Proyectos con múltiples frameworks o micro-frontends:** Perfecto si necesitas un build tool coherente para React, Vue, Svelte y vanilla JS en el mismo monorepo. Vite ofrece plugins oficiales para todos los frameworks principales con la misma experiencia de desarrollo.

## Examples
### Configuración básica de Vite para React + TypeScript
```
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
tput: "Servidor de desarrollo en puerto 3000, abre el navegador automáticamente, con plugin React y alias @ que apunta a la carpeta src."
```

### Variables de entorno en Vite
```
// .env
VITE_API_URL=https://api.miapp.com
VITE_APP_TITLE=Mi Aplicación
// En código:
console.log(import.meta.env.VITE_API_URL);  // 'https://api.miapp.com'
console.log(import.meta.env.VITE_APP_TITLE); // 'Mi Aplicación'
tput: "Variables de entorno accesibles en el cliente con el prefijo VITE_. Las variables sin este prefijo no se exponen al navegador por seguridad."
```

## Tips
- Usa `import.meta.glob()` para importar múltiples archivos de forma dinámica. Ideal para cargar todos los componentes de una carpeta o archivos de traducción sin imports manuales.
- Aprovecha el pre-bundling de dependencias con `deps.optimizer` en `vite.config.js`. Vite pre-empaqueta dependencias con esbuild para acelerar la carga inicial en desarrollo.
- Configura el proxy del servidor de desarrollo para evitar CORS durante el desarrollo local: `server.proxy: { '/api': 'http://localhost:8080' }` redirige las peticiones API al backend.
- Usa el análisis de bundle (`npm run build -- --report`) o plugins como `rollup-plugin-visualizer` para identificar dependencias grandes y optimizar el tamaño del build de producción.
- Habilita la compresión Brotli o Gzip en el servidor de producción para servir los assets estáticos generados por Vite de forma más eficiente a los usuarios finales.

## FAQ
- **¿Vite reemplaza a Webpack completamente?** Para la mayoría de proyectos nuevos, sí. Vite ofrece mejor experiencia de desarrollo con HMR instantáneo. Sin embargo, Webpack sigue siendo necesario en proyectos legacy con configuraciones complejas o plugins sin equivalente en Vite/Rollup.
- **¿Funciona Vite con aplicaciones SSR como Next.js o Nuxt?** Vite se usa como build tool dentro de frameworks SSR. Nuxt 3, SvelteKit, Astro y Laravel usan Vite internamente. Next.js usa su propio bundler (Turbopack), pero puedes integrar Vite con plugins de la comunidad.
- **¿Cómo manejo múltiples entry points en Vite?** Configura `build.rollupOptions.input` en `vite.config.js` para definir múltiples puntos de entrada. Esto es útil para aplicaciones multi-página (MPA) o cuando necesitas generar varios bundles independientes.
- **¿Puedo usar Vite para librerías además de aplicaciones?** Sí. Vite tiene modo librería (`build.lib`) que genera bundles optimizados para distribución en npm. Soporta formatos ESM, CJS y UMD con definiciones de tipos TypeScript automáticas.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://vite.dev
- **Source Code Issues:** Check the repository at https://github.com/vitejs/vite for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
