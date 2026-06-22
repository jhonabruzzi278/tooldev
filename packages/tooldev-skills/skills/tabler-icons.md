---
name: tabler-icons
description: Biblioteca open source de más de 6100 iconos SVG con diseño consistente, licencia MIT y soporte para React, Vue y SVG plano. Úsala cuando el usuario mencione o pregunte sobre iconos, svg, diseno, ui.
---

# Tabler Icons

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** diseno
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** principiante
- **Compatibility:** Web, React, Vue, Angular, Svelte, Figma
- **Official Site:** https://tabler.io/icons
- **GitHub:** https://github.com/tabler/tabler-icons
- **Alternatives:** heroicons, lucide, phosphor-icons, feather-icons

## Features
- Más de 6100 iconos SVG de alta calidad
- Grid consistente de 24x24px con trazo de 2px
- Estilos outline y filled disponibles
- Licencia MIT, uso comercial permitido sin atribución
- Paquetes oficiales para React, Vue y Svelte
- Plugin para Figma incluido
- Alias de iconos para retrocompatibilidad
- Optimizados para rendimiento web

## Steps
### 1. Explora los iconos en tabler.io/icons
Navega por la colección de más de 6100 iconos organizados por categorías. Usa el buscador para encontrar iconos específicos. Cada icono muestra su nombre, categoría y variantes disponibles.

### 2. Elige tu método de instalación
Instala vía NPM: npm install @tabler/icons. Para React: npm install @tabler/icons-react. Copia el SVG directamente si prefieres no instalar nada. Todos los iconos están disponibles como SVG plano.

### 3. Importa y usa el icono en tu proyecto
Importa el icono específico: import { IconHeart } from '@tabler/icons-react'. Úsalo como componente JSX: <IconHeart size={24} />. Personaliza tamaño, color y trazo mediante props.

### 4. Personaliza el estilo
Los iconos heredan color via CSS (stroke: currentColor). Cambia el tamaño con size, el grosor con strokeWidth. Usa className para aplicar estilos de Tailwind u otros frameworks.

## When to Use
- **Interfaces de usuario con iconos consistentes:** Cuando necesitas una biblioteca completa de iconos con un estilo visual unificado. Tabler Icons mantiene coherencia en grosor de trazo, proporciones y estilo en todos sus más de 6100 iconos.
- **Proyectos comerciales con licencia permisiva:** Para productos comerciales donde necesitas iconos sin restricciones de atribución. La licencia MIT permite uso en proyectos privados, comerciales y open source sin requerir créditos.
- **Aplicaciones React con iconos como componentes:** Cuando trabajas con React y quieres iconos como componentes tipados. El paquete @tabler/icons-react exporta cada icono como un componente SVG con props de TypeScript.

## Examples
### Uso básico en React con Tailwind
```
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
tput: "Tres iconos con diferentes colores usando Tailwind CSS. Los iconos heredan el color a través de la clase text-* que aplica color a currentColor del SVG."
```

### Icono como SVG inline sin framework
```
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
tput: "El SVG del icono estrella se puede copiar directamente y pegar en HTML. Cambia stroke, width y height con CSS o atributos para personalizarlo sin JavaScript."
```

## Tips
- Usa @tabler/icons-react para proyectos React: los iconos son componentes tipados y tree-shakeables, solo se incluye en el bundle lo que usas.
- Los iconos usan stroke: currentColor por defecto. Cambia el color envolviéndolos en un elemento con la clase text-* de Tailwind o la propiedad color de CSS.
- Ajusta strokeWidth para variar el grosor del trazo. Valores de 1.5 a 2.5 funcionan bien. Valores más altos dan aspecto más bold, más bajos más delicado.
- Tabler Icons tiene un plugin de Figma oficial. Úsalo para prototipar diseños con los mismos iconos que luego implementarás en código.
- Si solo necesitas unos pocos iconos, copia el SVG directamente. No necesitas instalar ningún paquete para usar los iconos en HTML plano.

## FAQ
- **¿Tabler Icons es gratuito para uso comercial?** Sí, todos los iconos tienen licencia MIT. Puedes usarlos en proyectos comerciales, personales y open source sin necesidad de atribución.
- **¿Cuántos iconos tiene Tabler Icons?** Más de 6100 iconos en constante crecimiento. Se actualizan regularmente con nuevos iconos basados en solicitudes de la comunidad.
- **¿Hay diferencia entre outline y filled?** Sí, los iconos outline tienen trazo (stroke) y los filled están rellenos. No todos los iconos tienen versión filled. La versión outline es la principal y más completa.
- **¿Tiene plugin para Figma?** Sí, hay un plugin oficial de Figma que permite buscar, insertar y personalizar iconos directamente en tus diseños.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://tabler.io/icons
- **Source Code Issues:** Check the repository at https://github.com/tabler/tabler-icons for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
