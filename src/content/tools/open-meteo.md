---
name: Open-Meteo
description: >-
  Pronósticos globales e históricos del tiempo mediante una API JSON gratis sin
  API key.
category: apis
tags:
  - weather
  - api
  - forecast
  - open-data
  - json
officialSite: 'https://open-meteo.com'
github: 'https://github.com/open-meteo/open-meteo'
pricing: freemium
openSource: true
technicalLevel: principiante
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Pronóstico horario y diario global
  - Datos históricos y archivo meteorológico desde 1940
  - Sin API key para uso no comercial
  - Modelos meteorológicos nacionales de alta resolución
  - 'Variables de temperatura, lluvia, viento y calidad del aire'
  - API JSON con parámetros por coordenadas
alternatives: []
relatedTools:
  - postman
howToUse:
  - step: 1
    title: Construye la URL con coordenadas
    description: >-
      La API no pide registro para uso no comercial: indica latitude y longitude
      en la URL de api.open-meteo.com y elige las variables horarias o diarias
      que necesitas.
  - step: 2
    title: Selecciona variables y modelo
    description: >-
      Añade parámetros como hourly=temperature_2m,precipitation o
      daily=temperature_2m_max. Puedes elegir modelos específicos y unidades
      métricas o imperiales.
  - step: 3
    title: Consume el JSON en tu app
    description: >-
      Haz fetch a la URL generada y procesa el JSON: los datos vienen alineados
      por franjas horarias listas para pintar en gráficas o widgets.
whenToUse:
  - title: Widgets y apps del tiempo sin coste
    description: >-
      Cuando quieres mostrar previsión meteorológica en una web o app sin pagar
      API ni gestionar claves, con cuotas gratuitas muy generosas.
  - title: Análisis con datos históricos
    description: >-
      Para estudios, dashboards o proyectos de datos que necesitan series
      históricas de temperatura, lluvia o viento de cualquier punto del planeta.
examples:
  - title: Previsión horaria de temperatura
    code: |
      const url = 'https://api.open-meteo.com/v1/forecast'
        + '?latitude=40.4168&longitude=-3.7038'
        + '&hourly=temperature_2m&forecast_days=2'

      const data = await fetch(url).then(r => r.json())
      console.log(data.hourly.time[0], data.hourly.temperature_2m[0])
    output: >-
      Devuelve las horas y temperaturas previstas para Madrid en formato JSON,
      sin API key.
tips:
  - text: >-
      Usa el parámetro timezone=auto para recibir las horas ya ajustadas a la
      zona horaria de las coordenadas.
  - text: >-
      Para dashboards, pide solo las variables que pintas: menos datos por
      llamada y respuestas más rápidas.
  - text: >-
      Si tu uso es comercial, revisa la licencia: el acceso abierto sin clave es
      para uso no comercial.
faq:
  - question: ¿Qué incluye el plan gratuito de Open-Meteo?
    answer: >-
      El acceso abierto sin registro ni clave para uso no comercial permite 600
      llamadas por minuto, 5.000 por hora, 10.000 al día y 300.000 al mes.
  - question: ¿De verdad no necesito API key?
    answer: >-
      Sí, para uso no comercial la API funciona sin registro ni clave. Los
      planes de pago añaden clave, más cuota y soporte para uso comercial.
  - question: ¿Qué datos históricos ofrece?
    answer: >-
      Open-Meteo incluye un archivo histórico con datos meteorológicos desde
      1940, accesible con la misma filosofía de API abierta por coordenadas.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/open-meteo.webp
---

## ¿Qué es?

Open-Meteo es una API meteorológica open source que ofrece pronósticos globales, datos históricos y variables como temperatura, lluvia, viento o calidad del aire en JSON, sin API key para uso no comercial.

## ¿Para qué sirve?

Sirve para integrar previsión del tiempo en webs y apps, alimentar dashboards y widgets, y realizar análisis con series históricas, todo con una API simple basada en coordenadas geográficas.

## Cuándo usarla

- Cuando necesitas datos del tiempo gratis y sin registro.
- Para proyectos educativos, personales y de open data.
- Si quieres históricos meteorológicos sin pagar licencias.

## Cuándo NO usarla

- Si tu producto es comercial y no quieres pagar el plan correspondiente.
- Cuando necesitas datos de radar en tiempo real o alertas oficiales.
- Si requieres un SLA empresarial en el plan gratuito.

## Pros

- Sin API key ni registro para uso no comercial.
- Cuotas gratuitas muy generosas.
- Open source con datos abiertos.
- Histórico desde 1940 incluido.

## Contras

- Uso comercial restringido en el acceso abierto.
- Sin imágenes de radar ni mapas, solo datos.
- La precisión depende del modelo disponible en cada zona.
