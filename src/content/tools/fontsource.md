---
name: Fontsource
description: Paquetería NPM para auto-hospedar más de 1500 fuentes open source con versionado, sin dependencia externa de CDN.
category: frontend
tags: [fuentes, fonts, tipografia, self-host, npm, open-source, rendimiento]
officialSite: https://fontsource.org
github: https://github.com/fontsource/fontsource
pricing: gratis
openSource: true
license: MIT
technicalLevel: principiante
compatibility: ["Web", React, Vue, Angular, Svelte, Astro, "Node.js"]
featured: false
verified: true
features:
  - Más de 1500 fuentes open source empaquetadas como paquetes NPM individuales
  - "Auto-hospedado: sin llamadas a Google Fonts ni CDNs externos"
  - "Versionado semántico: las fuentes no cambian sin tu control"
  - Soporte para fuentes variables con un solo archivo
  - Pesos y estilos individuales para importar solo lo necesario
  - Compatible con todos los bundlers modernos (Vite, Webpack, esbuild)
  - CDN vía jsDelivr si prefieres no instalar
  - Fuentes fuera del ecosistema Google Fonts disponibles
alternatives: [google-fonts, typekit, fontsource-cdn]
relatedTools: [tailwind-css, next-js, astro]
howToUse:
  - step: 1
    title: "Elige una fuente desde fontsource.org"
    description: "Explora el catálogo en fontsource.org/fonts. Puedes filtrar por categoría, idioma y buscar fuentes variables. Cada fuente tiene su propia página con instrucciones de instalación."
  - step: 2
    title: "Instala el paquete NPM"
    description: "Ejecuta npm install @fontsource/inter para instalar la fuente Inter. Los paquetes siguen el formato @fontsource/nombre-fuente. Para variables usa @fontsource-variable/nombre-fuente."
  - step: 3
    title: "Importa la fuente en tu aplicación"
    description: "Agrega import '@fontsource/inter' en tu archivo de entrada (main.jsx, App.tsx, layout.astro). Esto importa el peso 400 por defecto. Para pesos específicos: import '@fontsource/inter/700.css'."
  - step: 4
    title: "Usa la fuente en CSS"
    description: "La fuente está disponible con su nombre original: font-family: 'Inter', sans-serif;. Como está auto-hospedada, funciona offline y no depende de ningún servicio externo."
whenToUse:
  - title: "Rendimiento y privacidad en producción"
    description: "Para sitios en producción donde cada milisegundo cuenta. Auto-hospedar fuentes elimina las conexiones DNS adicionales, los handshakes TLS y las solicitudes a terceros, mejorando el tiempo de carga."
  - title: "Desarrollo offline y Progressive Web Apps"
    description: "Cuando tu aplicación necesita funcionar sin conexión. Las fuentes auto-hospedadas están disponibles localmente, ideales para PWAs y entornos de desarrollo sin internet."
  - title: "Control de versiones de fuentes"
    description: "Para equipos que necesitan consistencia tipográfica. Google Fonts actualiza fuentes sin previo aviso; con Fontsource gestionas las versiones como cualquier dependencia NPM."
examples:
  - title: "Instalar Inter con múltiples pesos en Astro"
    code: |
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
    output: "La fuente Inter con pesos 400 y 700 se auto-hospeda en el bundle. No hay llamadas a Google Fonts, la tipografía carga instantáneamente incluso offline."
  - title: "Fuente variable con import optimizado"
    code: |
      # Terminal
      npm install @fontsource-variable/inter

      # En tu entrada principal
      import '@fontsource-variable/inter'

      /* CSS */
      body {
        font-family: 'Inter Variable', sans-serif;
        font-weight: 400 700;
      }
    output: "Un solo archivo contiene todos los pesos de 400 a 700. El navegador interpola los pesos intermedios, reduciendo el tamaño total descargado comparado con archivos separados por peso."
tips:
  - text: "Importa solo los pesos que usas. Si solo necesitas 400 y 700, importa esos archivos específicos en lugar del paquete completo para reducir el tamaño del bundle."
  - text: "Para Tailwind CSS, configura la fuente en tailwind.config: theme.extend.fontFamily.sans: ['Inter Variable', ...defaultTheme.fontFamily.sans]"
  - text: "Si usas CDN en lugar de NPM, Fontsource tiene una integración con jsDelivr que permite enlazar versiones específicas semánticamente."
  - text: "Las fuentes variables reducen drásticamente el tamaño comparado con archivos individuales por peso. Úsalas siempre que el diseño lo permita."
  - text: "Combina Fontsource con subsetting si solo necesitas caracteres latinos. Algunos paquetes ofrecen subsets individuales para optimizar aún más."
faq:
  - question: "¿Fontsource es gratuito?"
    answer: "Sí, completamente gratuito y open-source bajo licencia MIT. Todas las fuentes incluidas también son open-source (principalmente SIL Open Font License)."
  - question: "¿Qué ventajas tiene sobre Google Fonts?"
    answer: "Auto-hospedar elimina latencia de red externa, funciona offline, permite versionado controlado, respeta la privacidad del usuario (sin tracking de Google) y carga instantáneamente sin flash of unstyled text (FOUT)."
  - question: "¿Cómo actualizo una fuente?"
    answer: "Como cualquier paquete NPM: npm update @fontsource/inter. El versionado semántico te permite mantener versiones específicas mientras controlas cuándo actualizar."
  - question: "¿Soporta fuentes no incluidas en Google Fonts?"
    answer: "Sí, Fontsource incluye fuentes de otras fuentes open source. Consulta el catálogo en fontsource.org para ver la lista completa. También aceptan contribuciones de nuevas fuentes."
publishedAt: 2026-06-03
---

## ¿Qué es?

Fontsource es una colección de más de 1500 fuentes open source empaquetadas como paquetes NPM individuales para auto-hospedar en aplicaciones web. Elimina la dependencia de CDNs externos como Google Fonts, mejorando rendimiento y privacidad.

## ¿Para qué sirve?

Fontsource sirve para incorporar tipografías en proyectos web sin depender de servicios externos. Es ideal para desarrolladores que priorizan rendimiento, privacidad y control de versiones en sus aplicaciones.

## Cuándo usarla

- En proyectos en producción donde cada solicitud HTTP externa afecta el rendimiento.
- Para PWAs o aplicaciones que funcionan offline.
- Cuando necesitas versionado preciso de tipografías.
- Si te preocupa la privacidad y no quieres enviar solicitudes a Google Fonts.

## Cuándo NO usarla

- Para prototipos rápidos donde Google Fonts es más conveniente.
- Si usas fuentes comerciales con licencias restrictivas (no incluidas en Fontsource).
