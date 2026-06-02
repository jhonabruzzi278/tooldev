---
name: Linear
description: Herramienta de gestión de proyectos moderna y ultrarrápida para equipos de ingeniería y producto.
category: productividad
tags: [proyectos, issues, agil, ingenieria, producto, tracking]
officialSite: https://linear.app
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web, macOS, Windows, iOS, Android]
featured: false
features:
  - Gestión de issues con keyboard-first
  - Roadmaps visuales con timelines automáticos
  - Cycles para sprints con métricas de velocidad
  - Vistas kanban, lista y calendario
  - Integración con GitHub y GitLab
  - Notificaciones inteligentes y triage automático
  - API GraphQL para integraciones custom
alternatives: []
relatedTools: [github, notion, visual-studio-code]
howToUse:
  - step: 1
    title: "Crear un workspace y configurar equipos"
    description: "Regístrate en linear.app y crea tu workspace. Define los equipos (Engineering, Design, Product) con sus respectivos miembros. Configura las etiquetas, prioridades y estados personalizados según tu flujo de trabajo."
  - step: 2
    title: "Gestionar issues con atajos de teclado"
    description: "Presiona `C` para crear un nuevo issue, escribe el título y asigna responsable, prioridad y ciclo con `Cmd+Enter`. Usa `T` para cambiar estado (todo, in progress, done) y `F` para filtrar por responsable, proyecto o etiqueta. Todo sin usar el mouse."
  - step: 3
    title: "Planificar sprints con cycles"
    description: "Crea un cycle con fechas de inicio y fin. Arrastra issues desde el backlog al cycle activo. Monitorea el burndown chart y la velocidad del equipo automáticamente durante el sprint."
  - step: 4
    title: "Visualizar roadmaps y hacer tracking de progreso"
    description: "Usa la vista de roadmap para planificar features por trimestre. Vincula issues a proyectos y visualiza el timeline con fechas estimadas. Integra con GitHub para ver el estado de branches y PRs directamente en cada issue."
whenToUse:
  - title: "Equipos de ingeniería que buscan velocidad y fluidez"
    description: "Cuando tu equipo de desarrollo está frustrado con la lentitud de Jira o la complejidad de otras herramientas. Linear está diseñado para ser extremadamente rápido, con tiempos de respuesta en milisegundos y una interfaz sin fricción."
  - title: "Startups y equipos ágiles con ciclos de desarrollo rápidos"
    description: "Si trabajas con sprints de 1-2 semanas, necesitas estimar velocidad del equipo y mantener un backlog ordenado. Linear automatiza métricas de rendimiento y facilita la planificación de ciclos."
  - title: "Empresas que integran gestión de proyectos con GitHub"
    description: "Cuando tu flujo de desarrollo está centrado en GitHub y quieres que los issues de Linear se vinculen automáticamente con branches, PRs y releases, sincronizando estado en ambas plataformas."
examples:
  - title: "Crear un issue desde la CLI de Linear"
    code: |
      linear issue create --title "Arreglar bug de autenticación" \
                          --priority high \
                          --assignee @juan \
                          --label bug \
                          --project "Sprint 12"
    output: "Issue creado automáticamente en el backlog con prioridad alta, asignado a Juan, etiquetado como bug y vinculado al proyecto Sprint 12."
  - title: "Consultar issues con la API GraphQL"
    code: |
      query {
        issues(filter: { assignee: { name: { eq: "María" } } }) {
          nodes {
            title
            state { name }
            priority
          }
        }
      }
    output: "Devuelve todos los issues asignados a María con su título, estado actual y prioridad. Útil para dashboards personalizados o integraciones con otras herramientas."
