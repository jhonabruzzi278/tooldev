---
name: Ansible
description: Motor de automatización IT para configuración, aprovisionamiento, despliegue y orquestación sin agentes.
category: devops
tags: [automatizacion, configuracion, devops, ssh, infraestructura]
officialSite: https://www.ansible.com
pricing: gratis
openSource: true
license: GPL-3.0
technicalLevel: intermedio
compatibility: [Linux, macOS, Windows (control node)]
featured: false
features:
  - Automatización sin agentes (solo SSH)
  - Playbooks en YAML legibles y versionables
  - Módulos para sistemas, redes, cloud y contenedores
  - Inventario dinámico para infraestructura variable
  - Roles reutilizables en Ansible Galaxy
  - Gestión de secretos con Ansible Vault
  - Tower/AWX para gestión empresarial
alternatives: []
relatedTools: [terraform, docker, kubernetes, gitlab]
howToUse:
  - step: 1
    title: "Instala Ansible en el nodo de control"
    description: "Instala Ansible en tu máquina local (nodo de control) usando pip install ansible o el gestor de paquetes de tu sistema. Los nodos gestionados solo necesitan SSH habilitado y Python instalado."
  - step: 2
    title: "Define tu inventario de servidores"
    description: "Crea un archivo de inventario (hosts.ini o hosts.yml) con las IPs o nombres de los servidores agrupados lógicamente por categorías como webservers, databases o production."
  - step: 3
    title: "Escribe y estructura tus playbooks"
    description: "Redacta archivos YAML que definan las tareas a ejecutar en orden: instalar paquetes, copiar archivos de configuración, reiniciar servicios. Separa la lógica en roles reutilizables para mantener el código organizado y versionable."
  - step: 4
    title: "Ejecuta, verifica e itera"
    description: "Lanza el playbook con ansible-playbook playbook.yml -i inventory.ini. Usa los flags --check y --diff para previsualizar cambios antes de aplicarlos, y --limit para probar en un subconjunto de servidores."
whenToUse:
  - title: "Configuración masiva de servidores"
    description: "Cuando necesitas aplicar la misma configuración a decenas o cientos de servidores Linux de forma consistente, reproducible y versionable mediante playbooks YAML, eliminando la intervención manual propensa a errores."
  - title: "Despliegue de aplicaciones multi-entorno"
    description: "Para automatizar despliegues de aplicaciones en desarrollo, staging y producción con las mismas tareas pero variables diferentes por entorno, garantizando consistencia total entre deployments."
  - title: "Automatización sin agentes en entornos restringidos"
    description: "Cuando no puedes o no quieres instalar agentes en los servidores destino por políticas de seguridad, y solo tienes acceso SSH. Ansible opera completamente sin software adicional en los nodos gestionados."
examples:
  - title: "Playbook básico para instalar y activar Nginx"
    code: |
      ---
      - name: Instalar y configurar Nginx
        hosts: webservers
        become: yes
        tasks:
          - name: Instalar Nginx
            apt:
              name: nginx
              state: present
              update_cache: yes
          - name: Iniciar y habilitar Nginx
            service:
              name: nginx
              state: started
              enabled: yes
    output: "Nginx instalado, iniciado y habilitado para arrancar en boot en todos los servidores del grupo webservers."
  - title: "Copia de archivos de configuración con templates"
    code: |
      ---
      - name: Configurar aplicación web
        hosts: webservers
        vars:
          puerto_app: 8080
        tasks:
          - name: Desplegar configuración desde template
            template:
              src: app.conf.j2
              dest: /etc/app/config.conf
              owner: appuser
              mode: '0644'
    output: "Archivo de configuración renderizado con variables Jinja2 y copiado a cada servidor con los permisos correctos."
