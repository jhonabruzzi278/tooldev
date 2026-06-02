---
name: Jenkins
description: Servidor de automatización CI/CD extensible para construir, probar y desplegar software de forma continua.
category: devops
tags: [devops, ci, cd, automatizacion, pipelines, integracion]
officialSite: https://www.jenkins.io
pricing: gratis
openSource: true
license: MIT
technicalLevel: avanzado
compatibility: [Linux, Windows, macOS, Docker, Kubernetes]
featured: false
features:
  - Pipelines como código con Jenkinsfile
  - Cientos de plugins para integración con todo
  - Ejecutores maestros y agentes distribuidos
  - Integración con Git, Docker, Kubernetes
  - Notificaciones por email, Slack, etc.
  - Blue Ocean para interfaz moderna
  - Seguridad con roles y permisos
alternatives: []
relatedTools: [github, gitlab, docker, kubernetes, ansible, terraform]
howToUse:
  - step: 1
    title: "Instalar Jenkins"
    description: "Descarga el archivo WAR o usa la imagen Docker oficial. Ejecuta `java -jar jenkins.war` o `docker run -p 8080:8080 jenkins/jenkins:lts`. Completa el wizard de instalación inicial y configura el usuario administrador."
  - step: 2
    title: "Crear un pipeline con Jenkinsfile"
    description: "Escribe un archivo `Jenkinsfile` en la raíz de tu repositorio definiendo las etapas (stages) del pipeline: checkout, build, test y deploy. Usa la sintaxis declarativa con bloques `pipeline`, `agent`, `stages` y `steps`."
  - step: 3
    title: "Configurar agentes y nodos distribuidos"
    description: "Administra Jenkins > Nodes > New Node para añadir agentes remotos. Conecta agentes via SSH, JNLP o Kubernetes. Distribuye builds entre múltiples máquinas para balancear carga y ejecutar en distintos sistemas operativos."
  - step: 4
    title: "Integrar plugins esenciales"
    description: "Ve a Administrar Jenkins > Plugins e instala los plugins necesarios: Git, Blue Ocean, Pipeline, Docker, Kubernetes, Slack Notification. Configura las credenciales para cada integración desde el gestor de credenciales."
whenToUse:
  - title: "CI/CD para equipos con pipelines personalizados"
    description: "Cuando necesitas un pipeline de integración y despliegue continuo altamente personalizable que se adapte a cualquier stack tecnológico y proceso de release, sin las limitaciones de soluciones integradas."
  - title: "Integración con herramientas legacy o específicas"
    description: "Si tu organización usa herramientas propietarias o sistemas heredados que requieren integración a medida. Jenkins tiene más de 1800 plugins que cubren prácticamente cualquier herramienta del mercado."
  - title: "Organizaciones con requisitos de compliance y seguridad"
    description: "Cuando necesitas control total sobre la infraestructura CI/CD, con auditoría de cambios, gestión granular de roles y permisos, y la capacidad de ejecutar todo on-premise sin depender de servicios cloud externos."
examples:
  - title: "Pipeline declarativo básico"
    code: |
      pipeline {
          agent any
          stages {
              stage('Checkout') {
                  steps {
                      git 'https://github.com/usuario/repo.git'
                  }
              }
              stage('Build') {
                  steps {
                      sh 'npm install && npm run build'
                  }
              }
              stage('Test') {
                  steps {
                      sh 'npm test'
                  }
              }
              stage('Deploy') {
                  when { branch 'main' }
                  steps {
                      sh 'npm run deploy'
                  }
              }
          }
      }
    output: "Pipeline ejecuta 4 stages secuencialmente. Deploy solo ocurre en la rama main. Resultado visible en Blue Ocean o interfaz clásica con logs por etapa."
  - title: "Pipeline con etapas paralelas"
    code: |
      pipeline {
          agent any
          stages {
              stage('Tests Paralelos') {
                  parallel {
                      stage('Unit Tests') {
                          steps { sh 'npm run test:unit' }
                      }
                      stage('Integration Tests') {
                          steps { sh 'npm run test:integration' }
                      }
                      stage('Lint') {
                          steps { sh 'npm run lint' }
                      }
                  }
              }
          }
      }
    output: "Las tres etapas de testing se ejecutan simultáneamente en agentes separados, reduciendo el tiempo total del pipeline."
