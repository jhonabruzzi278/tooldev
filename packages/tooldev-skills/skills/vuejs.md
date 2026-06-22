---
name: vuejs
description: Framework progresivo para construir interfaces de usuario con un enfoque reactivo, simple y flexible. Úsala cuando el usuario mencione o pregunte sobre javascript, framework, reactivo, spa.
---

# Vue.js

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** principiante
- **Compatibility:** Web
- **Official Site:** https://vuejs.org
- **GitHub:** https://github.com/vuejs/core
- **Alternatives:** astro

## Features
- Sistema reactivo con composición API
- Componentes de un solo archivo (SFC) con scoped CSS
- Router oficial con transiciones animadas
- Pinia para gestión de estado predecible
- Reactividad con ref() y reactive()
- Directivas declarativas (v-if, v-for, v-model)
- Vue DevTools para depuración avanzada

## Steps
### 1. Crea un proyecto Vue con Vite
Ejecuta `npm create vue@latest` y sigue el asistente para configurar TypeScript, Vue Router, Pinia y herramientas de testing. Alternativamente, usa `npm create vite@latest` y selecciona Vue como framework. Obtendrás un proyecto listo con HMR instantáneo.

### 2. Define componentes de un solo archivo (SFC)
Crea archivos `.vue` con tres secciones: `<template>` para el HTML con directivas (`v-if`, `v-for`, `v-model`), `<script setup>` para la lógica con Composition API (`ref`, `reactive`, `computed`, `watch`), y `<style scoped>` para estilos encapsulados.

### 3. Gestiona el estado con Pinia y navegación con Vue Router
Instala Pinia para estado global (`npm install pinia`) y define stores con `defineStore()`. Configura Vue Router para navegación SPA con rutas dinámicas, protección de rutas y lazy loading de componentes por ruta.

### 4. Construye y despliega la aplicación
Ejecuta `npm run build` para generar la aplicación optimizada en `dist/`. Puedes desplegarla en cualquier hosting estático (Vercel, Netlify, GitHub Pages) o como SSR con Nuxt para SEO y rendimiento mejorado.

## When to Use
- **Proyectos que requieren una curva de aprendizaje suave:** Cuando el equipo tiene desarrolladores junior o viene de HTML/CSS/JS vanilla. La sintaxis de Vue con templates es familiar para quienes conocen HTML, y la Composition API escala bien para desarrolladores más experimentados.
- **Prototipos y MVPs que necesitan iteración rápida:** Ideal para startups que validan ideas. El sistema reactivo intuitivo, la excelente documentación y el CLI interactivo permiten tener un prototipo funcional en horas sin fricción.
- **Aplicaciones que crecen incrementalmente:** Perfecto para proyectos que empiezan como un widget simple y escalan a una SPA compleja. Puedes agregar Vue Router, Pinia y composables según los necesites, sin reescribir la base inicial.

## Examples
### Componente Vue con Composition API
```
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
tput: "Un botón interactivo que muestra un contador y su valor duplicado. Al hacer clic, ambos valores se actualizan reactivamente gracias a `ref` y `computed`."
```

### Store de Pinia con estado y acciones
```
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
tput: "Store reactivo con estado `cuenta`, getter `doble` y acción `incrementar`. Puede usarse en cualquier componente con `const store = useContadorStore()`."
```

## Tips
- Usa `<script setup>` en nuevos proyectos. Es la sintaxis recomendada de Composition API que elimina boilerplate, mejora el rendimiento y tiene mejor soporte TypeScript sin configuración adicional.
- Instala Vue DevTools como extensión del navegador. Permite inspeccionar componentes, estado reactivo, eventos, rutas y stores de Pinia en tiempo real durante el desarrollo.
- Aprovecha `defineProps()` y `defineEmits()` con tipos TypeScript para documentar la interfaz de tus componentes. El compilador valida las props y el IDE ofrece autocompletado preciso.
- Usa `shallowRef()` y `shallowReactive()` para objetos grandes donde solo necesitas reactividad en el primer nivel. Mejoran el rendimiento al evitar la proxyficación profunda innecesaria.
- Organiza tu proyecto con la estructura recomendada: `src/components/` para componentes reutilizables, `src/views/` para páginas, `src/stores/` para Pinia y `src/composables/` para lógica reutilizable con Composition API.

## FAQ
- **¿Vue o React? ¿Cuál debo elegir en 2026?** Ambos son excelentes. Vue ofrece una curva de aprendizaje más suave, documentación superior y un ecosistema oficial cohesionado (Router, Pinia, Vite). React tiene mayor demanda laboral, ecosistema de terceros más grande y React Native para móviles. La elección depende de tu equipo y proyecto.
- **¿Debo usar Options API o Composition API?** Composition API (`<script setup>`) es el estándar moderno. Ofrece mejor reutilización de lógica con composables, soporte TypeScript superior y menor boilerplate. Options API sigue siendo válida para código legacy o equipos en transición.
- **¿Vue funciona sin Node.js o sin un build step?** Sí. Puedes usar Vue directamente desde CDN con `<script src='https://unpkg.com/vue@3'>` para proyectos pequeños o prototipos sin herramientas de build. Para aplicaciones serias, se recomienda el build step con Vite.
- **¿Necesito usar Nuxt para aplicaciones Vue en producción?** No necesariamente. Vue standalone con Vite funciona perfecto para SPAs. Nuxt añade SSR, SSG, SEO mejorado y convenciones de enrutamiento basado en archivos. Úsalo si necesitas SSR o prefieres su estructura opinada.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://vuejs.org
- **Source Code Issues:** Check the repository at https://github.com/vuejs/core for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
