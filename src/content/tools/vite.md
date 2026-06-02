---
name: Vite
description: Entorno de desarrollo frontend ultrarrápido con HMR instantáneo, build optimizado y soporte nativo para ESM.
category: frontend
tags: [bundler, dev-server, hmr, build, javascript, typescript]
officialSite: https://vite.dev
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Web]
featured: false
features:
  - Dev server con HMR instantáneo y ESM nativo
  - Build con Rollup optimizado para producción
  - Soporte nativo para TypeScript, JSX, CSS, JSON
  - Plugins con compatibilidad con Rollup
  - Optimización de assets con Asset Hashes
  - Soporte para SSR y bibliotecas
  - VitePress para documentación con Vite
alternatives: []
relatedTools: [next-js, vue, svelte, astro]
howToUse:
  - step: 1
    title: "Crea un nuevo proyecto con Vite"
    description: "Ejecuta `npm create vite@latest` y sigue el asistente interactivo. Selecciona el nombre del proyecto y el framework (React, Vue, Svelte, vanilla, etc.). Vite genera la estructura del proyecto lista para comenzar a desarrollar en segundos."
  - step: 2
    title: "Ejecuta el servidor de desarrollo con HMR instantáneo"
    description: "Usa `npm run dev` para iniciar el servidor de desarrollo. Abre `http://localhost:5173` en el navegador. Cualquier cambio en el código fuente se refleja instantáneamente gracias al Hot Module Replacement basado en ESM nativo."
  - step: 3
    title: "Configura plugins y personaliza el build"
    description: "Edita `vite.config.js` para agregar plugins oficiales (`@vitejs/plugin-react`, `@vitejs/plugin-vue`), configurar alias de rutas, definir variables de entorno con prefijo `VITE_` y ajustar opciones del servidor de desarrollo."
  - step: 4
    title: "Construye para producción"
    description: "Ejecuta `npm run build` para generar los archivos optimizados en la carpeta `dist/`. Vite usa Rollup internamente para tree-shaking, división de código y hashes de assets. El resultado es un bundle mínimo listo para desplegar."
whenToUse:
  - title: "Nuevos proyectos frontend que buscan máxima velocidad"
    description: "Cuando inicias un proyecto desde cero y quieres el mejor rendimiento en desarrollo. Vite arranca en milisegundos sin importar el tamaño del proyecto, a diferencia de Webpack que puede tardar minutos en proyectos grandes."
  - title: "Prototipado rápido con zero-config"
    description: "Ideal para crear prototipos, demos o pruebas de concepto sin perder tiempo en configuraciones. Vite soporta TypeScript, JSX, CSS modules y preprocesadores (Sass, Less) sin configuración adicional."
  - title: "Proyectos con múltiples frameworks o micro-frontends"
    description: "Perfecto si necesitas un build tool coherente para React, Vue, Svelte y vanilla JS en el mismo monorepo. Vite ofrece plugins oficiales para todos los frameworks principales con la misma experiencia de desarrollo."
examples:
  - title: "Configuración básica de Vite para React + TypeScript"
    code: |
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
    output: "Servidor de desarrollo en puerto 3000, abre el navegador automáticamente, con plugin React y alias @ que apunta a la carpeta src."
  - title: "Variables de entorno en Vite"
    code: |
      // .env
      VITE_API_URL=https://api.miapp.com
      VITE_APP_TITLE=Mi Aplicación

      // En código:
      console.log(import.meta.env.VITE_API_URL);  // 'https://api.miapp.com'
      console.log(import.meta.env.VITE_APP_TITLE); // 'Mi Aplicación'
    output: "Variables de entorno accesibles en el cliente con el prefijo VITE_. Las variables sin este prefijo no se exponen al navegador por seguridad."
