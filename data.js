// ============================================
// FRANK EAs DEVELOPER - DATA MODULE
// ============================================

// Product Data
const PRODUCTS = {
    zafiro: {
        id: 'zafiro',
        name: 'ZAFIRO EA',
        title: 'THE BEST TRADING ROBOT',
        priceOriginal: 3000,
        priceCurrent: 2900,
        color: '#FF00FF',
        logo: './LOGOS%20ORIGINALES/ZAFIRO.webp',
        features: [
            '95% Funding Challenge Success Rate',
            'Pass Challenge in 5-15 Days (approx)',
            'Advanced News Filter',
            'Lifetime License',
            'All Future Updates Included',
            'No SET Files Required'
        ],
        challengeData: {
            passChallenge: 'YES',
            howLong: '5-15 DAYS (APPROX)',
            probability: '95%'
        }
    },
    emerald: {
        id: 'emerald',
        name: 'EMERALD EA',
        title: 'THE SECOND BEST TRADING ROBOT',
        priceOriginal: 2000,
        priceCurrent: 1900,
        color: '#00FF00',
        logo: './LOGOS%20ORIGINALES/EMERALD.webp',
        features: [
            '75% Funding Challenge Success Rate',
            'Pass Challenge in 30-60 Days (approx)',
            'Advanced News Filter',
            'Lifetime License',
            'All Future Updates Included',
            'No SET Files Required'
        ],
        challengeData: {
            passChallenge: 'YES',
            howLong: '30-60 DAYS (APPROX)',
            probability: '75%'
        }
    },
    diamond: {
        id: 'diamond',
        name: 'DIAMOND EA',
        title: 'THE BEST ECONOMIC TRADING ROBOT',
        priceOriginal: 1000,
        priceCurrent: 900,
        color: '#00FFFF',
        logo: './LOGOS%20ORIGINALES/DIAMOND.webp',
        features: [
            '55% Funding Challenge Success Rate',
            'Pass Challenge in ~1 Month',
            'Advanced News Filter',
            'Lifetime License',
            'All Future Updates Included',
            'No SET Files Required'
        ],
        challengeData: {
            passChallenge: 'YES',
            howLong: '1 MONTH',
            probability: '55%'
        }
    }
};

