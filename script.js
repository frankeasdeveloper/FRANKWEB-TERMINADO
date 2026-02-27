// ============================================
// FRANK EAs DEVELOPER - MAIN SCRIPT
// ============================================

// ============================================
// STATE MANAGEMENT
// ============================================

const APP_STATE = {
    cart: [],
    currentOrder: null,
    selectedPaymentMethod: null
};

// ============================================
// INITIALIZATION
// ============================================

// Force scroll to top on every page load (before DOMContentLoaded)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    // Double-ensure scroll to top
    window.scrollTo(0, 0);

    initializeApp();
    loadCartFromStorage();
    renderTestimonials();
    renderFAQ();
    setupEventListeners();
    createParticles();
    initializeHeroVideo();

    // Re-render FAQ when language changes
    window.addEventListener('languageChanged', () => {
        renderFAQ();
    });
});

function initializeApp() {
    updateCartBadge();
}

// ============================================
// HERO VIDEO CONTROL
// ============================================

function initializeHeroVideo() {
    const video = document.getElementById('heroVideo');
    if (!video) return;

    // If it's an iframe (YouTube embed), no JS control needed
    if (video.tagName === 'IFRAME') {
        console.log('Hero video is YouTube embed - no JS control needed');
        return;
    }

    // Original video element logic (kept as fallback)
    const glitchOverlay = document.querySelector('.video-glitch-overlay');
    video.muted = true;
    updateMuteButton(true);
    video.loop = true;

    video.addEventListener('ended', function () {
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('pause', function () {
        if (!document.hidden) {
            video.play();
        }
    });

    video.play().catch(error => {
        console.log('Video autoplay failed:', error);
    });
}

function toggleVideoMute() {
    const video = document.getElementById('heroVideo');
    if (!video) return;

    video.muted = !video.muted;
    updateMuteButton(video.muted);
}

function updateMuteButton(isMuted) {
    const muteBtn = document.getElementById('videoMuteBtn');
    if (!muteBtn) return;

    const icon = muteBtn.querySelector('.mute-icon');
    if (icon) {
        icon.textContent = isMuted ? '🔇' : '🔊';
    }
}

// ============================================
// PARTICLE EFFECTS (Ultra-lightweight - CSS Only)
// ============================================

function createParticles() {
    // PERFORMANCE: Removed heavy DOM-based Matrix Rain + Candlesticks
    // These were creating 50+ animated DOM elements causing severe lag
    // Background is now pure CSS gradient (zero JS overhead)
}

// ============================================
// EVENT LISTENERS
// ============================================

// Delegation for Add to Cart buttons - Global so it's active immediately
// Using capture: true to intercept before other listeners can stop propagation
window.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart');
    if (btn) {
        const productId = btn.dataset.product;
        addToCart(productId);
    }
}, true);

function setupEventListeners() {
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', openCartModal);

    // Modal close buttons
    document.getElementById('closeCartModal').addEventListener('click', closeCartModal);
    document.getElementById('closeCart').addEventListener('click', closeCartModal);
    document.getElementById('closeCheckoutModal').addEventListener('click', closeCheckoutModal);
    document.getElementById('closeDownloadModal').addEventListener('click', closeDownloadModal);

    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', proceedToCheckout);

    // Payment method buttons
    document.querySelectorAll('.payment-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const method = e.currentTarget.dataset.method;
            selectPaymentMethod(method, e.currentTarget);
        });
    });

    // Copy address button
    document.getElementById('copyAddress').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        copyWalletAddress();
    });

    // Confirm payment button
    document.getElementById('confirmPayment').addEventListener('click', confirmPayment);

    // FAQ accordion
    document.addEventListener('click', (e) => {
        if (e.target.closest('.faq-question')) {
            const faqItem = e.target.closest('.faq-item');
            toggleFAQ(faqItem);
        }
    });

    // Close modals on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// ============================================
// SHOPPING CART FUNCTIONS
// ============================================

function addToCart(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;

    // Check if product already in cart
    const existingItem = APP_STATE.cart.find(item => item.id === productId);
    if (existingItem) {
        showNotification(`${product.name} ${t('notif_already_in_cart')}`, 'success');
        openCartModal();
        return;
    }

    APP_STATE.cart.push({
        id: product.id,
        name: product.name,
        price: product.priceCurrent
    });

    saveCartToStorage();
    updateCartBadge();
    showNotification(`${product.name} ${t('notif_added_to_cart')}`, 'success');
    openCartModal();
}

