---
name: kubernetes
description: Plataforma open source para orquestar contenedores, automatizar despliegues, escalado y gestión de aplicaciones. Úsala cuando el usuario mencione o pregunte sobre contenedores, orquestacion, kubernetes, devops.
---

# Kubernetes

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** devops
- **Pricing:** open-source
- **License:** Apache 2.0
- **Technical Level:** avanzado
- **Compatibility:** Linux, macOS, Windows
- **Official Site:** https://kubernetes.io
- **GitHub:** https://github.com/kubernetes/kubernetes

## Features
- Orquestación automática de contenedores
- Auto-escalado horizontal y vertical
- Balanceo de carga y descubrimiento de servicios
- Auto-reparación de contenedores fallidos
- Rollouts y rollbacks automatizados
- Gestión de secretos y configuraciones
- Almacenamiento persistente orquestado

## Steps
### 1. Configurar un clúster local con Minikube o Kind
Instala `kubectl` y una herramienta de clúster local como Minikube (`minikube start`) o Kind (`kind create cluster`). Verifica la conexión con `kubectl cluster-info` y comienza a desplegar aplicaciones.

### 2. Desplegar una aplicación con pods y deployments
Crea un archivo `deployment.yaml` definiendo el contenedor, réplicas, recursos y puertos. Ejecuta `kubectl apply -f deployment.yaml`. Expón la aplicación con un Service para acceder desde fuera del clúster.

### 3. Escalar y actualizar aplicaciones
Usa `kubectl scale deployment <nombre> --replicas=5` para escalar horizontalmente. Actualiza la imagen del contenedor con `kubectl set image deployment/<nombre> <contenedor>=<nueva-imagen>` para rolling updates sin downtime.

### 4. Monitorear y depurar el clúster
Usa `kubectl get pods`, `kubectl logs <pod>`, `kubectl describe pod <pod>` y `kubectl top pods` para monitorear. Instala el dashboard para interfaz visual con `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/...`.

## When to Use
- **Orquestación de microservicios en producción:** Cuando tu aplicación se compone de múltiples servicios desacoplados que necesitan escalar independientemente, descubrirse entre sí, balancear tráfico y recuperarse de fallos automáticamente.
- **Infraestructura cloud-native y multi-cloud:** Si necesitas que tu aplicación funcione de manera consistente en AWS, GCP, Azure o on-premise. Kubernetes abstrae la infraestructura subyacente y permite mover cargas de trabajo entre proveedores.
- **Despliegues automatizados con alta disponibilidad:** Para equipos que requieren rolling updates, rollbacks automáticos, health checks y auto-reparación de contenedores fallidos sin intervención manual, garantizando disponibilidad 24/7.

## Examples
### Deployment de una aplicación Node.js
```
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
tput: "Despliega 3 réplicas de la aplicación con límites de recursos definidos. Kubernetes automáticamente reemplaza cualquier contenedor que falle y distribuye las réplicas entre nodos."
```

### Service para exponer la aplicación
```
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
tput: "Crea un balanceador de carga que distribuye el tráfico entre las 3 réplicas del deployment. Los pods se descubren automáticamente mediante el selector de etiquetas."
```

## Tips
- Siempre define `resources.requests` y `resources.limits` en tus contenedores. Sin límites, un contenedor puede consumir todos los recursos del nodo y afectar a otras aplicaciones.
- Usa namespaces para separar entornos (dev, staging, prod) y equipos dentro del mismo clúster. Aplica RBAC para controlar quién puede hacer qué en cada namespace.
- Implementa health checks con `livenessProbe` y `readinessProbe`. Liveness reinicia contenedores bloqueados, readiness controla cuándo un pod puede recibir tráfico.
- No guardes datos persistentes en pods sin volúmenes. Usa PersistentVolumes y PersistentVolumeClaims para datos que deben sobrevivir a reinicios de pods.
- Aprende a usar `kubectl explain <recurso>` para documentación de API desde la terminal. Es más rápido que buscar en la web y siempre está actualizado.

## FAQ
- **¿Kubernetes vs Docker Swarm, cuál debo usar?** Docker Swarm es más simple y se integra nativamente con Docker, ideal para equipos pequeños o entornos de desarrollo. Kubernetes es el estándar de la industria para producción a gran escala, con ecosistema masivo, auto-escalado avanzado y soporte en todos los cloud providers.
- **¿Cuánto cuesta ejecutar Kubernetes en producción?** Kubernetes en sí es gratuito y open source. El costo real depende de la infraestructura subyacente (nodos, almacenamiento, red). Servicios gestionados como GKE, EKS o AKS cobran por el plano de control (~$70/mes). Un clúster pequeño en cloud puede costar $100-500/mes.
- **¿Cómo aprendo Kubernetes sin volverme loco?** Empieza con Minikube o Kind para prácticas locales. Aprende los objetos básicos (Pod, Deployment, Service) antes que los avanzados. Usa `kubectl explain` y `kubectl describe`. Sigue el tutorial interactivo en kubernetes.io y luego practica con aplicaciones reales.
- **¿Necesito Kubernetes si mi aplicación es un monolito?** Probablemente no. Un monolito simple puede funcionar con Docker Compose en un VPS o con un PaaS como Heroku o Railway. Kubernetes añade complejidad operativa que solo se justifica cuando necesitas orquestar múltiples servicios, escalar horizontalmente o garantizar alta disponibilidad.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://kubernetes.io
- **Source Code Issues:** Check the repository at https://github.com/kubernetes/kubernetes for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