tips:
  - text: "Aprende los atajos de teclado desde el primer día. Presiona `?` para ver la lista completa. Los más útiles son: `C` (crear issue), `Cmd+K` (command palette), `F` (filtrar) y `V` (cambiar vista)."
  - text: "Configura la integración con GitHub automáticamente. Cuando creas una branch desde Linear, el nombre incluye el ID del issue y el PR se vincula automáticamente. El estado del issue se actualiza solo cuando el PR se mergea."
  - text: "Usa Triage para clasificar issues entrantes. Linear asigna automáticamente bugs y solicitudes al responsable correcto y los prioriza, evitando que el backlog se convierta en un cementerio de tareas."
  - text: "No crees issues sin un responsable y una prioridad clara. Un issue sin dueño no se mueve. Usa `P0` para crítico, `P1` para urgente, `P2` para normal y `P3` para baja prioridad."
  - text: "Aprovecha las vistas guardadas para crear filtros personalizados que uses frecuentemente: 'Mis bugs sin resolver', 'Issues bloqueados', 'Tareas sin dueño'. Crea un sistema de revisión semanal del backlog."
faq:
  - question: "¿Linear vs Jira, por qué elegir Linear?"
    answer: "Jira es extremadamente configurable pero lento y complejo. Linear es lo opuesto: rápido, minimalista y diseñado específicamente para equipos de software. Si valoras la velocidad por encima de la personalización extrema, Linear es la mejor opción."
  - question: "¿Linear tiene plan gratuito?"
    answer: "Sí, Linear tiene un plan gratuito para equipos pequeños con funcionalidades básicas. El plan premium desbloquea ciclos ilimitados, roadmaps avanzados, integraciones y métricas de equipo. La mayoría de startups comienzan con el plan gratuito y migran cuando crecen."
  - question: "¿Puedo migrar mis proyectos de Jira a Linear?"
    answer: "Sí, Linear ofrece una herramienta de importación desde Jira, Asana, GitHub Issues y otras plataformas. La migración incluye issues, comentarios, adjuntos y relaciones. El proceso es guiado y toma entre 30 minutos y unas horas dependiendo del volumen."
  - question: "¿Linear funciona para equipos no técnicos como marketing o diseño?"
    answer: "Linear está optimizado para equipos de ingeniería y producto. Equipos de marketing o diseño pueden usarlo pero encontrarán que le faltan funciones como calendarios editoriales, proofing de diseño o flujos de aprobación que herramientas como Asana o Notion sí ofrecen."
publishedAt: 2026-06-01
---

## ¿Qué es?

Linear es una herramienta de gestión de proyectos diseñada específicamente para equipos de ingeniería y producto. Se destaca por su velocidad extrema, interfaz keyboard-first y flujos optimizados para desarrollo de software con cycles, roadmaps y triage automático.

## ¿Para qué sirve?

Linear sirve para gestionar el desarrollo de productos de software: crear y asignar tareas, planificar sprints (cycles), visualizar roadmaps, priorizar el backlog, hacer seguimiento de bugs y medir la velocidad del equipo con métricas precisas.

## Cuándo usarla

- Cuando buscas una herramienta rápida y fluida sin fricción.
- Para equipos de ingeniería que usan GitHub y quieren integración nativa.
- Si valoras productividad con atajos de teclado y flujos optimizados.
- Para startups y equipos ágiles que necesitan cycles y roadmaps.
- Cuando quieres alejarte de Jira por su complejidad y lentitud.

## Cuándo NO usarla

- Si necesitas reporting y dashboards altamente configurables.
- Para equipos no técnicos que prefieren interfaces más tradicionales.
- Cuando requieres gestión de proyectos tipo Gantt o waterfall.
- Si tu equipo ya está muy integrado con Jira o Asana.
- Para organizaciones enterprise con requerimientos compliance complejos.

## Pros

- Velocidad extrema, todo ocurre en milisegundos.
- Interfaz limpia y sin ruido visual.
- Keyboard-first que acelera el flujo diario.
- Integración profunda con GitHub (branches, PRs, releases).
- Roadmaps automáticos basados en datos reales.

## Contras

- Limitado para equipos no técnicos o de marketing.
- Sin versión on-premise ni self-hosted.
- Funciones avanzadas requieren plan premium.
- Menos integraciones que Jira o Notion.
- Curva de aprendizaje para sacar provecho total.