function removeFromCart(productId) {
    APP_STATE.cart = APP_STATE.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartBadge();
    renderCartItems();
    showNotification(t('notif_removed_from_cart'), 'info');
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const mobileBadge = document.getElementById('mobileCartBadge');
    const count = APP_STATE.cart.length;

    if (badge) badge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
}

function saveCartToStorage() {
    localStorage.setItem('frankEAsCart', JSON.stringify(APP_STATE.cart));
}

function loadCartFromStorage() {
    // Clear cart on page load (fresh start each session)
    localStorage.removeItem('frankEAsCart');
    APP_STATE.cart = [];
    updateCartBadge();
}

function calculateTotal() {
    return APP_STATE.cart.reduce((sum, item) => sum + item.price, 0);
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openCartModal() {
    document.body.classList.add('modal-open');
    renderCartItems();
    document.getElementById('cartModal').classList.add('active');
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
    updateModalOpenClass();
}

function closeCustomerInfoModal() {
    document.getElementById('customerInfoModal').classList.remove('active');
    updateModalOpenClass();
}

// Helper: only remove modal-open if NO modals are active
function updateModalOpenClass() {
    requestAnimationFrame(() => {
        const anyActive = document.querySelector('.modal.active');
        if (!anyActive) document.body.classList.remove('modal-open');
    });
}

function submitCustomerInfo() {
    const name = document.getElementById('ciName').value.trim();
    const lastname = document.getElementById('ciLastname').value.trim();
    const telegram = document.getElementById('ciTelegram').value.trim();
    const email = document.getElementById('ciEmail').value.trim();
    const whatsapp = document.getElementById('ciWhatsapp').value.trim();
    const instagram = document.getElementById('ciInstagram').value.trim();

    // Validate required fields (Email is now optional)
    let valid = true;
    ['ciName', 'ciLastname', 'ciTelegram'].forEach(id => {
        const input = document.getElementById(id);
        if (!input.value.trim()) {
            input.classList.add('invalid');
            valid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    // Validate email format
    const emailInput = document.getElementById('ciEmail');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.classList.add('invalid');
        valid = false;
    }

    if (!valid) {
        showNotification(t('notif_fill_required'), 'warning');
        return;
    }

    // Store customer info
    APP_STATE.customerInfo = { name, lastname, telegram, email, whatsapp, instagram };

    // Launch confetti & show payment confirmed
    launchConfetti();
    showNotification(t('notif_payment_confirmed'), 'success');
    closeCustomerInfoModal();
    showPaymentConfirmedModal();
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const content = document.querySelector('#checkoutModal .checkout-content');

    if (modal) modal.classList.remove('active');
    if (content) content.classList.remove('expanded');

    APP_STATE.selectedPaymentMethod = null;
    document.querySelectorAll('.payment-card').forEach(btn => {
        btn.classList.remove('selected');
    });
    updateModalOpenClass();
}

function closeDownloadModal() {
    document.getElementById('downloadModal').classList.remove('active');
    updateModalOpenClass();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
    updateModalOpenClass();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');

    if (APP_STATE.cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">Your cart is empty</p>';
        totalElement.textContent = '$0';
        return;
    }

    container.innerHTML = APP_STATE.cart.map(item => {
        const product = PRODUCTS[item.id];
        const logoSrc = product ? product.logo : '';

        // Determine color class based on product ID
        let colorClass = '';
        if (item.id === 'zafiro') colorClass = 'cart-item-zafiro';
        else if (item.id === 'emerald') colorClass = 'cart-item-emerald';
        else if (item.id === 'diamond') colorClass = 'cart-item-diamond';

        return `
        <div class="cart-item">
            <div class="cart-item-logo-container">
                ${logoSrc ? `<img src="${logoSrc}" class="cart-item-logo" alt="${item.name}">` : ''}
            </div>
            <div class="cart-item-info">
                <h4 class="${colorClass}">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toLocaleString()}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">REMOVE</button>
        </div>
    `;
    }).join('');

    totalElement.textContent = `$${calculateTotal().toLocaleString()}`;
}

// ============================================
// CHECKOUT FUNCTIONS
// ============================================

function proceedToCheckout() {
    if (APP_STATE.cart.length === 0) {
        showNotification(t('notif_cart_empty'), 'warning');
        return;
    }

    // Generate order number
    const orderNumber = generateOrderNumber();
    APP_STATE.currentOrder = {
        number: orderNumber,
        items: [...APP_STATE.cart],
        total: calculateTotal(),
        timestamp: new Date().toISOString()
    };

    // Render order summary
    renderOrderSummary();

    // Close cart modal and open checkout modal
    closeCartModal();
    document.body.classList.add('modal-open');
    document.getElementById('checkoutModal').classList.add('active');
}

function generateOrderNumber() {
    // GLOBAL TIME-BASED COUNTER
    // Base: 2830
    // Growth: 1 order every ~10 minutes to verify "always changing" but realistic

    const BASE_COUNT = 2830;
    const START_EPOCH = new Date('2026-01-20T00:00:00Z').getTime();
    const now = Date.now();

    // Calculate minutes passed since start of year
    const minutesPassed = Math.floor((now - START_EPOCH) / (1000 * 60));

    // Growth Rate: 1 order every minute for dynamic feel
    const growth = minutesPassed;

    const globalCount = BASE_COUNT + growth;

    return `#${globalCount}`;
}

function renderOrderSummary() {
    const orderTotalElement = document.getElementById('orderTotal');
    const orderNumberElement = document.getElementById('orderNumber');

    if (orderTotalElement) {
        orderTotalElement.textContent = `$${APP_STATE.currentOrder.total.toLocaleString()}`;
    }

    if (orderNumberElement) {
        orderNumberElement.textContent = APP_STATE.currentOrder.number;
    }
}

// ============================================
// PAYMENT FUNCTIONS
// ============================================

function selectPaymentMethod(method, selectedBtn) {
    APP_STATE.selectedPaymentMethod = method;

    // Update UI Selection
    document.querySelectorAll('.payment-card').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Use passed button or find it
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    } else {
        const btn = document.querySelector(`.payment-card[data-method="${method}"]`);
        if (btn) btn.classList.add('selected');
    }

    // EXPAND MODAL LOGIC
    // We target the checkout-content div to add the expanded class
    const checkoutContent = document.querySelector('#checkoutModal .checkout-content');
    if (checkoutContent) {
        checkoutContent.classList.add('expanded');
    }

    // Populate Right Column Details
    const walletAddressElement = document.getElementById('walletAddress');
    const qrCodeElement = document.getElementById('qrCode');
    const qrFrame = document.getElementById('qrFrame');

    const paymentConfig = {
        btc: {
            address: WALLET_ADDRESSES.btc,
            qr: './medios%20de%20pago/BTC.webp',
            color: '#F7931A'
        },
        eth: {
            address: WALLET_ADDRESSES.eth,
            qr: './medios%20de%20pago/ETH.webp',
            color: '#627EEA'
        },
        usdt_bep20: {
            address: WALLET_ADDRESSES.usdt_bep20,
            qr: './medios%20de%20pago/USDT%20BEP20.webp',
            color: '#F0B90B'
        },
        usdt_erc20: {
            address: WALLET_ADDRESSES.usdt_erc20,
            qr: './medios%20de%20pago/USDT%20ERC20.webp',
            color: '#627EEA'
        },
        usdt_trc20: {
            address: WALLET_ADDRESSES.usdt_trc20,
            qr: './medios%20de%20pago/USDT%20TRC20.webp',
            color: '#FF0013'
        }
    };

    const config = paymentConfig[method];
    if (config) {
        if (walletAddressElement) {
            const addr = config.address;
            // Truncate address: First 10 and last 8 characters with ...
            const truncated = addr.length > 20 ? `${addr.substring(0, 10)}...${addr.substring(addr.length - 8)}` : addr;
            walletAddressElement.textContent = truncated;
            walletAddressElement.dataset.fullAddress = addr; // Store full address for copying
        }
        if (qrCodeElement) qrCodeElement.src = config.qr;
        if (qrFrame) qrFrame.style.boxShadow = `0 0 30px ${config.color}80, 0 0 60px ${config.color}40`;
    }
}

function copyWalletAddress() {
    const address = document.getElementById('walletAddress').dataset.fullAddress || document.getElementById('walletAddress').textContent;
    navigator.clipboard.writeText(address).then(() => {
        showNotification(t('notif_address_copied'), 'success');
    });
}

function confirmPayment() {
    if (!APP_STATE.selectedPaymentMethod) {
        showNotification(t('notif_select_payment'), 'warning');
        return;
    }

    // Close checkout and open customer info modal
    closeCheckoutModal();
    document.body.classList.add('modal-open');
    document.getElementById('customerInfoModal').classList.add('active');
}

function showPaymentConfirmedModal() {
    const modal = document.getElementById('downloadModal');
    const content = modal.querySelector('.modal-content');

    content.innerHTML = `
        <div id="modal-confetti" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:1000;"></div>
        <div class="modal-header">
            <h3>✓ ${t('payment_confirmed_title')}</h3>
            <button class="modal-close" onclick="closeModal('downloadModal')">&times;</button>
        </div>
        <div class="modal-body">
            <div class="download-success" style="padding: 1rem; text-align: center; position: relative; z-index: 1;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
                <p style="color: rgba(255,255,255,0.7); margin-bottom: 1rem;">${t('order_number')} ${APP_STATE.currentOrder.number}</p>
                
                <div style="background: rgba(0, 255, 255, 0.1); border: 2px solid var(--color-diamond); border-radius: 10px; padding: 1rem; margin-bottom: 1rem;">
                    <h3 style="color: var(--color-diamond); font-size: 1.1rem; margin-bottom: 0.5rem;">${t('next_step_title')}</h3>
                    <p style="font-size: 0.95rem; line-height: 1.5; color: rgba(255, 255, 255, 0.9);">
                        ${t('telegram_instruction')}
                    </p>
                </div>
                
                <a href="https://t.me/frankeasdeveloper" target="_blank" class="btn btn-primary" style="display: inline-block; padding: 0.8rem 2rem;">
                    ${t('contact_telegram_btn')}
                </a>
                
                <p style="color: var(--color-emerald); font-weight: 600; margin: 1rem 0 0.5rem;">
                    ${t('immediate_delivery_text')}
                </p>
                
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.5;">
                    ${t('includes_text')}
                </p>
            </div>
        </div>
    `;

    document.body.classList.add('modal-open');
    modal.classList.add('active');

    // Launch celebration animation inside the modal
    launchConfettiInModal();

    // Clear cart after successful order
    APP_STATE.cart = [];
    saveCartToStorage();
    updateCartBadge();
}

function launchConfettiInModal() {
    const canvas = document.createElement('canvas');
    canvas.id = 'fullscreen-confetti';
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2147483647;';
    document.documentElement.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const colors = ['#ff00ff', '#00ff00', '#00ffff', '#ffff00', '#ff6600', '#ff0066', '#66ff00', '#FFD700', '#FF1493', '#00CED1'];
    const centerX = W / 2;
    const centerY = H / 3;
    const isMobile = W < 768;
    const TOTAL = isMobile ? 40 : 80;
    const BURST = isMobile ? 20 : 35;

    const particles = [];
    for (let i = 0; i < TOTAL; i++) {
        const isBurst = i < BURST;
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst ? (Math.random() * 5 + 2) : 0;
        particles.push({
            x: isBurst ? centerX : Math.random() * W,
            y: isBurst ? centerY : -(Math.random() * 120 + 20),
            vx: isBurst ? Math.cos(angle) * speed : 0,
            vy: isBurst ? Math.sin(angle) * speed - 3 : Math.random() * 0.5 + 0.5,
            gravity: 0.08 + Math.random() * 0.04,
            w: Math.random() * 10 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 3,
            delay: isBurst ? 0 : (Math.random() * 600 + 200),
            active: false
        });
    }

    const t0 = performance.now();
    let running = true;

    function frame(now) {
        if (!running) return;
        const elapsed = now - t0;

        ctx.clearRect(0, 0, W, H);
        let alive = false;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (elapsed < p.delay) { alive = true; continue; }
            if (!p.active) p.active = true;

            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.995;
            p.rotation += p.rotSpeed;

            const alpha = p.y > H * 0.5 ? Math.max(0, 1 - (p.y - H * 0.5) / (H * 0.45)) : 1;
            if (alpha <= 0 || p.y > H + 30) continue;
            alive = true;

            ctx.globalAlpha = alpha;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }
        ctx.globalAlpha = 1;

        if (alive) {
            requestAnimationFrame(frame);
        } else {
            canvas.remove();
            running = false;
        }
    }

    requestAnimationFrame(frame);

    setTimeout(function () {
        running = false;
        var c = document.getElementById('fullscreen-confetti');
        if (c) c.remove();
    }, 5000);
}

// ============================================
// DOWNLOAD FUNCTIONS
// ============================================

function showDownloadModal() {
    const downloadOrderNumber = document.getElementById('downloadOrderNumber');
    const downloadLinksContainer = document.getElementById('downloadLinks');

    downloadOrderNumber.textContent = APP_STATE.currentOrder.number;

    // Generate download links for each product in the order
    const downloadHTML = APP_STATE.currentOrder.items.map(item => `
        <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--color-diamond); margin-bottom: 0.5rem;">${item.name}</h4>
            ${Object.entries(PLATFORM_FILES).map(([platform, filename]) => `
                <a href="#" class="download-link" onclick="simulateDownload('${item.name}', '${platform}', '${filename}'); return false;">
                    📥 ${platform.toUpperCase()} - ${filename}
                </a>
            `).join('')}
        </div>
    `).join('');

    downloadLinksContainer.innerHTML = downloadHTML;

    // Clear cart
    APP_STATE.cart = [];
    saveCartToStorage();
    updateCartBadge();

    // Show download modal and launch celebration
    document.body.classList.add('modal-open');
    document.getElementById('downloadModal').classList.add('active');
    launchConfetti();
}

function simulateDownload(productName, platform, filename) {
    showNotification(`Downloading ${productName} for ${platform.toUpperCase()}...`, 'success');

    // In a real implementation, this would trigger actual file downloads
    console.log(`Download initiated: ${productName} - ${platform} - ${filename}`);
}

// ============================================
// TESTIMONIALS
// ============================================

function renderTestimonials() {
    const container = document.getElementById('testimonialsCarousel');
    if (!container) return;

    // Comprehensive female first names list
    const femaleNames = [
        'Sarah', 'Jennifer', 'Maria', 'Isabella', 'Anna', 'Sophie', 'Elena', 'Valentina',
        'Francesca', 'Emma', 'Natasha', 'Camila', 'Anastasia', 'Sophia', 'Olivia', 'Lucia',
        'Fatima', 'Yuki', 'Mei', 'Aisha', 'Nina', 'Priya', 'Gabriela', 'Katarina', 'Nicole',
        'Amanda', 'Lisa', 'Laura', 'Emily', 'Jessica', 'Michelle', 'Stephanie', 'Rachel',
        'Christina', 'Victoria', 'Angela', 'Diana', 'Sandra', 'Paula', 'Monica', 'Carmen',
        'Rosa', 'Ana', 'Claudia', 'Patricia', 'Alexandra', 'Katherine', 'Rebecca', 'Samantha',
        'Charlotte', 'Grace', 'Hannah', 'Megan', 'Julia', 'Vanessa', 'Cynthia', 'Heather',
        'Ashley', 'Brittany', 'Tiffany', 'Amber', 'Danielle', 'Kelly', 'Crystal', 'Linda',
        'Susan', 'Nancy', 'Karen', 'Betty', 'Margaret', 'Dorothy', 'Helen', 'Ruth'
    ];

    // Ratings array for realistic variation (3.5, 4, 4.5, 5)
    const ratingsPool = [4, 4.5, 5, 5, 4.5, 4, 5, 4.5, 5, 4, 3.5, 5, 4.5, 5, 4];

    function generateCard(testimonial, index, maleIdx, femaleIdx) {
        const firstName = testimonial.name.split(' ')[0];
        const isFemale = femaleNames.includes(firstName);

        let avatar;
        if (isFemale) {
            const fIdx = (femaleIdx % 5) + 1;
            avatar = `./assets/testimonials/female-${fIdx}.webp`;
        } else {
            const mIdx = (maleIdx % 5) + 1;
            avatar = `./assets/testimonials/male-${mIdx}.webp`;
        }

        const rating = ratingsPool[index % ratingsPool.length];
        const stars = generateStars(rating);

        return `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="${avatar}" alt="${testimonial.name}" class="testimonial-avatar" loading="lazy" decoding="async">
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <p class="testimonial-location">${testimonial.location}</p>
                    </div>
                </div>
                <div class="testimonial-rating">
                    ${stars}
                </div>
                <p class="testimonial-text">${testimonial.text}</p>
                <p class="testimonial-date">${formatDate(testimonial.date)}</p>
            </div>
        `;
    }

    let maleIndex = 0;
    let femaleIndex = 0;
    let cardsHTML = '';

    // PERFORMANCE: Only render first 20 testimonials (instead of 50)
    const limitedTestimonials = TESTIMONIALS.slice(0, 20);

    // Generate cards for first set
    limitedTestimonials.forEach((testimonial, index) => {
        const firstName = testimonial.name.split(' ')[0];
        const isFemale = femaleNames.includes(firstName);
        cardsHTML += generateCard(testimonial, index, maleIndex, femaleIndex);
        if (isFemale) femaleIndex++; else maleIndex++;
    });

    // Duplicate for seamless infinite loop
    maleIndex = 0;
    femaleIndex = 0;
    limitedTestimonials.forEach((testimonial, index) => {
        const firstName = testimonial.name.split(' ')[0];
        const isFemale = femaleNames.includes(firstName);
        cardsHTML += generateCard(testimonial, index, maleIndex, femaleIndex);
        if (isFemale) femaleIndex++; else maleIndex++;
    });

    container.innerHTML = cardsHTML;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }

    if (hasHalfStar) {
        starsHTML += '<span class="star">★</span>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star empty">★</span>';
    }

    return starsHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// FAQ
// ============================================

function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;

    const faqHTML = FAQ_DATA.map((faq, index) => {
        // Get translation key from FAQ data or use default
        const questionKey = faq.questionKey || `faq_q${index + 1}`;
        const answerKey = faq.answerKey || `faq_a${index + 1}`;

        // Try to get translation, fallback to original text
        const question = (typeof t === 'function' && t(questionKey) !== questionKey) ? t(questionKey) : faq.question;
        const answer = (typeof t === 'function' && t(answerKey) !== answerKey) ? t(answerKey) : faq.answer;

        return `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question">
                <h3 data-i18n="${questionKey}">${question}</h3>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                <p data-i18n="${answerKey}">${answer}</p>
            </div>
        </div>
    `}).join('');

    container.innerHTML = faqHTML;
}

