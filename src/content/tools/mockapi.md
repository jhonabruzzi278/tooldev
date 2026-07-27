---
name: MockAPI
description: Genera endpoints REST y datos realistas para prototipos.
category: apis
tags: [mock, rest, api, fake-data, prototyping]
officialSite: https://mockapi.io
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - Endpoints REST generados por recurso
  - Datos falsos realistas basados en Faker
  - CRUD completo sobre cada recurso
  - Esquemas de datos personalizables
  - Relaciones entre recursos
  - Proyectos compartibles con el equipo
alternatives: [jsonplaceholder, beeceptor]
relatedTools: [postman, hoppscotch]
howToUse:
  - step: 1
    title: "Crea un proyecto y un recurso"
    description: "Regístrate en mockapi.io, crea un proyecto y añade un recurso (por ejemplo users o products). Obtendrás una URL base única con endpoints REST automáticos."
  - step: 2
    title: "Define el esquema y genera datos"
    description: "Configura los campos del recurso con tipos de Faker (nombre, email, fecha, imagen) y genera cuantos registros de prueba necesites con un clic."
  - step: 3
    title: "Consume la API desde tu app"
    description: "Haz fetch a los endpoints del recurso: GET lista y detalle, POST, PUT, PATCH y DELETE funcionan de verdad sobre tus datos mock."
whenToUse:
  - title: "Prototipos de frontend con CRUD real"
    description: "Cuando necesitas que tu app React, Vue o móvil lea y escriba datos de verdad contra una API, sin esperar a que exista el backend definitivo."
  - title: "Demos y pruebas con datos realistas"
    description: "Para demos de producto o tests de integración donde los datos de ejemplo deben parecer reales: nombres, emails, fechas e imágenes generadas con Faker."
examples:
  - title: "CRUD básico contra MockAPI"
    code: |
      const base = 'https://abc123.mockapi.io/api/v1'

      const usuarios = await fetch(`${base}/users`).then(r => r.json())

      await fetch(`${base}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Ana', email: 'ana@ejemplo.com' })
      })
    output: "GET devuelve la lista de usuarios generados y POST crea un registro nuevo con su id."
tips:
  - text: "Usa los tipos de Faker adecuados (avatar, city, sentence) para que las capturas y demos parezcan de producción."
  - text: "Relaciona recursos (por ejemplo posts con userId) para probar flujos más realistas que una sola tabla."
  - text: "Regenera los datos mock antes de una demo para evitar registros de prueba sucios."
faq:
  - question: "¿Qué incluye el plan gratuito de MockAPI?"
    answer: "El plan gratuito incluye un proyecto con hasta 2 recursos y endpoints REST falsos básicos para prototipar."
  - question: "¿Los cambios que hago con POST o DELETE se guardan?"
    answer: "Sí, a diferencia de APIs falsas de solo lectura, MockAPI persiste tus datos mock: el CRUD funciona de verdad sobre tus recursos."
  - question: "¿Puedo personalizar los campos de cada recurso?"
    answer: "Sí, defines el esquema con los campos que necesites y asignas a cada uno un tipo de dato Faker para generar contenido realista automáticamente."
publishedAt: 2026-07-21
---

## ¿Qué es?

MockAPI es un servicio que genera endpoints REST reales a partir de recursos que tú defines, rellenándolos con datos falsos realistas. El CRUD funciona de verdad, por lo que tu frontend puede leer y escribir contra él.

## ¿Para qué sirve?

Sirve para prototipar aplicaciones con una API funcional sin backend propio, alimentar demos con datos creíbles generados con Faker y probar flujos CRUD completos antes de que exista el servicio definitivo.

## Cuándo usarla

- Cuando el frontend necesita una API con escritura real ya.
- Para demos con datos que parezcan de producción.
- Si quieres definir tus propios recursos y esquemas, no solo los genéricos.

## Cuándo NO usarla

- Si necesitas más de 2 recursos en el plan gratuito.
- Para mocks con lógica de negocio o validaciones complejas.
- Cuando solo necesitas datos estáticos de lectura (JSONPlaceholder basta).

## Pros

- CRUD real sobre los datos mock.
- Datos realistas generados con Faker.
- Esquemas totalmente personalizables.
- Muy rápido de configurar.

## Contras

- Plan gratuito limitado a un proyecto y 2 recursos.
- Funciones avanzadas como GraphQL son de pago.
- Sin lógica de negocio: es un mock de datos, no un backend.
