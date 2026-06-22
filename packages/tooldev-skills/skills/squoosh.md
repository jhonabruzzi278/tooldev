---
name: squoosh
description: Compresor de imágenes en el navegador con preview en vivo, múltiples codecs y procesamiento local sin subida a servidores. Úsala cuando el usuario mencione o pregunte sobre imagenes, optimizacion, compression, webp.
---

# Squoosh

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** Apache-2.0
- **Technical Level:** principiante
- **Compatibility:** Web
- **Official Site:** https://squoosh.app
- **GitHub:** https://github.com/GoogleChromeLabs/squoosh
- **Alternatives:** tiny-png, imageoptim, photoshop

## Features
- Compresión local en el navegador sin subir archivos a servidores
- Comparación lado a lado con preview en tiempo real
- Múltiples codecs: MozJPEG, WebP, AVIF, PNG, JPEG XL
- Ajuste fino de calidad, tamaño y metadatos
- Reducción de paleta de colores para PNG
- Redimensionamiento y recorte integrados
- Creado por el equipo de Google Chrome
- Open-source con soporte de WASM para codecs

## Steps
### 1. Abre Squoosh en el navegador
Navega a squoosh.app. No necesitas registro ni instalación. Arrastra tu imagen al área central o haz clic para seleccionar un archivo desde tu computadora.

### 2. Selecciona el formato de salida
En el panel derecho elige el codec: MozJPEG para fotos, WebP para web, AVIF para máxima compresión, PNG para gráficos con transparencia o JPEG XL para calidad superior. Cada codec tiene sus propios ajustes.

### 3. Ajusta calidad y compara
Usa el slider de calidad y observa el preview lado a lado. Squoosh muestra el tamaño final estimado y la diferencia visual. Activa el modo de mosaico para comparar áreas específicas.

### 4. Descarga la imagen optimizada
Cuando estés satisfecho con el resultado, haz clic en el botón de descarga. La imagen optimizada se guarda en tu computadora. Todo el procesamiento ocurre localmente, tus archivos nunca salen de tu dispositivo.

## When to Use
- **Optimizar imágenes para web:** Cuando necesitas reducir el peso de imágenes para mejorar la velocidad de carga de tu sitio web. Squoosh te permite probar diferentes formatos y calidades hasta encontrar el equilibrio perfecto entre tamaño y calidad.
- **Convertir imágenes a formatos modernos:** Para migrar tus assets de PNG/JPG a WebP, AVIF o JPEG XL. Puedes procesar imágenes una por una y ver exactamente cómo se verá el resultado antes de exportar.
- **Reducir imágenes sin perder calidad visible:** Cuando tienes limitaciones de almacenamiento o ancho de banda. El preview en vivo te permite comprimir al máximo mientras mantienes una calidad visual aceptable.

## Examples
### Convertir PNG grande a WebP con preview
```
// Squoosh no tiene API, pero el flujo manual es:
// 1. Arrastrar imagen a squoosh.app
// 2. Seleccionar codec: WebP
// 3. Ajustar calidad al 75%
// 4. Comparar visualmente lado a lado
// 5. Descargar resultado
tput: "Una imagen PNG de 2.8MB se reduce a ~200KB en WebP con calidad 75%, sin diferencia visual apreciable. La compresión es local, el archivo nunca se sube a ningún servidor."
```

### Optimizar fotografías para catálogo de productos
```
// Flujo recomendado para fotografías:
// Codec: MozJPEG
// Calidad: 80%
// Redimensionar: 1920px de ancho máximo
// Eliminar metadatos EXIF: activado
tput: "Fotografías de producto de 5MB se reducen a ~150KB usando MozJPEG al 80% con redimensionamiento. La pérdida de calidad es imperceptible en pantalla pero el ahorro de ancho de banda es del 97%."
```

## Tips
- Usa el modo de mosaico (clic en el divisor) para comparar áreas específicas de la imagen arrastrando la línea divisoria. Es más preciso que el modo lado a lado.
- Para gráficos con pocos colores (iconos, diagramas), prueba PNG con reducción de paleta. Puedes bajar drásticamente el tamaño sin perder calidad visual.
- AVIF ofrece la mejor compresión pero tarda más en procesar. Úsalo para imágenes que no cambian frecuentemente (logos, fondos, assets estáticos).
- Squoosh no soporta procesamiento por lotes. Para múltiples imágenes, considera herramientas CLI como sharp o imagemin.
- Mantén una copia original sin comprimir. La compresión con pérdida es irreversible y podrías necesitar la imagen original para otros formatos o usos.

## FAQ
- **¿Squoosh envía mis imágenes a algún servidor?** No. Todo el procesamiento ocurre localmente en tu navegador usando WebAssembly. Las imágenes nunca abandonan tu dispositivo. Puedes verificarlo desconectando internet después de cargar la página.
- **¿Qué formatos de imagen soporta?** MozJPEG, WebP, AVIF, PNG, JPEG XL y PNG sin pérdida. También permite redimensionar y recortar antes de comprimir en cualquier formato.
- **¿Puedo usar Squoosh sin conexión a internet?** No directamente. La página carga los codecs WASM al iniciar. Una vez cargada, puedes desconectarte y seguir procesando imágenes en esa sesión, pero al recargar la página necesitarás conexión.
- **¿Hay alternativas con procesamiento por lotes?** Para lotes usa sharp (Node.js), ImageMagick (CLI) o compress-or-die (web). Squoosh está diseñado para optimización individual con control visual preciso.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://squoosh.app
- **Source Code Issues:** Check the repository at https://github.com/GoogleChromeLabs/squoosh for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
