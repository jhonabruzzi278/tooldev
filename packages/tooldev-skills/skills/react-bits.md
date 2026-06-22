---
name: react-bits
description: Colección de componentes React animados e interactivos diseñados para UIs modernas con efectos visuales atractivos y código limpio. Úsala cuando el usuario mencione o pregunte sobre react, componentes, animación, ui.
---

# React Bits

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** open-source
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** React, Next.js, Vite, TypeScript
- **Official Site:** https://reactbits.dev
- **GitHub:** https://github.com/DavidHDev/react-bits
- **Alternatives:** framer-motion, aceternity-ui

## Features
- Componentes animados listos para copiar y usar en proyectos React
- Efectos de texto como typewriter, gradient text y split animations
- Componentes de fondo con patrones, grids animados y partículas
- Botones con efectos hover, glow, magnetic y morph animations
- Cards con efectos tilt 3D, spotlight y glass morphism
- Dock navigation estilo macOS con efectos de magnificación
- Scroll-triggered animations y reveal effects
- Código TypeScript limpio sin dependencias pesadas

## Steps
### 1. Explora la colección de componentes
Visita reactbits.dev y navega por las categorías disponibles: text animations, backgrounds, buttons, cards, navigation y más. Cada componente incluye una demo interactiva en vivo.

### 2. Copia el código del componente elegido
Selecciona el componente que necesitas y copia el código TypeScript proporcionado. Cada componente es autocontenido con sus propios estilos y lógica, sin necesidad de instalar un paquete completo.

### 3. Integra y personaliza en tu proyecto
Pega el código en tu proyecto React, ajusta los props como colores, tamaños y velocidades de animación. Los componentes usan Tailwind CSS o CSS-in-JS según el efecto, facilitando la personalización.

### 4. Instala dependencias específicas si las necesita
Algunos componentes avanzados requieren librerías como framer-motion o @react-spring/web. La documentación de cada componente lista sus dependencias específicas para que instales solo lo necesario.

## When to Use
- **Portfolios y sitios personales que necesitan diferenciarse:** Para crear portfolios de desarrollador o sitios personales con efectos visuales que demuestren habilidades técnicas y creatividad, usando componentes probados como base para personalizar.
- **Landing pages de producto con interactividad moderna:** Cuando necesitas componentes hero, secciones de features con reveal animations y CTAs llamativos que capten la atención sin tener que desarrollar cada animación desde cero.
- **Dashboards y aplicaciones con micro-interacciones:** Para añadir efectos sutiles como botones magnéticos, cards con tilt 3D y navegación tipo dock que mejoran la percepción de calidad de la aplicación.

## Examples
### Componente de texto con efecto typewriter
```
import { TypewriterEffect } from './components/text/TypewriterEffect';
export function HeroTitle() {
  const words = [
    { text: "Construye" },
    { text: "interfaces" },
    { text: "increíbles", className: "text-blue-500" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words} />
    </div>
  );
}
tput: "Un título hero donde las palabras aparecen una por una con efecto de escritura, con la última palabra destacada en color azul."
```

## Tips
- Copia solo los componentes que necesitas en lugar de instalar toda la colección; esto mantiene tu bundle limpio y evita dependencias innecesarias.
- Usa los componentes de React Bits como punto de partida y personalízalos para que coincidan con tu sistema de diseño ajustando colores, tipografía y espaciado.
- Combina componentes de texto animado con fondos interactivos de la colección para crear hero sections impactantes con mínimo código custom.
- Revisa las dependencias de cada componente antes de copiarlo; algunos son zero-dependency mientras otros necesitan framer-motion o GSAP para funcionar.

## FAQ
- **¿React Bits es como shadcn/ui pero con animaciones?** Similar en filosofía (copias el código, no instalas un paquete), pero React Bits se enfoca en componentes animados e interactivos mientras shadcn/ui se centra en componentes funcionales de UI. Son complementarios.
- **¿Necesito instalar algún paquete para usar React Bits?** No hay un paquete npm de React Bits. Copias el código directamente. Algunos componentes individuales requieren dependencias como framer-motion que se indican en su documentación.
- **¿Los componentes funcionan con Next.js App Router?** Sí, la mayoría funciona directamente. Los componentes que usan hooks de animación o acceso al DOM necesitan la directiva 'use client' al inicio del archivo, lo cual se indica en la documentación de cada uno.
- **¿Puedo contribuir componentes a React Bits?** Sí, el proyecto es open-source con licencia MIT. Puedes hacer fork del repositorio, añadir tus componentes siguiendo las convenciones del proyecto y abrir un pull request para que sea revisado por la comunidad.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://reactbits.dev
- **Source Code Issues:** Check the repository at https://github.com/DavidHDev/react-bits for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