function toggleFAQ(faqItem) {
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ============================================
// NOTIFICATIONS
// ============================================

function showNotification(message, type = 'info') {
    // 1. Remove all existing notifications aggressively
    document.querySelectorAll('.frank-notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = 'frank-notification';
    notification.textContent = message;

    // Determine color based on robot name
    let bgColor = 'rgba(0, 255, 255, 0.95)'; // Default
    let textColor = '#000';

    if (message.includes('ZAFIRO')) {
        bgColor = 'rgba(255, 0, 255, 0.95)';
    } else if (message.includes('EMERALD')) {
        bgColor = 'rgba(0, 255, 0, 0.95)';
    } else if (message.includes('DIAMOND')) {
        bgColor = 'rgba(0, 255, 255, 0.95)';
    } else if (type === 'warning') {
        bgColor = 'rgba(255, 165, 0, 0.95)';
    } else if (message.toLowerCase().includes('copied') || message.toLowerCase().includes('copiado')) {
        bgColor = '#FFD700';
    } else if (type === 'success') {
        bgColor = 'rgba(0, 255, 136, 0.95)';
    }

    notification.style.setProperty('background', bgColor, 'important');
    notification.style.setProperty('color', textColor, 'important');

    document.body.appendChild(notification);

    // Entry transition (using timeout to ensure CSS is applied)
    setTimeout(() => {
        notification.classList.add('visible');
    }, 10);

    // Removal Logic
    const removeFn = () => {
        if (!notification.parentNode) return;
        notification.classList.remove('visible');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500); // Wait for transition
    };

    // Auto-remove after 2 seconds
    setTimeout(removeFn, 2000);
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CONSOLE BRANDING - REMOVED FOR PRODUCTION
// ============================================

// ============================================
// FLOATING MUTE BUTTON FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const muteBtn = document.getElementById('floating-mute-btn');
    const heroVideo = document.querySelector('.hero-video video') || document.querySelector('video');

    if (muteBtn && heroVideo) {
        // Set initial state (muted by default for autoplay)
        heroVideo.muted = true;
        muteBtn.classList.add('muted');

        // Toggle mute on click
        muteBtn.addEventListener('click', function () {
            if (heroVideo.muted) {
                heroVideo.muted = false;
                muteBtn.classList.remove('muted');
            } else {
                heroVideo.muted = true;
                muteBtn.classList.add('muted');
            }
        });
    }
});

