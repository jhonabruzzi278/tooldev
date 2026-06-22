---
name: animejs
description: Librería de animación JavaScript ligera y potente para crear animaciones web fluidas con una API simple y expresiva. Úsala cuando el usuario mencione o pregunte sobre animación, javascript, css, svg.
---

# Anime.js

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** open-source
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux, Web, React, Vue, Svelte
- **Official Site:** https://animejs.com
- **GitHub:** https://github.com/juliangarnier/anime
- **Alternatives:** gsap, framer-motion

## Features
- Animación de propiedades CSS, SVG, atributos DOM y objetos JavaScript
- Sistema de timeline para secuencias de animación complejas
- Control granular de easing con funciones personalizables
- Staggering nativo para animar múltiples elementos con retardo
- Keyframes para animaciones multi-estado
- API de controles de reproducción (play, pause, reverse, seek)
- Motor de física con spring animations
- Sin dependencias, solo 17KB minificado y gzipped

## Steps
### 1. Instala Anime.js en tu proyecto
Ejecuta npm install animejs en tu proyecto. Para TypeScript, instala también los tipos con npm install -D @types/animejs. Alternativamente, puedes incluirlo vía CDN para proyectos sin bundler.

### 2. Crea animaciones básicas con la API declarativa
Importa anime y usa anime() pasando un objeto con targets (selector CSS, elemento DOM o array) y las propiedades a animar. Define duration, easing, delay y valores finales para cada propiedad.

### 3. Construye secuencias con timelines
Usa anime.timeline() para encadenar múltiples animaciones en secuencia. Cada .add() define un segmento con su propio target y propiedades, permitiendo orquestar animaciones complejas sincronizadas.

### 4. Aplica staggering para efectos en grupo
Usa anime.stagger() como valor de delay o propiedades para crear efectos cascada elegantes en listas, grids y colecciones de elementos. Configura dirección, grid y valores de inicio/fin del stagger.

## When to Use
- **Micro-interacciones y transiciones de UI:** Para animar botones, tooltips, menús desplegables y elementos de interfaz con transiciones suaves que mejoran la experiencia de usuario sin sobrecargar el bundle del proyecto.
- **Animaciones SVG y visualizaciones de datos:** Para crear gráficos animados, iconos interactivos y visualizaciones de datos que cobran vida. Anime.js maneja paths SVG, stroke-dashoffset y morphing de formas de manera nativa.
- **Landing pages con scroll animations:** Para crear páginas de marketing con elementos que se animan al hacer scroll, secuencias de entrada escalonadas y transiciones entre secciones que captan la atención del visitante.

## Examples
### Animación básica con stagger en elementos de lista
```
import anime from 'animejs';
anime({
  targets: '.lista-item',
  translateX: [{ value: 250, duration: 800 }],
  opacity: [0, 1],
  scale: [0.8, 1],
  delay: anime.stagger(100),
  easing: 'easeOutElastic(1, .5)'
});
tput: "Cada elemento de la lista se desliza desde la izquierda con efecto elástico, apareciendo uno tras otro con 100ms de retardo entre cada uno."
```

### Timeline con secuencia de animaciones
```
import anime from 'animejs';
const tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});
tl.add({ targets: '.hero-title', opacity: [0, 1], translateY: [-30, 0] })
  .add({ targets: '.hero-subtitle', opacity: [0, 1], translateY: [-20, 0] }, '-=500')
  .add({ targets: '.hero-button', opacity: [0, 1], scale: [0.9, 1] }, '-=400');
tput: "El título, subtítulo y botón aparecen en secuencia solapada creando una entrada hero fluida y profesional."
```

## Tips
- Usa easing 'easeOutElastic' para animaciones de entrada que necesiten personalidad y rebote, y 'easeInOutQuad' para transiciones sutiles y profesionales.
- Combina anime.stagger() con grid: [columns, rows] para crear efectos de onda en layouts de tarjetas que se propagan desde un punto específico.
- Aprovecha la propiedad autoplay: false para preparar animaciones que se disparen con eventos de scroll o interacciones del usuario sin ejecutarse inmediatamente.
- Para animaciones que se repiten, usa loop: true con direction: 'alternate' para crear efectos de respiración y pulsación suaves en elementos de UI.

## FAQ
- **¿Anime.js es mejor que GSAP para animaciones web?** Depende del caso. Anime.js es más ligero (17KB vs ~80KB de GSAP) y tiene una API más simple, ideal para proyectos donde el tamaño del bundle importa. GSAP es más potente para animaciones complejas y tiene mejor soporte para scroll triggers y plugins avanzados.
- **¿Puedo usar Anime.js con React?** Sí, aunque necesitas manejar las referencias a elementos DOM con useRef y ejecutar animaciones dentro de useEffect o useLayoutEffect. Para React, también puedes considerar wrappers comunitarios que facilitan la integración.
- **¿Anime.js funciona con CSS transforms existentes?** Sí, Anime.js puede animar transforms individuales (translateX, rotate, scale) sin interferir con transforms CSS ya aplicados. También soporta animación de custom properties CSS para integración completa.
- **¿Cuál es el impacto en rendimiento de Anime.js?** Anime.js es muy eficiente para animaciones web típicas. Usa requestAnimationFrame internamente y permite animar propiedades que no causan reflow (transform, opacity) para mantener 60fps. Para cientos de elementos simultáneos, considera Canvas o WebGL.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://animejs.com
- **Source Code Issues:** Check the repository at https://github.com/juliangarnier/anime for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