tips:
  - text: "Siempre define tus pipelines como código usando Jenkinsfile en el repositorio. Esto permite versionar, revisar y reproducir los pipelines como cualquier otro código."
  - text: "Usa `when` conditions para controlar qué etapas se ejecutan según la rama, etiqueta o variable. Evita pipelines monolíticos que ejecutan todo siempre."
  - text: "No instales plugins innecesarios. Cada plugin añade superficie de ataque, consumo de memoria y potenciales conflictos de versiones."
  - text: "Configura backups automáticos de la configuración de Jenkins (`JENKINS_HOME`) usando el plugin ThinBackup o snapshots del volumen."
  - text: "Usa agentes efímeros con Docker o Kubernetes para aislar builds y evitar contaminación del entorno entre ejecuciones."
faq:
  - question: "¿Jenkins vs GitHub Actions, cuál elegir?"
    answer: "GitHub Actions es más simple y está integrado con GitHub, ideal para equipos pequeños o proyectos alojados en GitHub. Jenkins ofrece máxima personalización, control on-premise y funciona con cualquier sistema de control de versiones. Usa Jenkins si necesitas pipelines muy complejos o ejecutar en infraestructura propia."
  - question: "¿Cómo solucionar conflictos de versiones entre plugins?"
    answer: "Usa el Plugin Manager para ver las dependencias. Actualiza todos los plugins en conjunto desde Administrar Jenkins > Plugins > Actualizaciones. Si un plugin específico causa problemas, puedes degradarlo a una versión anterior o buscar una alternativa compatible."
  - question: "¿Por qué mi Jenkins consume tanta memoria?"
    answer: "Jenkins por defecto usa el recolector de basura serial. Configura `-XX:+UseG1GC` en las opciones de JVM y limita el número de ejecutores. Cada build en ejecutor consume memoria. Revisa los plugins instalados y elimina los que no uses."
  - question: "¿Cómo hago un pipeline que despliegue solo en la rama main?"
    answer: "Usa la condición `when { branch 'main' }` dentro del stage de deploy. También puedes usar un pipeline multibranch que automáticamente detecte ramas y aplique condiciones según el nombre de la rama."
publishedAt: 2026-06-01
---

## ¿Qué es?

Jenkins es el servidor de automatización CI/CD líder en la industria. Originalmente creado como Hudson, permite construir pipelines de integración y despliegue continuos con un ecosistema masivo de plugins.

## ¿Para qué sirve?

Jenkins sirve para automatizar builds de software, ejecutar tests automáticos, desplegar aplicaciones en múltiples entornos, orquestar pipelines complejos, integrar herramientas de desarrollo y estandarizar procesos de release.

## Cuándo usarla

- Para equipos que necesitan CI/CD altamente personalizable.
- Cuando trabajas con múltiples lenguajes y tecnologías.
- Si necesitas integrar herramientas legacy o específicas.
- Para organizaciones con requisitos de seguridad y compliance.
- Cuando valoras la estabilidad y madurez del software.

## Cuándo NO usarla

- Para equipos pequeños que buscan simplicidad (GitHub Actions es mejor).
- Si usas GitLab (GitLab CI viene integrado).
- Cuando empiezas un proyecto nuevo desde cero.
- Si no necesitas la flexibilidad de los plugins.
- Para equipos sin experiencia en administración de Jenkins.

## Pros

- Ecosistema masivo de plugins (más de 1800).
- Altamente personalizable y extensible.
- Madurez y estabilidad comprobadas.
- Pipelines como código con Jenkinsfile.
- Soporte para cualquier lenguaje o herramienta.

## Contras

- Interfaz desactualizada (Blue Ocean mejora pero no es default).
- Configuración y mantenimiento complejos.
- Consume muchos recursos.
- Curva de aprendizaje pronunciada.
- Plugins pueden tener conflictos de versiones.
