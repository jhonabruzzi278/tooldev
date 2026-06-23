---
name: Kubernetes
description: Plataforma open source para orquestar contenedores, automatizar despliegues, escalado y gestión de aplicaciones.
category: devops
tags: [contenedores, orquestacion, kubernetes, devops, escalado, cloud-native]
officialSite: https://kubernetes.io
github: https://github.com/kubernetes/kubernetes
pricing: open-source
openSource: true
license: Apache 2.0
technicalLevel: avanzado
compatibility: [Linux, macOS, Windows]
featured: false
verified: true
screenshots:
  - /screenshots/kubernetes.webp
features:
  - Orquestación automática de contenedores
  - Auto-escalado horizontal y vertical
  - Balanceo de carga y descubrimiento de servicios
  - Auto-reparación de contenedores fallidos
  - Rollouts y rollbacks automatizados
  - Gestión de secretos y configuraciones
  - Almacenamiento persistente orquestado
alternatives: []
relatedTools: [docker, postman]
howToUse:
  - step: 1
    title: "Configurar un clúster local con Minikube o Kind"
    description: "Instala `kubectl` y una herramienta de clúster local como Minikube (`minikube start`) o Kind (`kind create cluster`). Verifica la conexión con `kubectl cluster-info` y comienza a desplegar aplicaciones."
  - step: 2
    title: "Desplegar una aplicación con pods y deployments"
    description: "Crea un archivo `deployment.yaml` definiendo el contenedor, réplicas, recursos y puertos. Ejecuta `kubectl apply -f deployment.yaml`. Expón la aplicación con un Service para acceder desde fuera del clúster."
  - step: 3
    title: "Escalar y actualizar aplicaciones"
    description: "Usa `kubectl scale deployment <nombre> --replicas=5` para escalar horizontalmente. Actualiza la imagen del contenedor con `kubectl set image deployment/<nombre> <contenedor>=<nueva-imagen>` para rolling updates sin downtime."
  - step: 4
    title: "Monitorear y depurar el clúster"
    description: "Usa `kubectl get pods`, `kubectl logs <pod>`, `kubectl describe pod <pod>` y `kubectl top pods` para monitorear. Instala el dashboard para interfaz visual con `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/...`."
whenToUse:
  - title: "Orquestación de microservicios en producción"
    description: "Cuando tu aplicación se compone de múltiples servicios desacoplados que necesitan escalar independientemente, descubrirse entre sí, balancear tráfico y recuperarse de fallos automáticamente."
  - title: "Infraestructura cloud-native y multi-cloud"
    description: "Si necesitas que tu aplicación funcione de manera consistente en AWS, GCP, Azure o on-premise. Kubernetes abstrae la infraestructura subyacente y permite mover cargas de trabajo entre proveedores."
  - title: "Despliegues automatizados con alta disponibilidad"
    description: "Para equipos que requieren rolling updates, rollbacks automáticos, health checks y auto-reparación de contenedores fallidos sin intervención manual, garantizando disponibilidad 24/7."
examples:
  - title: "Deployment de una aplicación Node.js"
    code: |
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: mi-app
      spec:
        replicas: 3
        selector:
          matchLabels:
            app: mi-app
        template:
          metadata:
            labels:
              app: mi-app
          spec:
            containers:
            - name: app
              image: mi-registro/app:v1.0
              ports:
              - containerPort: 3000
              resources:
                limits:
                  memory: "256Mi"
                  cpu: "500m"
    output: "Despliega 3 réplicas de la aplicación con límites de recursos definidos. Kubernetes automáticamente reemplaza cualquier contenedor que falle y distribuye las réplicas entre nodos."
  - title: "Service para exponer la aplicación"
    code: |
      apiVersion: v1
      kind: Service
      metadata:
        name: mi-app-service
      spec:
        selector:
          app: mi-app
        ports:
        - port: 80
          targetPort: 3000
        type: LoadBalancer
    output: "Crea un balanceador de carga que distribuye el tráfico entre las 3 réplicas del deployment. Los pods se descubren automáticamente mediante el selector de etiquetas."
