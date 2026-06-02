---
name: Terraform
description: Herramienta de infraestructura como código para construir, cambiar y versionar infraestructura cloud de forma segura y eficiente.
category: devops
tags: [iac, infraestructura, cloud, devops, automatizacion, terraform]
officialSite: https://www.terraform.io
pricing: freemium
openSource: true
license: BSL
technicalLevel: avanzado
compatibility: [Windows, macOS, Linux]
featured: false
features:
  - Infraestructura como código con HCL declarativo
  - Plan de ejecución para revisar cambios antes de aplicarlos
  - Gestión de estado con versionado y locking
  - Módulos reutilizables y registro público
  - Soporte multi-cloud (AWS, Azure, GCP, etc.)
  - Graph de dependencias para planificar cambios
  - Workspaces para entornos separados
alternatives: []
relatedTools: [docker, kubernetes, gitlab]
howToUse:
  - step: 1
    title: "Instala Terraform y configura un proveedor cloud"
    description: "Descarga el binario desde terraform.io o usa `winget install HashiCorp.Terraform`. Crea un archivo `main.tf` y define el proveedor: `provider \"aws\" { region = \"us-east-1\" }`. Configura las credenciales mediante variables de entorno (`AWS_ACCESS_KEY_ID`) o el archivo de credenciales del proveedor."
  - step: 2
    title: "Define recursos de infraestructura en HCL"
    description: "Declara recursos usando bloques `resource`. Por ejemplo: `resource \"aws_instance\" \"web\" { ami = \"ami-123\" instance_type = \"t2.micro\" }`. Usa variables (`variable`), outputs (`output`) y módulos (`module`) para crear configuraciones reutilizables y parametrizadas."
  - step: 3
    title: "Planifica y aplica los cambios de forma segura"
    description: "Ejecuta `terraform plan` para ver un resumen de los cambios propuestos (crear, modificar, destruir) sin aplicarlos. Revisa el diff y ejecuta `terraform apply` para provisionar la infraestructura. Terraform te pedirá confirmación antes de ejecutar."
  - step: 4
    title: "Gestiona el estado y destruye recursos cuando no los necesites"
    description: "Configura un backend remoto (S3, Azure Storage, GCS) para compartir el estado con tu equipo y habilitar locking con DynamoDB. Usa `terraform destroy` para eliminar todos los recursos gestionados y evitar costos innecesarios en la nube."
whenToUse:
  - title: "Infraestructura cloud gestionada como código"
    description: "Cuando necesitas que servidores, bases de datos, redes y balanceadores estén definidos en archivos versionables en Git. Terraform garantiza que el entorno de staging, producción y desarrollo sean idénticos."
  - title: "Equipos DevOps con múltiples proveedores cloud"
    description: "Ideal si trabajas con AWS, Azure, GCP u otros proveedores simultáneamente. Terraform unifica la sintaxis y el flujo de trabajo sin importar el proveedor, con cientos de providers oficiales y comunitarios."
  - title: "Revisión de cambios de infraestructura antes de aplicar"
    description: "Perfecto para entornos críticos donde un cambio mal aplicado puede causar downtime. El comando `terraform plan` actúa como un dry-run que muestra exactamente qué recursos se crearán, modificarán o destruirán."
examples:
  - title: "Servidor web en AWS con Terraform"
    code: |
      provider "aws" {
        region = "us-east-1"
      }

      resource "aws_instance" "web_server" {
        ami           = "ami-0c55b159cbfafe1f0"
        instance_type = "t2.micro"

        tags = {
          Name        = "ServidorWeb"
          Environment = "produccion"
        }
      }

      output "ip_publica" {
        value = aws_instance.web_server.public_ip
      }
    output: "Terraform provisiona una instancia EC2 t2.micro en AWS y muestra la IP pública como output después de aplicar."
  - title: "Módulo reutilizable para un bucket S3"
    code: |
      # modules/s3/main.tf
      variable "bucket_name" {}
      variable "environment" {}

      resource "aws_s3_bucket" "this" {
        bucket = "${var.bucket_name}-${var.environment}"
        acl    = "private"
      }

      # Uso del módulo
      module "assets" {
        source      = "./modules/s3"
        bucket_name = "mi-app"
        environment = "prod"
      }
    output: "Se crea un bucket S3 llamado 'mi-app-prod' usando un módulo reutilizable que puede instanciarse para diferentes entornos."
