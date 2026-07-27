---
name: SonarCloud
description: Análisis estático en la nube de calidad, mantenibilidad y seguridad del código.
category: cicd
tags: [static-analysis, code-quality, security, lint, bugs]
officialSite: https://sonarcloud.io
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - Detección de bugs, code smells y vulnerabilidades en 30+ lenguajes
  - Quality Gate configurable que bloquea pull requests
  - Métricas de cobertura, duplicación y deuda técnica
  - Análisis de seguridad con reglas OWASP y hotspots
  - Integración con GitHub, GitLab, Bitbucket y Azure DevOps
  - "Clean as You Code: foco en la calidad del código nuevo"
alternatives: [codecov, snyk, socket]
relatedTools: [github-actions, circleci, github]
howToUse:
  - step: 1
    title: "Crea la organización y el proyecto"
    description: "Entra en sonarcloud.io con tu cuenta de GitHub, GitLab o Bitbucket, importa la organización y selecciona los repositorios a analizar. SonarCloud configura el análisis base según el lenguaje detectado."
  - step: 2
    title: "Integra el análisis en tu CI"
    description: "Añade el scanner a tu pipeline: con GitHub Actions basta el action oficial y un token de SonarCloud en los secrets. Para proyectos compilados (Java, .NET) el scanner se engancha al build para analizar con contexto."
  - step: 3
    title: "Configura el Quality Gate"
    description: "Define las condiciones del Quality Gate (cobertura mínima en código nuevo, cero bugs bloqueantes, duplicación máxima). El resultado aparece como check en cada pull request y puede bloquear el merge."
whenToUse:
  - title: "Equipos que quieren un estándar de calidad objetivo"
    description: "Cuando las revisiones de código necesitan apoyo automático: bugs comunes, code smells, duplicación y cobertura medidos de forma consistente en cada PR."
  - title: "Proyectos open source que cuidan su mantenibilidad"
    description: "Para repos públicos que quieren análisis profesional gratis, con badges de calidad y métricas públicas que transmiten confianza."
  - title: "Cumplimiento de seguridad básica sin SAST dedicado"
    description: "Cuando necesitas detectar vulnerabilidades comunes y hotspots de seguridad (OWASP) sin contratar una herramienta de seguridad especializada."
tips:
  - text: "Adopta la filosofía Clean as You Code: exige calidad solo en el código nuevo y deja que la deuda antigua se vaya pagando al tocar cada archivo."
  - text: "Ajusta las reglas del quality profile a tu contexto; desactivar reglas que tu equipo nunca cumplirá evita que el ruido mate la disciplina."
  - text: "Combínalo con Codecov si necesitas informes de cobertura muy detallados: SonarCloud mide cobertura pero su fuerte es la calidad estática."
  - text: "Revisa los security hotspots manualmente: no son vulnerabilidades seguras, pero marcan puntos que merecen una mirada humana."
faq:
  - question: "¿Qué incluye el plan gratuito de SonarCloud?"
    answer: "Es gratis para repositorios públicos con líneas de código ilimitadas; los repositorios privados requieren un plan de pago según el tamaño del código."
  - question: "¿Qué diferencia hay con SonarQube?"
    answer: "SonarCloud es la versión alojada (SaaS) gestionada por Sonar, mientras SonarQube se instala en tu propia infraestructura. Las reglas y el motor de análisis son esencialmente los mismos."
  - question: "¿Qué es el Quality Gate?"
    answer: "Es un conjunto de condiciones (por ejemplo, cobertura de código nuevo superior al 80% o cero bugs bloqueantes) que determina si un análisis pasa o falla, mostrándose como check en el pull request."
  - question: "¿Sustituye a los linters como ESLint?"
    answer: "No los sustituye, los complementa: los linters dan feedback inmediato en el editor y SonarCloud ofrece análisis más profundo, métricas históricas, seguridad y un gate centralizado en CI."
publishedAt: 2026-07-21
---

## ¿Qué es?

SonarCloud es la plataforma SaaS de Sonar para análisis estático: inspecciona el código en más de 30 lenguajes detectando bugs, code smells, vulnerabilidades y duplicación, con Quality Gates que se integran como checks en los pull requests.

## ¿Para qué sirve?

Sirve para mantener un estándar de calidad y seguridad medible en todo el equipo, detectando problemas antes de que lleguen a producción y haciendo seguimiento de la deuda técnica con métricas históricas y dashboards.

## Cuándo usarla

- Cuando quieres un Quality Gate automático que bloquee PRs con problemas graves.
- Para proyectos open source, donde el análisis es gratis e ilimitado.
- Si necesitas visión histórica de deuda técnica, duplicación y cobertura.

## Cuándo NO usarla

- Para repos privados grandes con presupuesto cero, ya que el pago escala por líneas de código.
- Si solo necesitas linting rápido en local sin métricas centralizadas.

## Pros

- Análisis profundo multi-lenguaje con reglas de seguridad OWASP.
- Gratis e ilimitado para repositorios públicos.
- Quality Gate integrado como check en el pull request.
- Enfoque Clean as You Code que hace la mejora asumible.

## Contras

- Los falsos positivos exigen tiempo de ajuste de reglas.
- El precio por líneas de código puede crecer mucho en monorepos privados.
