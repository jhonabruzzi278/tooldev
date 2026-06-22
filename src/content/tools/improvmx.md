---
name: ImprovMX
description: Servicio de reenvío de email para dominios personalizados que permite recibir correos en tu dominio propio sin necesidad de hosting de email.
category: backend
tags: [email, reenvio, dominio, dns, forwarding, smtp, correo, infraestructura]
officialSite: https://improvmx.com
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web]
features:
  - Reenvío de email para dominios personalizados sin hosting
  - Configuración mediante registros MX de DNS únicamente
  - Soporte para aliases ilimitados y catch-all
  - SMTP para envío de emails desde tu dominio personalizado
  - API REST para gestión programática de aliases y dominios
  - Soporte para múltiples dominios en una sola cuenta
  - Filtrado de spam integrado antes del reenvío
howToUse:
  - step: 1
    title: "Registra tu dominio en ImprovMX"
    description: "Crea una cuenta en ImprovMX y añade tu dominio personalizado. El servicio te proporcionará los registros MX que debes configurar en tu proveedor de DNS para que los emails dirigidos a tu dominio sean procesados por ImprovMX."
  - step: 2
    title: "Configura los registros MX en tu DNS"
    description: "Accede al panel de control de tu proveedor de DNS (Cloudflare, Namecheap, Route53) y reemplaza los registros MX existentes con los proporcionados por ImprovMX. La propagación DNS tarda típicamente entre 5 minutos y 24 horas."
  - step: 3
    title: "Crea aliases de reenvío"
    description: "Define a qué dirección personal (Gmail, Outlook, etc.) se reenviarán los emails. Puedes crear aliases específicos (hola@tudominio.com → tu@gmail.com) o un catch-all (*@tudominio.com) que reenvíe todo el correo del dominio."
  - step: 4
    title: "Configura SMTP para enviar desde tu dominio (opcional)"
    description: "Si necesitas enviar emails que aparezcan desde tu dominio (no solo recibir), configura las credenciales SMTP de ImprovMX en tu cliente de email para que los destinatarios vean tu@tudominio.com como remitente."
whenToUse:
  - title: "Email profesional sin costo de hosting"
    description: "Cuando tienes un dominio personalizado y quieres recibir emails en direcciones como contacto@tuempresa.com sin pagar Google Workspace, Microsoft 365 u otro hosting de email completo."
  - title: "Proyectos y landing pages con formulario de contacto"
    description: "Para proyectos web donde necesitas una dirección de email profesional vinculada al dominio del proyecto pero no justifica un servicio de email completo con buzones dedicados."
  - title: "Múltiples dominios con gestión centralizada"
    description: "Cuando gestionas varios dominios (proyectos personales, clientes, side projects) y quieres recibir todo el correo en una sola bandeja de entrada sin configurar hosting de email por cada dominio."
examples:
  - title: "Configuración completa de reenvío para un dominio"
    code: |
      # 1. Registros MX a configurar en tu DNS:
      # Tipo: MX  Prioridad: 10  Valor: mx1.improvmx.com
      # Tipo: MX  Prioridad: 20  Valor: mx2.improvmx.com

      # 2. Registro SPF para autorizar envío:
      # Tipo: TXT  Valor: "v=spf1 include:spf.improvmx.com ~all"

      # 3. Crear alias via API:
      curl -X POST https://api.improvmx.com/v3/domains/tudominio.com/aliases \
        -H "Authorization: Basic api:YOUR_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
          "alias": "contacto",
          "forward": "tu.email.personal@gmail.com"
        }'

      # Resultado: contacto@tudominio.com → tu.email.personal@gmail.com
    output: "Emails enviados a contacto@tudominio.com se reenvían automáticamente a tu bandeja de Gmail, manteniendo headers originales, adjuntos y formato del mensaje intactos."
