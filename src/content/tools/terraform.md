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
verified: true
screenshots:
  - /screenshots/terraform.webp
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
    title: "Configura el backend remoto"
    description: "Añade un bloque terraform { backend 's3' { bucket='mi-state' key='prod/terraform.tfstate' region='us-east-1' dynamodb_table='terraform-locks' } } en versions.tf. Esto almacena el state remotamente con locking para equipos."
  - step: 3
    title: "Define proveedores"
    description: "En providers.tf, declara los proveedores necesarios: provider 'aws' { region = var.region }. Especifica versiones con required_providers para evitar breaking changes: aws = { source = 'hashicorp/aws', version = '~> 5.0' }."
  - step: 4
    title: "Escribe configuración declarativa"
    description: "Crea recursos en archivos .tf organizados por dominio (networking.tf, compute.tf, database.tf). Describe el estado final deseado. Terraform calcula el orden de creación automáticamente usando el grafo de dependencias."
  - step: 5
    title: "Define variables y outputs"
    description: "Crea variables.tf con type, description y default. Usa terraform.tfvars o -var-file para valores por entorno. Define outputs.tf para exponer valores como IDs, IPs o endpoints que otros módulos o scripts necesiten."
  - step: 6
    title: "Inicializa el proyecto"
    description: "Ejecuta terraform init para descargar proveedores, módulos y configurar el backend. Este comando se ejecuta una vez al clonar el repo o al añadir nuevas dependencias. Usa -upgrade para actualizar proveedores."
  - step: 7
    title: "Planifica cambios"
    description: "Ejecuta terraform plan -out=plan.tfplan para generar un plan de ejecución guardado. Revisa qué se creará (+), modificará (~) o destruirá (-). En CI, guarda el plan como artefacto para apply posterior."
  - step: 8
    title: "Aplica la infraestructura"
    description: "Ejecuta terraform apply plan.tfplan para aplicar el plan guardado. Sin plan guardado, Terraform regenera el plan y pide confirmación. Usa -auto-approve solo en pipelines CI/CD con plan previamente revisado."
  - step: 9
    title: "Estructura el proyecto en módulos"
    description: "Extrae grupos de recursos relacionados en módulos (modules/vpc/, modules/ecs-cluster/). Cada módulo tiene main.tf, variables.tf y outputs.tf. Llama módulos desde la configuración raíz con module 'vpc' { source = './modules/vpc' }."
  - step: 10
    title: "Integra con CI/CD"
    description: "En tu pipeline: 1) terraform init, 2) terraform plan -out=plan.tfplan, 3) guardar plan como artefacto, 4) review manual o automático, 5) terraform apply plan.tfplan en stage separado. Usa terraform fmt -check y terraform validate como linting."
whenToUse:
  - title: "Provisionamiento de infraestructura cloud completa"
    description: "Para crear y gestionar toda tu infraestructura en AWS, Azure o GCP: VPCs, subnets, instances, bases de datos, load balancers, DNS, CDN. Un solo terraform apply despliega entornos completos reproducibles."
  - title: "Gestión de entornos multi-cloud y multi-entorno"
    description: "Cuando tienes dev, staging y prod en diferentes cuentas o clouds. Terraform modules + workspaces permiten definir la infraestructura una vez y desplegarla en múltiples entornos con variables diferentes."
  - title: "Infraestructura como código en equipos"
    description: "Para equipos que necesitan versionar, revisar y colaborar en cambios de infraestructura via pull requests. Terraform plan en CI permite revisar cambios antes de aplicar, como cualquier PR de código."
  - title: "Migración y adopción de infraestructura existente"
    description: "Para adoptar recursos cloud creados manualmente. terraform import trae recursos al state. Luego puedes gestionar, modificar y versionar esa infraestructura como código."
  - title: "Despliegue de Kubernetes y servicios gestionados"
    description: "Para provisionar clusters EKS/GKE/AKS con networking, IAM, node groups y addons. Terraform gestiona la infraestructura base; Helm/kubectl manejan las workloads dentro del cluster."
  - title: "Automatización de servicios SaaS y third-party"
    description: "Para gestionar recursos en GitHub (repos, teams, branch protection), Cloudflare (DNS, WAF), Datadog (monitors, dashboards), PagerDuty y 3000+ servicios con proveedores de Terraform."
