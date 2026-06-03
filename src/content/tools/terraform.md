---
name: Terraform
description: Herramienta de infraestructura como código (IaC) de HashiCorp para provisionar y gestionar recursos cloud con archivos de configuración declarativos.
category: devops
tags: [iac, infraestructura, cloud, devops, automatización, hashcorp]
officialSite: https://terraform.io
github: https://github.com/hashicorp/terraform
pricing: open-source
openSource: true
license: BUSL-1.1 (antes MPL-2.0)
technicalLevel: avanzado
compatibility: [macOS, Linux, Windows, Docker]
featured: false
features:
  - Infraestructura declarativa con HashiCorp Configuration Language (HCL)
  - Plan de ejecución para preview de cambios antes de aplicarlos
  - State management para rastrear recursos gestionados
  - Proveedores para AWS, Azure, GCP, Kubernetes, GitHub, Cloudflare, 3000+
  - Módulos reutilizables de la comunidad en Terraform Registry
  - Workspaces para gestionar múltiples entornos (dev/staging/prod)
  - Importación de recursos existentes al state
  - Terraform Cloud para ejecución remota, policy as code y colaboración
alternatives: [pulumi, cloudformation, bicep, crossplane]
relatedTools: [kubernetes, docker, ansible, packer, vault]
howToUse:
  - step: 1
    title: "Instala Terraform"
    description: "Descarga el binario desde terraform.io/downloads o usa tfenv para gestionar versiones (brew install tfenv; tfenv install 1.10). Verifica con terraform --version."
  - step: 2
    title: "Escribe configuración declarativa"
    description: "Crea un archivo main.tf con el proveedor y los recursos. Ejemplo: resource 'aws_instance web' { ami = 'ami-123' instance_type = 't3.micro' }. Describe el estado final deseado, no los pasos para llegar."
  - step: 3
    title: "Inicializa y planifica"
    description: "Ejecuta terraform init para descargar proveedores y módulos. Luego terraform plan para ver qué recursos creará, modificará o eliminará. Revisa el plan antes de aplicar."
  - step: 4
    title: "Aplica la infraestructura"
    description: "Ejecuta terraform apply para crear los recursos reales. Terraform muestra el plan de nuevo y pide confirmación. Usa -auto-approve en CI/CD. Los cambios se registran en el archivo de state (terraform.tfstate)."
whenToUse:
  - title: "Provisionamiento de infraestructura cloud completa"
    description: "Para crear y gestionar toda tu infraestructura en AWS, Azure o GCP: VPCs, subnets, instances, bases de datos, load balancers, DNS. Un solo terraform apply despliega entornos completos reproducibles."
  - title: "Gestión de entornos multi-cloud y multi-entorno"
    description: "Cuando tienes dev, staging y prod en diferentes cuentas o clouds. Terraform modules + workspaces permiten definir la infraestructura una vez y desplegarla en múltiples entornos con variables diferentes."
  - title: "Infraestructura como código en equipos"
    description: "Para equipos que necesitan versionar, revisar y colaborar en cambios de infraestructura via pull requests. Terraform plan en CI permite revisar cambios antes de aplicar, como cualquier PR de código."
examples:
  - title: "Infraestructura base AWS con Terraform"
    code: |
      provider "aws" { region = "us-east-1" }
      resource "aws_vpc" "main" {
        cidr_block = "10.0.0.0/16"
        tags = { Name = "prod-vpc" }
      }
      resource "aws_subnet" "public" {
        vpc_id     = aws_vpc.main.id
        cidr_block = "10.0.1.0/24"
        tags = { Name = "prod-public-subnet" }
      }
      output "vpc_id" { value = aws_vpc.main.id }
    output: "Crea una VPC con una subred pública en AWS. Terraform plan mostrará exactamente qué recursos creará. terraform apply los crea en el orden correcto respetando dependencias."
  - title: "Módulo reutilizable para grupo de auto-escalado"
    code: |
      module "web_cluster" {
        source      = "terraform-aws-modules/autoscaling/aws"
        version     = "8.0.0"
        name        = "web-cluster"
        min_size    = 2
        max_size    = 10
        instance_type = "t3.micro"
        vpc_id      = module.vpc.vpc_id
      }
    output: "Usa un módulo de la comunidad para crear un auto-scaling group con ELB, security groups y health checks. El módulo encapsula ~30 recursos en 5 líneas de código."
