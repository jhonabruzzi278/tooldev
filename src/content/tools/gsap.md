---
name: GSAP
description: Biblioteca de animaciones JavaScript profesional de alto rendimiento para la web, compatible con todos los navegadores modernos.
category: frontend
tags: [animacion, javascript, ui, motion, web]
officialSite: https://gsap.com
pricing: freemium
openSource: false
license: Standard
technicalLevel: intermedio
compatibility: ["Web"]
featured: false
features:
  - Animaciones de alto rendimiento con 60fps estables
  - Timeline para secuencias complejas y sincronización
  - Easing personalizado y curvas bezier avanzadas
  - Animación de SVG, Canvas, WebGL y DOM
  - ScrollTrigger para animaciones basadas en scroll
  - MorphSVG para transformaciones de formas SVG
  - Plugins especializados (Text, MotionPath, Flip, Draggable)
alternatives: [motion]
relatedTools: [react, next-js, vue, svelte]
howToUse:
  - step: 1
    title: "Instalar GSAP y crear una animación básica"
    description: "Instala GSAP con `npm install gsap` y crea tu primera animación usando `gsap.to()` o `gsap.from()` especificando el elemento objetivo, las propiedades a animar y la duración."
  - step: 2
    title: "Construir secuencias con Timeline"
    description: "Crea un `gsap.timeline()` para encadenar múltiples animaciones en secuencia. Usa los parámetros de posición para controlar el timing relativo entre cada animación de la línea de tiempo."
  - step: 3
    title: "Añadir animaciones basadas en scroll"
    description: "Usa el plugin ScrollTrigger para vincular animaciones al desplazamiento de la página: revelar elementos al hacer scroll, animaciones parallax, o secuencias que avanzan conforme el usuario se desplaza."
  - step: 4
    title: "Integrar con frameworks modernos"
    description: "En React usa el hook `useGSAP()` del paquete `@gsap/react` para animaciones con limpieza automática. En Vue o Svelte, usa `gsap.context()` para gestionar el ciclo de vida y evitar memory leaks."
whenToUse:
  - title: "Animaciones web de alto rendimiento"
    description: "Cuando necesitas animaciones fluidas a 60fps en producción, especialmente para sitios creativos, portfolios, landing pages o experiencias interactivas de marca."
  - title: "Secuencias animadas complejas con sincronización"
    description: "Para coreografías de animación donde múltiples elementos deben coordinarse con timing preciso: intro animations, transiciones entre secciones o narrativas visuales."
  - title: "Animaciones basadas en scroll y parallax"
    description: "Ideal para storytelling visual donde los elementos se revelan, mueven o transforman conforme el usuario hace scroll por la página."
examples:
  - title: "Animación básica con gsap.to()"
    code: "import gsap from 'gsap';\n\ngsap.to('.box', {\n  x: 200,\n  rotation: 360,\n  duration: 2,\n  ease: 'power2.inOut'\n});"
    output: "El elemento con clase `.box` se mueve 200px a la derecha mientras rota 360 grados durante 2 segundos con una curva de easing suave."
  - title: "Timeline con ScrollTrigger"
    code: "import gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\ngsap.registerPlugin(ScrollTrigger);\n\nconst tl = gsap.timeline({\n  scrollTrigger: {\n    trigger: '.section',\n    start: 'top center',\n    end: 'bottom top',\n    scrub: true\n  }\n});\n\ntl.from('.title', { opacity: 0, y: 50 })\n  .from('.text', { opacity: 0, x: -100 }, '-=0.5')\n  .from('.image', { scale: 0.8, opacity: 0 }, '-=0.5');"
    output: "Secuencia de revelación al hacer scroll: primero aparece el título deslizándose desde abajo, luego el texto desde la izquierda y finalmente la imagen escalando, todo sincronizado con el desplazamiento."