examples:
  - title: "Infraestructura base AWS con VPC y subnets"
    code: |
      provider "aws" { region = "us-east-1" }
      resource "aws_vpc" "main" {
        cidr_block           = "10.0.0.0/16"
        enable_dns_hostnames = true
        tags = { Name = "prod-vpc", Environment = "production" }
      }
      resource "aws_subnet" "public" {
        count             = 2
        vpc_id            = aws_vpc.main.id
        cidr_block        = cidrsubnet(aws_vpc.main.cidr_block, 8, count.index)
        availability_zone = data.aws_availability_zones.available.names[count.index]
        map_public_ip_on_launch = true
        tags = { Name = "prod-public-${count.index}" }
      }
      resource "aws_internet_gateway" "gw" {
        vpc_id = aws_vpc.main.id
      }
      output "vpc_id" { value = aws_vpc.main.id }
      output "subnet_ids" { value = aws_subnet.public[*].id }
    output: "Crea una VPC con 2 subnets públicas en diferentes AZs, internet gateway y DNS. Usa count + cidrsubnet para generar subnets automáticamente. Los outputs exponen IDs para otros módulos."
  - title: "Backend remoto con S3 y DynamoDB locking"
    code: |
      terraform {
        required_version = ">= 1.5"
        required_providers {
          aws = { source = "hashicorp/aws", version = "~> 5.0" }
        }
        backend "s3" {
          bucket         = "my-terraform-state"
          key            = "prod/networking/terraform.tfstate"
          region         = "us-east-1"
          dynamodb_table = "terraform-locks"
          encrypt        = true
        }
      }
    output: "Configura state remoto en S3 con locking via DynamoDB. encrypt=true cifra el state en reposo. La key organiza states por entorno/componente. Previene conflictos cuando múltiples devs aplican cambios."
  - title: "Módulo reutilizable con variables tipadas"
    code: |
      # modules/ecs-service/variables.tf
      variable "service_name" {
        type        = string
        description = "Name of the ECS service"
      }
      variable "container_port" {
        type    = number
        default = 8080
      }
      variable "desired_count" {
        type = number
        validation {
          condition     = var.desired_count >= 1 && var.desired_count <= 20
          error_message = "desired_count must be between 1 and 20"
        }
      }
      variable "environment" {
        type = map(string)
        default = {}
      }

      # Uso desde root:
      module "api_service" {
        source        = "./modules/ecs-service"
        service_name  = "api"
        container_port = 3000
        desired_count = 3
        environment   = { NODE_ENV = "production", LOG_LEVEL = "info" }
      }
    output: "Define un módulo con variables tipadas y validaciones custom. El módulo se invoca desde la configuración raíz pasando valores específicos. Las validaciones previenen configuraciones inválidas en plan time."
  - title: "Data sources y locals para lógica"
    code: |
      data "aws_caller_identity" "current" {}
      data "aws_region" "current" {}
      data "aws_ami" "amazon_linux" {
        most_recent = true
        owners      = ["amazon"]
        filter {
          name   = "name"
          values = ["al2023-ami-*-x86_64"]
        }
      }

      locals {
        account_id  = data.aws_caller_identity.current.account_id
        region      = data.aws_region.current.name
        common_tags = {
          Project     = var.project_name
          Environment = var.environment
          ManagedBy   = "terraform"
          Team        = var.team
        }
      }

      resource "aws_instance" "web" {
        ami           = data.aws_ami.amazon_linux.id
        instance_type = "t3.micro"
        tags          = merge(local.common_tags, { Name = "${var.project_name}-web" })
      }
    output: "Usa data sources para obtener info dinámica (AMI más reciente, account ID). locals centraliza tags comunes y valores calculados. merge() combina tags base con tags específicos del recurso."
  - title: "Estructura de proyecto multi-entorno"
    code: |
      # Estructura de directorios recomendada:
      # environments/
      #   prod/
      #     main.tf         -> llama módulos con vars de prod
      #     terraform.tfvars -> values: region=us-east-1, instance_type=t3.large
      #     backend.tf      -> state en s3://state/prod/
      #   staging/
      #     main.tf         -> mismos módulos, vars de staging
      #     terraform.tfvars -> values: region=us-east-1, instance_type=t3.small
      #     backend.tf      -> state en s3://state/staging/
      # modules/
      #   vpc/              -> main.tf, variables.tf, outputs.tf
      #   ecs-cluster/      -> main.tf, variables.tf, outputs.tf
      #   rds/              -> main.tf, variables.tf, outputs.tf

      # environments/prod/main.tf
      module "vpc" {
        source      = "../../modules/vpc"
        environment = "prod"
        cidr_block  = "10.0.0.0/16"
      }
      module "cluster" {
        source      = "../../modules/ecs-cluster"
        vpc_id      = module.vpc.vpc_id
        subnet_ids  = module.vpc.private_subnet_ids
        instance_type = var.instance_type
      }
    output: "Patrón de organización por entornos. Cada entorno tiene su propio state y variables, pero reutiliza los mismos módulos. Cambios en módulos se propagan a todos los entornos que los usan."
  - title: "GitHub Actions CI/CD pipeline"
    code: |
      # .github/workflows/terraform.yml
      name: Terraform
      on:
        pull_request:
          paths: ['infra/**']
        push:
          branches: [main]
          paths: ['infra/**']

      jobs:
        plan:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v4
            - uses: hashicorp/setup-terraform@v3
            - run: terraform init
              working-directory: infra/
            - run: terraform fmt -check
              working-directory: infra/
            - run: terraform validate
              working-directory: infra/
            - run: terraform plan -out=plan.tfplan -no-color
              working-directory: infra/
            - uses: actions/upload-artifact@v4
              with:
                name: tfplan
                path: infra/plan.tfplan

        apply:
          needs: plan
          if: github.ref == 'refs/heads/main'
          runs-on: ubuntu-latest
          environment: production
          steps:
            - uses: actions/checkout@v4
            - uses: hashicorp/setup-terraform@v3
            - uses: actions/download-artifact@v4
              with: { name: tfplan, path: infra/ }
            - run: terraform init
              working-directory: infra/
            - run: terraform apply plan.tfplan
              working-directory: infra/
    output: "Pipeline completo: plan en PRs, apply en merge a main. El plan se guarda como artefacto y se aplica en un stage con environment protection rules. terraform fmt y validate actúan como linting."
