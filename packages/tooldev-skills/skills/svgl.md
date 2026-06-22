---
name: svgl
description: Biblioteca de logos SVG de tecnologías y empresas populares, con API REST, categorización y soporte para modo claro/oscuro. Úsala cuando el usuario mencione o pregunte sobre logos, svg, iconos, marcas.
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
Visita svgl.app y navega por más de 650 logos organizados por categorías: AI, Database, Framework, Language, Design, etc. Usa el buscador para encontrar un logo específico por nombre.

### 2. Descarga un logo individual
Haz clic en cualquier logo para verlo en detalle. Puedes copiar el SVG directamente o descargarlo. Muchos logos tienen variantes light y dark para adaptarse a tu tema.

### 3. Usa la API REST
Obtén todos los logos via API: GET https://svgl.app/api. Filtra por categoría: GET https://svgl.app/api/category/framework. La API devuelve metadatos completos incluyendo rutas de SVG, categoría y URL oficial.

### 4. Integra en tu proyecto con @svgl/react
Instala npm install @svgl/react. Importa <SvgIcon name='react' /> para renderizar logos como componentes React con soporte de tema claro/oscuro automático.

## When to Use
- **Páginas de tecnologías y stack técnico:** Cuando necesitas mostrar logos de tecnologías en landing pages, portafolios o documentación técnica. SVGL proporciona logos limpios y profesionales de cientos de tecnologías.
- **APIs y aplicaciones que muestran logos dinámicamente:** Para aplicaciones que necesitan mostrar logos de herramientas de forma dinámica. La API REST permite obtener logos por nombre o categoría sin tener que almacenarlos localmente.
- **Dashboards y páginas de comparación de herramientas:** Cuando construyes páginas que comparan herramientas o tecnologías y necesitas sus logos. La categorización facilita agrupar por tipo (bases de datos, frameworks, lenguajes).

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
tput: "La API devuelve un array con todos los logos de la categoría database, incluyendo título, ruta del SVG, URL oficial y si tiene variante wordmark."
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
tput: "Los logos se renderizan como SVGs inline. Si el logo tiene variante dark, se muestra automáticamente en modo oscuro. El tamaño se controla via prop size."
```

## Tips
- Muchos logos tienen variantes light y dark. SVGL selecciona automáticamente la variante según el tema del sistema si usas el paquete React.
- Usa la API con filtro de categoría para reducir el payload: /api/category/framework solo devuelve frameworks, no toda la biblioteca.
- Los SVGs se pueden optimizar con SVGOMG antes de usarlos en producción para eliminar metadatos innecesarios.
- Si contribuyes con un logo nuevo, asegúrate de tener permiso de uso y optimiza el SVG a menos de 21KB.
- La extensión de VS Code permite insertar logos directamente desde el editor sin abrir el navegador.

## FAQ
- **¿Puedo usar los logos en proyectos comerciales?** Los logos son marcas registradas de sus respectivas empresas. SVGL proporciona acceso a los SVGs pero debes respetar las guías de marca de cada empresa. No incluye una licencia para usar los logos comercialmente.
- **¿Cómo puedo contribuir con un logo?** Haz un fork del repositorio, agrega el SVG optimizado a static/library/ y añade la metadata en src/data/svgs.ts. Luego abre un Pull Request.
- **¿SVGL tiene API gratuita?** Sí, la API REST es completamente gratuita. Usa Upstash Redis para rate-limiting. No requiere API key para consultas básicas.
- **¿Hay plugin para Figma?** Sí, hay un plugin comunitario de Figma que permite buscar e insertar logos directamente en tus diseños.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://svgl.app
- **Source Code Issues:** Check the repository at https://github.com/pheralb/svgl for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
