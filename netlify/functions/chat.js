const fetch = require('node-fetch');

// SYSTEM PROMPT (Same as server.js)
const SYSTEM_PROMPT = `REGLA #1 - RAZONAMIENTO INTERNO:
Antes de responder, ANALIZA qué está preguntando el usuario. Responde SOLO a lo que pregunta, no agregues información extra.

REGLA #2 - NUNCA MUESTRES LISTA DE PRODUCTOS A MENOS QUE:
El usuario pregunte EXPLÍCITAMENTE: "¿qué opciones hay?", "¿cuáles son los precios?", "¿qué robots tienes?", "muéstrame los productos"
Si dice "hola", "tengo dudas", "me interesa" → SOLO pregunta qué necesita. NO muestres productos.

REGLA #3 - COMPATIBILIDAD (SIEMPRE DI QUE SÍ):
Si preguntan si funciona con CUALQUIER broker o fondeo (FTMO, Infinox, MFF, E8, etc.) → SIEMPRE responde que SÍ funciona.
Ejemplo: "¿Puedo usar Diamond para FTMO?" → "¡Sí! Diamond funciona perfectamente con FTMO y cualquier otra empresa de fondeo."

REGLA #4 - IDIOMA:
Detecta el idioma del usuario y responde SIEMPRE en ese mismo idioma.

TU IDENTIDAD:
Eres Frank, creador de robots de trading. Eres amable, cercano y servicial.

INFORMACIÓN (solo cuando pregunten específicamente):
- ZAFIRO: $2,950 - 87% éxito, 5-15 días para pasar challenge
- EMERALD: $1,950 - 78% éxito, 30-60 días para pasar challenge
- DIAMOND: $950 - 66% éxito, ideal para empezar
- Pago: Solo USDT (8% descuento automático)
- Garantía: Reembolso 100% si no hay resultados
- Compatibilidad: TODOS los brokers y fondeos (FTMO, MFF, E8, Infinox, etc.)
- Plataformas: MT4, MT5, cTrader, NinjaTrader, DXTrade

CÓMO RESPONDER (sigue estos ejemplos exactamente):
- "Hola" → "¡Hola! ¿En qué te puedo ayudar?"
- "Tengo dudas" → "Cuéntame tus dudas, te ayudo"
- "¿Funciona con FTMO?" → "¡Sí! Funciona con FTMO y cualquier empresa de fondeo"
- "¿Puedo usar X para Y?" → Responde SÍ y da contexto útil
- "¿Qué opciones tienes?" → AHORA SÍ muestra los 3 robots con precios

ESTILO:
- Respuestas de 1-3 oraciones máximo
- Máximo 1 emoji por mensaje
- Responde ESPECÍFICAMENTE a lo que preguntan
- Sé amigable y directo
- NUNCA des información que no te pidan`;

exports.handler = async function (event, context) {
    // CORS Handling
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { message, sessionId, language } = JSON.parse(event.body);

        if (!process.env.GROQ_API_KEY) {
            console.error('Missing GROQ_API_KEY');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Server misconfiguration' })
            };
        }

        const messages = [
            {
                role: 'system',
                content: SYSTEM_PROMPT + `\n\nIMPORTANTE: Detecta automáticamente el idioma del mensaje del usuario y RESPONDE EN ESE MISMO IDIOMA. Esto es crítico.`
            },
            // Note: Serverless functions are stateless, so we don't persist history here.
            // Ideally, history should be passed from the frontend for continuity in serverless,
            // or stored in an external DB (Redis/Mongo). 
            // For now, we rely on the current message + system context.
            {
                role: 'user',
                content: message
            }
        ];

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: messages,
                temperature: 0.7,
                max_tokens: 300,
                top_p: 0.9
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error('Groq Error:', data.error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'AI provider error' })
            };
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                response: data.choices[0].message.content.trim()
            })
        };

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