// ============================================
// CONFETTI & CELEBRATION ANIMATION
// ============================================

function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-box';
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2147483647;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const colors = ['#ff00ff', '#00ff00', '#00ffff', '#ffff00', '#ff6600', '#ff0066', '#66ff00', '#FFD700', '#FF1493'];

    const particles = [];
    const isMobile = W < 768;
    for (let i = 0; i < (isMobile ? 30 : 50); i++) {
        particles.push({
            x: Math.random() * W,
            y: -(Math.random() * 200 + 30),
            vy: Math.random() * 1 + 1,
            gravity: 0.06 + Math.random() * 0.03,
            w: Math.random() * 10 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 2,
            delay: Math.random() * 1200
        });
    }

    const t0 = performance.now();
    let running = true;

    function frame(now) {
        if (!running) return;
        const elapsed = now - t0;
        ctx.clearRect(0, 0, W, H);
        let alive = false;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (elapsed < p.delay) { alive = true; continue; }

            p.vy += p.gravity;
            p.y += p.vy;
            p.rotation += p.rotSpeed;

            const alpha = p.y > H * 0.6 ? Math.max(0, 1 - (p.y - H * 0.6) / (H * 0.35)) : 1;
            if (alpha <= 0 || p.y > H + 40) continue;
            alive = true;

            ctx.globalAlpha = alpha;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }
        ctx.globalAlpha = 1;

        if (alive) {
            requestAnimationFrame(frame);
        } else {
            canvas.remove();
            running = false;
        }
    }

    requestAnimationFrame(frame);

    setTimeout(function () {
        running = false;
        var c = document.getElementById('confetti-box');
        if (c) c.remove();
    }, 5000);
}

