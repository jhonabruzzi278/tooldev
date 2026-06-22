---
name: Kiro
description: IDE con IA de Amazon diseñado para desarrollo guiado por specs. Combina un flujo estructurado de requisitos, diseño y tareas con un agente autónomo que implementa código mientras el desarrollador mantiene el control.
category: agentes
tags: [ide, ia, agente, amazon, specs, codigo, aws, kiro]
officialSite: https://kiro.dev
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [macOS, Windows, Linux, iOS]
featured: true
verified: false
features:
  - Spec-driven development con flujo Requirements → Design → Tasks
  - Agente autónomo (Auto) que implementa tareas completas de forma autónoma
  - Modo Supervised y Autopilot para controlar nivel de autonomía
  - Hooks para automatizar acciones basadas en eventos del IDE (fileEdited, preToolUse, postToolUse)
  - Steering files para dar contexto persistente al agente (inclusion auto, manual o fileMatch)
  - Skills system para extender el conocimiento del agente con SKILL.md personalizados
  - Powers para cargar MCP servers y steering files adicionales bajo demanda
  - Integración nativa con servicios AWS (Lambda, DynamoDB, S3, Cognito)
  - Múltiples modelos disponibles (Claude Opus, Sonnet, Haiku, Qwen y modelos de Bedrock)
  - App iOS nativa para monitorear y aprobar cambios desde el móvil
alternatives: [cursor, copilot, windsurf]
howToUse:
  - step: 1
    title: "Descarga Kiro"
    description: "Ve a kiro.dev y descarga para tu sistema operativo (macOS, Windows o Linux). Kiro está basado en Code OSS (VS Code) y es compatible con la mayoría de extensiones de VS Code. Crea una cuenta con Google, GitHub o AWS Builder ID."
  - step: 2
    title: "Configura el modo de autonomía"
    description: "Elige entre Autopilot (Kiro actúa de forma autónoma hasta completar tareas) o Supervised (Kiro pide aprobación antes de cada cambio). Supervised es recomendado para empezar o en codebases críticos."
  - step: 3
    title: "Crea una Spec para tu feature"
    description: "En el chat, describe el feature que quieres construir. Kiro preguntará si es un feature nuevo o bugfix, luego guiará la creación de requirements.md → design.md → tasks.md en .kiro/specs/. Cada documento se revisa antes de continuar."
  - step: 4
    title: "Ejecuta las tareas"
    description: "Con la spec aprobada, ejecuta tareas individualmente o todas en paralelo con 'Run All Tasks'. El agente Auto implementa el código, ejecuta tests y reporta el progreso. Los checkpoints permiten revisar cambios antes de continuar."
  - step: 5
    title: "Configura Steering files"
    description: "Crea archivos .md en .kiro/steering/ con convenciones del proyecto (stack, naming, arquitectura). Los archivos con inclusion: auto se incluyen en cada request automáticamente. Los de inclusion: fileMatch aplican solo cuando ciertos archivos están en contexto."
  - step: 6
    title: "Instala Skills y Powers"
    description: "Usa npx tooldev-skills install <slug> para instalar skills de herramientas en .agents/skills/. Activa Powers desde el panel de Kiro para cargar capacidades adicionales como AWS DevOps, Supabase, GitHub, etc."
  - step: 7
    title: "Configura Agent Hooks"
    description: "Crea hooks en .kiro/hooks/ para automatizar tareas: lint al guardar un archivo, tests después de completar una tarea, o verificaciones de seguridad antes de cada write. Los hooks pueden ejecutar comandos o invocar el agente."
whenToUse:
  - title: "Features complejas que requieren planificación"
    description: "Cuando el feature tiene múltiples componentes, integraciones o consideraciones de diseño. El flujo de specs asegura que el agente entiende completamente qué construir antes de escribir una línea de código."
  - title: "Equipos que quieren proceso estructurado con IA"
    description: "Para equipos que quieren los beneficios de la IA pero con control sobre las decisiones de diseño. Los specs sirven como documentación viva y punto de revisión del equipo via pull requests."
  - title: "Proyectos con AWS o infraestructura cloud"
    description: "La integración nativa con AWS y los Powers para servicios de Amazon hacen a Kiro especialmente útil para proyectos que usan Lambda, DynamoDB, S3, ECS, Cognito o cualquier servicio del ecosistema."
  - title: "Desarrollo con múltiples agentes en paralelo"
    description: "Kiro puede ejecutar múltiples subagentes en paralelo para completar tareas independientes simultáneamente, acelerando features complejas que tienen partes independientes."
  - title: "Bugfixes con diagnóstico estructurado"
    description: "El flujo de bugfix usa metodología específica: primero identifica la condición exacta del bug con property-based tests, luego propone la solución mínima que elimina esa condición."
