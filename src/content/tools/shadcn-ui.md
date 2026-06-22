---
name: shadcn-ui
description: Colección de componentes UI reutilizables construidos con Radix UI y Tailwind CSS, copiables directamente al proyecto.
category: frontend
tags: [ui, components, react, tailwind-css, radix, design-system]
officialSite: https://ui.shadcn.com
github: https://github.com/shadcn-ui/ui
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web"]
featured: false
verified: true
features:
  - Componentes accesibles (WAI-ARIA) vía Radix UI
  - Estilizados con Tailwind CSS y CSS variables
  - Copia y pega en tu proyecto (no es una dependencia npm)
  - Temas personalizables con colores y estilos globales
  - Componentes headless modificables sin restricciones
  - Integración nativa con Next.js, Vite, Astro y Remix
  - CLI para añadir componentes individualmente
alternatives: [chakra-ui, radix, headless-ui, material-ui]
relatedTools: [react, tailwind-css, next-js, astro, vite]
howToUse:
  - step: 1
    title: "Inicializar en tu proyecto"
    description: "Ejecuta npx shadcn@latest init en tu proyecto React con Tailwind CSS. La CLI te guiará para configurar colores, CSS variables y la ubicación de componentes."
  - step: 2
    title: "Agregar componentes"
    description: "Usa npx shadcn@latest add <componente> para copiar componentes individuales a tu proyecto. Cada componente se almacena en components/ui/ listo para modificar."
  - step: 3
    title: "Personalizar el tema"
    description: "Edita las CSS variables en tu archivo global.css para personalizar colores, bordes, sombras y tipografía de todos los componentes de manera centralizada."
  - step: 4
    title: "Componer interfaces"
    description: "Importa y combina los componentes en tus páginas y layouts. Como el código fuente está en tu proyecto, puedes modificar cualquier componente sin restricciones."
whenToUse:
  - title: "Prototipado rápido de interfaces"
    description: "Ideal para construir MVPs y prototipos con componentes profesionales y accesibles desde el primer día, sin depender de una librería externa."
  - title: "Sistemas de diseño personalizados"
    description: "Perfecto para equipos que necesitan componentes base accesibles y quieren construir un design system propio con personalización total."
  - title: "Aplicaciones React con Tailwind"
    description: "La opción natural para proyectos que ya usan React y Tailwind CSS, ya que shadcn/ui se integra perfectamente con ese stack."
examples:
  - title: "Formulario con validación"
    code: |
      import { Button } from "@/components/ui/button";
      import { Input } from "@/components/ui/input";
      import { Label } from "@/components/ui/label";
      function Formulario() {
        return (
          <form>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
            <Button type="submit">Enviar</Button>
          </form>
        );
      }
    output: "Formulario estilizado y accesible usando componentes de shadcn/ui."
tips:
  - text: "Mantén los componentes en components/ui/ sin modificar la estructura original para facilitar actualizaciones futuras con el comando update."
  - text: "Personaliza el tema desde el archivo global.css usando CSS variables en lugar de modificar cada componente individualmente."
  - text: "Revisa los ejemplos de blocks en el sitio oficial para ver patrones completos de páginas construidas con múltiples componentes."
  - text: "Usa el comando npx shadcn@latest add -a solo en nuevos proyectos; en proyectos existentes agrega componentes uno por uno para evitar conflictos."
  - text: "Combina shadcn/ui con react-hook-form y zod para formularios con validación tipada y componentes de formulario integrados."
faq:
  - question: "¿Por qué shadcn/ui no es un paquete npm?"
    answer: "Porque copia el código fuente directamente a tu proyecto para que tengas control total sobre cada componente. Puedes modificarlos, extenderlos y adaptarlos sin depender de la API de una librería externa."
  - question: "¿Cómo actualizo los componentes?"
    answer: "Ejecuta npx shadcn@latest update para actualizar componentes existentes. Como el código está en tu proyecto, debes resolver conflictos manualmente igual que con cualquier actualización de dependencias."
  - question: "¿Funciona con Vue, Svelte o Angular?"
    answer: "Actualmente solo soporta React. Existen ports no oficiales para Vue (shadcn-vue) y Svelte (shadcn-svelte), pero no tienen soporte oficial del proyecto principal."
  - question: "¿shadcn/ui es gratuito?"
    answer: "Sí, completamente gratuito y open source con licencia MIT. No hay planes de pago ni limitaciones de uso."
publishedAt: 2026-06-01
---

## ¿Qué es?

shadcn/ui no es una librería de componentes tradicional. Es una colección de componentes accesibles y personalizables que se copian directamente al código fuente de tu proyecto. Construidos sobre Radix UI y Tailwind CSS, cada componente es tuyo para modificar sin restricciones.

## ¿Para qué sirve?

shadcn/ui sirve como base para construir interfaces de usuario modernas y accesibles en React. Proporciona componentes como botones, modales, tabs, formularios y más, que puedes personalizar completamente porque el código está en tu proyecto.

## Cuándo usarla

- Cuando quieres componentes accesibles sin pagar por un design system.
- Para proyectos React con Tailwind CSS.
- Si prefieres tener el código fuente de los componentes en tu repo.
- Para equipos que necesitan personalización completa de UI.
- Cuando usas Next.js, Astro, Remix o Vite con React.

## Cuándo NO usarla

- Si prefieres una librería tradicional instalada vía npm con actualizaciones automáticas.
- Cuando tu equipo no usa React o Tailwind CSS.
- Para proyectos que necesitan componentes muy específicos no cubiertos.
- Si no quieres mantener el código de componentes copiados en tu repo.

## Pros

- Código fuente en tu proyecto (personalización total).
- Componentes accesibles por defecto.
- Tematización flexible con CSS variables.
- CLI fácil para añadir componentes.
- Gran adopción y comunidad activa.

## Contras

- No hay actualizaciones automáticas (debes actualizar manualmente).
- Dependencia de Radix UI y Tailwind CSS.
- Menos componentes que librerías establecidas como MUI.
- Cada proyecto tiene su propia copia (más mantenimiento).

## CLI

shadcn/ui CLI permite añadir componentes individualmente al proyecto:

```bash
npx shadcn@latest init               # Inicializar configuración
npx shadcn@latest add button         # Añadir componente botón
npx shadcn@latest add card           # Añadir componente card
npx shadcn@latest add dialog         # Añadir componente diálogo
npx shadcn@latest add form           # Añadir formulario completo
npx shadcn@latest add -a             # Añadir todos los componentes
npx shadcn@latest update             # Actualizar componentes existentes
```
