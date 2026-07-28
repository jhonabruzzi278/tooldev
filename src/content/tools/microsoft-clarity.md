---
name: Microsoft Clarity
description: Mapas de calor y grabaciones gratis para entender el comportamiento web.
category: analytics
tags:
  - heatmaps
  - session-replay
  - analytics
  - behavior
  - microsoft
officialSite: 'https://clarity.microsoft.com'
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility:
  - Web
featured: false
verified: false
features:
  - Grabaciones de sesión ilimitadas y gratuitas
  - 'Mapas de calor de clics, scroll y áreas de interés'
  - 'Detección de rage clicks, dead clicks y errores de JavaScript'
  - 'Segmentación por dispositivo, país y comportamiento'
  - Integración con Google Analytics para cruzar datos
  - Panel de insights automáticos con patrones detectados
alternatives:
  - posthog
  - mixpanel
relatedTools:
  - google-analytics
  - umami
howToUse:
  - step: 1
    title: Crear el proyecto en Clarity
    description: >-
      Regístrate en clarity.microsoft.com con una cuenta de Microsoft, Google o
      Facebook, crea un proyecto indicando la URL de tu web y obtén el código de
      seguimiento.
  - step: 2
    title: Instalar el script de seguimiento
    description: >-
      Pega el snippet en la cabecera de todas tus páginas o instálalo mediante
      Google Tag Manager. Las grabaciones y mapas de calor empiezan a generarse
      automáticamente.
  - step: 3
    title: Analizar grabaciones y heatmaps
    description: >-
      Filtra grabaciones por rage clicks, errores o páginas concretas para
      encontrar problemas de usabilidad. Revisa los mapas de calor de tus
      páginas clave para validar si los usuarios ven e interactúan con lo
      importante.
whenToUse:
  - title: Diagnosticar problemas de usabilidad
    description: >-
      Cuando las métricas dicen que los usuarios abandonan pero no sabes por
      qué: las grabaciones muestran exactamente qué ven y dónde se atascan.
  - title: Validar diseños y landing pages
    description: >-
      Ideal para comprobar con mapas de calor si los usuarios hacen clic donde
      esperas, llegan con el scroll al contenido clave o ignoran elementos.
  - title: Complemento cualitativo de tu analítica
    description: >-
      Perfecto junto a GA4, Umami o cualquier analítica cuantitativa: ellas te
      dan los números y Clarity te muestra el comportamiento detrás.
tips:
  - text: >-
      Filtra primero por rage clicks y dead clicks: son la forma más rápida de
      encontrar elementos rotos o diseños confusos que frustran a los usuarios.
  - text: >-
      Conecta Clarity con Google Analytics para saltar desde un segmento de GA
      directamente a las grabaciones de esos usuarios.
  - text: >-
      Revisa grabaciones de sesiones convertidas y no convertidas en paralelo:
      las diferencias de comportamiento suelen revelar qué cambiar.
  - text: >-
      Enmascara campos sensibles con la configuración de masking para cumplir
      privacidad: Clarity enmascara texto por defecto, pero revisa formularios
      propios.
faq:
  - question: ¿Qué incluye el plan gratuito de Microsoft Clarity?
    answer: >-
      Es totalmente gratis: proyectos, mapas de calor y grabaciones de sesión
      ilimitados, sin límite de tráfico ni planes de pago ocultos.
  - question: ¿Microsoft Clarity afecta al rendimiento de mi web?
    answer: >-
      El script es asíncrono y ligero, diseñado para no bloquear la carga. En la
      práctica su impacto en el rendimiento percibido es mínimo para la mayoría
      de sitios.
  - question: ¿Clarity cumple con GDPR?
    answer: >-
      Clarity enmascara contenido sensible por defecto y ofrece controles de
      privacidad, pero al capturar comportamiento de usuarios conviene
      reflejarlo en tu política de privacidad y, según tu caso, en el
      consentimiento.
  - question: ¿En qué se diferencia de Google Analytics?
    answer: >-
      GA mide números: visitas, eventos y conversiones. Clarity muestra el
      comportamiento: grabaciones, mapas de calor y frustración del usuario. Son
      complementarios y se integran entre sí.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/microsoft-clarity.webp
---

## ¿Qué es?

Microsoft Clarity es una herramienta gratuita de analítica de comportamiento. Graba sesiones de usuarios, genera mapas de calor de clics y scroll, y detecta señales de frustración como rage clicks, todo sin límites de tráfico.

## ¿Para qué sirve?

Sirve para entender visualmente cómo interactúan los usuarios con una web: dónde hacen clic, hasta dónde hacen scroll, qué elementos ignoran y en qué punto abandonan, complementando los datos cuantitativos de otras analíticas.

## Cuándo usarla

- Cuando necesitas grabaciones de sesión y heatmaps sin pagar.
- Para diagnosticar por qué una página o funnel no convierte.
- Si quieres validar diseños con comportamiento real de usuarios.
- Como complemento cualitativo de GA4, Umami u otra analítica.

## Cuándo NO usarla

- Si buscas métricas de tráfico y adquisición: no es su función.
- Cuando la normativa de tu sector prohíbe grabar sesiones de usuario.
- Para analítica de producto con eventos y usuarios identificados.

## Pros

- Totalmente gratis, sin límites de tráfico ni proyectos.
- Grabaciones y heatmaps ilimitados.
- Detección automática de rage clicks y dead clicks.
- Integración directa con Google Analytics.

## Contras

- No ofrece métricas de tráfico ni conversión por sí sola.
- Los datos de grabaciones pueden ser abrumadores sin filtros.
- Dependencia del ecosistema y servidores de Microsoft.
