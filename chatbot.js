// ============================================
// FRANK CHATBOT - SECURE ARCHITECTURE
// Connects to local secure backend (server.js)
// ============================================

// Smart API URL detection: localhost for dev, relative for production
const isLocalDev = window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.protocol === 'file:';
const API_URL = isLocalDev ? 'http://localhost:3001/chat' : '/chat';


let conversationHistory = [];
let lastBotMessage = ''; // Track last message to avoid repetition
let sessionId = 'session_' + Math.random().toString(36).substr(2, 9); // Generate random session ID

/**
 * Get random response from array, avoiding last message
 */
function getRandomResponse(responses) {
    if (responses.length === 1) return responses[0];

    let attempts = 0;
    let response;
    do {
        response = responses[Math.floor(Math.random() * responses.length)];
        attempts++;
    } while (response === lastBotMessage && attempts < 10);

    lastBotMessage = response;
    return response;
}

/**
 * Get current site language from i18n system
 */
function getSiteLanguage() {
    // 1. Priority: Check LocalStorage (PersistedUser Choice)
    const stored = localStorage.getItem('frankeas_language');
    if (stored) return stored;

    // 2. Check global i18n variable
    if (typeof currentLang !== 'undefined') {
        return currentLang;
    }

    // 3. Final fallback to browser
    return navigator.language.split('-')[0] === 'es' ? 'es' : 'en';
}


// GROQ API Configuration - Direct call without server
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// System prompt for the AI
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

CÓMO RESPONDER:
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

/**
 * Get AI Response - Direct call to Groq API
 */
async function getAIResponse(userMessage) {
    try {

        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: SYSTEM_PROMPT
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                temperature: 0.7,
                max_tokens: 300,
                top_p: 0.9
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || 'API error');
            // If the API returns an error object in the payload, throw an error.
            throw new Error('API returned an error');
        }

        const aiMessage = data.choices[0].message.content.trim();
        return aiMessage;

    } catch (error) {

        // Fallback for when API fails
        const fallback = getFallbackResponse(userMessage);
        if (fallback) {
            return fallback;
        }

        const lang = detectMessageLanguage(userMessage);
        if (lang === 'es') {
            return 'Lo siento, estoy teniendo problemas técnicos. Por favor intenta de nuevo en unos segundos 🙏';
        }
        return "Sorry, I'm having technical issues. Please try again in a few seconds 🙏";
    }
}
/**
 * Detect language from text - WITH PERSISTENCE & STICKINESS
 * Rules:
 * 1. If no history, detect primarily by keywords.
 * 2. If history exists, ONLY switch if:
 *    - New message has 3+ words (User request: "minimamente una oracion")
 *    - Strong evidence (70%+) of new language
 */
let lastDetectedLanguage = null; // Persist language across messages

