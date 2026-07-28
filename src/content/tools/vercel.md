---
name: Vercel
description: >-
  Plataforma de despliegue frontend con CDN global, SSL automático y previews en
  cada push.
category: hosting
tags:
  - hosting
  - deploy
  - edge
  - serverless
  - cdn
  - frontend
officialSite: 'https://vercel.com'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: true
verified: false
features:
  - Deploy automático desde Git con preview por rama y pull request
  - CDN global edge con caché inteligente y SSL automático
  - Funciones serverless y edge functions integradas
  - Soporte nativo para Next.js y frameworks frontend populares
  - 'Analytics, Speed Insights y observabilidad integrados'
  - Dominios personalizados con HTTPS gestionado y rollback instantáneo
alternatives:
  - netlify
  - render
  - railway
  - deno-deploy
relatedTools:
  - github
  - github-actions
  - next-js
howToUse:
  - step: 1
    title: Importa tu repositorio
    description: >-
      Crea una cuenta en vercel.com con GitHub, GitLab o Bitbucket. Pulsa Add
      New Project e importa el repositorio. Vercel detecta el framework
      (Next.js, Vite, Astro...) y propone el build command y el directorio de
      salida automáticamente.
  - step: 2
    title: Configura variables de entorno y dominio
    description: >-
      Define las variables en la sección Environment Variables del proyecto,
      separadas por entorno si lo necesitas. Añade tu dominio en Settings y
      apunta los DNS a Vercel; el certificado SSL se emite y renueva solo.
  - step: 3
    title: Despliega y revisa los previews
    description: >-
      Cada push a la rama principal genera un deploy de producción y cada pull
      request genera una URL de preview única. Usa el dashboard para ver logs,
      analytics y volver a un deploy anterior con un clic si algo falla.
whenToUse:
  - title: Frontends y aplicaciones Next.js en producción
    description: >-
      Cuando quieres desplegar una app React, Next.js, Vue, Svelte o Astro con
      CDN global, SSL y previews sin configurar servidores ni pipelines de CI
      propios.
  - title: Equipos que iteran con previews por pull request
    description: >-
      Para flujos de trabajo donde cada cambio necesita una URL pública de
      revisión antes de mergear, con comentarios y checks integrados
      directamente en el PR.
  - title: Proyectos personales y portfolios sin coste
    description: >-
      El plan Hobby cubre proyectos personales no comerciales con cuotas
      generosas, ideal para portfolios, blogs, documentación y demos públicas.
tips:
  - text: >-
      El plan Hobby es solo para uso personal no comercial; si el proyecto
      genera ingresos o es de una empresa, necesitas el plan Pro aunque el
      tráfico sea bajo.
  - text: >-
      Usa edge functions para lógica cercana al usuario (redirects, A/B testing,
      auth) y serverless functions para trabajo más pesado con mayor tiempo de
      ejecución.
  - text: >-
      Activa la protección de previews con Vercel Authentication si tus ramas
      contienen contenido que no debe ser accesible públicamente.
  - text: >-
      Ante un deploy roto, usa el rollback instantáneo del dashboard para volver
      a la versión anterior en segundos sin esperar un nuevo build.
faq:
  - question: ¿Qué incluye el plan gratuito de Vercel?
    answer: >-
      El plan Hobby incluye 1 millón de peticiones edge, 1 millón de
      invocaciones de funciones y hasta 100 deploys al día, pensado para
      proyectos personales no comerciales.
  - question: ¿Vercel solo sirve para Next.js?
    answer: >-
      No. Aunque Vercel es la empresa detrás de Next.js y la integración es
      perfecta, soporta decenas de frameworks como Vite, Astro, Remix, SvelteKit
      y Nuxt, además de sitios estáticos y funciones en varios lenguajes.
  - question: ¿Puedo usar mi propio dominio con SSL?
    answer: >-
      Sí. Añades el dominio en el proyecto, apuntas un registro A o CNAME a
      Vercel y el certificado HTTPS se genera y renueva automáticamente sin
      coste adicional.
  - question: ¿Qué pasa si supero las cuotas del plan gratuito?
    answer: >-
      Vercel avisa al acercarte a los límites; al superarlos, las funciones
      pueden dejar de responder hasta el siguiente ciclo de facturación o hasta
      que actualices a un plan de pago.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/vercel.webp
---

## ¿Qué es?

Vercel es una plataforma de despliegue orientada a frontend que convierte cualquier repositorio Git en una aplicación publicada con CDN global, SSL y previews automáticos. Es la empresa creadora de Next.js, aunque soporta prácticamente cualquier framework web moderno.

## ¿Para qué sirve?

Sirve para publicar sitios y aplicaciones web en producción sin gestionar servidores, con funciones serverless y edge para el backend ligero, previews por cada pull request y un dashboard con logs, analytics y rollback instantáneo.

## Cuándo usarla

- Para desplegar aplicaciones Next.js, React, Vue o Astro con cero configuración de infraestructura.
- Cuando tu equipo necesita una URL de preview por cada pull request.
- Para proyectos personales que encajan en el plan Hobby gratuito.

## Cuándo NO usarla

- Para backends con procesos de larga duración, workers persistentes o WebSockets intensivos.
- Si necesitas control total de la infraestructura o evitar el vendor lock-in.

## Pros

- Experiencia de deploy más pulida del mercado, especialmente con Next.js.
- Previews automáticos por rama y pull request.
- CDN y edge network global con SSL gestionado.
- Plan Hobby generoso para proyectos personales.

## Contras

- El plan gratuito no permite uso comercial.
- Los costes escalan rápido con tráfico alto y funciones intensivas.
