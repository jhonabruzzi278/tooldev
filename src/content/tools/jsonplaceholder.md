---
name: JSONPlaceholder
description: Una API REST falsa y fiable para ejemplos, pruebas y prototipos.
category: apis
tags: [fake-api, rest, testing, prototyping, mock]
officialSite: https://jsonplaceholder.typicode.com
github: https://github.com/typicode/jsonplaceholder
pricing: gratis
openSource: true
technicalLevel: principiante
compatibility: [Web, API]
featured: false
verified: false
features:
  - Seis recursos REST clásicos listos para usar
  - Sin registro ni API key
  - Soporta GET, POST, PUT, PATCH y DELETE simulados
  - Relaciones entre recursos y filtros por query
  - Disponible 24/7 para demos y documentación
  - Código abierto para self-hosting
alternatives: [mockapi, beeceptor]
relatedTools: [postman, hoppscotch]
howToUse:
  - step: 1
    title: "Elige un recurso"
    description: "JSONPlaceholder ofrece posts, comments, albums, photos, todos y users. La URL base es https://jsonplaceholder.typicode.com seguida del recurso, sin autenticación."
  - step: 2
    title: "Haz llamadas de lectura"
    description: "Haz fetch a /posts para la lista, a /posts/1 para el detalle y usa filtros como /posts?userId=1 o recursos anidados como /posts/1/comments."
  - step: 3
    title: "Simula escrituras"
    description: "Envía POST, PUT, PATCH o DELETE con tu JSON. La API responde como si hubiera funcionado (por ejemplo devolviendo id 101), pero los cambios no se persisten."
whenToUse:
  - title: "Aprender y enseñar consumo de APIs"
    description: "Cuando estás aprendiendo fetch, axios o un framework y quieres una API pública estable sobre la que practicar sin registros ni claves."
  - title: "Prototipos y demos de solo lectura"
    description: "Para maquetar listados, detalles y comentarios con datos consistentes en segundos, sin preocuparte por crear ni mantener datos de prueba."
examples:
  - title: "Listar posts y crear uno simulado"
    code: |
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(r => r.json())

      const nuevo = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Hola', body: 'Post de prueba', userId: 1 })
      }).then(r => r.json())
    output: "La lista devuelve 5 posts reales del servicio y el POST responde con el objeto enviado más un id simulado (101)."
tips:
  - text: "Recuerda que las escrituras se simulan: si necesitas persistencia real en el mock, usa MockAPI o un JSON Server local."
  - text: "Usa los parámetros _limit, _start e id para paginar resultados en tus ejemplos."
  - text: "Como es open source, puedes desplegar tu propia copia si necesitas garantías de disponibilidad en CI."
faq:
  - question: "¿Qué incluye el plan gratuito de JSONPlaceholder?"
    answer: "Es una API pública totalmente gratis con 6 recursos habituales (posts, comments, albums, photos, todos y users); las escrituras se simulan y no se guardan."
  - question: "¿Los datos que creo con POST se guardan?"
    answer: "No. La API responde con éxito y un id simulado, pero nada se persiste: al recargar, los datos originales siguen intactos."
  - question: "¿Necesito registrarme o pedir una API key?"
    answer: "No, JSONPlaceholder es completamente abierta: llamas a la URL base y empiezas a consumir los recursos sin autenticación de ningún tipo."
publishedAt: 2026-07-21
---

## ¿Qué es?

JSONPlaceholder es la API REST falsa más conocida: ofrece recursos típicos de una aplicación (posts, comentarios, usuarios, fotos, tareas) sin registro ni claves, mantenida como proyecto open source.

## ¿Para qué sirve?

Sirve para aprender a consumir APIs, prototipar interfaces con datos consistentes, ilustrar ejemplos en documentación y tutoriales, y hacer pruebas rápidas de cliente HTTP sin montar nada.

## Cuándo usarla

- Cuando aprendes o enseñas consumo de APIs REST.
- Para prototipos de lectura con datos siempre disponibles.
- En ejemplos de código, demos y pruebas de concepto rápidas.

## Cuándo NO usarla

- Si necesitas que las escrituras persistan de verdad.
- Para esquemas de datos propios distintos de los 6 recursos.
- Cuando quieres control total del mock (mejor self-hosted).

## Pros

- Cero fricción: sin registro, sin claves, sin límites estrictos.
- Datos consistentes y relaciones entre recursos.
- Muy estable y usada en miles de tutoriales.
- Open source y autoalojable.

## Contras

- Las escrituras solo se simulan.
- Recursos fijos: no puedes definir tus propios esquemas.
- Sin entornos ni datos personalizables.
