// ============================================
// I18N - Internationalization System
// ============================================

// Spanish-speaking countries
const SPANISH_COUNTRIES = ['ES', 'MX', 'AR', 'CO', 'PE', 'CL', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'];

// Current language
let currentLang = 'en';

// Translations dictionary
const TRANSLATIONS = {
    en: {
        // Header
        nav_products: "PRODUCTS",
        nav_comparison: "COMPARISON",
        nav_testimonials: "TESTIMONIALS",
        nav_community: "COMMUNITY",
        nav_faq: "FAQ",

        // Hero
        hero_title_1: "PROFESSIONAL",
        hero_title_2: "TRADING ROBOTS",
        hero_marquee: "⭐ 4+ Years of Proven Results ⭐ 6000+ Active Community Members ⭐ Premium Trading Robots ⭐ Lifetime License ⭐",
        hero_badge_1: "LIFETIME LICENSE",
        hero_badge_2: "FREE UPDATES",
        hero_badge_3: "IMMEDIATE DELIVERY",
        hero_cta_products: "EXPLORE ROBOTS",
        hero_cta_telegram: "JOIN COMMUNITY",

        // Product badges
        badge_best_seller: "BEST SELLER ⭐ BEST SELLER ⭐ BEST SELLER ⭐ BEST SELLER ⭐ ",
        badge_popular: "POPULAR 🔥 POPULAR 🔥 POPULAR 🔥 POPULAR 🔥 ",
        badge_best_value: "BEST VALUE 💎 BEST VALUE 💎 BEST VALUE 💎 BEST VALUE 💎 ",

        // Products
        products_title: "CHOOSE YOUR",
        products_title_glow: "TRADING ROBOT",
        launch_price: "LAUNCH PRICE",
        add_to_cart: "ADD TO CART",
        price_original: "ORIGINAL PRICE",
        price_offer: "OFFER PRICE",

        // ZAFIRO
        zafiro_subtitle: "THE BEST TRADING ROBOT",
        zafiro_f1: "85% Funding Challenge Success Rate",
        zafiro_f2: "Pass Challenge in 5-15 Days (approx)",
        zafiro_f3: "Advanced News Filter",
        zafiro_f4: "Lifetime License",
        zafiro_f5: "All Future Updates Included",
        zafiro_f6: "NO PRESETS NEEDED",

        // EMERALD
        emerald_subtitle: "THE SECOND BEST TRADING ROBOT",
        emerald_f1: "70% Funding Challenge Success Rate",
        emerald_f2: "Pass Challenge in 30-60 Days (approx)",
        emerald_f3: "Advanced News Filter",
        emerald_f4: "Lifetime License",
        emerald_f5: "All Future Updates Included",
        emerald_f6: "NO PRESETS NEEDED",

        // DIAMOND
        diamond_subtitle: "THE BEST ECONOMIC TRADING ROBOT",
        diamond_f1: "58% Funding Challenge Success Rate",
        diamond_f2: "Pass Challenge in 60-120 Days (approx)",
        diamond_f3: "Advanced News Filter",
        diamond_f4: "Lifetime License",
        diamond_f5: "All Future Updates Included",
        diamond_f6: "NO PRESETS NEEDED",

        // Platforms
        platforms_title: "COMPATIBLE",
        platforms_title_glow: "PLATFORMS",
        platforms_subtitle: "Our robots work seamlessly with all major trading platforms",

        // Comparison
        comparison_title: "ROBOT",
        comparison_title_glow: "COMPARISON",

        // Comparison Table - Headers
        tbl_feature: "Feature",
        tbl_robot_overview: "ROBOT OVERVIEW",
        tbl_description: "Description",
        tbl_desc_zafiro: "<span style='color:#ff00ff'>THE BEST</span> Trading Robot",
        tbl_desc_emerald: "<span style='color:#00ff00'>THE SECOND BEST</span> Trading Robot",
        tbl_desc_diamond: "<span style='color:#00ffff'>THE BEST ECONOMIC</span> Trading Robot",
        tbl_version: "Current Version",
        tbl_launch_price: "Launch Price",

        // Comparison Table - Funding Challenges
        tbl_funding_challenges: "FUNDING CHALLENGES PERFORMANCE",
        tbl_pass_challenge: "Pass Challenge",
        tbl_time_pass: "Time to Pass",
        tbl_success_prob: "Winrate",
        tbl_monthly_returns: "Approximate Monthly Returns",

        // Comparison Table - Technical Specs
        tbl_tech_specs: "TECHNICAL SPECIFICATIONS",
        tbl_confirmations: "Confirmations to Trade",
        tbl_risk_operation: "Risk Per Operation",
        tbl_news_filter: "News Filter (Forex Factory)",
        tbl_ai: "Artificial Intelligence",
        tbl_all_strategies: "All Strategies at Once",
        tbl_london_session: "Operate in London Session",
        tbl_ny_session: "Operate in New York Session",

        // Comparison Table - Platform Compatibility
        tbl_platform_compat: "PLATFORM COMPATIBILITY",

        // Comparison Table - User Experience
        tbl_user_exp: "USER EXPERIENCE",
        tbl_setfiles: "Setfiles Required",
        tbl_not_needed: "NOT NEEDED",
        tbl_min_capital: "Minimum Capital Required",
        tbl_none: "NONE",
        tbl_martingale: "Martingale / Grid / Hedging",
        tbl_never: "NEVER",
        tbl_can_banned: "Can Be Banned by Prop Firms",
        tbl_no: "NO",

        // Comparison Table - License & Support
        tbl_license_support: "LICENSE & SUPPORT",
        tbl_license_type: "License Type",
        tbl_lifetime: "LIFETIME",
        tbl_free_updates: "Free Future Updates",
        tbl_included: "INCLUDED",
        tbl_unique_entries: "Unique Entry Modifications",

        // Comparison Table - What You Receive
        tbl_what_receive: "WHAT YOU RECEIVE",
        tbl_robot_file: "The Robot (.ex4 / .ex5)",
        tbl_vps_access: "VPS Server Access",
        tbl_pdf_manual: "PDF Manual",
        tbl_telegram_access: "Telegram Community Access",
        tbl_immediate_delivery: "Immediate Delivery",

        // Comparison Table - Payment
        tbl_payment_options: "PAYMENT OPTIONS",
        tbl_crypto_discount: "Crypto Payment Discount",
        tbl_usdt_discount: "8% OFF WITH USDT",
        tbl_payment_methods: "Payment Methods",
        tbl_buy_now: "BUY NOW",

        // Notes
        note_risk_title: "Risk Management:",
        note_risk_text: "All robots use the same conservative 1% risk per operation. No difference in risk management from cheapest to most expensive.",
        note_user_title: "User-Friendly:",
        note_user_text: "No setfiles needed. Robots auto-adjust to your account size for optimal risk management.",
        note_updates_title: "Monthly Updates:",
        note_updates_text: "Free lifetime updates included. I review and optimize each EA monthly based on current market conditions.",
        note_entries_title: "Unique Entries:",
        note_entries_text: "Small internal modifications ensure no two entries are exactly the same, protecting you from broker detection.",
        note_vps_title: "VPS 24/7:",
        note_vps_text: "Robots run continuously on VPS servers. We provide setup guides and recommended VPS providers for optimal performance.",
        note_prop_title: "Prop Firm Ready:",
        note_prop_text: "All robots are optimized for FTMO challenges with built-in DD limits.",

        // Testimonials
        testimonials_title: "WHAT OUR",
        testimonials_title_glow: "CLIENTS SAY",

        // Community
        community_title: "JOIN OUR",
        community_title_glow: "COMMUNITY",
        community_text: "+6000 Active Members | Daily Support | Real Results",
        view_telegram: "JOIN ON TELEGRAM",

        // Results Channel
        results_title: "My EAs results 🚀",
        results_subscribers: "779 subscribers",
        results_desc: "🤖 THE BEST TRADING ROBOT RESULTS",
        results_channel: "📊 RESULTS CHANNEL:",
        view_results: "VIEW RESULTS ON TELEGRAM",

        // Notifications
        notif_added_to_cart: "ADDED TO CART",
        notif_already_in_cart: "ALREADY IN CART!",
        notif_removed_from_cart: "Product removed from cart",
        notif_cart_empty: "Your cart is empty!",
        notif_select_payment: "Please select a payment method!",
        notif_address_copied: "Address copied to clipboard!",
        notif_payment_confirmed: "Payment confirmed!",
        notif_fill_required: "Please fill in all required fields!",

        // Customer Info Modal
        customer_info_title: "CUSTOMER INFORMATION",
        field_name: "Name",
        field_lastname: "Last Name",
        field_email: "Email (Opzionale)",
        field_optional: "(optional)",
        btn_confirm_info: "CONFIRM ✓",

        // FAQ
        faq_title: "FREQUENTLY ASKED",
        faq_title_glow: "QUESTIONS",
        faq_search_placeholder: "Search questions...",

        // FAQ Questions & Answers (All 100)
        faq_q1: "What is the minimum account size required?",
        faq_a1: "There is no minimum account size. Our EAs automatically adjust risk based on your account balance, making them suitable for any account size from $100 to $1,000,000+.",
        faq_q2: "Do I need trading experience to use these EAs?",
        faq_a2: "No trading experience required! Our EAs are plug-and-play. Simply install on your platform, and they start trading automatically with optimized settings.",
        faq_q3: "How long does delivery take?",
        faq_a3: "Delivery is IMMEDIATE after payment confirmation. You will receive download links via email within minutes.",
        faq_q4: "Are updates really free forever?",
        faq_a4: "Yes! All future updates are included at no extra cost. We update our EAs monthly to adapt to changing market conditions.",
        faq_q5: "What is your refund policy?",
        faq_a5: "Due to the digital nature of our products, we cannot offer refunds. However, we have 4+ years of proven results and 6000+ satisfied clients.",
        faq_q6: "Can I use these on a prop firm account?",
        faq_a6: "Absolutely! Our EAs are specifically designed for FTMO challenges with conservative risk management.",
        faq_q7: "Do I need any SET files to run these robots?",
        faq_a7: "No! All our robots work right out of the box. They automatically recognize your account size and adjust the appropriate risk settings.",
        faq_q8: "What platforms are the robots compatible with?",
        faq_a8: "Our robots are available for MetaTrader 4, MetaTrader 5, NinjaTrader, DXTrade, and cTrader. You receive files for all platforms.",
        faq_q9: "What is the success rate for funding challenges?",
        faq_a9: "ZAFIRO EA has 85% success rate (approx 5-15 days), EMERALD EA has 70% (approx 30-60 days), and DIAMOND EA has 58% (approx 60-120 days).",
        faq_q10: "Can I use these robots on a live account?",
        faq_a10: "Yes! While optimized for funding challenges, they work perfectly on live accounts as well.",
        faq_q11: "What payment methods do you accept?",
        faq_a11: "We accept USDT (Tether) via BEP20 and TRC20 networks with an 8% discount.",
        faq_q12: "Do I need VPS to run these robots?",
        faq_a12: "A VPS is highly recommended for 24/7 operation. We include a detailed VPS setup guide with your purchase.",
        faq_q13: "How does the News Filter work?",
        faq_a13: "All robots include an advanced News Filter powered by Forex Factory that pauses trading during high-impact news events.",
        faq_q14: "Can I customize the risk settings?",
        faq_a14: "Yes! While default settings work perfectly, advanced users can customize risk parameters, lot sizes, and trading hours.",
        faq_q15: "What kind of support do you offer?",
        faq_a15: "We have an active Telegram community with 6000+ members. Frank (the developer) is active and provides regular updates.",
        faq_q16: "Which currency pairs do the robots trade?",
        faq_a16: "Our robots primarily trade XAUUSD (Gold), which is the pair where all audited accounts were tested and verified. However, they can be configured to work with any trading pair.",
        faq_q17: "What is the average monthly return?",
        faq_a17: "Returns vary based on market conditions and risk settings. Historical data shows 5-15% monthly with conservative settings.",
        faq_q18: "Can I run multiple EAs on the same account?",
        faq_a18: "Yes, but we recommend using separate accounts or different magic numbers to track performance accurately.",
        faq_q19: "What is the maximum drawdown?",
        faq_a19: "With conservative settings, maximum drawdown is typically under 5%. You can adjust risk settings to match your tolerance.",
        faq_q20: "Do the robots work on all brokers?",
        faq_a20: "Yes, our robots work on any broker that supports MT4, MT5, or other compatible platforms. Low spread brokers are recommended.",
        faq_q21: "How often are the robots updated?",
        faq_a21: "We provide monthly updates to optimize performance based on current market conditions.",
        faq_q22: "Can I use the robots on demo accounts?",
        faq_a22: "Yes! We encourage testing on demo accounts first to familiarize yourself with the robots.",
        faq_q23: "What is the trading strategy used?",
        faq_a23: "Our robots use a combination of technical analysis, price action, and proprietary algorithms optimized over 4+ years.",
        faq_q24: "Do the robots trade during weekends?",
        faq_a24: "No, the robots only trade during market hours and automatically pause during weekends.",
        faq_q25: "What is the minimum VPS requirement?",
        faq_a25: "We recommend minimum 1GB RAM and 1 vCPU. ForexVPS, Contabo, and similar services work great.",
        faq_q26: "Can I change the lot size manually?",
        faq_a26: "Yes, you can set fixed lot sizes or use the auto-lot feature based on account balance.",
        faq_q27: "Do the robots use martingale?",
        faq_a27: "No! Our robots use strict risk management without martingale, grid, or averaging strategies.",
        faq_q28: "What happens if my VPS loses connection?",
        faq_a28: "The robots will automatically restart when connection is restored. Open trades remain managed by the broker.",
        faq_q29: "Can I run the robots on my personal computer?",
        faq_a29: "Yes, but your computer must stay on 24/5. A VPS is strongly recommended for consistent performance.",
        faq_q30: "How do I install the robots?",
        faq_a30: "We provide detailed installation guides with screenshots. The process takes about 5 minutes.",
        faq_q31: "What is a magic number?",
        faq_a31: "A magic number is a unique identifier for trades opened by the EA. It helps separate trades from different strategies.",
        faq_q32: "Can I use the same license on multiple accounts?",
        faq_a32: "Your license allows installation on unlimited demo accounts and 1 live account per product.",
        faq_q33: "What timezone should I set?",
        faq_a33: "Use your broker server timezone. Most brokers use GMT+2 or GMT+3 during daylight saving.",
        faq_q34: "Do the robots work on cents accounts?",
        faq_a34: "Yes! The auto-lot feature works perfectly on cent accounts, adjusting lot sizes accordingly.",
        faq_q35: "What is the recommended leverage?",
        faq_a35: "We recommend 1:100 or higher leverage for optimal lot size calculations.",
        faq_q36: "Can the robots blow my account?",
        faq_a36: "With proper risk settings (1% per trade), account blow-up is extremely unlikely. Always use stop-loss.",
        faq_q37: "Do you offer group discounts?",
        faq_a37: "Yes! Contact us via Telegram for group purchases and special discounts.",
        faq_q38: "What is the difference between the three robots?",
        faq_a38: "ZAFIRO is most aggressive (85% win rate), EMERALD is balanced (70%), DIAMOND is conservative (58%).",
        faq_q39: "Can the robots trade gold (XAUUSD)?",
        faq_a39: "Yes! XAUUSD (Gold) is actually the primary trading pair for our robots. All audited accounts were tested and verified on XAUUSD. It is the default and recommended pair for optimal performance.",
        faq_q40: "How do I update the robots?",
        faq_a40: "Updates are sent via email and Telegram. Simply replace the old files with new ones.",
        faq_q41: "What is slippage and how does it affect performance?",
        faq_a41: "Slippage is the difference between expected and actual fill price. Low spread ECN brokers minimize this.",
        faq_q42: "Do the robots work on ECN accounts?",
        faq_a42: "Yes! ECN accounts are actually preferred due to lower spreads and faster execution.",
        faq_q43: "Can I see backtest results?",
        faq_a43: "Yes! We provide detailed backtests in our Telegram community and on request.",
        faq_q44: "What is the typical win rate?",
        faq_a44: "Win rates vary: ZAFIRO 70-80%, EMERALD 65-75%, DIAMOND 60-70% depending on market conditions.",
        faq_q45: "Do the robots use stop-loss?",
        faq_a45: "Yes! Every trade has a stop-loss for maximum protection. Take-profit is also set automatically.",
        faq_q46: "What is the average trade duration?",
        faq_a46: "Most trades last between 1 hour and 2 days, depending on market conditions.",
        faq_q47: "Can I manually close trades?",
        faq_a47: "Yes, you can manually intervene and close any trade at any time.",
        faq_q48: "Do the robots work on other instruments besides XAUUSD?",
        faq_a48: "While XAUUSD (Gold) is the primary pair where all audited results were achieved, the robots can be configured to trade any pair or instrument. Results may vary on other instruments.",
        faq_q49: "Is there a mobile app?",
        faq_a49: "You can monitor trades via MetaTrader mobile app. The robot runs on VPS/computer.",
        faq_q50: "What is the recommended account type?",
        faq_a50: "Standard or ECN accounts with raw spreads are recommended for best results.",
        faq_q51: "How do I contact support?",
        faq_a51: "Join our Telegram community @SMARTMONEYEAS for instant support from our team.",
        faq_q52: "Can I share my license with friends?",
        faq_a52: "No, licenses are personal and non-transferable. Each user needs their own license.",
        faq_q53: "Do the robots work during high volatility?",
        faq_a53: "The news filter helps avoid extreme volatility. Normal market volatility is handled well.",
        faq_q54: "What is the minimum trade size?",
        faq_a54: "Minimum depends on your broker. Most allow 0.01 lots. Auto-lot adjusts accordingly.",
        faq_q55: "Can the robots trail stop-loss?",
        faq_a55: "Yes! Trailing stop functionality is built-in and configurable.",
        faq_q56: "Do you offer affiliate programs?",
        faq_a56: "Yes! Contact us via Telegram for details on our affiliate program.",
        faq_q57: "What is break-even feature?",
        faq_a57: "Once profit reaches a threshold, the stop-loss moves to entry price, protecting your trade.",
        faq_q58: "Can I set trading hours?",
        faq_a58: "Yes! You can specify which hours the robot should trade based on your preferences.",
        faq_q59: "Do the robots work on US brokers?",
        faq_a59: "Depends on the broker. Most international brokers work fine. FIFO compliance is built-in.",
        faq_q60: "What is the average risk per trade?",
        faq_a60: "Default setting is 1% risk per trade, which is considered conservative and safe.",
        faq_q61: "How do robots handle swap fees?",
        faq_a61: "The robots factor in swap costs and avoid holding positions over weekends when possible.",
        faq_q62: "Can I use the robots for scalping?",
        faq_a62: "Our robots use medium-term strategies, not scalping. This works better with most brokers.",
        faq_q63: "What is the recommended balance for FTMO?",
        faq_a63: "Start with the account size that matches your challenge. The robots adapt automatically.",
        faq_q64: "Do the robots work on funded accounts?",
        faq_a64: "Yes! Many clients use our robots to manage their funded accounts after passing challenges.",
        faq_q65: "Can I pause the robot temporarily?",
        faq_a65: "Yes, simply close the chart or disable auto-trading in your platform.",
        faq_q66: "What happens during holidays?",
        faq_a66: "The robots automatically detect low liquidity periods and reduce trading activity.",
        faq_q67: "Do you provide 1-on-1 support?",
        faq_a67: "Yes, Frank provides personal assistance via Telegram for setup and optimization.",
        faq_q68: "Can the robots trade crypto?",
        faq_a68: "Currently forex-only. Crypto trading may be added based on community demand.",
        faq_q69: "What is the historical performance?",
        faq_a69: "Our robots have been profitable for 4+ years. Detailed history available in Telegram.",
        faq_q70: "Do the robots work on Mac?",
        faq_a70: "Yes, using MetaTrader for Mac or via a cloud VPS. Installation guides provided.",
        faq_q71: "Can I run backtests myself?",
        faq_a71: "Yes! The robots are fully compatible with MT4/MT5 strategy tester.",
        faq_q72: "What is the difference between MT4 and MT5 versions?",
        faq_a72: "Both versions are functionally identical. Choose based on your broker platform.",
        faq_q73: "Do the robots work on Islamic accounts?",
        faq_a73: "Yes! The robots work on swap-free Islamic accounts without any issues.",
        faq_q74: "How do I know which robot to choose?",
        faq_a74: "ZAFIRO for aggressive traders, EMERALD for balanced, DIAMOND for beginners or conservative.",
        faq_q75: "Can I upgrade from DIAMOND to ZAFIRO?",
        faq_a75: "Yes! Contact us for upgrade pricing if you want to move to a higher tier.",
        faq_q76: "What is DD (Drawdown) limit?",
        faq_a76: "Maximum drawdown is typically 3-5% with conservative settings. Adjustable based on risk.",
        faq_q77: "Do the robots work on NDD brokers?",
        faq_a77: "Yes! No Dealing Desk (NDD) brokers are recommended for best execution.",
        faq_q78: "Can I use pending orders?",
        faq_a78: "The robots handle order placement automatically. Manual pending orders are your choice.",
        faq_q79: "What is the maximum number of trades?",
        faq_a79: "Typically 1-3 trades per day. The robot waits for high-probability setups only.",
        faq_q80: "Do the robots support multiple timeframes?",
        faq_a80: "Yes! Our analysis uses multiple timeframes for better accuracy.",
        faq_q81: "What happens if I have questions after purchase?",
        faq_a81: "Join our Telegram community for unlimited support and guidance.",
        faq_q82: "Can I suggest features for future updates?",
        faq_a82: "Absolutely! We actively listen to community feedback for improvements.",
        faq_q83: "Do the robots work during news events?",
        faq_a83: "The news filter pauses trading during high-impact events to protect your account.",
        faq_q84: "What is the average number of trades per week?",
        faq_a84: "Typically 5-15 trades per week depending on market conditions.",
        faq_q85: "Can I use the robots on PropFirm challenges with daily DD limits?",
        faq_a85: "Yes! Our robots are designed to respect daily drawdown limits common in prop firms.",
        faq_q86: "Do the robots have a dashboard?",
        faq_a86: "Yes! A trading panel on chart shows current status, profit, and settings.",
        faq_q87: "What is the recommended spread?",
        faq_a87: "Lower is better. Max 2 pips for EURUSD is recommended for optimal performance.",
        faq_q88: "Can the robots trade during Asian session?",
        faq_a88: "Yes, trading sessions are configurable. Asian session is typically lower volatility.",
        faq_q89: "Do you have a Discord server?",
        faq_a89: "We focus on Telegram for community. Join @SMARTMONEYEAS for support.",
        faq_q90: "What year were these robots developed?",
        faq_a90: "Development started in 2020. Continuous improvements over 4+ years of live trading.",
        faq_q91: "Can I test the robots before buying?",
        faq_a91: "We offer demo testing. Join Telegram to request a trial period.",
        faq_q92: "Do the robots work with any leverage?",
        faq_a92: "Yes, but 1:100 or higher is recommended for proper lot sizing.",
        faq_q93: "What is the installation process for cTrader?",
        faq_a93: "Download cBot file, import to cTrader, attach to chart. Full guide provided.",
        faq_q94: "Are the robots legal to use?",
        faq_a94: "Yes! Automated trading is legal. Always check your broker terms.",
        faq_q95: "Do the robots interfere with manual trading?",
        faq_a95: "No, they use unique magic numbers. Your manual trades are separate.",
        faq_q96: "What is partial close feature?",
        faq_a96: "Robots can close partial position at certain profit levels, locking in gains.",
        faq_q97: "Can I run different robots on same VPS?",
        faq_a97: "Yes! One VPS can run multiple MT4/MT5 instances with different robots.",
        faq_q98: "What is the best time to start the robot?",
        faq_a98: "Any time during market hours is fine. The robot will wait for the next setup.",
        faq_q99: "Do the robots work on micro accounts?",
        faq_a99: "Yes! Micro and cent accounts are fully supported with auto-lot sizing.",
        faq_q100: "Can I get a refund if unsatisfied?",
        faq_a100: "Due to digital nature, no refunds. But our 4+ years track record speaks for itself.",

        // Cart
        cart_title: "SHOPPING CART",
        cart_btn_text: "CART",
        cart_empty: "Your cart is empty",
        cart_total: "TOTAL:",
        continue_shopping: "CONTINUE SHOPPING",
        checkout: "PROCEED TO CHECKOUT",
        remove: "Remove",

        // Checkout
        checkout_title: "CHECKOUT",
        order_summary: "ORDER SUMMARY",
        order_number: "Order #:",
        select_payment: "SELECT PAYMENT METHOD",
        send_payment: "SEND PAYMENT TO:",
        copy: "COPY",
        discount_badge: "8% OFF",
        payment_note: "⚡ IMMEDIATE DELIVERY after payment confirmation",
        confirm_payment: "CONFIRM PAYMENT & DOWNLOAD",

        // Download Modal
        payment_confirmed: "✓ PAYMENT CONFIRMED",
        thank_you: "THANK YOU FOR YOUR PURCHASE!",
        order_processed: "Your order has been processed.",
        delivery_note: "⚡ IMMEDIATE DELIVERY - Your files are ready!",
        download_robots: "DOWNLOAD YOUR ROBOTS:",
        what_you_receive: "WHAT YOU RECEIVE:",
        receive_robot: "✓ THE ROBOT (All Platforms)",
        receive_vps: "✓ VPS Setup Guide (PDF)",
        receive_manual: "✓ Installation Manual (PDF)",
        receive_updates: "✓ INCLUDED UPDATES (Lifetime)",

        // Payment Confirmation Modal (Expanded)
        payment_confirmed_title: "PAYMENT CONFIRMED!",
        next_step_title: "📱 NEXT STEP",
        telegram_instruction: "Send a message to <a href='https://t.me/frankeasdeveloper' target='_blank' style='color: var(--color-emerald); font-weight: 700;'>@frankeasdeveloper</a> on Telegram with your payment receipt.",
        contact_telegram_btn: "📨 CONTACT ON TELEGRAM",
        immediate_delivery_text: "⚡ IMMEDIATE DELIVERY after verification",
        includes_text: "📦 Includes: MT4/MT5 files • Installation guide • Video tutorial • VPS guide • Lifetime license • Telegram community access",

        // Telegram Card
        telegram_title: "The best trading robots 🤖",
        telegram_members: "6200 members, 149 online",
        telegram_verified: "✅ ONLY AUTHORIZED SELLER",
        telegram_main: "⚡ MAIN GROUP:",

        // Chat
        chat_online: "● Online",
        chat_placeholder: "Type your message...",

        // Chatbot
        chat_greeting: "Hi, I'm Frank. I'm the exclusive creator of all my products. How can I help you?",
        chat_prices: "💰 **Prices:**\n🔮 ZAFIRO: $2,950\n💚 EMERALD: $1,950\n💎 DIAMOND: $950\n\n🎁 **15% discount** with USDT!",
        chat_zafiro: "🔮 **ZAFIRO EA** - $2,950\n✅ 85% winrate\n✅ Pass challenges in ~15 days\n✅ I GUARANTEE to pass challenges\n✅ 1-on-1 Zoom support\n✅ Backtesting included",
        chat_emerald: "💚 **EMERALD EA** - $1,950\n✅ 70% winrate\n✅ Pass challenges in ~30 days\n✅ Smart Money Concepts\n✅ Lifetime updates",
        chat_diamond: "💎 **DIAMOND EA** - $950\n✅ 58% winrate\n✅ Pass challenges in ~1 month\n✅ Essential version\n✅ Perfect to start",
        chat_payment: "💳 **Payment:**\n• USDT (BEP20/TRC20) - **15% OFF**\n\n📱 Telegram: @frankeasdeveloper",
        chat_guarantee: "🛡️ **30-Day Guarantee**\nFull refund, no questions asked.",
        chat_fondeo: "🏆 **Funding Services:**\n\n**Challenge Pass:**\nI charge = challenge cost\nI pass it in <15 days (VPS included)\n\n**Management:**\n50/50 profits",
        chat_help: "How can I help you?\n\n• 💰 **Prices**\n• 🔮 **ZAFIRO/EMERALD/DIAMOND**\n• 💳 **Payment** and discounts\n• 🏆 **Funding**\n• 🛡️ **Guarantee**",

        // Quick buttons
        btn_prices: "💰 Prices",
        btn_payment: "💳 Payment",
        btn_fondeo: "🏆 Funding",
        btn_guarantee: "🛡️ Guarantee",

        // Profit Calculator
        calc_title: "PROFIT",
        calc_title_glow: "CALCULATOR",
        calc_subtitle: "Simulate your potential earnings with our trading robots",
        calc_initial_balance: "Initial Balance ($)",
        calc_risk_per_trade: "Risk per Trade (%)",
        calc_custom: "Custom",
        calc_time_period: "Time Period",
        calc_1_week: "1 Week",
        calc_1_month: "1 Month",
        calc_1_year: "1 Year",
        calc_10_years: "10 Years",
        calc_projected_profit: "Projected Profit:",
        calc_final_balance: "Final Balance:",
        calc_success_rate: "Winrate",

        // Audited Accounts
        audited_title: "OUR AUDITED",
        audited_title_glow: "ACCOUNTS",
        audited_powered_by: "Powered by",
        audited_verified_text: "Verified performance on MyFxBook",
        audited_request_link: "Request Link",

        // Pass Challenges
        nav_challenges: "CHALLENGES",
        pass_challenges_title: "PASS CHALLENGES",
        pass_challenges_title_glow: "SERVICE",
        pass_challenges_subtitle: "Professional challenge passing service for all major prop firms",
        pass_challenges_compatible: "Compatible with all major prop firms",
        pass_challenge_label: "Challenge",
        pass_time: "Pass time: 5-10 days",
        pass_no_rules: "No rules violated",
        pass_refund: "100% refund on failure",
        pass_any_firm: "Any prop firm",
        pass_add_cart: "ADD TO CART",
        pass_popular: "POPULAR",
        pass_coming_soon: "COMING SOON...",
        pass_coming_soon_sub: "This service will be available soon",

        // Trustpilot
        trustpilot_excellent: "Excellent",
        trustpilot_reviews_on: "reviews on"
    },

    it: {
        // Header
        nav_products: "PRODOTTI",
        nav_comparison: "CONFRONTO",
        nav_testimonials: "TESTIMONIANZE",
        nav_community: "COMUNITÀ",
        nav_faq: "FAQ",

        // Hero
        hero_title_1: "ROBOT DI TRADING",
        hero_title_2: "PROFESSIONALI",
        hero_marquee: "⭐ 4+ Anni di Risultati Comprovati ⭐ 6000+ Membri Attivi nella Comunità ⭐ Robot di Trading Premium ⭐ Licenza a Vita ⭐",
        hero_badge_1: "LICENZA A VITA",
        hero_badge_2: "AGGIORNAMENTI GRATIS",
        hero_badge_3: "CONSEGNA IMMEDIATA",
        hero_cta_products: "ESPLORA ROBOT",
        hero_cta_telegram: "UNISCITI ALLA COMUNITÀ",

        // Product badges
        badge_best_seller: "PIÙ VENDUTO ⭐ PIÙ VENDUTO ⭐ PIÙ VENDUTO ⭐ PIÙ VENDUTO ⭐ ",
        badge_popular: "POPOLARE 🔥 POPOLARE 🔥 POPOLARE 🔥 POPOLARE 🔥 ",
        badge_best_value: "MIGLIOR VALORE 💎 MIGLIOR VALORE 💎 MIGLIOR VALORE 💎 MIGLIOR VALORE 💎 ",

        // Products
        products_title: "SCEGLI IL TUO",
        products_title_glow: "ROBOT DI TRADING",
        launch_price: "PREZZO DI LANCIO",
        add_to_cart: "AGGIUNGI AL CARRELLO",
        price_original: "PREZZO ORIGINALE",
        price_offer: "PREZZO OFFERTA",

        // ZAFIRO
        zafiro_subtitle: "IL MIGLIOR ROBOT DI TRADING",
        zafiro_f1: "85% Tasso di Successo nelle Sfide",
        zafiro_f2: "Supera la Sfida in 5-15 Giorni (circa)",
        zafiro_f3: "Filtro Notizie Avanzato",
        zafiro_f4: "Licenza a Vita",
        zafiro_f5: "Tutti gli Aggiornamenti Futuri Inclusi",
        zafiro_f6: "NESSUN PRESET NECESSARIO",

        // EMERALD
        emerald_subtitle: "IL SECONDO MIGLIOR ROBOT DI TRADING",
        emerald_f1: "70% Tasso di Successo nelle Sfide",
        emerald_f2: "Supera la Sfida in 30-60 Giorni (circa)",
        emerald_f3: "Filtro Notizie Avanzato",
        emerald_f4: "Licenza a Vita",
        emerald_f5: "Tutti gli Aggiornamenti Futuri Inclusi",
        emerald_f6: "NESSUN PRESET NECESSARIO",

        // DIAMOND
        diamond_subtitle: "IL MIGLIOR ROBOT ECONOMICO",
        diamond_f1: "58% Tasso di Successo nelle Sfide",
        diamond_f2: "Supera la Sfida in 60-120 Giorni (circa)",
        diamond_f3: "Filtro Notizie Avanzato",
        diamond_f4: "Licenza a Vita",
        diamond_f5: "Tutti gli Aggiornamenti Futuri Inclusi",
        diamond_f6: "NESSUN PRESET NECESSARIO",

        // Platforms
        platforms_title: "PIATTAFORME",
        platforms_title_glow: "COMPATIBILI",
        platforms_subtitle: "I nostri robot funzionano perfettamente con tutte le principali piattaforme di trading",

        // Comparison
        comparison_title: "CONFRONTO",
        comparison_title_glow: "ROBOT",

        // Comparison Table - Headers
        tbl_feature: "Caratteristica",
        tbl_robot_overview: "PANORAMICA ROBOT",
        tbl_description: "Descrizione",
        tbl_desc_zafiro: "<span style='color:#ff00ff'>IL MIGLIOR</span> Robot di Trading",
        tbl_desc_emerald: "<span style='color:#00ff00'>IL SECONDO MIGLIORE</span> Robot di Trading",
        tbl_desc_diamond: "<span style='color:#00ffff'>IL MIGLIORE ECONOMICO</span> Robot di Trading",
        tbl_version: "Versione Attuale",
        tbl_launch_price: "Prezzo di Lancio",

        // Comparison Table - Funding Challenges
        tbl_funding_challenges: "PERFORMANCE SFIDE DI FINANZIAMENTO",
        tbl_pass_challenge: "Supera Sfida",
        tbl_time_pass: "Tempo per Superare",
        tbl_success_prob: "Winrate",
        tbl_monthly_returns: "Rendimenti Mensili Approssimativi",

        // Comparison Table - Technical Specs
        tbl_tech_specs: "SPECIFICHE TECNICHE",
        tbl_confirmations: "Conferme per Operare",
        tbl_risk_operation: "Rischio per Operazione",
        tbl_news_filter: "Filtro Notizie (Forex Factory)",
        tbl_ai: "Intelligenza Artificiale",
        tbl_all_strategies: "Tutte le Strategie Insieme",
        tbl_london_session: "Opera nella Sessione di Londra",
        tbl_ny_session: "Opera nella Sessione di New York",

        // Comparison Table - Platform Compatibility
        tbl_platform_compat: "COMPATIBILITÀ PIATTAFORME",

        // Comparison Table - User Experience
        tbl_user_exp: "ESPERIENZA UTENTE",
        tbl_setfiles: "Setfiles Richiesti",
        tbl_not_needed: "NON NECESSARIO",
        tbl_min_capital: "Capitale Minimo Richiesto",
        tbl_none: "NESSUNO",
        tbl_martingale: "Martingale / Grid / Hedging",
        tbl_never: "MAI",
        tbl_can_banned: "Può Essere Bannato dalle Prop Firms",
        tbl_no: "NO",

        // Comparison Table - License & Support
        tbl_license_support: "LICENZA E SUPPORTO",
        tbl_license_type: "Tipo di Licenza",
        tbl_lifetime: "A VITA",
        tbl_free_updates: "Aggiornamenti Futuri Gratuiti",
        tbl_included: "INCLUSO",
        tbl_unique_entries: "Modifiche di Ingresso Uniche",

        // Comparison Table - What You Receive
        tbl_what_receive: "COSA RICEVI",
        tbl_robot_file: "Il Robot (.ex4 / .ex5)",
        tbl_vps_access: "Accesso Server VPS",
        tbl_pdf_manual: "Manuale PDF",
        tbl_telegram_access: "Accesso Comunità Telegram",
        tbl_immediate_delivery: "Consegna Immediata",

        // Comparison Table - Payment
        tbl_payment_options: "OPZIONI DI PAGAMENTO",
        tbl_crypto_discount: "Sconto Pagamento Crypto",
        tbl_usdt_discount: "8% DI SCONTO CON USDT",
        tbl_payment_methods: "Metodi di Pagamento",
        tbl_buy_now: "ACQUISTA ORA",

        // Notes
        note_risk_title: "Gestione del Rischio:",
        note_risk_text: "Tutti i robot utilizzano lo stesso rischio conservativo dell'1% per operazione.",
        note_user_title: "Facile da Usare:",
        note_user_text: "Nessun setfile necessario. I robot si adattano automaticamente alla dimensione del tuo account.",
        note_updates_title: "Aggiornamenti Mensili:",
        note_updates_text: "Aggiornamenti gratuiti a vita inclusi. Ottimizziamo ogni EA mensilmente.",
        note_entries_title: "Ingressi Unici:",
        note_entries_text: "Piccole modifiche interne assicurano che nessun ingresso sia esattamente uguale.",
        note_vps_title: "VPS 24/7:",
        note_vps_text: "I robot funzionano continuamente su server VPS. Forniamo guide di configurazione.",
        note_prop_title: "Pronto per Prop Firm:",
        note_prop_text: "Tutti i robot sono ottimizzati per le sfide FTMO con limiti DD integrati.",

        // Testimonials
        testimonials_title: "COSA DICONO I",
        testimonials_title_glow: "NOSTRI CLIENTI",

        // Community
        community_title: "UNISCITI ALLA",
        community_title_glow: "COMUNITÀ",
        community_text: "+6000 Membri Attivi | Supporto Quotidiano | Risultati Reali",
        view_telegram: "UNISCITI SU TELEGRAM",

        // Results Channel
        results_title: "Risultati dei miei EA 🚀",
        results_subscribers: "779 iscritti",
        results_desc: "🤖 I MIGLIORI RISULTATI DI ROBOT DI TRADING",
        results_channel: "📊 CANALE RISULTATI:",
        view_results: "VEDI RISULTATI SU TELEGRAM",

        // Notifications
        notif_added_to_cart: "AGGIUNTO AL CARRELLO",
        notif_already_in_cart: "GIÀ NEL CARRELLO!",
        notif_removed_from_cart: "Prodotto rimosso dal carrello",
        notif_cart_empty: "Il tuo carrello è vuoto!",
        notif_select_payment: "Seleziona un metodo di pagamento!",
        notif_address_copied: "Indirizzo copiato negli appunti!",
        notif_payment_confirmed: "Pagamento confermato!",
        notif_fill_required: "Per favore compila tutti i campi obbligatori!",

        // Customer Info Modal
        customer_info_title: "INFORMAZIONI CLIENTE",
        field_name: "Nome",
        field_lastname: "Cognome",
        field_email: "Email (Opzionale)",
        field_optional: "(opzionale)",
        btn_confirm_info: "CONFERMA ✓",

        // FAQ
        faq_title: "DOMANDE",
        faq_title_glow: "FREQUENTI",
        faq_search_placeholder: "Cerca domande...",

        // FAQ Questions & Answers (principales)
        faq_q1: "Qual è la dimensione minima dell'account richiesta?",
        faq_a1: "Non c'è una dimensione minima. I nostri EA si adattano automaticamente al saldo del tuo account.",
        faq_q2: "Ho bisogno di esperienza nel trading per usare questi EA?",
        faq_a2: "No! I nostri EA sono plug-and-play. Basta installarli e iniziano a fare trading automaticamente.",
        faq_q3: "Quanto tempo ci vuole per la consegna?",
        faq_a3: "La consegna è IMMEDIATA dopo la conferma del pagamento.",
        faq_q4: "Gli aggiornamenti sono davvero gratuiti per sempre?",
        faq_a4: "Sì! Tutti gli aggiornamenti futuri sono inclusi senza costi aggiuntivi.",
        faq_q5: "Qual è la vostra politica di rimborso?",
        faq_a5: "A causa della natura digitale dei nostri prodotti, non offriamo rimborsi.",
        faq_q6: "Posso usarli su un account prop firm?",
        faq_a6: "Assolutamente! I nostri EA sono specificamente progettati per le sfide FTMO.",
        faq_q7: "Ho bisogno di file SET per far funzionare questi robot?",
        faq_a7: "No! Tutti i nostri robot funzionano immediatamente senza configurazione.",
        faq_q8: "Con quali piattaforme sono compatibili i robot?",
        faq_a8: "I nostri robot sono disponibili per MetaTrader 4, MetaTrader 5, NinjaTrader, DXTrade e cTrader.",
        faq_q9: "Qual è il tasso di successo per le sfide di finanziamento?",
        faq_a9: "ZAFIRO EA ha il 85% (circa 5-15 giorni), EMERALD EA il 70% (circa 30-60 giorni), DIAMOND EA il 58%.",
        faq_q10: "Posso usare questi robot su un account live?",
        faq_a10: "Sì! Sebbene ottimizzati per le sfide, funzionano perfettamente anche su account live.",

        // Cart
        cart_title: "CARRELLO",
        cart_btn_text: "CARRELLO",
        cart_empty: "Il carrello è vuoto",
        cart_total: "TOTALE:",
        continue_shopping: "CONTINUA ACQUISTI",
        checkout: "PROCEDI AL CHECKOUT",
        remove: "Rimuovi",

        // Checkout
        checkout_title: "CHECKOUT",
        order_summary: "RIEPILOGO ORDINE",
        order_number: "Ordine #:",
        select_payment: "SELEZIONA METODO DI PAGAMENTO",
        send_payment: "INVIA PAGAMENTO A:",
        copy: "COPIA",
        discount_badge: "8% DI SCONTO",
        payment_note: "⚡ CONSEGNA IMMEDIATA dopo la conferma del pagamento",
        confirm_payment: "CONFERMA PAGAMENTO E SCARICA",

        // Download Modal
        payment_confirmed: "✓ PAGAMENTO CONFERMATO",
        thank_you: "GRAZIE PER IL TUO ACQUISTO!",
        order_processed: "Il tuo ordine è stato elaborato.",
        delivery_note: "⚡ CONSEGNA IMMEDIATA - I tuoi file sono pronti!",
        download_robots: "SCARICA I TUOI ROBOT:",
        what_you_receive: "COSA RICEVI:",
        receive_robot: "✓ IL ROBOT (Tutte le Piattaforme)",
        receive_vps: "✓ Guida Configurazione VPS (PDF)",
        receive_manual: "✓ Manuale di Installazione (PDF)",
        receive_updates: "✓ AGGIORNAMENTI INCLUSI (A Vita)",

        // Payment Confirmation Modal
        payment_confirmed_title: "PAGAMENTO CONFERMATO!",
        next_step_title: "📱 PASSO SUCCESSIVO",
        telegram_instruction: "Invia un messaggio a <a href='https://t.me/frankeasdeveloper' target='_blank' style='color: var(--color-emerald); font-weight: 700;'>@frankeasdeveloper</a> su Telegram con la ricevuta del pagamento.",
        contact_telegram_btn: "📨 CONTATTA SU TELEGRAM",
        immediate_delivery_text: "⚡ CONSEGNA IMMEDIATA dopo la verifica",
        includes_text: "📦 Include: File MT4/MT5 • Guida installazione • Video tutorial • Guida VPS • Licenza a vita • Accesso comunità Telegram",

        // Telegram Card
        telegram_title: "I migliori robot di trading 🤖",
        telegram_members: "6200 membri, 149 online",
        telegram_verified: "✅ UNICO VENDITORE AUTORIZZATO",
        telegram_main: "⚡ GRUPPO PRINCIPALE:",

        // Chat
        chat_online: "● Online",
        chat_placeholder: "Scrivi il tuo messaggio...",

        // Chatbot
        chat_greeting: "Ciao, sono Frank. Sono il creatore esclusivo di tutti i miei prodotti. Come posso aiutarti?",
        chat_prices: "💰 **Prezzi:**\n🔮 ZAFIRO: $2,950\n💚 EMERALD: $1,950\n💎 DIAMOND: $950\n\n🎁 **15% di sconto** con USDT!",
        chat_zafiro: "🔮 **ZAFIRO EA** - $2,950\n✅ 85% winrate\n✅ Supera sfide in ~15 giorni\n✅ GARANTISCO il superamento\n✅ Supporto Zoom 1-on-1\n✅ Backtesting incluso",
        chat_emerald: "💚 **EMERALD EA** - $1,950\n✅ 70% winrate\n✅ Supera sfide in ~30 giorni\n✅ Smart Money Concepts\n✅ Aggiornamenti a vita",
        chat_diamond: "💎 **DIAMOND EA** - $950\n✅ 58% winrate\n✅ Supera sfide in ~1 mese\n✅ Versione essenziale\n✅ Perfetto per iniziare",
        chat_payment: "💳 **Pagamento:**\n• USDT (BEP20/TRC20) - **15% DI SCONTO**\n\n📱 Telegram: @frankeasdeveloper",
        chat_guarantee: "🛡️ **Garanzia 30 Giorni**\nRimborso completo, senza domande.",
        chat_fondeo: "🏆 **Servizi di Finanziamento:**\n\n**Superamento Sfida:**\nCosto = costo sfida\nLa supero in <15 giorni (VPS incluso)\n\n**Gestione:**\n50/50 profitti",
        chat_help: "Come posso aiutarti?\n\n• 💰 **Prezzi**\n• 🔮 **ZAFIRO/EMERALD/DIAMOND**\n• 💳 **Pagamento** e sconti\n• 🏆 **Finanziamento**\n• 🛡️ **Garanzia**",

        // Quick buttons
        btn_prices: "💰 Prezzi",
        btn_payment: "💳 Pagamento",
        btn_fondeo: "🏆 Finanziamento",
        btn_guarantee: "🛡️ Garanzia",

        // Profit Calculator
        calc_title: "CALCOLATORE DI",
        calc_title_glow: "PROFITTO",
        calc_subtitle: "Simula i tuoi potenziali guadagni con i nostri robot di trading",
        calc_initial_balance: "Bilancio Iniziale ($)",
        calc_risk_per_trade: "Rischio per Operazione (%)",
        calc_custom: "Pers...",
        calc_time_period: "Periodo di Tempo",
        calc_1_week: "1 Settimana",
        calc_1_month: "1 Mese",
        calc_1_year: "1 Anno",
        calc_10_years: "10 Anni",
        calc_projected_profit: "Profitto Previsto:",
        calc_final_balance: "Bilancio Finale:",
        calc_success_rate: "Winrate",

        // Audited Accounts
        audited_title: "I NOSTRI CONTI",
        audited_title_glow: "VERIFICATI",
        audited_powered_by: "Alimentato da",
        audited_verified_text: "Performance verificata su MyFxBook",
        audited_request_link: "Richiedi Link",

        // Pass Challenges
        nav_challenges: "CHALLENGES",
        pass_challenges_title: "PASS CHALLENGES",
        pass_challenges_title_glow: "SERVICE",
        pass_challenges_subtitle: "Servizio professionale per superare le challenge delle prop firm",
        pass_challenges_compatible: "Compatibile con tutte le principali prop firm",
        pass_challenge_label: "Challenge",
        pass_time: "Tempo di superamento: 5-10 giorni",
        pass_no_rules: "Nessuna regola violata",
        pass_refund: "Rimborso al 100% in caso di fallimento",
        pass_any_firm: "Qualsiasi prop firm",
        pass_add_cart: "AGGIUNGI AL CARRELLO",
        pass_popular: "POPOLARE",
        pass_coming_soon: "PROSSIMAMENTE...",
        pass_coming_soon_sub: "Questo servizio sar\u00e0 disponibile a breve",

        // Trustpilot
        trustpilot_excellent: "Eccellente",
        trustpilot_reviews_on: "recensioni su"
    },

    es: {
        // Header
        nav_products: "PRODUCTOS",
        nav_comparison: "COMPARACION",
        nav_testimonials: "TESTIMONIOS",
        nav_community: "COMUNIDAD",
        nav_faq: "FAQ",

        // Hero
        hero_title_1: "ROBOTS DE TRADING",
        hero_title_2: "PROFESIONALES",
        hero_marquee: "⭐ 4+ Años de Resultados Comprobados ⭐ 6000+ Miembros Activos en la Comunidad ⭐ Robots de Trading Premium ⭐ Licencia de por Vida ⭐",
        hero_badge_1: "LICENCIA DE POR VIDA",
        hero_badge_2: "ACTUALIZACIONES GRATIS",
        hero_badge_3: "ENTREGA INMEDIATA",
        hero_cta_products: "EXPLORAR ROBOTS",
        hero_cta_telegram: "UNIRSE A LA COMUNIDAD",

        // Product badges
        badge_best_seller: "MÁS VENDIDO ⭐ MÁS VENDIDO ⭐ MÁS VENDIDO ⭐ MÁS VENDIDO ⭐ ",
        badge_popular: "POPULAR 🔥 POPULAR 🔥 POPULAR 🔥 POPULAR 🔥 ",
        badge_best_value: "MEJOR VALOR 💎 MEJOR VALOR 💎 MEJOR VALOR 💎 MEJOR VALOR 💎 ",

        // Products
        products_title: "ELIGE TU",
        products_title_glow: "ROBOT DE TRADING",
        launch_price: "PRECIO DE LANZAMIENTO",
        add_to_cart: "AGREGAR AL CARRITO",
        price_original: "PRECIO ORIGINAL",
        price_offer: "PRECIO DE OFERTA",

        // ZAFIRO
        zafiro_subtitle: "EL MEJOR ROBOT DE TRADING",
        zafiro_f1: "85% tasa de éxito en challenges",
        zafiro_f2: "Pasa challenges en 5-15 días (aprox)",
        zafiro_f3: "Filtro de noticias avanzado",
        zafiro_f4: "Licencia de por vida",
        zafiro_f5: "Todas las actualizaciones incluidas",
        zafiro_f6: "NO SE NECESITAN PRESETS",

        // EMERALD
        emerald_subtitle: "EL SEGUNDO MEJOR ROBOT DE TRADING",
        emerald_f1: "70% tasa de éxito en challenges",
        emerald_f2: "Pasa challenges en 30-60 días (aprox)",
        emerald_f3: "Filtro de noticias avanzado",
        emerald_f4: "Licencia de por vida",
        emerald_f5: "Todas las actualizaciones incluidas",
        emerald_f6: "NO SE NECESITAN PRESETS",

        // DIAMOND
        diamond_subtitle: "EL MEJOR ROBOT ECONÓMICO DE TRADING",
        diamond_f1: "58% tasa de éxito en challenges",
        diamond_f2: "Pasa challenges en 60-120 días (aprox)",
        diamond_f3: "Filtro de noticias avanzado",
        diamond_f4: "Licencia de por vida",
        diamond_f5: "Todas las actualizaciones incluidas",
        diamond_f6: "NO SE NECESITAN PRESETS",

        // Platforms
        platforms_title: "PLATAFORMAS",
        platforms_title_glow: "COMPATIBLES",
        platforms_subtitle: "Nuestros robots funcionan perfectamente<br>con todas las plataformas principales",

        // Comparison
        comparison_title: "COMPARACIÓN DE",
        comparison_title_glow: "ROBOTS",

        // Comparison Table - Headers
        tbl_feature: "Nombre del Robot",
        tbl_robot_overview: "DESCRIPCIÓN GENERAL",
        tbl_description: "Descripción",
        tbl_desc_zafiro: "<span style='color:#ff00ff'>EL MEJOR</span> Robot de Trading",
        tbl_desc_emerald: "<span style='color:#00ff00'>EL SEGUNDO MEJOR</span> Robot de Trading",
        tbl_desc_diamond: "<span style='color:#00ffff'>EL MEJOR</span> Robot <span style='color:#00ffff'>ECONÓMICO</span>",
        tbl_version: "Versión Actual",
        tbl_launch_price: "Precio de Lanzamiento",

        // Comparison Table - Funding Challenges
        tbl_funding_challenges: "RENDIMIENTO EN CHALLENGES",
        tbl_pass_challenge: "Pasa Challenges",
        tbl_time_pass: "Tiempo para Pasar",
        tbl_success_prob: "Winrate",
        tbl_monthly_returns: "Retornos Mensuales Aprox.",

        // Comparison Table - Technical Specs
        tbl_tech_specs: "ESPECIFICACIONES TÉCNICAS",
        tbl_confirmations: "Confirmaciones para Operar",
        tbl_risk_operation: "Riesgo por Operación",
        tbl_news_filter: "Filtro de Noticias (Forex Factory)",
        tbl_ai: "Inteligencia Artificial",
        tbl_all_strategies: "Todas las Estrategias a la Vez",
        tbl_london_session: "Opera en Sesión Londres",
        tbl_ny_session: "Opera en Sesión Nueva York",

        // Comparison Table - Platform Compatibility
        tbl_platform_compat: "COMPATIBILIDAD DE PLATAFORMAS",

        // Comparison Table - User Experience
        tbl_user_exp: "EXPERIENCIA DE USUARIO",
        tbl_setfiles: "Archivos SET Requeridos",
        tbl_not_needed: "NO NECESARIO",
        tbl_min_capital: "Capital Mínimo Requerido",
        tbl_none: "NINGUNO",
        tbl_martingale: "Martingala / Grid / Hedging",
        tbl_never: "NUNCA",
        tbl_can_banned: "¿Puede Ser Baneado por Prop Firms?",
        tbl_no: "NO",

        // Comparison Table - License & Support
        tbl_license_support: "LICENCIA Y SOPORTE",
        tbl_license_type: "Tipo de Licencia",
        tbl_lifetime: "DE POR VIDA",
        tbl_free_updates: "Actualizaciones Futuras Gratis",
        tbl_included: "INCLUIDO",
        tbl_unique_entries: "Entradas Únicas Modificadas",

        // Comparison Table - What You Receive
        tbl_what_receive: "LO QUE RECIBES",
        tbl_robot_file: "El Robot (.ex4 / .ex5)",
        tbl_vps_access: "Acceso a Servidor VPS",
        tbl_pdf_manual: "Manual PDF",
        tbl_telegram_access: "Acceso Comunidad Telegram",
        tbl_immediate_delivery: "Entrega Inmediata",

        // Comparison Table - Payment
        tbl_payment_options: "OPCIONES DE PAGO",
        tbl_crypto_discount: "Descuento Pago Crypto",
        tbl_usdt_discount: "8% OFF CON USDT",
        tbl_payment_methods: "Métodos de Pago",
        tbl_buy_now: "COMPRAR AHORA",

        // Notes
        note_risk_title: "Gestión de Riesgo:",
        note_risk_text: "Todos los robots usan el mismo riesgo conservador de 1% por operación. Sin diferencia en gestión de riesgo entre el más barato y el más caro.",
        note_user_title: "Fácil de Usar:",
        note_user_text: "Sin archivos de configuración. Los robots se ajustan automáticamente al tamaño de tu cuenta.",
        note_updates_title: "Actualizaciones Mensuales:",
        note_updates_text: "Actualizaciones de por vida incluidas. Reviso y optimizo cada EA mensualmente basado en condiciones del mercado.",
        note_entries_title: "Entradas Únicas:",
        note_entries_text: "Modificaciones internas aseguran que ninguna entrada sea exactamente igual, protegiéndote de detección del broker.",
        note_vps_title: "VPS 24/7:",
        note_vps_text: "Los robots corren continuamente en servidores VPS. Proveemos guías y VPS recomendados.",
        note_prop_title: "Prop Firm Ready:",
        note_prop_text: "Todos los robots optimizados para challenges de FTMO con límites de DD integrados.",

        // Testimonials
        testimonials_title: "LO QUE DICEN",
        testimonials_title_glow: "NUESTROS CLIENTES",

        // Community
        community_title: "ÚNETE A NUESTRA",
        community_title_glow: "COMUNIDAD",
        community_text: "+6000 Miembros Activos | Soporte Diario | Resultados Reales",
        view_telegram: "UNIRME EN TELEGRAM",

        // Results Channel
        results_title: "Mis resultados EAs 🚀",
        results_subscribers: "779 suscriptores",
        results_desc: "🤖 LOS MEJORES RESULTADOS DE ROBOTS",
        results_channel: "📊 CANAL DE RESULTADOS:",
        view_results: "VER RESULTADOS EN TELEGRAM",

        // Notifications
        notif_added_to_cart: "AÑADIDO AL CARRITO",
        notif_already_in_cart: "¡YA ESTÁ EN EL CARRITO!",
        notif_removed_from_cart: "Producto eliminado del carrito",
        notif_cart_empty: "¡Tu carrito está vacío!",
        notif_select_payment: "¡Por favor selecciona un método de pago!",
        notif_address_copied: "¡Dirección copiada al portapapeles!",
        notif_payment_confirmed: "¡Pago confirmado!",
        notif_fill_required: "¡Por favor complete todos los campos obligatorios!",

        // Customer Info Modal
        customer_info_title: "INFORMACIÓN DEL CLIENTE",
        field_name: "Nombre",
        field_lastname: "Apellido",
        field_email: "Correo electrónico (Opcional)",
        field_optional: "(opcional)",
        btn_confirm_info: "CONFIRMAR ✓",

        // FAQ
        faq_title: "PREGUNTAS",
        faq_title_glow: "FRECUENTES",
        faq_search_placeholder: "Buscar preguntas...",

        // FAQ Questions & Answers (All 100)
        faq_q1: "¿Cuál es el tamaño mínimo de cuenta requerido?",
        faq_a1: "No hay tamaño mínimo de cuenta. Nuestros EAs ajustan automáticamente el riesgo según el saldo de tu cuenta, haciéndolos adecuados para cualquier tamaño de cuenta desde $100 hasta $1,000,000+.",
        faq_q2: "¿Necesito experiencia en trading para usar estos EAs?",
        faq_a2: "¡No se requiere experiencia en trading! Nuestros EAs son plug-and-play. Simplemente instala en tu plataforma y comienzan a operar automáticamente con configuraciones optimizadas.",
        faq_q3: "¿Cuánto tarda la entrega?",
        faq_a3: "La entrega es INMEDIATA después de la confirmación del pago. Recibirás los enlaces de descarga por correo electrónico en minutos.",
        faq_q4: "¿Las actualizaciones son realmente gratis para siempre?",
        faq_a4: "¡Sí! Todas las actualizaciones futuras están incluidas sin costo adicional. Actualizamos nuestros EAs mensualmente para adaptarnos a las condiciones cambiantes del mercado.",
        faq_q5: "¿Cuál es su política de reembolso?",
        faq_a5: "Debido a la naturaleza digital de nuestros productos, no podemos ofrecer reembolsos. Sin embargo, tenemos 4+ años de resultados comprobados y 6000+ clientes satisfechos.",
        faq_q6: "¿Puedo usarlos en cuentas de fondeo?",
        faq_a6: "¡Por supuesto! Nuestros EAs están diseñados específicamente para challenges de FTMO con gestión de riesgo conservadora.",
        faq_q7: "¿Necesito archivos SET para ejecutar estos robots?",
        faq_a7: "¡No! Todos nuestros robots funcionan de inmediato. Reconocen automáticamente el tamaño de tu cuenta y ajustan el riesgo apropiado.",
        faq_q8: "¿Con qué plataformas son compatibles los robots?",
        faq_a8: "Nuestros robots están disponibles para MetaTrader 4, MetaTrader 5, NinjaTrader, DXTrade y cTrader. Recibes archivos para todas las plataformas.",
        faq_q9: "¿Cuál es la tasa de éxito para challenges de fondeo?",
        faq_a9: "ZAFIRO EA tiene 85% de éxito (aprox 5-15 días), EMERALD EA tiene 70% (aprox 30-60 días), y DIAMOND EA tiene 58% (aprox 60-120 días).",
        faq_q10: "¿Puedo usar estos robots en cuenta real?",
        faq_a10: "¡Sí! Aunque optimizados para challenges, funcionan perfectamente en cuentas reales también.",
        faq_q11: "¿Qué métodos de pago aceptan?",
        faq_a11: "Aceptamos USDT (Tether) vía redes BEP20 y TRC20 con 8% de descuento.",
        faq_q12: "¿Necesito VPS para correr estos robots?",
        faq_a12: "Un VPS es altamente recomendado para operación 24/7. Incluimos una guía detallada de configuración de VPS con tu compra.",
        faq_q13: "¿Cómo funciona el Filtro de Noticias?",
        faq_a13: "Todos los robots incluyen un Filtro de Noticias avanzado conectado a Forex Factory que pausa el trading durante eventos de alto impacto.",
        faq_q14: "¿Puedo personalizar la configuración de riesgo?",
        faq_a14: "¡Sí! Aunque la configuración por defecto funciona perfectamente, usuarios avanzados pueden personalizar parámetros de riesgo, lotes y horarios.",
        faq_q15: "¿Qué tipo de soporte ofrecen?",
        faq_a15: "Tenemos una comunidad activa en Telegram con 6000+ miembros. Frank (el desarrollador) está activo y proporciona actualizaciones regulares.",
        faq_q16: "¿Qué pares de divisas operan los robots?",
        faq_a16: "Nuestros robots operan principalmente en XAUUSD (Oro), que es el par donde todas las cuentas auditadas fueron testeadas y verificadas. Sin embargo, pueden configurarse para funcionar con cualquier par de trading.",
        faq_q17: "¿Cuál es el retorno mensual promedio?",
        faq_a17: "Los retornos varían según condiciones del mercado y configuración. Datos históricos muestran 5-15% mensual con configuración conservadora.",
        faq_q18: "¿Puedo ejecutar múltiples EAs en la misma cuenta?",
        faq_a18: "Sí, pero recomendamos usar cuentas separadas o diferentes magic numbers para rastrear el rendimiento con precisión.",
        faq_q19: "¿Cuál es el drawdown máximo?",
        faq_a19: "Con configuración conservadora, el drawdown máximo es típicamente menor al 5%. Puedes ajustar según tu tolerancia.",
        faq_q20: "¿Los robots funcionan con todos los brokers?",
        faq_a20: "Sí, funcionan en cualquier broker que soporte MT4, MT5 u otras plataformas compatibles. Se recomiendan brokers de bajo spread.",
        faq_q21: "¿Con qué frecuencia se actualizan los robots?",
        faq_a21: "Proporcionamos actualizaciones mensuales para optimizar el rendimiento según las condiciones actuales del mercado.",
        faq_q22: "¿Puedo usar los robots en cuentas demo?",
        faq_a22: "¡Sí! Animamos a probar en cuentas demo primero para familiarizarte con los robots.",
        faq_q23: "¿Qué estrategia de trading usan?",
        faq_a23: "Nuestros robots usan una combinación de análisis técnico, price action y algoritmos propietarios optimizados durante 4+ años.",
        faq_q24: "¿Los robots operan durante fines de semana?",
        faq_a24: "No, los robots solo operan en horas de mercado y pausan automáticamente durante fines de semana.",
        faq_q25: "¿Cuál es el requisito mínimo de VPS?",
        faq_a25: "Recomendamos mínimo 1GB RAM y 1 vCPU. ForexVPS, Contabo y servicios similares funcionan bien.",
        faq_q26: "¿Puedo cambiar el tamaño de lote manualmente?",
        faq_a26: "Sí, puedes establecer lotes fijos o usar la función auto-lot basada en el saldo de cuenta.",
        faq_q27: "¿Los robots usan martingala?",
        faq_a27: "¡No! Nuestros robots usan gestión de riesgo estricta sin martingala, grid ni estrategias de promediado.",
        faq_q28: "¿Qué pasa si mi VPS pierde conexión?",
        faq_a28: "Los robots se reinician automáticamente cuando se restaura la conexión. Las operaciones abiertas permanecen gestionadas por el broker.",
        faq_q29: "¿Puedo ejecutar los robots en mi computadora personal?",
        faq_a29: "Sí, pero tu computadora debe estar encendida 24/5. Un VPS es muy recomendable para rendimiento consistente.",
        faq_q30: "¿Cómo instalo los robots?",
        faq_a30: "Proporcionamos guías de instalación detalladas con capturas de pantalla. El proceso toma unos 5 minutos.",
        faq_q31: "¿Qué es un magic number?",
        faq_a31: "Un magic number es un identificador único para operaciones abiertas por el EA. Ayuda a separar operaciones de diferentes estrategias.",
        faq_q32: "¿Puedo usar la misma licencia en múltiples cuentas?",
        faq_a32: "Tu licencia permite instalación en cuentas demo ilimitadas y 1 cuenta real por producto.",
        faq_q33: "¿Qué zona horaria debo configurar?",
        faq_a33: "Usa la zona horaria del servidor de tu broker. La mayoría usa GMT+2 o GMT+3 durante horario de verano.",
        faq_q34: "¿Los robots funcionan en cuentas cent?",
        faq_a34: "¡Sí! La función auto-lot funciona perfectamente en cuentas cent, ajustando los lotes apropiadamente.",
        faq_q35: "¿Cuál es el apalancamiento recomendado?",
        faq_a35: "Recomendamos apalancamiento 1:100 o mayor para cálculos óptimos de lotes.",
        faq_q36: "¿Los robots pueden quemar mi cuenta?",
        faq_a36: "Con configuración de riesgo apropiada (1% por operación), quemar la cuenta es extremadamente improbable. Siempre usa stop-loss.",
        faq_q37: "¿Ofrecen descuentos por grupo?",
        faq_a37: "¡Sí! Contáctanos vía Telegram para compras grupales y descuentos especiales.",
        faq_q38: "¿Cuál es la diferencia entre los tres robots?",
        faq_a38: "ZAFIRO es el más agresivo (85% win rate), EMERALD es equilibrado (70%), DIAMOND es conservador (58%).",
        faq_q39: "¿Los robots pueden operar oro (XAUUSD)?",
        faq_a39: "¡Sí! XAUUSD (Oro) es en realidad el par principal de trading de nuestros robots. Todas las cuentas auditadas fueron testeadas y verificadas en XAUUSD. Es el par predeterminado y recomendado para un rendimiento óptimo.",
        faq_q40: "¿Cómo actualizo los robots?",
        faq_a40: "Las actualizaciones se envían por email y Telegram. Simplemente reemplaza los archivos antiguos con los nuevos.",
        faq_q41: "¿Qué es el slippage y cómo afecta el rendimiento?",
        faq_a41: "El slippage es la diferencia entre precio esperado y precio real. Brokers ECN de bajo spread lo minimizan.",
        faq_q42: "¿Los robots funcionan en cuentas ECN?",
        faq_a42: "¡Sí! Las cuentas ECN son preferidas debido a spreads más bajos y ejecución más rápida.",
        faq_q43: "¿Puedo ver resultados de backtests?",
        faq_a43: "¡Sí! Proporcionamos backtests detallados en nuestra comunidad de Telegram y bajo pedido.",
        faq_q44: "¿Cuál es el win rate típico?",
        faq_a44: "Los win rates varían: ZAFIRO 70-80%, EMERALD 65-75%, DIAMOND 60-70% dependiendo de condiciones del mercado.",
        faq_q45: "¿Los robots usan stop-loss?",
        faq_a45: "¡Sí! Cada operación tiene stop-loss para máxima protección. El take-profit también se establece automáticamente.",
        faq_q46: "¿Cuál es la duración promedio de operación?",
        faq_a46: "La mayoría de operaciones duran entre 1 hora y 2 días, dependiendo de condiciones del mercado.",
        faq_q47: "¿Puedo cerrar operaciones manualmente?",
        faq_a47: "Sí, puedes intervenir y cerrar cualquier operación en cualquier momento.",
        faq_q48: "¿Los robots funcionan con otros instrumentos además de XAUUSD?",
        faq_a48: "Si bien XAUUSD (Oro) es el par principal donde se lograron todos los resultados auditados, los robots pueden configurarse para operar cualquier par o instrumento. Los resultados pueden variar en otros instrumentos.",
        faq_q49: "¿Hay una app móvil?",
        faq_a49: "Puedes monitorear operaciones vía app móvil de MetaTrader. El robot corre en VPS/computadora.",
        faq_q50: "¿Cuál es el tipo de cuenta recomendado?",
        faq_a50: "Cuentas Standard o ECN con spreads raw son recomendadas para mejores resultados.",
        faq_q51: "¿Cómo contacto al soporte?",
        faq_a51: "Únete a nuestra comunidad de Telegram @SMARTMONEYEAS para soporte instantáneo de nuestro equipo.",
        faq_q52: "¿Puedo compartir mi licencia con amigos?",
        faq_a52: "No, las licencias son personales e intransferibles. Cada usuario necesita su propia licencia.",
        faq_q53: "¿Los robots funcionan durante alta volatilidad?",
        faq_a53: "El filtro de noticias ayuda a evitar volatilidad extrema. La volatilidad normal del mercado se maneja bien.",
        faq_q54: "¿Cuál es el tamaño mínimo de operación?",
        faq_a54: "El mínimo depende de tu broker. La mayoría permite 0.01 lotes. Auto-lot ajusta apropiadamente.",
        faq_q55: "¿Los robots pueden usar trailing stop?",
        faq_a55: "¡Sí! La funcionalidad de trailing stop está integrada y es configurable.",
        faq_q56: "¿Ofrecen programa de afiliados?",
        faq_a56: "¡Sí! Contáctanos vía Telegram para detalles sobre nuestro programa de afiliados.",
        faq_q57: "¿Qué es la función break-even?",
        faq_a57: "Una vez que la ganancia alcanza un umbral, el stop-loss se mueve al precio de entrada, protegiendo tu operación.",
        faq_q58: "¿Puedo configurar horarios de trading?",
        faq_a58: "¡Sí! Puedes especificar en qué horas debe operar el robot según tus preferencias.",
        faq_q59: "¿Los robots funcionan con brokers de EE.UU.?",
        faq_a59: "Depende del broker. La mayoría de brokers internacionales funcionan bien. Cumplimiento FIFO está integrado.",
        faq_q60: "¿Cuál es el riesgo promedio por operación?",
        faq_a60: "La configuración por defecto es 1% de riesgo por operación, considerado conservador y seguro.",
        faq_q61: "¿Cómo manejan los robots las comisiones swap?",
        faq_a61: "Los robots consideran costos de swap y evitan mantener posiciones durante fines de semana cuando es posible.",
        faq_q62: "¿Puedo usar los robots para scalping?",
        faq_a62: "Nuestros robots usan estrategias de mediano plazo, no scalping. Esto funciona mejor con la mayoría de brokers.",
        faq_q63: "¿Cuál es el saldo recomendado para FTMO?",
        faq_a63: "Comienza con el tamaño de cuenta que coincida con tu challenge. Los robots se adaptan automáticamente.",
        faq_q64: "¿Los robots funcionan en cuentas fondeadas?",
        faq_a64: "¡Sí! Muchos clientes usan nuestros robots para gestionar sus cuentas fondeadas después de pasar challenges.",
        faq_q65: "¿Puedo pausar el robot temporalmente?",
        faq_a65: "Sí, simplemente cierra el gráfico o desactiva auto-trading en tu plataforma.",
        faq_q66: "¿Qué pasa durante días festivos?",
        faq_a66: "Los robots detectan automáticamente períodos de baja liquidez y reducen la actividad de trading.",
        faq_q67: "¿Ofrecen soporte 1 a 1?",
        faq_a67: "Sí, Frank proporciona asistencia personal vía Telegram para configuración y optimización.",
        faq_q68: "¿Los robots pueden operar crypto?",
        faq_a68: "Actualmente solo forex. Trading de crypto podría agregarse según demanda de la comunidad.",
        faq_q69: "¿Cuál es el rendimiento histórico?",
        faq_a69: "Nuestros robots han sido rentables por 4+ años. Historial detallado disponible en Telegram.",
        faq_q70: "¿Los robots funcionan en Mac?",
        faq_a70: "Sí, usando MetaTrader para Mac o vía VPS en la nube. Guías de instalación proporcionadas.",
        faq_q71: "¿Puedo ejecutar backtests yo mismo?",
        faq_a71: "¡Sí! Los robots son totalmente compatibles con el strategy tester de MT4/MT5.",
        faq_q72: "¿Cuál es la diferencia entre versiones MT4 y MT5?",
        faq_a72: "Ambas versiones son funcionalmente idénticas. Elige según la plataforma de tu broker.",
        faq_q73: "¿Los robots funcionan en cuentas islámicas?",
        faq_a73: "¡Sí! Los robots funcionan en cuentas islámicas sin swap sin ningún problema.",
        faq_q74: "¿Cómo sé qué robot elegir?",
        faq_a74: "ZAFIRO para traders agresivos, EMERALD para equilibrados, DIAMOND para principiantes o conservadores.",
        faq_q75: "¿Puedo actualizar de DIAMOND a ZAFIRO?",
        faq_a75: "¡Sí! Contáctanos para precios de actualización si quieres subir de nivel.",
        faq_q76: "¿Qué es el límite de DD (Drawdown)?",
        faq_a76: "El drawdown máximo es típicamente 3-5% con configuración conservadora. Ajustable según el riesgo.",
        faq_q77: "¿Los robots funcionan en brokers NDD?",
        faq_a77: "¡Sí! Brokers No Dealing Desk (NDD) son recomendados para mejor ejecución.",
        faq_q78: "¿Puedo usar órdenes pendientes?",
        faq_a78: "Los robots manejan la colocación de órdenes automáticamente. Las órdenes pendientes manuales son tu elección.",
        faq_q79: "¿Cuál es el número máximo de operaciones?",
        faq_a79: "Típicamente 1-3 operaciones por día. El robot espera solo configuraciones de alta probabilidad.",
        faq_q80: "¿Los robots soportan múltiples timeframes?",
        faq_a80: "¡Sí! Nuestro análisis usa múltiples timeframes para mejor precisión.",
        faq_q81: "¿Qué pasa si tengo preguntas después de comprar?",
        faq_a81: "Únete a nuestra comunidad de Telegram para soporte y orientación ilimitados.",
        faq_q82: "¿Puedo sugerir funciones para futuras actualizaciones?",
        faq_a82: "¡Absolutamente! Escuchamos activamente los comentarios de la comunidad para mejoras.",
        faq_q83: "¿Los robots funcionan durante eventos de noticias?",
        faq_a83: "El filtro de noticias pausa el trading durante eventos de alto impacto para proteger tu cuenta.",
        faq_q84: "¿Cuál es el promedio de operaciones por semana?",
        faq_a84: "Típicamente 5-15 operaciones por semana dependiendo de condiciones del mercado.",
        faq_q85: "¿Puedo usar los robots en challenges PropFirm con límites DD diarios?",
        faq_a85: "¡Sí! Nuestros robots están diseñados para respetar límites de drawdown diarios comunes en prop firms.",
        faq_q86: "¿Los robots tienen un dashboard?",
        faq_a86: "¡Sí! Un panel de trading en el gráfico muestra estado actual, ganancias y configuración.",
        faq_q87: "¿Cuál es el spread recomendado?",
        faq_a87: "Mientras más bajo mejor. Máximo 2 pips para EURUSD es recomendado para rendimiento óptimo.",
        faq_q88: "¿Los robots pueden operar durante sesión asiática?",
        faq_a88: "Sí, las sesiones de trading son configurables. La sesión asiática típicamente tiene menor volatilidad.",
        faq_q89: "¿Tienen servidor de Discord?",
        faq_a89: "Nos enfocamos en Telegram para la comunidad. Únete a @SMARTMONEYEAS para soporte.",
        faq_q90: "¿En qué año se desarrollaron estos robots?",
        faq_a90: "El desarrollo comenzó en 2020. Mejoras continuas durante 4+ años de trading en vivo.",
        faq_q91: "¿Puedo probar los robots antes de comprar?",
        faq_a91: "Ofrecemos pruebas demo. Únete a Telegram para solicitar un período de prueba.",
        faq_q92: "¿Los robots funcionan con cualquier apalancamiento?",
        faq_a92: "Sí, pero 1:100 o mayor es recomendado para el dimensionamiento apropiado de lotes.",
        faq_q93: "¿Cuál es el proceso de instalación para cTrader?",
        faq_a93: "Descarga el archivo cBot, importa a cTrader, adjunta al gráfico. Guía completa proporcionada.",
        faq_q94: "¿Es legal usar los robots?",
        faq_a94: "¡Sí! El trading automatizado es legal. Siempre verifica los términos de tu broker.",
        faq_q95: "¿Los robots interfieren con trading manual?",
        faq_a95: "No, usan magic numbers únicos. Tus operaciones manuales están separadas.",
        faq_q96: "¿Qué es la función de cierre parcial?",
        faq_a96: "Los robots pueden cerrar posición parcial en ciertos niveles de ganancia, asegurando ganancias.",
        faq_q97: "¿Puedo ejecutar diferentes robots en el mismo VPS?",
        faq_a97: "¡Sí! Un VPS puede ejecutar múltiples instancias de MT4/MT5 con diferentes robots.",
        faq_q98: "¿Cuál es el mejor momento para iniciar el robot?",
        faq_a98: "Cualquier momento durante horas de mercado está bien. El robot esperará la próxima configuración.",
        faq_q99: "¿Los robots funcionan en cuentas micro?",
        faq_a99: "¡Sí! Cuentas micro y cent están completamente soportadas con auto-lot sizing.",
        faq_q100: "¿Puedo obtener reembolso si no estoy satisfecho?",
        faq_a100: "Debido a la naturaleza digital, no hay reembolsos. Pero nuestro track record de 4+ años habla por sí mismo.",

        // Cart
        cart_title: "CARRITO DE COMPRAS",
        cart_btn_text: "CARRITO",
        cart_empty: "Tu carrito está vacío",
        cart_total: "TOTAL:",
        continue_shopping: "SEGUIR COMPRANDO",
        checkout: "PROCEDER AL PAGO",
        remove: "Eliminar",

        // Checkout
        checkout_title: "CHECKOUT",
        order_summary: "RESUMEN DEL PEDIDO",
        order_number: "Pedido #:",
        select_payment: "SELECCIONA MÉTODO DE PAGO",
        send_payment: "ENVIAR PAGO A:",
        copy: "COPIAR",
        discount_badge: "8% DESC",
        payment_note: "⚡ ENTREGA INMEDIATA después de confirmar el pago",
        confirm_payment: "CONFIRMAR PAGO Y DESCARGAR",

        // Download Modal
        payment_confirmed: "✓ PAGO CONFIRMADO",
        thank_you: "¡GRACIAS POR TU COMPRA!",
        order_processed: "Tu pedido ha sido procesado.",
        delivery_note: "⚡ ENTREGA INMEDIATA - ¡Tus archivos están listos!",
        download_robots: "DESCARGA TUS ROBOTS:",
        what_you_receive: "LO QUE RECIBES:",
        receive_robot: "✓ EL ROBOT (Todas las Plataformas)",
        receive_vps: "✓ Guía de Configuración VPS (PDF)",
        receive_manual: "✓ Manual de Instalación (PDF)",
        receive_updates: "✓ ACTUALIZACIONES INCLUIDAS (De por vida)",

        // Payment Confirmation Modal (Expanded)
        payment_confirmed_title: "¡PAGO CONFIRMADO!",
        next_step_title: "📱 SIGUIENTE PASO",
        telegram_instruction: "Envía un mensaje a <a href='https://t.me/frankeasdeveloper' target='_blank' style='color: var(--color-emerald); font-weight: 700;'>@frankeasdeveloper</a> en Telegram con tu comprobante de pago.",
        contact_telegram_btn: "📨 CONTACTAR EN TELEGRAM",
        immediate_delivery_text: "⚡ ENTREGA INMEDIATA tras verificación",
        includes_text: "📦 Incluye: Archivos MT4/MT5 • Guía de instalación • Video tutorial • Guía VPS • Licencia de por vida • Acceso comunidad Telegram",

        // Telegram Card
        telegram_title: "Los mejores robots de trading 🤖",
        telegram_members: "6200 miembros, 149 en línea",
        telegram_verified: "✅ ÚNICO VENDEDOR AUTORIZADO",
        telegram_main: "⚡ GRUPO PRINCIPAL:",

        // Chat
        chat_online: "● En línea",
        chat_placeholder: "Escribe tu mensaje...",

        // Chatbot
        chat_greeting: "Hola, soy Frank. Soy el creador exclusivo de todos mis productos. ¿En qué puedo ayudarte?",
        chat_prices: "💰 **Precios:**\n🔮 ZAFIRO: $2,950\n💚 EMERALD: $1,950\n💎 DIAMOND: $950\n\n🎁 **15% descuento** con USDT!",
        chat_zafiro: "🔮 **ZAFIRO EA** - $2,950\n✅ 85% winrate\n✅ Pasa challenges en ~15 días\n✅ GARANTIZO pasar desafíos\n✅ Soporte 1a1 por Zoom\n✅ Backtesting incluido",
        chat_emerald: "💚 **EMERALD EA** - $1,950\n✅ 70% winrate\n✅ Pasa challenges en ~30 días\n✅ Smart Money Concepts\n✅ Actualizaciones de por vida",
        chat_diamond: "💎 **DIAMOND EA** - $950\n✅ 58% winrate\n✅ Pasa challenges en ~1 mes\n✅ Versión esencial\n✅ Perfecto para empezar",
        chat_payment: "💳 **Pago:**\n• USDT (BEP20/TRC20) - **15% OFF**\n\n📱 Telegram: @frankeasdeveloper",
        chat_guarantee: "🛡️ **Garantía 30 Días**\nReembolso completo sin preguntas.",
        chat_fondeo: "🏆 **Servicios de Fondeo:**\n\n**Pase de Challenges:**\nCobro = costo del challenge\nLo paso en <15 días (VPS incluido)\n\n**Gestión:**\nGanancias 50/50",
        chat_help: "¿En qué te ayudo?\n\n• 💰 **Precios**\n• 🔮 **ZAFIRO/EMERALD/DIAMOND**\n• 💳 **Pago** y descuentos\n• 🏆 **Fondeo**\n• 🛡️ **Garantía**",

        // Quick buttons
        btn_prices: "💰 Precios",
        btn_payment: "💳 Pago",
        btn_fondeo: "🏆 Fondeo",
        btn_guarantee: "🛡️ Garantía",

        // Profit Calculator
        calc_title: "CALCULADORA DE",
        calc_title_glow: "BENEFICIO",
        calc_subtitle: "Simula tus ganancias potenciales<br>con nuestros robots de trading",
        calc_initial_balance: "Balance Inicial ($)",
        calc_risk_per_trade: "Riesgo por Operación (%)",
        calc_custom: "Pers...",
        calc_time_period: "Período de Tiempo",
        calc_1_week: "1 Semana",
        calc_1_month: "1 Mes",
        calc_1_year: "1 Año",
        calc_10_years: "10 Años",
        calc_projected_profit: "Beneficio Proyectado:",
        calc_final_balance: "Balance Final:",
        calc_success_rate: "Winrate",

        // Audited Accounts
        audited_title: "NUESTRAS CUENTAS",
        audited_title_glow: "AUDITADAS",
        audited_powered_by: "Verificado por",
        audited_verified_text: "Rendimiento verificado en MyFxBook",
        audited_request_link: "Solicitar Enlace",

        // Pass Challenges
        nav_challenges: "CHALLENGES",
        pass_challenges_title: "PASS CHALLENGES",
        pass_challenges_title_glow: "SERVICE",
        pass_challenges_subtitle: "Servicio profesional para pasar challenges de todas las prop firms",
        pass_challenges_compatible: "Compatible con todas las principales empresas de fondeo",
        pass_challenge_label: "Challenge",
        pass_time: "Tiempo de pase: 5-10 d\u00edas",
        pass_no_rules: "Ninguna regla violada",
        pass_refund: "100% de reembolso en caso de fallo",
        pass_any_firm: "Cualquier empresa de fondeo",
        pass_add_cart: "A\u00d1ADIR AL CARRITO",
        pass_popular: "POPULAR",
        pass_coming_soon: "PR\u00d3XIMAMENTE...",
        pass_coming_soon_sub: "Este servicio estar\u00e1 disponible pronto",

        // Trustpilot
        trustpilot_excellent: "Excelente",
        trustpilot_reviews_on: "reseñas en"
    }
};

// Get translation
function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

// Detect language by browser (FAST - no API calls)
function detectLanguageByBrowser() {
    try {
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        const langCode = browserLang.split('-')[0].toLowerCase();

        // Check if Spanish
        if (langCode === 'es') {
            return 'es';
        }

        // Default to English
        return 'en';
    } catch (error) {
        console.log('Language detection failed, using default');
        return 'en';
    }
}

// Set language and update all elements
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // Add language class to body for CSS targeting
    document.body.classList.remove('lang-es', 'lang-en', 'lang-it');
    document.body.classList.add('lang-' + lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = t(key);
    });

    // Update language toggle button
    updateLangToggle();

    // Dispatch event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}

