---
name: Magic UI
description: Biblioteca de componentes React animados con Framer Motion y Tailwind CSS para landing pages y interfaces modernas.
category: frontend
tags: [react, framer-motion, tailwind-css, componentes, animacion, ui, diseno]
officialSite: https://magicui.design
github: https://github.com/magicuidesign/magicui
pricing: freemium
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [React, "Next.js", "Tailwind CSS"]
featured: false
verified: true
features:
  - Componentes animados con Framer Motion y Tailwind CSS
  - Compatible con shadcn/ui (usa el mismo CLI y patrones)
  - Sin dependencias externas pesadas después de instalar
  - Código fuente copiable (copy-paste, no package lock-in)
  - "Componentes para landing pages: Bento Grid, Animated Beam, Globe, Shimmer Button"
  - "Efectos decorativos: Animated Gradient, Sparkles, Ripple, Number Ticker"
  - Documentación con previews en vivo y código exportable
  - CLI para instalar componentes individualmente
alternatives: [aceternity-ui, motion-primitives, framer-motion]
relatedTools: [framer-motion, shadcn-ui, tailwind-css]
howToUse:
  - step: 1
    title: "Inicializa Magic UI en tu proyecto"
    description: "Asegúrate de tener React y Tailwind CSS configurados. Ejecuta npx shadcn@latest add 'https://magicui.design/r/shimmer-button' para instalar un componente específico via CLI."
  - step: 2
    title: "O copia y pega el código fuente"
    description: "Visita magicui.design, busca el componente que necesitas y haz clic en copiar. El componente se pega directamente en tu proyecto como código fuente, sin dependencias ocultas."
  - step: 3
    title: "Importa y usa el componente"
    description: "Importa el componente desde donde lo hayas copiado: import { ShimmerButton } from '@/components/magicui/shimmer-button'. Úsalo como cualquier componente React."
  - step: 4
    title: "Personaliza con Tailwind y props"
    description: "Los componentes aceptan className de Tailwind para personalización. Cambia colores, tamaños y animaciones modificando las clases directamente en el código copiado."
whenToUse:
  - title: "Landing pages con animaciones llamativas"
    description: "Cuando necesitas landing pages que impresionen visualmente. Componentes como Globe, Animated Beam y Bento Grid crean experiencias premium sin esfuerzo."
  - title: "Micro-interacciones y efectos decorativos"
    description: "Para añadir detalles animados que mejoren la experiencia de usuario: shimmer en botones, sparkles en títulos, number ticker en estadísticas, ripple en fondos."
  - title: "Proyectos shadcn/ui que necesitan animación"
    description: "Si ya usas shadcn/ui y necesitas componentes animados. Magic UI es compatible con el mismo sistema de diseño y patrones de shadcn."
examples:
  - title: "Shimmer Button"
    code: |
      import { ShimmerButton } from '@/components/magicui/shimmer-button'

      export function HeroSection() {
        return (
          <ShimmerButton className="shadow-2xl">
            <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
              Comenzar ahora
            </span>
          </ShimmerButton>
        )
      }
    output: "Botón con efecto shimmer (brillo que se mueve sobre la superficie). Ideal para CTAs en landing pages. El efecto se activa sin hover, dando sensación premium desde el primer vistazo."
  - title: "Bento Grid para mostrar características"
    code: |
      import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid'

      const features = [
        { name: 'Rápido', description: 'Optimizado para rendimiento', icon: IconZap },
        { name: 'Seguro', description: 'Encriptación de extremo a extremo', icon: IconShield },
      ]

      export function Features() {
        return (
          <BentoGrid>
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        )
      }
    output: "Grid de tarjetas con diseño bento (estilo Pinterest/globe) que muestra características con iconos animados. Las tarjetas tienen efectos hover y transiciones suaves."
tips:
  - text: "Magic UI es compatible con shadcn/ui. Usa el mismo CLI (shadcn) para instalar componentes de Magic UI sin conflictos."
  - text: "Los componentes son copy-paste: una vez copiados, son tuyos. No hay runtime oculto ni dependencias adicionales después de la instalación."
  - text: "Personaliza los colores de animación editando las variables CSS en el componente copiado. Busca las clases de Tailwind que definen gradientes y cambia los colores."
  - text: "Combina varios efectos: un ShimmerButton dentro de un BentoCard con fondo Animated Grid crea landing pages visualmente impactantes."
  - text: "Si usas TypeScript, los componentes incluyen tipos. Asegúrate de copiar también los archivos de tipos si los hay."
faq:
  - question: "¿Magic UI es gratuito?"
    answer: "Los componentes individuales son gratuitos y open-source bajo licencia MIT. Los templates completos y bloques premium requieren pago único ($199)."
  - question: "¿Necesito Framer Motion instalado?"
    answer: "Sí, los componentes animados requieren framer-motion como dependencia. Si no lo tienes, el CLI lo instalará automáticamente."
  - question: "¿Funciona con Next.js?"
    answer: "Sí, funciona con Next.js 13+ (App Router y Pages Router). También compatible con Vite y Astro con React."
  - question: "¿Diferencia con Aceternity UI?"
    answer: "Magic UI usa el mismo patrón de shadcn (CLI + copy-paste) mientras que Aceternity tiene su propio sistema. Magic UI tiene ~18k estrellas, Aceternity ~25k. Ambos son excelentes para landing pages animadas."
publishedAt: 2026-06-03
---

## ¿Qué es?

Magic UI es una biblioteca de componentes React animados que combina Framer Motion y Tailwind CSS. Proporciona efectos visuales premium para landing pages, micro-interacciones y secciones decorativas.

## ¿Para qué sirve?

Magic UI sirve para añadir animaciones y efectos visuales a interfaces React sin tener que escribirlos desde cero. Es ideal para landing pages que buscan destacar visualmente con componentes como Bento Grid, Globe, Shimmer Button y Animated Beam.

## Cuándo usarla

- Para landing pages que necesitan animaciones llamativas.
- Cuando quieres añadir micro-interacciones premium a tu app.
- Si ya usas shadcn/ui y necesitas componentes animados compatibles.
- Para crear CTAs con efectos shimmer, sparkles o ripple.

## Cuándo NO usarla

- Para aplicaciones de datos o dashboards que priorizan rendimiento sobre estética.
- Si no usas Framer Motion (las animaciones dependen de él).
- Para componentes de formulario, tabla o navegación (no es su enfoque).
