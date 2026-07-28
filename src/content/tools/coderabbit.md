---
name: CodeRabbit
description: >-
  Revisiones de código con IA para pull requests, IDE y terminal, con resúmenes
  automáticos y acceso gratuito para open source.
category: agentes
tags:
  - code-review
  - ai
  - pull-requests
  - ide
  - cli
officialSite: 'https://www.coderabbit.ai'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - IDE
  - CLI
featured: false
verified: false
features:
  - Revisiones automáticas de pull requests con comentarios línea a línea
  - Resúmenes de PR con descripción de cambios y diagramas
  - Revisión desde el IDE y la terminal con su CLI
  - Sugerencias de corrección aplicables con un clic
  - Configuración por repositorio con reglas propias
  - Funciones Pro+ gratuitas para repositorios open source
alternatives:
  - github-copilot
  - codex
  - cursor
relatedTools:
  - jules
  - freebuff
howToUse:
  - step: 1
    title: Conecta tu proveedor de Git
    description: >-
      Regístrate en coderabbit.ai e instala la app en GitHub, GitLab o Azure
      DevOps. El plan gratuito cubre repos públicos y privados ilimitados.
  - step: 2
    title: Abre un pull request
    description: >-
      CodeRabbit revisa automáticamente cada PR nuevo: publica un resumen de los
      cambios, comenta problemas línea a línea y sugiere mejoras.
  - step: 3
    title: Revisa también desde IDE o CLI
    description: >-
      Instala la extensión de IDE o la CLI para pedir revisiones locales de tus
      cambios antes de siquiera abrir el PR.
whenToUse:
  - title: Equipos con muchos pull requests
    description: >-
      Cuando el code review humano es el cuello de botella y quieres una primera
      pasada automática en cada PR.
  - title: Proyectos open source
    description: >-
      Cuando mantienes un repositorio público y quieres revisiones automáticas
      con funciones Pro+ gratuitas.
tips:
  - text: >-
      Personaliza las instrucciones de revisión por repo para que CodeRabbit
      aplique vuestras convenciones y ignore falsos positivos habituales.
  - text: >-
      Si mantienes un proyecto open source, activa las funciones Pro+ gratuitas
      que ofrecen para ese tipo de repositorios.
  - text: >-
      Usa el chat dentro del PR para discutir una sugerencia concreta en lugar
      de descartarla directamente.
faq:
  - question: ¿Qué incluye el plan gratuito de CodeRabbit?
    answer: >-
      Repos públicos y privados ilimitados, resúmenes de PR y revisiones
      limitadas en IDE y CLI; los proyectos open source reciben funciones Pro+.
  - question: ¿Con qué plataformas Git funciona?
    answer: >-
      Se integra con GitHub, GitLab y Azure DevOps, revisando automáticamente
      los pull requests que se abran en los repositorios conectados.
  - question: ¿Sustituye la revisión humana?
    answer: >-
      No; acelera la revisión detectando problemas comunes y resumiendo cambios,
      pero las decisiones de arquitectura y negocio siguen requiriendo revisores
      humanos.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/coderabbit.webp
---

## ¿Qué es?

CodeRabbit es una herramienta de revisión de código con IA que analiza pull requests automáticamente, publica resúmenes de los cambios y comenta problemas línea a línea. También ofrece revisión desde el IDE y la terminal, y regala funciones Pro+ a proyectos open source.

## ¿Para qué sirve?

Sirve para acelerar el code review: detecta bugs, problemas de estilo y riesgos antes de que un humano revise, resume PRs grandes en segundos y permite pedir revisiones locales mientras aún estás programando.

## Cuándo usarla

- Cuando tu equipo abre muchos PRs y el cuello de botella es la revisión.
- Para mantener calidad constante en repos con contribuidores variados.
- Si mantienes open source y quieres revisiones automáticas de nivel Pro+ gratis.

## Cuándo NO usarla

- Si tu código es altamente confidencial y no puedes dar acceso a un servicio externo.
- En equipos muy pequeños con PRs triviales donde el review humano ya es instantáneo.

## Pros

- Plan gratuito con repos ilimitados y resúmenes de PR.
- Comentarios accionables línea a línea con sugerencias aplicables.
- Funciones Pro+ gratuitas para open source.

## Contras

- Las revisiones en IDE y CLI están limitadas en el plan gratuito.
- Puede generar falsos positivos si no se configuran las reglas del repo.
