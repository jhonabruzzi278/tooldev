---
name: svelte
description: Framework UI que compila componentes a JavaScript vanilla, eliminando el Virtual DOM para apps ultrarrápidas. Úsala cuando el usuario mencione o pregunte sobre javascript, framework, compiler, frontend.
---

# Svelte

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
- **Official Site:** https://svelte.dev
- **GitHub:** https://github.com/sveltejs/svelte
- **Alternatives:** astro

## Features
- Compilador que genera JavaScript vanilla óptimo
- Reactividad con $state, $derived y $effect (runes)
- Transiciones y animaciones integradas
- Store para estado global reactivo
- SvelteKit para aplicaciones full-stack
- Scoped CSS por defecto en componentes
- Bundle size mínimo en producción

## Steps
### 1. Crear un proyecto con SvelteKit
Usa npx sv create mi-app y selecciona el template que prefieras (básico, con TypeScript, ESLint, Prettier). SvelteKit es el framework full-stack oficial.

### 2. Crear componentes reactivos
Escribe archivos .svelte con HTML, CSS scoped y JavaScript en un solo archivo. Usa $state y $derived (runes) para reactividad declarativa simple.

### 3. Agregar navegación y rutas
Crea carpetas dentro de src/routes/ para definir las rutas de tu aplicación. SvelteKit maneja automáticamente SSR, SSG, carga de datos y navegación del lado cliente.

### 4. Compilar y desplegar
Ejecuta npm run build para generar el build de producción optimizado con bundle mínimo. Despliega en Vercel, Netlify, Cloudflare Pages o cualquier plataforma que soporte Node.js.

## When to Use
- **Aplicaciones donde el rendimiento es crítico:** Cuando el tamaño del bundle y la velocidad de renderizado son factores determinantes, como en sitios de e-commerce, landing pages o aplicaciones para dispositivos de gama baja.
- **Proyectos con desarrolladores que valoran simplicidad:** Si tu equipo prefiere escribir menos boilerplate y aprovechar características integradas como animaciones, stores y CSS scoped sin librerías adicionales.
- **Aplicaciones full-stack modernas:** Con SvelteKit puedes construir tanto el frontend como el backend (endpoints API, server-side rendering, form actions) en un solo proyecto coherente.

## Examples
### Componente contador reactivo
```
<script>
  let count = $state(0);
  function incrementar() { count++; }
</script>
<button onclick={incrementar}>Clics: {count}</button>
tput: "Un botón que muestra y actualiza el contador de clics con reactividad automática, sin hooks ni funciones adicionales."
```

## Tips
- Aprovecha el CSS scoped por defecto en cada componente .svelte para evitar conflictos de estilos sin necesidad de CSS Modules o librerías externas.
- Usa SvelteKit en lugar de Svelte standalone para nuevos proyectos, ya que proporciona SSR, routing, form actions y optimizaciones que son difíciles de configurar manualmente.
- Aprende y adopta las runes ($state, $derived, $effect) de Svelte 5 cuanto antes, ya que reemplazan el sistema de reactividad antiguo y son el futuro del framework.
- Combina Svelte con Tailwind CSS para estilado rápido o con shadcn-svelte para componentes de UI preconstruidos con diseño profesional.
- Configura adapters en svelte.config.js según tu plataforma de deploy (adapter-vercel, adapter-cloudflare, adapter-node) para optimizar el output.

## FAQ
- **¿Svelte es mejor que React?** No hay un 'mejor' absoluto. Svelte ofrece bundles más pequeños, menos boilerplate y mejor rendimiento al compilar a vanilla JS. React tiene un ecosistema masivo, más librerías y más oportunidades laborales. La elección depende del proyecto y equipo.
- **¿Qué son las runes en Svelte 5?** Las runes son el nuevo sistema de reactividad de Svelte 5 que reemplaza las declaraciones reactivas antiguas ($:). Usan $state, $derived y $effect como funciones del compilador que habilitan reactividad granular y universal fuera de componentes.
- **¿Svelte funciona para aplicaciones grandes?** Sí, empresas como Apple (Apple Music), Spotify y The New York Times usan Svelte en producción. SvelteKit maneja code splitting automático y lazy loading para escalar bien en proyectos grandes.
- **¿Qué es SvelteKit?** SvelteKit es el framework full-stack oficial de Svelte, equivalente a Next.js para React o Nuxt para Vue. Ofrece SSR, SSG, routing basado en archivos, form actions, carga de datos y adaptadores de despliegue.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://svelte.dev
- **Source Code Issues:** Check the repository at https://github.com/sveltejs/svelte for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
