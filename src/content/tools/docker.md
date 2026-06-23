---
name: Docker
description: Plataforma de contenedores para empaquetar, distribuir y ejecutar aplicaciones en entornos aislados y reproducibles.
category: devops
tags: [contenedores, devops, virtualización, despliegue, docker]
officialSite: https://docker.com
github: https://github.com/moby/moby
pricing: open-source
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: [macOS, Linux, Windows, Docker Desktop]
featured: true
verified: true
screenshots:
  - /screenshots/docker.webp
features:
  - Contenedores ligeros con aislamiento a nivel de sistema operativo
  - Dockerfile para definir entornos reproducibles como código
  - Docker Compose para orquestación multi-contenedor local
  - Capas de imágenes con caché para builds rápidos
  - Volúmenes para persistencia de datos
  - Redes virtuales para comunicación entre contenedores
  - Docker Hub para distribuir imágenes públicas
  - Multi-stage builds para imágenes de producción optimizadas
alternatives: [podman, containerd, buildah, nerdctl]
relatedTools: [kubernetes, docker-compose, portainer, terraform]
howToUse:
  - step: 1
    title: "Instala Docker"
    description: "Descarga Docker Desktop para macOS y Windows o instala docker.io en Linux. Verifica con docker --version. Docker Desktop incluye Docker Engine, CLI, Compose y Kubernetes local."
  - step: 2
    title: "Crea un Dockerfile"
    description: "Define tu aplicación en un Dockerfile con FROM, RUN, COPY, EXPOSE y CMD. Usa imágenes base oficiales como node:20-alpine, python:3.12-slim o nginx:alpine para minimizar tamaño."
  - step: 3
    title: "Construye y ejecuta"
    description: "Ejecuta docker build -t mi-app . y luego docker run -p 3000:3000 mi-app. El flag -p mapea puertos del host al contenedor. Usa -d para modo detached (segundo plano)."
  - step: 4
    title: "Orquesta con Docker Compose"
    description: "Crea un docker-compose.yml con servicios, redes y volúmenes. Ejecuta docker compose up -d para levantar tu stack completo: app, base de datos, caché y cola de mensajes con un solo comando."
whenToUse:
  - title: "Desarrollo con entornos reproducibles"
    description: "Para eliminar el clásico 'funciona en mi máquina'. Docker asegura que tu aplicación se ejecute exactamente igual en desarrollo, staging y producción, con todas las dependencias incluidas."
  - title: "Microservicios y despliegue multi-componente"
    description: "Cuando tu aplicación tiene múltiples servicios (API, frontend, workers, colas) que necesitas orquestar. Cada servicio en su contenedor con redes aisladas y volúmenes compartidos."
  - title: "CI/CD y automatización"
    description: "Para pipelines de integración continua donde cada build corre en un contenedor efímero. Docker proporciona entornos limpios y reproducibles para tests, linting y compilación."
examples:
  - title: "Dockerfile para app Node.js"
    code: |
      FROM node:20-alpine AS build
      WORKDIR /app
      COPY package*.json ./
      RUN npm ci --only=production
      COPY . .
      FROM node:20-alpine
      WORKDIR /app
      COPY --from=build /app .
      EXPOSE 3000
      CMD ["node", "server.js"]
    output: "Imagen de producción de solo 150MB con Node.js 20, dependencias instaladas y la app. Multi-stage build separa la compilación de la imagen final para mínimo tamaño."
  - title: "Docker Compose para stack completo"
    code: |
      services:
        api:
          build: ./api
          ports: ["3000:3000"]
          depends_on: [db, redis]
        db:
          image: postgres:16-alpine
          volumes: ["pgdata:/var/lib/postgresql/data"]
          environment:
            POSTGRES_PASSWORD: ${DB_PASSWORD}
        redis:
          image: redis:7-alpine
      volumes: { pgdata: }
    output: "Levanta API Node, PostgreSQL y Redis con 3 contenedores. Los datos de PostgreSQL persisten en un volumen nombrado. Variables de entorno via .env file."
tips:
  - text: "Usa .dockerignore para excluir node_modules, .git y archivos temporales del contexto de build. Reduce drásticamente el tiempo de build y evita cache innecesaria."
  - text: "Combina multi-stage builds con imágenes base slim/alpine. Una imagen típica de producción debe estar entre 100-300MB. Evita imágenes con distros completas (ubuntu:22.04 son ~800MB sin app)."
  - text: "Etiqueta tus imágenes con versión semver o commit SHA, nunca uses latest en producción. latest es ambigua y puede causar despliegues inconsistentes entre entornos."
  - text: "Usa healthchecks en tus Dockerfile y en docker-compose.yml. Docker reiniciará contenedores que fallen el healthcheck y Compose respetará depends_on con condition: service_healthy."
faq:
  - question: "¿Docker es lo mismo que una máquina virtual?"
    answer: "No. Docker comparte el kernel del sistema operativo anfitrión, mientras que una VM tiene su propio kernel. Los contenedores son más ligeros (MB vs GB) y arrancan en segundos. Las VMs ofrecen mayor aislamiento al tener kernel propio."
  - question: "¿Docker en producción necesita orquestación?"
    answer: "Para un solo servidor, docker compose up es suficiente. Para múltiples servidores, necesitas Docker Swarm (incluido) o Kubernetes (estándar de la industria). Kubernetes ofrece auto-escalado, balanceo de carga y rolling updates."
  - question: "¿Docker es gratis para empresas?"
    answer: "Docker Engine y Compose son open source y gratis. Docker Desktop requiere licencia comercial para empresas con más de 250 empleados o $10M+ en ingresos. Alternativa: usa podman o colima como remplazo gratis de Docker Desktop."
publishedAt: 2026-06-01
---

## ¿Qué es?

Docker es la plataforma de contenedores más utilizada del mundo. Permite empaquetar una aplicación con todas sus dependencias en un contenedor estandarizado que se ejecuta de forma consistente en cualquier sistema con Docker instalado.

## ¿Para qué sirve?

Docker sirve para eliminar problemas de entorno entre desarrollo y producción, simplificar despliegues, escalar servicios horizontalmente y estandarizar pipelines de CI/CD. Es el bloque fundamental de la infraestructura cloud nativa moderna.

## Cuándo usarla

- Para estandarizar entornos de desarrollo en equipos.
- Para desplegar aplicaciones con múltiples servicios.
- En pipelines de CI/CD para entornos efímeros.
- Para microservicios y arquitecturas distribuidas.
- Cuando necesitas reproducir un bug en el mismo entorno de producción.

## Cuándo NO usarla

- Para aplicaciones de escritorio nativas con GUI compleja.
- Cuando el aislamiento de kernel no es suficiente seguridad.
- Para aplicaciones que requieren acceso directo a hardware especializado.
- En entornos con restricciones de recursos extremas (kernel compartido).

## Pros

- Entornos reproducibles en cualquier sistema.
- Imágenes ligeras con capas cacheables.
- Ecosistema masivo de imágenes oficiales.
- Integración nativa con CI/CD y Kubernetes.
- Aislamiento de procesos con baja sobrecarga.

## Contras

- Aislamiento menos seguro que VMs (kernel compartido).
- Curva de aprendizaje de Dockerfile óptimos.
- Gestión de redes y volúmenes puede ser compleja.
- Docker Desktop tiene restricciones de licencia comercial.

## CLI

```bash
docker build -t mi-app .              # Construir imagen
docker run -d -p 3000:3000 mi-app     # Ejecutar contenedor
docker compose up -d                  # Levantar stack
docker ps                             # Listar contenedores activos
docker logs -f mi-app                 # Ver logs en tiempo real
```
