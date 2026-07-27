---
name: Cloudflare Web Analytics
description: "Analítica web privacy-first de Cloudflare: sin cookies, sin datos personales y gratis para cualquier web."
category: analytics
tags: [analytics, privacy, no-cookies, web, cloudflare]
officialSite: https://www.cloudflare.com/web-analytics/
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility: [Web]
featured: false
verified: false
features:
  - Métricas de tráfico sin cookies ni datos personales
  - Gratis para cualquier web sin tope de tráfico
  - Métricas de Web Vitals y rendimiento real de usuarios
  - Disponible aunque tu web no use el proxy de Cloudflare
  - Datos de bots y tráfico automatizado diferenciados
  - Panel simple con páginas, referrers y países
alternatives: [umami, google-analytics, ahrefs-web-analytics]
relatedTools: [cloudflare, microsoft-clarity]
howToUse:
  - step: 1
    title: "Activar Web Analytics en el panel"
    description: "Accede al dashboard de Cloudflare, entra en la sección Web Analytics y añade tu sitio. No es necesario que el dominio use la CDN ni el proxy de Cloudflare."
  - step: 2
    title: "Instalar el beacon de JavaScript"
    description: "Copia el snippet JS que te proporciona el panel y pégalo en la cabecera de tu web. Si tu sitio ya está detrás del proxy de Cloudflare, puedes activar la inyección automática del beacon."
  - step: 3
    title: "Revisar métricas y Web Vitals"
    description: "Consulta visitas, páginas vistas, referrers, países y navegadores desde el panel. Revisa las métricas de Core Web Vitals medidas con usuarios reales para detectar problemas de rendimiento."
whenToUse:
  - title: "Analítica gratuita ilimitada y privada"
    description: "Cuando quieres métricas de tráfico sin cookies, sin límites de volumen y sin pagar nada, independientemente del tamaño de tu web."
  - title: "Medir rendimiento real con Web Vitals"
    description: "Si te interesa conocer LCP, CLS y otros Core Web Vitals medidos en usuarios reales, no solo en tests de laboratorio."
  - title: "Clientes y webs sin presupuesto"
    description: "Ideal para añadir analítica a proyectos de clientes sin generar costes recurrentes ni fricción legal por cookies."
tips:
  - text: "Combínala con Microsoft Clarity si necesitas mapas de calor y grabaciones: ambas son gratuitas y se complementan sin solaparse."
  - text: "Si tu web ya usa el proxy de Cloudflare, activa la inyección automática del beacon para no tocar el código del sitio."
  - text: "Revisa la sección de Web Vitals por página: te permite priorizar optimizaciones de rendimiento donde más usuarios afectados hay."
  - text: "Usa el filtrado de bots para interpretar picos de tráfico: Cloudflare distingue tráfico humano de automatizado mejor que la mayoría de herramientas."
faq:
  - question: "¿Qué incluye el plan gratuito de Cloudflare Web Analytics?"
    answer: "Es totalmente gratis para cualquier web: sin cookies, sin recolección de datos personales y sin tope de tráfico, tanto si usas la CDN de Cloudflare como si no."
  - question: "¿Necesito usar la CDN de Cloudflare para la analítica?"
    answer: "No. Puedes añadir el beacon de JavaScript a cualquier web aunque no uses el proxy ni la CDN de Cloudflare. Solo necesitas una cuenta gratuita."
  - question: "¿Cloudflare Web Analytics usa cookies?"
    answer: "No. No utiliza cookies ni identificadores persistentes y no recoge datos personales, por lo que no requiere banner de consentimiento en la mayoría de jurisdicciones."
  - question: "¿Qué métricas de rendimiento ofrece?"
    answer: "Mide Core Web Vitals con usuarios reales, incluyendo LCP, CLS e INP, además de las métricas clásicas de tráfico como visitas, páginas vistas y tiempo de carga."
publishedAt: 2026-07-21
---

## ¿Qué es?

Cloudflare Web Analytics es el servicio gratuito de analítica web de Cloudflare. Ofrece métricas de tráfico y de rendimiento real (Web Vitals) sin cookies ni datos personales, disponible para cualquier web aunque no use la CDN de Cloudflare.

## ¿Para qué sirve?

Sirve para medir visitas, páginas vistas, referrers y países de forma privada y gratuita, y para monitorizar Core Web Vitals con datos de usuarios reales, todo sin límites de tráfico ni costes.

## Cuándo usarla

- Cuando quieres analítica gratis sin límite de tráfico y sin cookies.
- Si necesitas métricas de Web Vitals con usuarios reales.
- Para webs de clientes donde el coste recurrente no es viable.
- Cuando ya usas Cloudflare y quieres todo en el mismo panel.

## Cuándo NO usarla

- Si necesitas eventos personalizados, funnels o conversiones complejas.
- Cuando requieres analítica de producto con usuarios identificados.
- Para informes de marketing con atribución de campañas avanzada.

## Pros

- Completamente gratis y sin tope de tráfico.
- Sin cookies ni datos personales por diseño.
- Incluye Core Web Vitals medidos con usuarios reales.
- Funciona con cualquier web, use o no la CDN de Cloudflare.

## Contras

- Funciones limitadas frente a GA4 o herramientas de product analytics.
- No soporta eventos personalizados ni funnels.
- Retención y granularidad de datos más limitadas que otras opciones.
