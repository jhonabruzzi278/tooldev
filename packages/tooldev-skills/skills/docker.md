---
name: docker
description: Plataforma de contenedores para empaquetar, distribuir y ejecutar aplicaciones en entornos aislados y reproducibles. Úsala cuando el usuario mencione o pregunte sobre contenedores, devops, virtualización, despliegue.
---

# Docker

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** devops
- **Pricing:** open-source
- **License:** Apache-2.0
- **Technical Level:** intermedio
- **Compatibility:** macOS, Linux, Windows, Docker Desktop
- **Official Site:** https://docker.com
- **GitHub:** https://github.com/moby/moby
- **Alternatives:** podman, containerd, buildah, nerdctl

## Features
- Contenedores ligeros con aislamiento a nivel de sistema operativo
- Dockerfile para definir entornos reproducibles como código
- Docker Compose para orquestación multi-contenedor local
- Capas de imágenes con caché para builds rápidos
- Volúmenes para persistencia de datos
- Redes virtuales para comunicación entre contenedores
- Docker Hub para distribuir imágenes públicas
- Multi-stage builds para imágenes de producción optimizadas

## Steps
### 1. Instala Docker
Descarga Docker Desktop para macOS y Windows o instala docker.io en Linux. Verifica con docker --version. Docker Desktop incluye Docker Engine, CLI, Compose y Kubernetes local.

### 2. Crea un Dockerfile
Define tu aplicación en un Dockerfile con FROM, RUN, COPY, EXPOSE y CMD. Usa imágenes base oficiales como node:20-alpine, python:3.12-slim o nginx:alpine para minimizar tamaño.

### 3. Construye y ejecuta
Ejecuta docker build -t mi-app . y luego docker run -p 3000:3000 mi-app. El flag -p mapea puertos del host al contenedor. Usa -d para modo detached (segundo plano).

### 4. Orquesta con Docker Compose
Crea un docker-compose.yml con servicios, redes y volúmenes. Ejecuta docker compose up -d para levantar tu stack completo: app, base de datos, caché y cola de mensajes con un solo comando.

## When to Use
- **Desarrollo con entornos reproducibles:** Para eliminar el clásico 'funciona en mi máquina'. Docker asegura que tu aplicación se ejecute exactamente igual en desarrollo, staging y producción, con todas las dependencias incluidas.
- **Microservicios y despliegue multi-componente:** Cuando tu aplicación tiene múltiples servicios (API, frontend, workers, colas) que necesitas orquestar. Cada servicio en su contenedor con redes aisladas y volúmenes compartidos.
- **CI/CD y automatización:** Para pipelines de integración continua donde cada build corre en un contenedor efímero. Docker proporciona entornos limpios y reproducibles para tests, linting y compilación.

## Examples
### Dockerfile para app Node.js
```
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
tput: "Imagen de producción de solo 150MB con Node.js 20, dependencias instaladas y la app. Multi-stage build separa la compilación de la imagen final para mínimo tamaño."
```

### Docker Compose para stack completo
```
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
tput: "Levanta API Node, PostgreSQL y Redis con 3 contenedores. Los datos de PostgreSQL persisten en un volumen nombrado. Variables de entorno via .env file."
```

## Tips
- Usa .dockerignore para excluir node_modules, .git y archivos temporales del contexto de build. Reduce drásticamente el tiempo de build y evita cache innecesaria.
- Combina multi-stage builds con imágenes base slim/alpine. Una imagen típica de producción debe estar entre 100-300MB. Evita imágenes con distros completas (ubuntu:22.04 son ~800MB sin app).
- Etiqueta tus imágenes con versión semver o commit SHA, nunca uses latest en producción. latest es ambigua y puede causar despliegues inconsistentes entre entornos.
- Usa healthchecks en tus Dockerfile y en docker-compose.yml. Docker reiniciará contenedores que fallen el healthcheck y Compose respetará depends_on con condition: service_healthy.

## FAQ
- **¿Docker es lo mismo que una máquina virtual?** No. Docker comparte el kernel del sistema operativo anfitrión, mientras que una VM tiene su propio kernel. Los contenedores son más ligeros (MB vs GB) y arrancan en segundos. Las VMs ofrecen mayor aislamiento al tener kernel propio.
- **¿Docker en producción necesita orquestación?** Para un solo servidor, docker compose up es suficiente. Para múltiples servidores, necesitas Docker Swarm (incluido) o Kubernetes (estándar de la industria). Kubernetes ofrece auto-escalado, balanceo de carga y rolling updates.
- **¿Docker es gratis para empresas?** Docker Engine y Compose son open source y gratis. Docker Desktop requiere licencia comercial para empresas con más de 250 empleados o $10M+ en ingresos. Alternativa: usa podman o colima como remplazo gratis de Docker Desktop.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://docker.com
- **Source Code Issues:** Check the repository at https://github.com/moby/moby for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
