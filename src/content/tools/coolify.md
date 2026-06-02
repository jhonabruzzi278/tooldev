---
name: Coolify
description: Plataforma PaaS auto-gestionada con deploy de aplicaciones, bases de datos y servicios sin configurar servidores manualmente.
category: devops
tags: [paas, deploy, self-hosted, docker, devops, hosting]
officialSite: https://coolify.io
pricing: freemium
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: ["Web", Linux, macOS, Windows]
featured: false
features:
  - Despliegue de aplicaciones con un clic desde Git
  - Soporte para Node.js, Python, PHP, Go, Rust, Static, Dockerfile
  - Bases de datos gestionadas (Postgres, MySQL, MongoDB, Redis)
  - Certificados SSL automáticos con Let's Encrypt
  - Dominios personalizados y reverse proxy integrado
  - Monitoreo de recursos y logs en tiempo real
  - API y CLI para automatización
alternatives: []
relatedTools: [docker, github, gitlab, terraform]
howToUse:
  - step: 1
    title: "Instalar Coolify en tu servidor"
    description: "Ejecuta el script de instalación oficial en un servidor Linux limpio (Ubuntu, Debian, CentOS). Coolify se instala via Docker y configura automáticamente el reverse proxy, SSL y la base de datos interna en pocos minutos."
  - step: 2
    title: "Conectar repositorios Git"
    description: "Desde el dashboard web de Coolify, añade tus repositorios de GitHub, GitLab o Bitbucket. Coolify clonará el código automáticamente y detectará el tipo de proyecto (Node.js, Python, Docker, etc.) para configurar el build."
  - step: 3
    title: "Configurar y desplegar aplicaciones"
    description: "Asigna el dominio, configura variables de entorno, define el puerto y el build command. Coolify construirá la imagen y desplegará la aplicación con SSL automático via Let's Encrypt."
  - step: 4
    title: "Gestionar bases de datos integradas"
    description: "Crea bases de datos Postgres, MySQL, MongoDB o Redis desde la interfaz. Coolify las despliega en contenedores aislados y genera las credenciales automáticamente, disponibles como variables de entorno para tus aplicaciones."
whenToUse:
  - title: "Alternativa self-hosted a Vercel y Netlify"
    description: "Cuando quieres la experiencia PaaS pero en tu propio servidor, sin límites de proyectos, builds ni ancho de banda. Pagas solo el costo del servidor, no por uso."
  - title: "Despliegue de múltiples proyectos en un solo VPS"
    description: "Ideal para freelancers o equipos pequeños que manejan varios proyectos simultáneamente y necesitan un panel centralizado para gestionar deploys, dominios y bases de datos."
  - title: "Prototipado rápido con bases de datos"
    description: "Crea una app con su base de datos en minutos desde un solo panel. Perfecto para hackathons, demos y prototipos que necesitan estar online rápidamente con infraestructura real."
examples:
  - title: "Desplegar una app Next.js desde GitHub"
    code: |
      # En el dashboard de Coolify:
      # 1. Añadir repositorio GitHub: usuario/mi-app
      # 2. Build pack detectado: Nixpacks o Dockerfile
      # 3. Configurar dominio: miapp.ejemplo.com
      # 4. Variables de entorno:
      #    DATABASE_URL=postgres://user:pass@db:5432/miapp
      # 5. Click en "Deploy"
    output: "Coolify clona el repo, construye la imagen, la despliega en un contenedor Docker y configura automáticamente el proxy inverso con SSL en el dominio especificado."
  - title: "Variable de entorno con base de datos integrada"
    code: |
      # En la configuración de la app, Coolify expone automáticamente:
      # DATABASE_URL=postgresql://coolify:randompass@postgres:5432/mi_db
      # REDIS_URL=redis://default:randompass@redis:6379
      # Estas variables se inyectan en el contenedor de la aplicación
    output: "Las aplicaciones pueden acceder directamente a las variables de entorno para conectarse a las bases de datos gestionadas por Coolify sin configuración manual adicional."