tips:
  - text: "Usa ansible-lint para validar tus playbooks antes de ejecutarlos; detecta errores comunes de sintaxis, estilo y prácticas no recomendadas."
  - text: "Organiza tu proyecto con roles reutilizables desde el inicio: separa tareas, variables, handlers y templates en la estructura estándar de directorios de Ansible."
  - text: "Cifra contraseñas, claves API y cualquier secreto con Ansible Vault (ansible-vault encrypt). Mantén los archivos cifrados en el repositorio Git sin exponer información sensible."
  - text: "Usa inventories dinámicos (aws_ec2, azure_rm, gcp_compute) para entornos cloud donde las IPs de los servidores cambian frecuentemente y no quieres mantener archivos estáticos."
  - text: "Ejecuta playbooks con --step para avanzar tarea por tarea de forma interactiva durante la depuración, o con --start-at-task para reanudar desde un punto específico tras un fallo."
faq:
  - question: "¿Necesito instalar algo en los servidores gestionados por Ansible?"
    answer: "Solo Python (2.x o 3.x) y acceso SSH. Ansible no requiere agentes ni software adicional en los nodos, lo que simplifica drásticamente la seguridad y el mantenimiento."
  - question: "¿Qué diferencia a Ansible de Terraform o Pulumi?"
    answer: "Terraform y Pulumi se enfocan en aprovisionar infraestructura (crear VMs, redes, recursos cloud). Ansible gestiona la configuración dentro de las máquinas ya existentes. Son herramientas complementarias que se integran muy bien."
  - question: "¿Puedo gestionar servidores Windows con Ansible?"
    answer: "Sí, Ansible soporta nodos Windows mediante WinRM en lugar de SSH, con módulos específicos para administrar servicios, registros, paquetes y configuraciones del sistema Windows."
  - question: "¿Cómo manejo secretos y contraseñas en Ansible?"
    answer: "Ansible Vault permite cifrar variables individuales o archivos completos con una contraseña maestra. Puedes pasar la contraseña por archivo, variable de entorno o solicitarla interactivamente al ejecutar el playbook."
publishedAt: 2026-06-01
---

## ¿Qué es?

Ansible es un motor de automatización IT creado por Red Hat que permite gestionar configuraciones, aprovisionar servidores, desplegar aplicaciones y orquestar infraestructura completa sin necesidad de instalar agentes en los nodos gestionados.

## ¿Para qué sirve?

Ansible sirve para automatizar la configuración de servidores, desplegar aplicaciones, orquestar tareas de infraestructura, gestionar redes, aprovisionar entornos cloud y estandarizar configuraciones en múltiples máquinas.

## Cuándo usarla

- Cuando necesitas gestionar cientos de servidores con configuración consistente.
- Para automatizar despliegues de aplicaciones en múltiples entornos.
- Si buscas una herramienta sin agentes que solo requiera SSH.
- Para equipos que valoran playbooks legibles en YAML.
- Cuando necesitas integración con Terraform para IaC completo.

## Cuándo NO usarla

- Para aprovisionamiento de infraestructura cloud (mejor Terraform o Pulumi).
- Si tu infraestructura es muy pequeña (1-2 servidores).
- Cuando necesitas orquestación de contenedores a gran escala (Kubernetes).
- Para tareas que requieren ejecución en tiempo real con alta frecuencia.
- Si prefieres una solución con agentes para monitoreo continuo.

## Pros

- Sin agentes, solo SSH, fácil de adoptar.
- Playbooks YAML legibles incluso por no-programadores.
- Idempotente: ejecutar el mismo playbook múltiples veces es seguro.
- Ansible Galaxy con miles de roles pre-hechos.
- Integración con la mayoría de proveedores cloud.

## Contras

- Rendimiento más lento que herramientas con agentes en grandes escalas.
- YAML puede volverse complejo en proyectos grandes.
- Depuración de errores a veces críptica.
- Sin interfaz gráfica potente (AWX ayuda pero es complejo).
- Windows como nodo gestionado tiene soporte limitado.