tips:
  - text: "Almacena el state file de forma remota (S3 + DynamoDB locking en AWS, Azure Storage en Azure). Nunca guardes state localmente en proyectos de equipo. El state contiene información sensible y concurrency."
  - text: "Usa variables y outputs para parametrizar tus configuraciones. Define variables.tf con descripciones, tipos y defaults. Terraform.tfvars para valores específicos de entorno. Así un mismo módulo funciona en dev y prod."
  - text: "Divide configuraciones grandes en módulos reutilizables: infraestructura base (VPC, networking), compute (ECS/EKS), bases de datos (RDS). Usa el Terraform Registry para empezar con módulos comunitarios probados."
  - text: "Usa terraform import para adoptar infraestructura existente creada manualmente. Terraform no puede gestionar recursos que no están en state. El comando import trae recursos existentes al state sin modificar nada."
faq:
  - question: "¿Terraform vs Pulumi?"
    answer: "Terraform usa HCL (lenguaje declarativo propio); Pulumi usa lenguajes de programación reales (TypeScript, Python, Go). Terraform tiene ecosistema más maduro y más módulos comunitarios. Pulumi ofrece más flexibilidad para lógica compleja."
  - question: "¿Terraform es gratis?"
    answer: "Terraform CLI es open source. Terraform Cloud tiene tier gratis para hasta 5 usuarios con state remoto, VCS integration y plan remoto. Para equipos grandes, Terraform Cloud tiene planes de pago. Alternativa open source: OpenTofu (fork)."
  - question: "¿Terraform vs CloudFormation?"
    answer: "Terraform es multi-cloud (AWS, Azure, GCP, Kubernetes, GitHub, Cloudflare, etc.), CloudFormation solo AWS. Terraform tiene HCL más legible que JSON/YAML de CloudFormation. Terraform plan es superior a Change Sets de CF."
  - question: "¿Qué es OpenTofu?"
    answer: "OpenTofu es un fork open source de Terraform creado cuando HashiCorp cambió la licencia de MPL-2.0 a BUSL-1.1. OpenTofu mantiene API compatible con Terraform y es desarrollado por la Linux Foundation. Es 100% gratis y open source."
publishedAt: 2026-06-01
---

## ¿Qué es?

Terraform es la herramienta de infraestructura como código más adoptada. Permite definir, provisionar y gestionar recursos cloud usando archivos de configuración declarativos, asegurando que la infraestructura sea reproducible, versionable y auditable.

## ¿Para qué sirve?

Terraform sirve para automatizar la creación y gestión de infraestructura cloud (servidores, redes, bases de datos, DNS, CDN, etc.) como código. Un solo comando despliega entornos completos idénticos en dev, staging y producción.

## Cuándo usarla

- Para gestionar infraestructura cloud como código.
- Para desplegar entornos reproducibles en múltiples clouds.
- Para automatizar provisionamiento en pipelines CI/CD.
- Para equipos que necesitan revisión de cambios de infraestructura en PRs.
- Para gestionar recursos multi-cloud desde un solo tool.

## Cuándo NO usarla

- Para configurar software dentro de servidores (usa Ansible, Chef o Salt).
- Para infraestructura de un solo servidor (scripts bash son suficientes).
- Cuando buscas una solución plug-and-play SaaS (usa la consola web del cloud).
- Para equipos pequeños sin necesidad de versionar infraestructura.

## Pros

- Declarativo: describes el estado final, Terraform hace los pasos.
- Multi-cloud: AWS, Azure, GCP, Kubernetes, GitHub, Cloudflare, 3000+ proveedores.
- Plan preview: terraform plan muestra cambios exactos antes de aplicar.
- Módulos reutilizables con registro comunitario.
- State management con detección de cambios.

## Contras

- Curva de aprendizaje de HCL.
- State file es crítico y debe gestionarse con cuidado.
- Sin lógica procedural compleja (Pulumi es más flexible).
- Licencia cambió de MPL a BUSL (OpenTofu es el fork open source).

## CLI

```bash
terraform init                                    # Inicializar proyecto
terraform plan                                    # Preview de cambios
terraform apply                                   # Aplicar cambios
terraform destroy                                 # Destruir recursos
terraform import aws_instance.web i-12345678      # Importar recurso existente
```
