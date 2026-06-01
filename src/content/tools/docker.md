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
- Debugging dentro de contenedores puede ser más complejo que en local.
