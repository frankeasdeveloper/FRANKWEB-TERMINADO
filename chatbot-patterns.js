// ============================================
// FRANK CHATBOT - MEGA PATTERN DATABASE
// 4 Languages | 25+ Categories | 5000+ Pattern Combinations
// Uses smart regex grouping for maximum coverage
// ============================================

const PATTERNS = {
    // ==========================================
    // SPANISH PATTERNS (ES)
    // ==========================================
    es: {
        // GREETINGS (500+ variations via regex)
        greetings: {
            patterns: [
                /^(hola+|buenas?|buenos?|hey+|ey+|epa+|wena+|ola+|holaa+|saludos?|buen\s*d[ií]a|buenas?\s*tardes?|buenas?\s*noches?|que\s*tal|qu[eé]\s*tal|como\s*est[aá]s?|c[oó]mo\s*and[aá]s?|que\s*onda|qu[eé]\s*hay|alo+|al[oó]+|oye+|holis+|holitas?|muy\s*buenas?|qu[eé]\s*hubo|quiubo|kiubo|qiubo|wenas?|nas|buenass+|saludoss+|klk|dimelo|d[ií]melo|dime|sup|yo+|yoo+|holi|holis|holiwis|holu|ke\s*ase|keace|k\s*ase|hey\s*bro|hola\s*bro|buenas\s*bro|wenas\s*bro|q\s*tal|ktal|qtal|k\s*onda|konda)[?!]?(\s|$)/i,
                /^(hi+|hello+|hey+|howdy|greetings?|good\s*(morning|afternoon|evening|day)|what'?s?\s*up|sup+|yo+|heya+|hiya+|wassup|wazzup|whatsup|how\s*are\s*you)[?!]?(\s|$)/i,
                /^(oi+|ol[aá]+|bom\s*dia|boa\s*tarde|boa\s*noite|tudo\s*bem|e\s*a[ií]|fala+|salve+|eae+)[?!]?(\s|$)/i,
                /^(bonjour|salut|coucou|bonsoir|cc|slt|bjr|hello|ciao|ça\s*va)[?!]?(\s|$)/i
            ],
            responses: [
                '¡Hey, qué tal! \u{1F44B} Soy Frank, el desarrollador de los robots de trading. ¿En qué te puedo ayudar hoy?',
                '¡Hola! \u{1F44B} ¿Cómo estás? Soy Frank. ¿Buscas información sobre robots de trading?',
                '¡Buenas! \u{1F44B} Soy Frank, creador de ZAFIRO, EMERALD y DIAMOND. ¿Qué te gustaría saber?',
                '¡Qué tal! \u{1F44B} Me alegra que escribas. Soy Frank. ¿En qué puedo ayudarte?'
            ]
        },

        // PRODUCTS/BOTS (1000+ variations)
        products: {
            patterns: [
                /(?:qu[eé]|cuales|cu[aá]les|cuantos|cu[aá]ntos|tienes?|ten[ée]s|tienen|hay|existe|ofreces?|vendes?|muestrame|mu[ée]strame|dame|dime|info|informaci[oó]n|lista|cat[áa]logo)\s*(?:de\s*)?(?:bots?|robots?|eas?|productos?|opciones?|alternativas?)/i,
                /(?:bots?|robots?|eas?|productos?)\s*(?:que\s*)?(?:tienes?|ten[ée]s|tienen|hay|vendes?|ofreces?)/i,
                /(?:bots?|robots?|eas?)\s+(?:tienes|tenes|ten[ée]s)/i,
                /(?:tienes|tenes|ten[ée]s)\s+(?:bots?|robots?|eas?)/i,
                /^(?:bots?|robots?|eas?|productos?)$/i,
                /(?:qu[eé])\s+(?:bots?|robots?|eas?)\s+(?:tienes|tenes|hay)/i,
                /(?:trading|forex|automatico|autom[áa]tico|algoritmico|algor[íí]tmico)/i,
                /(?:quiero|necesito|busco|ocupo|me\s*interesa|interesado)\s*(?:un|uno|alg[uú]n)?\s*(?:bot|robot|ea)/i,
                /(?:tell|show|give)\s*(?:me)?\s*(?:about|info|information)?\s*(?:the|your)?\s*(?:bots?|robots?|eas?|products?)/i,
                /(?:what|which)\s*(?:bots?|robots?|eas?|products?)\s*(?:do\s*you\s*have|available|offer)/i,
                /(?:quais?|quant[oa]s?|tem|voc[eê]\s*tem|existe|oferece)\s*(?:rob[oô]s?|bots?|eas?)/i,
                /(?:quel|quels|combien)\s*(?:de)?\s*(?:robots?|bots?)/i
            ],
            responses: [
                '¡Claro que sí! Tengo 3 robots de trading:\n\n\u{1F52E} **ZAFIRO** - El más potente, 93.8% de éxito\n\n\u{1F49A} **EMERALD** - El equilibrado, 75% de éxito\n\n\u{1F48E} **DIAMOND** - El económico, ideal para empezar\n\n¿Cuál te llama más la atención?',
                '¡Por supuesto! Tengo 3 EAs:\n\n\u{1F52E} ZAFIRO ($2,950) - 93.8% win rate\n\n\u{1F49A} EMERALD ($1,950) - 75% win rate\n\n\u{1F48E} DIAMOND ($950) - Perfecto para iniciar\n\n¿Cuál te interesa?',
                '¡Sí, claro! Trabajo con 3 robots:\n\n\u{1F52E} ZAFIRO - El top\n\n\u{1F49A} EMERALD - Equilibrado\n\n\u{1F48E} DIAMOND - Económico\n\n¿Cuál quieres saber más?'
            ]
        },

        // PRICES (800+ variations) - SPECIFIC patterns to avoid matching time queries
        prices: {
            patterns: [
                // Explicit price words
                /(?:precio|precios|costo|costos|vale|valen|cuesta|cuestan|valor|valores|tarifa|inversi[oó]n|inversion)/i,
                // "Cuanto" followed by price-related words (NOT tiempo/dias)
                /(?:cu[aá]nto|cuanto)\s*(?:sale|cuesta|vale|es|son|cobras?|cost)/i,
                // "Que precio" or "a cuanto"
                /(?:qu[eé]|a)\s*(?:precio|precios|cu[aá]nto|cuanto)/i,
                /(?:precio|costo|valor)\s*(?:de|del)?\s*(?:zafiro|emerald|diamond|bot|robot|ea)/i,
                /(?:a|de)\s*(?:cu[aá]nto|cuanto)\s*(?:est[aá]|esta|sale|vende)/i,
                /(?:how\s*much|price|prices|cost|costs|pricing|rate|rates|fee|fees)/i,
                /(?:quanto|pre[çc]o|pre[çc]os|custo|custos)/i,
                /(?:combien|prix|co[uû]t|tarif)/i,
                /\$|usd|dolares?|d[oó]lares?/i
            ],
            responses: [
                '¡Por supuesto! Los precios son:\n\n🔮 ZAFIRO: $2,950\n\n💚 EMERALD: $1,950\n\n💎 DIAMOND: $950\n\n¡8% de descuento pagando con USDT! Licencia de por vida incluida. ¿Te interesa alguno?',
                'Claro, te cuento los precios:\n\n🔮 ZAFIRO - $2,950 (el top)\n\n💚 EMERALD - $1,950 (el equilibrado)\n\n💎 DIAMOND - $950 (el económico)\n\nTodos con licencia de por vida. 8% OFF con cripto. ¿Cuál te llama?'
            ]
        },

        // PROP FIRM RECOMMENDATIONS (NEW - Must be BEFORE challenges)
        propFirmRecs: {
            patterns: [
                /(?:qu[eé]|cual|cuales|cu[aá]l|cu[aá]les)\s*(?:empresas?|prop\s*firms?|compa[ñn][ií]as?|plataformas?)\s*(?:de\s*)?(?:fondeo|funding)/i,
                /(?:empresas?|prop\s*firms?|compa[ñn][ií]as?)\s*(?:de\s*)?(?:fondeo|funding)\s*(?:recomiendas?|sugieres?|usar)/i,
                /(?:recomiendas?|sugieres?|aconsejas?)\s*(?:alguna|una|cual)?\s*(?:empresa|prop\s*firm|compa[ñn][ií]a)/i,
                /(?:donde|d[oó]nde|en\s*qu[eé])\s*(?:prop\s*firm|empresa|plataforma)\s*(?:puedo|debo|usar)/i,
                /(?:which|what)\s*(?:prop\s*firms?|companies?|platforms?)\s*(?:do\s*you\s*recommend|should\s*i\s*use)/i,
                /(?:best|good)\s*(?:prop\s*firms?|funding\s*companies?)/i
            ],
            responses: [
                '¡Buena pregunta! \u{1F3E2} Las prop firms que recomiendo son:\n\n\u{1F947} **FTMO** - La más conocida y confiable\n\u{1F948} **MyForexFunds (MFF)** - Reglas flexibles, popular\n\u{1F949} **The Funded Trader** - Buenos challenges\n\u{2B50} **Instant Funding** - Rápido y directo\n\u{2B50} **True Forex Funds** - Excelente para principiantes\n\nMis robots funcionan perfecto con todas estas. ¿Cuál te interesa probar?',
                'Te recomiendo estas prop firms:\n\n\u{1F3C6} **FTMO** - La #1, muy profesional\n\u{1F3C6} **MyForexFunds** - Muy popular, buenos splits\n\u{1F3C6} **The Funded Trader** - Reglas claras\n\u{1F3C6} **Instant Funding** - Sin evaluación\n\nTodas compatibles con ZAFIRO, EMERALD y DIAMOND. ¿Ya tienes alguna cuenta o es tu primera vez?'
            ]
        },

        // CHALLENGES/FUNDING (1000+ variations)
        challenges: {
            patterns: [
                /(?:challenge|challenges|fondeo|fondear|prop\s*firm|ftmo|mff|myforexfunds|funded|fondeado|fondeada|evaluaci[oó]n|fase|fases|prueba)/i,
                /(?:pasa|pasan|pasar|aprobar|aprueba|sirve|funciona)\s*(?:el|los|para|un)?\s*(?:challenge|challenges|fondeo|evaluaci[oó]n)/i,
                /(?:tiempo|cu[aá]nto|dias|d[ií]as|semanas|meses)\s*(?:para|en|tarda|demora)\s*(?:pasar|aprobar)/i,
                /(?:pass|passing)\s*(?:the|a)?\s*(?:challenge|evaluation|funding)/i,
                /(?:prop\s*(?:firm|trading)|funded\s*(?:account|trader)|ftmo|mff|the\s*funded|instant\s*funding)/i,
                /(?:drawdown|dd|max\s*loss|daily\s*dd|profit\s*target)/i,
                /(?:passar|aprova|fondead|avalia[çc][aã]o)/i,
                /(?:passer|challenge|fonds?|[eé]valuation)/i
            ],
            responses: [
                '¡Sí, los 3 robots están diseñados para pasar challenges! \u{1F3AF}\n\n\u{1F52E} **ZAFIRO** - Pasa en ~15 días (93.8% éxito)\n\n\u{1F49A} **EMERALD** - Pasa en ~30 días (75% éxito)\n\n\u{1F48E} **DIAMOND** - Pasa en ~1 mes (55% éxito)\n\nFuncionan con FTMO, MFF, The Funded Trader y más. ¿Cuál te interesa?',
                '¡Claro, están hechos para fondeo! \u{1F680}\n\n\u{1F52E} ZAFIRO - Pasa challenges en 2 semanas promedio\n\n\u{1F49A} EMERALD - Pasa en 1 mes aprox\n\n\u{1F48E} DIAMOND - Pasa en 4-5 semanas\n\nTodos respetan drawdown y reglas de prop firms. ¿Cuál se ajusta a ti?'
            ]
        },

        // GUARANTEE/REFUND (600+ variations)
        guarantee: {
            patterns: [
                /(?:garant[ií]a|garantia|seguro|segura|confiable|confianza|confiar|reembolso|rembolso|devoluci[oó]n|devolver|devolves|devuelves?|riesgo)/i,
                /(?:me\s*)?(?:devolve|devuelve|regresa|retorna)\s*(?:el|mi|la)?\s*(?:dinero|plata|lana|pasta)/i,
                /(?:estafa|scam|fraude|fake|falso|mentira|timo|robo|enga[ñn]o)/i,
                /(?:qu[eé]|que)\s*(?:pasa|sucede|ocurre)\s*(?:si|cuando)\s*(?:no|pierd|fall|quem)/i,
                /(?:guarantee|refund|money\s*back|return|scam|fraud|trust|reliable|safe)/i,
                /(?:garantia|reembolso|devolu[çc][aã]o|golpe|fraude|confi[aá]vel)/i,
                /(?:garantie|remboursement|arnaque|fiable|confiance)/i,
                /(?:funciona|sirve|trabaja)\s*(?:de\s*verdad|realmente|en\s*serio)/i,
                /(?:es|son)\s*(?:real|reales|verdad|verdadero|leg[ií]timo|seguro)/i
            ],
            responses: [
                '¡Tranquilo, hay garantía total! \u{1F6E1}\n\n\u{2705} **100% reembolso** si no obtienes resultados\n\u{2705} 4+ años de resultados comprobados\n\u{2705} +6000 clientes satisfechos\n\u{2705} Soporte 24/7 directo conmigo\n\u{2705} Actualizaciones gratis de por vida\n\n¿Tienes alguna otra duda?',
                '¡Sí, te devuelvo el dinero! \u{1F6E1}\n\n**100% de reembolso** si no obtienes los resultados esperados.\n\n• Garantía total de satisfacción\n• Sin preguntas\n• 4+ años respaldando esta garantía\n• +6000 clientes lo confirman\n\n¿Tienes alguna otra duda?'
            ]
        },

        // FAILURE/RISK/LOSING (500+ variations)
        failure: {
            patterns: [
                /(?:pierd|perder|perdid|quem|vaci|fall|fail|loss|lose|malo|negativ|riesg)/i,
                /(?:qu[eé]|que)\s*(?:pasa|sucede|ocurre)\s*(?:si|cuando|con)\s*(?:pierd|fall|quem|no\s*funciona)/i,
                /(?:puede|puedo|podr[ií]a)\s*(?:quemar|perder|vaciar)\s*(?:la|mi|una)?\s*(?:cuenta|capital|dinero)/i,
                /(?:if\s*i\s*lose|what\s*if\s*i\s*fail|lose\s*money|blow\s*account)/i,
                /(?:se\s*perder|perco|arrisca|risco|prejuizo)/i
            ],
            responses: [
                '¡Entiendo tu preocupación! 🛡️\n\nSi llegaras a perder un challenge (algo muy raro, ZAFIRO tiene 93.8% de éxito), tienes varias garantías:\n\n1. **Gestión de Riesgo:** El bot tiene Stop Loss y protección de DD para evitar violar reglas.\n2. **Reembolso:** Si el bot no cumple con la rentabilidad prometida, te devuelvo el 100% del costo del bot.\n\nEl riesgo está súper controlado. ¿Te da más tranquilidad?',
                '¡La seguridad es lo primero! 🛡️\n\nLos robots tienen gestión de riesgo estricta (Stop Loss en cada operación) para proteger tu capital. Es casi imposible "quemar" una cuenta si usas los riesgos recomendados (1-2%).\n\nAdemás, tienes mi **Garantía de Reembolso del 100%** si no obtienes resultados. ¿Te ayuda saber esto?'
            ]
        },

        // PAYMENT METHODS (700+ variations)
        payment: {
            patterns: [
                /(?:m[eé]todo|metodo|medios?|formas?)\s*(?:de\s*)?(?:pago|pagar)/i,
                /(?:como|c[oó]mo|donde|d[oó]nde)\s*(?:puedo|se\s*puede)?\s*pagar/i,
                /(?:acepta|aceptan|recibe|reciben)\s*(?:pago|pagos|tarjeta|cripto|crypto)/i,
                /(?:usdt|bitcoin|btc|eth|ethereum|tether|binance|cripto|crypto|criptomoneda)/i,
                /(?:tarjeta|card|paypal|zelle|wise|transferencia|deposito|dep[oó]sito)/i,
                /(?:wallet|billetera|direcci[oó]n|address)/i,
                /(?:payment|pay|purchase|buy|acquire|methods?|options?)/i,
                /(?:pagamento|pagar|forma|meio|cart[aã]o|cripto)/i,
                /(?:paiement|payer|acheter|carte|crypto)/i
            ],
            responses: [
                '¡Métodos de pago disponibles! 💳\n\n✅ **USDT (ERC20/BEP20/TRC20)** - 8% descuento\n✅ **Bitcoin (BTC)**\n✅ **Ethereum (ETH)**\n\n🛒 Compras desde el carrito de la web, luego envías comprobante a @frankeasdeveloper. ¿Cuál robot te interesa?',
                '¡Comprar es súper fácil! 💳\n\nAceptamos:\n• **USDT** (ERC20/BEP20/TRC20) - 8% descuento\n• **Bitcoin (BTC)**\n• **Ethereum (ETH)**\n\nProceso:\n1. Me escribes a @frankeasdeveloper en Telegram\n2. Te paso la dirección de wallet\n3. Confirmas pago y te envío el robot\n\n¡Rápido, seguro y sin intermediarios! ¿Listo para comprar?'
            ]
        },

        // ZAFIRO SPECIFIC (300+ variations)
        zafiro: {
            patterns: [
                /(?:zafiro|safiro|zafir|safir|el\s*azul|el\s*morado|el\s*mejor|el\s*top|el\s*m[aá]s\s*caro)/i,
                /(?:info|informaci[oó]n|detalles?|m[aá]s)\s*(?:de|del|sobre)?\s*zafiro/i,
                /(?:cu[eé]ntame|dime|explica)\s*(?:de|del|sobre)?\s*zafiro/i
            ],
            responses: [
                '¡ZAFIRO es mi orgullo, el más potente! 🔮\n\n✅ 93.8% tasa de éxito\n✅ Pasa challenges en ~15 días\n✅ Filtro de noticias avanzado\n✅ Smart Money Concepts\n✅ Licencia de por vida\n\nPrecio: $2,950 (8% OFF con USDT)\n\n¿Quieres saber más o tienes alguna duda?'
            ]
        },

        // EMERALD SPECIFIC (300+ variations)
        emerald: {
            patterns: [
                /(?:emerald|esmeralda|emeralt|emeral|el\s*verde|el\s*del\s*medio|el\s*equilibrado)/i,
                /(?:info|informaci[oó]n|detalles?|m[aá]s)\s*(?:de|del|sobre)?\s*emerald/i
            ],
            responses: [
                '¡EMERALD es súper popular! 💚\n\n✅ 75% tasa de éxito\n✅ Pasa challenges en ~30 días\n✅ Equilibrado entre potencia y precio\n✅ Actualizaciones gratis\n✅ Licencia de por vida\n\nPrecio: $1,950 (8% OFF con USDT)\n\n¿Te gustaría más detalles?'
            ]
        },

        // DIAMOND SPECIFIC (300+ variations)
        diamond: {
            patterns: [
                /(?:diamond|diamante|diamon|diamont|el\s*celeste|el\s*cyan|el\s*barato|el\s*econ[oó]mico|para\s*empezar)/i,
                /(?:info|informaci[oó]n|detalles?|m[aá]s)\s*(?:de|del|sobre)?\s*diamond/i
            ],
            responses: [
                '¡DIAMOND es perfecto para empezar! 💎\n\n✅ 55% tasa de éxito\n✅ Pasa challenges en ~1 mes\n✅ Ideal para principiantes\n✅ Licencia de por vida\n✅ Todas las actualizaciones incluidas\n\nPrecio: $950 (8% OFF con USDT)\n\n¿Tienes alguna pregunta?'
            ]
        },

        // DISCOUNTS (400+ variations)
        discounts: {
            patterns: [
                /(?:descuento|descuentos|oferta|ofertas|promoci[oó]n|promo|rebaja|cup[oó]n|c[oó]digo|ahorro)/i,
                /(?:hay|tienes?|tienen|existe)\s*(?:alg[uú]n)?\s*(?:descuento|oferta|promo)/i,
                /(?:m[aá]s\s*barato|precio\s*especial|mejor\s*precio)/i,
                /(?:discount|offer|promo|coupon|code|deal|sale|special)/i
            ],
            responses: [
                '¡Sí, hay descuento! 🎉\n\n**8% de descuento** pagando con USDT (BEP20 o TRC20).\n\nTambién acepto BTC y ETH.\n\nAdemás, todos incluyen licencia de por vida - pagas una vez, tuyo para siempre. ¿Te interesa alguno en particular?'
            ]
        },

        // HOW IT WORKS (500+ variations) - AVOID matching greetings like "como estas"
        howItWorks: {
            patterns: [
                // Specific "como funciona/trabaja/opera" - NOT matching "como estas"
                /(?:c[oó]mo|como)\s*(?:funciona|trabaja|opera|esto|eso)(?:n)?/i,
                /(?:explicame|expl[ií]came|cu[eé]ntame|dime)\s*(?:c[oó]mo|como|qu[eé]|que)/i,
                /(?:qu[eé]|que)\s*(?:hace|hacen|estrategia)/i,
                /(?:l[oó]gica|algoritmo|metodolog[ií]a|sistema|indicador|se[ñn]al)/i,
                /(?:smart\s*money|smc|order\s*block|liquidity|price\s*action)/i,
                /(?:entrada|salida|stop\s*loss|take\s*profit|sl|tp)/i,
                /(?:how\s*(?:does\s*it|do\s*they)\s*work|explain|strategy|logic)/i
            ],
            responses: [
                '¡Buena pregunta! Los robots usan Smart Money Concepts (SMC):\n\n• Detectan zonas de liquidez institucional\n• Identifican order blocks y fair value gaps\n• Filtro de noticias para evitar volatilidad\n• Gestión de riesgo automática\n• Stop Loss y Take Profit optimizados\n• Operan 24/5 sin intervención\n\nSon plug-and-play, los configuras una vez y listo. ¿Te explico más de alguno en específico?'
            ]
        },

        // RESULTS/PERFORMANCE (400+ variations)
        results: {
            patterns: [
                /(?:resultado|resultados|ganancia|ganancias|rentabilidad|profit|retorno|roi|rendimiento)/i,
                /(?:cu[aá]nto|cuanto)\s*(?:gana|ganan|genera|generan|hace|hacen)/i,
                /(?:historial|track\s*record|estad[ií]stica|performance|desempe[ñn]o)/i,
                /(?:backtest|forward\s*test|cuenta\s*real|live|demo|prueba)/i,
                /(?:win\s*rate|tasa\s*[eé]xito|efectividad|porcentaje)/i
            ],
            responses: [
                '¡Tengo 4+ años de resultados comprobados! 📊\n\n🔮 ZAFIRO: 15-25% mensual (93.8% win rate)\n\n💚 EMERALD: 10-15% mensual (75% win rate)\n\n💎 DIAMOND: 5-10% mensual (55% win rate)\n\n+6000 clientes satisfechos en la comunidad de Telegram. Resultados reales, no backtest inflados. ¿Quieres más detalles?'
            ]
        },

        // PLATFORMS (400+ variations)
        platforms: {
            patterns: [
                /(?:plataforma|plataformas|mt4|mt5|metatrader|ctrader|ninjatrader|dxtrade)/i,
                /(?:broker|brokers|cual\s*broker|qu[eé]\s*broker|donde\s*uso|d[oó]nde\s*uso)/i,
                /(?:compatible|compatibilidad|funciona\s*(?:con|en))/i,
                /(?:platform|broker|compatible|work\s*(?:with|on))/i
            ],
            responses: [
                '¡Los robots funcionan en múltiples plataformas! 💻\n\n✅ **MetaTrader 4 (MT4)**\n✅ **MetaTrader 5 (MT5)**\n✅ **cTrader**\n✅ **NinjaTrader**\n✅ **DXTrade**\n\nFuncionan con cualquier broker compatible. Recomendados: IC Markets, Pepperstone, FBS.\n\n¿Tienes alguna otra pregunta?'
            ]
        },

        // RECOMMENDATIONS (400+ variations)
        recommendations: {
            patterns: [
                /(?:cu[aá]l|cual|cuales|cu[aá]les)\s*(?:me\s*)?(?:recomiendas?|sugieres?|aconsejas?)/i,
                /(?:cu[aá]l|cual)\s*(?:es\s*)?(?:mejor|el\s*mejor|m[aá]s\s*recomendado)/i,
                /(?:diferencia|diferente|comparar|comparaci[oó]n|versus|vs)/i,
                /(?:elegir|escoger|decidir|cu[aá]l\s*compro)/i,
                /(?:para\s*m[ií]|seg[uú]n\s*mi|mi\s*situaci[oó]n|principiante|novato|experto)/i,
                /(?:presupuesto|dinero\s*tengo|capital)/i,
                /(?:which\s*(?:one|should)|recommend|best|compare|difference)/i
            ],
            responses: [
                'Depende de tu situación, te explico:\n\n💰 **ZAFIRO ($2,950)** - Si quieres lo mejor y más rápido. Pasa challenges en 15 días.\n\n⚖️ **EMERALD ($1,950)** - Si buscas equilibrio entre precio y potencia. Muy popular.\n\n🌱 **DIAMOND ($950)** - Si estás empezando o con presupuesto ajustado. Muy efectivo para el precio.\n\nLos 3 incluyen licencia de por vida y actualizaciones gratis. ¿Cuál se ajusta más a ti?'
            ]
        },

        // TIME TO PASS (300+ variations)
        timeToPass: {
            patterns: [
                /(?:cu[aá]nto|cuanto)\s*(?:tiempo|tarda|demora|d[ií]as|semanas)/i,
                /(?:en\s*cu[aá]nto|en\s*cuanto)\s*(?:tiempo|d[ií]as)/i,
                /(?:tiempo|tarda|demora)\s*(?:para|en)\s*(?:pasar|aprobar)/i,
                /(?:d[ií]as|semanas|meses)\s*(?:para|en)\s*(?:pasar|aprobar)/i,
                /(?:how\s*long|time\s*to\s*pass|days|weeks)/i
            ],
            responses: [
                '¡Los tiempos para pasar challenges son!\n\n⏱️ **ZAFIRO** - ~15 días (el más rápido)\n\n⏱️ **EMERALD** - ~30 días\n\n⏱️ **DIAMOND** - ~1 mes\n\nDepende también del tamaño de la cuenta y las reglas de cada prop firm. ¿Te interesa alguno?'
            ]
        },

        // FASTEST (200+ variations)
        fastest: {
            patterns: [
                /(?:m[aá]s\s*r[aá]pido|rapido|r[aá]pido|veloz|pronto|antes|menos\s*tiempo)/i,
                /(?:cu[aá]l|cual)\s*(?:pasa|es)\s*(?:m[aá]s\s*)?r[aá]pido/i,
                /(?:fastest|quickest|quick|fast)/i
            ],
            responses: [
                '¡El más rápido es ZAFIRO! 🔮\n\n⚡ Pasa challenges en ~15 días promedio\n⚡ 93.8% tasa de éxito\n⚡ El más potente de los 3\n\nPrecio: $2,950 (8% OFF con USDT)\n\n¿Te interesa ZAFIRO o quieres comparar con los otros?'
            ]
        },

        // BUYING PROCESS (300+ variations)
        buying: {
            patterns: [
                /(?:quiero|voy\s*a|listo\s*para)\s*(?:comprar|pagar|adquirir)/i,
                /(?:c[oó]mo|como)\s*(?:compro|pago|adquiero)/i,
                /(?:me\s*lo\s*llevo|lo\s*quiero|lo\s*compro)/i,
                /(?:proceso\s*de\s*compra|pasos\s*para\s*comprar)/i,
                /(?:i\s*want\s*to\s*buy|how\s*do\s*i\s*buy|purchase|ready\s*to\s*buy)/i
            ],
            responses: [
                '¡Genial que quieras comprar! 🎉\n\n🛒 Las compras se hacen desde el **carrito de la web**.\n\nProceso:\n1. Elige el robot que te interesa en la página\n2. Agrégalo al carrito\n3. Completa el pago (8% OFF con USDT, BTC o ETH)\n4. Envía el comprobante a @frankeasdeveloper\n\n¿Cuál robot te interesa? ZAFIRO, EMERALD o DIAMOND?'
            ]
        },

        // VPS (200+ variations)
        vps: {
            patterns: [
                /(?:vps|servidor|server|virtual|cloud|nube)/i,
                /(?:necesito|requiero|hace\s*falta)\s*(?:un\s*)?vps/i,
                /(?:c[oó]mo|como)\s*(?:configuro|instalo|pongo)\s*(?:el\s*)?(?:bot|robot|ea)/i,
                /(?:24\s*horas|24\/7|siempre\s*encendido)/i
            ],
            responses: [
                '¡Sobre el VPS! 💻\n\n⚡ Un VPS es recomendado para operación 24/7\n⚡ Incluyo guía de configuración PDF\n⚡ VPS recomendados: ForexVPS, Contabo\n⚡ Requisito mínimo: 1GB RAM, 1 vCPU\n\nTambién puedes correrlo en tu PC si está encendida 24/5.\n\n¿Tienes alguna otra pregunta?'
            ]
        },

        // SUPPORT (300+ variations)
        support: {
            patterns: [
                /(?:soporte|apoyo|ayuda|asistencia|atenci[oó]n)/i,
                /(?:contacto|contactar|escribir|hablar|comunicar)/i,
                /(?:telegram|whatsapp|correo|email|tel[eé]fono)/i,
                /(?:comunidad|grupo|chat)/i,
                /(?:support|help|contact|reach|community)/i
            ],
            responses: [
                '¡Tengo soporte 24/7! 🛡️\n\n📱 **Telegram**: @frankeasdeveloper\n👥 **Comunidad**: +6000 traders activos\n📚 **Incluye**: Manual PDF, Video tutorial, Guía VPS\n\nEstoy disponible para cualquier duda, antes y después de comprar. ¡Escríbeme cuando quieras!'
            ]
        },

        // THANKS (100+ variations)
        thanks: {
            patterns: [
                /(?:gracias|gracia|thank|thx|agradec|muy\s*amable|eres\s*(?:un\s*)?(?:crack|genial|capo))/i,
                /(?:thanks|thank\s*you|ty|thx|appreciate)/i,
                /(?:obrigad[oa]|valeu)/i,
                /(?:merci|remercie)/i
            ],
            responses: [
                '¡De nada! Si tienes más preguntas, aquí estoy. Escríbeme a @frankeasdeveloper cuando quieras 🙌',
                '¡Un placer ayudarte! Cualquier duda, me escribes a @frankeasdeveloper 😊',
                '¡Gracias a ti por tu interés! Si decides comprar o tienes más preguntas, @frankeasdeveloper 🙌'
            ]
        },

        // GOODBYE (100+ variations)
        goodbye: {
            patterns: [
                /(?:adi[oó]s|adios|bye|chao|chau|hasta\s*(?:luego|pronto|la\s*vista)|nos\s*vemos)/i,
                /(?:me\s*voy|ya\s*me\s*voy|tengo\s*que\s*irme|hablamos)/i,
                /(?:cu[ií]date|cuidate|suerte|[eé]xitos)/i,
                /(?:goodbye|bye|see\s*you|later|take\s*care)/i,
                /(?:tchau|falou|at[eé]\s*(?:logo|mais))/i,
                /(?:au\s*revoir|[aà]\s*bient[oô]t|salut)/i
            ],
            responses: [
                '¡Hasta luego! 👋 Fue un gusto. Cuando quieras volver, aquí estaré. Escríbeme a @frankeasdeveloper si te decides. ¡Éxitos!'
            ]
        },

        // AFFIRMATIVE (100+ variations)
        affirmative: {
            patterns: [
                /^(?:s[ií]+|simon|sim[oó]n|claro|dale|ok+|okay|okey|vale|va|bueno|genial|perfecto|excelente|listo|hecho|entendido|ya|aja|aj[aá]|mhm|nice|cool)$/i,
                /^(?:yes|yeah|yep|yup|sure|of\s*course|absolutely|definitely)$/i,
                /^(?:sim|beleza|blz|show|legal)$/i,
                /^(?:oui|d'accord|ok|bien\s*s[uû]r)$/i
            ],
            responses: [
                '¡Genial! ¿Qué te gustaría saber? Robots, precios, cómo funcionan, garantías... pregunta lo que quieras 😊',
                '¡Perfecto! ¿En qué puedo ayudarte? Cuéntame qué necesitas saber.',
                '¡Excelente! ¿Qué información te gustaría? Estoy aquí para ayudarte.'
            ]
        },

        // NEGATIVE/UNSURE (100+ variations)
        negative: {
            patterns: [
                /(?:no\s*s[eé]|no\s*estoy\s*seguro|tengo\s*duda|hmm+|mmm+|a\s*ver|d[eé]jame\s*pensar)/i,
                /(?:lo\s*pienso|me\s*lo\s*pienso|luego\s*te\s*digo|despu[eé]s)/i,
                /(?:a[uú]n\s*no|todav[ií]a\s*no|tal\s*vez|quiz[aá]s?|puede\s*ser)/i
            ],
            responses: [
                '¡Sin problema! Tómate tu tiempo. Si tienes cualquier duda, aquí estoy para resolverla. También puedes escribirme directo a @frankeasdeveloper cuando quieras 😊'
            ]
        },

        // DEFAULT
        default: {
            responses: [
                '¡Claro! Cuéntame más, ¿sobre qué te gustaría saber? Robots, precios, resultados, garantías... lo que necesites 😊',
                'Mmm, no capté bien. ¿Podrías decirme más específicamente qué buscas? Estoy aquí para ayudarte 🙌',
                '¿Me das más detalles? Quiero darte la mejor respuesta posible.',
                'Interesante... ¿te refieres a los robots, precios, o algo más específico?',
                'Cuéntame un poco más, ¿qué es lo que te interesa exactamente?'
            ]
        }
    },

    // ==========================================
    // ENGLISH PATTERNS (EN)
    // ==========================================
    en: {
        greetings: {
            patterns: [
                /^(?:hi+|hello+|hey+|howdy|greetings?|good\s*(?:morning|afternoon|evening|day)|what'?s?\s*up|sup+|yo+|heya+|hiya+|wassup|wazzup|whatsup)(\s|$)/i
            ],
            responses: [
                "Hey there! 👋 I'm Frank, the developer of these trading robots. How can I help you today?",
                "Hello! 👋 Great to meet you! I'm Frank. What brings you here today?",
                "Hi! 👋 I'm Frank, creator of ZAFIRO, EMERALD and DIAMOND trading robots. What would you like to know?"
            ]
        },

        products: {
            patterns: [
                /(?:what|which)\s*(?:bots?|robots?|eas?|products?)\s*(?:do\s*you\s*have|available|offer)/i,
                /(?:tell|show|give)\s*(?:me)?\s*(?:about|info)?\s*(?:the|your)?\s*(?:bots?|robots?|eas?|products?)/i,
                /(?:bots?|robots?|eas?|products?)\s*(?:you\s*have|available)/i
            ],
            responses: [
                "Great question! I have 3 trading robots:\n\n🔮 **ZAFIRO** - The most powerful, 93.8% success\n\n💚 **EMERALD** - The balanced one, 75% success\n\n💎 **DIAMOND** - The economic choice, perfect to start\n\nWhich one catches your eye?"
            ]
        },

        prices: {
            patterns: [
                /(?:how\s*much|price|prices|cost|costs|pricing|rate|rates|fee|fees)/i,
                /\$|usd|dollars?/i
            ],
            responses: [
                "Sure thing! Here are the prices:\n\n🔮 ZAFIRO: $2,950\n\n💚 EMERALD: $1,950\n\n💎 DIAMOND: $950\n\nPlus, there's an 8% discount when paying with USDT, BTC or ETH! Interested in any particular one?"
            ]
        },

        challenges: {
            patterns: [
                /(?:challenge|challenges|funding|funded|prop\s*firm|ftmo|evaluation|pass)/i,
                /(?:how\s*long|time\s*to\s*pass|days|weeks)/i
            ],
            responses: [
                "Yes, all 3 robots are designed to pass funding challenges! 🎯\n\n🔮 **ZAFIRO** - Passes in ~15 days (93.8% success)\n\n💚 **EMERALD** - Passes in ~30 days (75% success)\n\n💎 **DIAMOND** - Passes in ~1 month (55% success)\n\nThey work with FTMO, MFF, The Funded Trader and more. Which one interests you?"
            ]
        },

        guarantee: {
            patterns: [
                /(?:guarantee|refund|money\s*back|return|scam|fraud|trust|reliable|safe|legit)/i,
                /(?:what\s*if\s*i\s*lose|risk|fail)/i
            ],
            responses: [
                "Don't worry, there's a full guarantee! 🛡️\n\n✅ **100% refund** if you don't get results\n✅ 4+ years of proven results\n✅ +6000 satisfied clients\n✅ 24/7 support directly with me\n✅ Free lifetime updates\n\nAny other questions?"
            ]
        },

        payment: {
            patterns: [
                /(?:payment|pay|purchase|buy|acquire|methods?|options?)/i,
                /(?:usdt|bitcoin|btc|eth|ethereum|crypto|cryptocurrency)/i,
                /(?:card|paypal|transfer|wallet)/i
            ],
            responses: [
                "Payment methods available! 💳\n\n✅ **USDT (BEP20/TRC20)** - 8% discount\n✅ **Bitcoin (BTC)**\n✅ **Ethereum (ETH)**\n\nProcess:\n1. Message me at @frankeasdeveloper on Telegram\n2. I'll send you the wallet address\n3. Confirm payment and I'll send the robot\n\nFast, secure, no middlemen! Ready to buy?"
            ]
        },

        zafiro: {
            patterns: [/zafiro/i],
            responses: [
                "ZAFIRO is my pride and joy! 🔮\n\n93.8% success rate and passes funding challenges in about 15 days. Includes advanced news filter and lifetime license.\n\nPrice: $2,950 (8% OFF with crypto)\n\nWant to know more about how it works?"
            ]
        },

        emerald: {
            patterns: [/emerald/i],
            responses: [
                "EMERALD is super popular! 💚\n\n75% success rate, perfect if you want something balanced. Passes challenges in about 30 days.\n\nPrice: $1,950 (8% OFF with crypto)\n\nWould you like more details?"
            ]
        },

        diamond: {
            patterns: [/diamond/i],
            responses: [
                "DIAMOND is perfect for beginners! 💎\n\n55% success rate, and the best part: lifetime license and all future updates included for free.\n\nPrice: $950 (8% OFF with crypto)\n\nAny questions about how it works?"
            ]
        },

        thanks: {
            patterns: [/(?:thanks|thank\s*you|ty|thx|appreciate)/i],
            responses: [
                "You're welcome! If you have more questions, I'm here. Message me at @frankeasdeveloper anytime 🙌"
            ]
        },

        goodbye: {
            patterns: [/(?:goodbye|bye|see\s*you|later|take\s*care)/i],
            responses: [
                "Goodbye! 👋 It was a pleasure. Whenever you want to come back, I'll be here. Message me at @frankeasdeveloper if you decide to buy. Good luck!"
            ]
        },

        default: {
            responses: [
                "Interesting! Could you tell me a bit more about what you're looking for?",
                "I'm not quite sure I understood. Are you asking about the trading robots, prices, or something else?",
                "Could you give me more details? I want to make sure I give you the best answer possible."
            ]
        }
    },

    // ==========================================
    // PORTUGUESE PATTERNS (PT)
    // ==========================================
    pt: {
        greetings: {
            patterns: [/^(?:oi+|ol[aá]+|bom\s*dia|boa\s*tarde|boa\s*noite|tudo\s*bem|e\s*a[ií]|fala+|salve+|eae+)(\s|$)/i],
            responses: [
                "Oi! 👋 Eu sou o Frank, desenvolvedor de robôs de trading. Como posso te ajudar hoje?",
                "Olá! 👋 Prazer! Sou o Frank. O que te traz aqui?"
            ]
        },

        products: {
            patterns: [/(?:quais?|quant[oa]s?|tem|voc[eê]\s*tem|existe|oferece)\s*(?:rob[oô]s?|bots?|eas?)/i],
            responses: [
                "Claro! Tenho 3 robôs de trading:\n\n🔮 **ZAFIRO** - O mais potente, 93.8% de sucesso\n\n💚 **EMERALD** - O equilibrado, 75% de sucesso\n\n💎 **DIAMOND** - O econômico, perfeito para começar\n\nQual te interessa?"
            ]
        },

        prices: {
            patterns: [/(?:quanto|pre[çc]o|pre[çc]os|custo|custos|valor|valores)/i],
            responses: [
                "Os preços são:\n\n🔮 ZAFIRO: $2.950\n\n💚 EMERALD: $1.950\n\n💎 DIAMOND: $950\n\n8% de desconto pagando com USDT, BTC ou ETH! Qual te interessa?"
            ]
        },

        guarantee: {
            patterns: [/(?:garantia|reembolso|devolu[çc][aã]o|golpe|fraude|confi[aá]vel)/i],
            responses: [
                "Relaxa, tem garantia total! 🛡️\n\n✅ **100% reembolso** se não tiver resultados\n✅ 4+ anos de resultados comprovados\n✅ +6000 clientes satisfeitos\n✅ Suporte 24/7 direto comigo\n\nAlguma outra dúvida?"
            ]
        },

        default: {
            responses: [
                "Interessante! Pode me contar mais sobre o que você procura?",
                "Não entendi bem. Você está perguntando sobre os robôs, preços ou outra coisa?",
                "Pode dar mais detalhes? Quero te dar a melhor resposta possível."
            ]
        }
    },

    // ==========================================
    // FRENCH PATTERNS (FR)
    // ==========================================
    fr: {
        greetings: {
            patterns: [/^(?:bonjour|salut|coucou|bonsoir|cc|slt|bjr|hello|ciao)(\s|$)/i],
            responses: [
                "Bonjour! 👋 Je suis Frank, développeur de robots de trading. Comment puis-je vous aider?",
                "Salut! 👋 Je suis Frank. Qu'est-ce qui vous amène ici?"
            ]
        },

        products: {
            patterns: [/(?:quel|quels|combien)\s*(?:de)?\s*(?:robots?|bots?)/i],
            responses: [
                "Bien sûr! J'ai 3 robots de trading:\n\n🔮 **ZAFIRO** - Le plus puissant, 93.8% de réussite\n\n💚 **EMERALD** - L'équilibré, 75% de réussite\n\n💎 **DIAMOND** - L'économique, parfait pour commencer\n\nLequel vous intéresse?"
            ]
        },

        prices: {
            patterns: [/(?:combien|prix|co[uû]t|tarif)/i],
            responses: [
                "Les prix sont:\n\n🔮 ZAFIRO: $2.950\n\n💚 EMERALD: $1.950\n\n💎 DIAMOND: $950\n\n8% de réduction en payant avec USDT, BTC ou ETH! Lequel vous intéresse?"
            ]
        },

        guarantee: {
            patterns: [/(?:garantie|remboursement|arnaque|fiable|confiance)/i],
            responses: [
                "Pas de souci, il y a une garantie totale! 🛡️\n\n✅ **100% remboursement** si pas de résultats\n✅ 4+ ans de résultats prouvés\n✅ +6000 clients satisfaits\n✅ Support 24/7 directement avec moi\n\nD'autres questions?"
            ]
        },

        default: {
            responses: [
                "Intéressant! Pourriez-vous m'en dire plus sur ce que vous cherchez?",
                "Je n'ai pas bien compris. Vous posez une question sur les robots, les prix ou autre chose?",
                "Pourriez-vous donner plus de détails? Je veux vous donner la meilleure réponse possible."
            ]
        }
    }
};

// ============================================
// PATTERN MATCHING ENGINE
// ============================================

function matchPatterns(message, lang) {
    const msg = message.toLowerCase().trim();
    const langPatterns = PATTERNS[lang] || PATTERNS['es'];

    // Define priority order for categories
    const categoryOrder = [
        'failure',       // Highest priority - Handle concerns first
        'greetings',     // Then greetings
        'products',      // MOVED UP - Product questions are common
        'zafiro',        // Specific products
        'emerald',
        'diamond',
        'fastest',
        'timeToPass',
        'propFirmRecs',  // NEW - Specific prop firm recommendations
        'challenges',    // Generic challenge/funding questions
        'discounts',
        'payment',
        'buying',
        'prices',
        'recommendations',
        'howItWorks',
        'results',
        'platforms',
        'vps',
        'support',
        'guarantee',     // MOVED DOWN - Less specific, catches too much
        'thanks',
        'goodbye',
        'affirmative',
        'negative'
    ];

    for (const category of categoryOrder) {
        const catData = langPatterns[category];
        if (!catData || !catData.patterns) continue;

        for (const pattern of catData.patterns) {
            if (pattern.test(msg)) {
                return getRandomResponse(catData.responses);
            }
        }
    }

    // Return default response
    return getRandomResponse(langPatterns.default?.responses || PATTERNS.es.default.responses);
}

// Export for use in chatbot.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PATTERNS, matchPatterns };
}
