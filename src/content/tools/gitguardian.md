---
name: GitGuardian
description: Plataforma que detecta secretos expuestos en el código y guía su corrección.
category: seguridad
tags:
  - secrets
  - security
  - git
  - scanning
  - leaks
officialSite: 'https://www.gitguardian.com'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Escaneo de secretos en repositorios, historial y pull requests'
  - Detección de más de 450 tipos de credenciales y tokens
  - Validación de secretos para descartar falsos positivos
  - Alertas en tiempo real con contexto del leak
  - Escaneo histórico completo del repositorio
  - 'ggshield CLI para pre-commit, pre-push y CI'
  - Dashboard de incidentes con flujo de remediación
alternatives:
  - socket
  - snyk
  - dependabot
relatedTools:
  - github
  - github-actions
  - gitlab
howToUse:
  - step: 1
    title: Conecta tus repositorios
    description: >-
      Regístrate en gitguardian.com con tu cuenta de GitHub, GitLab o Bitbucket
      y autoriza el acceso a las organizaciones. GitGuardian escanea el
      historial completo y empieza a monitorizar cada nuevo commit en tiempo
      real.
  - step: 2
    title: Instala ggshield en local y CI
    description: >-
      Instala la CLI ggshield (pip install ggshield) y configúrala como hook de
      pre-commit o paso en tu pipeline de CI. Así los secretos se bloquean antes
      de llegar al repositorio remoto, no después.
  - step: 3
    title: Remedia los incidentes detectados
    description: >-
      Para cada incidente, revoca el secreto expuesto en su proveedor (AWS,
      Stripe, Google...), rota la credencial y limpia el historial si es
      necesario. Marca el incidente como resuelto en el dashboard con la
      evidencia de la rotación.
whenToUse:
  - title: Equipos que manejan credenciales en muchos repositorios
    description: >-
      Cuando decenas de developers commitean a diario y el riesgo de que una API
      key acabe en el código es cuestión de tiempo, no de probabilidad.
  - title: Auditoría de fugas históricas
    description: >-
      Para revisar el historial completo de repos antiguos en busca de secretos
      commiteados hace años que siguen siendo válidos.
  - title: Cumplimiento de seguridad y auditorías
    description: >-
      Cuando necesitas demostrar a clientes o auditores que monitorizas la
      exposición de credenciales con procesos de remediación documentados.
tips:
  - text: >-
      El secreto detectado ya debe considerarse comprometido: revócalo siempre,
      aunque el repo sea privado; borrarlo del último commit no es suficiente.
  - text: >-
      Configura ggshield como pre-commit hook con la opción de allowlist
      controlada para que los developers no lo desactiven por falsos positivos.
  - text: >-
      Prioriza los incidentes donde GitGuardian valida que el secreto sigue
      activo: son los que requieren acción inmediata.
  - text: >-
      Añade el escaneo de IaC y de archivos de configuración: las credenciales
      en terraform.tfvars o .env commiteados son de los leaks más comunes.
faq:
  - question: ¿Qué incluye el plan gratuito de GitGuardian?
    answer: >-
      El plan gratuito permite escaneo de secretos hasta 25 developers y 100
      incidentes al mes, incluyendo monitorización en tiempo real y la CLI
      ggshield.
  - question: ¿Qué cuenta como developer en el límite del plan?
    answer: >-
      GitGuardian cuenta los autores de commits únicos que contribuyen a los
      repositorios monitorizados. El plan gratuito cubre equipos de hasta 25 de
      estos developers.
  - question: ¿Detecta solo claves de API conocidas?
    answer: >-
      No. Además de detectores específicos para más de 450 proveedores (AWS,
      Google, Stripe...), usa detección genérica por entropía para secretos
      desconocidos y puede validar si las credenciales siguen activas.
  - question: ¿Puedo escanear el historial completo de un repo?
    answer: >-
      Sí, GitGuardian escanea todo el historial de commits al conectar el
      repositorio, no solo el código actual, porque un secreto commiteado hace
      años sigue siendo un riesgo.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/gitguardian.webp
---

## ¿Qué es?

GitGuardian es una plataforma de seguridad especializada en detectar secretos expuestos (API keys, tokens, contraseñas, certificados) en repositorios Git, tanto en tiempo real en cada commit como en el historial completo, guiando la remediación de cada incidente.

## ¿Para qué sirve?

Sirve para evitar que credenciales filtradas en el código acaben en manos de atacantes: detecta el leak en segundos, valida si el secreto sigue activo y ofrece un flujo de trabajo para revocar, rotar y cerrar el incidente.

## Cuándo usarla

- En equipos donde muchos developers commitean a diario con credenciales cerca.
- Para auditar repos antiguos en busca de secretos históricos olvidados.
- Cuando necesitas bloquear secretos en pre-commit y CI con ggshield.

## Cuándo NO usarla

- Si buscas análisis de vulnerabilidades de dependencias (usa Dependabot o Socket).
- Para proyectos personales mínimos donde las alertas nativas de GitHub bastan.

## Pros

- Detección muy precisa con validación de secretos activos.
- Escaneo histórico y en tiempo real.
- CLI ggshield para bloquear antes del push.
- Plan gratuito usable para equipos pequeños.

## Contras

- Los falsos positivos en secretos genéricos requieren gestión de allowlist.
- El límite de 100 incidentes mensuales del plan gratis se agota en auditorías grandes.
