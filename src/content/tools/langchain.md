---
name: LangChain
description: Framework para construir aplicaciones con LLMs mediante cadenas, agentes, herramientas y memoria modular.
category: ia
tags: [llm, ai, nlp, python, javascript, agents, framework, rag]
officialSite: https://langchain.com
pricing: freemium
openSource: true
license: MIT
technicalLevel: avanzado
compatibility: ["Web", API, Python, JavaScript]
featured: false
features:
  - Cadenas (chains) modulares para orquestar prompts y LLMs
  - Agentes autónomos con acceso a herramientas externas
  - Memoria persistente para conversaciones multi-turno
  - RAG (Retrieval Augmented Generation) con múltiples fuentes
  - Integración con 100+ proveedores de LLM y embeddings
  - LangSmith para monitoreo, tracing y evaluación
  - LangServe para desplegar chains como API REST
alternatives: [llamaindex]
relatedTools: [chatgpt, hugging-face, python, next-js]
howToUse:
  - step: 1
    title: "Instalar LangChain y configurar un modelo LLM"
    description: "Instala `pip install langchain langchain-openai` y configura tu API key de OpenAI o el proveedor que prefieras. Inicializa el modelo con `ChatOpenAI(model='gpt-4')` y prueba una invocación simple para verificar la conexión."
  - step: 2
    title: "Crear cadenas (chains) modulares"
    description: "Combina prompts, modelos LLM y parsers de salida en cadenas usando el operador `|` (LCEL). Define un `ChatPromptTemplate` con variables, conéctalo al modelo y añade un `StrOutputParser` para obtener texto limpio."
  - step: 3
    title: "Añadir memoria a conversaciones"
    description: "Usa `ConversationBufferMemory` o `ConversationSummaryMemory` para mantener el contexto entre mensajes. Integra la memoria en tu chain para que el LLM recuerde interacciones anteriores y mantenga conversaciones coherentes."
  - step: 4
    title: "Construir un agente autónomo con herramientas"
    description: "Define herramientas (buscar en web, ejecutar código, consultar API) con el decorador `@tool`. Crea un agente con `create_react_agent` que decida autónomamente qué herramienta usar para resolver la tarea del usuario."
whenToUse:
  - title: "Chatbots con memoria y contexto empresarial"
    description: "Cuando necesitas un chatbot que recuerde conversaciones anteriores, consulte documentación interna de la empresa, base de conocimientos o datos de productos para dar respuestas contextualizadas y precisas."
  - title: "Sistemas RAG con datos propios"
    description: "Si tu aplicación debe responder preguntas basándose en documentos privados (PDFs, manuales, wikis internas). LangChain facilita la ingesta de documentos, generación de embeddings, almacenamiento vectorial y recuperación aumentada."
  - title: "Agentes autónomos que ejecutan tareas complejas"
    description: "Para construir agentes que investiguen en internet, ejecuten código Python, consulten APIs externas y tomen decisiones en múltiples pasos para completar una tarea, como generar reportes o analizar datos automáticamente."
examples:
  - title: "Chain simple con prompt y LLM"
    code: |
      from langchain_openai import ChatOpenAI
      from langchain_core.prompts import ChatPromptTemplate
      from langchain_core.output_parsers import StrOutputParser

      model = ChatOpenAI(model="gpt-4")
      prompt = ChatPromptTemplate.from_template(
          "Explica {concepto} en una frase sencilla."
      )
      chain = prompt | model | StrOutputParser()
      resultado = chain.invoke({"concepto": "machine learning"})
      print(resultado)
    output: "El machine learning es una rama de la inteligencia artificial que permite a las computadoras aprender patrones a partir de datos sin ser programadas explícitamente."
  - title: "Agente con herramientas personalizadas"
    code: |
      from langchain.agents import tool

      @tool
      def calcular(expresion: str) -> str:
          """Evalúa una expresión matemática simple."""
          return str(eval(expresion))

      @tool
      def buscar_clima(ciudad: str) -> str:
          """Busca el clima de una ciudad."""
          return f"En {ciudad} hace 22°C y soleado."

      herramientas = [calcular, buscar_clima]
    output: "El agente puede decidir entre usar la calculadora o buscar el clima según la pregunta del usuario, ejecutando la herramienta adecuada de forma autónoma."