tips:
  - text: "Usa la función de backups automáticos para las bases de datos gestionadas; Coolify puede programar backups y enviarlos a almacenamiento externo."
  - text: "Configura health checks en tus aplicaciones para que Coolify detecte fallos y reinicie contenedores automáticamente."
  - text: "Aprovecha los preview deployments por rama para revisar cambios antes de mergear a producción, similar a Vercel."
  - text: "Monitorea el uso de recursos desde el dashboard; Coolify muestra CPU, RAM y disco de cada aplicación y base de datos en tiempo real."
  - text: "Actualiza Coolify regularmente con el comando de upgrade integrado para acceder a nuevas funcionalidades y parches de seguridad."
faq:
  - question: "¿Necesito conocimientos de Docker para usar Coolify?"
    answer: "No es necesario. Coolify abstrae Docker completamente. Instalas Coolify con un script y todo se gestiona desde la interfaz web. Conocimientos de Docker ayudan para debugging avanzado pero no son requeridos."
  - question: "¿Puedo migrar desde Vercel o Netlify a Coolify?"
    answer: "Sí, Coolify soporta los mismos tipos de proyecto. Solo necesitas conectar tu repositorio Git, configurar las variables de entorno y el dominio. El proceso de build es similar usando Nixpacks."
  - question: "¿Qué recursos mínimos necesita el servidor?"
    answer: "Mínimo 2GB de RAM y 20GB de disco para Coolify y aplicaciones pequeñas. Para producción con múltiples apps y bases de datos, se recomienda al menos 4GB de RAM y 40GB de disco."
  - question: "¿Coolify maneja tráfico alto y escalado?"
    answer: "Coolify está diseñado para servidores individuales o pequeños clústeres. No tiene auto-escalado horizontal nativo. Para tráfico masivo con escalado automático, considera Kubernetes o soluciones cloud nativas."
publishedAt: 2026-06-01
---

## ¿Qué es?

Coolify es una alternativa open-source a Vercel, Netlify y Heroku que puedes alojar en tu propio servidor. Permite desplegar aplicaciones, bases de datos y servicios con un clic desde Git, todo auto-gestionado y sin límites artificiales.

## ¿Para qué sirve?

Coolify sirve para desplegar aplicaciones web, APIs, bases de datos y servicios en tu propia infraestructura con la misma facilidad que un PaaS comercial. Es ideal para equipos que quieren control total sobre su hosting sin la complejidad de Kubernetes.

## Cuándo usarla

- Cuando quieres un PaaS auto-gestionado sin depender de proveedores cloud.
- Para equipos que necesitan desplegar múltiples aplicaciones en un solo servidor.
- Si buscas una alternativa open-source a Vercel o Netlify.
- Para proyectos que requieren bases de datos gestionadas junto al deploy.
- Cuando valoras el control total sobre tu infraestructura.

## Cuándo NO usarla

- Si no quieres gestionar tu propio servidor (usa Vercel o Railway).
- Para despliegues empresariales a gran escala (Kubernetes es mejor).
- Cuando necesitas auto-escalado avanzado y balanceo de carga complejo.
- Si prefieres una solución completamente gestionada sin mantenimiento.

## Pros

- Open-source y auto-gestionada, sin límites artificiales.
- Interfaz web intuitiva para gestionar deploys.
- Soporte para múltiples lenguajes y frameworks.
- Certificados SSL y dominios personalizados automáticos.
- Bases de datos gestionadas integradas.

## Contras

- Requiere tu propio servidor y mantenimiento.
- No tiene auto-escalado nativo como los PaaS cloud.
- Documentación en mejora constante.
- La versión cloud tiene costo mensual.
- Menos integraciones que Vercel o Netlify.

## CLI

Coolify CLI permite gestionar despliegues, apps y servidores desde terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/coollabsio/coolify-cli/main/scripts/install.sh | bash
coolify context set-token cloud <token>
coolify app list                     # Listar aplicaciones
coolify app deploy <uuid>            # Desplegar aplicación
coolify deployment list <app-uuid>   # Ver deployments
coolify server list                  # Listar servidores
coolify database list                # Listar bases de datos
```