// Update language toggle button appearance
function updateLangToggle() {
    const toggle = document.getElementById('langToggle');
    const mobileBtn = document.getElementById('mobileLangBtn');

    // SVG flags - circular design for desktop (square viewBox with circle clip)
    const spainFlag = `<svg viewBox="0 0 24 24" width="28" height="28" style="border-radius:50%;overflow:hidden"><defs><clipPath id="fcs"><circle cx="12" cy="12" r="12"/></clipPath></defs><g clip-path="url(#fcs)"><rect width="24" height="6" fill="#AA151B"/><rect y="6" width="24" height="12" fill="#F1BF00"/><rect y="18" width="24" height="6" fill="#AA151B"/></g></svg>`;
    const usaFlag = `<svg viewBox="0 0 24 24" width="28" height="28" style="border-radius:50%;overflow:hidden"><defs><clipPath id="fcu"><circle cx="12" cy="12" r="12"/></clipPath></defs><g clip-path="url(#fcu)"><rect width="24" height="24" fill="#B22234"/><rect y="2" width="24" height="2" fill="#fff"/><rect y="6" width="24" height="2" fill="#fff"/><rect y="10" width="24" height="2" fill="#fff"/><rect y="14" width="24" height="2" fill="#fff"/><rect y="18" width="24" height="2" fill="#fff"/><rect y="22" width="24" height="2" fill="#fff"/><rect width="10" height="12" fill="#3C3B6E"/></g></svg>`;
    const italyFlag = `<svg viewBox="0 0 24 24" width="28" height="28" style="border-radius:50%;overflow:hidden"><defs><clipPath id="fci"><circle cx="12" cy="12" r="12"/></clipPath></defs><g clip-path="url(#fci)"><rect width="8" height="24" fill="#009246"/><rect x="8" width="8" height="24" fill="#fff"/><rect x="16" width="8" height="24" fill="#CE2B37"/></g></svg>`;

    // Mobile flags (circular, small for compact header - 16px to match CSS)
    const spainFlagMobile = `<svg viewBox="0 0 24 24" width="16" height="16" style="width:16px;height:16px;border-radius:50%;overflow:hidden;"><circle cx="12" cy="12" r="11" fill="#F1BF00"/><rect x="1" y="1" width="22" height="5.5" fill="#AA151B"/><rect x="1" y="17.5" width="22" height="5.5" fill="#AA151B"/><circle cx="12" cy="12" r="11" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/></svg>`;
    const usaFlagMobile = `<svg viewBox="0 0 24 24" width="16" height="16" style="width:16px;height:16px;border-radius:50%;overflow:hidden;"><circle cx="12" cy="12" r="11" fill="#fff"/><rect x="1" y="3" width="22" height="2" fill="#B22234"/><rect x="1" y="7" width="22" height="2" fill="#B22234"/><rect x="1" y="11" width="22" height="2" fill="#B22234"/><rect x="1" y="15" width="22" height="2" fill="#B22234"/><rect x="1" y="19" width="22" height="2" fill="#B22234"/><rect x="1" y="3" width="10" height="10" fill="#3C3B6E"/><g fill="#fff"><circle cx="3" cy="4.5" r="0.6"/><circle cx="5" cy="4.5" r="0.6"/><circle cx="7" cy="4.5" r="0.6"/><circle cx="9" cy="4.5" r="0.6"/><circle cx="4" cy="6" r="0.6"/><circle cx="6" cy="6" r="0.6"/><circle cx="8" cy="6" r="0.6"/><circle cx="3" cy="7.5" r="0.6"/><circle cx="5" cy="7.5" r="0.6"/><circle cx="7" cy="7.5" r="0.6"/><circle cx="9" cy="7.5" r="0.6"/><circle cx="4" cy="9" r="0.6"/><circle cx="6" cy="9" r="0.6"/><circle cx="8" cy="9" r="0.6"/><circle cx="3" cy="10.5" r="0.6"/><circle cx="5" cy="10.5" r="0.6"/><circle cx="7" cy="10.5" r="0.6"/><circle cx="9" cy="10.5" r="0.6"/></g></svg>`;
    const italyFlagMobile = `<svg viewBox="0 0 24 24" width="16" height="16" style="width:16px;height:16px;border-radius:50%;overflow:hidden;"><circle cx="12" cy="12" r="11" fill="#fff"/><rect x="1" y="1" width="7.3" height="22" fill="#009246"/><rect x="8.3" y="1" width="7.3" height="22" fill="#fff"/><rect x="15.7" y="1" width="7.3" height="22" fill="#CE2B37"/><circle cx="12" cy="12" r="11" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/></svg>`;

    let flag, flagMobile;
    if (currentLang === 'es') {
        flag = spainFlag;
        flagMobile = spainFlagMobile;
    } else if (currentLang === 'it') {
        flag = italyFlag;
        flagMobile = italyFlagMobile;
    } else {
        flag = usaFlag;
        flagMobile = usaFlagMobile;
    }

    // Update desktop toggle
    if (toggle) {
        const esClass = currentLang === 'es' ? 'active' : '';
        const enClass = currentLang === 'en' ? 'active' : '';
        const itClass = currentLang === 'it' ? 'active' : '';
        toggle.innerHTML = `<span class="lang-flag">${flag}</span><span class="lang-codes"><span class="lang-code ${esClass}" onclick="setLanguage('es')">ES</span><span class="lang-separator" style="display:inline-block;width:2px;height:22px;background:rgba(255,255,255,0.4);margin:0 3px;margin-top:5px"></span><span class="lang-code ${enClass}" onclick="setLanguage('en')">EN</span><span class="lang-separator" style="display:inline-block;width:2px;height:22px;background:rgba(255,255,255,0.4);margin:0 3px;margin-top:5px"></span><span class="lang-code ${itClass}" onclick="setLanguage('it')">IT</span></span>`;
        // Apply cyan border to lang-toggle button
        toggle.style.cssText += ';border:1px solid cyan!important;border-radius:25px!important;background:transparent!important;box-shadow:none!important;outline:none!important;height:42px!important;padding:0.4rem 0.8rem!important;overflow:visible!important;box-sizing:border-box!important;';
        // Style the flag circle inside - must be round and not clipped
        const langFlag = toggle.querySelector('.lang-flag');
        if (langFlag) {
            langFlag.style.cssText += ';width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important;border-radius:50%!important;overflow:hidden!important;border:none!important;box-shadow:none!important;flex-shrink:0!important;display:flex!important;align-items:center!important;justify-content:center!important;';
            const flagSvg = langFlag.querySelector('svg');
            if (flagSvg) {
                flagSvg.style.cssText = 'width:100%!important;height:100%!important;object-fit:cover!important;';
            }
        }
    }

    // Force remove cyan border from main navbar cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.cssText += ';border:1px solid cyan!important;border-radius:25px!important;background:transparent!important;box-shadow:none!important;outline:none!important;';
    }

    // Update mobile flag button
    if (mobileBtn) {
        mobileBtn.innerHTML = flagMobile;
        // Force small button with NO border, NO background - clean icon only
        mobileBtn.style.cssText = 'width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;max-width:24px!important;max-height:24px!important;border-radius:50%!important;border:none!important;background:transparent!important;padding:0!important;box-sizing:border-box!important;display:flex!important;align-items:center!important;justify-content:center!important;box-shadow:none!important;outline:none!important;-webkit-appearance:none!important;appearance:none!important;overflow:visible!important;flex-shrink:0!important;';
    }

    // Also force style on mobile cart button - NO border, NO background
    const mobileCartBtn = document.getElementById('mobileCartBtn');
    if (mobileCartBtn) {
        mobileCartBtn.style.cssText = 'width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;max-width:24px!important;max-height:24px!important;border-radius:50%!important;border:none!important;background:transparent!important;padding:0!important;box-sizing:border-box!important;display:flex!important;align-items:center!important;justify-content:center!important;position:relative!important;box-shadow:none!important;outline:none!important;-webkit-appearance:none!important;appearance:none!important;overflow:visible!important;flex-shrink:0!important;';
    }
}

