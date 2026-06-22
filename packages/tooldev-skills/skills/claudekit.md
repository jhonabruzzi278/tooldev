---
name: claudekit
description: Librería de componentes React optimizada para construir interfaces de chat e interacción con Claude AI, con componentes de conversación y streaming. Úsala cuando el usuario mencione o pregunte sobre react, ia, claude, chat.
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
- **Official Site:** https://claudekit.dev
- **GitHub:** https://github.com/anthropics/claude-code-sdk-python
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
Ejecuta npm install claudekit @anthropic-ai/sdk para instalar la librería y el SDK oficial de Anthropic. Configura tu API key como variable de entorno ANTHROPIC_API_KEY en tu archivo .env.local.

### 2. Implementa el proveedor de conversación
Envuelve tu aplicación con el ClaudeProvider pasando la configuración del modelo (claude-3-sonnet, claude-3-opus, etc.), system prompt y opciones de streaming. Esto inicializa el contexto de conversación disponible para todos los componentes hijos.

### 3. Construye la interfaz de chat con componentes
Usa los componentes MessageList, MessageBubble e InputArea para construir la interfaz de conversación. MessageList renderiza el historial con streaming automático, y InputArea maneja la captura de texto, archivos e imágenes.

### 4. Personaliza el comportamiento con hooks
Usa hooks como useConversation, useStreaming y useClaudeResponse para construir interfaces custom más allá de los componentes predeterminados. Los hooks exponen control total sobre el estado de la conversación, envío de mensajes y manejo de respuestas parciales.

## When to Use
- **Aplicaciones de chat con Claude AI:** Cuando construyes una aplicación que necesita interfaz de conversación con Claude, como chatbots de soporte, asistentes de código, herramientas de escritura o cualquier producto que integre inteligencia artificial conversacional.
- **Prototipos rápidos de interfaces IA:** Para crear MVPs y prototipos de productos con IA conversacional sin invertir semanas en componentes de chat custom. ClaudeKit proporciona la UI lista para que te enfoques en la lógica de negocio.
- **Dashboards internos con asistente IA:** Para equipos que necesitan integrar un asistente IA dentro de herramientas internas, CRMs o paneles de administración donde los usuarios interactúan con Claude para obtener insights o realizar tareas.

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
tput: "Una interfaz de chat completa con historial de mensajes scrolleable y campo de entrada con soporte para archivos, conectada a Claude con streaming de respuestas en tiempo real."
```

## Tips
- Configura el system prompt del ClaudeProvider de forma específica para tu caso de uso; un prompt bien definido mejora dramáticamente la calidad de las respuestas en tu interfaz.
- Usa el hook useStreaming con onToken callback para implementar efectos visuales personalizados durante la generación de respuestas, como indicadores de escritura animados.
- Implementa la API route de Anthropic en el servidor (Next.js API routes o Express) y pasa el endpoint a ClaudeProvider; nunca expongas tu API key en el cliente.
- Aprovecha el componente CodeBlock incluido para renderizar código con syntax highlighting cuando Claude genera snippets en sus respuestas.

## FAQ
- **¿Necesito mi propia API key de Anthropic para usar ClaudeKit?** Sí, ClaudeKit es una librería de UI que se conecta a la API de Anthropic. Necesitas una API key de Anthropic con créditos disponibles. La librería no incluye acceso a la API de forma gratuita.
- **¿ClaudeKit funciona con modelos que no son de Anthropic?** No, está diseñado específicamente para la API de Anthropic y los modelos Claude. Si necesitas soporte multi-proveedor, considera Vercel AI SDK que soporta OpenAI, Anthropic y otros.
- **¿Cómo manejo el streaming en Next.js App Router?** Crea una API route con ReadableStream que conecte al SDK de Anthropic con streaming habilitado. ClaudeKit consume el stream automáticamente cuando apuntas el provider a tu endpoint de API.
- **¿Es seguro usar ClaudeKit en producción?** Sí, siempre que implementes la llamada a la API en el servidor. Nunca expongas tu API key de Anthropic en el código del cliente. Usa API routes, middleware de rate limiting y validación de entrada para producción.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://claudekit.dev
- **Source Code Issues:** Check the repository at https://github.com/anthropics/claude-code-sdk-python for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
