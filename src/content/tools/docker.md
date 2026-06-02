---
name: Docker
description: Plataforma de contenedores que permite empaquetar aplicaciones con todas sus dependencias para ejecutarlas en cualquier entorno.
category: devops
tags: [contenedores, docker, devops, despliegue, microservicios, virtualizacion]
officialSite: https://www.docker.com
github: https://github.com/moby/moby
pricing: freemium
openSource: true
license: Apache 2.0
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux]
featured: true
features:
  - Contenedores ligeros y portables
  - Dockerfile para imágenes reproducibles
  - Docker Compose para multi-contenedor
  - Docker Hub como registro público
  - Networking entre contenedores
  - Volúmenes para persistencia de datos
  - Integración con Kubernetes
alternatives: []
relatedTools: [postman, github-copilot]
howToUse:
  - step: 1
    title: "Instalar Docker"
    description: "Descarga Docker Desktop desde docker.com para tu sistema operativo. En Linux puedes instalar solo Docker Engine. Verifica la instalación con docker --version y docker run hello-world para confirmar que todo funciona correctamente."
  - step: 2
    title: "Crear un Dockerfile"
    description: "Escribe un archivo Dockerfile en la raíz de tu proyecto definiendo la imagen base, copiando el código, instalando dependencias y configurando el comando de inicio. Cada instrucción crea una capa de la imagen para optimizar el cacheo."
  - step: 3
    title: "Construir y ejecutar contenedores"
    description: "Construye la imagen con docker build -t nombre-app . y ejecútala con docker run -p 3000:3000 nombre-app. Usa flags como -d para modo detached, -v para volúmenes y -e para variables de entorno."
  - step: 4
    title: "Orquestar con Docker Compose"
    description: "Crea un archivo docker-compose.yml para definir múltiples servicios (app, base de datos, cache). Ejecuta docker compose up para iniciar toda la infraestructura con un solo comando y docker compose down para detenerla."
whenToUse:
  - title: "Entornos de desarrollo reproducibles"
    description: "Cuando tu equipo tiene problemas de 'funciona en mi máquina', Docker garantiza que todos trabajen con las mismas versiones de dependencias, runtime y configuración del sistema operativo."
  - title: "Arquitectura de microservicios"
    description: "Cada microservicio se empaqueta en su propio contenedor con sus dependencias específicas, permitiendo despliegue independiente, escalado selectivo y aislamiento de fallos entre servicios."
  - title: "CI/CD con entornos consistentes"
    description: "Usa la misma imagen Docker en desarrollo, staging y producción. Las pipelines de CI/CD construyen la imagen una vez y la promueven entre entornos, eliminando diferencias de configuración."
examples:
  - title: "Dockerfile para aplicación Node.js"
    code: |
      FROM node:20-alpine
      WORKDIR /app
      COPY package*.json ./
      RUN npm ci --only=production
      COPY . .
      EXPOSE 3000
      CMD ["node", "server.js"]
    output: "Imagen optimizada con Alpine para tamaño mínimo, instalación de producción con npm ci, y exposición del puerto 3000 para la aplicación Node.js."
  - title: "Docker Compose con app y PostgreSQL"
    code: |
      version: '3.8'
      services:
        app:
          build: .
          ports: ["3000:3000"]
          environment:
            DATABASE_URL: postgresql://user:pass@db:5432/miapp
          depends_on: [db]
        db:
          image: postgres:16-alpine
          environment:
            POSTGRES_USER: user
            POSTGRES_PASSWORD: pass
            POSTGRES_DB: miapp
          volumes: ["pgdata:/var/lib/postgresql/data"]

      volumes:
        pgdata:
    output: "Levanta una aplicación Node.js junto a PostgreSQL 16. La base de datos persiste datos en un volumen local. La app se conecta usando la variable de entorno DATABASE_URL."