// Cycle through languages (ES -> EN -> IT -> ES)
function cycleLang() {
    const langs = ['es', 'en', 'it'];
    const currentIndex = langs.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
}

// Toggle language (legacy - calls cycleLang)
function toggleLanguage() {
    cycleLang();
}

// Get current language
function getLang() {
    return currentLang;
}

// Initialize i18n (FAST - synchronous)
function initI18n() {
    // Check localStorage first
    const savedLang = localStorage.getItem('preferredLang');

    if (savedLang) {
        currentLang = savedLang;
    } else {
        // Detect by browser (instant)
        currentLang = detectLanguageByBrowser();
    }

    // Apply language
    setLanguage(currentLang);
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// ============================================
// FORCE FIX: Remove cyan borders and shrink navbar buttons
// This runs independently to guarantee it works
// ============================================
function fixNavbarButtons() {
    // Fix main navbar lang-toggle button
    var langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.style.setProperty('border', '1px solid cyan', 'important');
        langToggle.style.setProperty('border-radius', '25px', 'important');
        langToggle.style.setProperty('background', 'transparent', 'important');
        langToggle.style.setProperty('box-shadow', 'none', 'important');
        langToggle.style.setProperty('outline', 'none', 'important');
        langToggle.style.setProperty('padding', '0.4rem 0.8rem', 'important');
        langToggle.style.setProperty('height', '42px', 'important');
        langToggle.style.setProperty('box-sizing', 'border-box', 'important');
        langToggle.style.setProperty('overflow', 'visible', 'important');
        langToggle.style.setProperty('gap', '0.3rem', 'important');
        // Fix the flag circle inside
        var langFlag = langToggle.querySelector('.lang-flag');
        if (langFlag) {
            langFlag.style.setProperty('width', '28px', 'important');
            langFlag.style.setProperty('height', '28px', 'important');
            langFlag.style.setProperty('min-width', '28px', 'important');
            langFlag.style.setProperty('min-height', '28px', 'important');
            langFlag.style.setProperty('border-radius', '50%', 'important');
            langFlag.style.setProperty('overflow', 'hidden', 'important');
            langFlag.style.setProperty('border', 'none', 'important');
            langFlag.style.setProperty('box-shadow', 'none', 'important');
            langFlag.style.setProperty('flex-shrink', '0', 'important');
            langFlag.style.setProperty('position', 'relative', 'important');
        }
    }
    // Fix main navbar cart button
    var cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.setProperty('border', '1px solid cyan', 'important');
        cartBtn.style.setProperty('border-radius', '25px', 'important');
        cartBtn.style.setProperty('background', 'transparent', 'important');
        cartBtn.style.setProperty('box-shadow', 'none', 'important');
        cartBtn.style.setProperty('outline', 'none', 'important');
        cartBtn.style.setProperty('padding', '0.4rem 0.8rem', 'important');
        cartBtn.style.setProperty('height', '42px', 'important');
        cartBtn.style.setProperty('box-sizing', 'border-box', 'important');
        cartBtn.style.setProperty('min-width', 'auto', 'important');
    }
    // Fix mobile buttons - NO border, NO background, clean icons
    var mobileBtn = document.getElementById('mobileLangBtn');
    if (mobileBtn) {
        mobileBtn.style.setProperty('border', 'none', 'important');
        mobileBtn.style.setProperty('background', 'transparent', 'important');
        mobileBtn.style.setProperty('box-shadow', 'none', 'important');
        mobileBtn.style.setProperty('outline', 'none', 'important');
        mobileBtn.style.setProperty('width', '24px', 'important');
        mobileBtn.style.setProperty('height', '24px', 'important');
    }
    var mobileCart = document.getElementById('mobileCartBtn');
    if (mobileCart) {
        mobileCart.style.setProperty('border', 'none', 'important');
        mobileCart.style.setProperty('background', 'transparent', 'important');
        mobileCart.style.setProperty('box-shadow', 'none', 'important');
        mobileCart.style.setProperty('outline', 'none', 'important');
        mobileCart.style.setProperty('width', '24px', 'important');
        mobileCart.style.setProperty('height', '24px', 'important');
    }
}

// Run on multiple triggers to guarantee execution
document.addEventListener('DOMContentLoaded', fixNavbarButtons);
window.addEventListener('load', fixNavbarButtons);
setTimeout(fixNavbarButtons, 500);
setTimeout(fixNavbarButtons, 1500);
setTimeout(fixNavbarButtons, 3000);
