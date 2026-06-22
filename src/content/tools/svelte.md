---
name: Svelte
description: Framework UI que compila componentes a JavaScript vanilla, eliminando el Virtual DOM para apps ultrarrápidas.
category: frontend
tags: [javascript, framework, compiler, frontend, reactivo, web]
officialSite: https://svelte.dev
github: https://github.com/sveltejs/svelte
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Web]
featured: false
verified: true
features:
  - Compilador que genera JavaScript vanilla óptimo
  - Reactividad con $state, $derived y $effect (runes)
  - Transiciones y animaciones integradas
  - Store para estado global reactivo
  - SvelteKit para aplicaciones full-stack
  - Scoped CSS por defecto en componentes
  - Bundle size mínimo en producción
alternatives: [astro]
relatedTools: [astro, tailwind-css, next-js, visual-studio-code]
howToUse:
  - step: 1
    title: "Crear un proyecto con SvelteKit"
    description: "Usa npx sv create mi-app y selecciona el template que prefieras (básico, con TypeScript, ESLint, Prettier). SvelteKit es el framework full-stack oficial."
  - step: 2
    title: "Crear componentes reactivos"
    description: "Escribe archivos .svelte con HTML, CSS scoped y JavaScript en un solo archivo. Usa $state y $derived (runes) para reactividad declarativa simple."
  - step: 3
    title: "Agregar navegación y rutas"
    description: "Crea carpetas dentro de src/routes/ para definir las rutas de tu aplicación. SvelteKit maneja automáticamente SSR, SSG, carga de datos y navegación del lado cliente."
  - step: 4
    title: "Compilar y desplegar"
    description: "Ejecuta npm run build para generar el build de producción optimizado con bundle mínimo. Despliega en Vercel, Netlify, Cloudflare Pages o cualquier plataforma que soporte Node.js."
whenToUse:
  - title: "Aplicaciones donde el rendimiento es crítico"
    description: "Cuando el tamaño del bundle y la velocidad de renderizado son factores determinantes, como en sitios de e-commerce, landing pages o aplicaciones para dispositivos de gama baja."
  - title: "Proyectos con desarrolladores que valoran simplicidad"
    description: "Si tu equipo prefiere escribir menos boilerplate y aprovechar características integradas como animaciones, stores y CSS scoped sin librerías adicionales."
  - title: "Aplicaciones full-stack modernas"
    description: "Con SvelteKit puedes construir tanto el frontend como el backend (endpoints API, server-side rendering, form actions) en un solo proyecto coherente."
examples:
  - title: "Componente contador reactivo"
    code: |
      <script>
        let count = $state(0);
        function incrementar() { count++; }
      </script>
      <button onclick={incrementar}>Clics: {count}</button>
    output: "Un botón que muestra y actualiza el contador de clics con reactividad automática, sin hooks ni funciones adicionales."
tips:
  - text: "Aprovecha el CSS scoped por defecto en cada componente .svelte para evitar conflictos de estilos sin necesidad de CSS Modules o librerías externas."
  - text: "Usa SvelteKit en lugar de Svelte standalone para nuevos proyectos, ya que proporciona SSR, routing, form actions y optimizaciones que son difíciles de configurar manualmente."
  - text: "Aprende y adopta las runes ($state, $derived, $effect) de Svelte 5 cuanto antes, ya que reemplazan el sistema de reactividad antiguo y son el futuro del framework."
  - text: "Combina Svelte con Tailwind CSS para estilado rápido o con shadcn-svelte para componentes de UI preconstruidos con diseño profesional."
  - text: "Configura adapters en svelte.config.js según tu plataforma de deploy (adapter-vercel, adapter-cloudflare, adapter-node) para optimizar el output."
faq:
  - question: "¿Svelte es mejor que React?"
    answer: "No hay un 'mejor' absoluto. Svelte ofrece bundles más pequeños, menos boilerplate y mejor rendimiento al compilar a vanilla JS. React tiene un ecosistema masivo, más librerías y más oportunidades laborales. La elección depende del proyecto y equipo."
  - question: "¿Qué son las runes en Svelte 5?"
    answer: "Las runes son el nuevo sistema de reactividad de Svelte 5 que reemplaza las declaraciones reactivas antiguas ($:). Usan $state, $derived y $effect como funciones del compilador que habilitan reactividad granular y universal fuera de componentes."
  - question: "¿Svelte funciona para aplicaciones grandes?"
    answer: "Sí, empresas como Apple (Apple Music), Spotify y The New York Times usan Svelte en producción. SvelteKit maneja code splitting automático y lazy loading para escalar bien en proyectos grandes."
  - question: "¿Qué es SvelteKit?"
    answer: "SvelteKit es el framework full-stack oficial de Svelte, equivalente a Next.js para React o Nuxt para Vue. Ofrece SSR, SSG, routing basado en archivos, form actions, carga de datos y adaptadores de despliegue."
publishedAt: 2026-06-01
---

## ¿Qué es?

Svelte es un framework UI radicalmente diferente: no usa Virtual DOM. En lugar de ejecutar código en el navegador para reconciliar cambios, Svelte compila tus componentes a JavaScript vanilla puro durante el build. El resultado son aplicaciones extremadamente rápidas con bundles minúsculos.

## ¿Para qué sirve?

Svelte sirve para construir interfaces de usuario reactivas con menos código y mejor rendimiento. Con SvelteKit, también permite crear aplicaciones full-stack con SSR, SSG, rutas API y optimizaciones automáticas.

## Cuándo usarla

- Cuando el rendimiento y tamaño de bundle son críticos.
- Si quieres escribir menos código que con React o Vue.
- Para aplicaciones que necesitan animaciones fluidas.
- Cuando buscas una experiencia de desarrollo simple y elegante.
- Si te interesa la innovación en frameworks de frontend.

## Cuándo NO usarla

- Si tu equipo es grande y ya está establecido en React.
- Cuando el ecosistema de componentes de React es indispensable.
- Para proyectos enterprise que requieren comunidad masiva.
- Si buscas la mayor cantidad de ofertas laborales.
- Cuando necesitas librerías de UI maduras como Material UI.

## Pros

- Bundle size extremadamente pequeño en producción.
- Rendimiento superior al no usar Virtual DOM.
- Menos código boilerplate comparado con React.
- Transiciones y animaciones de primera clase.
- Experiencia de desarrollo intuitiva y limpia.

## Contras

- Comunidad y ecosistema más pequeños que React/Vue.
- Menos oportunidades laborales.
- La migración a runes (Svelte 5) cambió mucho la API.
- Menos librerías de componentes y templates.
- SvelteKit aún madurando comparado con Next.js.