tips:
  - text: "Usa LangSmith desde el inicio del proyecto para trazar cada ejecución de tus chains. Configura `LANGCHAIN_TRACING_V2=true` y podrás ver exactamente qué prompt se envió, qué respuesta se recibió y cuánto tardó cada paso."
  - text: "Elige el modelo adecuado para cada tarea. Usa GPT-4 para razonamiento complejo y GPT-3.5 o Claude Haiku para tareas simples. Esto reduce costos y latencia significativamente."
  - text: "Implementa siempre un `StrOutputParser` o un parser estructurado al final de tu chain. Sin parser, obtienes objetos `AIMessage` que son difíciles de usar directamente en la aplicación."
  - text: "Para sistemas RAG, divide los documentos en chunks pequeños (~500 tokens) con overlap (~50 tokens). Esto mejora la precisión de la búsqueda semántica y evita que el contexto exceda la ventana del modelo."
  - text: "No pongas la API key en el código. Usa variables de entorno (`os.getenv('OPENAI_API_KEY')`) o un gestor de secretos como `.env` con python-dotenv."
faq:
  - question: "¿LangChain vs LlamaIndex, cuál elegir?"
    answer: "LangChain es más general: sirve para chains, agentes, memoria y múltiples casos de uso. LlamaIndex está especializado en RAG e ingesta de datos. Puedes usar ambos juntos: LlamaIndex para la ingesta y búsqueda, LangChain para la orquestación general."
  - question: "¿LangChain Python o LangChain JavaScript?"
    answer: "El ecosistema Python es más maduro, tiene más integraciones, mejor soporte para RAG y agentes, y la comunidad es más grande. JavaScript está creciendo rápido pero aún no alcanza la paridad. Si puedes elegir, empieza con Python."
  - question: "¿Por qué mi chain es tan lenta?"
    answer: "La latencia principal viene del proveedor de LLM, no de LangChain. Sin embargo, chains con muchos pasos secuenciales acumulan latencia. Usa `RunnableParallel` para ejecutar pasos independientes simultáneamente y cachea respuestas frecuentes con `set_llm_cache`."
  - question: "¿LangChain es gratuito?"
    answer: "LangChain como framework es open source y gratuito (MIT). Los costos vienen de las APIs de LLM que uses (OpenAI, Anthropic) y de servicios opcionales como LangSmith para tracing avanzado. LangSmith tiene un plan gratuito generoso para empezar."
publishedAt: 2026-06-01
---

## ¿Qué es?

LangChain es un framework open-source que simplifica la construcción de aplicaciones con modelos de lenguaje grandes (LLMs). Proporciona cadenas, agentes, memoria, RAG y herramientas modulares para orquestar flujos complejos de IA conversacional y generativa.

## ¿Para qué sirve?

LangChain sirve para construir chatbots con contexto, sistemas RAG que consultan documentos propios, agentes autónomos que ejecutan acciones, y cualquier aplicación que combine LLMs con datos y herramientas externas.

## Cuándo usarla

- Cuando necesitas un chatbot que recuerde el contexto de la conversación.
- Para construir sistemas RAG que respondan sobre documentación propia.
- Si quieres agentes que ejecuten código, consulten APIs o busquen en web.
- Para orquestar múltiples LLMs y prompts en flujos complejos.
- Cuando necesitas monitorear y evaluar tus pipelines de IA.

## Cuándo NO usarla

- Para llamadas simples y directas a una API de LLM.
- Si solo necesitas un wrapper básico sin orquestación.
- Cuando el proyecto requiere latencia mínima (LangChain añade overhead).
- Para equipos pequeños que prefieren soluciones más simples como Vercel AI SDK.

## Pros

- Modularidad y composición de componentes.
- Soporte para 100+ modelos y proveedores.
- RAG, agentes y memoria integrados.
- LangSmith para tracing y evaluación.
- Comunidad grande y activa.

## Contras

- Curva de aprendizaje alta.
- Overhead significativo en llamadas simples.
- API cambia frecuentemente entre versiones.
- Depuración compleja en cadenas multi-paso.
- Documentación dispersa y a veces desactualizada.

## CLI

LangChain CLI (LangChain CLI) para scaffolding, plantillas y LangServe:

```bash
pip install langchain-cli            # Instalar CLI (Python)
npx langchain-cli init               # Nuevo proyecto
npx langchain-cli serve              # Servir chains como API
npx langchain-cli --help             # Ayuda general
langchain app new my-app             # Nuevo proyecto (Python)
langchain app add template-name      # Añadir plantilla
```
