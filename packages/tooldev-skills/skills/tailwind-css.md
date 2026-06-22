---
name: tailwind-css
description: Framework de CSS utilitario que permite construir diseños modernos y responsivos rápidamente usando clases predefinidas. Úsala cuando el usuario mencione o pregunte sobre css, framework, utilitario, diseño.
---

# Tailwind CSS

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** open-source
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web
- **Official Site:** https://tailwindcss.com
- **GitHub:** https://github.com/tailwindlabs/tailwindcss

## Features
- Clases utilitarias para diseño rápido sin escribir CSS
- Sistema de diseño completamente personalizable
- Modo oscuro nativo con variante dark
- Optimización automática con PurgeCSS
- Variantes responsivas para todos los breakpoints
- Tailwind CSS v4 con nueva engine
- Integración con todos los frameworks modernos

## Steps
### 1. Instala Tailwind CSS en tu proyecto
Agrega Tailwind mediante npm o yarn: `npm install -D tailwindcss @tailwindcss/vite`. También puedes usar el CDN para prototipado rápido con `<script src='https://cdn.tailwindcss.com'></script>`.

### 2. Configura el archivo de entrada CSS
Crea un archivo CSS principal y agrega las directivas `@import 'tailwindcss'` al inicio. Esto inyecta las capas base, componentes y utilidades de Tailwind en tu hoja de estilos.

### 3. Usa clases utilitarias en tu HTML o JSX
Comienza a aplicar clases como `flex`, `grid`, `p-4`, `text-lg`, `bg-blue-500`, `hover:bg-blue-700`, `md:flex-row` directamente en tus elementos para construir el diseño sin escribir CSS personalizado.

### 4. Personaliza y optimiza para producción
Extiende el tema en `tailwind.config.js` con colores, fuentes y breakpoints propios. En producción, Tailwind purga automáticamente las clases no utilizadas, generando un archivo CSS mínimo (~3-10KB).

## When to Use
- **Diseño rápido de interfaces personalizadas:** Cuando necesitas construir una UI desde cero con diseño propio, sin las limitaciones de componentes predefinidos como los de Bootstrap. Tailwind te da libertad total con clases atómicas.
- **Equipos que necesitan consistencia visual:** Ideal para equipos de desarrollo donde varios programadores trabajan en el mismo frontend. Las clases utilitarias y el archivo de configuración centralizado garantizan consistencia sin un sistema de diseño complejo.
- **Prototipado veloz con responsive incorporado:** Perfecto para crear prototipos funcionales en minutos. Los prefijos responsive (`sm:`, `md:`, `lg:`, `xl:`) permiten adaptar cualquier propiedad a distintos tamaños de pantalla sin media queries manuales.

## Examples
### Tarjeta de producto responsiva
```
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="producto.jpg" alt="Producto">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Categoría</div>
      <h2 class="block mt-1 text-lg font-medium text-black">Nombre del producto</h2>
      <p class="mt-2 text-gray-500">Descripción breve del producto con sus características principales.</p>
    </div>
  </div>
</div>
tput: "Una tarjeta que en móvil muestra la imagen arriba y el texto abajo, y en desktop los muestra lado a lado con la imagen a la izquierda."
```

### Botón con variantes y estados
```
<button class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg 
               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
               disabled:opacity-50 disabled:cursor-not-allowed 
               dark:bg-blue-500 dark:hover:bg-blue-400">
  Enviar
</button>
tput: "Un botón azul con efectos hover, anillo de enfoque para accesibilidad, estado deshabilitado atenuado y soporte para modo oscuro."
```

## Tips
- Usa el plugin oficial de Prettier para ordenar automáticamente las clases de Tailwind y mantener la consistencia en el equipo.
- Extrae componentes reutilizables en tu framework (React, Vue, etc.) en lugar de repetir largas cadenas de clases manualmente.
- Aprovecha la directiva `@apply` en tu CSS para crear clases compuestas cuando un conjunto de utilidades se repite con frecuencia.
- Habilita el modo oscuro con la variante `dark:` y la configuración `darkMode: 'class'` para ofrecer una experiencia completa a tus usuarios.
- Consulta la documentación oficial de Tailwind CSS; es una de las mejores documentaciones del ecosistema frontend con ejemplos interactivos y búsqueda rápida.

## FAQ
- **¿Tailwind CSS hace que el HTML sea muy verboso?** Sí, las clases utilitarias pueden alargar el HTML. La solución recomendada es extraer componentes reutilizables en tu framework (React, Vue, Svelte) o usar `@apply` en tu CSS para agrupar clases repetitivas.
- **¿Puedo usar Tailwind con Bootstrap u otro framework CSS?** No es recomendable mezclar frameworks utilitarios con frameworks de componentes. Tailwind está diseñado para reemplazar completamente tu CSS. Si necesitas componentes predefinidos, usa Tailwind UI o bibliotecas como DaisyUI.
- **¿Cómo personalizo los colores, fuentes o breakpoints?** Edita el archivo `tailwind.config.js` (o `@theme` en Tailwind v4). Allí puedes extender o reemplazar la paleta de colores, fuentes, espaciados, breakpoints y cualquier token de diseño del framework.
- **¿Qué tan grande es el CSS final en producción?** Gracias al purgado automático, el archivo CSS comprimido suele pesar entre 3KB y 10KB. Solo se incluyen las clases que realmente usas en tu código, sin estilos innecesarios.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://tailwindcss.com
- **Source Code Issues:** Check the repository at https://github.com/tailwindlabs/tailwindcss for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
