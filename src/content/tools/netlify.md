---
name: Netlify
description: Plataforma completa para desplegar proyectos web modernos, funciones serverless y sitios Jamstack.
category: hosting
tags: [hosting, serverless, forms, deploy, jamstack]
officialSite: https://www.netlify.com
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - Deploy continuo desde Git con Deploy Previews por pull request
  - Funciones serverless y edge functions sin gestionar servidores
  - Formularios gestionados sin backend propio
  - CDN global con invalidación instantánea de caché y SSL automático
  - Despliegues atómicos con rollback a cualquier versión anterior
  - Netlify CLI para desarrollo local y despliegue manual
alternatives: [vercel, render, railway, cloudflare]
relatedTools: [github, github-actions, astro]
howToUse:
  - step: 1
    title: "Conecta tu repositorio"
    description: "Regístrate en netlify.com con tu cuenta de Git y pulsa Add new site. Importa el repositorio y Netlify detectará el framework, proponiendo el build command y el directorio de publicación de forma automática."
  - step: 2
    title: "Ajusta build, variables y dominio"
    description: "Revisa la configuración de build en Site settings, añade las variables de entorno necesarias y conecta tu dominio propio. Netlify emite el certificado SSL automáticamente y sirve el sitio desde su CDN global."
  - step: 3
    title: "Automatiza con cada push"
    description: "Cada push a la rama principal publica una nueva versión y cada pull request genera un Deploy Preview con URL única. Si algo falla, vuelve a cualquier deploy anterior desde el dashboard con un clic."
whenToUse:
  - title: "Sitios Jamstack y aplicaciones frontend"
    description: "Cuando despliegas sitios estáticos o SPAs con Astro, Hugo, Next.js, Vite o similares y quieres CDN, SSL y previews sin tocar infraestructura."
  - title: "Proyectos que necesitan formularios sin backend"
    description: "Para landing pages y sitios de marketing que capturan datos con Netlify Forms sin montar una API propia ni gestionar una base de datos."
  - title: "Equipos con flujo de revisión por pull request"
    description: "Cuando cada cambio debe poder revisarse en una URL pública aislada antes de llegar a producción."
tips:
  - text: "Vigila los créditos de uso del plan gratuito en el dashboard; los builds, el ancho de banda y las funciones consumen del mismo saldo mensual."
  - text: "Usa netlify.toml en la raíz del repo para versionar la configuración de build, redirects y headers junto al código."
  - text: "Aprovecha los deploys atómicos: puedes hacer rollback instantáneo a cualquier deploy anterior sin volver a construir el sitio."
  - text: "Para desarrollo local fiel a producción, usa netlify dev, que levanta el sitio con funciones y redirects igual que en la nube."
faq:
  - question: "¿Qué incluye el plan gratuito de Netlify?"
    answer: "El plan gratuito incluye 300 créditos de uso al mes, un build simultáneo, dominios propios con SSL y Deploy Previews en cada pull request."
  - question: "¿Qué diferencia hay entre Netlify y Vercel?"
    answer: "Ambos despliegan frontends con CDN y serverless. Vercel brilla con Next.js (su propio framework) y Netlify destaca en sitios Jamstack, formularios gestionados y un enfoque agnóstico de framework."
  - question: "¿Cómo funcionan los formularios de Netlify?"
    answer: "Añades el atributo netlify a un form HTML y Netlify captura los envíos sin backend. Las respuestas se consultan en el dashboard y pueden reenviarse por email o webhooks."
  - question: "¿Puedo desplegar sin conectar Git?"
    answer: "Sí, con Netlify CLI puedes arrastrar una carpeta al dashboard o ejecutar netlify deploy para publicar builds locales, útil para pruebas rápidas o flujos de CI externos."
publishedAt: 2026-07-21
---

## ¿Qué es?

Netlify es una plataforma de despliegue y hosting pionera del enfoque Jamstack: conectas un repositorio Git y cada push publica el sitio en una CDN global con SSL, funciones serverless y previews por pull request, todo sin gestionar servidores.

## ¿Para qué sirve?

Sirve para publicar sitios estáticos, aplicaciones frontend y APIs ligeras con funciones serverless, gestionar formularios sin backend propio y mantener un flujo de despliegue continuo con rollbacks instantáneos.

## Cuándo usarla

- Para sitios Jamstack con Astro, Hugo, Eleventy, Vite o Next.js.
- Cuando necesitas formularios funcionales sin programar un backend.
- Si tu equipo trabaja con previews por pull request en cada cambio.

## Cuándo NO usarla

- Para aplicaciones con procesos de larga duración o estado persistente en servidor.
- Si tu stack es un backend monolítico tradicional que necesita un servidor completo.

## Pros

- Deploy continuo con previews automáticos y rollback instantáneo.
- Formularios gestionados sin escribir backend.
- CLI potente que replica el entorno de producción en local.
- CDN global con invalidación de caché inmediata.

## Contras

- El sistema de créditos del plan gratuito puede quedarse corto con builds frecuentes.
- Las funciones serverless tienen límites de tiempo de ejecución ajustados.
