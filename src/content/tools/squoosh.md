---
name: Squoosh
description: Compresor de imágenes en el navegador con preview en vivo, múltiples codecs y procesamiento local sin subida a servidores.
category: frontend
tags: [imagenes, optimizacion, compression, webp, avif, png, jpeg, open-source]
officialSite: https://squoosh.app
github: https://github.com/GoogleChromeLabs/squoosh
pricing: gratis
openSource: true
license: Apache-2.0
technicalLevel: principiante
compatibility: [Web]
featured: false
verified: true
features:
  - Compresión local en el navegador sin subir archivos a servidores
  - Comparación lado a lado con preview en tiempo real
  - "Múltiples codecs: MozJPEG, WebP, AVIF, PNG, JPEG XL"
  - Ajuste fino de calidad, tamaño y metadatos
  - Reducción de paleta de colores para PNG
  - Redimensionamiento y recorte integrados
  - Creado por el equipo de Google Chrome
  - Open-source con soporte de WASM para codecs
alternatives: [tiny-png, imageoptim, photoshop]
relatedTools: [canva, figma, photoshop]
howToUse:
  - step: 1
    title: "Abre Squoosh en el navegador"
    description: "Navega a squoosh.app. No necesitas registro ni instalación. Arrastra tu imagen al área central o haz clic para seleccionar un archivo desde tu computadora."
  - step: 2
    title: "Selecciona el formato de salida"
    description: "En el panel derecho elige el codec: MozJPEG para fotos, WebP para web, AVIF para máxima compresión, PNG para gráficos con transparencia o JPEG XL para calidad superior. Cada codec tiene sus propios ajustes."
  - step: 3
    title: "Ajusta calidad y compara"
    description: "Usa el slider de calidad y observa el preview lado a lado. Squoosh muestra el tamaño final estimado y la diferencia visual. Activa el modo de mosaico para comparar áreas específicas."
  - step: 4
    title: "Descarga la imagen optimizada"
    description: "Cuando estés satisfecho con el resultado, haz clic en el botón de descarga. La imagen optimizada se guarda en tu computadora. Todo el procesamiento ocurre localmente, tus archivos nunca salen de tu dispositivo."
whenToUse:
  - title: "Optimizar imágenes para web"
    description: "Cuando necesitas reducir el peso de imágenes para mejorar la velocidad de carga de tu sitio web. Squoosh te permite probar diferentes formatos y calidades hasta encontrar el equilibrio perfecto entre tamaño y calidad."
  - title: "Convertir imágenes a formatos modernos"
    description: "Para migrar tus assets de PNG/JPG a WebP, AVIF o JPEG XL. Puedes procesar imágenes una por una y ver exactamente cómo se verá el resultado antes de exportar."
  - title: "Reducir imágenes sin perder calidad visible"
    description: "Cuando tienes limitaciones de almacenamiento o ancho de banda. El preview en vivo te permite comprimir al máximo mientras mantienes una calidad visual aceptable."
examples:
  - title: "Convertir PNG grande a WebP con preview"
    code: |
      // Squoosh no tiene API, pero el flujo manual es:
      // 1. Arrastrar imagen a squoosh.app
      // 2. Seleccionar codec: WebP
      // 3. Ajustar calidad al 75%
      // 4. Comparar visualmente lado a lado
      // 5. Descargar resultado
    output: "Una imagen PNG de 2.8MB se reduce a ~200KB en WebP con calidad 75%, sin diferencia visual apreciable. La compresión es local, el archivo nunca se sube a ningún servidor."
  - title: "Optimizar fotografías para catálogo de productos"
    code: |
      // Flujo recomendado para fotografías:
      // Codec: MozJPEG
      // Calidad: 80%
      // Redimensionar: 1920px de ancho máximo
      // Eliminar metadatos EXIF: activado
    output: "Fotografías de producto de 5MB se reducen a ~150KB usando MozJPEG al 80% con redimensionamiento. La pérdida de calidad es imperceptible en pantalla pero el ahorro de ancho de banda es del 97%."
tips:
  - text: "Usa el modo de mosaico (clic en el divisor) para comparar áreas específicas de la imagen arrastrando la línea divisoria. Es más preciso que el modo lado a lado."
  - text: "Para gráficos con pocos colores (iconos, diagramas), prueba PNG con reducción de paleta. Puedes bajar drásticamente el tamaño sin perder calidad visual."
  - text: "AVIF ofrece la mejor compresión pero tarda más en procesar. Úsalo para imágenes que no cambian frecuentemente (logos, fondos, assets estáticos)."
  - text: "Squoosh no soporta procesamiento por lotes. Para múltiples imágenes, considera herramientas CLI como sharp o imagemin."
  - text: "Mantén una copia original sin comprimir. La compresión con pérdida es irreversible y podrías necesitar la imagen original para otros formatos o usos."
faq:
  - question: "¿Squoosh envía mis imágenes a algún servidor?"
    answer: "No. Todo el procesamiento ocurre localmente en tu navegador usando WebAssembly. Las imágenes nunca abandonan tu dispositivo. Puedes verificarlo desconectando internet después de cargar la página."
  - question: "¿Qué formatos de imagen soporta?"
    answer: "MozJPEG, WebP, AVIF, PNG, JPEG XL y PNG sin pérdida. También permite redimensionar y recortar antes de comprimir en cualquier formato."
  - question: "¿Puedo usar Squoosh sin conexión a internet?"
    answer: "No directamente. La página carga los codecs WASM al iniciar. Una vez cargada, puedes desconectarte y seguir procesando imágenes en esa sesión, pero al recargar la página necesitarás conexión."
  - question: "¿Hay alternativas con procesamiento por lotes?"
    answer: "Para lotes usa sharp (Node.js), ImageMagick (CLI) o compress-or-die (web). Squoosh está diseñado para optimización individual con control visual preciso."
publishedAt: 2026-06-03
---

## ¿Qué es?

Squoosh es un compresor de imágenes que funciona completamente en el navegador, creado por el equipo de Google Chrome. Permite optimizar imágenes usando múltiples codecs con preview en vivo, sin enviar archivos a servidores externos.

## ¿Para qué sirve?

Squoosh sirve para reducir el tamaño de imágenes manteniendo la calidad visual, convertir entre formatos modernos (WebP, AVIF, JPEG XL), redimensionar y recortar. Es ideal para desarrolladores y diseñadores que necesitan optimizar assets web rápidamente.

## Cuándo usarla

- Cuando necesitas comprimir imágenes para web con control visual preciso.
- Para convertir assets a formatos modernos como WebP o AVIF.
- Si trabajas con imágenes sensibles y no quieres subirlas a servidores externos.
- Para encontrar el punto óptimo entre calidad y tamaño de archivo.

## Cuándo NO usarla

- Para procesar cientos de imágenes a la vez (no tiene batch).
- Si necesitas edición avanzada como capas o máscaras (Photoshop/GIMP son mejores).
- Cuando requieres compresión sin pérdida para archivos RAW de fotografía profesional.
