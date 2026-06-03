import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Mensaje requerido' }), { status: 400 });
    }

    const tools = await getCollection('tools');
    const toolsContext = tools.map(t => ({
      name: t.data.name,
      description: t.data.description,
      category: t.data.category,
      tags: t.data.tags,
      pricing: t.data.pricing,
      technicalLevel: t.data.technicalLevel,
      license: t.data.license,
      openSource: t.data.openSource,
      features: t.data.features,
    }));

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key no configurada' }), { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Eres un experto recomendando herramientas de desarrollo. Usa esta lista de herramientas para responder.

HERRAMIENTAS DISPONIBLES:
${JSON.stringify(toolsContext, null, 2)}

Reglas:
- Recomienda SOLO herramientas de la lista anterior.
- Responde en el mismo idioma del usuario (español o inglés).
- Si es relevante, menciona alternativas de la lista y compara.
- Mantén respuestas concisas (máximo 3 herramientas por recomendación).
- Si ninguna herramienta aplica, sugiere la más cercana y explica por qué.`,
          },
          { role: 'user', content: message },
        ],
        temperature: 0.3,
        max_tokens: 600,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: `OpenAI error: ${err}` }), { status: 502 });
    }

    const data = await response.json();
    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error interno' }), { status: 500 });
  }
};