// ============================================
// TELEGRAM PAPER PLANES ANIMATION
// ============================================

function initTelegramPlanesAnimation() {
    const communitySection = document.getElementById('community');
    const planesContainer = document.getElementById('telegramPlanes');

    if (!communitySection || !planesContainer) return;

    let planesLaunched = false;
    let animationInterval = null;

    // Create and launch a single plane
    function launchPlane() {
        const plane = document.createElement('div');
        plane.className = 'telegram-plane';

        // Random properties for "Hundreds" scale
        const isReverse = Math.random() > 0.5;
        const startY = Math.random() * 95; // 0% to 95% height
        const size = Math.random() * 30 + 15; // 15px to 45px
        const duration = Math.random() * 3 + 2; // 2s to 5s
        const delay = Math.random() * 500; // 0 to 500ms delay

        // Apply styles directly to ensure visibility and animation
        plane.style.cssText = `
            position: absolute;
            top: ${startY}%;
            width: ${size}px;
            height: ${size}px;
            z-index: 1;
            background-image: url('${isReverse ? './avionhacialaizquierda.webp' : './avionhacialaderecha.webp'}');
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0;
            will-change: transform, opacity;
            animation: ${isReverse ? 'planeFlyReverse' : 'planeFly'} ${duration}s linear forwards;
            animation-delay: ${delay}ms;
            filter: drop-shadow(${isReverse ? '15px 5px' : '-15px 5px'} 10px rgba(200, 210, 220, 0.2));
        `;

        planesContainer.appendChild(plane);

        // Remove after animation
        setTimeout(() => plane.remove(), (duration * 1000) + delay + 100);
    }



    // Launch multiple planes in a wave
    function launchPlaneWave(count = 8) {
        for (let i = 0; i < count; i++) {
            // Randomize start time for natural feel
            setTimeout(() => launchPlane(), Math.random() * 2000);
        }
    }

    // Start continuous plane animation
    function startPlanesAnimation() {
        if (planesLaunched) return;
        planesLaunched = true;

        // Massive initial burst to fill screen immediately
        launchPlaneWave(50);

        // Continuous heavy stream
        animationInterval = setInterval(() => {
            const batch = Math.floor(Math.random() * 3) + 2; // 2 to 4 planes per tick
            for (let i = 0; i < batch; i++) {
                setTimeout(() => launchPlane(), Math.random() * 200);
            }
        }, 250); // Every 250ms unleash a batch
    }

    // Stop animation when out of view
    function stopPlanesAnimation() {
        planesLaunched = false;
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
        // Optional cleanup: remove existing planes immediately? 
        // Better to let them fly out naturally to avoid abrupt disappearance.
    }

    // Use IntersectionObserver to trigger animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startPlanesAnimation();
            } else {
                stopPlanesAnimation();
            }
        });
    }, {
        threshold: 0, // Trigger immediately
        rootMargin: "200px" // Start animation 200px BEFORE section enters viewport
    });

    observer.observe(communitySection);
}

