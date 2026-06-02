---
name: Vue.js
description: Framework progresivo para construir interfaces de usuario con un enfoque reactivo, simple y flexible.
category: frontend
tags: [javascript, framework, reactivo, spa, frontend, web]
officialSite: https://vuejs.org
pricing: gratis
openSource: true
license: MIT
technicalLevel: principiante
compatibility: [Web]
featured: false
features:
  - Sistema reactivo con composición API
  - Componentes de un solo archivo (SFC) con scoped CSS
  - Router oficial con transiciones animadas
  - Pinia para gestión de estado predecible
  - Reactividad con ref() y reactive()
  - Directivas declarativas (v-if, v-for, v-model)
  - Vue DevTools para depuración avanzada
alternatives: [astro]
relatedTools: [next-js, tailwind-css, visual-studio-code]
howToUse:
  - step: 1
    title: "Crea un proyecto Vue con Vite"
    description: "Ejecuta `npm create vue@latest` y sigue el asistente para configurar TypeScript, Vue Router, Pinia y herramientas de testing. Alternativamente, usa `npm create vite@latest` y selecciona Vue como framework. Obtendrás un proyecto listo con HMR instantáneo."
  - step: 2
    title: "Define componentes de un solo archivo (SFC)"
    description: "Crea archivos `.vue` con tres secciones: `<template>` para el HTML con directivas (`v-if`, `v-for`, `v-model`), `<script setup>` para la lógica con Composition API (`ref`, `reactive`, `computed`, `watch`), y `<style scoped>` para estilos encapsulados."
  - step: 3
    title: "Gestiona el estado con Pinia y navegación con Vue Router"
    description: "Instala Pinia para estado global (`npm install pinia`) y define stores con `defineStore()`. Configura Vue Router para navegación SPA con rutas dinámicas, protección de rutas y lazy loading de componentes por ruta."
  - step: 4
    title: "Construye y despliega la aplicación"
    description: "Ejecuta `npm run build` para generar la aplicación optimizada en `dist/`. Puedes desplegarla en cualquier hosting estático (Vercel, Netlify, GitHub Pages) o como SSR con Nuxt para SEO y rendimiento mejorado."
whenToUse:
  - title: "Proyectos que requieren una curva de aprendizaje suave"
    description: "Cuando el equipo tiene desarrolladores junior o viene de HTML/CSS/JS vanilla. La sintaxis de Vue con templates es familiar para quienes conocen HTML, y la Composition API escala bien para desarrolladores más experimentados."
  - title: "Prototipos y MVPs que necesitan iteración rápida"
    description: "Ideal para startups que validan ideas. El sistema reactivo intuitivo, la excelente documentación y el CLI interactivo permiten tener un prototipo funcional en horas sin fricción."
  - title: "Aplicaciones que crecen incrementalmente"
    description: "Perfecto para proyectos que empiezan como un widget simple y escalan a una SPA compleja. Puedes agregar Vue Router, Pinia y composables según los necesites, sin reescribir la base inicial."
examples:
  - title: "Componente Vue con Composition API"
    code: |
      <script setup>
      import { ref, computed } from 'vue';

      const contador = ref(0);
      const doble = computed(() => contador.value * 2);

      function incrementar() {
        contador.value++;
      }
      </script>

      <template>
        <button @click="incrementar">
          Contador: {{ contador }} (Doble: {{ doble }})
        </button>
      </template>

      <style scoped>
      button {
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
      }
      </style>
    output: "Un botón interactivo que muestra un contador y su valor duplicado. Al hacer clic, ambos valores se actualizan reactivamente gracias a `ref` y `computed`."
  - title: "Store de Pinia con estado y acciones"
    code: |
      // stores/contador.ts
      import { defineStore } from 'pinia';

      export const useContadorStore = defineStore('contador', {
        state: () => ({ cuenta: 0 }),
        getters: {
          doble: (state) => state.cuenta * 2,
        },
        actions: {
          incrementar() { this.cuenta++; },
        },
      });
    output: "Store reactivo con estado `cuenta`, getter `doble` y acción `incrementar`. Puede usarse en cualquier componente con `const store = useContadorStore()`."