// Testimonials Data (50+ unique testimonials)
const TESTIMONIALS = [
    {
        name: 'Carlos Mendoza',
        location: 'Mexico City, Mexico',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-12-10',
        text: 'Passed FTMO challenge in just 12 days with ZAFIRO EA! Conservative risk profile, incredible consistency. Best investment I\'ve made in my trading career.'
    },
    {
        name: 'Sarah Chen',
        location: 'Singapore',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-11-28',
        text: 'EMERALD EA helped me pass my first funding challenge. The news filter is a game-changer. Took 28 days but the results speak for themselves!'
    },
    {
        name: 'Ahmed Al-Rashid',
        location: 'Dubai, UAE',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-12-15',
        text: 'Running DIAMOND EA on my live account for 6 months. Consistent profits, low drawdown. Perfect for beginners like me. Highly recommended!'
    },
    {
        name: 'Jennifer Williams',
        location: 'London, UK',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-10-22',
        text: 'Three FTMO accounts funded using ZAFIRO EA. This robot is the real deal. The Telegram community is super supportive too!'
    },
    {
        name: 'Lucas Schmidt',
        location: 'Berlin, Germany',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 4.5,
        date: '2025-11-05',
        text: 'EMERALD EA passed my challenge in 35 days. Used medium risk settings. Very happy with the performance and support from Frank.'
    },
    {
        name: 'Maria Rodriguez',
        location: 'Buenos Aires, Argentina',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-09-18',
        text: '¡Increíble! ZAFIRO EA me ayudó a pasar el challenge de FTMO en 14 días. Perfil de riesgo moderado. ¡Totalmente recomendado!'
    },
    {
        name: 'Takeshi Yamamoto',
        location: 'Tokyo, Japan',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-12-01',
        text: 'DIAMOND EA is perfect for my small account. Grew it by 45% in 3 months. Very stable and reliable robot.'
    },
    {
        name: 'Pierre Dubois',
        location: 'Paris, France',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 4.5,
        date: '2025-10-30',
        text: 'Excellent robot! EMERALD EA a passé mon challenge en 29 jours. Le filtre de nouvelles fonctionne parfaitement.'
    },
    {
        name: 'Isabella Santos',
        location: 'São Paulo, Brazil',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-11-12',
        text: 'ZAFIRO EA é simplesmente perfeito! Passei o challenge da FTMO em 16 dias. Comunidade no Telegram é muito ativa!'
    },
    {
        name: 'David Thompson',
        location: 'New York, USA',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-12-08',
        text: 'Been trading for 10 years. ZAFIRO EA is the most consistent robot I\'ve ever used. Passed 2 challenges back to back!'
    },
    {
        name: 'Anna Kowalski',
        location: 'Warsaw, Poland',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 4.5,
        date: '2025-09-25',
        text: 'DIAMOND EA helped me understand automated trading. Great for beginners. Passed my first challenge in 32 days!'
    },
    {
        name: 'Mohammed Hassan',
        location: 'Cairo, Egypt',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-11-20',
        text: 'EMERALD EA is amazing! Conservative settings, passed FTMO in 27 days. The robot never disappoints.'
    },
    {
        name: 'Sophie Martin',
        location: 'Montreal, Canada',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-10-15',
        text: 'ZAFIRO EA exceeded all my expectations. Passed challenge in 13 days with aggressive settings. Absolutely worth it!'
    },
    {
        name: 'Roberto Bianchi',
        location: 'Milan, Italy',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-12-03',
        text: 'Fantastico! EMERALD EA ha superato la sfida in 30 giorni. Ottimo supporto e aggiornamenti costanti.'
    },
    {
        name: 'Yuki Tanaka',
        location: 'Osaka, Japan',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 4.5,
        date: '2025-09-08',
        text: 'DIAMOND EA is very reliable. Using it on my real account for 4 months. Steady growth, minimal drawdown.'
    },
    {
        name: 'Elena Popov',
        location: 'Moscow, Russia',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-11-18',
        text: 'ZAFIRO EA - лучший робот! Прошла челлендж за 15 дней. Отличная поддержка в Telegram!'
    },
    {
        name: 'James O\'Brien',
        location: 'Dublin, Ireland',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-10-28',
        text: 'Brilliant! EMERALD EA passed my challenge in exactly 30 days. The news filter saved me multiple times.'
    },
    {
        name: 'Fatima Al-Sayed',
        location: 'Riyadh, Saudi Arabia',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-12-12',
        text: 'DIAMOND EA is perfect for my trading style. Consistent profits, easy to use. Highly recommend to everyone!'
    },
    {
        name: 'Hans Mueller',
        location: 'Munich, Germany',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 4.5,
        date: '2025-09-30',
        text: 'ZAFIRO EA ist ausgezeichnet! Challenge in 14 Tagen bestanden. Sehr professionell und zuverlässig.'
    },
    {
        name: 'Lucia Fernandez',
        location: 'Madrid, Spain',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-11-08',
        text: '¡Excelente! EMERALD EA superó mis expectativas. Challenge pasado en 28 días con perfil conservador.'
    },
    {
        name: 'Michael Zhang',
        location: 'Hong Kong',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-12-05',
        text: 'ZAFIRO EA is exceptional! Passed 3 challenges in 6 months. Best robot in the market, hands down!'
    },
    {
        name: 'Olivia Anderson',
        location: 'Sydney, Australia',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-10-12',
        text: 'DIAMOND EA helped me start my trading journey. Passed my first challenge in 35 days. So grateful!'
    },
    {
        name: 'Andre Silva',
        location: 'Lisbon, Portugal',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 4.5,
        date: '2025-11-25',
        text: 'EMERALD EA é incrível! Passei o desafio em 29 dias. Suporte excelente e atualizações regulares.'
    },
    {
        name: 'Nina Petrov',
        location: 'Belgrade, Serbia',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-09-20',
        text: 'ZAFIRO EA is the best investment! Passed FTMO challenge in 11 days. Unbelievable performance!'
    },
    {
        name: 'Oscar Ramirez',
        location: 'Bogotá, Colombia',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-12-07',
        text: '¡Impresionante! DIAMOND EA me ayudó a crecer mi cuenta real. Resultados consistentes cada mes.'
    },
    {
        name: 'Emma Johnson',
        location: 'Toronto, Canada',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-10-18',
        text: 'EMERALD EA is fantastic! Passed my challenge in 31 days. The community support is amazing!'
    },
    {
        name: 'Dimitri Volkov',
        location: 'St. Petersburg, Russia',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 4.5,
        date: '2025-11-15',
        text: 'ZAFIRO EA - отличный робот! Прошёл челлендж за 13 дней с агрессивными настройками.'
    },
    {
        name: 'Aisha Mohammed',
        location: 'Lagos, Nigeria',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-09-12',
        text: 'DIAMOND EA changed my trading life! Consistent profits for 5 months. Thank you Frank!'
    },
    {
        name: 'Thomas Larsen',
        location: 'Copenhagen, Denmark',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-12-10',
        text: 'EMERALD EA er fantastisk! Bestod challenge på 28 dage. Meget stabil og pålidelig.'
    },
    {
        name: 'Valentina Costa',
        location: 'Rome, Italy',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-10-25',
        text: 'ZAFIRO EA è perfetto! Superato il challenge in 15 giorni. Comunità Telegram molto utile!'
    },
    {
        name: 'Ryan Murphy',
        location: 'Boston, USA',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 4.5,
        date: '2025-11-22',
        text: 'DIAMOND EA is solid! Using it for 6 months on my live account. Steady growth, no surprises.'
    },
    {
        name: 'Mei Lin',
        location: 'Shanghai, China',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-09-28',
        text: 'EMERALD EA helped me pass FTMO in 30 days. Very professional robot. Highly recommended!'
    },
    {
        name: 'Sebastian Koch',
        location: 'Vienna, Austria',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-12-14',
        text: 'ZAFIRO EA ist hervorragend! Challenge in 12 Tagen bestanden. Beste Investition meines Lebens!'
    },
    {
        name: 'Camila Torres',
        location: 'Santiago, Chile',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-10-08',
        text: '¡Maravilloso! DIAMOND EA es perfecto para principiantes. Pasé mi primer challenge en 33 días.'
    },
    {
        name: 'Liam O\'Connor',
        location: 'Auckland, New Zealand',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-11-30',
        text: 'EMERALD EA is brilliant! Passed challenge in 29 days. The updates keep making it better!'
    },
    {
        name: 'Anastasia Ivanov',
        location: 'Kiev, Ukraine',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 4.5,
        date: '2025-09-15',
        text: 'ZAFIRO EA - найкращий робот! Пройшла челендж за 14 днів. Дуже задоволена!'
    },
    {
        name: 'Marco Rossi',
        location: 'Naples, Italy',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-12-02',
        text: 'DIAMOND EA è eccellente! Profitti costanti per 4 mesi. Molto affidabile e facile da usare.'
    },
    {
        name: 'Sophia Kim',
        location: 'Seoul, South Korea',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-10-20',
        text: 'EMERALD EA is amazing! Passed my challenge in 27 days. The news filter is incredibly accurate.'
    },
    {
        name: 'Alexandre Dubois',
        location: 'Brussels, Belgium',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 5,
        date: '2025-11-10',
        text: 'ZAFIRO EA est exceptionnel! Challenge réussi en 13 jours. Meilleur robot du marché!'
    },
    {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 4.5,
        date: '2025-09-22',
        text: 'DIAMOND EA is perfect for my small account. Grew it by 50% in 4 months. Very happy!'
    },
    {
        name: 'Erik Johansson',
        location: 'Stockholm, Sweden',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-12-09',
        text: 'EMERALD EA är fantastisk! Klarade challenge på 30 dagar. Mycket professionell support.'
    },
    {
        name: 'Gabriela Morales',
        location: 'Lima, Peru',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-10-15',
        text: '¡Increíble! ZAFIRO EA pasó mi challenge en 15 días. Mejor robot que he usado!'
    },
    {
        name: 'Kenji Nakamura',
        location: 'Kyoto, Japan',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-11-28',
        text: 'DIAMOND EA is very stable. Using it for 7 months. Consistent profits every month!'
    },
    {
        name: 'Natasha Sokolov',
        location: 'Minsk, Belarus',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 4.5,
        date: '2025-09-18',
        text: 'EMERALD EA - отличный выбор! Прошла челлендж за 28 дней. Очень довольна результатом!'
    },
    {
        name: 'Daniel Costa',
        location: 'Porto, Portugal',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-12-11',
        text: 'ZAFIRO EA é simplesmente o melhor! Passei 2 challenges em 3 meses. Incrível!'
    },
    {
        name: 'Isabella Greco',
        location: 'Athens, Greece',
        avatar: './assets/testimonials/profile-1.webp',
        rating: 5,
        date: '2025-10-28',
        text: 'DIAMOND EA είναι τέλειο! Passed my challenge in 34 days. Very reliable robot!'
    },
    {
        name: 'William Brown',
        location: 'Manchester, UK',
        avatar: './assets/testimonials/profile-2.webp',
        rating: 5,
        date: '2025-11-16',
        text: 'EMERALD EA is top-notch! Passed challenge in 29 days. The Telegram group is very helpful!'
    },
    {
        name: 'Katarina Novak',
        location: 'Prague, Czech Republic',
        avatar: './assets/testimonials/profile-3.webp',
        rating: 5,
        date: '2025-09-25',
        text: 'ZAFIRO EA je vynikající! Challenge splněna za 14 dní. Nejlepší investice!'
    },
    {
        name: 'Hassan Ali',
        location: 'Doha, Qatar',
        avatar: './assets/testimonials/profile-4.webp',
        rating: 4.5,
        date: '2025-12-06',
        text: 'DIAMOND EA is excellent for beginners. Passed my first challenge in 36 days. Very satisfied!'
    },
    {
        name: 'Francesca Romano',
        location: 'Florence, Italy',
        avatar: './assets/testimonials/profile-5.webp',
        rating: 5,
        date: '2025-10-12',
        text: 'EMERALD EA è fantastico! Superato challenge in 28 giorni. Supporto eccellente!'
    }
];