tips:
  - text: "Siempre configura un backend remoto (S3 + DynamoDB, Terraform Cloud) para almacenar el estado. Nunca guardes el archivo `terraform.tfstate` solo en local, ya que contiene información sensible y bloquea la colaboración."
  - text: "Usa `terraform fmt` y `terraform validate` regularmente para mantener un formato consistente y detectar errores de sintaxis antes de planificar."
  - text: "Organiza tu código en módulos reutilizables. Un módulo para redes (VPC), otro para bases de datos (RDS) y otro para cómputo (EC2/ECS) hace el código mantenible y testeable."
  - text: "Marca los recursos críticos con `prevent_destroy = true` en el bloque `lifecycle` para evitar eliminaciones accidentales de bases de datos o volúmenes en producción."
  - text: "Usa `terraform import` para incorporar recursos existentes creados manualmente a la gestión de Terraform sin tener que recrearlos desde cero."
faq:
  - question: "¿Qué es el estado (state) de Terraform y por qué es importante?"
    answer: "El estado es un archivo JSON que mapea los recursos definidos en tu configuración con los recursos reales en la nube. Sin él, Terraform no sabría qué recursos gestiona. Almacenarlo en un backend remoto permite colaboración en equipo y bloqueo para evitar conflictos."
  - question: "¿Cómo manejo secretos y credenciales de forma segura?"
    answer: "Nunca hardcodees secretos en archivos .tf. Usa variables de entorno, HashiCorp Vault, AWS Secrets Manager o variables marcadas como `sensitive = true`. Terraform Cloud ofrece manejo de variables sensibles encriptadas."
  - question: "¿Puedo usar Terraform con Kubernetes?"
    answer: "Sí. Terraform tiene providers para Kubernetes y Helm que permiten gestionar clústeres, deployments, servicios e ingress. También puedes usar Terraform para crear el clúster (EKS, AKS, GKE) y luego gestionar las aplicaciones dentro de él."
  - question: "¿Qué diferencia hay entre Terraform y Ansible?"
    answer: "Terraform es para provisionar infraestructura (crear servidores, redes, bases de datos). Ansible es para gestión de configuración (instalar software, configurar servicios en servidores ya existentes). Se complementan: usa Terraform para crear los recursos y Ansible para configurarlos."
publishedAt: 2026-06-01
---

## ¿Qué es?

Terraform es la herramienta de infraestructura como código (IaC) más popular, creada por HashiCorp. Permite definir recursos cloud en archivos de configuración HCL, planificar cambios con dry-run y aplicarlos de forma segura y reproducible.

## ¿Para qué sirve?

Terraform sirve para provisionar infraestructura cloud (servidores, redes, bases de datos, DNS, etc.) de forma declarativa, versionada y automatizada. Es el estándar para gestionar recursos en AWS, Azure, Google Cloud y cientos de proveedores más.

## Cuándo usarla

- Cuando necesitas gestionar infraestructura cloud de forma reproducible.
- Para equipos que versionan su infraestructura como código.
- Si trabajas con múltiples proveedores cloud.
- Cuando necesitas revisar cambios de infraestructura antes de aplicarlos.
- Para automatizar despliegues de entornos completos.

## Cuándo NO usarla

- Si solo tienes un servidor simple con configuración manual.
- Para despliegues de aplicaciones sin infraestructura cloud compleja.
- Cuando tu equipo no tiene experiencia en IaC y la curva es muy alta.
- Si necesitas gestión de configuración de servidores (usa Ansible o Puppet).

## Pros

- Multi-cloud con cientos de proveedores soportados.
- Plan de cambios para revisión antes de aplicar.
- Módulos reutilizables que aceleran el desarrollo.
- Estado versionado para colaboración en equipo.
- Ecosistema enorme de módulos públicos.

## Contras

- Curva de aprendizaje alta por HCL y conceptos de estado.
- Gestión de estado compleja en equipos grandes (requiere backend remoto).
- No es idempotente como Pulumi en ciertos casos.
- BSL license genera controversia en la comunidad open source.
- Depuración de errores puede ser críptica.
