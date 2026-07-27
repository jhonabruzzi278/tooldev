---
name: Beeceptor
description: Crea endpoints mock e inspecciona, transforma o redirige peticiones.
category: apis
tags: [mock, http, api, testing, proxy]
officialSite: https://beeceptor.com
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - Endpoints mock HTTP al instante sin registro complejo
  - Reglas de respuesta por método, ruta o contenido
  - Inspección de peticiones en tiempo real
  - Modo proxy para envolver APIs reales y simular fallos
  - Simulación de latencia y códigos de error
  - Historial de peticiones de 10 días
alternatives: [mockapi, jsonplaceholder]
relatedTools: [postman, hoppscotch]
howToUse:
  - step: 1
    title: "Crea tu endpoint"
    description: "Entra en beeceptor.com, elige un nombre para tu subdominio y obtén una URL base del tipo https://tu-nombre.free.beeceptor.com lista para recibir peticiones."
  - step: 2
    title: "Define reglas de respuesta"
    description: "Crea reglas que devuelvan el status, headers y body que quieras según el método y la ruta. Puedes simular errores 500, latencia o respuestas condicionadas al payload."
  - step: 3
    title: "Inspecciona las peticiones"
    description: "Apunta tu app al endpoint y observa en el dashboard cada petición entrante con sus headers, query params y body, guardados durante 10 días."
whenToUse:
  - title: "Frontend antes que backend"
    description: "Cuando el equipo de frontend necesita consumir una API que aún no existe: defines el contrato en Beeceptor y desarrollas contra respuestas realistas."
  - title: "Depuración de webhooks e integraciones"
    description: "Para recibir webhooks de terceros y examinar exactamente qué envían, o para envolver una API real con el proxy y simular fallos y latencia."
examples:
  - title: "Consumir un mock desde JavaScript"
    code: |
      const res = await fetch('https://mi-api.free.beeceptor.com/usuarios', {
        headers: { 'Content-Type': 'application/json' }
      })
      const usuarios = await res.json()
      console.log(usuarios)
    output: "Devuelve el JSON que configuraste en la regla mock para la ruta /usuarios."
tips:
  - text: "Usa el modo proxy sobre una API real para simular errores 500 o latencia sin tocar el backend de verdad."
  - text: "Crea una regla por caso de uso (éxito, vacío, error) y actívalas o desactívalas según lo que estés probando."
  - text: "Revisa el historial de peticiones para validar que tu cliente envía headers y body exactamente como esperas."
faq:
  - question: "¿Qué incluye el plan gratuito de Beeceptor?"
    answer: "El plan gratuito incluye 50 peticiones al día, 1 endpoint mock y 10 días de historial de peticiones, sin necesidad de tarjeta."
  - question: "¿Beeceptor puede actuar como proxy de una API real?"
    answer: "Sí, puedes configurar reglas que reenvíen la petición a tu API real y modificar la respuesta, añadir latencia o forzar errores para pruebas."
  - question: "¿Sirve para probar webhooks?"
    answer: "Sí, es uno de sus usos más habituales: apuntas el webhook del proveedor a tu endpoint de Beeceptor e inspeccionas cada llamada con headers y payload completos."
publishedAt: 2026-07-21
---

## ¿Qué es?

Beeceptor es un servicio para crear endpoints HTTP mock al instante e inspeccionar las peticiones que reciben. También funciona como proxy para envolver APIs reales y simular fallos, latencia o respuestas condicionadas.

## ¿Para qué sirve?

Sirve para desarrollar frontend contra APIs que aún no existen, depurar webhooks de terceros viendo exactamente qué envían, y probar cómo se comporta una aplicación ante errores o lentitud del backend.

## Cuándo usarla

- Cuando frontend y backend avanzan en paralelo y necesitas mocks ya.
- Para inspeccionar webhooks sin montar un servidor público.
- Si quieres simular errores y latencia sobre una API real.

## Cuándo NO usarla

- Si necesitas muchas peticiones diarias en el plan gratuito.
- Para mocks con lógica compleja de negocio o estado persistente.
- Cuando una API falsa local (JSON Server, MSW) te basta.

## Pros

- Endpoint mock funcionando en segundos.
- Inspección de peticiones muy clara.
- Proxy con simulación de fallos sin tocar el backend.
- Sin tarjeta ni fricción para empezar.

## Contras

- Solo 50 peticiones/día en el plan gratuito.
- Un único endpoint mock en el plan gratis.
- El historial se limita a 10 días.