examples:
  - title: "Crear una spec para autenticación"
    code: |
      # En el chat de Kiro:
      "Quiero implementar autenticación con email/password y Google OAuth"

      # Kiro guía el proceso:
      # 1. Pregunta: ¿Feature nuevo o bugfix? → Feature nuevo
      # 2. Pregunta: ¿Requirements primero o diseño técnico?
      # 3. Genera .kiro/specs/user-authentication/requirements.md
      # 4. Genera .kiro/specs/user-authentication/design.md
      # 5. Genera .kiro/specs/user-authentication/tasks.md
      # 6. Ejecuta cada tarea: crea componentes, API routes, tests

      # El resultado es código funcional + documentación completa
    output: "Spec completa en .kiro/specs/ con requisitos EARS, diseño técnico y tasks con dependency graph. El código generado sigue las convenciones definidas en steering files."
  - title: "Steering file para convenciones del proyecto"
    code: |
      # .kiro/steering/conventions.md
      ---
      inclusion: auto
      ---

      # Convenciones del Proyecto

      ## Stack
      - Next.js 14 con App Router
      - TypeScript strict mode
      - Tailwind CSS + shadcn/ui
      - Prisma + PostgreSQL
      - Vitest para tests

      ## Reglas
      - Todos los Server Components usan async/await directo
      - Los Client Components llevan 'use client' en la primera línea
      - Imports con alias @/ siempre
      - Cada feature tiene sus propios tests en __tests__/

      ## Naming
      - Componentes: PascalCase
      - Hooks: camelCase con prefijo use
      - Archivos de servidor: kebab-case.server.ts
    output: "Kiro incluye estas convenciones en cada request automáticamente gracias al inclusion: auto. Sin repetir el contexto en cada prompt."
  - title: "Agent Hook para linting automático"
    code: |
      // .kiro/hooks/lint-on-save.json
      {
        "name": "Lint on Save",
        "version": "1.0.0",
        "when": {
          "type": "fileEdited",
          "patterns": ["*.ts", "*.tsx"]
        },
        "then": {
          "type": "runCommand",
          "command": "npm run lint"
        }
      }
    output: "Cada vez que Kiro (o tú) guarda un archivo TypeScript, el linter corre automáticamente. Si hay errores, aparecen en el contexto del agente para que los corrija."
  - title: "Instalar y usar una Skill"
    code: |
      # Instalar skill desde terminal:
      npx tooldev-skills install nextjs

      # Kiro detecta automáticamente .agents/skills/nextjs/SKILL.md
      # y lo usa como contexto cuando trabajas con Next.js

      # También puedes usar el vibe chat directamente:
      "Añade paginación infinita a la lista de productos"
      # Kiro conoce los patterns de Next.js y genera código correcto
    output: "El agente usa el contenido del SKILL.md como referencia para generar código que sigue las mejores prácticas de la herramienta específica."
tips:
  - text: "Usa Supervised mode cuando explores un codebase nuevo o trabajes en código crítico. Kiro muestra cada cambio como un diff que puedes aprobar o rechazar antes de aplicarlo."
  - text: "Los Steering files con inclusion: auto son la forma más efectiva de dar contexto persistente. Define tu stack, convenciones y restricciones una vez y aplican a todas las sesiones."
  - text: "Instala skills de herramientas que usas frecuentemente con npx tooldev-skills install <slug>. El agente usa esa información para generar código más preciso y seguir mejores prácticas."
  - text: "Para bugfixes, usa el flujo Bugfix en lugar de Feature. Kiro aplica metodología de bug condition: primero escribe un property test que falla (confirma el bug), luego implementa la solución mínima."
  - text: "Configura un steering file de inclusion: fileMatch para archivos específicos. Ej: aplica reglas de API REST solo cuando el agente trabaja con archivos en /api/."
  - text: "Usa Powers para conectar capacidades externas. El Power de AWS DevOps conecta Kiro directamente con tu infraestructura de producción para deployments y monitoring desde el IDE."
  - text: "El modelo Auto de Kiro enruta cada tarea al modelo óptimo automáticamente: usa Claude Opus para arquitectura compleja y modelos más rápidos para tareas simples, optimizando el uso de créditos."
