---
name: Raycast
description: Launcher de productividad para macOS con extensiones, atajos personalizados e integración con herramientas de desarrollo.
category: productividad
tags: [launcher, productivity, macos, extensions, shortcuts, developer-tools]
officialSite: https://raycast.com
pricing: freemium
openSource: false
license: Propietaria
technicalLevel: principiante
compatibility: [macOS]
featured: false
features:
  - Launcher rápido con búsqueda universal de archivos, apps y acciones
  - Extensiones para GitHub, GitLab, Linear, Jira, Notion y más
  - Snippets y auto-expansión de texto
  - Window management con atajos de teclado
  - Clipborad history con búsqueda y snippets
  - AI integrado con chat y comandos inteligentes
  - Script commands para automatizaciones personalizadas
alternatives: [alfred, spotlight]
relatedTools: [visual-studio-code, notion, linear, github, slack]
howToUse:
  - step: 1
    title: "Instala Raycast y reemplaza Spotlight"
    description: "Descarga Raycast de raycast.com, instálalo en macOS y asígnale el atajo Option+Espacio (reemplazando Spotlight). Al abrirlo, escribe para buscar archivos, apps, cálculos y comandos al instante."
  - step: 2
    title: "Instala extensiones para herramientas de desarrollo"
    description: "Abre Raycast y ve a la Store de extensiones. Instala GitHub, GitLab, Linear, VSCode Projects, Docker y otras. Cada extensión añade comandos específicos accesibles desde el launcher."
  - step: 3
    title: "Crea snippets y configura atajos"
    description: "Define snippets de texto reutilizables para código, emails o respuestas frecuentes. Asigna hotkeys a extensiones y comandos que uses con frecuencia para acceder a ellos sin escribir."
  - step: 4
    title: "Escribe Script Commands personalizados"
    description: "Crea scripts en Bash, Python, Node.js o Swift desde la carpeta de Script Commands. Raycast los ejecuta y muestra el resultado en el launcher, permitiendo construir tus propias automatizaciones."
whenToUse:
  - title: "Centro de control para herramientas de desarrollo"
    description: "Cuando usas múltiples herramientas como GitHub, Jira, Linear, Figma y Slack a diario y quieres acceder a ellas desde un solo atajo de teclado sin cambiar de ventana constantemente."
  - title: "Automatización de tareas repetitivas en macOS"
    description: "Para ejecutar scripts, abrir proyectos de VSCode, gestionar ventanas, buscar en el historial del portapapeles y realizar cálculos sin sacar las manos del teclado."
  - title: "Reemplazo de múltiples apps de productividad"
    description: "Raycast puede reemplazar tu gestor de ventanas, gestor de portapapeles, expansor de texto y calculadora, consolidando todas estas funciones en una sola aplicación."
examples:
  - title: "Buscar y abrir un PR de GitHub"
    code: |
      # Abre Raycast, escribe "github pull requests"
      # Selecciona el repositorio
      # Elige el PR y presiona Enter para abrirlo en el navegador
    output: "Se abre el PR de GitHub en el navegador predeterminado."
  - title: "Script Command para generar UUID"
    code: |
      #!/bin/bash
      # Required parameters:
      # @raycast.schemaVersion 1
      # @raycast.title Generate UUID
      # @raycast.mode compact
      uuidgen | tr '[:upper:]' '[:lower:]' | pbcopy
      echo "UUID copiado al portapapeles"
    output: "550e8400-e29b-41d4-a716-446655440000 (copiado al portapapeles)"
tips:
  - text: "Asigna hotkeys a las extensiones que más uses (Cmd+Shift+G para GitHub, Cmd+Shift+J para Jira) para acceso instantáneo sin escribir."
  - text: "Usa la función de Quicklinks para buscar directamente en sitios como Stack Overflow, Google, o la documentación de tu framework favorito."
  - text: "Organiza los Script Commands en carpetas por categoría (git, utils, deploy) y usa los metadatos @raycast para configurar cómo se muestra cada resultado."
  - text: "Activa Clipboard History para guardar automáticamente todo lo que copies; puedes buscar, fijar y reutilizar cualquier elemento copiado anteriormente."
  - text: "Las extensiones de VSCode Projects y JetBrains permiten abrir proyectos recientes en una fracción de segundo sin pasar por el menú de apertura."
faq:
  - question: "¿Raycast funciona en Windows o Linux?"
    answer: "No, Raycast es exclusivo de macOS. Para Windows, alternativas como Flow Launcher o ueli ofrecen funcionalidades similares. Para Linux, Albert o Ulauncher son buenas opciones."
  - question: "¿Raycast es gratuito o de pago?"
    answer: "El plan básico es gratuito e incluye extensiones ilimitadas, snippets, clipboard history y window management. El plan Pro (de pago) añade Raycast AI con chat y comandos inteligentes, temas ilimitados y sincronización entre dispositivos."
  - question: "¿Cómo creo mis propias extensiones?"
    answer: "Puedes crear extensiones con React y la API de extensiones de Raycast. Sigue la guía en developers.raycast.com, crea el proyecto con npx create raycast-extension y publícala en la Store para que otros la usen."
  - question: "¿Raycast reemplaza completamente a Alfred?"
    answer: "Para la mayoría de desarrolladores, sí. Raycast ofrece más integraciones con herramientas de desarrollo de forma nativa, mientras Alfred requiere workflows personalizados. Sin embargo, Alfred tiene más potencia en búsqueda de archivos y control del sistema operativo."
publishedAt: 2026-06-01
---

## ¿Qué es?

Raycast es un launcher de productividad para macOS que reemplaza Spotlight con búsqueda ultrarrápida, extensiones para herramientas de desarrollo, window management, clipboard history y automatizaciones vía scripts.

## ¿Para qué sirve?

Raycast sirve como centro de control para desarrolladores en macOS: abre archivos y apps, gestiona ventanas, ejecuta comandos de herramientas como GitHub y Linear, busca en el clipboard histórico, y automatiza tareas repetitivas con scripts.

## Cuándo usarla

- Cuando quieres un launcher más potente que Spotlight.
- Para acceder rápidamente a GitHub, Linear, Jira y otras herramientas.
- Si necesitas window management con atajos de teclado.
- Para automatizar tareas repetitivas con scripts command.
- Cuando quieres clipboard history con búsqueda.

## Cuándo NO usarla

- Si usas Windows o Linux (Raycast solo macOS).
- Cuando Spotlight o Alfred ya cubren tus necesidades.
- Para equipos que no usan muchas herramientas de desarrollo.
- Si prefieres una solución minimalista sin extensiones.

## Pros

- Extensiones para herramientas de desarrollo populares.
- Window management integrado.
- Clipboard history con búsqueda.
- Script commands para automatización.
- AI integrado con chat.

## Contras

- Solo macOS (sin Windows/Linux).
- Algunas extensiones avanzadas requieren plan Pro.
- Curva de aprendizaje para extensiones personalizadas.
- Consume más recursos que Spotlight.

## CLI

Raycast no tiene CLI tradicional. Se usa la extensión de Script Commands o comandos del launcher:

```bash
# Script Commands (scripts de shell ejecutados desde Raycast):
open raycast://extensions/raycast/github
open raycast://confetti
open raycast://extensions/raycast/window-management
# Instalar Raycast desde web: https://raycast.com/download
```
