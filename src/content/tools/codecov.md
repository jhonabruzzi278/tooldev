---
name: Codecov
description: >-
  Plataforma que convierte la cobertura de código en checks de pull request e
  informes visuales.
category: cicd
tags:
  - coverage
  - testing
  - code-quality
  - pull-requests
  - reports
officialSite: 'https://about.codecov.io'
github: 'https://github.com/codecov'
pricing: freemium
openSource: false
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Informes de cobertura con visualización por archivo y por línea
  - Checks automáticos de cobertura en cada pull request
  - Comentarios en el PR con el impacto del cambio en la cobertura
  - Soporte para la mayoría de lenguajes y formatos de reporte
  - Flags y componentes para monorepos y suites separadas
  - Merges de cobertura de múltiples ejecuciones y CI paralelos
alternatives:
  - sonarcloud
  - snyk
relatedTools:
  - github-actions
  - circleci
  - github
howToUse:
  - step: 1
    title: Genera el reporte de cobertura en tu CI
    description: >-
      Configura tu suite de tests para producir un archivo de cobertura estándar
      (lcov, cobertura, jacoco, coverage.py...). En GitHub Actions, por ejemplo,
      ejecuta los tests con --coverage antes del paso de subida.
  - step: 2
    title: Sube el reporte a Codecov
    description: >-
      Añade el paso codecov/codecov-action en tu workflow o usa el uploader en
      otros sistemas de CI. Codecov recibe el reporte, lo procesa y lo asocia al
      commit y a la rama correspondientes.
  - step: 3
    title: Configura checks y umbrales
    description: >-
      Define en codecov.yml los umbrales de cobertura del proyecto y del patch.
      Los checks aparecerán en cada pull request y bloquearán el merge si la
      cobertura baja más de lo permitido.
whenToUse:
  - title: Equipos que quieren proteger la cobertura en cada PR
    description: >-
      Cuando quieres que ningún pull request baje la cobertura sin que nadie lo
      note, con checks visibles directamente en GitHub o GitLab.
  - title: Proyectos con tests repartidos en varios pipelines
    description: >-
      Para combinar la cobertura de unit tests, integración y e2e ejecutados en
      jobs distintos en un único porcentaje consolidado.
  - title: Open source que quiere mostrar su calidad
    description: >-
      Para proyectos públicos que exhiben su badge de cobertura en el README y
      mantienen disciplina de testing con informes gratuitos.
tips:
  - text: >-
      Usa el umbral de patch (cobertura del código nuevo) en lugar de exigir
      subir el total: es más realista en proyectos con deuda técnica.
  - text: >-
      En CI paralelos, marca cada subida con flags y deja que Codecov las
      combine; así no pierdes cobertura por suites separadas.
  - text: >-
      Ignora en codecov.yml los archivos generados, migraciones y vendors para
      que el porcentaje refleje el código que realmente mantienes.
  - text: >-
      Fija la versión del uploader o usa el action oficial verificado; el
      reporte de cobertura puede contener rutas sensibles del código.
faq:
  - question: ¿Qué incluye el plan gratuito de Codecov?
    answer: >-
      Es gratis para repositorios open source; el plan Basic para repos privados
      incluye 1 usuario con repositorios y subidas ilimitados.
  - question: ¿Qué lenguajes y formatos soporta?
    answer: >-
      Prácticamente todos los lenguajes con herramientas de cobertura:
      JavaScript, Python, Java, Go, Ruby, C#, Swift y más, aceptando formatos
      como lcov, cobertura, JaCoCo o coverage.py.
  - question: ¿Codecov ejecuta los tests por mí?
    answer: >-
      No. Codecov solo recibe y analiza los reportes; los tests se ejecutan en
      tu CI habitual (GitHub Actions, CircleCI, etc.), que luego sube el archivo
      de cobertura.
  - question: ¿Qué son los flags de Codecov?
    answer: >-
      Son etiquetas para separar reportes por suite (unit, integration, e2e) o
      por componente de un monorepo, permitiendo umbrales y gráficas
      independientes que luego se combinan en el total.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/codecov.webp
---

## ¿Qué es?

Codecov es una plataforma de análisis de cobertura de código: recibe los reportes que generan tus tests en CI y los convierte en informes visuales, comentarios en pull requests y checks que protegen la cobertura del proyecto en cada cambio.

## ¿Para qué sirve?

Sirve para hacer visible qué líneas están cubiertas por tests, impedir que los pull requests reduzcan la cobertura sin revisión y consolidar reportes de múltiples suites y lenguajes en una única métrica fiable.

## Cuándo usarla

- Cuando quieres checks de cobertura automáticos en cada pull request.
- Para proyectos multi-lenguaje o con tests repartidos en varios jobs de CI.
- En open source, donde es gratis y muestra calidad con badges en el README.

## Cuándo NO usarla

- Si buscas análisis estático completo con bugs y seguridad (usa SonarCloud).
- Para proyectos sin suite de tests que genere reportes de cobertura.

## Pros

- Integración excelente con GitHub y los principales CI.
- Gratis para open source y plan Basic usable para privados.
- Flags y componentes muy útiles en monorepos.
- Comentarios de PR claros sobre el impacto en cobertura.

## Contras

- Depende de que tu CI genere y suba reportes correctamente.
- Los porcentajes pueden distorsionar si no se configuran exclusiones.
