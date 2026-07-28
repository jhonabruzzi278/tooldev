---
name: squoosh
description: >- Úsala cuando el usuario mencione o pregunte sobre imagenes, optimizacion, compression, webp.
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
>-

### 2. Selecciona el formato de salida
>-

### 3. Ajusta calidad y compara
>-

### 4. Descarga la imagen optimizada
>-

## When to Use
- **Optimizar imágenes para web:** >-
- **Convertir imágenes a formatos modernos:** >-
- **Reducir imágenes sin perder calidad visible:** >-

## Examples
### Convertir PNG grande a WebP con preview
```
// Squoosh no tiene API, pero el flujo manual es:
// 1. Arrastrar imagen a squoosh.app
// 2. Seleccionar codec: WebP
// 3. Ajustar calidad al 75%
// 4. Comparar visualmente lado a lado
// 5. Descargar resultado
tput: >-
Una imagen PNG de 2.8MB se reduce a ~200KB en WebP con calidad 75%, sin
diferencia visual apreciable. La compresión es local, el archivo nunca se
sube a ningún servidor.
```

### Optimizar fotografías para catálogo de productos
```
// Flujo recomendado para fotografías:
// Codec: MozJPEG
// Calidad: 80%
// Redimensionar: 1920px de ancho máximo
// Eliminar metadatos EXIF: activado
tput: >-
Fotografías de producto de 5MB se reducen a ~150KB usando MozJPEG al 80%
con redimensionamiento. La pérdida de calidad es imperceptible en pantalla
pero el ahorro de ancho de banda es del 97%.
```

## Tips
- >-
- >-
- >-
- >-
- >-

## FAQ
- **¿Squoosh envía mis imágenes a algún servidor?** >-
- **¿Qué formatos de imagen soporta?** >-
- **¿Puedo usar Squoosh sin conexión a internet?** >-
- **¿Hay alternativas con procesamiento por lotes?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://squoosh.app
- **Source Code Issues:** Check the repository at https://github.com/GoogleChromeLabs/squoosh for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