tips:
  - text: "Usa `<script setup>` en nuevos proyectos. Es la sintaxis recomendada de Composition API que elimina boilerplate, mejora el rendimiento y tiene mejor soporte TypeScript sin configuración adicional."
  - text: "Instala Vue DevTools como extensión del navegador. Permite inspeccionar componentes, estado reactivo, eventos, rutas y stores de Pinia en tiempo real durante el desarrollo."
  - text: "Aprovecha `defineProps()` y `defineEmits()` con tipos TypeScript para documentar la interfaz de tus componentes. El compilador valida las props y el IDE ofrece autocompletado preciso."
  - text: "Usa `shallowRef()` y `shallowReactive()` para objetos grandes donde solo necesitas reactividad en el primer nivel. Mejoran el rendimiento al evitar la proxyficación profunda innecesaria."
  - text: "Organiza tu proyecto con la estructura recomendada: `src/components/` para componentes reutilizables, `src/views/` para páginas, `src/stores/` para Pinia y `src/composables/` para lógica reutilizable con Composition API."
faq:
  - question: "¿Vue o React? ¿Cuál debo elegir en 2026?"
    answer: "Ambos son excelentes. Vue ofrece una curva de aprendizaje más suave, documentación superior y un ecosistema oficial cohesionado (Router, Pinia, Vite). React tiene mayor demanda laboral, ecosistema de terceros más grande y React Native para móviles. La elección depende de tu equipo y proyecto."
  - question: "¿Debo usar Options API o Composition API?"
    answer: "Composition API (`<script setup>`) es el estándar moderno. Ofrece mejor reutilización de lógica con composables, soporte TypeScript superior y menor boilerplate. Options API sigue siendo válida para código legacy o equipos en transición."
  - question: "¿Vue funciona sin Node.js o sin un build step?"
    answer: "Sí. Puedes usar Vue directamente desde CDN con `<script src='https://unpkg.com/vue@3'>` para proyectos pequeños o prototipos sin herramientas de build. Para aplicaciones serias, se recomienda el build step con Vite."
  - question: "¿Necesito usar Nuxt para aplicaciones Vue en producción?"
    answer: "No necesariamente. Vue standalone con Vite funciona perfecto para SPAs. Nuxt añade SSR, SSG, SEO mejorado y convenciones de enrutamiento basado en archivos. Úsalo si necesitas SSR o prefieres su estructura opinada."
publishedAt: 2026-06-01
---

## ¿Qué es?

Vue.js es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser adoptado incrementalmente. Su núcleo se centra solo en la capa de vista, pero su ecosistema oficial (Vue Router, Pinia, Vite) permite escalar a aplicaciones complejas.

## ¿Para qué sirve?

Vue.js sirve para construir desde componentes aislados en páginas existentes hasta Single Page Applications completas. Es ideal para prototipos rápidos, dashboards interactivos, aplicaciones web progresivas y sistemas de diseño robustos.

## Cuándo usarla

- Cuando buscas un framework con curva de aprendizaje suave.
- Para prototipar rápidamente con su sistema reactivo intuitivo.
- Si necesitas escalar de un widget simple a una SPA compleja.
- Cuando valoras documentación excelente en múltiples idiomas.
- Para equipos pequeños que quieren ser productivos desde el día uno.

## Cuándo NO usarla

- Si tu equipo ya domina React y el proyecto no justifica el cambio.
- Para aplicaciones que requieren TypeScript estricto sin configuración extra.
- Cuando el ecosistema de terceros de React es indispensable.
- Si necesitas el máximo rendimiento en aplicaciones masivas (benchmarks).

## Pros

- Curva de aprendizaje muy baja, ideal para principiantes.
- Documentación excelente y bien traducida.
- Rendimiento excelente con Virtual DOM optimizado.
- Ecosistema oficial completo y coherente.
- Reactividad intuitiva con Composition API.

## Contras

- Ecosistema de terceros más pequeño que React.
- Menor demanda laboral comparado con React.
- La migración de Options API a Composition API fragmentó la comunidad.
- Menos recursos educativos que React en inglés.
- TypeScript no es ciudadano de primera clase como en Angular.
