---
name: Storybook
description: Taller frontend para desarrollar, documentar y testear componentes UI de forma aislada con hot-reload.
category: frontend
tags: [componentes, ui, documentacion, testing, frontend, design-system]
officialSite: https://storybook.js.org
github: https://github.com/storybookjs/storybook
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Web]
featured: false
verified: true
screenshots:
  - /screenshots/storybook.webp
features:
  - Desarrollo aislado de componentes con hot-reload
  - Documentación visual automática con MDX
  - Testing visual, de accesibilidad e interacción
  - Addons para diseño, testing, docs y más
  - Compatible con React, Vue, Svelte, Angular y más
  - Chromatic para revisión visual en equipo
  - Composition para integrar múltiples Storybooks
alternatives: []
relatedTools: [vue, next-js, svelte, tailwind-css]
howToUse:
  - step: 1
    title: "Instalar Storybook en tu proyecto"
    description: "Ejecuta npx storybook@latest init en la raíz de tu proyecto frontend. El CLI detectará automáticamente tu framework (React, Vue, Svelte, etc.) y configurará todo."
  - step: 2
    title: "Escribir historias para componentes"
    description: "Crea archivos .stories.{js,ts,tsx} junto a cada componente definiendo sus variantes visuales, estados (loading, empty, error) y casos de borde."
  - step: 3
    title: "Agregar addons para testing"
    description: "Instala addons como @storybook/addon-a11y para testing de accesibilidad y @storybook/addon-interactions para testing de interacciones del usuario."
  - step: 4
    title: "Publicar y compartir el catálogo"
    description: "Despliega tu Storybook con Chromatic o en un servidor estático para compartir un catálogo de componentes vivo con diseñadores, PMs y stakeholders."
whenToUse:
  - title: "Construir un sistema de diseño"
    description: "Cuando tu equipo necesita documentar, testear y compartir una librería de componentes reutilizables con ejemplos visuales y documentación MDX."
  - title: "Testing visual de regresiones"
    description: "Para detectar cambios visuales no intencionados entre versiones de componentes, especialmente útil en equipos con múltiples desarrolladores."
  - title: "Desarrollo aislado de componentes"
    description: "Cuando necesitas desarrollar y depurar componentes complejos sin tener que navegar por toda la aplicación para llegar al estado que quieres probar."
examples:
  - title: "Historia básica de un botón"
    code: |
      import type { Meta, StoryObj } from '@storybook/react';
      import { Button } from './Button';
      const meta: Meta<typeof Button> = {
        component: Button,
        args: { label: 'Click me' },
      };
      export default meta;
      type Story = StoryObj<typeof Button>;
      export const Primary: Story = { args: { variant: 'primary' } };
      export const Disabled: Story = { args: { disabled: true } };
    output: "Storybook muestra el botón en sus variantes Primary y Disabled con documentación visual interactiva."
tips:
  - text: "Organiza las historias por carpetas que reflejen la estructura de componentes de tu proyecto para facilitar la navegación en el catálogo."
  - text: "Usa args y argTypes para documentar las props de cada componente y permitir que los visitantes del Storybook interactúen con los controles."
  - text: "Configura a11y addon desde el principio para detectar problemas de accesibilidad en cada componente durante el desarrollo."
  - text: "Integra Chromatic en tu pipeline de CI/CD para revisiones visuales automáticas en cada pull request y detectar regresiones antes de mergear."
  - text: "Escribe historias para estados edge case (carga, error, vacío, textos largos) para garantizar que los componentes manejan todos los escenarios."
faq:
  - question: "¿Qué frameworks soporta Storybook?"
    answer: "React, Vue 3, Angular, Svelte, Web Components, Ember, HTML, Preact, Qwik y Solid. También soporta Next.js, Nuxt y SvelteKit con configuración adicional."
  - question: "¿Storybook es gratuito?"
    answer: "Sí, Storybook es completamente gratuito y open source (MIT). Chromatic, el servicio de revisión visual, tiene un plan gratuito generoso con 5,000 snapshots por mes."
  - question: "¿Cuánto ralentiza Storybook el desarrollo?"
    answer: "La configuración inicial toma unos minutos. Una vez configurado, escribir historias para componentes nuevos es rápido. El retorno en detección temprana de bugs y documentación viva compensa ampliamente la inversión."
  - question: "¿Puedo integrar Storybook con Figma?"
    answer: "Sí, el addon @storybook/addon-designs permite embeber diseños de Figma junto a las historias, mostrando el diseño original y el componente implementado lado a lado."
publishedAt: 2026-06-01
---

## ¿Qué es?

Storybook es un taller frontend que permite desarrollar componentes UI de forma aislada, con hot-reload, documentación automática y testing visual. Es el estándar de la industria para construir sistemas de diseño y librerías de componentes.

## ¿Para qué sirve?

Storybook sirve para desarrollar componentes sin depender de la aplicación completa, documentarlos visualmente con historias, testearlos en diferentes estados y variantes, y compartir un catálogo vivo con todo el equipo.

## Cuándo usarla

- Cuando construyes un sistema de diseño o librería de componentes.
- Para documentar componentes visualmente con ejemplos interactivos.
- Si necesitas testing visual para detectar regresiones.
- Cuando trabajas en equipo y necesitas un catálogo de componentes compartido.
- Para desarrollar componentes de forma aislada y productiva.

## Cuándo NO usarla

- Para proyectos muy pequeños con pocos componentes.
- Cuando el tiempo de configuración inicial no se justifica.
- Si tu equipo no tiene disciplina de componentes atómicos.
- Para aplicaciones sin interfaz de usuario (APIs, CLIs).

## Pros

- Desarrollo aislado sin necesidad de levantar toda la app.
- Documentación viva que siempre está actualizada.
- Testing visual, accesibilidad e interacción integrados.
- Múltiples addons para extender funcionalidades.
- Compatible con los principales frameworks frontend.

## Contras

- Configuración inicial puede ser compleja.
- Mantenimiento continuo de historias requiere disciplina.
- Build lento en proyectos grandes con muchas historias.
- Dependencia de Chromatic para features visuales avanzadas.
- Curva de aprendizaje para addons y configuraciones avanzadas.