tips:
  - text: "Almacena el state file de forma remota (S3 + DynamoDB locking en AWS, Azure Storage en Azure). Nunca guardes state localmente en proyectos de equipo. El state contiene información sensible y debe cifrarse."
  - text: "Usa variables con type, description y validation blocks. Terraform valida en plan time, no en apply. Ejemplo: validation { condition = can(regex('^t3\\.', var.instance_type)) error_message = 'Must be t3 family' }."
  - text: "Divide configuraciones grandes en módulos reutilizables: networking (VPC), compute (ECS/EKS), database (RDS), monitoring. Cada módulo tiene su propio variables.tf y outputs.tf. Compón módulos en la configuración raíz."
  - text: "Usa terraform import para adoptar infraestructura existente. Luego genera código con terraform plan para verificar que tu .tf coincide con el recurso real. Terraform 1.5+ soporta import blocks declarativos."
  - text: "Centraliza tags con un local common_tags y usa merge() en cada recurso. Facilita filtrado por equipo, entorno y proyecto. Herramientas de cost allocation dependen de tags consistentes."
  - text: "Usa -target solo para debugging, nunca en producción. Aplicar parcialmente crea divergencia entre estado y realidad. Siempre aplica el plan completo."
  - text: "terraform fmt -recursive y terraform validate deben correr en pre-commit hooks y en CI. fmt asegura estilo consistente; validate detecta errores de sintaxis y tipos sin contactar la API del provider."
  - text: "Para secretos, nunca los pongas en .tf o .tfvars. Usa data sources para leer de AWS Secrets Manager, Vault o SSM Parameter Store. Marca variables sensibles con sensitive = true para ocultar en logs."
  - text: "Usa moved blocks para refactorizar sin destruir recursos. Cuando renombras un recurso o lo mueves a un módulo: moved { from = aws_instance.web to = module.compute.aws_instance.web }. Terraform mueve el state sin recrear."
  - text: "Habilita terraform plan -detailed-exitcode en CI: exit 0 = sin cambios, exit 1 = error, exit 2 = cambios pendientes. Usa esto para condicionar el apply o notificar al equipo de drift."
