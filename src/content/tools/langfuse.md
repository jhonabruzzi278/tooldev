---
name: Langfuse
description: >-
  Plataforma open source de observabilidad para LLM con trazas, gestión de
  prompts, evaluaciones y opción self-hosted.
category: ia
tags:
  - observability
  - llm
  - tracing
  - prompts
  - evals
officialSite: 'https://langfuse.com'
github: 'https://github.com/langfuse/langfuse'
license: MIT
pricing: freemium
openSource: true
technicalLevel: intermedio
compatibility:
  - Web
  - API
featured: false
verified: false
features:
  - Trazado detallado de llamadas a LLM y agentes
  - Gestión y versionado de prompts con despliegue por entornos
  - Evaluaciones automáticas y anotación humana
  - 'Métricas de coste, latencia y uso de tokens'
  - Edición open source self-hosted bajo licencia MIT
  - 'Integraciones con LangChain, LlamaIndex y SDKs propios'
alternatives:
  - braintrust
  - comet-opik
  - portkey
relatedTools:
  - langchain
  - openrouter
howToUse:
  - step: 1
    title: Crea un proyecto en Langfuse Cloud
    description: >-
      Regístrate en langfuse.com, crea un proyecto y copia las claves pública y
      secreta. También puedes desplegar la edición open source en tu propio
      servidor.
  - step: 2
    title: Instrumenta tu aplicación
    description: >-
      Instala el SDK de Python o JavaScript, o usa las integraciones con
      LangChain y LlamaIndex, para registrar automáticamente trazas de cada
      llamada al modelo.
  - step: 3
    title: Gestiona prompts y evalúa
    description: >-
      Centraliza tus prompts en Langfuse con versionado, analiza costes y
      latencias en el dashboard y configura evaluaciones sobre las trazas
      registradas.
whenToUse:
  - title: Observabilidad de apps LLM en producción
    description: >-
      Cuando necesitas trazas, costes y latencias de cada llamada al modelo para
      depurar y optimizar tu aplicación.
  - title: Self-hosting por privacidad o cumplimiento
    description: >-
      Cuando la normativa de tu empresa exige que los datos de trazas no salgan
      de tu propia infraestructura.
tips:
  - text: >-
      Usa el versionado de prompts para desplegar cambios de prompt sin tocar el
      código de tu aplicación.
  - text: >-
      El plan Hobby es suficiente para proyectos personales; si superas la
      retención de 30 días, valora self-hostear la edición open source.
  - text: >-
      Activa el cálculo de costes por modelo para detectar qué endpoints de tu
      app gastan más tokens.
faq:
  - question: ¿Qué incluye el plan gratuito de Langfuse?
    answer: >-
      Plan Hobby con 50.000 unidades de uso al mes y 30 días de retención;
      además, la edición open source self-hosted es gratis sin esos límites.
  - question: ¿Puedo self-hostear Langfuse?
    answer: >-
      Sí, Langfuse es open source bajo licencia MIT y se puede desplegar con
      Docker en tu propia infraestructura, manteniendo todos los datos bajo tu
      control.
  - question: ¿Con qué frameworks se integra?
    answer: >-
      Tiene SDKs para Python y JavaScript e integraciones nativas con LangChain,
      LlamaIndex, OpenAI SDK y otros frameworks populares de LLM.
publishedAt: 2026-07-21T00:00:00.000Z
screenshots:
  - /screenshots/langfuse.webp
---

## ¿Qué es?

Langfuse es una plataforma open source de observabilidad e ingeniería de prompts para aplicaciones con LLM. Ofrece trazado de llamadas, gestión y versionado de prompts, evaluaciones y métricas de coste y latencia, disponible como cloud gestionado o self-hosted.

## ¿Para qué sirve?

Sirve para entender qué hace tu aplicación de IA en producción: qué prompts se ejecutan, cuánto cuestan, cuánto tardan y con qué calidad responden, permitiendo iterar sobre prompts y modelos con datos reales.

## Cuándo usarla

- Cuando tienes una app con LLM en producción y necesitas visibilidad de trazas, costes y errores.
- Para centralizar y versionar los prompts fuera del código.
- Si valoras una solución open source self-hosteable por privacidad o cumplimiento.

## Cuándo NO usarla

- Para scripts puntuales o experimentos sin necesidad de observabilidad.
- Si buscas solo un gateway con routing entre proveedores, que no es su foco principal.

## Pros

- Open source con licencia MIT y opción self-hosted ilimitada.
- Plan Hobby gratuito suficiente para proyectos pequeños.
- Integraciones maduras con el ecosistema LLM.

## Contras

- Self-hostear exige mantener la infraestructura y sus dependencias.
- La retención de 30 días del plan gratuito puede quedarse corta para análisis históricos.