// Initialize planes animation on page load
document.addEventListener('DOMContentLoaded', () => {
    initTelegramPlanesAnimation();

    // ============================================
    // FLOATING BUTTONS RESTORATION LOGIC
    // ============================================

    // 1. Force Visibility via JS (Redundancy)
    const chatBtn = document.getElementById('chatToggle');
    const muteBtn = document.getElementById('floating-mute-btn');

    if (chatBtn) {
        chatBtn.style.display = 'flex';
        chatBtn.style.visibility = 'visible';
        chatBtn.style.opacity = '1';
        chatBtn.style.zIndex = '2147483647';
    }

    if (muteBtn) {
        muteBtn.style.display = 'flex';
        muteBtn.style.visibility = 'visible';
        muteBtn.style.opacity = '1';
        muteBtn.style.zIndex = '2147483647';

        // 2. Restore Mute Logic
        let isMuted = true;

        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            const waves = muteBtn.querySelectorAll('.sound-wave');
            const icon = muteBtn.querySelector('.mute-icon');

            if (!isMuted) {
                // UNMUTED
                muteBtn.classList.add('playing');
                if (icon) icon.textContent = '🔊';
                // Unmute videos
                document.querySelectorAll('video').forEach(v => {
                    v.muted = false;
                    try { v.play(); } catch (e) { }
                });
            } else {
                // MUTED
                muteBtn.classList.remove('playing');
                if (icon) icon.textContent = '🔇';
                // Mute videos
                document.querySelectorAll('video').forEach(v => v.muted = true);
            }
        });
    }

    // ============================================
    // FAQ SEARCH - TYPING EFFECT
    // ============================================
    initFAQSearchTypingEffect();
});

