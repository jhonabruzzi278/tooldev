---
name: shader-gradient
description: Herramienta para crear fondos de gradientes 3D animados y hermosos usando shaders WebGL, con componente React listo para integrar. Úsala cuando el usuario mencione o pregunte sobre gradiente, webgl, shaders, 3d.
---

# Shader Gradient

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** open-source
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** React, Next.js, Web, Three.js
- **Official Site:** https://www.shadergradient.co
- **GitHub:** https://github.com/ruucm/shadergradient
- **Alternatives:** mesh-gradient, css-gradient-generator

## Features
- Editor visual interactivo para diseñar gradientes 3D en tiempo real
- Componente React listo para usar con props configurables
- Animaciones fluidas basadas en shaders WebGL de alto rendimiento
- Múltiples formas 3D como plano, esfera y torus para gradientes
- Control de colores, velocidad de animación, zoom y rotación
- Exportación de configuración como URL compartible
- Integración con React Three Fiber para escenas 3D

## Steps
### 1. Diseña tu gradiente en el editor visual
Visita shadergradient.co y usa el editor interactivo para ajustar colores, forma 3D (plano, esfera, waterplane), velocidad de animación, ángulo de cámara y nivel de distorsión hasta lograr el efecto visual deseado.

### 2. Instala el paquete en tu proyecto React
Ejecuta npm install shadergradient @react-three/fiber @react-three/drei three para instalar el componente y sus dependencias de renderizado 3D. El paquete usa React Three Fiber como motor de renderizado WebGL.

### 3. Integra el componente con la URL de configuración
Importa ShaderGradientCanvas y ShaderGradient, envuelve tu escena en el Canvas y pasa la URL de configuración generada por el editor como prop urlString al componente ShaderGradient.

### 4. Personaliza propiedades programáticamente
Ajusta propiedades individuales como color1, color2, color3, type, animate, uSpeed, y cameraZoom directamente como props del componente para control dinámico sin depender de la URL del editor.

## When to Use
- **Hero sections y landing pages con fondos llamativos:** Para crear fondos animados que impacten visualmente en secciones hero, páginas de inicio y landing pages de producto. Los gradientes 3D añaden profundidad y movimiento sin distraer del contenido principal.
- **Branding y elementos de identidad visual:** Para generar fondos únicos que refuercen la identidad de marca en aplicaciones web, presentaciones y materiales de marketing digital con gradientes que ningún competidor puede replicar fácilmente.

## Examples
### Componente ShaderGradient con configuración personalizada
```
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
export function HeroBackground() {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', top: 0, width: '100%', height: '100vh' }}
    >
      <ShaderGradient
        type="waterPlane"
        color1="#ff5005"
        color2="#dbba95"
        color3="#d0bce1"
        animate="on"
        uSpeed={0.3}
        cameraZoom={1.2}
      />
    </ShaderGradientCanvas>
  );
}
tput: "Un fondo animado con efecto de agua ondulante usando tres colores que se mezclan suavemente, renderizado a pantalla completa detrás del contenido del hero."
```

## Tips
- Usa uSpeed con valores bajos (0.1-0.4) para animaciones sutiles y profesionales que no distraigan; valores altos (>1) crean efectos más dinámicos pero pueden resultar agresivos.
- Combina el componente con CSS position: absolute y z-index negativo para crear fondos animados que no interfieran con la interactividad del contenido superpuesto.
- Exporta la URL de configuración del editor para compartir diseños con tu equipo y mantener consistencia visual entre diferentes páginas del proyecto.
- Considera lazy-loading el componente ShaderGradient en páginas con mucho contenido para que el WebGL no impacte el tiempo de carga inicial.

## FAQ
- **¿Shader Gradient impacta el rendimiento de la página?** El componente usa WebGL y la GPU para renderizar, por lo que el impacto en el hilo principal es mínimo. Sin embargo, en dispositivos móviles de gama baja puede consumir batería. Se recomienda usar media queries para desactivar animaciones en dispositivos con preferencia de movimiento reducido.
- **¿Funciona con Next.js y Server-Side Rendering?** Sí, pero necesitas importar el componente con dynamic import y ssr: false ya que Three.js requiere el DOM del navegador. El componente se renderiza solo en el cliente manteniendo la compatibilidad con SSR.
- **¿Puedo usar Shader Gradient sin React?** El paquete principal está diseñado para React. Sin embargo, puedes usar la implementación base de Three.js directamente si trabajas con otro framework, aunque perderás la conveniencia de las props declarativas.
- **¿Cómo ajusto el gradiente para que sea responsive?** El canvas se adapta automáticamente al contenedor padre. Usa CSS width: 100% y height: 100% en el ShaderGradientCanvas y ajusta cameraZoom para diferentes breakpoints si necesitas control fino del encuadre.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://www.shadergradient.co
- **Source Code Issues:** Check the repository at https://github.com/ruucm/shadergradient for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
