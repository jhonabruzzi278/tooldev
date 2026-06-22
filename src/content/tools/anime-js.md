---
name: Anime.js
description: Librería de animación JavaScript ligera y potente para crear animaciones web fluidas con una API simple y expresiva.
category: frontend
tags: [animación, javascript, css, svg, dom, web, rendimiento, motion]
officialSite: https://animejs.com
github: https://github.com/juliangarnier/anime
pricing: open-source
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux, Web, React, Vue, Svelte]
verified: true
features:
  - Animación de propiedades CSS, SVG, atributos DOM y objetos JavaScript
  - Sistema de timeline para secuencias de animación complejas
  - Control granular de easing con funciones personalizables
  - Staggering nativo para animar múltiples elementos con retardo
  - Keyframes para animaciones multi-estado
  - API de controles de reproducción (play, pause, reverse, seek)
  - Motor de física con spring animations
  - Sin dependencias, solo 17KB minificado y gzipped
alternatives: [gsap, framer-motion]
relatedTools: [shader-gradient, motion-sites]
howToUse:
  - step: 1
    title: "Instala Anime.js en tu proyecto"
    description: "Ejecuta npm install animejs en tu proyecto. Para TypeScript, instala también los tipos con npm install -D @types/animejs. Alternativamente, puedes incluirlo vía CDN para proyectos sin bundler."
  - step: 2
    title: "Crea animaciones básicas con la API declarativa"
    description: "Importa anime y usa anime() pasando un objeto con targets (selector CSS, elemento DOM o array) y las propiedades a animar. Define duration, easing, delay y valores finales para cada propiedad."
  - step: 3
    title: "Construye secuencias con timelines"
    description: "Usa anime.timeline() para encadenar múltiples animaciones en secuencia. Cada .add() define un segmento con su propio target y propiedades, permitiendo orquestar animaciones complejas sincronizadas."
  - step: 4
    title: "Aplica staggering para efectos en grupo"
    description: "Usa anime.stagger() como valor de delay o propiedades para crear efectos cascada elegantes en listas, grids y colecciones de elementos. Configura dirección, grid y valores de inicio/fin del stagger."
whenToUse:
  - title: "Micro-interacciones y transiciones de UI"
    description: "Para animar botones, tooltips, menús desplegables y elementos de interfaz con transiciones suaves que mejoran la experiencia de usuario sin sobrecargar el bundle del proyecto."
  - title: "Animaciones SVG y visualizaciones de datos"
    description: "Para crear gráficos animados, iconos interactivos y visualizaciones de datos que cobran vida. Anime.js maneja paths SVG, stroke-dashoffset y morphing de formas de manera nativa."
  - title: "Landing pages con scroll animations"
    description: "Para crear páginas de marketing con elementos que se animan al hacer scroll, secuencias de entrada escalonadas y transiciones entre secciones que captan la atención del visitante."
examples:
  - title: "Animación básica con stagger en elementos de lista"
    code: |
      import anime from 'animejs';

      anime({
        targets: '.lista-item',
        translateX: [{ value: 250, duration: 800 }],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(100),
        easing: 'easeOutElastic(1, .5)'
      });
    output: "Cada elemento de la lista se desliza desde la izquierda con efecto elástico, apareciendo uno tras otro con 100ms de retardo entre cada uno."
  - title: "Timeline con secuencia de animaciones"
    code: |
      import anime from 'animejs';

      const tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      });

      tl.add({ targets: '.hero-title', opacity: [0, 1], translateY: [-30, 0] })
        .add({ targets: '.hero-subtitle', opacity: [0, 1], translateY: [-20, 0] }, '-=500')
        .add({ targets: '.hero-button', opacity: [0, 1], scale: [0.9, 1] }, '-=400');
    output: "El título, subtítulo y botón aparecen en secuencia solapada creando una entrada hero fluida y profesional."
