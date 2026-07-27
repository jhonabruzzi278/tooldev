---
name: GitHub Actions
description: Plataforma de CI/CD y automatización integrada en GitHub para builds, tests, releases y workflows.
category: cicd
tags: [ci-cd, automation, workflows, github, testing]
officialSite: https://github.com/features/actions
github: https://github.com/actions
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API, Linux, macOS, Windows]
featured: false
verified: false
features:
  - Workflows de CI/CD definidos en YAML dentro del repositorio
  - Disparadores por push, pull request, schedule o eventos personalizados
  - Marketplace con miles de acciones reutilizables de la comunidad
  - Runners alojados en Linux, Windows y macOS, o self-hosted
  - Matrices de builds para probar múltiples versiones en paralelo
  - Secrets y variables de entorno gestionados por repo u organización
  - Integración nativa con Issues, Packages, Pages y Deployments
alternatives: [circleci, buildkite, jenkins, gitlab]
relatedTools: [github, docker, codecov]
howToUse:
  - step: 1
    title: "Crea tu primer workflow"
    description: "Añade un archivo YAML en .github/workflows de tu repositorio. Define el evento disparador (on push o pull_request) y un job con pasos: checkout del código, setup del lenguaje y comandos de build y test."
  - step: 2
    title: "Usa acciones del Marketplace"
    description: "En lugar de escribir todo a mano, reutiliza acciones publicadas: actions/checkout para clonar, actions/setup-node para entornos, docker/build-push-action para imágenes. Configura sus entradas con la clave with."
  - step: 3
    title: "Gestiona secrets y despliegues"
    description: "Guarda credenciales en Settings > Secrets and variables y referéncialas con secrets.NOMBRE en el workflow. Añade jobs de despliegue protegidos por environments con aprobaciones manuales para producción."
whenToUse:
  - title: "CI/CD para proyectos que ya están en GitHub"
    description: "Cuando tu código vive en GitHub y quieres tests, builds y despliegues sin contratar ni integrar una plataforma de CI externa."
  - title: "Automatización de tareas del repositorio"
    description: "Para etiquetar PRs, publicar releases, generar changelogs, sincronizar documentación o ejecutar cualquier automatización disparada por eventos de GitHub."
  - title: "Matrices de testing multiplataforma"
    description: "Cuando necesitas probar tu proyecto en varias versiones de Node, Python o sistemas operativos en paralelo con una sola definición."
tips:
  - text: "Cachea las dependencias con actions/cache (o la opción cache integrada en setup-node/setup-python) para recortar minutos de build en cada ejecución."
  - text: "Los minutos en runners de Windows y macOS consumen más rápido que en Linux (multiplicadores de 2x y 10x); reserva esos runners para lo estrictamente necesario."
  - text: "Usa environments con required reviewers para que los despliegues a producción requieran aprobación manual."
  - text: "Fija las acciones de terceros por SHA de commit en lugar de por tag para evitar ataques de supply chain en tus workflows."
faq:
  - question: "¿Qué incluye el plan gratuito de GitHub Actions?"
    answer: "Es gratis e ilimitado en repositorios públicos; los repositorios privados incluyen 2.000 minutos y 500 MB de almacenamiento de artefactos al mes."
  - question: "¿Qué pasa al superar los 2.000 minutos en repos privados?"
    answer: "Los workflows dejan de ejecutarse hasta el siguiente ciclo de facturación o hasta que compres minutos adicionales. Los repos públicos no tienen este límite."
  - question: "¿Puedo usar mis propias máquinas como runners?"
    answer: "Sí, los self-hosted runners se instalan en tu hardware o VMs y ejecutan los jobs sin consumir minutos de GitHub, útil para cargas pesadas o requisitos de red internos."
  - question: "¿Cómo ejecuto un workflow manualmente?"
    answer: "Añade el disparador workflow_dispatch a la sección on del YAML; aparecerá un botón Run workflow en la pestaña Actions para lanzarlo con parámetros de entrada opcionales."
publishedAt: 2026-07-21
---

## ¿Qué es?

GitHub Actions es el sistema de CI/CD y automatización integrado en GitHub: defines workflows en YAML dentro del propio repositorio que se ejecutan ante eventos como push, pull requests o schedules, usando runners alojados por GitHub o propios.

## ¿Para qué sirve?

Sirve para automatizar tests, builds, publicación de artefactos, despliegues y cualquier tarea repetitiva del ciclo de vida de un repositorio, con un enorme marketplace de acciones reutilizables y sin salir del ecosistema GitHub.

## Cuándo usarla

- Cuando tu código está en GitHub y quieres CI/CD sin herramientas externas.
- Para automatizar releases, etiquetado de PRs y tareas de mantenimiento del repo.
- Si necesitas matrices de tests en varios sistemas operativos y versiones.

## Cuándo NO usarla

- Si tu código está en GitLab o Bitbucket, donde la CI nativa se integra mejor.
- Para pipelines con requisitos de orquestación muy complejos que exceden su modelo de workflows.

## Pros

- Integración perfecta con GitHub, sin configurar conexiones externas.
- Gratis e ilimitado en repositorios públicos.
- Marketplace enorme con acciones para casi todo.
- Runners en Linux, Windows y macOS, más opción self-hosted.

## Contras

- Los minutos de repos privados se agotan rápido con matrices grandes.
- El debugging de workflows complejos puede ser tedioso por el ciclo commit-push-ejecuta.
