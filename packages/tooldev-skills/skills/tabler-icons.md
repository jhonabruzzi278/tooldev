---
name: tabler-icons
description: >- Úsala cuando el usuario mencione o pregunte sobre iconos, svg, diseno, ui.
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
>-

### 2. Elige tu método de instalación
>-

### 3. Importa y usa el icono en tu proyecto
>-

### 4. Personaliza el estilo
>-

## When to Use
- **Interfaces de usuario con iconos consistentes:** >-
- **Proyectos comerciales con licencia permisiva:** >-
- **Aplicaciones React con iconos como componentes:** >-

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
tput: >-
Tres iconos con diferentes colores usando Tailwind CSS. Los iconos heredan
el color a través de la clase text-* que aplica color a currentColor del
SVG.
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
tput: >-
El SVG del icono estrella se puede copiar directamente y pegar en HTML.
Cambia stroke, width y height con CSS o atributos para personalizarlo sin
JavaScript.
```

## Tips
- >-
- >-
- >-
- >-
- >-

## FAQ
- **¿Tabler Icons es gratuito para uso comercial?** >-
- **¿Cuántos iconos tiene Tabler Icons?** >-
- **¿Hay diferencia entre outline y filled?** >-
- **¿Tiene plugin para Figma?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://tabler.io/icons
- **Source Code Issues:** Check the repository at https://github.com/tabler/tabler-icons for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
