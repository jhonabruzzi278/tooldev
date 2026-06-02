---
name: Postman
description: Plataforma líder para diseñar, probar y documentar APIs REST de forma colaborativa.
category: backend
tags: [api, rest, testing, http, colaboracion, documentacion]
officialSite: https://www.postman.com
pricing: freemium
openSource: false
technicalLevel: principiante
compatibility: [Windows, macOS, Linux, Web]
featured: true
features:
  - Editor de peticiones HTTP con historial
  - Colecciones y entornos reutilizables
  - Tests automatizados con JavaScript
  - Documentación automática de APIs
  - Mock servers y monitores
  - Colaboración en equipo con workspaces
  - Integración con CI/CD
alternatives: []
relatedTools: [docker, github-copilot]
howToUse:
  - step: 1
    title: "Crea una nueva colección"
    description: "Abre Postman, haz clic en 'New Collection' y asigna un nombre descriptivo. Las colecciones agrupan peticiones relacionadas con una misma API, facilitando la organización, documentación y ejecución de tests en lote."
  - step: 2
    title: "Configura el entorno y variables"
    description: "Define entornos (dev, staging, producción) con variables como {{base_url}} o {{api_key}}. Así cambias de entorno sin modificar cada request. Usa variables globales para tokens de autenticación."
  - step: 3
    title: "Envía peticiones y escribe tests"
    description: "Crea una petición HTTP especificando método, URL, headers y body. En la pestaña 'Tests' escribe scripts en JavaScript para validar respuestas con pm.test(), verificando status codes, tiempos de respuesta y estructura del body."
  - step: 4
    title: "Automatiza con Collection Runner"
    description: "Ejecuta todas las peticiones de una colección de forma secuencial con Collection Runner. Programa ejecuciones periódicas con Monitors para detectar regresiones en tus endpoints automáticamente."
whenToUse:
  - title: "Desarrollo y prueba de APIs REST"
    description: "Cuando necesitas probar endpoints manualmente durante el desarrollo, inspeccionar respuestas JSON, y depurar headers y códigos de estado antes de integrar con el frontend."
  - title: "Documentación de APIs para equipos"
    description: "Para generar documentación interactiva automática a partir de tus colecciones, permitiendo que otros desarrolladores exploren y prueben tu API sin escribir código."
  - title: "Automatización de tests de integración"
    description: "Cuando quieres validar que tus endpoints funcionan correctamente en cada despliegue mediante suites de tests ejecutables desde CI/CD con Newman."
examples:
  - title: "Test básico de status code"
    code: |
      pm.test("Status code is 200", () => {
          pm.response.to.have.status(200);
      });
      pm.test("Response time is acceptable", () => {
          pm.expect(pm.response.responseTime).to.be.below(500);
      });
    output: "PASS: Status code is 200\nPASS: Response time is acceptable"
  - title: "Validación de body JSON"
    code: |
      const response = pm.response.json();
      pm.test("User has required fields", () => {
          pm.expect(response).to.have.property("id");
          pm.expect(response).to.have.property("name");
          pm.expect(response.name).to.be.a("string");
      });
    output: "PASS: User has required fields"
tips:
  - text: "Usa variables de entorno para base_url, api_key y tokens; nunca hardcodees credenciales en las peticiones."
  - text: "Organiza las colecciones por recurso o módulo, usando carpetas para agrupar peticiones relacionadas (CRUD de usuarios, autenticación, etc.)."
  - text: "Ejecuta Newman en tu pipeline CI/CD para validar automáticamente que los endpoints no se rompen con cada commit."
  - text: "Documenta los parámetros y ejemplos de respuesta en la descripción de cada request para que el equipo entienda la API rápidamente."
  - text: "Usa pruebas de esquema JSON con tv4 o Ajv para validar que la estructura de las respuestas cumple el contrato esperado."
faq:
  - question: "¿Cómo ejecuto tests de Postman desde la terminal o CI/CD?"
    answer: "Usa Newman, el CLI de Postman. Instálalo con npm install -g newman y ejecuta newman run tu-coleccion.json -e entorno.json. Integra con GitHub Actions, Jenkins o cualquier CI."
  - question: "¿Qué diferencia hay entre variables de entorno y variables globales?"
    answer: "Las variables de entorno cambian según el entorno seleccionado (dev, staging, prod). Las variables globales son compartidas entre todos los entornos y persisten entre sesiones."
  - question: "¿Puedo compartir colecciones con mi equipo sin la versión de pago?"
    answer: "Sí, puedes exportar colecciones como archivos JSON y compartirlas por Git o cualquier medio. La versión de pago añade sincronización en tiempo real y workspaces colaborativos."
  - question: "¿Postman soporta GraphQL o solo REST?"
    answer: "Postman soporta GraphQL nativamente: puedes enviar queries y mutations, explorar esquemas con autocompletado y validar respuestas contra el schema de GraphQL."
publishedAt: 2026-05-31
---

## ¿Qué es?

Postman es una plataforma completa para el desarrollo y testing de APIs. Permite enviar peticiones HTTP a cualquier endpoint, inspeccionar respuestas, crear colecciones de requests reutilizables y automatizar pruebas. Es la herramienta más popular del mercado para trabajar con APIs REST.

## ¿Para qué sirve?

Postman sirve para probar APIs de forma rápida sin escribir código, documentar endpoints de manera automática, crear suites de tests automatizados, simular respuestas con mock servers y colaborar con tu equipo compartiendo colecciones de peticiones.

## Cuándo usarla

- Cuando necesitas probar endpoints REST de forma rápida e interactiva.
- Para documentar APIs de manera profesional y accesible.
- En equipos que necesitan compartir y sincronizar colecciones de requests.
- Para automatizar tests de integración de APIs con scripts JavaScript.
- Cuando trabajas con múltiples entornos (dev, staging, production).

## Cuándo NO usarla

- Si buscas una solución completamente open source y gratuita.
- Cuando necesitas una herramienta ligera y de bajo consumo de recursos.
- Si tu flujo de trabajo es exclusivamente en terminal y no necesitas GUI.
- Para proyectos donde la privacidad de datos es crítica y no puedes usar servicios en la nube.

## Pros

- Interfaz intuitiva y fácil de aprender, ideal para principiantes.
- Ecosistema extenso con integraciones, plugins y comunidad activa.
- Tests automatizados potentes con JavaScript integrado.
- Documentación automática de APIs de alta calidad.
- Colaboración en tiempo real con workspaces compartidos.

## Contras

- La versión gratuita tiene limitaciones significativas en colaboración.
- Puede ser pesado y consumir muchos recursos del sistema.
- Dependencia de servicios en la nube para funciones de equipo.
- No es open source, lo que limita la personalización.
- La interfaz puede resultar abrumadora por la cantidad de funcionalidades.