function detectMessageLanguage(text) {
    const msg = text.toLowerCase();
    const words = msg.split(/\s+/).filter(w => w.length >= 2); // Words with 2+ chars
    const wordCount = words.length;

    // Language word lists
    const spanishIndicators = /hola|que|qué|como|cómo|cuanto|cuánto|precio|costo|tienes|tienen|bots|robots|puedo|quiero|necesito|ayuda|gracias|buenas|buenos|bro|amigo|funciona|sirve|cual|cuál|cuales|cuáles|mejor|dinero|pago|pagar|comprar|informacion|información|garantia|garantía|licencia|tengo|duda|pregunta|rembolso|reembolso|devolucion|devolución|descuento|descuentos|oferta|ofertas|promocion|promoción|hay|para|los|las|uno|una|son|esos|estos|esas|estas|ese|este|esa|esta|algo|quien|quién|donde|dónde|cuando|cuándo|porque|porqué|también|tambien|solo|sólo|pero|aunque|después|despues|antes|ahora|siempre|nunca|bien|mal|todo|todos|nada|mucho|poco|más|mas|menos|otro|otra|otros|otras|tenes|tenés|sos|vos|che|dale|buenisimo|buenísimo|genial|exito|éxito|^un$|^de$|^el$|^la$|^me$|^te$|^se$/;

    const englishIndicators = /hello|hi|hey|how|what|which|where|when|why|who|the|and|for|are|but|not|you|all|can|had|her|was|one|our|out|day|get|has|him|his|how|its|may|now|old|see|two|way|boy|did|own|say|she|too|use|want|need|help|price|cost|robot|trading|funded|discount|offer|guarantee|refund|payment|buy|sell/;

    // Count indicators
    let spanishCount = 0;
    let englishCount = 0;

    for (const word of words) {
        if (spanishIndicators.test(word)) spanishCount++;
        if (englishIndicators.test(word)) englishCount++;
    }

    const totalIndicators = spanishCount + englishCount;

    // INITIAL DETECTION (No history)
    if (!lastDetectedLanguage) {
        // Default to site language if no indicators found
        if (totalIndicators === 0) {
            lastDetectedLanguage = getSiteLanguage();
            return lastDetectedLanguage;
        }
        // Detect based on majority
        if (spanishCount >= englishCount) {
            lastDetectedLanguage = 'es';
            return 'es';
        } else {
            lastDetectedLanguage = 'en';
            return 'en';
        }
    }

    // PERSISTENT DETECTION (History exists)
    // Rule: Don't switch if message is too short (less than 3 words)
    // This prevents accidental switches on "Ok", "No", "Si", "Bot"
    if (wordCount < 3) {
        return lastDetectedLanguage;
    }

    // If long enough, check for strong evidence to switch
    if (totalIndicators > 0) {
        const spanishRatio = spanishCount / totalIndicators;
        const englishRatio = englishCount / totalIndicators;

        // Switching from Spanish to English
        if (lastDetectedLanguage === 'es' && englishRatio > 0.7) {
            lastDetectedLanguage = 'en';
            return 'en';
        }
        // Switching from English to Spanish
        if (lastDetectedLanguage === 'en' && spanishRatio > 0.7) {
            lastDetectedLanguage = 'es';
            return 'es';
        }
    }

    // If no strong reason to switch, keep current language
    return lastDetectedLanguage;
}

/**
 * Fuzzy word matching - understands typos and misspellings
 * Returns the likely intended word if found
 */
function fuzzyMatch(word, patterns) {
    word = word.toLowerCase();

    // Common typo corrections (Spanish)
    const typoCorrections = {
        // Tienes variations
        'tienes': ['tienes', 'tenes', 'temes', 'tiems', 'tienes', 'tiense', 'teines', 'tienees', 'tiens'],
        // Descuento variations
        'descuento': ['descuento', 'desciemto', 'descuemto', 'dscuento', 'descuemtos', 'desciemtos', 'descuentos', 'decuento', 'descuetos', 'descuentposç', 'descuemtpos', 'descuent'],
        // Precio variations
        'precio': ['precio', 'preico', 'prcio', 'prezio', 'presio', 'precoi', 'precios', 'preci'],
        // Cuanto variations
        'cuanto': ['cuanto', 'cuamto', 'quanto', 'cuantp', 'cuanot'],
        // Garantia variations
        'garantia': ['garantia', 'garantía', 'garntia', 'garatia', 'garantai', 'garantoa'],
        // Robot variations
        'robot': ['robot', 'robo', 'rboot', 'robto', 'robor', 'robos', 'robots'],
        // Bot variations
        'bot': ['bot', 'bto', 'bots', 'bost'],
        // Quiero variations
        'quiero': ['quiero', 'qiero', 'quero', 'quierp', 'querio', 'kiero'],
        // Hola variations
        'hola': ['hola', 'ola', 'holaa', 'holaaa', 'hla', 'hols', 'holsa'],
        // Challenge variations
        'challenge': ['challenge', 'challege', 'chalenge', 'challange', 'chllenge', 'challeng', 'chalenges'],
        // Fondeo variations
        'fondeo': ['fondeo', 'fonedo', 'fonde', 'fondoe', 'fondo'],
        // Comprar variations
        'comprar': ['comprar', 'compra', 'comrpar', 'conprar', 'comprasr', 'conpar'],
        // Pagar variations
        'pagar': ['pagar', 'pagr', 'paga', 'paagr', 'pago', 'pagos'],
        // Reembolso variations
        'reembolso': ['reembolso', 'rembolso', 'reimbolso', 'rrembolso', 'rembolsoo', 'reembols'],
        // Ayuda variations
        'ayuda': ['ayuda', 'auida', 'ayda', 'ayudaa'],
        // Zafiro variations
        'zafiro': ['zafiro', 'safiro', 'zafro', 'zafrio', 'safir', 'zafir'],
        // Emerald variations
        'emerald': ['emerald', 'emeralda', 'esmeralda', 'emeralt', 'emeral'],
        // Diamond variations
        'diamond': ['diamond', 'diamante', 'diamon', 'diamont', 'daimond'],
        // Funciona variations
        'funciona': ['funciona', 'fumciona', 'funcioan', 'funcionan', 'funcion'],
        // Resultados variations
        'resultado': ['resultado', 'resultados', 'resulatdo', 'resultdo', 'resulados'],
        // GANAR/PROFIT variations
        'ganar': ['ganar', 'fanar', 'ganr', 'gananr', 'ganaar', 'gana', 'ganas', 'gane'],
        // RAPIDO variations
        'rapido': ['rapido', 'rápido', 'rapidp', 'rapdio', 'rapdi', 'rapiod', 'rapid'],
        // METODO variations
        'metodo': ['metodo', 'método', 'medops', 'metodo', 'metdo', 'metodos', 'métodos', 'm,edops'],
        // PAGO variations  
        'pago': ['pago', 'pagos', 'paog', 'pagp', 'paago'],
        // AHORA variations
        'ahora': ['ahora', 'ahor', 'ahoa', 'ahroa', 'aora'],
        // PASAR variations
        'pasar': ['pasar', 'psar', 'pasra', 'pasaar', 'passar'],
        // RECOMENDAR variations
        'recomiendas': ['recomiendas', 'recomendas', 'recomienda', 'recomiemda', 'recomendar', 'recomienads'],
        // MAS variations
        'mas': ['mas', 'más', 'maas', 'msa']
    };

    for (const [correctWord, variations] of Object.entries(typoCorrections)) {
        if (variations.includes(word)) {
            return correctWord;
        }
        // Check for similar words (allowing 1-2 character difference)
        for (const variant of variations) {
            if (levenshteinDistance(word, variant) <= 2 && word.length >= 3) {
                return correctWord;
            }
        }
    }

    // Check against patterns directly with fuzzy tolerance
    for (const pattern of patterns) {
        if (levenshteinDistance(word, pattern) <= 2 && word.length >= 3) {
            return pattern;
        }
    }

    return null;
}

