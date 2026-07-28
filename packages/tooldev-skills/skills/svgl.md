---
name: svgl
description: >- Úsala cuando el usuario mencione o pregunte sobre logos, svg, iconos, marcas.
---

# SVGL

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** diseno
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** principiante
- **Compatibility:** Web, Figma, VS Code, React
- **Official Site:** https://svgl.app
- **GitHub:** https://github.com/pheralb/svgl
- **Alternatives:** simple-icons, devicons, iconify

## Features
- Más de 650 logos SVG de tecnologías y empresas populares
- API RESTful para acceso programático a todos los logos
- Categorización por tipo (Framework, Database, Language, etc.)
- Variantes claro/oscuro para muchos logos
- Plugin para Figma y extensión para VS Code
- Paquete React oficial (@svgl/react)
- Búsqueda y filtrado por categoría
- Interfaz web limpia con Tailwind CSS

## Steps
### 1. Explora los logos en svgl.app
>-

### 2. Descarga un logo individual
>-

### 3. Usa la API REST
>-

### 4. Integra en tu proyecto con @svgl/react
>-

## When to Use
- **Páginas de tecnologías y stack técnico:** >-
- **APIs y aplicaciones que muestran logos dinámicamente:** >-
- **Dashboards y páginas de comparación de herramientas:** >-

## Examples
### Obtener logos via API REST
```
// Obtener todos los logos de bases de datos
const response = await fetch('https://svgl.app/api/category/database')
const logos = await response.json()
logos.forEach(logo => {
  console.log(logo.title) // "PostgreSQL", "MongoDB", "Redis"...
  console.log(logo.route) // "/library/postgresql.svg"
})
tput: >-
La API devuelve un array con todos los logos de la categoría database,
incluyendo título, ruta del SVG, URL oficial y si tiene variante wordmark.
```

### Usar @svgl/react con modo claro/oscuro
```
import { SvgIcon } from '@svgl/react'
function TechStack() {
  return (
    <div class="flex gap-4">
      <SvgIcon name="react" size={40} />
      <SvgIcon name="typescript" size={40} />
      <SvgIcon name="tailwindcss" size={40} />
    </div>
  )
}
tput: >-
Los logos se renderizan como SVGs inline. Si el logo tiene variante dark,
se muestra automáticamente en modo oscuro. El tamaño se controla via prop
size.
```

## Tips
- >-
- >-
- >-
- >-
- >-

## FAQ
- **¿Puedo usar los logos en proyectos comerciales?** >-
- **¿Cómo puedo contribuir con un logo?** >-
- **¿SVGL tiene API gratuita?** >-
- **¿Hay plugin para Figma?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://svgl.app
- **Source Code Issues:** Check the repository at https://github.com/pheralb/svgl for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