tips:
  - text: "Usa `gsap.context()` en frameworks como React o Vue para agrupar animaciones y limpiarlas automáticamente cuando el componente se desmonta."
  - text: "Prefiere `gsap.to()` y `gsap.from()` con propiedades transform (x, y, rotation, scale) en lugar de left/top/width para aprovechar la aceleración por GPU."
  - text: "Registra los plugins al inicio del proyecto con `gsap.registerPlugin()` para evitar errores de dependencias y optimizar el tree-shaking."
  - text: "Usa los position parameters del timeline (`-=0.5`, `>`, `+=1`) para controlar con precisión cuándo comienza cada animación en relación a las demás."
  - text: "Agrupa las animaciones relacionadas en timelines en lugar de usar delays individuales; es más fácil de mantener, pausar y controlar globalmente."
faq:
  - question: "¿GSAP requiere licencia de pago?"
    answer: "GSAP es gratuito para la mayoría de usos comerciales bajo la licencia Standard. Los plugins premium (SplitText, MorphSVG, etc.) y el uso en productos que se venden a múltiples usuarios finales requieren la membresía Club GreenSock."
  - question: "¿GSAP funciona con React, Vue o Angular?"
    answer: "Sí, GSAP es framework-agnostic y funciona con cualquier framework. React tiene soporte oficial con el hook `useGSAP()` del paquete `@gsap/react`. Para otros frameworks se usa `gsap.context()`."
  - question: "¿GSAP es mejor que CSS animations?"
    answer: "GSAP ofrece más control y rendimiento que CSS animations para casos complejos: secuencias sincronizadas, control de playback (pause, reverse, seek), easing avanzado y animaciones basadas en scroll. Para transiciones simples, CSS es suficiente."
  - question: "¿Qué tamaño tiene GSAP en el bundle?"
    answer: "El core de GSAP pesa aproximadamente 30 KB minificado (10 KB gzipped). Los plugins se cargan por separado, y gracias al tree-shaking solo incluyes lo que usas en tu proyecto."
publishedAt: 2026-06-01
---

## ¿Qué es?

GSAP (GreenSock Animation Platform) es la biblioteca de animaciones JavaScript profesional más utilizada en la web. Ofrece rendimiento excepcional, control preciso de timelines y un ecosistema de plugins que cubre desde animaciones básicas hasta efectos complejos con SVG y scroll.

## ¿Para qué sirve?

GSAP sirve para crear animaciones web de cualquier complejidad: desde transiciones UI sutiles hasta secuencias animadas completas con scroll, SVG, texto y elementos interactivos. Es el estándar profesional en agencias digitales y estudios creativos.

## Cuándo usarla

- Cuando necesitas animaciones de alto rendimiento en producción.
- Para secuencias complejas con múltiples elementos sincronizados.
- Si trabajas con SVG animado o morphing de formas.
- Para animaciones basadas en scroll con ScrollTrigger.
- Cuando buscas control preciso de la línea de tiempo y easing.

## Cuándo NO usarla

- Para animaciones simples de UI (CSS transitions son suficientes).
- Si solo necesitas micro-interacciones en React (Motion o Framer Motion).
- Para proyectos que requieren animaciones 3D complejas (Three.js).
- Cuando el bundle size es crítico (GSAP con plugins puede ser pesado).

## Pros

- Rendimiento excepcional con 60fps estables.
- Timeline para control preciso de secuencias.
- ScrollTrigger integrado para scroll-based animations.
- Compatible con SVG, Canvas y elementos DOM.
- Easing avanzado y curvas bezier personalizadas.

## Contras

- Licencia Standard con restricciones comerciales en ciertos casos.
- Bundle size grande si se usan muchos plugins.
- Curva de aprendizaje para funciones avanzadas.
- No es nativo React (requiere wrappers como useGSAP).
- Algunos plugins avanzados son de pago (Club GreenSock).

## CLI

GSAP es una librería JavaScript. No tiene CLI propio, se instala vía npm:

```bash
npm install gsap                      # Instalar (todos los plugins incluidos desde Webflow acquisition)
npm install gsap@npm:@gsap/react      # Hook useGSAP para React
npm install gsap@npm:@gsap/shockingly # Plugins premium (SplitText, MorphSVG, etc.)
```
