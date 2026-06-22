---
name: magic-ui
description: Biblioteca de componentes React animados con Framer Motion y Tailwind CSS para landing pages y interfaces modernas. Úsala cuando el usuario mencione o pregunte sobre react, framer-motion, tailwind-css, componentes.
---

# Magic UI

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** freemium
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** React, Next.js, Tailwind CSS
- **Official Site:** https://magicui.design
- **GitHub:** https://github.com/magicuidesign/magicui
- **Alternatives:** aceternity-ui, motion-primitives, framer-motion

## Features
- Componentes animados con Framer Motion y Tailwind CSS
- Compatible con shadcn/ui (usa el mismo CLI y patrones)
- Sin dependencias externas pesadas después de instalar
- Código fuente copiable (copy-paste, no package lock-in)
- Componentes para landing pages: Bento Grid, Animated Beam, Globe, Shimmer Button
- Efectos decorativos: Animated Gradient, Sparkles, Ripple, Number Ticker
- Documentación con previews en vivo y código exportable
- CLI para instalar componentes individualmente

## Steps
### 1. Inicializa Magic UI en tu proyecto
Asegúrate de tener React y Tailwind CSS configurados. Ejecuta npx shadcn@latest add 'https://magicui.design/r/shimmer-button' para instalar un componente específico via CLI.

### 2. O copia y pega el código fuente
Visita magicui.design, busca el componente que necesitas y haz clic en copiar. El componente se pega directamente en tu proyecto como código fuente, sin dependencias ocultas.

### 3. Importa y usa el componente
Importa el componente desde donde lo hayas copiado: import { ShimmerButton } from '@/components/magicui/shimmer-button'. Úsalo como cualquier componente React.

### 4. Personaliza con Tailwind y props
Los componentes aceptan className de Tailwind para personalización. Cambia colores, tamaños y animaciones modificando las clases directamente en el código copiado.

## When to Use
- **Landing pages con animaciones llamativas:** Cuando necesitas landing pages que impresionen visualmente. Componentes como Globe, Animated Beam y Bento Grid crean experiencias premium sin esfuerzo.
- **Micro-interacciones y efectos decorativos:** Para añadir detalles animados que mejoren la experiencia de usuario: shimmer en botones, sparkles en títulos, number ticker en estadísticas, ripple en fondos.
- **Proyectos shadcn/ui que necesitan animación:** Si ya usas shadcn/ui y necesitas componentes animados. Magic UI es compatible con el mismo sistema de diseño y patrones de shadcn.

## Examples
### Shimmer Button
```
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
tput: "Botón con efecto shimmer (brillo que se mueve sobre la superficie). Ideal para CTAs en landing pages. El efecto se activa sin hover, dando sensación premium desde el primer vistazo."
```

### Bento Grid para mostrar características
```
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
tput: "Grid de tarjetas con diseño bento (estilo Pinterest/globe) que muestra características con iconos animados. Las tarjetas tienen efectos hover y transiciones suaves."
```

## Tips
- Magic UI es compatible con shadcn/ui. Usa el mismo CLI (shadcn) para instalar componentes de Magic UI sin conflictos.
- Los componentes son copy-paste: una vez copiados, son tuyos. No hay runtime oculto ni dependencias adicionales después de la instalación.
- Personaliza los colores de animación editando las variables CSS en el componente copiado. Busca las clases de Tailwind que definen gradientes y cambia los colores.
- Combina varios efectos: un ShimmerButton dentro de un BentoCard con fondo Animated Grid crea landing pages visualmente impactantes.
- Si usas TypeScript, los componentes incluyen tipos. Asegúrate de copiar también los archivos de tipos si los hay.

## FAQ
- **¿Magic UI es gratuito?** Los componentes individuales son gratuitos y open-source bajo licencia MIT. Los templates completos y bloques premium requieren pago único ($199).
- **¿Necesito Framer Motion instalado?** Sí, los componentes animados requieren framer-motion como dependencia. Si no lo tienes, el CLI lo instalará automáticamente.
- **¿Funciona con Next.js?** Sí, funciona con Next.js 13+ (App Router y Pages Router). También compatible con Vite y Astro con React.
- **¿Diferencia con Aceternity UI?** Magic UI usa el mismo patrón de shadcn (CLI + copy-paste) mientras que Aceternity tiene su propio sistema. Magic UI tiene ~18k estrellas, Aceternity ~25k. Ambos son excelentes para landing pages animadas.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://magicui.design
- **Source Code Issues:** Check the repository at https://github.com/magicuidesign/magicui for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
