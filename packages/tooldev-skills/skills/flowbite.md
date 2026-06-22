---
name: flowbite
description: Biblioteca de componentes UI basada en Tailwind CSS con más de 400 componentes interactivos, temas y soporte multi-framework. Úsala cuando el usuario mencione o pregunte sobre tailwind-css, componentes, ui, react.
---

# Flowbite

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** freemium
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web, React, Vue, Svelte, Angular, Laravel, Django, Astro
- **Official Site:** https://flowbite.com
- **GitHub:** https://github.com/themesberg/flowbite
- **Alternatives:** shadcn-ui, material-ui, daisyui

## Features
- Más de 400 componentes UI interactivos
- 5 temas predefinidos: Default, Minimal, Enterprise, Playful, Mono
- Soporte multi-framework con paquetes dedicados (React, Vue, Svelte, Angular)
- Modo oscuro nativo en todos los componentes
- Figma design system incluido
- Más de 450 iconos SVG en estilos solid y outline
- TypeScript soportado oficialmente
- Componentes avanzados: Datepicker, Charts, Datatables

## Steps
### 1. Instala Flowbite en tu proyecto Tailwind
Ejecuta npm install flowbite. Importa el tema en tu CSS: @import 'flowbite/src/themes/default'. Agrega @plugin 'flowbite/plugin' y configura @source '../node_modules/flowbite' en tu archivo CSS.

### 2. Incluye el JavaScript de componentes interactivos
Agrega <script src='../node_modules/flowbite/dist/flowbite.min.js'></script> antes de cerrar el body. Esto habilita los componentes interactivos: modales, dropdowns, tabs, datepickers, etc.

### 3. Usa los componentes en HTML o tu framework
Copia y pega el HTML del componente deseado desde la documentación. Los componentes usan clases de Tailwind y data attributes para la interactividad. Para React, usa @themesberg/flowbite-react.

### 4. Personaliza con temas y modo oscuro
Cambia entre los 5 temas importando diferente CSS. Activa el modo oscuro agregando la clase dark al elemento HTML. Los componentes se adaptan automáticamente.

## When to Use
- **Dashboards y paneles de administración:** Cuando necesitas construir interfaces con tablas, gráficos, formularios y navegación compleja. Flowbite tiene componentes específicos para admin panels: sidebar, datatables, charts y más.
- **Prototipado rápido con Tailwind:** Para acelerar el desarrollo de prototipos y MVPs. Los componentes listos para usar evitan tener que diseñar cada elemento desde cero, manteniendo la flexibilidad de Tailwind CSS.
- **Equipos que trabajan con múltiples frameworks:** Cuando un equipo usa diferentes frameworks en distintos proyectos. Flowbite tiene paquetes oficiales para React, Vue, Svelte y Angular, manteniendo consistencia visual entre proyectos.

## Examples
### Card con Tailwind CSS y Flowbite
```
<div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
  <a href="#">
    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Título de la card
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Descripción del contenido de la card.
    </p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
      Leer más
    </a>
  </div>
</div>
tput: "Una card responsiva con imagen, título, descripción y botón. El modo oscuro se activa automáticamente cuando el elemento html tiene la clase dark."
```

### Modal con Flowbite (HTML plano)
```
<button data-modal-target="default-modal" data-modal-toggle="default-modal"
  class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5">
  Abrir modal
</button>
<div id="default-modal" tabindex="-1" aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50">
  <div class="relative p-4 w-full max-w-2xl max-h-full">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div class="flex items-center justify-between p-4 border-b rounded-t">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Términos del servicio</h3>
      </div>
      <div class="p-4 space-y-4"><p class="text-gray-500">Contenido del modal...</p></div>
    </div>
  </div>
</div>
tput: "Modal funcional con data attributes de Flowbite. Sin JavaScript manual: los atributos data-modal-target y data-modal-toggle controlan la apertura y cierre automáticamente."
```

## Tips
- Flowbite v4 es compatible con Tailwind CSS v4. Asegúrate de usar la versión correcta según tu versión de Tailwind.
- Usa los themes para cambiar rápido la apariencia global. Minimal es ideal para apps, Default para landing pages, Enterprise para dashboards.
- Los data attributes (data-modal-target, data-dropdown-toggle) eliminan la necesidad de JavaScript personalizado para componentes interactivos.
- Flowbite React (flowbite-react) ofrece componentes nativos de React con TypeScript. Es mejor opción que el HTML plano si trabajas con React.
- Combina Flowbite con Tailwind UI para tener aún más componentes y bloques prediseñados.

## FAQ
- **¿Flowbite es gratuito?** Flowbite es open-source bajo licencia MIT. Los componentes base son gratuitos. Flowbite Pro (bloques, templates, componentes avanzados) es de pago con licencia EULA.
- **¿Funciona con Tailwind CSS v4?** Sí, Flowbite v4 está diseñado para Tailwind CSS v4. Si usas Tailwind v3, utiliza Flowbite v3 (v3.flowbite.com).
- **¿Qué frameworks soporta?** HTML vanilla, React (flowbite-react), Vue (flowbite-vue), Svelte (flowbite-svelte) y Angular (flowbite-angular). También guías para Laravel, Django, Rails y Astro.
- **¿Tiene diseño en Figma?** Sí, Flowbite incluye un Figma design system completo con todos los componentes, tokens y variantes. Útil para diseñar antes de programar.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://flowbite.com
- **Source Code Issues:** Check the repository at https://github.com/themesberg/flowbite for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
