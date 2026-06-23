---
name: GitHub
description: Plataforma líder de desarrollo colaborativo con control de versiones Git, CI/CD y gestión de proyectos.
category: devops
tags: [git, control-versiones, colaboracion, ci-cd, codigo, opensource]
officialSite: https://github.com
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web, Windows, macOS, Linux]
featured: false
screenshots:
  - /screenshots/github.webp
features:
  - Repositorios Git con control de versiones completo
  - Pull requests con revisión de código integrada
  - GitHub Actions para CI/CD automatizado
  - Issues y Projects para gestión de proyectos
  - Wiki y páginas GitHub Pages
  - Code Review con comentarios en línea
  - Dependabot para actualizaciones de seguridad
alternatives: []
relatedTools: [github-copilot, docker, kubernetes, visual-studio-code]
howToUse:
  - step: 1
    title: "Crear un repositorio y clonarlo"
    description: "Crea un nuevo repositorio desde github.com/new eligiendo entre público o privado. Clona el repositorio localmente con `git clone <url>` y comienza a trabajar en tu código."
  - step: 2
    title: "Trabajar con ramas y pull requests"
    description: "Crea una rama por cada funcionalidad con `git checkout -b feature/nombre`. Sube los cambios, abre un pull request desde la interfaz web y solicita revisión de código a tu equipo."
  - step: 3
    title: "Configurar CI/CD con GitHub Actions"
    description: "Crea un archivo YAML en `.github/workflows/` definiendo los pasos del pipeline: tests, linting, build y deploy. Actions se ejecuta automáticamente en cada push o pull request."
  - step: 4
    title: "Gestionar el proyecto con Issues y Projects"
    description: "Crea issues para tareas y bugs, asígnalos a miembros del equipo, añade etiquetas y organízalos en tableros Kanban con Projects para hacer seguimiento del progreso."
whenToUse:
  - title: "Control de versiones para cualquier proyecto de código"
    description: "Ya sea un proyecto personal, open source o empresarial, GitHub ofrece repositorios Git ilimitados públicos y privados con todas las herramientas de colaboración."
  - title: "Automatización de flujos de trabajo con CI/CD"
    description: "Cuando necesitas ejecutar tests, builds y deploys automáticamente sin configurar servidores externos de integración continua."
  - title: "Colaboración en equipos distribuidos"
    description: "Para equipos que necesitan revisar código mediante pull requests, gestionar tareas con issues y mantener discusiones técnicas organizadas por tema."
examples:
  - title: "Crear un pull request desde la terminal"
    code: "git checkout -b feature/login; git add .; git commit -m 'feat: añadir formulario de login'; git push -u origin feature/login; gh pr create --title 'Login form' --body 'Añade autenticación de usuarios'"
    output: "Se crea un pull request en GitHub listo para revisión, con el título y descripción especificados, vinculado a la rama feature/login."
  - title: "Workflow de GitHub Actions para tests en Node.js"
    code: "name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n      - run: npm ci\n      - run: npm test"
    output: "Pipeline que ejecuta los tests automáticamente en cada push y pull request, mostrando el resultado en la interfaz del PR."
tips:
  - text: "Escribe mensajes de commit siguiendo Conventional Commits (`feat:`, `fix:`, `docs:`) para generar changelogs automáticos y mantener un historial legible."
  - text: "Configura reglas de protección de rama en main/master para requerir revisiones de código y que los checks de CI pasen antes del merge."
  - text: "Usa GitHub CLI (`gh`) para gestionar issues, pull requests y releases directamente desde la terminal sin cambiar al navegador."
  - text: "Aprovecha las plantillas de issues y pull requests para estandarizar la información que tu equipo debe proporcionar al reportar bugs o proponer cambios."
  - text: "Añade un archivo CODEOWNERS para asignar automáticamente revisores según los archivos modificados en cada pull request."
faq:
  - question: "¿Qué diferencia hay entre Git y GitHub?"
    answer: "Git es el sistema de control de versiones distribuido que se ejecuta localmente. GitHub es una plataforma en la nube que aloja repositorios Git y añade herramientas de colaboración, CI/CD y gestión de proyectos."
  - question: "¿Cuánto cuesta GitHub para equipos?"
    answer: "GitHub ofrece un plan gratuito con repositorios ilimitados públicos y privados, Actions con 2000 minutos/mes y almacenamiento de packages. Los planes Team y Enterprise añaden más minutos, funcionalidades de seguridad y soporte."
  - question: "¿Puedo usar GitHub solo con la terminal sin interfaz web?"
    answer: "Sí, usando Git para operaciones de repositorio y GitHub CLI (`gh`) para gestionar pull requests, issues, releases y otras funcionalidades de la plataforma desde la terminal."
  - question: "¿GitHub Pages es gratuito?"
    answer: "Sí, GitHub Pages es gratuito para repositorios públicos y privados. Permite alojar sitios estáticos con soporte para Jekyll y dominios personalizados con HTTPS automático."
publishedAt: 2026-06-01
---

## ¿Qué es?

GitHub es la plataforma de desarrollo colaborativo más grande del mundo. Aloja millones de repositorios Git, ofrece herramientas de CI/CD con GitHub Actions, gestión de proyectos con Issues y Projects, y un ecosistema social para compartir y descubrir código open source.

## ¿Para qué sirve?

GitHub sirve para alojar repositorios Git, colaborar con equipos mediante pull requests, automatizar flujos de trabajo con Actions, gestionar tareas y bugs con Issues, desplegar documentación con Pages y descubrir proyectos open source.

## Cuándo usarla

- Para alojar cualquier proyecto de código, público o privado.
- Cuando trabajas en equipo con revisión de código mediante pull requests.
- Si necesitas CI/CD integrado sin servicios externos.
- Para gestionar proyectos ágiles con Issues y Projects.
- Cuando quieres contribuir o descubrir proyectos open source.

## Cuándo NO usarla

- Si necesitas un repositorio Git totalmente autogestionado (usa GitLab Self-Managed).
- Cuando el código debe permanecer en infraestructura on-premise por cumplimiento.
- Si buscas una plataforma libre de funciones sociales o redes de desarrolladores.
- Para proyectos que requieren características enterprise muy específicas.

## Pros

- Plataforma más grande del mundo con comunidad masiva.
- GitHub Actions es potente y está bien integrado.
- Interfaz intuitiva para revisiones de código.
- GitHub Pages para documentación gratuita.
- Ecosistema rico: Actions, Packages, Pages, Discussions.

## Contras

- Los repositorios privados gratuitos tienen límites de colaboradores en Actions.
- Propietario (Microsoft), no open source.
- Sin soporte nativo para CI/CD on-premise en la versión cloud.
- Las features enterprise tienen costo elevado.
- Dependencia de conectividad para funciones core.
