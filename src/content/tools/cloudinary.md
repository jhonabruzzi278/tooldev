---
name: Cloudinary
description: Sube, transforma, optimiza y entrega imágenes y vídeo mediante CDN.
category: media
tags: [images, video, cdn, transformation, optimization]
officialSite: https://cloudinary.com
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Subida de imágenes y vídeo vía API, SDKs y widget
  - Transformaciones en tiempo real mediante URLs
  - Optimización automática de formato y calidad (f_auto, q_auto)
  - Entrega global mediante CDN integrada
  - Redimensionado, recorte, efectos y overlays dinámicos
  - Gestión de assets con carpetas, tags y búsqueda
  - SDKs para JavaScript, Python, PHP, Ruby, Java y más
alternatives: [imagekit, uploadcare]
relatedTools: []
howToUse:
  - step: 1
    title: "Crear la cuenta y obtener credenciales"
    description: "Regístrate en cloudinary.com y obtén tu cloud name, API key y API secret desde el dashboard. Instala el SDK de tu lenguaje, por ejemplo npm install cloudinary para Node.js."
  - step: 2
    title: "Subir y transformar assets"
    description: "Sube imágenes con el SDK o el widget de subida. Aplica transformaciones directamente en la URL de entrega: tamaño, recorte, formato automático y calidad automática sin procesado previo."
  - step: 3
    title: "Entregar optimizado en producción"
    description: "Usa las URLs de Cloudinary en tu frontend con f_auto y q_auto para servir WebP o AVIF según el navegador. Configura named transformations para estandarizar tamaños de tu diseño."
whenToUse:
  - title: "Imágenes optimizadas sin construir infraestructura"
    description: "Cuando tu web o app necesita servir imágenes en formatos modernos y tamaños responsivos sin montar pipelines propios de procesado."
  - title: "Productos con mucho contenido multimedia"
    description: "Ideal para ecommerce, medios y marketplaces que gestionan miles de imágenes y vídeos con transformaciones constantes."
  - title: "Equipos que quieren delegar el media pipeline"
    description: "Si prefieres una API madura con SDKs en todos los lenguajes en lugar de mantener workers de imagen y una CDN por tu cuenta."
tips:
  - text: "Usa siempre f_auto y q_auto en las URLs de entrega: Cloudinary elegirá el mejor formato y compresión para cada navegador sin trabajo extra."
  - text: "Define named transformations para los tamaños recurrentes de tu diseño (avatar, card, hero): centralizas cambios y evitas URLs inconsistentes."
  - text: "Vigila el consumo de créditos: transformaciones, storage y ancho de banda comparten el mismo saldo, y las transformaciones nuevas por URL pueden dispararlo."
  - text: "Activa lazy loading y tamaños responsivos con srcset en el frontend para multiplicar el ahorro de ancho de banda que ya consigues con la optimización."
faq:
  - question: "¿Qué incluye el plan gratuito de Cloudinary?"
    answer: "El plan gratuito ofrece 25 créditos mensuales que se consumen en transformaciones, almacenamiento y tráfico de imagen y vídeo, con hasta 3 usuarios en la cuenta."
  - question: "¿Cómo funcionan los créditos de Cloudinary?"
    answer: "Los créditos son la unidad de consumo unificada: el almacenamiento, el ancho de banda de entrega y las transformaciones descuentan del mismo saldo mensual. El dashboard muestra el desglose de consumo."
  - question: "¿Cloudinary soporta vídeo además de imagen?"
    answer: "Sí, permite subir, transcodificar, recortar y entregar vídeo en streaming adaptativo, con las mismas transformaciones por URL que las imágenes."
  - question: "¿Puedo migrar mis imágenes existentes a Cloudinary?"
    answer: "Sí, ofrece herramientas de migración masiva, subida desde URLs, S3 y otros orígenes, además de la opción de fetch remoto para servir imágenes externas a través de su CDN sin moverlas."
publishedAt: 2026-07-21
---

## ¿Qué es?

Cloudinary es una plataforma de gestión de medios en la nube. Permite subir, almacenar, transformar y optimizar imágenes y vídeos, entregándolos a través de una CDN global con transformaciones aplicadas en tiempo real desde la URL.

## ¿Para qué sirve?

Sirve para externalizar todo el pipeline de medios de una aplicación: subida de archivos, redimensionado y recorte dinámico, conversión a formatos modernos, optimización de peso y entrega rápida por CDN sin infraestructura propia.

## Cuándo usarla

- Cuando necesitas transformar y optimizar imágenes sin workers propios.
- Para ecommerce y medios con grandes catálogos de assets.
- Si quieres servir WebP/AVIF y tamaños responsivos automáticamente.
- Cuando el vídeo también forma parte del pipeline de contenidos.

## Cuándo NO usarla

- Si tu volumen es mínimo y un plugin de optimización local basta.
- Cuando el modelo de créditos complica prever costes en tu caso.
- Para equipos que exigen control total del almacenamiento en su nube.

## Pros

- Transformaciones por URL muy potentes y en tiempo real.
- Optimización automática de formato y calidad.
- CDN global integrada sin configuración extra.
- SDKs maduros para prácticamente todos los lenguajes.

## Contras

- El sistema de créditos puede ser difícil de prever.
- El plan gratuito se queda corto para proyectos en crecimiento.
- La cantidad de opciones abruma al principio.
