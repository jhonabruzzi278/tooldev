---
name: fireworks-ai
description: >- Úsala cuando el usuario mencione o pregunte sobre inferencia, llm, api, modelos.
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
- **Official Site:** https://fireworks.ai/
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
>-

### 2. Selecciona un modelo y envía tu primera request
>-

### 3. Escala a producción con rate limits y monitoreo
>-

### 4. Fine-tune un modelo con datos propios (opcional)
>-

## When to Use
- **Aplicaciones que requieren baja latencia en inferencia LLM:** >-
- **Migración desde OpenAI manteniendo compatibilidad de API:** >-
- **Inferencia de modelos open-source sin gestionar GPU:** >-

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
tput: >-
Respuesta generada por Llama 3.1 70B con latencia típica de 200-400ms para
el primer token, significativamente más rápido que ejecutar el modelo
localmente o en plataformas de inferencia estándar.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Qué tan rápido es Fireworks AI comparado con OpenAI?** >-
- **¿Puedo usar el SDK de OpenAI directamente con Fireworks?** >-
- **¿Qué modelos están disponibles en Fireworks AI?** >-
- **¿Fireworks AI es adecuado para producción?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://fireworks.ai/
- **Source Code Issues:** Check the repository at https://github.com/fw-ai for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
