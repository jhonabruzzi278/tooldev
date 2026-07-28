---
name: Have I Been Pwned
description: >-
  Servicio que comprueba cuentas y dominios frente a filtraciones de datos
  conocidas mediante web y API.
category: seguridad
tags:
  - security
  - breaches
  - passwords
  - api
  - leaks
officialSite: 'https://haveibeenpwned.com'
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Búsqueda de correos en cientos de filtraciones de datos verificadas
  - Pwned Passwords con k-anonymity para comprobar contraseñas filtradas
  - Notificaciones por email cuando apareces en una nueva brecha
  - Búsqueda por dominio completo para organizaciones
  - 'API autenticada para cuentas, dominios y passwords'
  - Base de datos mantenida por Troy Hunt con breaches verificados
alternatives:
  - gitguardian
  - mozilla-observatory
relatedTools:
  - postman
  - snyk
howToUse:
  - step: 1
    title: Comprueba un correo en la web
    description: >-
      Entra en haveibeenpwned.com y escribe una dirección de email. El servicio
      lista las filtraciones públicas donde aparece, con la fecha, el servicio
      afectado y el tipo de datos expuestos (emails, contraseñas, teléfonos...).
  - step: 2
    title: Verifica contraseñas con Pwned Passwords
    description: >-
      Usa la sección Passwords para comprobar si una contraseña aparece en
      filtraciones conocidas. La búsqueda usa k-anonymity: solo se envía el
      prefijo del hash, por lo que la contraseña completa nunca sale de tu
      navegador.
  - step: 3
    title: Integra la API en tu aplicación
    description: >-
      Contrata la clave de API si necesitas consultar cuentas o dominios desde
      tu backend. Con la API puedes rechazar contraseñas filtradas en el
      registro, alertar a usuarios afectados por nuevas brechas o auditar los
      correos de tu dominio.
whenToUse:
  - title: Formularios de registro y cambio de contraseña
    description: >-
      Para rechazar contraseñas que ya han sido filtradas (recomendado por NIST)
      usando Pwned Passwords, que es gratuito y preserva la privacidad.
  - title: Monitorización de la exposición de tu organización
    description: >-
      Cuando quieres saber qué cuentas corporativas aparecen en brechas de
      terceros para forzar resets de contraseña y revisar accesos.
  - title: Auditorías personales de seguridad
    description: >-
      Para que cualquier persona compruebe en segundos si su email ha aparecido
      en filtraciones y actúe sobre las cuentas afectadas.
tips:
  - text: >-
      Suscríbete a las notificaciones gratuitas por email: te avisarán cuando tu
      dirección aparezca en una brecha futura sin tener que comprobarlo a mano.
  - text: >-
      Integra Pwned Passwords en el registro y el reset de contraseñas; es
      gratis, sin API key, y mejora mucho la seguridad de tus usuarios.
  - text: >-
      Si apareces en una brecha, cambia la contraseña de ese servicio y de todos
      donde la reutilices; un gestor de contraseñas evita ese problema
      sistémico.
  - text: >-
      Respeta el rate limit de la API autenticada y cachea resultados de Pwned
      Passwords por rangos de hash para no repetir llamadas innecesarias.
faq:
  - question: ¿Qué incluye el plan gratuito de Have I Been Pwned?
    answer: >-
      Pwned Passwords y las búsquedas básicas de correo en la web son gratis; la
      API autenticada para consultas de cuentas y dominios es de pago por
      suscripción.
  - question: ¿Es seguro escribir mi email o contraseña en la web?
    answer: >-
      Sí. Las búsquedas de email no almacenan lo consultado y Pwned Passwords
      usa k-anonymity: solo se envían los primeros caracteres del hash SHA-1,
      nunca la contraseña ni su hash completo.
  - question: ¿Qué hago si mi cuenta aparece en una filtración?
    answer: >-
      Cambia la contraseña del servicio afectado y de cualquier otro donde
      reutilices la misma, activa doble factor de autenticación y vigila
      actividad sospechosa en esas cuentas.
  - question: ¿Puedo buscar todos los correos de mi empresa?
    answer: >-
      Sí, la búsqueda por dominio permite listar las cuentas de tu dominio
      afectadas por brechas, previa verificación de que controlas ese dominio;
      esta función requiere la suscripción de API.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/have-i-been-pwned.webp
---

## ¿Qué es?

Have I Been Pwned es el servicio de referencia creado por Troy Hunt para consultar filtraciones de datos: permite saber si un email, una contraseña o un dominio completo aparecen en las cientos de brechas verificadas que indexa, tanto desde la web como por API.

## ¿Para qué sirve?

Sirve para auditar la exposición de cuentas ante filtraciones conocidas, bloquear contraseñas comprometidas en tus formularios con Pwned Passwords y monitorizar la aparición de correos de tu organización en nuevas brechas.

## Cuándo usarla

- Para rechazar contraseñas filtradas en registros y resets (gratis con k-anonymity).
- Cuando quieres auditar qué cuentas de tu dominio aparecen en brechas.
- Para recibir alertas cuando tu email aparezca en una filtración futura.

## Cuándo NO usarla

- No es un escáner de tu propia aplicación, solo consulta brechas de terceros.
- Si necesitas detección de secretos en tu código (usa GitGuardian).

## Pros

- La base de datos de brechas más conocida y respetada del sector.
- Pwned Passwords gratis, privado (k-anonymity) y sin API key.
- Notificaciones por email ante nuevas filtraciones sin coste.
- API sencilla con modelos de k-anonymity bien documentados.

## Contras

- La API autenticada de cuentas y dominios requiere suscripción de pago.
- Solo cubre filtraciones ya públicas o verificadas, no la actividad en tiempo real.