tips:
  - text: "Usa easing 'easeOutElastic' para animaciones de entrada que necesiten personalidad y rebote, y 'easeInOutQuad' para transiciones sutiles y profesionales."
  - text: "Combina anime.stagger() con grid: [columns, rows] para crear efectos de onda en layouts de tarjetas que se propagan desde un punto específico."
  - text: "Aprovecha la propiedad autoplay: false para preparar animaciones que se disparen con eventos de scroll o interacciones del usuario sin ejecutarse inmediatamente."
  - text: "Para animaciones que se repiten, usa loop: true con direction: 'alternate' para crear efectos de respiración y pulsación suaves en elementos de UI."
faq:
  - question: "¿Anime.js es mejor que GSAP para animaciones web?"
    answer: "Depende del caso. Anime.js es más ligero (17KB vs ~80KB de GSAP) y tiene una API más simple, ideal para proyectos donde el tamaño del bundle importa. GSAP es más potente para animaciones complejas y tiene mejor soporte para scroll triggers y plugins avanzados."
  - question: "¿Puedo usar Anime.js con React?"
    answer: "Sí, aunque necesitas manejar las referencias a elementos DOM con useRef y ejecutar animaciones dentro de useEffect o useLayoutEffect. Para React, también puedes considerar wrappers comunitarios que facilitan la integración."
  - question: "¿Anime.js funciona con CSS transforms existentes?"
    answer: "Sí, Anime.js puede animar transforms individuales (translateX, rotate, scale) sin interferir con transforms CSS ya aplicados. También soporta animación de custom properties CSS para integración completa."
  - question: "¿Cuál es el impacto en rendimiento de Anime.js?"
    answer: "Anime.js es muy eficiente para animaciones web típicas. Usa requestAnimationFrame internamente y permite animar propiedades que no causan reflow (transform, opacity) para mantener 60fps. Para cientos de elementos simultáneos, considera Canvas o WebGL."
publishedAt: 2025-06-15
---

## ¿Qué es?

Anime.js es una librería de animación JavaScript ligera y versátil que permite crear animaciones web fluidas con una API declarativa e intuitiva. Desarrollada por Julian Garnier, es una de las librerías de animación más populares del ecosistema JavaScript con más de 50K estrellas en GitHub.

La librería maneja animaciones de propiedades CSS, transformaciones SVG, atributos del DOM y objetos JavaScript con un único API unificado, ofreciendo control completo sobre timing, easing y secuenciación.

## ¿Para qué sirve?

Anime.js sirve para añadir movimiento y vida a interfaces web de manera programática. Desde micro-interacciones sutiles en botones hasta secuencias de animación complejas en landing pages, la librería proporciona las herramientas para crear experiencias visuales fluidas. Es especialmente potente para animaciones SVG, efectos stagger en listas y timelines de animación coordinados.

## Cuándo usarla

- Cuando necesitas animaciones DOM/SVG ligeras sin una librería pesada como GSAP.
- Para crear micro-interacciones y transiciones de UI con control preciso de timing.
- Cuando quieres efectos stagger en listas, grids o colecciones de elementos.
- Para animaciones de entrada/salida en landing pages y portfolios.
- Cuando el tamaño del bundle es una prioridad y necesitas máximo resultado con mínimo peso.

## Cuándo NO usarla

- Para animaciones 3D complejas donde Three.js o WebGL son más apropiados.
- Cuando necesitas un sistema completo de scroll-driven animations con triggers avanzados (GSAP ScrollTrigger es mejor opción).
- Para juegos o animaciones con cientos de sprites simultáneos donde Canvas es más eficiente.
- Si tu proyecto React ya usa Framer Motion y no necesitas animaciones adicionales fuera de componentes.

## Pros

- Extremadamente ligera con solo 17KB gzipped y cero dependencias.
- API declarativa simple que reduce la curva de aprendizaje.
- Sistema de staggering poderoso y flexible para animaciones en grupo.
- Excelente documentación con ejemplos visuales interactivos.
- Soporte nativo para SVG path animation y morphing.

## Contras

- No tiene soporte nativo para scroll-driven animations.
- La integración con frameworks reactivos (React, Vue) requiere trabajo manual.
- No incluye sistema de plugins como GSAP para funcionalidades extendidas.
- Menos actualizaciones frecuentes comparado con alternativas comerciales.
- La comunidad es más pequeña que la de GSAP para resolver dudas avanzadas.
