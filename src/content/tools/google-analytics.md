---
name: Google Analytics
description: Analítica de tráfico web y apps de Google con gran soporte.
category: analytics
tags: [analytics, web, traffic, google, ga4]
officialSite: https://analytics.google.com
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility: [Web]
featured: false
verified: false
features:
  - Medición de tráfico web y de apps con GA4
  - Modelo basado en eventos y parámetros personalizados
  - Informes de adquisición, engagement y retención
  - Integración nativa con Google Ads y Search Console
  - Audiencias para remarketing y segmentación
  - Exportación a BigQuery para análisis avanzado
alternatives: [umami, cloudflare-web-analytics, ahrefs-web-analytics]
relatedTools: [microsoft-clarity, mixpanel]
howToUse:
  - step: 1
    title: "Crear la propiedad GA4"
    description: "Accede a analytics.google.com con tu cuenta de Google, crea una cuenta de Analytics y una propiedad GA4. Añade un flujo de datos web indicando la URL de tu sitio para obtener el ID de medición."
  - step: 2
    title: "Instalar la etiqueta de medición"
    description: "Añade el snippet gtag.js a todas las páginas de tu web, idealmente mediante Google Tag Manager. En frameworks modernos existen componentes y plugins que simplifican la integración."
  - step: 3
    title: "Configurar eventos y conversiones"
    description: "Marca los eventos clave como conversiones desde el panel, conecta Search Console y Google Ads, y crea informes personalizados en la sección Explorar para responder preguntas concretas del negocio."
whenToUse:
  - title: "Analítica estándar para webs de marketing"
    description: "Cuando necesitas medir adquisición, campañas y conversiones con la herramienta que el ecosistema de marketing digital usa como referencia."
  - title: "Integración con Google Ads"
    description: "Imprescindible si inviertes en publicidad de Google: la importación de conversiones y las audiencias compartidas son nativas."
  - title: "Equipos que necesitan documentación y talento"
    description: "Al ser el estándar de la industria, hay infinidad de cursos, tutoriales y profesionales que ya saben usarlo."
tips:
  - text: "Usa Google Tag Manager en lugar de pegar etiquetas a mano: centraliza scripts, facilita cambios y reduce errores de implementación."
  - text: "Configura el consent mode si operas en Europa para adaptar la medición al estado de consentimiento de cookies de cada visitante."
  - text: "Marca como conversiones solo los eventos que realmente importan al negocio; demasiadas conversiones diluyen el análisis."
  - text: "Activa la exportación gratuita a BigQuery desde el principio si prevés necesitar análisis histórico detallado en el futuro."
faq:
  - question: "¿Qué incluye el plan gratuito de Google Analytics?"
    answer: "Google Analytics estándar es gratis para la mayoría de webs y apps, con límites muy altos de recolección. La versión empresarial Analytics 360 es de pago y añade SLAs, más retención y soporte."
  - question: "¿GA4 usa cookies?"
    answer: "Sí, GA4 utiliza cookies de primera parte por defecto, aunque ofrece consent mode para adaptar la medición. En la UE normalmente necesitas un banner de consentimiento para cargarlo legalmente."
  - question: "¿Puedo recuperar mis datos de Universal Analytics?"
    answer: "Universal Analytics dejó de procesar datos y su histórico se eliminó. Solo conservas lo que exportaste en su día; GA4 empieza a acumular datos desde su instalación."
  - question: "¿Google Analytics sirve para apps móviles?"
    answer: "Sí, mediante el SDK de Firebase, que envía eventos a la misma propiedad GA4 y permite medir web y app de forma unificada."
publishedAt: 2026-07-21
---

## ¿Qué es?

Google Analytics es la plataforma de analítica web y de apps de Google, actualmente en su versión GA4 basada en eventos. Es el estándar de facto de la industria para medir tráfico, adquisición y conversiones.

## ¿Para qué sirve?

Sirve para medir de dónde llegan los visitantes, qué hacen en tu web o app y si completan objetivos de negocio, con integración directa con Google Ads, Search Console y el resto del ecosistema de marketing de Google.

## Cuándo usarla

- Cuando inviertes en Google Ads o SEO y necesitas cerrar el círculo de atribución.
- Para webs de marketing, ecommerce y medios con equipos que ya lo conocen.
- Si necesitas audiencias de remarketing y exportación a BigQuery.
- Cuando el presupuesto es cero y el volumen de tráfico es alto.

## Cuándo NO usarla

- Si la privacidad es prioritaria y quieres evitar cookies y banners.
- Cuando buscas analítica de producto con usuarios identificados.
- Para equipos que valoran simplicidad: GA4 tiene fama de complejo.
- Si no quieres compartir datos de tu web con Google.

## Pros

- Gratis con límites suficientes para casi cualquier web.
- Integración nativa con Google Ads y Search Console.
- Enorme ecosistema de documentación, cursos y profesionales.
- Exportación gratuita a BigQuery para análisis avanzado.

## Contras

- La interfaz de GA4 tiene una curva de aprendizaje pronunciada.
- Requiere banner de consentimiento de cookies en la UE.
- Menos orientado a privacidad que las alternativas modernas.
- El muestreo y los umbrales pueden limitar informes detallados.
