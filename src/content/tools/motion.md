---
name: Motion
description: Biblioteca de animaciones moderna para React con API declarativa, layout animations y gesture support.
category: frontend
tags: [animacion, react, motion, ui, javascript, typescript]
officialSite: https://motion.dev
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web"]
featured: false
features:
  - API declarativa de animaciones para React
  - Layout animations con FLIP automático
  - Gesture support (drag, hover, tap, pan)
  - Animated presence para entradas y salidas de elementos
  - Scroll-driven animations integradas
  - Motion values para animaciones performantes
  - Soporte para Server Components sin hidratación
alternatives: [gsap, framer-motion]
relatedTools: [react, next-js, remix, tailwind-css]
howToUse:
  - step: 1
    title: "Instalar Motion en tu proyecto React"
    description: "Ejecuta `npm install motion` (sucesor de framer-motion). Importa `motion` en tu componente. Reemplaza elementos HTML estáticos con su equivalente `motion`: `<motion.div>`, `<motion.button>`, `<motion.span>`, etc."
  - step: 2
    title: "Crear animaciones básicas con la prop animate"
    description: "Define el estado animado del elemento con la prop `animate`. Especifica propiedades como `opacity`, `scale`, `x`, `y`, `rotate`. Configura la `transition` para controlar duración, easing y delay. Usa `initial` para el estado antes de la animación."
  - step: 3
    title: "Implementar layout animations automáticas"
    description: "Añade la prop `layout` a cualquier `<motion.div>` para animar automáticamente cambios de posición y tamaño cuando cambia el layout. Perfecto para reordenar listas, expandir tarjetas o animar entre distintos estados de un componente."
  - step: 4
    title: "Añadir gestos y animaciones basadas en scroll"
    description: "Usa `whileHover` y `whileTap` para animaciones de interacción con el mouse. Implementa `useScroll` y `useTransform` para vincular animaciones al progreso del scroll. Combina con `AnimatePresence` para animar elementos que entran y salen del DOM."
whenToUse:
  - title: "Animaciones de transición entre páginas y estados"
    description: "Cuando tu aplicación React necesita transiciones fluidas entre rutas, modales que aparecen y desaparecen, o cambios de estado visual que requieren animaciones suaves. AnimatePresence maneja el unmount con animaciones de salida automáticamente."
  - title: "Listas dinámicas con reordenamiento y animaciones de layout"
    description: "Si tienes listas, grids o galerías donde los elementos cambian de posición, se añaden o se eliminan. La prop `layout` calcula automáticamente la diferencia de posición y anima los elementos con FLIP technique."
  - title: "Scroll-driven storytelling y parallax"
    description: "Para crear sitios web con narrativa visual donde las animaciones progresan con el scroll: parallax, revelaciones graduales, indicadores de progreso, sticky elements animados o transformaciones que dependen de la posición de scroll."
examples:
  - title: "Fade in y slide up al montar"
    code: |
      import { motion } from "motion/react";

      function Tarjeta() {
        return (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="tarjeta"
          >
            <h2>Título de la tarjeta</h2>
            <p>Contenido animado al entrar en vista.</p>
          </motion.div>
        );
      }
    output: "La tarjeta aparece con un fade in y se desliza 40px hacia arriba durante 0.5 segundos con una curva de easing suave. El componente usa la nueva importación de Motion desde 'motion/react'."
  - title: "Layout animation al reordenar una lista"
    code: |
      import { motion, AnimatePresence } from "motion/react";

      function ListaAnimada({ items }) {
        return (
          <ul>
            <AnimatePresence>
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.texto}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        );
      }
    output: "Los elementos de la lista se animan suavemente al cambiar de orden. Al eliminar un elemento, se desvanece y desliza hacia la izquierda. Al añadir uno nuevo, aparece con fade in."
