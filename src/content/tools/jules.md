---
name: Jules
description: >-
  Agente de programación asíncrono de Google que resuelve tareas reales en
  repositorios de GitHub y prepara los cambios para revisarlos.
category: agentes
tags:
  - coding-agent
  - async
  - github
  - gemini
  - google
officialSite: 'https://jules.google/'
pricing: gratis
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
featured: false
verified: false
features:
  - Ejecución asíncrona de tareas de código en la nube
  - Integración directa con repositorios de GitHub
  - Impulsado por Gemini 2.5 Pro
  - Crea ramas y pull requests con los cambios listos para revisar
  - Plan de acción visible antes de ejecutar la tarea
  - Entorno de ejecución aislado por tarea con instalación de dependencias
alternatives:
  - codex
  - cursor
  - github-copilot
relatedTools:
  - google-ai-studio
  - coderabbit
  - freebuff
howToUse:
  - step: 1
    title: Conecta tu cuenta de GitHub
    description: >-
      Entra en jules.google con tu cuenta de Google y autoriza el acceso a los
      repositorios de GitHub en los que quieres trabajar.
  - step: 2
    title: Asigna una tarea a Jules
    description: >-
      Describe la tarea en lenguaje natural (corregir un bug, añadir tests,
      actualizar dependencias). Jules clona el repo en un entorno cloud y te
      muestra su plan antes de actuar.
  - step: 3
    title: Revisa el resultado y crea el PR
    description: >-
      Cuando termina, revisa el diff generado, pide ajustes si hace falta y
      publica los cambios como rama o pull request en tu repositorio.
whenToUse:
  - title: Delegar tareas pequeñas en paralelo
    description: >-
      Cuando tienes una cola de bugs, tests o actualizaciones de dependencias
      que un agente puede resolver de forma asíncrona.
  - title: Mantenimiento rutinario de repositorios
    description: >-
      Cuando quieres delegar tareas repetitivas sobre tu repo de GitHub y
      limitarte a revisar el pull request resultante.
tips:
  - text: >-
      Las tareas bien acotadas funcionan mejor: un bug concreto o una mejora
      específica, no refactorizar medio proyecto de una vez.
  - text: >-
      Revisa el plan que propone antes de aprobarlo; corregir el rumbo ahí
      ahorra tareas desperdiciadas.
  - text: >-
      Incluye en la descripción de la tarea cómo ejecutar los tests del proyecto
      para que Jules pueda verificar sus propios cambios.
faq:
  - question: ¿Qué incluye el plan gratuito de Jules?
    answer: >-
      15 tareas de programación al día, hasta 3 tareas simultáneas y acceso a
      Gemini 2.5 Pro.
  - question: ¿Cómo trabaja Jules sobre mi repositorio?
    answer: >-
      Clona el repo en un entorno cloud aislado, ejecuta la tarea de forma
      asíncrona y te propone los cambios como rama o pull request para que los
      revises antes de fusionar.
  - question: ¿En qué se diferencia de GitHub Copilot?
    answer: >-
      Copilot asiste en tiempo real dentro del editor, mientras Jules trabaja de
      forma asíncrona en tareas completas sobre el repositorio y entrega los
      cambios listos para revisión.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/jules.webp
---

## ¿Qué es?

Jules es el agente de programación asíncrono de Google, impulsado por Gemini 2.5 Pro. Le asignas tareas reales sobre tus repositorios de GitHub, trabaja en la nube mientras haces otras cosas y te devuelve los cambios preparados para revisar.

## ¿Para qué sirve?

Sirve para delegar trabajo de programación delegable: corregir bugs, escribir tests, actualizar dependencias o implementar pequeñas features, mientras mantienes el control revisando el plan y el diff final antes de fusionar nada.

## Cuándo usarla

- Cuando tienes una cola de tareas pequeñas y medianas que quieres paralelizar.
- Para mantenimiento rutinario: dependencias, tests, correcciones puntuales.
- Si ya trabajas con GitHub y quieres un agente asíncrono gratuito.

## Cuándo NO usarla

- Para decisiones de arquitectura o cambios grandes que requieren contexto profundo del negocio.
- Si tu código no está en GitHub o no puedes dar acceso a un servicio de Google.

## Pros

- Gratis con 15 tareas diarias y 3 simultáneas.
- Flujo seguro: plan visible, entorno aislado y revisión antes de fusionar.
- Integración natural con GitHub y el ecosistema Google.

## Contras

- Los límites diarios se agotan rápido con uso intensivo.
- Solo trabaja con repositorios de GitHub.
