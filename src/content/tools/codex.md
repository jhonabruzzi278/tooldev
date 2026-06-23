---
name: Codex
description: Agente de ingeniería de software de OpenAI que ejecuta tareas de código en un entorno sandbox seguro. Lee tu codebase, escribe código, ejecuta tests y crea pull requests de forma completamente autónoma.
category: agentes
tags: [ia, agente, openai, codigo, codex, autonomo, github, cli]
officialSite: https://openai.com/codex
pricing: pago
openSource: false
technicalLevel: intermedio
compatibility: [Web, API, CLI, macOS, Windows, Linux]
featured: false
verified: false
screenshots:
  - /screenshots/codex.png
  - /screenshots/codex1.png
features:
  - Agente autónomo que ejecuta tareas completas de código end-to-end
  - Sandbox seguro con acceso a internet deshabilitado por defecto
  - Lee y modifica tu codebase completo sin límite de contexto práctico
  - Ejecuta comandos de terminal, tests y builds dentro del sandbox
  - Crea pull requests en GitHub automáticamente
  - Integración con ChatGPT Plus y API de OpenAI
  - Soporte para múltiples tareas en paralelo
  - Logs detallados de cada acción ejecutada
alternatives: [claude, kiro, cursor, devin]
howToUse:
  - step: 1
    title: "Accede a Codex en ChatGPT"
    description: "Codex está disponible en ChatGPT Plus y Team. Ve a chatgpt.com, selecciona el modelo Codex en el selector de modelos. Conecta tu repositorio de GitHub desde la configuración."
  - step: 2
    title: "Conecta tu repositorio"
    description: "En la integración de GitHub, autoriza acceso a los repositorios que quieres usar. Codex clona el repo en su sandbox para leer el código y crear PRs automáticamente."
  - step: 3
    title: "Describe la tarea"
    description: "Escribe qué quieres que haga: 'implementa paginación en el endpoint /api/users', 'añade tests para el módulo de autenticación', 'refactoriza el componente Header para usar shadcn'. Sé específico."
  - step: 4
    title: "Revisa los logs y el PR"
    description: "Codex muestra logs en tiempo real de cada acción. Al terminar, crea un PR con los cambios. Revisa el diff en GitHub antes de hacer merge como cualquier PR normal."
whenToUse:
  - title: "Tareas de código bien definidas"
    description: "Para implementar features con requisitos claros, añadir tests a módulos existentes, refactorizar código o corregir bugs con reproducción conocida."
  - title: "Tareas repetitivas y mecánicas"
    description: "Para migrar código a nuevas APIs, actualizar dependencias, añadir tipos TypeScript a código JavaScript existente o aplicar cambios consistentes en múltiples archivos."
  - title: "Exploración de soluciones alternativas"
    description: "Lanza múltiples tareas en paralelo para explorar diferentes aproximaciones al mismo problema. Codex trabaja de forma asíncrona — lanzas tareas y revisas los PRs cuando están listos."
examples:
  - title: "Tarea de implementación con contexto"
    code: |
      # Prompt de ejemplo para Codex:

      "En el repositorio my-app, implementa rate limiting para la API.

      Contexto:
      - Express.js con TypeScript
      - Tests con Jest en src/__tests__/
      - Seguir el patrón de middleware en src/middleware/

      Requisitos:
      1. Middleware de rate limiting con express-rate-limit
      2. Límite configurable por variable de entorno RATE_LIMIT_MAX
      3. Tests unitarios del middleware
      4. Documentación en el README

      Crea un PR con los cambios."
    output: "Codex implementa el middleware, crea tests, actualiza el README y abre un PR con todos los cambios."
tips:
  - text: "Cuanto más contexto des sobre el stack, convenciones y archivos existentes, mejor será el output. Menciona qué patrones seguir y qué archivos son relevantes."
  - text: "Codex es asíncrono — lanza la tarea y sigue trabajando en otra cosa. Revisa el PR cuando llegue la notificación de GitHub."
  - text: "Para tareas de refactoring grandes, divide en pasos más pequeños. 'Refactoriza el módulo completo' da peores resultados que varios PRs enfocados."
  - text: "Siempre revisa el PR antes de hacer merge. Codex puede tomar decisiones de diseño que no se alinean con las convenciones de tu proyecto."
faq:
  - question: "¿Codex vs GitHub Copilot?"
    answer: "Codex es un agente autónomo que implementa tareas completas y crea PRs. Copilot es asistencia en tiempo real dentro del editor. Son complementarios, no competidores directos."
  - question: "¿Es seguro dar acceso a mi repositorio?"
    answer: "Codex ejecuta en un sandbox aislado sin acceso a internet por defecto. El acceso a GitHub es solo para leer el código y crear PRs. OpenAI tiene documentación detallada sobre las medidas de seguridad."
  - question: "¿Cuánto cuesta?"
    answer: "Codex está incluido en ChatGPT Plus ($20/mes) y Team ($25/usuario/mes). El uso via API tiene precios por token según el modelo usado."
  - question: "¿Qué pasa si Codex falla o produce código incorrecto?"
    answer: "Todo cambio es un PR — nunca modifica tu código directamente. Si el PR no es correcto, simplemente ciérralo sin hacer merge. Los logs te dicen exactamente qué ejecutó."
publishedAt: 2026-06-22
---

## ¿Qué es?

Codex es el agente de software de OpenAI que ejecuta tareas de código de forma completamente autónoma en un entorno sandbox seguro. A diferencia de los asistentes de chat, Codex actúa: lee el código, escribe cambios, ejecuta tests y crea pull requests.

## ¿Para qué sirve?

Para delegar tareas de programación completas a un agente autónomo: implementar features, escribir tests, refactorizar código y crear PRs en GitHub sin intervención manual.

## Cuándo usarla

- Para tareas bien definidas con requisitos claros.
- Para trabajo repetitivo o mecánico (migraciones, tipos, tests).
- Cuando quieres explorar múltiples soluciones en paralelo.

## Cuándo NO usarla

- Para decisiones de arquitectura que requieren contexto de negocio.
- Para tareas ambiguas donde el "qué" aún no está claro.
- Si el proyecto tiene restricciones de seguridad sobre acceso externo al código.

## Pros

- Completamente autónomo — lanzas la tarea y Codex trabaja solo.
- Sandbox seguro con logs detallados de cada acción.
- Crea PRs listos para review, no solo sugiere código.
- Múltiples tareas en paralelo.

## Contras

- Requiere suscripción de pago.
- No es adecuado para tareas ambiguas o que requieren mucho contexto de negocio.
- El sandbox sin internet limita algunas tareas que dependen de APIs externas.