faq:
  - question: "¿Terraform vs Pulumi?"
    answer: "Terraform usa HCL (lenguaje declarativo propio); Pulumi usa lenguajes de programación reales (TypeScript, Python, Go). Terraform tiene ecosistema más maduro, más módulos comunitarios y más ofertas de empleo. Pulumi ofrece más flexibilidad para lógica compleja, testing con frameworks nativos y mejor autocompletado en IDE."
  - question: "¿Terraform es gratis?"
    answer: "Terraform CLI es open source (BUSL-1.1). Terraform Cloud tiene tier gratis para hasta 500 resources con state remoto, VCS integration y plan remoto. Planes de pago añaden policy as code, SSO, audit logs. Alternativa 100% open source: OpenTofu (fork, MPL-2.0)."
  - question: "¿Terraform vs CloudFormation?"
    answer: "Terraform es multi-cloud (AWS, Azure, GCP, Kubernetes, GitHub, Cloudflare, etc.), CloudFormation solo AWS. HCL es más legible que JSON/YAML de CF. terraform plan es superior a Change Sets. CF tiene mejor integración nativa con servicios AWS nuevos (day-0 support). Para solo-AWS, ambos son válidos."
  - question: "¿Qué es OpenTofu?"
    answer: "OpenTofu es un fork open source de Terraform creado cuando HashiCorp cambió la licencia de MPL-2.0 a BUSL-1.1 en agosto 2023. Mantiene API compatible con Terraform (puedes migrar cambiando el binario). Desarrollado por la Linux Foundation. Es drop-in replacement."
  - question: "¿Cómo gestiono secretos en Terraform?"
    answer: "Nunca hardcodees secretos en .tf o .tfvars. Opciones: 1) data source de AWS Secrets Manager/SSM, 2) Vault provider, 3) variables de entorno TF_VAR_*, 4) archivos .tfvars excluidos de git. Marca variables con sensitive = true para ocultar en output/plan."
  - question: "¿Cómo evito destrucción accidental de recursos?"
    answer: "Usa lifecycle { prevent_destroy = true } en recursos críticos (DBs, buckets con datos). Terraform rechazará cualquier plan que intente destruirlos. Para protección adicional, usa Sentinel policies o OPA en Terraform Cloud."
  - question: "¿Cuándo usar workspaces vs directorios separados?"
    answer: "Workspaces son buenos para variaciones menores (dev/staging/prod con misma config). Directorios separados son mejores para infraestructura con diferencias significativas entre entornos o cuando equipos diferentes gestionan cada entorno. La mayoría de equipos grandes prefieren directorios."
  - question: "¿Cómo hago rollback en Terraform?"
    answer: "Terraform no tiene rollback nativo. Opciones: 1) Revert el commit en git y re-apply, 2) terraform apply con el plan anterior (si lo guardaste), 3) Para emergencias, editar state manualmente (peligroso). La práctica recomendada es forward-fix: arregla el código y aplica de nuevo."
  - question: "¿Cómo manejo drift (cambios manuales)?"
    answer: "terraform plan detecta drift automáticamente comparando state vs realidad. Si alguien cambió algo manualmente, plan mostrará que quiere revertirlo. Opciones: 1) Aplicar para restaurar el estado deseado, 2) terraform refresh para aceptar el cambio manual en state."
  - question: "¿Cómo organizo un proyecto Terraform grande?"
    answer: "Patrón recomendado: environments/{dev,staging,prod}/ con sus propios backend y tfvars, modules/ con módulos internos reutilizables, cada módulo con main.tf + variables.tf + outputs.tf + README.md. State separado por entorno. Máximo 50-100 recursos por state file."
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