tips:
  - text: "Usa `import.meta.glob()` para importar múltiples archivos de forma dinámica. Ideal para cargar todos los componentes de una carpeta o archivos de traducción sin imports manuales."
  - text: "Aprovecha el pre-bundling de dependencias con `deps.optimizer` en `vite.config.js`. Vite pre-empaqueta dependencias con esbuild para acelerar la carga inicial en desarrollo."
  - text: "Configura el proxy del servidor de desarrollo para evitar CORS durante el desarrollo local: `server.proxy: { '/api': 'http://localhost:8080' }` redirige las peticiones API al backend."
  - text: "Usa el análisis de bundle (`npm run build -- --report`) o plugins como `rollup-plugin-visualizer` para identificar dependencias grandes y optimizar el tamaño del build de producción."
  - text: "Habilita la compresión Brotli o Gzip en el servidor de producción para servir los assets estáticos generados por Vite de forma más eficiente a los usuarios finales."
faq:
  - question: "¿Vite reemplaza a Webpack completamente?"
    answer: "Para la mayoría de proyectos nuevos, sí. Vite ofrece mejor experiencia de desarrollo con HMR instantáneo. Sin embargo, Webpack sigue siendo necesario en proyectos legacy con configuraciones complejas o plugins sin equivalente en Vite/Rollup."
  - question: "¿Funciona Vite con aplicaciones SSR como Next.js o Nuxt?"
    answer: "Vite se usa como build tool dentro de frameworks SSR. Nuxt 3, SvelteKit, Astro y Laravel usan Vite internamente. Next.js usa su propio bundler (Turbopack), pero puedes integrar Vite con plugins de la comunidad."
  - question: "¿Cómo manejo múltiples entry points en Vite?"
    answer: "Configura `build.rollupOptions.input` en `vite.config.js` para definir múltiples puntos de entrada. Esto es útil para aplicaciones multi-página (MPA) o cuando necesitas generar varios bundles independientes."
  - question: "¿Puedo usar Vite para librerías además de aplicaciones?"
    answer: "Sí. Vite tiene modo librería (`build.lib`) que genera bundles optimizados para distribución en npm. Soporta formatos ESM, CJS y UMD con definiciones de tipos TypeScript automáticas."
publishedAt: 2026-06-01
---

## ¿Qué es?

Vite es un entorno de desarrollo frontend que aprovecha los módulos ES nativos del navegador para ofrecer arranque instantáneo y HMR ultrarrápido. En producción, usa Rollup para generar bundles optimizados. Es el build tool más rápido del ecosistema frontend.

## ¿Para qué sirve?

Vite sirve como bundler y dev server para proyectos frontend modernos. Proporciona HMR casi instantáneo, soporte nativo para TypeScript, JSX, CSS modules, y builds de producción increíblemente rápidos y optimizados.

## Cuándo usarla

- Para nuevos proyectos frontend que buscan máxima velocidad de desarrollo.
- Si estás cansado de esperar a Webpack para arrancar o hacer HMR.
- Para prototipado rápido con zero-config.
- Cuando necesitas un build tool que soporte múltiples frameworks.
- Para proyectos con TypeScript y JSX sin configuración extra.

## Cuándo NO usarla

- Si tu proyecto legacy ya está configurado con Webpack y funciona bien.
- Para proyectos que dependen de plugins de Webpack sin equivalentes en Vite.
- Cuando necesitas compatibilidad con navegadores muy antiguos sin ESM.
- Si trabajas con un stack enterprise que requiere configuraciones muy específicas de Webpack.

## Pros

- Velocidad de desarrollo extremadamente rápida.
- Zero-config para la mayoría de proyectos modernos.
- HMR instantáneo sin importar el tamaño del proyecto.
- Build optimizado con Rollup y tree-shaking nativo.
- Ecosistema creciente de plugins y templates.

## Contras

- Dependencia de ESM (no compatible con IE11 sin config extra).
- Algunos plugins de Rollup no funcionan sin adaptación.
- Ecosistema más joven que Webpack.
- SSR no tan maduro como Next.js o Nuxt.
- Ciertas configuraciones avanzadas requieren entender ESM y Rollup.