tips:
  - text: "Configura siempre el registro SPF junto con los registros MX para evitar que los emails reenviados sean marcados como spam por el destinatario final."
  - text: "Usa un alias catch-all (*@tudominio.com) durante la fase inicial para capturar todo el correo y luego crea aliases específicos según las direcciones que realmente reciben tráfico."
  - text: "Aprovecha aliases únicos por servicio (github@tudominio.com, aws@tudominio.com) para identificar fácilmente la fuente de spam si algún servicio compromete tu email."
  - text: "Configura DKIM además de SPF para maximizar la entregabilidad de emails enviados desde tu dominio personalizado y reducir la probabilidad de caer en carpetas de spam."
faq:
  - question: "¿ImprovMX almacena mis emails?"
    answer: "No, ImprovMX actúa solo como intermediario de reenvío. Los emails se procesan y reenvían inmediatamente a tu dirección destino sin almacenamiento permanente en los servidores de ImprovMX. Tu bandeja de entrada real sigue siendo tu proveedor de email personal."
  - question: "¿Puedo enviar emails desde mi dominio, no solo recibir?"
    answer: "Sí, con la función SMTP de ImprovMX puedes configurar tu cliente de email (Gmail, Thunderbird, Apple Mail) para enviar correos que aparezcan como enviados desde tu@tudominio.com. Esto requiere configurar credenciales SMTP en tu cliente."
  - question: "¿Cuántos aliases puedo crear?"
    answer: "El plan gratuito permite hasta 25 aliases por dominio con un dominio. Los planes de pago ofrecen aliases ilimitados, múltiples dominios, mayor volumen de reenvío y soporte SMTP para envío desde tu dominio."
  - question: "¿Qué pasa si ImprovMX tiene una caída?"
    answer: "Los emails se encolan en los servidores del remitente (según el protocolo SMTP estándar) y se reintentan automáticamente cuando ImprovMX vuelve a estar disponible. No se pierden emails por caídas temporales gracias al mecanismo de reintentos del protocolo SMTP."
publishedAt: 2025-06-15
---

## ¿Qué es?

ImprovMX es un servicio de reenvío de email que permite recibir (y opcionalmente enviar) correos electrónicos usando tu dominio personalizado sin necesidad de contratar un servicio de hosting de email completo. Funciona como intermediario que redirige los emails recibidos en tu dominio hacia tu bandeja de entrada personal existente (Gmail, Outlook, etc.).

## ¿Para qué sirve?

Sirve para tener direcciones de email profesionales con tu propio dominio (contacto@tuempresa.com) sin el costo y complejidad de administrar un servidor de email o pagar por servicios como Google Workspace. Es ideal para freelancers, proyectos personales, startups y cualquier situación donde necesitas una imagen profesional sin infraestructura de email dedicada.

## Cuándo usarla

- Cuando tienes un dominio propio y quieres recibir emails en él sin pagar hosting de email.
- Para proyectos web que necesitan una dirección de contacto profesional vinculada al dominio.
- Si gestionas múltiples dominios y quieres centralizar todo el correo en una sola bandeja.
- Cuando necesitas aliases de email únicos por servicio para control de spam y privacidad.

## Cuándo NO usarla

- Si necesitas buzones de correo completos con carpetas, etiquetas y almacenamiento dedicado.
- Cuando requieres funcionalidades de colaboración empresarial (calendarios compartidos, contactos).
- Para volúmenes de email muy altos donde necesitas un servidor de email dedicado.
- Si necesitas cumplimiento normativo estricto que requiere control total sobre el almacenamiento de email.

## Pros

- Configuración extremadamente simple (solo registros MX en DNS).
- Plan gratuito funcional para uso personal y proyectos pequeños.
- Sin necesidad de administrar servidor de email ni infraestructura.
- Aliases ilimitados en planes de pago para organización flexible.
- API REST para automatización y gestión programática.

## Contras

- No reemplaza un servicio de email completo (sin buzones propios).
- Dependencia de un servicio externo para la recepción de correo.
- El plan gratuito tiene límites en cantidad de aliases y dominios.
- El reenvío puede añadir ligera latencia a la entrega de emails.
- Algunos emails complejos (con formatos HTML elaborados) pueden perder formato en el reenvío.