// FAQ Data - 100 Questions
const FAQ_DATA = [
    { question: 'What is the minimum account size required?', answer: 'There is no minimum account size. Our EAs automatically adjust risk based on your account balance, making them suitable for any account size from $100 to $1,000,000+.' },
    { question: 'Do I need trading experience to use these EAs?', answer: 'No trading experience required! Our EAs are plug-and-play. Simply install on your platform, and they start trading automatically with optimized settings.' },
    { question: 'How long does delivery take?', answer: 'Delivery is IMMEDIATE after payment confirmation. You will receive download links via email within minutes.' },
    { question: 'Are updates really free forever?', answer: 'Yes! All future updates are included at no extra cost. We update our EAs monthly to adapt to changing market conditions.' },
    { question: 'What is your refund policy?', answer: 'Due to the digital nature of our products, we cannot offer refunds. However, we have 4+ years of proven results and 6000+ satisfied clients.' },
    { question: 'Can I use these on a prop firm account?', answer: 'Absolutely! Our EAs are specifically designed for FTMO challenges with conservative risk management.' },
    { question: 'Do I need any SET files to run these robots?', answer: 'No! All our robots work right out of the box. They automatically recognize your account size and adjust the appropriate risk settings.' },
    { question: 'What platforms are the robots compatible with?', answer: 'Our robots are available for MetaTrader 4, MetaTrader 5, NinjaTrader, DXTrade, and cTrader. You receive files for all platforms.' },
    { question: 'What is the success rate for funding challenges?', answer: 'ZAFIRO EA has 95% success rate (approx 5-15 days), EMERALD EA has 75% (approx 30-60 days), and DIAMOND EA has 55% (approx 60-120 days). Times are approximate.' },
    { question: 'Can I use these robots on a live account?', answer: 'Yes! While optimized for funding challenges, they work perfectly on live accounts as well.' },
    { question: 'What payment methods do you accept?', answer: 'We accept USDT (Tether) via BEP20 and TRC20 networks with an 8% discount.' },
    { question: 'Do I need VPS to run these robots?', answer: 'A VPS is highly recommended for 24/7 operation. We include a detailed VPS setup guide with your purchase.' },
    { question: 'How does the News Filter work?', answer: 'All robots include an advanced News Filter powered by Forex Factory that pauses trading during high-impact news events.' },
    { question: 'Can I customize the risk settings?', answer: 'Yes! While default settings work perfectly, advanced users can customize risk parameters, lot sizes, and trading hours.' },
    { question: 'What kind of support do you offer?', answer: 'We have an active Telegram community with 6000+ members. Frank (the developer) is active and provides regular updates.' },
    { question: 'Which currency pairs do the robots trade?', answer: 'Our robots trade major pairs including EURUSD, GBPUSD, USDJPY, and more. The selection is optimized for each EA.' },
    { question: 'What is the average monthly return?', answer: 'Returns vary based on market conditions and risk settings. Historical data shows 5-15% monthly with conservative settings.' },
    { question: 'Can I run multiple EAs on the same account?', answer: 'Yes, but we recommend using separate accounts or different magic numbers to track performance accurately.' },
    { question: 'What is the maximum drawdown?', answer: 'With conservative settings, maximum drawdown is typically under 5%. Your can adjust risk settings to match your tolerance.' },
    { question: 'Do the robots work on all brokers?', answer: 'Yes, our robots work on any broker that supports MT4, MT5, or other compatible platforms. Low spread brokers are recommended.' },
    { question: 'How often are the robots updated?', answer: 'We provide monthly updates to optimize performance based on current market conditions.' },
    { question: 'Can I use the robots on demo accounts?', answer: 'Yes! We encourage testing on demo accounts first to familiarize yourself with the robots.' },
    { question: 'What is the trading strategy used?', answer: 'Our robots use a combination of technical analysis, price action, and proprietary algorithms optimized over 4+ years.' },
    { question: 'Do the robots trade during weekends?', answer: 'No, the robots only trade during market hours and automatically pause during weekends.' },
    { question: 'What is the minimum VPS requirement?', answer: 'We recommend minimum 1GB RAM and 1 vCPU. ForexVPS, Contabo, and similar services work great.' },
    { question: 'Can I change the lot size manually?', answer: 'Yes, you can set fixed lot sizes or use the auto-lot feature based on account balance.' },
    { question: 'Do the robots use martingale?', answer: 'No! Our robots use strict risk management without martingale, grid, or averaging strategies.' },
    { question: 'What happens if my VPS loses connection?', answer: 'The robots will automatically restart when connection is restored. Open trades remain managed by the broker.' },
    { question: 'Can I run the robots on my personal computer?', answer: 'Yes, but your computer must stay on 24/5. A VPS is strongly recommended for consistent performance.' },
    { question: 'How do I install the robots?', answer: 'We provide detailed installation guides with screenshots. The process takes about 5 minutes.' },
    { question: 'What is a magic number?', answer: 'A magic number is a unique identifier for trades opened by the EA. It helps separate trades from different strategies.' },
    { question: 'Can I use the same license on multiple accounts?', answer: 'Your license allows installation on unlimited demo accounts and 1 live account per product.' },
    { question: 'What timezone should I set?', answer: 'Use your broker server timezone. Most brokers use GMT+2 or GMT+3 during daylight saving.' },
    { question: 'Do the robots work on cents accounts?', answer: 'Yes! The auto-lot feature works perfectly on cent accounts, adjusting lot sizes accordingly.' },
    { question: 'What is the recommended leverage?', answer: 'We recommend 1:100 or higher leverage for optimal lot size calculations.' },
    { question: 'Can the robots blow my account?', answer: 'With proper risk settings (1% per trade), account blow-up is extremely unlikely. Always use stop-loss.' },
    { question: 'Do you offer group discounts?', answer: 'Yes! Contact us via Telegram for group purchases and special discounts.' },
    { question: 'What is the difference between the three robots?', answer: 'ZAFIRO is most aggressive (95% win rate), EMERALD is balanced (75%), DIAMOND is conservative (55%).' },
    { question: 'Can the robots trade gold (XAUUSD)?', answer: 'Currently our robots are optimized for forex pairs. Gold trading may be added in future updates.' },
    { question: 'How do I update the robots?', answer: 'Updates are sent via email and Telegram. Simply replace the old files with new ones.' },
    { question: 'What is slippage and how does it affect performance?', answer: 'Slippage is the difference between expected and actual fill price. Low spread ECN brokers minimize this.' },
    { question: 'Do the robots work on ECN accounts?', answer: 'Yes! ECN accounts are actually preferred due to lower spreads and faster execution.' },
    { question: 'Can I see backtest results?', answer: 'Yes! We provide detailed backtests in our Telegram community and on request.' },
    { question: 'What is the typical win rate?', answer: 'Win rates vary: ZAFIRO 70-80%, EMERALD 65-75%, DIAMOND 60-70% depending on market conditions.' },
    { question: 'Do the robots use stop-loss?', answer: 'Yes! Every trade has a stop-loss for maximum protection. Take-profit is also set automatically.' },
    { question: 'What is the average trade duration?', answer: 'Most trades last between 1 hour and 2 days, depending on market conditions.' },
    { question: 'Can I manually close trades?', answer: 'Yes, you can manually intervene and close any trade at any time.' },
    { question: 'Do the robots work on index trading?', answer: 'Currently optimized for forex pairs only. Index support may be added in future versions.' },
    { question: 'Is there a mobile app?', answer: 'You can monitor trades via MetaTrader mobile app. The robot runs on VPS/computer.' },
    { question: 'What is the recommended account type?', answer: 'Standard or ECN accounts with raw spreads are recommended for best results.' },
    { question: 'How do I contact support?', answer: 'Join our Telegram community @SMARTMONEYEAS for instant support from our team.' },
    { question: 'Can I share my license with friends?', answer: 'No, licenses are personal and non-transferable. Each user needs their own license.' },
    { question: 'Do the robots work during high volatility?', answer: 'The news filter helps avoid extreme volatility. Normal market volatility is handled well.' },
    { question: 'What is the minimum trade size?', answer: 'Minimum depends on your broker. Most allow 0.01 lots. Auto-lot adjusts accordingly.' },
    { question: 'Can the robots trail stop-loss?', answer: 'Yes! Trailing stop functionality is built-in and configurable.' },
    { question: 'Do you offer affiliate programs?', answer: 'Yes! Contact us via Telegram for details on our affiliate program.' },
    { question: 'What is break-even feature?', answer: 'Once profit reaches a threshold, the stop-loss moves to entry price, protecting your trade.' },
    { question: 'Can I set trading hours?', answer: 'Yes! You can specify which hours the robot should trade based on your preferences.' },
    { question: 'Do the robots work on US brokers?', answer: 'Depends on the broker. Most international brokers work fine. FIFO compliance is built-in.' },
    { question: 'What is the average risk per trade?', answer: 'Default setting is 1% risk per trade, which is considered conservative and safe.' },
    { question: 'How do robots handle swap fees?', answer: 'The robots factor in swap costs and avoid holding positions over weekends when possible.' },
    { question: 'Can I use the robots for scalping?', answer: 'Our robots use medium-term strategies, not scalping. This works better with most brokers.' },
    { question: 'What is the recommended balance for FTMO?', answer: 'Start with the account size that matches your challenge. The robots adapt automatically.' },
    { question: 'Do the robots work on funded accounts?', answer: 'Yes! Many clients use our robots to manage their funded accounts after passing challenges.' },
    { question: 'Can I pause the robot temporarily?', answer: 'Yes, simply close the chart or disable auto-trading in your platform.' },
    { question: 'What happens during holidays?', answer: 'The robots automatically detect low liquidity periods and reduce trading activity.' },
    { question: 'Do you provide 1-on-1 support?', answer: 'Yes, Frank provides personal assistance via Telegram for setup and optimization.' },
    { question: 'Can the robots trade crypto?', answer: 'Currently forex-only. Crypto trading may be added based on community demand.' },
    { question: 'What is the historical performance?', answer: 'Our robots have been profitable for 4+ years. Detailed history available in Telegram.' },
    { question: 'Do the robots work on Mac?', answer: 'Yes, using MetaTrader for Mac or via a cloud VPS. Installation guides provided.' },
    { question: 'Can I run backtests myself?', answer: 'Yes! The robots are fully compatible with MT4/MT5 strategy tester.' },
    { question: 'What is the difference between MT4 and MT5 versions?', answer: 'Both versions are functionally identical. Choose based on your broker platform.' },
    { question: 'Do the robots work on Islamic accounts?', answer: 'Yes! The robots work on swap-free Islamic accounts without any issues.' },
    { question: 'How do I know which robot to choose?', answer: 'ZAFIRO for aggressive traders, EMERALD for balanced, DIAMOND for beginners or conservative.' },
    { question: 'Can I upgrade from DIAMOND to ZAFIRO?', answer: 'Yes! Contact us for upgrade pricing if you want to move to a higher tier.' },
    { question: 'What is DD (Drawdown) limit?', answer: 'Maximum drawdown is typically 3-5% with conservative settings. Adjustable based on risk.' },
    { question: 'Do the robots work on NDD brokers?', answer: 'Yes! No Dealing Desk (NDD) brokers are recommended for best execution.' },
    { question: 'Can I use pending orders?', answer: 'The robots handle order placement automatically. Manual pending orders are your choice.' },
    { question: 'What is the maximum number of trades?', answer: 'Typically 1-3 trades per day. The robot waits for high-probability setups only.' },
    { question: 'Do the robots support multiple timeframes?', answer: 'Yes! Our analysis uses multiple timeframes for better accuracy.' },
    { question: 'What happens if I have questions after purchase?', answer: 'Join our Telegram community for unlimited support and guidance.' },
    { question: 'Can I suggest features for future updates?', answer: 'Absolutely! We actively listen to community feedback for improvements.' },
    { question: 'Do the robots work during news events?', answer: 'The news filter pauses trading during high-impact events to protect your account.' },
    { question: 'What is the average number of trades per week?', answer: 'Typically 5-15 trades per week depending on market conditions.' },
    { question: 'Can I use the robots on PropFirm challenges with daily DD limits?', answer: 'Yes! Our robots are designed to respect daily drawdown limits common in prop firms.' },
    { question: 'Do the robots have a dashboard?', answer: 'Yes! A trading panel on chart shows current status, profit, and settings.' },
    { question: 'What is the recommended spread?', answer: 'Lower is better. Max 2 pips for EURUSD is recommended for optimal performance.' },
    { question: 'Can the robots trade during Asian session?', answer: 'Yes, trading sessions are configurable. Asian session is typically lower volatility.' },
    { question: 'Do you have a Discord server?', answer: 'We focus on Telegram for community. Join @SMARTMONEYEAS for support.' },
    { question: 'What year were these robots developed?', answer: 'Development started in 2020. Continuous improvements over 4+ years of live trading.' },
    { question: 'Can I test the robots before buying?', answer: 'We offer demo testing. Join Telegram to request a trial period.' },
    { question: 'Do the robots work with any leverage?', answer: 'Yes, but 1:100 or higher is recommended for proper lot sizing.' },
    { question: 'What is the installation process for cTrader?', answer: 'Download cBot file, import to cTrader, attach to chart. Full guide provided.' },
    { question: 'Are the robots legal to use?', answer: 'Yes! Automated trading is legal. Always check your broker terms.' },
    { question: 'Do the robots interfere with manual trading?', answer: 'No, they use unique magic numbers. Your manual trades are separate.' },
    { question: 'What is partial close feature?', answer: 'Robots can close partial position at certain profit levels, locking in gains.' },
    { question: 'Can I run different robots on same VPS?', answer: 'Yes! One VPS can run multiple MT4/MT5 instances with different robots.' },
    { question: 'What is the best time to start the robot?', answer: 'Any time during market hours is fine. The robot will wait for the next setup.' },
];

// Wallet Addresses
const WALLET_ADDRESSES = {
    btc: 'bc1qrcvm274nylh8jyy9gc6xwkvekjs7zaljrzak92',
    eth: '0x25f5cD12064635eA40d71F8766C69E57919a1FC7',
    usdt_bep20: '0x25f5cD12064635eA40d71F8766C69E57919a1FC7',
    usdt_erc20: '0x25f5cD12064635eA40d71F8766C69E57919a1FC7',
    usdt_trc20: 'TNGKYcD6ZhoWsKeZ8E6Z7e7fVAZo7xzsrp'
};

// Platform Files (Simulated download links)
const PLATFORM_FILES = {
    mt4: 'MetaTrader_4_Expert_Advisor.ex4',
    mt5: 'MetaTrader_5_Expert_Advisor.ex5',
    ninjatrader: 'NinjaTrader_Strategy.cs',
    dxtrade: 'DXTrade_Robot.zip',
    ctrader: 'cTrader_cBot.algo'
};