tips:
  - text: "Migra de `framer-motion` a `motion` importando desde `motion/react`. La nueva API es casi idéntica pero con mejor soporte para React Server Components y bundle optimizado. El paquete `motion` es el sucesor oficial."
  - text: "Usa `layout` en lugar de animar manualmente width/height. La prop `layout` calcula automáticamente la diferencia entre estados y usa FLIP para animaciones performantes que no disparan reflows costosos."
  - text: "Siempre proporciona una key única al usar `AnimatePresence`. Sin key, React no puede detectar qué elementos entran y salen del DOM, y las animaciones de exit no funcionarán correctamente."
  - text: "Usa `useMotionValue` y `useTransform` en lugar de estado de React para animaciones basadas en scroll o drag. Estas funciones actualizan valores fuera del ciclo de render de React, evitando re-renders innecesarios."
  - text: "No uses animaciones CSS tradicionales junto con Motion en el mismo elemento. Motion maneja las animaciones via JavaScript y puede entrar en conflicto con CSS transitions o animations aplicadas al mismo componente."
faq:
  - question: "¿Motion vs Framer Motion, son lo mismo?"
    answer: "Motion es el sucesor oficial de Framer Motion. El paquete `motion` unifica las APIs de animación para React, Vue y vanilla JS. Si empiezas un proyecto nuevo, usa `motion`. Si tienes un proyecto con `framer-motion`, puedes migrar gradualmente ya que la API es casi idéntica."
  - question: "¿Puedo usar Motion con Next.js App Router?"
    answer: "Sí, Motion tiene soporte de primera clase para Next.js App Router. Los componentes con `layout` funcionan en Server Components sin necesidad de 'use client', aunque las animaciones interactivas (gestos, scroll) requieren componentes del lado del cliente."
  - question: "¿Motion funciona con React Native?"
    answer: "Sí, Motion exporta bindings para React Native. La API es similar pero el rendimiento de layout animations en React Native es más limitado que en web. Para React Native puro, considera alternativas como Reanimated."
  - question: "¿Por qué mi layout animation no funciona o hace flickering?"
    answer: "El flickering suele ocurrir porque el cálculo de layout no puede medir correctamente el cambio. Asegúrate de que los elementos tengan un `layoutId` si están relacionados, evita cambios bruscos de display, y prueba añadir `transition={{ layout: { duration: 0.3 } }}` para suavizar la transición de layout."
publishedAt: 2026-06-01
---

## ¿Qué es?

Motion (sucesor de Framer Motion) es la biblioteca de animaciones estándar para React. Ofrece una API declarativa para crear animaciones, transiciones, gestos y layout animations con mínimo código y máximo rendimiento.

## ¿Para qué sirve?

Motion sirve para añadir animaciones a aplicaciones React: transiciones de página, elementos que aparecen/desaparecen, gestos como drag y hover, layout animations automáticas y animaciones basadas en scroll. Es la evolución del popular Framer Motion.

## Cuándo usarla

- Cuando construyes aplicaciones React que necesitan animaciones fluidas.
- Para transiciones de página con AnimatePresence.
- Si necesitas layout animations automáticas (reordenar listas, grids).
- Para gestos como drag, hover, tap y pan en componentes.
- Cuando usas Next.js con Server Components (Motion los soporta).

## Cuándo NO usarla

- Para animaciones complejas de SVG o canvas (GSAP es mejor).
- Si no usas React en tu proyecto.
- Para animaciones muy simples que CSS transitions pueden manejar.
- Cuando necesitas animaciones 3D avanzadas (Three.js).

## Pros

- API declarativa simple y familiar para desarrolladores React.
- Layout animations automáticas con FLIP.
- Soporte para Server Components (Next.js App Router).
- Gesture handling integrado (drag, hover, tap).
- AnimatePresence para animaciones de entrada/salida.

## Contras

- Solo funciona con React y React Native.
- Bundle size considerable (~30 KB).
- Animaciones complejas pueden requerir workarounds.
- Documentación en transición desde Framer Motion.
- Ecosistema de plugins aún en desarrollo.

## CLI

Motion es una librería JavaScript (sucesor de Framer Motion). No tiene CLI propio:

```bash
npm install motion                    # Instalar (JS/React/Vue)
npm install motion/react              # Solo React
npm install motion-v                  # Solo Vue
```
