---
name: Dependabot
description: >-
  Bot de GitHub para actualizaciones de dependencias y alertas de
  vulnerabilidades con pull requests automáticos.
category: cicd
tags:
  - dependencies
  - security
  - updates
  - github
  - automation
officialSite: 'https://dependabot.com'
github: 'https://github.com/dependabot'
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Pull requests automáticos para actualizar dependencias
  - Alertas de vulnerabilidades con severity y CVE asociado
  - Security updates que parchean versiones afectadas
  - 'Version updates programados (diario, semanal, mensual)'
  - 'Soporte para npm, pip, Maven, Go modules, Cargo y más ecosistemas'
  - Agrupación de actualizaciones y reglas por dependencia
alternatives:
  - socket
  - snyk
  - gitguardian
relatedTools:
  - github
  - github-actions
howToUse:
  - step: 1
    title: Activa las alertas y security updates
    description: >-
      En la pestaña Settings > Security de tu repositorio de GitHub, habilita
      Dependabot alerts y Dependabot security updates. GitHub empezará a
      avisarte de dependencias vulnerables y a abrir PRs con los parches.
  - step: 2
    title: Configura las version updates
    description: >-
      Añade el archivo .github/dependabot.yml al repositorio definiendo el
      ecosistema (npm, pip, docker...), el directorio del manifiesto y la
      frecuencia de revisión. Dependabot abrirá PRs de actualización según ese
      calendario.
  - step: 3
    title: Revisa y mergea con confianza
    description: >-
      Cada PR de Dependabot incluye changelog, notas de release y
      compatibilidad. Deja que tu CI valide los tests y mergea directamente, o
      agrupa actualizaciones menores para reducir el ruido.
whenToUse:
  - title: Cualquier repositorio alojado en GitHub
    description: >-
      Es gratuito y está integrado: no hay razón para no activarlo en proyectos
      con dependencias de npm, pip, Go, Rust u otros ecosistemas soportados.
  - title: Equipos que se olvidan de actualizar dependencias
    description: >-
      Cuando las versiones se quedan obsoletas durante meses y las
      actualizaciones acumuladas se vuelven arriesgadas; Dependabot las
      convierte en PRs pequeños y frecuentes.
  - title: Respuesta rápida a vulnerabilidades publicadas
    description: >-
      Cuando sale un CVE que afecta a una dependencia tuya y quieres un PR con
      el parche listo para revisar sin investigar manualmente.
tips:
  - text: >-
      Sin CI con tests, Dependabot es peligroso: asegúrate de que cada PR pasa
      tu suite antes de mergear, especialmente en actualizaciones de major
      version.
  - text: >-
      Usa la opción groups en dependabot.yml para agrupar actualizaciones patch
      y minor en un solo PR semanal y reducir el ruido de notificaciones.
  - text: >-
      Configura el schedule en horario de poco tráfico y limita
      open-pull-requests-limit para no ahogar al equipo con decenas de PRs el
      primer día.
  - text: >-
      Combínalo con las dependency review actions en los PRs para ver el impacto
      de seguridad de cada cambio de dependencia antes del merge.
faq:
  - question: ¿Qué incluye el plan gratuito de Dependabot?
    answer: >-
      Es totalmente gratis dentro de GitHub: alertas de vulnerabilidades,
      parches de seguridad automáticos y pull requests de actualización sin
      coste en cualquier repositorio.
  - question: ¿Dependabot funciona fuera de GitHub?
    answer: >-
      Dependabot como producto independiente fue absorbido por GitHub y hoy vive
      integrado en la plataforma. En GitLab existen alternativas equivalentes
      como Renovate.
  - question: ¿Qué ecosistemas de paquetes soporta?
    answer: >-
      Soporta los principales gestores: npm/yarn, pip, Maven, Gradle, NuGet, Go
      modules, Cargo, Composer, Bundler, Docker, GitHub Actions y Terraform,
      entre otros.
  - question: ¿Puedo ignorar dependencias o versiones concretas?
    answer: >-
      Sí, en dependabot.yml puedes usar la clave ignore para excluir
      dependencias o rangos de versiones, y también puedes comentar comandos
      como @dependabot ignore this dependency directamente en el PR.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/dependabot.webp
---

## ¿Qué es?

Dependabot es el bot de actualización de dependencias integrado en GitHub: vigila los manifiestos de tu proyecto, alerta de vulnerabilidades conocidas y abre pull requests automáticos con parches de seguridad y nuevas versiones.

## ¿Para qué sirve?

Sirve para mantener las dependencias al día con PRs pequeños y frecuentes en lugar de actualizaciones masivas arriesgadas, y para reaccionar rápido cuando se publica un CVE que afecta a tus paquetes.

## Cuándo usarla

- En cualquier repositorio de GitHub: es gratis y está integrado.
- Cuando quieres parches de seguridad automáticos ante CVEs publicados.
- Para equipos que posponen las actualizaciones hasta que se vuelven dolorosas.

## Cuándo NO usarla

- Si tu código está en GitLab o Bitbucket, donde necesitas Renovate u otra alternativa.
- Sin CI con tests: mergear actualizaciones a ciegas rompe proyectos.

## Pros

- Totalmente gratis e integrado en GitHub.
- Security updates automáticos ante vulnerabilidades.
- PRs con changelog y notas de release incluidas.
- Configuración flexible por ecosistema, frecuencia y grupos.

## Contras

- Puede generar mucho ruido si no se configura agrupación.
- Atado al ecosistema GitHub, sin versión para otras plataformas.
