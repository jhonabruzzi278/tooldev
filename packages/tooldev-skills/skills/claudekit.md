---
name: claudekit
description: >- Úsala cuando el usuario mencione o pregunte sobre react, ia, claude, chat.
---

# ClaudeKit

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** open-source
- **License:** MIT
- **Technical Level:** avanzado
- **Compatibility:** React, Next.js, TypeScript, Node.js
- **Official Site:** https://github.com/claudekit
- **GitHub:** https://github.com/claudekit
- **Alternatives:** vercel-ai-sdk, langchain-js

## Features
- Componentes de chat optimizados para interacción con Claude AI
- Soporte nativo para streaming de respuestas en tiempo real
- Renderizado de markdown con syntax highlighting en respuestas
- Componentes de entrada con soporte multimodal (texto, imágenes, archivos)
- Gestión de estado de conversación con hooks dedicados
- Tematización flexible con CSS variables y dark mode
- TypeScript-first con tipos completos para la API de Anthropic
- Manejo de errores y estados de carga integrados

## Steps
### 1. Instala ClaudeKit y configura la API key
>-

### 2. Implementa el proveedor de conversación
>-

### 3. Construye la interfaz de chat con componentes
>-

### 4. Personaliza el comportamiento con hooks
>-

## When to Use
- **Aplicaciones de chat con Claude AI:** >-
- **Prototipos rápidos de interfaces IA:** >-
- **Dashboards internos con asistente IA:** >-

## Examples
### Chat básico con streaming de respuestas
```
import { ClaudeProvider, MessageList, InputArea } from 'claudekit';
export function ChatAssistant() {
  return (
    <ClaudeProvider
      model="claude-sonnet-4-20250514"
      systemPrompt="Eres un asistente de programación experto."
    >
      <div className="flex flex-col h-screen">
        <MessageList className="flex-1 overflow-y-auto p-4" />
        <InputArea
          placeholder="Pregunta algo sobre código..."
          enableFileUpload
          className="border-t p-4"
        />
      </div>
    </ClaudeProvider>
  );
}
tput: >-
Una interfaz de chat completa con historial de mensajes scrolleable y
campo de entrada con soporte para archivos, conectada a Claude con
streaming de respuestas en tiempo real.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Necesito mi propia API key de Anthropic para usar ClaudeKit?** >-
- **¿ClaudeKit funciona con modelos que no son de Anthropic?** >-
- **¿Cómo manejo el streaming en Next.js App Router?** >-
- **¿Es seguro usar ClaudeKit en producción?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://github.com/claudekit
- **Source Code Issues:** Check the repository at https://github.com/claudekit for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
