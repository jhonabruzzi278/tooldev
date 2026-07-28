---
name: IPinfo
description: 'Datos de IP para geolocalización, redes, privacidad y seguridad.'
category: apis
tags:
  - ip
  - geolocation
  - asn
  - network
  - api
officialSite: 'https://ipinfo.io'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - 'Geolocalización de IP por país, región y ciudad'
  - Datos de ASN y operador de red
  - 'Detección de VPN, proxy y Tor en planes de pago'
  - API JSON rápida con librerías oficiales
  - Bases de datos descargables para uso offline
  - API Lite gratuita sin caducidad
alternatives:
  - abstract-api
relatedTools:
  - postman
howToUse:
  - step: 1
    title: Empieza con API Lite o consigue tu token
    description: >-
      Usa la API Lite sin registro para geolocalización básica, o regístrate en
      ipinfo.io para obtener un token de acceso a la API estándar con más
      campos.
  - step: 2
    title: Consulta una IP
    description: >-
      Llama a https://ipinfo.io/8.8.8.8/json con tu token, o a la API Lite sin
      token, y recibe un JSON con país, región, ciudad, coordenadas y ASN.
  - step: 3
    title: Integra en tu backend
    description: >-
      Consulta la IP del visitante en tu servidor para personalizar contenido,
      aplicar reglas de seguridad o enriquecer logs con datos de red.
whenToUse:
  - title: Personalización por ubicación
    description: >-
      Cuando quieres adaptar idioma, moneda o contenido según el país del
      visitante a partir de su IP, con un servicio gratis e ilimitado para ese
      uso básico.
  - title: Seguridad y análisis de tráfico
    description: >-
      Para detectar países inusuales en inicios de sesión, enriquecer logs con
      ASN y operador, o filtrar tráfico por red de origen.
examples:
  - title: Geolocalizar una IP con API Lite
    code: >
      const res = await
      fetch('https://api.ipinfo.io/lite/8.8.8.8?token=TU_TOKEN')

      const data = await res.json()

      console.log(data.country, data.continent, data.asn)
    output: 'Devuelve el país, continente y ASN de la IP consultada en JSON.'
tips:
  - text: >-
      Si solo necesitas país, continente y ASN, quédate en API Lite: es gratis e
      ilimitada.
  - text: >-
      Cachea las respuestas unas horas: la geolocalización de una IP no cambia
      constantemente y ahorras latencia.
  - text: >-
      Haz las llamadas desde el servidor y nunca expongas tu token en JavaScript
      del navegador.
faq:
  - question: ¿Qué incluye el plan gratuito de IPinfo?
    answer: >-
      IPinfo ofrece API Lite gratis con geolocalización IP ilimitada a nivel de
      país, continente y ASN.
  - question: ¿Qué diferencia hay entre API Lite y la API estándar?
    answer: >-
      API Lite devuelve país, continente y ASN de forma ilimitada y gratuita. La
      API estándar añade región, ciudad, coordenadas, operador y, en planes de
      pago, detección de VPN y proxy.
  - question: ¿IPinfo ofrece bases de datos descargables?
    answer: >-
      Sí, además de la API puedes descargar sus bases de datos de
      geolocalización y ASN para consultarlas en tu propia infraestructura sin
      llamadas externas.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/ipinfo.webp
---

## ¿Qué es?

IPinfo es un proveedor de datos de direcciones IP: geolocalización, ASN, operador y detección de privacidad. Ofrece una API JSON rápida, bases de datos descargables y una API Lite gratuita para los datos básicos.

## ¿Para qué sirve?

Sirve para saber desde dónde se conectan tus usuarios, personalizar contenido por país, reforzar la seguridad detectando redes anómalas y enriquecer analíticas y logs con contexto de red.

## Cuándo usarla

- Cuando necesitas geolocalización por IP fiable y rápida.
- Para reglas de seguridad basadas en país, ASN o tipo de red.
- Si quieres empezar gratis con datos ilimitados de país y ASN.

## Cuándo NO usarla

- Si necesitas detección de VPN y proxy en el plan gratuito.
- Para geolocalización precisa a nivel de calle (ninguna base IP la da).
- Si prefieres una base de datos 100% open data autoalojada.

## Pros

- API Lite gratis e ilimitada para país, continente y ASN.
- Respuestas rápidas y JSON muy limpio.
- Datos de ASN y operador de calidad reconocida.
- Opción de descargar las bases de datos.

## Contras

- Detección de VPN/proxy y datos finos son de pago.
- La precisión a nivel de ciudad varía según la región.
- La API estándar gratuita tiene límites mensuales.