faq:
  - question: "¿Kiro vs Cursor?"
    answer: "Kiro tiene un flujo estructurado con specs, ideal para features complejas y equipos. Cursor es más fluido para coding rápido y exploración. Kiro incluye spec-driven development, hooks y steering nativos; Cursor tiene un ecosistema de extensiones más maduro."
  - question: "¿Cuáles son los planes de precios de Kiro?"
    answer: "Free: 50 créditos/mes gratis. Pro: $19/mes con 1,000 créditos. Pro+: $39/mes con 2,000 créditos. Pro Max: $100/mes con 5,000 créditos. Power: $200/mes con capacidades enterprise. Los estudiantes universitarios reciben 1,000 créditos/mes gratis por un año."
  - question: "¿Necesito una cuenta de AWS?"
    answer: "Puedes usar Kiro con Google, GitHub o AWS Builder ID. Kiro usa los modelos de Amazon Bedrock (Claude, Titan) y otros modelos frontier. No necesitas configurar AWS por tu cuenta; Kiro gestiona la autenticación automáticamente."
  - question: "¿Qué son las Skills en Kiro?"
    answer: "Las Skills son archivos SKILL.md que dan al agente conocimiento especializado sobre herramientas. Se instalan en .agents/skills/ y Kiro las carga automáticamente. Puedes instalar skills de ToolDev con npx tooldev-skills install <slug>."
  - question: "¿Qué son los Powers en Kiro?"
    answer: "Los Powers son extensiones que cargan MCP servers y steering files adicionales bajo demanda. Permiten conectar Kiro con servicios externos como AWS DevOps Agent, Supabase, GitHub, Netlify, etc. para operaciones directas desde el IDE."
  - question: "¿Kiro tiene app móvil?"
    answer: "Sí, Kiro tiene una app nativa para iOS que permite monitorear sesiones de agente, revisar diffs, aprobar cambios y recibir notificaciones desde el móvil sin necesidad de tener el laptop abierto."
  - question: "¿Qué es el free trial?"
    answer: "Al registrarte por primera vez, Kiro te da 500 créditos bonus utilizables en 14 días para explorar todas las funciones antes de elegir un plan."
publishedAt: 2026-06-22
---
  - step: 1
    title: "Descarga Kiro"
    description: "Ve a kiro.dev y descarga para tu sistema operativo. Kiro está en preview y es gratuito actualmente. Al abrir, conecta tu cuenta de AWS o crea una nueva para activar los modelos de IA."
  - step: 2
    title: "Crea una Spec para tu feature"
    description: "Describe el feature que quieres construir en el chat. Kiro preguntará si es un feature nuevo o bugfix, luego guiará la creación de Requirements → Design → Tasks de forma iterativa."
  - step: 3
    title: "Revisa y aprueba cada documento"
    description: "Kiro crea requirements.md, design.md y tasks.md en .kiro/specs/. Revisa cada uno, solicita cambios si es necesario. El agente no implementa hasta que apruebas la spec completa."
  - step: 4
    title: "Ejecuta las tareas"
    description: "Con la spec aprobada, ejecuta tareas individualmente o todas en paralelo con 'Run All Tasks'. Kiro implementa el código, ejecuta tests y reporta el progreso de cada tarea."
  - step: 5
    title: "Agrega Skills y Steering"
    description: "Crea archivos en .kiro/steering/ con convenciones del proyecto. Instala skills con npx tooldev-skills install <nombre> para dar al agente conocimiento especializado de herramientas."
whenToUse:
  - title: "Features complejas que requieren planificación"
    description: "Cuando el feature tiene múltiples componentes, integraciones o consideraciones de diseño. El flujo de specs asegura que el agente entiende completamente qué construir antes de escribir una línea."
  - title: "Equipos que quieren proceso estructurado con IA"
    description: "Para equipos que quieren los beneficios de la IA pero con control sobre las decisiones de diseño. Los specs sirven como documentación viva y punto de revisión del equipo."
  - title: "Proyectos con AWS o infraestructura cloud"
    description: "La integración nativa con AWS hace a Kiro especialmente útil para proyectos que usan servicios como Lambda, DynamoDB, S3, Cognito o cualquier otro servicio del ecosistema."
examples:
  - title: "Crear una spec para autenticación"
    code: |
      # En el chat de Kiro:
      "Quiero implementar autenticación con email/password y Google OAuth"

      # Kiro guía el proceso:
      # 1. Pregunta: ¿Feature nuevo o bugfix? → Feature nuevo
      # 2. Pregunta: ¿Requirements primero o diseño técnico?
      # 3. Genera .kiro/specs/user-authentication/requirements.md
      # 4. Genera .kiro/specs/user-authentication/design.md
      # 5. Genera .kiro/specs/user-authentication/tasks.md
      # 6. Ejecuta cada tarea: crea componentes, API routes, tests

      # El resultado es código funcional + documentación completa
    output: "Spec completa con requisitos, diseño técnico y tareas implementadas. El código generado sigue las convenciones del proyecto."
  - title: "Steering file para convenciones del proyecto"
    code: |
      # .kiro/steering/conventions.md
      ---
      inclusion: auto
      ---

      # Convenciones del Proyecto

      ## Stack
      - Next.js 14 con App Router
      - TypeScript strict mode
      - Tailwind CSS + shadcn/ui
      - Prisma + PostgreSQL
      - Vitest para tests

      ## Reglas
      - Todos los Server Components usan async/await directo
      - Los Client Components llevan 'use client' en la primera línea
      - Imports con alias @/ siempre
      - Cada feature tiene sus propios tests en __tests__/

      ## Naming
      - Componentes: PascalCase
      - Hooks: camelCase con prefijo use
      - Archivos de servidor: kebab-case.server.ts
    output: "Kiro incluye estas convenciones en cada tarea automáticamente gracias al inclusion: auto."
