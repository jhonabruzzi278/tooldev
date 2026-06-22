---
name: fireworks-ai
description: Plataforma de inferencia rápida para ejecutar modelos LLM open-source y modelos generativos de IA con latencia ultra baja y APIs compatibles con OpenAI. Úsala cuando el usuario mencione o pregunte sobre inferencia, llm, api, modelos.
---

# Fireworks AI

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.

## Key Information
- **Category:** ia
- **Pricing:** freemium
- **Technical Level:** avanzado
- **Compatibility:** Web, Linux, macOS, Windows
- **Official Site:** https://fireworks.ai
- **GitHub:** https://github.com/fw-ai

## Features
- Inferencia ultra rápida con latencia sub-segundo para LLMs
- API compatible con el formato de OpenAI para migración sencilla
- Soporte para modelos open-source populares (Llama, Mixtral, Gemma)
- Fine-tuning personalizado de modelos con datos propios
- Escalado automático según demanda sin gestión de infraestructura
- Modelos de generación de imágenes y embeddings disponibles

## Steps
### 1. Obtén tu API key y configura el cliente
Regístrate en Fireworks AI, genera una API key desde el dashboard. Instala el SDK de OpenAI o usa fetch/curl directo, ya que la API es compatible con el formato de OpenAI, cambiando solo la base URL.

### 2. Selecciona un modelo y envía tu primera request
Elige un modelo del catálogo (ej: accounts/fireworks/models/llama-v3p1-70b-instruct). Envía una request de chat completion con tu prompt. La respuesta llegará con latencia significativamente menor que alternativas.

### 3. Escala a producción con rate limits y monitoreo
Configura rate limits apropiados para tu caso de uso, activa el monitoreo de uso desde el dashboard, y ajusta los parámetros del modelo (temperatura, max_tokens) para optimizar calidad vs velocidad en producción.

### 4. Fine-tune un modelo con datos propios (opcional)
Sube un dataset en formato JSONL, configura los hiperparámetros de entrenamiento, y lanza un job de fine-tuning. El modelo resultante se despliega automáticamente con el mismo endpoint de inferencia rápida.

## When to Use
- **Aplicaciones que requieren baja latencia en inferencia LLM:** Cuando tu aplicación necesita respuestas de modelos de lenguaje en milisegundos, como chatbots en tiempo real, autocompletado, o procesamiento de texto interactivo donde cada milisegundo impacta la experiencia del usuario.
- **Migración desde OpenAI manteniendo compatibilidad de API:** Cuando quieres usar modelos open-source (Llama, Mixtral) sin reescribir tu código. La compatibilidad de API de Fireworks permite cambiar solo la URL base y la API key manteniendo el mismo cliente.
- **Inferencia de modelos open-source sin gestionar GPU:** Cuando necesitas ejecutar modelos grandes (70B+ parámetros) en producción pero no quieres gestionar infraestructura GPU propia ni lidiar con la complejidad de CUDA, drivers y escalado.

## Examples
### Chat completion con modelo Llama usando SDK OpenAI
```
import OpenAI from 'openai';
const client = new OpenAI({
  apiKey: process.env.FIREWORKS_API_KEY,
  baseURL: 'https://api.fireworks.ai/inference/v1',
});
const response = await client.chat.completions.create({
  model: 'accounts/fireworks/models/llama-v3p1-70b-instruct',
  messages: [
    { role: 'system', content: 'Eres un asistente útil.' },
    { role: 'user', content: '¿Qué es WebAssembly?' }
  ],
  max_tokens: 500,
  temperature: 0.7,
});
console.log(response.choices[0].message.content);
tput: "Respuesta generada por Llama 3.1 70B con latencia típica de 200-400ms para el primer token, significativamente más rápido que ejecutar el modelo localmente o en plataformas de inferencia estándar."
```

## Tips
- Usa el formato de API de OpenAI para facilitar la migración entre proveedores y mantener tu código portable entre Fireworks, OpenAI y otros servicios compatibles.
- Comienza con modelos más pequeños (8B) para desarrollo y pruebas, y escala a modelos más grandes (70B+) solo cuando necesites mayor calidad en producción.
- Aprovecha el streaming de respuestas para mejorar la experiencia de usuario percibida, mostrando tokens conforme se generan en lugar de esperar la respuesta completa.
- Monitorea el uso de tokens desde el dashboard para optimizar costos y detectar requests ineficientes que podrían reducirse con mejores prompts.

## FAQ
- **¿Qué tan rápido es Fireworks AI comparado con OpenAI?** Fireworks AI está optimizado para latencia y throughput. Para modelos open-source equivalentes, típicamente ofrece 2-5x menor latencia en time-to-first-token y mayor throughput de tokens por segundo que ejecutar los mismos modelos en infraestructura propia.
- **¿Puedo usar el SDK de OpenAI directamente con Fireworks?** Sí, la API es compatible con el formato de OpenAI. Solo necesitas cambiar la baseURL a 'https://api.fireworks.ai/inference/v1' y usar tu API key de Fireworks. El resto del código funciona sin cambios.
- **¿Qué modelos están disponibles en Fireworks AI?** Fireworks ofrece una amplia selección de modelos open-source incluyendo Llama 3.1 (8B, 70B, 405B), Mixtral, Gemma 2, y modelos especializados para código, embeddings y generación de imágenes. El catálogo se actualiza regularmente con nuevos modelos.
- **¿Fireworks AI es adecuado para producción?** Sí, está diseñado para cargas de trabajo de producción con SLAs de disponibilidad, escalado automático, rate limiting configurable y monitoreo integrado. Muchas empresas lo usan como backend de inferencia para aplicaciones con millones de usuarios.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://fireworks.ai
- **Source Code Issues:** Check the repository at https://github.com/fw-ai for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
