---
name: Rive
description: Herramienta de diseño y animación interactiva en tiempo real para interfaces, juegos y experiencias web.
category: frontend
tags: [animacion, diseño, interactivo, ui, motion, web]
officialSite: https://rive.app
pricing: freemium
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web", "iOS", Android, Flutter, React Native]
featured: false
features:
  - Animaciones vectoriales en tiempo real con state machine
  - Editor visual de animación con línea de tiempo
  - State Machine para animaciones interactivas y condicionales
  - Soporte para animación de interfaces (UI states, hovers, presses)
  - Exportación ligera con runtime optimizado
  - Runtimes nativos para web, iOS, Android, Flutter, React Native
  - Animaciones responsive que escalan sin pérdida
alternatives: [lottiefiles]
relatedTools: [figma, framer, react, next-js]
howToUse:
  - step: 1
    title: "Crear una cuenta en Rive"
    description: "Regístrate en rive.app y accede al editor visual basado en navegador para comenzar a diseñar animaciones."
  - step: 2
    title: "Diseñar y animar en el editor"
    description: "Usa el editor visual para crear gráficos vectoriales, definir animaciones en la línea de tiempo y configurar state machines que respondan a interacciones."
  - step: 3
    title: "Exportar e integrar el runtime"
    description: "Exporta el archivo .riv desde el editor e instala el runtime correspondiente en tu proyecto (npm install @rive-app/webgl2 para web)."
  - step: 4
    title: "Implementar en la aplicación"
    description: "Carga el archivo .riv en tu componente Rive y conecta las entradas de la state machine con los eventos de tu aplicación para lograr interactividad."
whenToUse:
  - title: "Animaciones UI interactivas"
    description: "Cuando necesitas que botones, tarjetas y otros elementos de interfaz respondan con animaciones a hover, clic, carga y otros estados."
  - title: "Personajes animados para juegos 2D"
    description: "Ideal para crear personajes con movimientos complejos controlados por state machines que cambian según la lógica del juego."
  - title: "Experiencias web inmersivas"
    description: "Perfecta para landing pages, hero sections y micro-interacciones que requieren animaciones vectoriales fluidas y responsivas."
examples:
  - title: "Integración básica en React"
    code: |
      import { useRive } from '@rive-app/react-canvas';
      function MiAnimacion() {
        const { RiveComponent } = useRive({
          src: 'mi-animacion.riv',
          stateMachines: 'State Machine 1',
          autoplay: true,
        });
        return <RiveComponent />;
      }
    output: "El componente renderiza la animación Rive con la state machine activa."
tips:
  - text: "Mantén las animaciones ligeras optimizando el número de curvas y keyframes en el editor visual para reducir el tamaño del archivo .riv."
  - text: "Usa state machines en lugar de animaciones lineales para crear experiencias verdaderamente interactivas que respondan a inputs del usuario."
  - text: "Aprovecha el plugin de Figma para importar diseños directamente a Rive y acelerar el flujo de trabajo entre diseño y desarrollo."
  - text: "Elige el runtime adecuado: usa @rive-app/webgl2 para máxima calidad gráfica y @rive-app/canvas para dispositivos de gama baja."
  - text: "Versiona tus archivos .riv junto con el código fuente y documenta las entradas de la state machine que espera cada animación."
faq:
  - question: "¿Rive es gratuito?"
    answer: "Rive ofrece un plan gratuito con acceso al editor completo, pero limita el número de archivos y colaboradores. Los planes Pro desbloquean features avanzadas y colaboración en equipo."
  - question: "¿Qué diferencia a Rive de Lottie?"
    answer: "Lottie reproduce animaciones lineales predefinidas, mientras que Rive permite interactividad en tiempo real mediante state machines que responden a inputs, cambios de estado y lógica de la aplicación."
  - question: "¿Puedo usar Rive en React Native?"
    answer: "Sí, Rive ofrece runtimes oficiales para React Native, Flutter, iOS y Android, permitiendo animaciones interactivas nativas en aplicaciones móviles."
  - question: "¿Necesito ser diseñador para usar Rive?"
    answer: "Para crear animaciones desde cero se recomienda tener conocimientos de diseño, pero puedes usar archivos .riv creados por diseñadores e integrarlos en tu aplicación con pocas líneas de código."
publishedAt: 2026-06-01
---

## ¿Qué es?

Rive es una herramienta de diseño y animación interactiva que permite crear animaciones vectoriales con state machines. Combina un editor visual con runtimes ligeros para producir animaciones interactivas y responsivas que se integran nativamente en aplicaciones y sitios web.

## ¿Para qué sirve?

Rive sirve para crear animaciones interactivas: desde iconos animados y transiciones UI hasta personajes de juegos y experiencias web complejas. Su state machine permite que las animaciones respondan a interacciones del usuario, cambios de estado y condiciones lógicas.

## Cuándo usarla

- Cuando necesitas animaciones interactivas que responden a inputs del usuario.
- Para diseñar UI states animados (hover, active, disabled, loading).
- Si buscas animaciones vectoriales ligeras para web o mobile.
- Para personajes y assets animados en juegos 2D.
- Cuando trabajas con Flutter o React Native.

## Cuándo NO usarla

- Para animaciones lineales simples sin interacción (Lottie o GIF son más simples).
- Si necesitas animaciones 3D (Blender o Three.js).
- Para equipos sin diseñadores que usen el editor visual.
- Cuando prefieres animaciones CSS para micro-interacciones básicas.

## Pros

- Animaciones interactivas con state machine sin código.
- Runtimes ligeros para web, iOS, Android, Flutter, React Native.
- Editor visual potente con línea de tiempo.
- Animaciones vectoriales responsive y escalables.
- Integración con Figma mediante plugin.

## Contras

- Requiere diseñador que use el editor visual.
- Animaciones complejas tienen curva de aprendizaje alta.
- Algunas features avanzadas solo en plan Pro.
- Ecosistema de plugins y assets limitado.
- Exportación requiere configuración técnica.

## CLI

Rive no tiene CLI propio. Se usa el editor visual en rive.app y los runtimes se instalan vía npm:

```bash
npm install @rive-app/webgl2          # Runtime WebGL2 para web
npm install @rive-app/canvas          # Runtime Canvas (alternativa ligera)
npm install @rive-app/react-canvas    # Runtime para React
```
