---
name: fontsource
description: Paquetería NPM para auto-hospedar más de 1500 fuentes open source con versionado, sin dependencia externa de CDN. Úsala cuando el usuario mencione o pregunte sobre fuentes, fonts, tipografia, self-host.
---

# Fontsource

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** principiante
- **Compatibility:** Web, React, Vue, Angular, Svelte, Astro, Node.js
- **Official Site:** https://fontsource.org
- **GitHub:** https://github.com/fontsource/fontsource
- **Alternatives:** google-fonts, typekit, fontsource-cdn

## Features
- Más de 1500 fuentes open source empaquetadas como paquetes NPM individuales
- Auto-hospedado: sin llamadas a Google Fonts ni CDNs externos
- Versionado semántico: las fuentes no cambian sin tu control
- Soporte para fuentes variables con un solo archivo
- Pesos y estilos individuales para importar solo lo necesario
- Compatible con todos los bundlers modernos (Vite, Webpack, esbuild)
- CDN vía jsDelivr si prefieres no instalar
- Fuentes fuera del ecosistema Google Fonts disponibles

## Steps
### 1. Elige una fuente desde fontsource.org
Explora el catálogo en fontsource.org/fonts. Puedes filtrar por categoría, idioma y buscar fuentes variables. Cada fuente tiene su propia página con instrucciones de instalación.

### 2. Instala el paquete NPM
Ejecuta npm install @fontsource/inter para instalar la fuente Inter. Los paquetes siguen el formato @fontsource/nombre-fuente. Para variables usa @fontsource-variable/nombre-fuente.

### 3. Importa la fuente en tu aplicación
Agrega import '@fontsource/inter' en tu archivo de entrada (main.jsx, App.tsx, layout.astro). Esto importa el peso 400 por defecto. Para pesos específicos: import '@fontsource/inter/700.css'.

### 4. Usa la fuente en CSS
La fuente está disponible con su nombre original: font-family: 'Inter', sans-serif;. Como está auto-hospedada, funciona offline y no depende de ningún servicio externo.

## When to Use
- **Rendimiento y privacidad en producción:** Para sitios en producción donde cada milisegundo cuenta. Auto-hospedar fuentes elimina las conexiones DNS adicionales, los handshakes TLS y las solicitudes a terceros, mejorando el tiempo de carga.
- **Desarrollo offline y Progressive Web Apps:** Cuando tu aplicación necesita funcionar sin conexión. Las fuentes auto-hospedadas están disponibles localmente, ideales para PWAs y entornos de desarrollo sin internet.
- **Control de versiones de fuentes:** Para equipos que necesitan consistencia tipográfica. Google Fonts actualiza fuentes sin previo aviso; con Fontsource gestionas las versiones como cualquier dependencia NPM.

## Examples
### Instalar Inter con múltiples pesos en Astro
```
# Terminal
npm install @fontsource/inter
# En src/layouts/BaseLayout.astro
---
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
---
<style is:global>
  body {
    font-family: 'Inter', sans-serif;
  }
</style>
tput: "La fuente Inter con pesos 400 y 700 se auto-hospeda en el bundle. No hay llamadas a Google Fonts, la tipografía carga instantáneamente incluso offline."
```

### Fuente variable con import optimizado
```
# Terminal
npm install @fontsource-variable/inter
# En tu entrada principal
import '@fontsource-variable/inter'
/* CSS */
body {
  font-family: 'Inter Variable', sans-serif;
  font-weight: 400 700;
}
tput: "Un solo archivo contiene todos los pesos de 400 a 700. El navegador interpola los pesos intermedios, reduciendo el tamaño total descargado comparado con archivos separados por peso."
```

## Tips
- Importa solo los pesos que usas. Si solo necesitas 400 y 700, importa esos archivos específicos en lugar del paquete completo para reducir el tamaño del bundle.
- Para Tailwind CSS, configura la fuente en tailwind.config: theme.extend.fontFamily.sans: ['Inter Variable', ...defaultTheme.fontFamily.sans]
- Si usas CDN en lugar de NPM, Fontsource tiene una integración con jsDelivr que permite enlazar versiones específicas semánticamente.
- Las fuentes variables reducen drásticamente el tamaño comparado con archivos individuales por peso. Úsalas siempre que el diseño lo permita.
- Combina Fontsource con subsetting si solo necesitas caracteres latinos. Algunos paquetes ofrecen subsets individuales para optimizar aún más.

## FAQ
- **¿Fontsource es gratuito?** Sí, completamente gratuito y open-source bajo licencia MIT. Todas las fuentes incluidas también son open-source (principalmente SIL Open Font License).
- **¿Qué ventajas tiene sobre Google Fonts?** Auto-hospedar elimina latencia de red externa, funciona offline, permite versionado controlado, respeta la privacidad del usuario (sin tracking de Google) y carga instantáneamente sin flash of unstyled text (FOUT).
- **¿Cómo actualizo una fuente?** Como cualquier paquete NPM: npm update @fontsource/inter. El versionado semántico te permite mantener versiones específicas mientras controlas cuándo actualizar.
- **¿Soporta fuentes no incluidas en Google Fonts?** Sí, Fontsource incluye fuentes de otras fuentes open source. Consulta el catálogo en fontsource.org para ver la lista completa. También aceptan contribuciones de nuevas fuentes.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://fontsource.org
- **Source Code Issues:** Check the repository at https://github.com/fontsource/fontsource for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
