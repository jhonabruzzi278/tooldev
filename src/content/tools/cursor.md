---
name: Cursor
description: Editor de código basado en VS Code con IA integrada para autocompletar, editar y generar código con modelos como Claude y GPT-4. Diseñado específicamente para programadores que quieren IA en cada parte del flujo de desarrollo.
category: agentes
tags: [editor, ia, codigo, cursor, vscode, autocompletado, agente]
officialSite: https://cursor.sh
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [macOS, Windows, Linux]
featured: true
verified: false
features:
  - Tab completion predictivo que anticipa el siguiente bloque de código
  - Cmd+K para editar código seleccionado con instrucciones en lenguaje natural
  - Chat integrado con contexto del codebase completo
  - Agent mode para ejecutar tareas multi-archivo de forma autónoma
  - Indexación del codebase para búsqueda semántica
  - Soporte para Claude 3.5, GPT-4o y modelos propios de Cursor
  - Compatible con extensiones y configuraciones de VS Code
  - Rules para definir convenciones de código del proyecto
alternatives: [kiro, copilot, windsurf]
howToUse:
  - step: 1
    title: "Descarga e instala Cursor"
    description: "Ve a cursor.sh y descarga para tu sistema operativo. Cursor es un fork de VS Code, así que importa tus extensiones, keybindings y configuraciones automáticamente en el primer arranque."
  - step: 2
    title: "Indexa tu codebase"
    description: "Cursor indexa el proyecto al abrirlo. Esto permite al chat y al autocompletado entender la estructura de tu código, imports, tipos y convenciones. Ve a Settings > Features > Codebase indexing."
  - step: 3
    title: "Usa Tab para autocompletar"
    description: "Cursor predice el siguiente bloque de código basado en el contexto. Presiona Tab para aceptar, Escape para rechazar. Es diferente a Copilot — predice bloques completos, no solo una línea."
  - step: 4
    title: "Usa Cmd+K para edits inline"
    description: "Selecciona código, presiona Cmd+K y describe el cambio: 'convierte a async/await', 'añade manejo de errores', 'extrae a función'. Cursor modifica solo lo seleccionado."
  - step: 5
    title: "Usa Agent para tareas complejas"
    description: "Abre el chat (Cmd+L), activa Agent mode y describe una tarea completa: 'implementa autenticación JWT con middleware y tests'. El agente crea, modifica y elimina archivos de forma autónoma."
whenToUse:
  - title: "Desarrollo diario con IA integrada"
    description: "Cuando quieres IA en cada parte del flujo: autocompletado inteligente, edits rápidos, refactoring, generación de tests y documentación sin salir del editor."
  - title: "Refactoring de código legacy"
    description: "Para modernizar bases de código antiguas. Cursor entiende todo el codebase y puede hacer cambios consistentes en múltiples archivos a la vez manteniendo coherencia."
  - title: "Aprender un codebase nuevo"
    description: "Al unirte a un proyecto nuevo, usa el chat para hacer preguntas sobre la arquitectura, flujos de datos y decisiones de diseño. Cursor busca en el código real para responder."
examples:
  - title: "Editar código con Cmd+K"
    code: |
      // Código original seleccionado:
      function fetchUser(id) {
        return fetch('/api/users/' + id)
          .then(res => res.json())
      }

      // Instrucción: "convierte a async/await con manejo de errores TypeScript"

      // Resultado:
      async function fetchUser(id: string): Promise<User> {
        try {
          const response = await fetch(`/api/users/${id}`);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json() as Promise<User>;
        } catch (error) {
          console.error('Failed to fetch user:', error);
          throw error;
        }
      }
    output: "Cursor transforma el código en el lugar, manteniendo el contexto del archivo."
  - title: "Rules para convenciones del proyecto"
    code: |
      # .cursorrules
      Eres un experto en TypeScript, React 18 y Next.js App Router.

      Reglas de código:
      - Usa componentes funcionales con TypeScript strict
      - Prefiere Server Components, usa 'use client' solo cuando sea necesario
      - Imports con alias @/ en vez de rutas relativas largas
      - Tailwind CSS para estilos, no CSS modules ni styled-components
      - Manejo de errores con Result types, no excepciones raw
      - Tests con Vitest y Testing Library

      Nunca:
      - Uses any en TypeScript
      - Crees class components
      - Hardcodees strings de UI (usa variables de traducción)
    output: "Cursor aplica estas reglas en todos los completados, edits y generaciones del proyecto."
tips:
  - text: "Configura .cursorrules en la raíz del proyecto con las convenciones de tu equipo. Es lo primero que debes hacer en un proyecto nuevo — define el estilo, frameworks y restricciones."
  - text: "Usa @archivo en el chat para incluir contexto específico. '@package.json ¿qué versión de React estamos usando?' es más preciso que preguntar sin contexto."
  - text: "Agent mode es poderoso pero revisa cada cambio antes de aceptar. Usa el diff view para ver exactamente qué modificó antes de aplicar los cambios."
  - text: "Activa Privacy Mode en Settings si trabajas con código sensible. Esto evita que el código se use para entrenar modelos."
faq:
  - question: "¿Cursor vs GitHub Copilot?"
    answer: "Cursor tiene contexto del codebase completo, Agent mode para tareas multi-archivo y edits inline más potentes. Copilot está integrado en más editores y tiene GitHub PR summaries. Para uso intensivo de IA, Cursor es más completo."
  - question: "¿Cuánto cuesta Cursor?"
    answer: "Plan gratuito: 50 peticiones de slow models y 2000 completados al mes. Pro ($20/mes): peticiones ilimitadas a modelos rápidos. Business ($40/usuario/mes): features de equipo y privacidad enterprise."
  - question: "¿Cursor usa mis datos para entrenar?"
    answer: "Por defecto no. Con Privacy Mode activado, el código nunca sale a servidores de Cursor. El plan Business garantiza esto por contrato."
  - question: "¿Es compatible con mis extensiones de VS Code?"
    answer: "Sí, Cursor es un fork de VS Code y soporta la mayoría de extensiones del marketplace. Algunas extensiones muy específicas pueden no funcionar, pero la compatibilidad general es alta."
publishedAt: 2026-06-22
---

## ¿Qué es?

Cursor es un editor de código construido sobre VS Code que integra IA profundamente en cada parte del flujo de desarrollo. No es solo un plugin — el editor fue rediseñado para que la IA sea una parte nativa del experience.

## ¿Para qué sirve?

Para escribir código más rápido con autocompletado predictivo, editar código con instrucciones en lenguaje natural, hacer refactoring multi-archivo y ejecutar tareas complejas de forma autónoma con Agent mode.

## Cuándo usarla

- Como editor principal si quieres máxima integración con IA.
- Para proyectos donde la velocidad de desarrollo es crítica.
- Para onboarding rápido en codebases desconocidas.

## Cuándo NO usarla

- Si necesitas features enterprise muy específicos de VS Code que no están disponibles.
- Si el equipo tiene restricciones sobre enviar código a servicios externos.
- Para proyectos muy simples donde la curva de aprendizaje no vale la pena.

## Pros

- La integración de IA más completa del mercado para editores de código.
- Compatible con configuraciones existentes de VS Code.
- Agent mode para tareas multi-archivo completamente autónomas.
- Indexación del codebase para respuestas contextuales precisas.

## Contras

- Requiere suscripción para uso intensivo.
- Algunos usuarios reportan mayor uso de RAM vs VS Code vanilla.
- Dependencia de servicios externos para las funciones de IA.
