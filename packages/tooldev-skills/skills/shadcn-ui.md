---
name: shadcn-ui
description: Colección de componentes UI reutilizables construidos con Radix UI y Tailwind CSS, copiables directamente al proyecto. Úsala cuando el usuario mencione o pregunte sobre ui, components, react, tailwind-css.
---

# shadcn-ui

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
- **Official Site:** https://ui.shadcn.com
- **GitHub:** https://github.com/shadcn-ui/ui
- **Alternatives:** chakra-ui, radix, headless-ui, material-ui

## Features
- Componentes accesibles (WAI-ARIA) vía Radix UI
- Estilizados con Tailwind CSS y CSS variables
- Copia y pega en tu proyecto (no es una dependencia npm)
- Temas personalizables con colores y estilos globales
- Componentes headless modificables sin restricciones
- Integración nativa con Next.js, Vite, Astro y Remix
- CLI para añadir componentes individualmente

## Steps
### 1. Inicializar en tu proyecto
Ejecuta npx shadcn@latest init en tu proyecto React con Tailwind CSS. La CLI te guiará para configurar colores, CSS variables y la ubicación de componentes.

### 2. Agregar componentes
Usa npx shadcn@latest add <componente> para copiar componentes individuales a tu proyecto. Cada componente se almacena en components/ui/ listo para modificar.

### 3. Personalizar el tema
Edita las CSS variables en tu archivo global.css para personalizar colores, bordes, sombras y tipografía de todos los componentes de manera centralizada.

### 4. Componer interfaces
Importa y combina los componentes en tus páginas y layouts. Como el código fuente está en tu proyecto, puedes modificar cualquier componente sin restricciones.

## When to Use
- **Prototipado rápido de interfaces:** Ideal para construir MVPs y prototipos con componentes profesionales y accesibles desde el primer día, sin depender de una librería externa.
- **Sistemas de diseño personalizados:** Perfecto para equipos que necesitan componentes base accesibles y quieren construir un design system propio con personalización total.
- **Aplicaciones React con Tailwind:** La opción natural para proyectos que ya usan React y Tailwind CSS, ya que shadcn/ui se integra perfectamente con ese stack.

## Examples
### Formulario con validación
```
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
tput: "Formulario estilizado y accesible usando componentes de shadcn/ui."
```

## Tips
- Mantén los componentes en components/ui/ sin modificar la estructura original para facilitar actualizaciones futuras con el comando update.
- Personaliza el tema desde el archivo global.css usando CSS variables en lugar de modificar cada componente individualmente.
- Revisa los ejemplos de blocks en el sitio oficial para ver patrones completos de páginas construidas con múltiples componentes.
- Usa el comando npx shadcn@latest add -a solo en nuevos proyectos; en proyectos existentes agrega componentes uno por uno para evitar conflictos.
- Combina shadcn/ui con react-hook-form y zod para formularios con validación tipada y componentes de formulario integrados.

## FAQ
- **¿Por qué shadcn/ui no es un paquete npm?** Porque copia el código fuente directamente a tu proyecto para que tengas control total sobre cada componente. Puedes modificarlos, extenderlos y adaptarlos sin depender de la API de una librería externa.
- **¿Cómo actualizo los componentes?** Ejecuta npx shadcn@latest update para actualizar componentes existentes. Como el código está en tu proyecto, debes resolver conflictos manualmente igual que con cualquier actualización de dependencias.
- **¿Funciona con Vue, Svelte o Angular?** Actualmente solo soporta React. Existen ports no oficiales para Vue (shadcn-vue) y Svelte (shadcn-svelte), pero no tienen soporte oficial del proyecto principal.
- **¿shadcn/ui es gratuito?** Sí, completamente gratuito y open source con licencia MIT. No hay planes de pago ni limitaciones de uso.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://ui.shadcn.com
- **Source Code Issues:** Check the repository at https://github.com/shadcn-ui/ui for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