tips:
  - text: "Usa imágenes Alpine siempre que sea posible para reducir el tamaño de las imágenes y minimizar la superficie de ataque."
  - text: "Estructura tu Dockerfile con multi-stage builds para separar el entorno de compilación del de producción, resultando en imágenes finales mucho más pequeñas."
  - text: "No almacenes datos en el sistema de archivos del contenedor; usa volúmenes (docker volume) o bind mounts para datos persistentes y configuraciones."
  - text: "Ejecuta docker system prune periódicamente para eliminar imágenes, contenedores y volúmenes no utilizados que consumen espacio en disco."
  - text: "Define healthchecks en tus servicios de Docker Compose para que Docker pueda detectar y reiniciar contenedores que fallen silenciosamente."
faq:
  - question: "¿Docker Desktop es gratis?"
    answer: "Docker Desktop es gratuito para uso personal, educación y pequeñas empresas (menos de 250 empleados y menos de $10M en ingresos). Empresas grandes necesitan una licencia de pago. Docker Engine en Linux siempre es gratuito."
  - question: "¿Cuál es la diferencia entre una imagen y un contenedor?"
    answer: "Una imagen es una plantilla inmutable con el sistema de archivos y configuración de la aplicación. Un contenedor es una instancia en ejecución de esa imagen, con su propia capa de escritura, red y procesos aislados."
  - question: "¿Cómo persisten los datos si los contenedores son efímeros?"
    answer: "Usa volúmenes (docker volume create) o bind mounts (-v ./data:/app/data). Los volúmenes son gestionados por Docker y persisten aunque el contenedor se elimine. Nunca guardes datos importantes dentro del filesystem del contenedor."
  - question: "¿Docker Compose reemplaza a Kubernetes?"
    answer: "No, Docker Compose es para entornos locales y despliegues simples en un solo host. Kubernetes es para orquestación de contenedores a gran escala con múltiples nodos, auto-escalado, rolling updates y balanceo de carga avanzado."
publishedAt: 2026-05-31
---

## ¿Qué es?

Docker es una plataforma de contenedorización que permite empaquetar una aplicación junto con todas sus dependencias (librerías, configuraciones, runtime) en una unidad estándar llamada contenedor. Esto garantiza que la aplicación funcione de manera consistente en cualquier entorno, desde tu máquina local hasta servidores de producción.

## ¿Para qué sirve?

Docker sirve para eliminar el problema de "funciona en mi máquina", crear entornos de desarrollo reproducibles, desplegar microservicios de forma aislada, escalar aplicaciones horizontalmente y simplificar pipelines de CI/CD con entornos consistentes.

## Cuándo usarla

- Cuando necesitas garantizar consistencia entre entornos de desarrollo y producción.
- Para arquitecturas de microservicios donde cada servicio necesita aislamiento.
- En pipelines de CI/CD para crear builds reproducibles.
- Cuando quieres probar software sin contaminar tu sistema local.
- Para escalar aplicaciones horizontalmente de forma eficiente.

## Cuándo NO usarla

- Para aplicaciones simples que no necesitan aislamiento ni portabilidad.
- En sistemas con recursos muy limitados donde el overhead de Docker es un problema.
- Cuando tu equipo no tiene experiencia con contenedores y el proyecto es pequeño.
- Si solo necesitas virtualización completa (usa máquinas virtuales en su lugar).

## Pros

- Portabilidad total: funciona igual en cualquier sistema operativo o cloud.
- Ecosistema maduro con Docker Hub, Compose y Swarm.
- Documentación extensa y comunidad enorme.
- Imágenes en capas que optimizan almacenamiento y descargas.
- Integración nativa con Kubernetes y la mayoría de plataformas cloud.

## Contras

- Curva de aprendizaje inicial para conceptos como networking y volúmenes.
- Docker Desktop requiere licencia de pago en empresas grandes.
- Los contenedores comparten el kernel del host, lo que limita el aislamiento vs VMs.
- Puede consumir muchos recursos si no se gestionan bien las imágenes.
- La depuración dentro de contenedores puede ser más compleja que en local.
