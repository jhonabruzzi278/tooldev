---
name: Qwik
description: Framework web resumible con rendimiento instantáneo de carga, diseñado para cualquier sitio o aplicación.
category: frontend
tags: [framework, javascript, typescript, frontend, resumable, performance, react]
officialSite: https://qwik.dev
pricing: gratis
openSource: true
license: MIT
technicalLevel: avanzado
compatibility: ["Web"]
featured: false
screenshots:
  - /screenshots/qwik.webp
  - /screenshots/qwik-2.webp
features:
  - Resumable en lugar de hidratación para carga instantánea
  - Lazy loading extremo de JavaScript
  - Enrutamiento con precarga predictiva (Prefetch Strategy)
  - Optimizaciones automáticas sin configuración manual
  - Integración con React, Solid y otros frameworks vía MITM
  - Builder.io para CMS visual integrado
  - Server Components con streaming nativo
alternatives: [next-js, remix, astro]
relatedTools: [react, tailwind-css, vite, visual-studio-code]
howToUse:
  - step: 1
    title: "Crea un nuevo proyecto Qwik"
    description: "Ejecuta npm create qwik@latest en la terminal, selecciona el starter que prefieras (basic, empty, con integraciones) y el directorio de destino. Qwik configura Vite, TypeScript y la estructura de archivos automáticamente."
  - step: 2
    title: "Define componentes con component$"
    description: "Cada componente usa component$() que los hace resumibles. Usa useSignal() para estado reactivo y useVisibleTask$() para efectos que se ejecutan solo en el cliente. Los event handlers llevan el sufijo $."
  - step: 3
    title: "Configura enrutamiento basado en archivos"
    description: "Crea archivos en src/routes/ siguiendo la convención de directorios. Qwik soporta layouts anidados, loaders para cargar datos en el servidor, y actions para formularios que funcionan sin JavaScript."
  - step: 4
    title: "Añade integraciones y despliega"
    description: "Usa npx qwik add para añadir integraciones (Tailwind, Auth, i18n). Construye con npm run build y despliega en Cloudflare Pages, Netlify, Vercel, o cualquier plataforma que soporte Node.js."
whenToUse:
  - title: "Aplicaciones donde el rendimiento de carga es crítico"
    description: "Cuando la velocidad de carga afecta directamente SEO, conversiones o experiencia del usuario, como e-commerce, landing pages y sitios content-heavy donde cada milisegundo cuenta."
  - title: "Sitios con alto volumen de JavaScript"
    description: "Para aplicaciones grandes donde Next.js o frameworks tradicionales descargan demasiado JavaScript en el cliente, Qwik envía código solo para las interacciones que el usuario realmente realiza."
examples:
  - title: "Componente con estado reactivo"
    code: |
      import { component$, useSignal } from "@builder.io/qwik";
      
      export default component$(() => {
        const count = useSignal(0);
        return (
          <button onClick$={() => count.value++}>
            Clicks: {count.value}
          </button>
        );
      });
    output: "<button>Clicks: 0</button> (actualizado reactivamente)"
  - title: "Loader para cargar datos del servidor"
    code: |
      import { routeLoader$ } from "@builder.io/qwik-city";
      
      export const useProductos = routeLoader$(async () => {
        const res = await fetch("https://api.example.com/products");
        return res.json();
      });
    output: "Datos cargados en el servidor antes del primer render, sin JavaScript en el cliente."
tips:
  - text: "Añade el sufijo $ a todas las funciones que cruzan la barrera servidor-cliente (component$, useSignal, routeLoader$, etc.) — es la convención de Qwik para identificar boundaries resumibles."
  - text: "Usa useVisibleTask$ en lugar de useEffect para efectos que solo se ejecutan cuando el componente se vuelve interactivo en el cliente."
  - text: "Evita importar librerías pesadas en componentes principales; Qwik hará lazy loading automático, pero las dependencias grandes igual afectan el bundle si se necesitan pronto."
  - text: "Aprovecha routeLoader$ para cargar datos en el servidor; los datos se serializan e incrustan en el HTML, eliminando spinners de carga y waterfalls."
  - text: "Usa el modo strict de TypeScript desde el inicio — Qwik está construido con tipos fuertes y te ahorrará errores en tiempo de compilación."
faq:
  - question: "¿Qué significa 'resumable' y cómo difiere de la hidratación?"
    answer: "Resumable significa que Qwik serializa el estado de la aplicación en el HTML y solo descarga el JavaScript necesario cuando el usuario interactúa con un elemento específico. La hidratación tradicional (React, Next.js) ejecuta todo el JavaScript en el cliente para 'revivir' la página, consumiendo tiempo y recursos innecesarios."
  - question: "¿Qwik es compatible con componentes React?"
    answer: "Sí, Qwik ofrece integración con React vía qwik-react. Puedes usar componentes React dentro de Qwik, pero con limitaciones: solo funciona del lado del cliente y pierdes parte del beneficio de resumability."
  - question: "¿Puedo usar Qwik con Tailwind CSS?"
    answer: "Sí, ejecuta npx qwik add tailwind y Qwik configura automáticamente PostCSS, Tailwind y las directivas necesarias. La integración está optimizada para que los estilos no afecten la resumability."
publishedAt: 2026-06-01
---

## ¿Qué es?

Qwik es un framework web creado por Misko Hevery (creador de Angular) que introduce el concepto de "resumability": en lugar de hidratar la página completa, Qwik reanuda la interacción bajo demanda, cargando solo el JavaScript necesario para cada interacción.

## ¿Para qué sirve?

Qwik sirve para construir sitios y aplicaciones web con rendimiento de carga prácticamente instantáneo, independientemente del tamaño de la aplicación. Es ideal para sitios content-heavy, e-commerce y aplicaciones donde la velocidad de carga es crítica.

## Cuándo usarla

- Cuando el rendimiento de carga es la prioridad #1.
- Para sitios con mucho JavaScript que necesitan cargar instantáneamente.
- Si buscas una alternativa a Next.js con mejor rendimiento de carga.
- Para páginas content-heavy con interacciones complejas.
- Cuando quieres lazy loading extremo sin configuración manual.

## Cuándo NO usarla

- Si tu equipo no está familiarizado con conceptos de resumability.
- Para proyectos pequeños donde Next.js o Astro son suficientes.
- Cuando necesitas un ecosistema maduro de plugins y librerías.
- Si prefieres frameworks con más adopción y recursos de aprendizaje.

## Pros

- Carga instantánea con resumability.
- Lazy loading automático de JavaScript.
- Sin hidratación costosa en el cliente.
- Integración con React y otros frameworks.
- Optimizaciones automáticas de rendimiento.

## Contras

- Curva de aprendizaje pronunciada.
- Ecosistema y comunidad pequeños.
- Menos templates y starters disponibles.
- Documentación en evolución constante.
- Compatibilidad limitada con librerías React existentes.

## CLI

Qwik CLI usa Vite bajo el hood para scaffolding y desarrollo:

```bash
npm create qwik@latest                # Nuevo proyecto interactivo
npm create qwik@latest ./app -- --starter basic
npm run dev                           # Servidor desarrollo Vite
npm run build                         # Build producción
npm run preview                       # Vista previa del build
npx qwik add                          # Añadir integraciones (auth, tailwind, etc.)
npx qwik --help                       # Lista de comandos disponibles
```