tips:
  - text: "Usa Supervised mode cuando explores un codebase nuevo o trabajas en código crítico. En Autopilot, Kiro actúa más rápido pero con menos checkpoints."
  - text: "Los Steering files con inclusion: auto son la forma más efectiva de dar contexto persistente. Define tu stack, convenciones y restricciones ahí en lugar de repetirlos en cada prompt."
  - text: "Instala skills de herramientas que usas frecuentemente con npx tooldev-skills install <slug>. El agente usa esa información para generar código más preciso."
  - text: "Para bugfixes, usa el flujo Bugfix en lugar de Feature. Kiro aplica metodología específica para identificar la condición del bug antes de proponer una solución."
faq:
  - question: "¿Kiro vs Cursor?"
    answer: "Kiro tiene un flujo estructurado con specs (mejor para features complejas y equipos). Cursor es más fluido para coding rápido y exploración. Kiro es ideal cuando quieres proceso; Cursor cuando quieres velocidad."
  - question: "¿Kiro es gratuito?"
    answer: "Sí, actualmente Kiro está en preview gratuita. Se espera que tenga planes de pago en el futuro, pero los detalles no están confirmados."
  - question: "¿Necesito una cuenta de AWS?"
    answer: "Kiro usa los modelos de Amazon Bedrock (Claude, Titan) para la IA. Necesitas una cuenta AWS, pero Kiro gestiona la autenticación automáticamente desde el IDE."
  - question: "¿Qué son las Skills en Kiro?"
    answer: "Las Skills son archivos SKILL.md que dan al agente conocimiento especializado sobre herramientas. Se instalan en .agents/skills/ y Kiro las carga automáticamente. Puedes instalar skills de ToolDev con npx tooldev-skills install <slug>."
publishedAt: 2026-06-22
---

## ¿Qué es?

Kiro es un IDE con IA desarrollado por Amazon (AWS) basado en Code OSS (VS Code). Introduce el concepto de **spec-driven development**: antes de escribir código, el agente colabora contigo para crear documentos formales de requisitos, diseño técnico y plan de implementación. El agente **Auto** puede ejecutar tareas completas de forma autónoma o con checkpoints de supervisión.

## ¿Para qué sirve?

Para construir features complejas de forma estructurada y reproducible, con un agente autónomo que implementa el código siguiendo specs previamente aprobadas. También incluye hooks para automatización de tareas, steering files para contexto persistente, skills para conocimiento especializado y powers para conectar servicios externos.

## Cuándo usarla

- Para features con múltiples componentes que necesitan planificación previa.
- En proyectos con AWS donde quieres integración nativa con Bedrock, Lambda, DynamoDB.
- Cuando el equipo quiere proceso estructurado con IA + documentación automática.
- Para bugfixes complejos donde necesitas diagnóstico sistemático antes de implementar.
- Cuando quieres correr agentes en paralelo para acelerar features grandes.

## Cuándo NO usarla

- Para cambios pequeños y rápidos donde el overhead de specs no vale.
- Si necesitas un ecosistema de extensiones muy específico que aún no está en Kiro.
- Para proyectos donde no quieres gestionar documentación de specs.

## Pros

- Flujo de specs que previene malentendidos antes de implementar.
- Integración nativa con AWS y modelos de Bedrock.
- Skills system para conocimiento especializado por herramienta.
- Modo Supervised para máximo control sobre cambios.
- Powers para conectar servicios externos directamente desde el IDE.
- App iOS para monitorear y aprobar cambios desde el móvil.

## Contras

- La overhead de crear specs puede ser excesiva para tareas simples.
- El modelo de créditos puede ser costoso en uso intensivo.
- Ecosistema de extensiones más pequeño que VS Code o Cursor.

## CLI

```bash
# No hay CLI propio — se controla desde el IDE
# Para instalar skills:
npx tooldev-skills install <slug>

# Para ver skills disponibles:
npx tooldev-skills list
```
