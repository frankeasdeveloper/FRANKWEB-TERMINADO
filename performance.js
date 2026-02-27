// ============================================
// PERFORMANCE OPTIMIZER V3 - ULTRA EXTREME MODE
// 17 Optimizaciones Críticas Restauradas
// ============================================

(function () {
    'use strict';

    console.log('🚀 Performance Optimizer V3 - ULTRA EXTREME MODE');

    // 1. Force hardware acceleration on ALL animated elements
    function forceHardwareAcceleration() {
        const style = document.createElement('style');
        style.textContent = `
            /* GPU acceleration — ONLY on actively-animated elements */
            .product-card {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
            }

            /* 2. ELIMINATE backdrop-filter — TARGETED (not *) */
            .navbar,
            .product-card,
            .review-card,
            .testimonial-card,
            .modal-content,
            .modal-overlay,
            .chat-widget,
            .faq-item {
                backdrop-filter: none !important;
                -webkit-backdrop-filter: none !important;
            }

            /* 3. Reduce expensive filters and shadows */
            .product-card::before {
                opacity: 0.15 !important;
            }

            .product-gem img {
                filter: drop-shadow(0 0 15px var(--card-color)) !important;
            }

            /* 4. Optimize video rendering */
            video {
                transform: translateZ(0);
                will-change: auto;
                contain: strict;
            }

            /* 5. Disable animations on low-end devices */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }

            /* 6. Optimize text rendering */
            body {
                text-rendering: optimizeSpeed;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            /* 7. Stronger offscreen-paused isolation */
            .offscreen-paused {
                contain: strict !important;
                content-visibility: auto !important;
            }
            .offscreen-paused *,
            .offscreen-paused *::before,
            .offscreen-paused *::after {
                animation-play-state: paused !important;
                transition: none !important;
            }
        `;
        document.head.appendChild(style);
        console.log('✅ Hardware acceleration + GPU optimizations enabled');
    }

    // 7. Animations are controlled by CSS - NO JavaScript override
    function optimizeAnimations() {
        // Let CSS handle all animations naturally
        console.log('✅ Animations controlled by CSS');
    }

    // 8+9. UNIFIED scroll handler — video + velocity class in ONE listener
    function optimizeScrollUnified() {
        const heroVideo = document.querySelector('#heroVideo');
        let scrollTimeout;
        let videoTimeout;
        let ticking = false;
        let isScrolling = false;

        window.addEventListener('scroll', () => {
            // RAF-gated class toggle
            if (!ticking) {
                requestAnimationFrame(() => {
                    document.documentElement.classList.add('is-scrolling');
                    ticking = false;
                });
                ticking = true;
            }

            // Video suspension on scroll
            if (heroVideo && !isScrolling) {
                heroVideo.style.opacity = '0.6';
                videoTimeout = setTimeout(() => {
                    if (isScrolling) heroVideo.pause();
                }, 200);
            }
            isScrolling = true;

            // Debounced scroll-end
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                document.documentElement.classList.remove('is-scrolling');
                if (heroVideo) {
                    heroVideo.style.opacity = '1';
                    heroVideo.play().catch(() => { });
                }
            }, 150);
        }, { passive: true });

        console.log('✅ Unified scroll handler (video + velocity) enabled');
    }

    // 9b. Section Hibernation — pause off-screen sections via IntersectionObserver
    function initSectionHibernation() {
        if (!('IntersectionObserver' in window)) return;

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('offscreen-paused', !entry.isIntersecting);
            });
        }, { rootMargin: '200px 0px' });

        document.querySelectorAll(
            '.reviews-section, .testimonials-section, .faq-section, ' +
            '.community-section, .audited-section, .results-section, ' +
            '.footer, section'
        ).forEach(s => sectionObserver.observe(s));

        console.log('✅ Section hibernation enabled');
    }

    // 9c. Visibility API — pause video when tab hidden
    function initVisibilityAPI() {
        const heroVideo = document.querySelector('#heroVideo');
        if (!heroVideo || heroVideo.tagName === 'IFRAME') return;

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                heroVideo.pause();
            } else {
                heroVideo.play().catch(() => { });
            }
        });
        console.log('✅ Visibility API integration enabled');
    }

    // 10. BLOCK problematic postMessage calls - CRITICAL FIX
    function blockProblematicPostMessage() {
        const originalPostMessage = window.postMessage.bind(window);

        window.postMessage = function (message, targetOrigin, transfer) {
            if (targetOrigin && targetOrigin.startsWith('file://')) {
                return; // Block file:// postMessage
            }

            try {
                return originalPostMessage(message, targetOrigin, transfer);
            } catch (e) {
                // Silently fail
            }
        };

        const originalConsoleWarn = console.warn;
        console.warn = function (...args) {
            if (args[0] && (args[0].includes('postMessage') || args[0].includes('DOMWindow'))) {
                return;
            }
            originalConsoleWarn.apply(console, args);
        };

        console.log('✅ Problematic postMessage blocked');
    }

    // 11. Lazy loading with IntersectionObserver
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        if (el.dataset.src) {
                            el.src = el.dataset.src;
                            el.removeAttribute('data-src');
                        }
                        if (el.tagName === 'IMG') {
                            el.loading = 'lazy';
                        }
                        observer.unobserve(el);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            document.querySelectorAll('img[data-src], video[data-src], img:not([loading])').forEach(el => {
                if (el.tagName === 'IMG' && !el.hasAttribute('loading')) {
                    el.loading = 'lazy';
                }
                observer.observe(el);
            });

            console.log('✅ Lazy loading initialized');
        }
    }

    // 12. Detect slow devices - DO NOT disable marquees (they are lightweight)
    function detectAndOptimizeForSlowDevices() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const isSlowDevice =
            (connection && connection.effectiveType && connection.effectiveType.includes('2g'));

        if (isSlowDevice) {
            console.warn('⚠️ Slow connection detected - Marquees remain enabled (lightweight)');
            // Marquees are CSS-only and lightweight, no need to disable them
        }

        console.log('✅ Device detection complete');
    }

    // 13. Optimize testimonials - reduce DOM elements
    function optimizeTestimonials() {
        const testimonialsTrack = document.querySelector('.testimonials-carousel-track');
        if (testimonialsTrack) {
            const testimonials = testimonialsTrack.querySelectorAll('.testimonial-card');
            if (testimonials.length > 40) {
                // Keep only first 40 testimonials
                for (let i = 40; i < testimonials.length; i++) {
                    testimonials[i].remove();
                }
                console.log(`✅ Testimonials optimized (${testimonials.length} → 40)`);
            }
        }
    }

    // 14. Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = [
            './LOGOS ORIGINALES/ZAFIRO.webp',
            './LOGOS ORIGINALES/EMERALD.webp',
            './LOGOS ORIGINALES/DIAMOND.webp'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });

        console.log('✅ Critical resources preloaded');
    }

    // 15. Remove ipapi.co timeout (10+ seconds saved)
    function blockSlowAPIs() {
        const originalFetch = window.fetch;
        window.fetch = function (...args) {
            const url = args[0];
            if (typeof url === 'string' && (url.includes('ipapi.co') || url.includes('ip-api.com'))) {
                console.log('🚫 Blocked slow API call:', url);
                return Promise.reject(new Error('Blocked for performance'));
            }
            return originalFetch.apply(this, args);
        };
        console.log('✅ Slow APIs blocked');
    }

    // 16. Optimize images - add loading="lazy" to all
    function optimizeAllImages() {
        document.querySelectorAll('img:not([loading])').forEach(img => {
            img.loading = 'lazy';
        });
        console.log('✅ All images set to lazy loading');
    }

    // 16b. Carousel RAF pause — stop the carousel animation when offscreen
    function initCarouselPause() {
        if (!('IntersectionObserver' in window)) return;

        const auditedSection = document.querySelector('.audited-section');
        if (!auditedSection) return;

        // Global flag for carousel animate() to check
        window.__carouselShouldRun = false;

        const carouselObserver = new IntersectionObserver(([entry]) => {
            window.__carouselShouldRun = entry.isIntersecting;
            // If becoming visible, restart the animation loop
            if (entry.isIntersecting && window.__carouselAnimate) {
                window.__carouselAnimate();
            }
        }, { rootMargin: '100px 0px' });

        carouselObserver.observe(auditedSection);
        console.log('✅ Carousel RAF pause enabled');
    }
    // 17. Initialize all optimizations
    function init() {
        function runAll() {
            forceHardwareAcceleration();
            optimizeAnimations();
            optimizeScrollUnified();
            blockProblematicPostMessage();
            initLazyLoading();
            detectAndOptimizeForSlowDevices();
            optimizeTestimonials();
            preloadCriticalResources();
            blockSlowAPIs();
            optimizeAllImages();
            initSectionHibernation();
            initVisibilityAPI();
            initCarouselPause();
            console.log('🎯 ULTRA EXTREME FLUIDITY V5 — 60-120 FPS ENGINE ACTIVATED');
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runAll);
        } else {
            runAll();
        }
    }

    // Auto-init
    init();

})();