tips:
  - text: "Siempre define `resources.requests` y `resources.limits` en tus contenedores. Sin límites, un contenedor puede consumir todos los recursos del nodo y afectar a otras aplicaciones."
  - text: "Usa namespaces para separar entornos (dev, staging, prod) y equipos dentro del mismo clúster. Aplica RBAC para controlar quién puede hacer qué en cada namespace."
  - text: "Implementa health checks con `livenessProbe` y `readinessProbe`. Liveness reinicia contenedores bloqueados, readiness controla cuándo un pod puede recibir tráfico."
  - text: "No guardes datos persistentes en pods sin volúmenes. Usa PersistentVolumes y PersistentVolumeClaims para datos que deben sobrevivir a reinicios de pods."
  - text: "Aprende a usar `kubectl explain <recurso>` para documentación de API desde la terminal. Es más rápido que buscar en la web y siempre está actualizado."
faq:
  - question: "¿Kubernetes vs Docker Swarm, cuál debo usar?"
    answer: "Docker Swarm es más simple y se integra nativamente con Docker, ideal para equipos pequeños o entornos de desarrollo. Kubernetes es el estándar de la industria para producción a gran escala, con ecosistema masivo, auto-escalado avanzado y soporte en todos los cloud providers."
  - question: "¿Cuánto cuesta ejecutar Kubernetes en producción?"
    answer: "Kubernetes en sí es gratuito y open source. El costo real depende de la infraestructura subyacente (nodos, almacenamiento, red). Servicios gestionados como GKE, EKS o AKS cobran por el plano de control (~$70/mes). Un clúster pequeño en cloud puede costar $100-500/mes."
  - question: "¿Cómo aprendo Kubernetes sin volverme loco?"
    answer: "Empieza con Minikube o Kind para prácticas locales. Aprende los objetos básicos (Pod, Deployment, Service) antes que los avanzados. Usa `kubectl explain` y `kubectl describe`. Sigue el tutorial interactivo en kubernetes.io y luego practica con aplicaciones reales."
  - question: "¿Necesito Kubernetes si mi aplicación es un monolito?"
    answer: "Probablemente no. Un monolito simple puede funcionar con Docker Compose en un VPS o con un PaaS como Heroku o Railway. Kubernetes añade complejidad operativa que solo se justifica cuando necesitas orquestar múltiples servicios, escalar horizontalmente o garantizar alta disponibilidad."
publishedAt: 2026-06-01
---

## ¿Qué es?

Kubernetes (K8s) es una plataforma open source para orquestar contenedores que automatiza el despliegue, escalado y operación de aplicaciones. Originalmente desarrollado por Google, ahora es el estándar de facto para ejecutar aplicaciones en contenedores a escala de producción.

## ¿Para qué sirve?

Kubernetes sirve para gestionar clústeres de contenedores en producción, automatizar despliegues sin tiempo de inactividad, escalar aplicaciones según la demanda, balancear el tráfico entre contenedores y recuperarse automáticamente de fallos.

## Cuándo usarla

- Cuando ejecutas múltiples servicios en contenedores que necesitan coordinación.
- Para equipos que necesitan despliegues automatizados y repetibles.
- Si tu aplicación requiere escalado automático según demanda.
- Cuando gestionas microservicios que necesitan descubrimiento y balanceo.
- Para infraestructuras que requieren alta disponibilidad y auto-reparación.

## Cuándo NO usarla

- Si ejecutas una aplicación monolítica simple en un solo servidor.
- Cuando tu equipo no tiene experiencia en contenedores y orquestación.
- Para proyectos pequeños donde Docker Compose es suficiente.
- Si no tienes un equipo de DevOps dedicado para gestionar el clúster.

## Pros

- Estandar de la industria para orquestación de contenedores.
- Portabilidad entre cualquier proveedor cloud o on-premise.
- Ecosistema masivo de herramientas y extensions.
- Auto-reparación y auto-escalado reducen operaciones manuales.
- Comunidad enorme y soporte de todos los cloud providers.

## Contras

- Curva de aprendizaje muy pronunciada.
- Complejidad operativa significativa.
- Consumo de recursos del plano de control.
- Diagnóstico y debugging pueden ser complejos.
- Overhead de gestión para equipos pequeños.
