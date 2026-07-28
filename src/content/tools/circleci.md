---
name: CircleCI
description: >-
  Plataforma de CI/CD alojada con pipelines flexibles, múltiples ejecutores y
  trabajos paralelos.
category: cicd
tags:
  - ci-cd
  - testing
  - pipelines
  - docker
  - automation
officialSite: 'https://circleci.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
  - Linux
  - macOS
  - Windows
featured: false
verified: false
features:
  - Pipelines definidos en YAML con orbes reutilizables
  - 'Ejecutores Docker, máquinas virtuales Linux, Windows y macOS'
  - Paralelismo y división automática de tests para builds rápidos
  - Workflows con aprobaciones manuales y jobs condicionales
  - Caché de dependencias y workspaces entre jobs
  - 'Insights con métricas de duración, éxito y consumo de créditos'
alternatives:
  - github-actions
  - buildkite
  - jenkins
  - gitlab
relatedTools:
  - docker
  - github
  - codecov
howToUse:
  - step: 1
    title: Conecta tu repositorio
    description: >-
      Regístrate en circleci.com con tu cuenta de GitHub, GitLab o Bitbucket y
      selecciona el proyecto. CircleCI propone una configuración inicial según
      el lenguaje detectado en el repositorio.
  - step: 2
    title: Define el pipeline en config.yml
    description: >-
      Crea el archivo .circleci/config.yml con jobs (entorno de ejecución y
      pasos) y workflows (orden y dependencias entre jobs). Usa orbes del
      registro para integraciones comunes como Slack, Docker o despliegues
      cloud.
  - step: 3
    title: Optimiza con paralelismo y caché
    description: >-
      Activa el paralelismo para dividir los tests entre varios contenedores y
      configura save_cache y restore_cache para dependencias. Revisa los
      Insights para detectar los jobs más lentos y ajustar.
whenToUse:
  - title: Pipelines de CI exigentes con tests paralelos
    description: >-
      Cuando tu suite de tests tarda demasiado y necesitas dividirla
      automáticamente entre decenas de contenedores para acortar el feedback.
  - title: Equipos multiplataforma con necesidades variadas
    description: >-
      Para proyectos que compilan en Docker, VMs Linux, Windows y macOS dentro
      del mismo pipeline sin gestionar esa flota.
  - title: Organizaciones que quieren CI gestionado independiente del Git host
    description: >-
      Cuando usas GitHub, GitLab o Bitbucket y prefieres una plataforma de CI
      especializada y neutral con métricas avanzadas.
tips:
  - text: >-
      Usa la división de tests por timing (circleci tests split) para repartir
      los archivos de test según su duración histórica y equilibrar los
      contenedores.
  - text: >-
      Los créditos se consumen según el tipo de ejecutor: los recursos grandes y
      macOS cuestan mucho más; ajusta resource_class a lo que cada job realmente
      necesita.
  - text: >-
      Versiona la configuración con los dynamic config y path filtering para
      ejecutar solo los jobs afectados por los cambios en monorepos.
  - text: >-
      Configura los workflows para que los jobs caros (e2e, despliegue) solo
      corran en la rama principal o tras aprobación manual.
faq:
  - question: ¿Qué incluye el plan gratuito de CircleCI?
    answer: >-
      El plan Free incluye 30.000 créditos al mes, hasta 5 usuarios activos y 80
      jobs simultáneos, suficiente para proyectos pequeños y medianos.
  - question: ¿Qué son los orbes de CircleCI?
    answer: >-
      Son paquetes reutilizables de configuración YAML (jobs, comandos y
      ejecutores) publicados en el registro de orbes, que simplifican
      integraciones con Docker, clouds, notificaciones y herramientas de
      testing.
  - question: ¿Cómo funciona el sistema de créditos?
    answer: >-
      Cada minuto de ejecución consume créditos según el ejecutor y el
      resource_class elegido. Linux Docker es lo más barato; las máquinas
      grandes, Windows y macOS consumen bastante más por minuto.
  - question: ¿Puedo ejecutar jobs en mi propia infraestructura?
    answer: >-
      Sí, con los self-hosted runners de CircleCI puedes correr jobs en tus
      máquinas manteniendo la orquestación y la interfaz en la nube de CircleCI.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/circleci.webp
---

## ¿Qué es?

CircleCI es una de las plataformas de CI/CD alojadas más veteranas: define pipelines en YAML, ejecútalos en Docker, VMs Linux, Windows o macOS y acelera los builds con paralelismo automático, caché y un ecosistema de orbes reutilizables.

## ¿Para qué sirve?

Sirve para automatizar builds, tests y despliegues con pipelines flexibles que se adaptan desde proyectos pequeños hasta monorepos complejos, ofreciendo métricas detalladas y soporte multiplataforma sin gestionar la flota de ejecutores.

## Cuándo usarla

- Para suites de tests grandes que se benefician del paralelismo automático.
- Cuando necesitas ejecutar jobs en Docker, Linux, Windows y macOS a la vez.
- Si quieres un CI especializado e independiente de tu proveedor de Git.

## Cuándo NO usarla

- Si todo tu flujo ya vive en GitHub y GitHub Actions cubre tus necesidades gratis.
- Para equipos con presupuesto cero y consumo alto, donde los créditos se agotan.

## Pros

- Paralelismo y test splitting muy maduros.
- Ejecutores variados incluyendo macOS y GPUs.
- Orbes que reducen drásticamente la configuración repetitiva.
- Insights útiles para optimizar duración y coste.

## Contras

- El sistema de créditos puede ser difícil de prever al escalar.
- La configuración avanzada (dynamic config) tiene curva de aprendizaje.
