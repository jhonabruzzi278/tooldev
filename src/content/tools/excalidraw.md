---
name: Excalidraw
description: Pizarra virtual colaborativa para diagramas técnicos con estilo hand-draw, cifrado end-to-end y offline.
category: diseno
tags: ["whiteboard", diagram, collaboration, drawing, open-source, design]
officialSite: https://excalidraw.com
pricing: gratis
openSource: true
license: MIT
technicalLevel: principiante
compatibility: ["Web"]
featured: false
features:
  - Dibujo hand-draw con apariencia natural y profesional
  - Colaboración en tiempo real con cifrado end-to-end
  - Biblioteca de shapes y componentes técnicos
  - Exportación a PNG, SVG y código embed
  - Funciona offline con Progressive Web App
  - Integración con herramientas de desarrollo (VS Code, Obsidian)
  - Modo oscuro y temas personalizables
alternatives: [figma, drawio, miro]
relatedTools: [obsidian, visual-studio-code, figma, framer]
howToUse:
  - step: 1
    title: "Abrir Excalidraw en el navegador"
    description: "Navega a excalidraw.com para usar la versión web sin registro ni instalación. La herramienta carga instantáneamente y puedes empezar a dibujar de inmediato usando el lienzo en blanco."
  - step: 2
    title: "Crear diagramas con la barra de herramientas"
    description: "Usa las herramientas de la barra lateral: rectángulos, círculos, flechas, líneas y texto. Selecciona formas, arrastra al lienzo y ajusta colores, bordes y opacidad desde el panel de propiedades."
  - step: 3
    title: "Colaborar en tiempo real"
    description: "Comparte el enlace de la sesión con tu equipo haciendo clic en el botón de colaboración. Todos los participantes pueden dibujar simultáneamente con cifrado end-to-end, sin necesidad de crear cuentas."
  - step: 4
    title: "Exportar e integrar diagramas"
    description: "Exporta tus diagramas como PNG, SVG o copia el código embed. Usa la integración con VS Code (extensión Excalidraw) o con Obsidian (plugin Excalidraw) para insertar diagramas directamente en tu documentación."
whenToUse:
  - title: "Diagramas técnicos para documentación"
    description: "Crea diagramas de arquitectura de software, flujos de datos, diagramas de secuencia y mapas mentales para documentar sistemas y comunicar decisiones técnicas al equipo."
  - title: "Wireframes y prototipos visuales rápidos"
    description: "Boceta interfaces de usuario, flujos de pantalla y wireframes de baja fidelidad durante sesiones de diseño. El estilo hand-draw comunica claramente que son borradores, no diseños finales."
  - title: "Sesiones colaborativas de brainstorming"
    description: "Facilita sesiones remotas de diseño y planificación donde múltiples participantes dibujan simultáneamente en el mismo lienzo. El cifrado end-to-end protege la privacidad de las ideas del equipo."
examples:
  - title: "Integración en aplicación React"
    code: |
      import { Excalidraw } from "@excalidraw/excalidraw"

      function Whiteboard() {
        return (
          <div style={{ height: "100vh" }}>
            <Excalidraw />
          </div>
        )
      }
    output: "Renderiza un lienzo completo de Excalidraw dentro de tu aplicación React, con todas las funcionalidades de dibujo, colaboración y exportación disponibles."
  - title: "Exportar diagrama como SVG desde código"
    code: |
      import { exportToSvg } from "@excalidraw/excalidraw"

      const elementos = [...] // Array de ExcalidrawElements
      const svg = await exportToSvg({
        elements: elementos,
        appState: { exportBackground: true },
        files: null,
      })
      console.log(svg.outerHTML)
    output: "Genera un string SVG a partir de los elementos del diagrama, que puedes guardar como archivo, incrustar en HTML o enviar a un servidor para almacenamiento."
tips:
  - text: "Usa la biblioteca de componentes pre-diseñados para insertar rápidamente íconos, formas de arquitectura y elementos comunes sin dibujar desde cero."
  - text: "Agrupa elementos relacionados (Ctrl+G) para moverlos como una unidad y mantener la organización en diagramas complejos."
  - text: "Aprovecha el modo offline de la PWA instalando Excalidraw como aplicación en tu dispositivo para dibujar sin conexión a internet."
  - text: "Usa el plugin de Obsidian para crear diagramas directamente vinculados a tus notas técnicas, manteniendo documentación y diagramas en un solo lugar."
  - text: "Exporta los diagramas como archivos .excalidraw para guardarlos localmente y reabrirlos después; el formato JSON es legible y versionable en Git."
faq:
  - question: "¿Excalidraw es realmente gratuito?"
    answer: "Sí, completamente gratuito y open-source bajo licencia MIT. No tiene planes de pago ni funcionalidades premium. El proyecto se financia con donaciones y patrocinadores."
  - question: "¿Mis diagramas se almacenan en servidores?"
    answer: "Los diagramas se almacenan localmente en el navegador (localStorage) y no se envían a servidores. La colaboración usa cifrado end-to-end; el servidor solo retransmite datos cifrados entre participantes."
  - question: "¿Puedo usar Excalidraw sin conexión a internet?"
    answer: "Sí, instala la PWA desde el navegador (botón de instalar en la barra de direcciones) y Excalidraw funcionará completamente offline. La colaboración en tiempo real sí requiere conexión."
  - question: "¿Cómo importo diagramas de Draw.io o Visio?"
    answer: "Excalidraw no soporta importación directa de estos formatos. Debes exportar como SVG desde Draw.io/Visio e importarlo manualmente, aunque perderás la capacidad de editar elementos individuales."
publishedAt: 2026-06-01
---

## ¿Qué es?

Excalidraw es una pizarra virtual open-source para crear diagramas técnicos con un estilo hand-draw único. Está diseñada para la colaboración en tiempo real con cifrado end-to-end, y funciona completamente en el navegador sin necesidad de registro.

## ¿Para qué sirve?

Excalidraw sirve para crear diagramas de arquitectura, wireframes, mapas mentales, diagramas de flujo y cualquier tipo de dibujo técnico colaborativo. Es ideal para documentación técnica, sprints de diseño y comunicación visual en equipos.

## Cuándo usarla

- Cuando necesitas diagramas rápidos para documentación técnica.
- Para sesiones de diseño colaborativo en tiempo real.
- Si quieres wireframes con estilo hand-draw para presentaciones.
- Para integración con Obsidian (notas técnicas con diagramas).
- Cuando necesitas cifrado end-to-end en diagramas compartidos.

## Cuándo NO usarla

- Para diseño UI/UX de alta fidelidad (Figma es mejor).
- Cuando necesitas diagramas UML complejos con validación.
- Para presentaciones formales que requieren estilo corporativo.
- Si necesitas versionamiento y control de cambios avanzado.

## Pros

- Open-source y gratuito sin límites.
- Colaboración en tiempo real con cifrado E2E.
- Estilo hand-draw único y profesional.
- Exportación a PNG, SVG y embed.
- Integración con Obsidian y VS Code.

## Contras

- Sin versionamiento de documentos.
- Funcionalidad offline limitada en PWA.
- Menos features que herramientas de pago (Miro, FigJam).
- Sin aplicación de escritorio nativa.

## CLI

Excalidraw no tiene CLI. Se usa via web o integración con librerías npm:

```bash
npm install @excalidraw/excalidraw   # Integrar en apps React
# Uso web: https://excalidraw.com (sin instalación)
```