/**
 * Levenshtein Distance - measures similarity between words
 */
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

/**
 * Normalize message - correct typos before processing
 */
function normalizeMessage(text) {
    const words = text.toLowerCase().split(/\s+/);
    const keyPatterns = ['tienes', 'descuento', 'precio', 'cuanto', 'garantia', 'robot', 'bot', 'quiero', 'hola', 'challenge', 'fondeo', 'comprar', 'pagar', 'reembolso', 'ayuda', 'zafiro', 'emerald', 'diamond', 'funciona', 'resultado', 'oferta'];

    const normalizedWords = words.map(word => {
        // EXCEPTION: Don't fuzzy match common short words to avoid false positives
        // "hay" -> hola, "pasa" -> pagar, "que" -> quiero, "si" -> si
        if (['hay', 'que', 'pasa', 'como', 'si', 'no', 'y', 'el', 'la', 'los', 'les'].includes(word)) return word;

        const corrected = fuzzyMatch(word, keyPatterns);
        return corrected || word;
    });

    return normalizedWords.join(' ');
}
/**
 * Fallback responses - Uses comprehensive pattern database
 * Now supports ES, EN, PT, FR with 5000+ pattern combinations
 */
function getFallbackResponse(userMessage) {
    // Normalize message to fix typos first
    const normalizedMsg = normalizeMessage(userMessage);
    const lang = detectMessageLanguage(userMessage);

    // Use the comprehensive pattern matching engine if available
    if (typeof matchPatterns === 'function') {
        return matchPatterns(normalizedMsg, lang);
    }

    // Legacy inline fallback if pattern file not loaded
    const msg = normalizedMsg.toLowerCase();

    // SPANISH FALLBACK
    if (lang === 'es') {
        // ONLY handle basic greetings - everything else goes to AI
        if (/^(hola+|buenas?|buenos?|hey+|que\s*tal)$/i.test(msg)) {
            return '¡Hola! 👋 ¿En qué te puedo ayudar?';
        }
        // Default - let AI handle everything else
        return null;
    }

    // ENGLISH FALLBACK - Only basic greetings
    if (lang === 'en') {
        if (/^(hi+|hello+|hey+)$/i.test(msg)) {
            return "Hi! 👋 How can I help you?";
        }
        return null; // Let AI handle everything else
    }

    // PORTUGUESE FALLBACK - Only basic greetings
    if (lang === 'pt') {
        if (/^(oi+|ol[aá]+)$/i.test(msg)) {
            return "Oi! 👋 Como posso ajudar?";
        }
        return null;
    }

    // FRENCH FALLBACK - Only basic greetings
    if (lang === 'fr') {
        if (/^(bonjour|salut|coucou)$/i.test(msg)) {
            return "Bonjour! 👋 Comment puis-je vous aider?";
        }
        return null;
    }

    // If language not detected or no greeting, let AI handle it
    return null;
}

