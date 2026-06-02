---
name: LottieFiles
description: Plataforma de animaciones ligeras vectoriales Lottie para web, móvil y aplicaciones, con reproductor y editor integrado.
category: frontend
tags: [animacion, lottie, json, motion, ui, vector]
officialSite: https://lottiefiles.com
pricing: freemium
openSource: false
license: Propietaria
technicalLevel: principiante
compatibility: ["Web", "iOS", Android, React Native, Flutter]
featured: false
features:
  - Animaciones vectoriales ligeras en formato JSON (Lottie)
  - Reproductor multiplataforma (web, iOS, Android, React, Vue)
  - Biblioteca gratuita de miles de animaciones listas
  - Editor de animaciones Lottie en el navegador
  - Plugin para After Effects para exportar como Lottie
  - Optimización de tamaño de animaciones
  - Integración con Figma, Canva, Framer y Webflow
alternatives: [rive, gsap]
relatedTools: [figma, react, vue, next-js, framer]
howToUse:
  - step: 1
    title: "Encontrar una animación en la biblioteca de LottieFiles"
    description: "Explora la colección gratuita en lottiefiles.com/free-animations. Busca por categoría (loading, icons, social) o por palabra clave. Previsualiza la animación, selecciona el color y descarga el archivo JSON o .lottie."
  - step: 2
    title: "Instalar el reproductor Lottie en tu proyecto"
    description: "Ejecuta `npm install lottie-react` para React, `npm install @lottiefiles/dotlottie-web` para el formato optimizado .lottie, o incluye el CDN `<script src='lottie-player.js'>` para proyectos vanilla. Importa el componente en tu código."
  - step: 3
    title: "Implementar la animación en tu componente"
    description: "Importa el archivo JSON de la animación y pásalo al componente Lottie player. Configura `autoplay`, `loop` y `speed` según el comportamiento deseado. Usa el formato `.lottie` en lugar de `.json` para reducir el tamaño en ~30%."
  - step: 4
    title: "Personalizar colores y comportamiento"
    description: "Configura los colores del JSON si la animación lo soporta, ajusta `speed` para cambiar la velocidad, y usa `onComplete` para ejecutar código cuando la animación termine. Para interacciones, usa `hover` o `click` para controlar la reproducción."
whenToUse:
  - title: "Micro-interacciones y animaciones UI"
    description: "Cuando necesitas animaciones ligeras para botones, íconos, transiciones de estado, indicadores de carga o feedback visual en tu aplicación web o móvil que mejoren la experiencia del usuario sin sacrificar rendimiento."
  - title: "Ilustraciones animadas y motion design en marketing"
    description: "Si creas landing pages, banners animados, presentaciones o contenido de redes sociales que necesita movimiento llamativo. La biblioteca gratuita tiene miles de opciones listas para usar sin necesidad de un diseñador de motion."
  - title: "Onboarding y tutoriales interactivos"
    description: "Para guiar a nuevos usuarios con animaciones explicativas paso a paso, indicadores animados de gestos (swipe, tap) o celebraciones al completar acciones importantes dentro de la aplicación."
examples:
  - title: "Animación Lottie en React"
    code: |
      import { DotLottieReact } from '@lottiefiles/dotlottie-react';

      function LoadingScreen() {
        return (
          <DotLottieReact
            src="https://.../animacion.lottie"
            autoplay
            loop
            style={{ width: 200, height: 200 }}
          />
        );
      }
    output: "Muestra una animación de carga en bucle con reproducción automática. El formato .lottie es más pequeño que el JSON tradicional y se reproduce con mejor rendimiento."
  - title: "Animación con control de reproducción y eventos"
    code: |
      import Lottie from 'lottie-react';
      import animacion from './check-mark.json';

      function Confirmacion({ visible }) {
        return visible && (
          <Lottie
            animationData={animacion}
            loop={false}
            onComplete={() => console.log('Animación completada')}
          />
        );
      }
    output: "Reproduce una animación de check mark una sola vez cuando `visible` es true. Al completarse, ejecuta un callback que puede disparar navegación, mostrar un mensaje o cerrar un modal."
