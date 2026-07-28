---
name: Umami
description: Analítica web limpia y centrada en privacidad con informes sencillos.
category: analytics
tags:
  - analytics
  - privacy
  - web
  - simple
  - open-source
officialSite: 'https://umami.is'
github: 'https://github.com/umami-software/umami'
license: MIT
pricing: freemium
openSource: true
technicalLevel: principiante
compatibility:
  - Web
featured: false
verified: false
features:
  - Métricas esenciales sin cookies ni datos personales
  - Script de seguimiento ligero de menos de 2 KB
  - Informes de eventos personalizados y campañas UTM
  - 'Filtros por país, dispositivo, navegador y referrer'
  - Paneles compartibles mediante enlaces públicos
  - Opción self-hosted con control total de los datos
  - Gestión de múltiples sitios desde un solo panel
alternatives:
  - google-analytics
  - cloudflare-web-analytics
  - ahrefs-web-analytics
relatedTools:
  - microsoft-clarity
  - posthog
howToUse:
  - step: 1
    title: Crear la cuenta y añadir tu sitio
    description: >-
      Regístrate en Umami Cloud o despliega tu propia instancia self-hosted.
      Desde el panel, añade un nuevo sitio web indicando su dominio para generar
      el código de seguimiento.
  - step: 2
    title: Instalar el script de seguimiento
    description: >-
      Copia el snippet proporcionado y pégalo en la cabecera de tu web. En
      frameworks como Next.js o Astro puedes añadirlo en el layout raíz.
      Empezarás a recoger visitas al instante.
  - step: 3
    title: Medir eventos y campañas
    description: >-
      Añade atributos data-umami-event a botones y enlaces para registrar
      conversiones sin escribir JavaScript. Usa parámetros UTM en tus enlaces
      para analizar el rendimiento de cada campaña.
whenToUse:
  - title: Analítica simple y respetuosa con la privacidad
    description: >-
      Cuando quieres métricas claras de visitas, páginas y referrers sin
      cookies, sin banners de consentimiento y sin la complejidad de Google
      Analytics 4.
  - title: Proyectos con requisitos de privacidad
    description: >-
      Ideal para cumplir GDPR y otras normativas sin cargar datos personales ni
      identificadores persistentes de tus visitantes.
  - title: Control total con self-hosting
    description: >-
      Si prefieres alojar la analítica en tu propio servidor y ser el único
      dueño de los datos, la versión open source se despliega fácilmente con
      Docker.
tips:
  - text: >-
      Usa el despliegue self-hosted con Docker si necesitas eventos ilimitados
      sin coste; el plan cloud gratuito basta para la mayoría de webs pequeñas y
      personales.
  - text: >-
      Prefiere los atributos data-umami-event sobre el JavaScript personalizado
      para medir clics: es más mantenible y no requiere código adicional.
  - text: >-
      Comparte paneles de solo lectura con clientes mediante los enlaces
      públicos en lugar de dar acceso a tu cuenta de Umami.
  - text: >-
      Excluye tu propio tráfico de desarrollo filtrando por IP o cargando el
      script solo en producción para no contaminar las métricas.
faq:
  - question: ¿Qué incluye el plan gratuito de Umami?
    answer: >-
      Umami Cloud gratuito permite hasta 3 sitios web, 100.000 eventos al mes y
      6 meses de retención de datos. La versión self-hosted es ilimitada y
      gratuita bajo licencia MIT.
  - question: ¿Umami usa cookies?
    answer: >-
      No. Umami no utiliza cookies ni recoge datos personales, por lo que en la
      mayoría de los casos no necesitas un banner de consentimiento para cumplir
      con GDPR.
  - question: ¿Puedo migrar mi histórico de Google Analytics a Umami?
    answer: >-
      No existe importación directa del histórico de GA. La práctica habitual es
      ejecutar ambos scripts en paralelo durante unas semanas y empezar a
      acumular datos nuevos en Umami desde el primer día.
  - question: ¿Qué necesito para self-hostear Umami?
    answer: >-
      Un servidor con Node.js o Docker y una base de datos PostgreSQL o MySQL.
      El despliegue con Docker Compose es la vía más rápida y está documentada
      en el repositorio oficial.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/umami.webp
---

## ¿Qué es?

Umami es una herramienta de analítica web open source centrada en la privacidad. Ofrece las métricas esenciales de tráfico en un panel limpio y sencillo, sin cookies ni recolección de datos personales, y puede usarse en la nube o autoalojada.

## ¿Para qué sirve?

Sirve para medir visitas, páginas vistas, referrers, dispositivos y eventos personalizados de una web sin comprometer la privacidad de los usuarios ni lidiar con la complejidad de plataformas como Google Analytics 4.

## Cuándo usarla

- Cuando quieres analítica web simple sin cookies ni banners de consentimiento.
- Para proyectos personales, blogs y webs pequeñas que no necesitan GA4.
- Si necesitas cumplir GDPR sin recoger datos personales.
- Cuando prefieres self-hostear y controlar tus datos al 100%.

## Cuándo NO usarla

- Si necesitas analítica de producto avanzada con cohortes y retención detallada.
- Cuando dependes de integraciones profundas con el ecosistema publicitario de Google.
- Para equipos de marketing que requieren atribución multicanal compleja.

## Pros

- Sin cookies ni datos personales por diseño.
- Interfaz limpia y curva de aprendizaje mínima.
- Open source con opción self-hosted ilimitada.
- Script muy ligero que no afecta al rendimiento.

## Contras

- Menos funciones avanzadas que GA4 o herramientas de product analytics.
- El plan cloud gratuito limita eventos y retención.
- No hay importación de histórico desde otras plataformas.