// ============================================
// UI FUNCTIONS
// ============================================

function initChatbot() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWin = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatExpand = document.getElementById('chatExpand');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    if (!chatToggle || !chatWin) return;

    let isExpanded = false;

    // Toggle chat window
    chatToggle.onclick = () => {
        chatWin.classList.toggle('active');
        if (chatWin.classList.contains('active')) {
            setTimeout(() => chatInput.focus(), 100);
        }
    };

    // Close chat
    chatClose.onclick = () => chatWin.classList.remove('active');

    // Expand chat
    if (chatExpand) {
        chatExpand.onclick = () => {
            isExpanded = !isExpanded;
            chatWin.classList.toggle('expanded', isExpanded);
            chatExpand.textContent = isExpanded ? '⤡' : '⤢';
        };
    }

    // Robot image paths
    const ROBOT_IMAGES = {
        zafiro: './LOGOS ORIGINALES/ZAFIRO.webp',
        emerald: './LOGOS ORIGINALES/EMERALD.webp',
        diamond: './LOGOS ORIGINALES/DIAMOND.webp'
    };

    // Add message to chat with robot image support
    function addMessage(text, type) {
        const div = document.createElement('div');
        div.className = `chat-msg ${type}`;

        // Format text: convert markdown bold and newlines
        let formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\n/g, '<br>');

        // Replace robot names with inline images (only for bot messages)
        if (type === 'bot') {
            // Step 1: Remove ONLY robot-color emojis (using Unicode escapes for safety)
            // Matches: 🔮 🟣 💚 🟢 💎 💠 🔵
            formatted = formatted.replace(/[\u{1F52E}\u{1F7E3}\u{1F49A}\u{1F7E2}\u{1F48E}\u{1F4A0}\u{1F535}]/gu, '');

            // Step 2: Replace robot names with images (handles any format)
            formatted = formatted
                .replace(/\b(ZAFIRO|Zafiro)\b(\s*EA)?/gi,
                    `<img src="${ROBOT_IMAGES.zafiro}" class="chat-robot-img" alt="Zafiro"><b>ZAFIRO</b>`)
                .replace(/\b(EMERALD|Emerald)\b(\s*EA)?/gi,
                    `<img src="${ROBOT_IMAGES.emerald}" class="chat-robot-img" alt="Emerald"><b>EMERALD</b>`)
                .replace(/\b(DIAMOND|Diamond)\b(\s*EA)?/gi,
                    `<img src="${ROBOT_IMAGES.diamond}" class="chat-robot-img" alt="Diamond"><b>DIAMOND</b>`);
        }

        div.innerHTML = `<div class="msg-bubble">${formatted}</div>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Process user message
    async function processUserMessage(text) {
        if (!text.trim()) return;

        // Capitalize first letter
        const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

        addMessage(capitalizedText, 'user');
        chatInput.value = '';

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-msg bot typing';
        typingDiv.innerHTML = '<div class="msg-bubble">...</div>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Get AI response - AI detects language from user message
        const response = await getAIResponse(capitalizedText);

        // Remove typing indicator
        typingDiv.remove();

        // Add response
        addMessage(response, 'bot');
    }

    // Send button
    chatSend.onclick = () => processUserMessage(chatInput.value);

    // Enter key
    chatInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            processUserMessage(chatInput.value);
        }
    };

    // Welcome message in site language
    setTimeout(() => {
        const lang = getSiteLanguage();
        const welcome = lang === 'es'
            ? "¡Hola! Soy Frank 👋 ¿En qué puedo ayudarte?"
            : "Hello! I'm Frank 👋 How can I help you?";
        addMessage(welcome, 'bot');
    }, 500);
}

// Escape to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    }
});

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