tips:
  - text: "Prefiere el formato `.lottie` sobre `.json`. Es hasta un 30% más pequeño que el JSON tradicional y se carga más rápido. Usa `@lottiefiles/dotlottie-web` o `@lottiefiles/dotlottie-react` como reproductor."
  - text: "No reproduzcas animaciones en elementos fuera de pantalla. Usa `IntersectionObserver` o la prop `autoplay={false}` con control manual para iniciar la animación solo cuando sea visible."
  - text: "Optimiza las animaciones exportadas desde After Effects. Usa el plugin Bodymovin y activa 'compress' al exportar. En LottieFiles Editor puedes eliminar capas innecesarias y reducir fotogramas clave."
  - text: "Siempre define las dimensiones del contenedor de la animación en CSS. Si no estableces width y height explícitos, la animación puede renderizarse con dimensiones incorrectas o causar layout shift."
  - text: "Prueba las animaciones en dispositivos móviles reales, no solo en el navegador desktop. Algunas animaciones complejas pueden causar jank en dispositivos de gama baja. Usa el throttle de CPU en DevTools para simular."
faq:
  - question: "¿LottieFiles vs Rive, cuál elegir?"
    answer: "LottieFiles es mejor para animaciones 'play once' sin interacción: loaders, íconos animados, ilustraciones. Rive es superior cuando necesitas interactividad (state machines, entradas de usuario, animaciones procedurales) y un editor integrado de diseño. Puedes usar ambos en el mismo proyecto."
  - question: "¿Necesito After Effects para crear animaciones Lottie?"
    answer: "Tradicionalmente sí, las animaciones se crean en After Effects y se exportan con el plugin Bodymovin. Pero LottieFiles Editor permite crear animaciones simples directamente en el navegador, y LottieFiles Creator permite solicitar animaciones a diseñadores profesionales."
  - question: "¿Las animaciones Lottie son accesibles?"
    answer: "Por defecto, las animaciones Lottie renderizan en `<canvas>` o SVG sin información semántica. Si la animación comunica información importante, debes proporcionar una alternativa textual con `aria-label` o un texto descriptivo visible."
  - question: "¿Cuánto pesa típicamente una animación Lottie?"
    answer: "Una animación simple (como un spinner) pesa entre 10-30 KB en JSON. Animaciones complejas pueden llegar a 200-500 KB. Usa el formato .lottie para reducirlo ~30% y LottieFiles Editor para optimizar eliminando capas y reduciendo fotogramas clave."
publishedAt: 2026-06-01
---

## ¿Qué es?

LottieFiles es la plataforma líder para animaciones Lottie, un formato de animación vectorial ligero basado en JSON. Ofrece un reproductor multiplataforma, una biblioteca de animaciones gratuitas premium y herramientas para crear y editar animaciones.

## ¿Para qué sirve?

LottieFiles sirve para añadir animaciones ligeras y escalables a aplicaciones web y móviles. Es ideal para micro-interacciones UI, loading states, ilustraciones animadas y motion design en producción.

## Cuándo usarla

- Cuando necesitas animaciones UI ligeras y escalables.
- Para micro-interacciones en aplicaciones web y móviles.
- Si trabajas con diseñadores que usan After Effects.
- Para animaciones que deben funcionar en múltiples plataformas.
- Cuando quieres animaciones gratuitas de una biblioteca curada.

## Cuándo NO usarla

- Para animaciones complejas con interacción (Rive o GSAP son mejores).
- Si necesitas animaciones procedurales o generativas.
- Para efectos 3D o WebGL (Three.js es mejor).
- Cuando el bundle size es ultra crítico (Lottie añade ~100KB).

## Pros

- Formato vectorial ligero y escalable.
- Biblioteca gratuita con miles de animaciones.
- Reproductor para todas las plataformas.
- Plugin de After Effects para exportación.
- Integración con Figma, Canva y Framer.

## Contras

- Animaciones estáticas (sin interacción).
- Tamaño del reproductor (~100KB).
- Animaciones complejas pueden ser pesadas en JSON.
- Dependencia de After Effects para crear animaciones.

## CLI

LottieFiles no tiene CLI propio. Las animaciones se usan via SDK:

```bash
npm install lottie-web               # Reproductor web (JS)
npm install lottie-react             # Reproductor para React
npm install @lottiefiles/dotlottie-web # Formato .lottie (más pequeño)
npm install @lottiefiles/lottie-player # Componente web
```