// FAQ Search Typing Effect - Looping placeholder animation
function initFAQSearchTypingEffect() {
    const searchInput = document.getElementById('faqSearch');
    if (!searchInput) return;

    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    // Only animate when input is empty and not focused
    let isUserTyping = false;

    // Get the translated phrase
    function getPhrase() {
        return typeof t === 'function' ? t('faq_search_placeholder') : 'Buscar preguntas...';
    }

    searchInput.addEventListener('focus', () => {
        isUserTyping = true;
        searchInput.placeholder = '';
    });

    searchInput.addEventListener('blur', () => {
        if (searchInput.value === '') {
            isUserTyping = false;
            charIndex = 0;
            isDeleting = false;
        }
    });

    searchInput.addEventListener('input', () => {
        isUserTyping = searchInput.value !== '';
    });

    // Listen for language changes to reset animation
    window.addEventListener('languageChanged', () => {
        charIndex = 0;
        isDeleting = false;
    });

    function typeEffect() {
        if (isUserTyping) {
            setTimeout(typeEffect, 100);
            return;
        }

        const phrase = getPhrase();

        if (isDeleting) {
            currentText = phrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = phrase.substring(0, charIndex + 1);
            charIndex++;
        }

        searchInput.placeholder = currentText + '|';

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === phrase.length) {
            // Pause at end of phrase then start deleting
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Pause before typing again
            isDeleting = false;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start the effect
    typeEffect();
}

// ============================================
// SECTION NAVIGATION INDICATOR
// ============================================

function initSectionObserver() {
    const sectionIds = ['products', 'comparison', 'reviews', 'community', 'faq'];
    const navLinks = document.querySelectorAll('.mobile-sticky-header a');

    if (!navLinks.length) return;

    // Build a map from href to link element
    const linkMap = {};
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            linkMap[href.substring(1)] = link;
        }
    });

    let ticking = false;
    let clickLockUntil = 0; // Suppress scroll updates after a manual click

    function updateActiveSection() {
        ticking = false;

        // If a click just happened, don't override it
        if (Date.now() < clickLockUntil) return;

        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;
        // Trigger line at 30% from top of viewport
        const triggerLine = scrollY + viewportHeight * 0.3;

        // Collect sections with their actual page positions
        const sectionPositions = [];
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (!section) return;
            const rect = section.getBoundingClientRect();
            sectionPositions.push({
                id: id,
                top: scrollY + rect.top
            });
        });

        // Sort by actual page position (top to bottom)
        sectionPositions.sort((a, b) => a.top - b.top);

        // Find the last section whose top is above the trigger line
        let activeId = null;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (sectionPositions[i].top <= triggerLine) {
                activeId = sectionPositions[i].id;
            }
        }

        // If we're near the bottom of the page, activate the last visible section
        if (scrollY + viewportHeight >= document.documentElement.scrollHeight - 50) {
            activeId = sectionPositions[sectionPositions.length - 1].id;
        }

        // Update active class
        navLinks.forEach(link => link.classList.remove('active-section'));
        if (activeId && linkMap[activeId]) {
            linkMap[activeId].classList.add('active-section');
        }
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateActiveSection);
        }
    }, { passive: true });

    // Immediately set active on click + lock scroll updates for 800ms
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active-section'));
            this.classList.add('active-section');
            clickLockUntil = Date.now() + 800;
        });
    });

    // Initial check
    updateActiveSection();
}

// Initialize observer when DOM is ready
document.addEventListener('DOMContentLoaded', initSectionObserver);

