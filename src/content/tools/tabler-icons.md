---
name: Tabler Icons
description: Biblioteca open source de más de 6100 iconos SVG con diseño consistente, licencia MIT y soporte para React, Vue y SVG plano.
category: diseno
tags: [iconos, svg, diseno, ui, react, open-source, mit]
officialSite: https://tabler.io/icons
github: https://github.com/tabler/tabler-icons
pricing: gratis
openSource: true
license: MIT
technicalLevel: principiante
compatibility: ["Web", React, Vue, Angular, Svelte, Figma]
featured: false
features:
  - Más de 6100 iconos SVG de alta calidad
  - Grid consistente de 24x24px con trazo de 2px
  - Estilos outline y filled disponibles
  - Licencia MIT, uso comercial permitido sin atribución
  - Paquetes oficiales para React, Vue y Svelte
  - Plugin para Figma incluido
  - Alias de iconos para retrocompatibilidad
  - Optimizados para rendimiento web
alternatives: [heroicons, lucide, phosphor-icons, feather-icons]
relatedTools: [lucide, phosphor-icons, heroicons]
howToUse:
  - step: 1
    title: "Explora los iconos en tabler.io/icons"
    description: "Navega por la colección de más de 6100 iconos organizados por categorías. Usa el buscador para encontrar iconos específicos. Cada icono muestra su nombre, categoría y variantes disponibles."
  - step: 2
    title: "Elige tu método de instalación"
    description: "Instala vía NPM: npm install @tabler/icons. Para React: npm install @tabler/icons-react. Copia el SVG directamente si prefieres no instalar nada. Todos los iconos están disponibles como SVG plano."
  - step: 3
    title: "Importa y usa el icono en tu proyecto"
    description: "Importa el icono específico: import { IconHeart } from '@tabler/icons-react'. Úsalo como componente JSX: <IconHeart size={24} />. Personaliza tamaño, color y trazo mediante props."
  - step: 4
    title: "Personaliza el estilo"
    description: "Los iconos heredan color via CSS (stroke: currentColor). Cambia el tamaño con size, el grosor con strokeWidth. Usa className para aplicar estilos de Tailwind u otros frameworks."
whenToUse:
  - title: "Interfaces de usuario con iconos consistentes"
    description: "Cuando necesitas una biblioteca completa de iconos con un estilo visual unificado. Tabler Icons mantiene coherencia en grosor de trazo, proporciones y estilo en todos sus más de 6100 iconos."
  - title: "Proyectos comerciales con licencia permisiva"
    description: "Para productos comerciales donde necesitas iconos sin restricciones de atribución. La licencia MIT permite uso en proyectos privados, comerciales y open source sin requerir créditos."
  - title: "Aplicaciones React con iconos como componentes"
    description: "Cuando trabajas con React y quieres iconos como componentes tipados. El paquete @tabler/icons-react exporta cada icono como un componente SVG con props de TypeScript."
examples:
  - title: "Uso básico en React con Tailwind"
    code: |
      import { IconHeart, IconShare, IconDownload } from '@tabler/icons-react'

      function Toolbar() {
        return (
          <div class="flex gap-2">
            <IconHeart size={20} class="text-red-500" />
            <IconShare size={20} class="text-gray-500" />
            <IconDownload size={20} class="text-blue-500" />
          </div>
        )
      }
    output: "Tres iconos con diferentes colores usando Tailwind CSS. Los iconos heredan el color a través de la clase text-* que aplica color a currentColor del SVG."
  - title: "Icono como SVG inline sin framework"
    code: |
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-star"
        width="24" height="24" viewBox="0 0 24 24"
        stroke-width="2" stroke="currentColor"
        fill="none" stroke-linecap="round" stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1.002l3.086 -6.253l3.086 6.253l6.9 1.002l-5 4.867l1.179 6.873z" />
      </svg>
    output: "El SVG del icono estrella se puede copiar directamente y pegar en HTML. Cambia stroke, width y height con CSS o atributos para personalizarlo sin JavaScript."
tips:
  - text: "Usa @tabler/icons-react para proyectos React: los iconos son componentes tipados y tree-shakeables, solo se incluye en el bundle lo que usas."
  - text: "Los iconos usan stroke: currentColor por defecto. Cambia el color envolviéndolos en un elemento con la clase text-* de Tailwind o la propiedad color de CSS."
  - text: "Ajusta strokeWidth para variar el grosor del trazo. Valores de 1.5 a 2.5 funcionan bien. Valores más altos dan aspecto más bold, más bajos más delicado."
  - text: "Tabler Icons tiene un plugin de Figma oficial. Úsalo para prototipar diseños con los mismos iconos que luego implementarás en código."
  - text: "Si solo necesitas unos pocos iconos, copia el SVG directamente. No necesitas instalar ningún paquete para usar los iconos en HTML plano."
faq:
  - question: "¿Tabler Icons es gratuito para uso comercial?"
    answer: "Sí, todos los iconos tienen licencia MIT. Puedes usarlos en proyectos comerciales, personales y open source sin necesidad de atribución."
  - question: "¿Cuántos iconos tiene Tabler Icons?"
    answer: "Más de 6100 iconos en constante crecimiento. Se actualizan regularmente con nuevos iconos basados en solicitudes de la comunidad."
  - question: "¿Hay diferencia entre outline y filled?"
    answer: "Sí, los iconos outline tienen trazo (stroke) y los filled están rellenos. No todos los iconos tienen versión filled. La versión outline es la principal y más completa."
  - question: "¿Tiene plugin para Figma?"
    answer: "Sí, hay un plugin oficial de Figma que permite buscar, insertar y personalizar iconos directamente en tus diseños."
publishedAt: 2026-06-03
---

## ¿Qué es?

Tabler Icons es una biblioteca open source de más de 6100 iconos SVG con diseño consistente. Cada icono está dibujado sobre un grid de 24x24px con trazo de 2px, garantizando coherencia visual en toda la colección.

## ¿Para qué sirve?

Tabler Icons sirve para añadir iconografía de alta calidad a interfaces web y móviles. Es útil en botones, navegación, formularios, barras de herramientas y cualquier elemento UI que requiera comunicación visual.

## Cuándo usarla

- Cuando necesitas una biblioteca completa de iconos con estilo unificado.
- Para proyectos React que se benefician de iconos como componentes.
- En productos comerciales donde necesitas licencia permisiva (MIT).
- Para mantener consistencia visual en toda una aplicación.

## Cuándo NO usarla

- Si necesitas iconos con múltiples variantes de estilo (solo tiene outline y filled limitado).
- Para iconografía muy específica de marca (mejor crear iconos personalizados).
