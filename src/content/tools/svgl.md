---
name: SVGL
description: Biblioteca de logos SVG de tecnologías y empresas populares, con API REST, categorización y soporte para modo claro/oscuro.
category: diseno
tags: [logos, svg, iconos, marcas, diseño, api, open-source]
officialSite: https://svgl.app
github: https://github.com/pheralb/svgl
pricing: gratis
openSource: true
license: MIT
technicalLevel: principiante
compatibility: ["Web", Figma, "VS Code", "React"]
featured: false
verified: true
features:
  - Más de 650 logos SVG de tecnologías y empresas populares
  - API RESTful para acceso programático a todos los logos
  - Categorización por tipo (Framework, Database, Language, etc.)
  - Variantes claro/oscuro para muchos logos
  - Plugin para Figma y extensión para VS Code
  - Paquete React oficial (@svgl/react)
  - Búsqueda y filtrado por categoría
  - Interfaz web limpia con Tailwind CSS
alternatives: [simple-icons, devicons, iconify]
relatedTools: [tabler-icons, simple-icons, lucide]
howToUse:
  - step: 1
    title: "Explora los logos en svgl.app"
    description: "Visita svgl.app y navega por más de 650 logos organizados por categorías: AI, Database, Framework, Language, Design, etc. Usa el buscador para encontrar un logo específico por nombre."
  - step: 2
    title: "Descarga un logo individual"
    description: "Haz clic en cualquier logo para verlo en detalle. Puedes copiar el SVG directamente o descargarlo. Muchos logos tienen variantes light y dark para adaptarse a tu tema."
  - step: 3
    title: "Usa la API REST"
    description: "Obtén todos los logos via API: GET https://svgl.app/api. Filtra por categoría: GET https://svgl.app/api/category/framework. La API devuelve metadatos completos incluyendo rutas de SVG, categoría y URL oficial."
  - step: 4
    title: "Integra en tu proyecto con @svgl/react"
    description: "Instala npm install @svgl/react. Importa <SvgIcon name='react' /> para renderizar logos como componentes React con soporte de tema claro/oscuro automático."
whenToUse:
  - title: "Páginas de tecnologías y stack técnico"
    description: "Cuando necesitas mostrar logos de tecnologías en landing pages, portafolios o documentación técnica. SVGL proporciona logos limpios y profesionales de cientos de tecnologías."
  - title: "APIs y aplicaciones que muestran logos dinámicamente"
    description: "Para aplicaciones que necesitan mostrar logos de herramientas de forma dinámica. La API REST permite obtener logos por nombre o categoría sin tener que almacenarlos localmente."
  - title: "Dashboards y páginas de comparación de herramientas"
    description: "Cuando construyes páginas que comparan herramientas o tecnologías y necesitas sus logos. La categorización facilita agrupar por tipo (bases de datos, frameworks, lenguajes)."
examples:
  - title: "Obtener logos via API REST"
    code: |
      // Obtener todos los logos de bases de datos
      const response = await fetch('https://svgl.app/api/category/database')
      const logos = await response.json()

      logos.forEach(logo => {
        console.log(logo.title) // "PostgreSQL", "MongoDB", "Redis"...
        console.log(logo.route) // "/library/postgresql.svg"
      })
    output: "La API devuelve un array con todos los logos de la categoría database, incluyendo título, ruta del SVG, URL oficial y si tiene variante wordmark."
  - title: "Usar @svgl/react con modo claro/oscuro"
    code: |
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
    output: "Los logos se renderizan como SVGs inline. Si el logo tiene variante dark, se muestra automáticamente en modo oscuro. El tamaño se controla via prop size."
tips:
  - text: "Muchos logos tienen variantes light y dark. SVGL selecciona automáticamente la variante según el tema del sistema si usas el paquete React."
  - text: "Usa la API con filtro de categoría para reducir el payload: /api/category/framework solo devuelve frameworks, no toda la biblioteca."
  - text: "Los SVGs se pueden optimizar con SVGOMG antes de usarlos en producción para eliminar metadatos innecesarios."
  - text: "Si contribuyes con un logo nuevo, asegúrate de tener permiso de uso y optimiza el SVG a menos de 21KB."
  - text: "La extensión de VS Code permite insertar logos directamente desde el editor sin abrir el navegador."
faq:
  - question: "¿Puedo usar los logos en proyectos comerciales?"
    answer: "Los logos son marcas registradas de sus respectivas empresas. SVGL proporciona acceso a los SVGs pero debes respetar las guías de marca de cada empresa. No incluye una licencia para usar los logos comercialmente."
  - question: "¿Cómo puedo contribuir con un logo?"
    answer: "Haz un fork del repositorio, agrega el SVG optimizado a static/library/ y añade la metadata en src/data/svgs.ts. Luego abre un Pull Request."
  - question: "¿SVGL tiene API gratuita?"
    answer: "Sí, la API REST es completamente gratuita. Usa Upstash Redis para rate-limiting. No requiere API key para consultas básicas."
  - question: "¿Hay plugin para Figma?"
    answer: "Sí, hay un plugin comunitario de Figma que permite buscar e insertar logos directamente en tus diseños."
publishedAt: 2026-06-03
---

## ¿Qué es?

SVGL es una biblioteca open source de logos SVG de tecnologías, frameworks, lenguajes y empresas populares. Construida con SvelteKit y Tailwind CSS, incluye una API REST, plugins para Figma y VS Code, y variantes de tema claro/oscuro.

## ¿Para qué sirve?

SVGL sirve para obtener y mostrar logos de tecnologías en proyectos web, documentación, dashboards y portafolios. Es útil para desarrolladores y diseñadores que necesitan logos de herramientas sin tener que buscarlos individualmente.

## Cuándo usarla

- Para mostrar logos de tecnologías en landing pages o documentación.
- Cuando necesitas acceder a logos programáticamente via API.
- Para prototipos rápidos que requieren logos de herramientas conocidas.
- En dashboards que muestran stacks tecnológicos.

## Cuándo NO usarla

- Para uso comercial de logos sin verificar las guías de marca de cada empresa.
- Si necesitas logos de empresas muy nicho que probablemente no estén incluidas.
