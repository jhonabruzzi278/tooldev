---
name: storybook
description: Taller frontend para desarrollar, documentar y testear componentes UI de forma aislada con hot-reload. Úsala cuando el usuario mencione o pregunte sobre componentes, ui, documentacion, testing.
---

# Storybook

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web
- **Official Site:** https://storybook.js.org
- **GitHub:** https://github.com/storybookjs/storybook

## Features
- Desarrollo aislado de componentes con hot-reload
- Documentación visual automática con MDX
- Testing visual, de accesibilidad e interacción
- Addons para diseño, testing, docs y más
- Compatible con React, Vue, Svelte, Angular y más
- Chromatic para revisión visual en equipo
- Composition para integrar múltiples Storybooks

## Steps
### 1. Instalar Storybook en tu proyecto
Ejecuta npx storybook@latest init en la raíz de tu proyecto frontend. El CLI detectará automáticamente tu framework (React, Vue, Svelte, etc.) y configurará todo.

### 2. Escribir historias para componentes
Crea archivos .stories.{js,ts,tsx} junto a cada componente definiendo sus variantes visuales, estados (loading, empty, error) y casos de borde.

### 3. Agregar addons para testing
Instala addons como @storybook/addon-a11y para testing de accesibilidad y @storybook/addon-interactions para testing de interacciones del usuario.

### 4. Publicar y compartir el catálogo
Despliega tu Storybook con Chromatic o en un servidor estático para compartir un catálogo de componentes vivo con diseñadores, PMs y stakeholders.

## When to Use
- **Construir un sistema de diseño:** Cuando tu equipo necesita documentar, testear y compartir una librería de componentes reutilizables con ejemplos visuales y documentación MDX.
- **Testing visual de regresiones:** Para detectar cambios visuales no intencionados entre versiones de componentes, especialmente útil en equipos con múltiples desarrolladores.
- **Desarrollo aislado de componentes:** Cuando necesitas desarrollar y depurar componentes complejos sin tener que navegar por toda la aplicación para llegar al estado que quieres probar.

## Examples
### Historia básica de un botón
```
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
tput: "Storybook muestra el botón en sus variantes Primary y Disabled con documentación visual interactiva."
```

## Tips
- Organiza las historias por carpetas que reflejen la estructura de componentes de tu proyecto para facilitar la navegación en el catálogo.
- Usa args y argTypes para documentar las props de cada componente y permitir que los visitantes del Storybook interactúen con los controles.
- Configura a11y addon desde el principio para detectar problemas de accesibilidad en cada componente durante el desarrollo.
- Integra Chromatic en tu pipeline de CI/CD para revisiones visuales automáticas en cada pull request y detectar regresiones antes de mergear.
- Escribe historias para estados edge case (carga, error, vacío, textos largos) para garantizar que los componentes manejan todos los escenarios.

## FAQ
- **¿Qué frameworks soporta Storybook?** React, Vue 3, Angular, Svelte, Web Components, Ember, HTML, Preact, Qwik y Solid. También soporta Next.js, Nuxt y SvelteKit con configuración adicional.
- **¿Storybook es gratuito?** Sí, Storybook es completamente gratuito y open source (MIT). Chromatic, el servicio de revisión visual, tiene un plan gratuito generoso con 5,000 snapshots por mes.
- **¿Cuánto ralentiza Storybook el desarrollo?** La configuración inicial toma unos minutos. Una vez configurado, escribir historias para componentes nuevos es rápido. El retorno en detección temprana de bugs y documentación viva compensa ampliamente la inversión.
- **¿Puedo integrar Storybook con Figma?** Sí, el addon @storybook/addon-designs permite embeber diseños de Figma junto a las historias, mostrando el diseño original y el componente implementado lado a lado.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://storybook.js.org
- **Source Code Issues:** Check the repository at https://github.com/storybookjs/storybook for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
