// ============================================
// SOURCE PROTECTION - ANTI-INSPECT
// ============================================
(function () {
    'use strict';

    // 1. Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // 2. Block keyboard shortcuts for DevTools
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Element picker)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        // Cmd+Option+I (Mac Inspect)
        if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
        // Cmd+Option+J (Mac Console)
        if (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
        // Cmd+Option+C (Mac Element picker)
        if (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        // Cmd+Option+U (Mac View Source)
        if (e.metaKey && e.altKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save page)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Disable text selection
    document.addEventListener('selectstart', function (e) {
        // Allow selection in input fields and textareas
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
    });

    // 4. Disable drag
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });

    // 5. Console warning and clear
    var _c = console;
    try {
        Object.defineProperty(window, 'console', {
            get: function () {
                return {
                    log: function () { },
                    warn: function () { },
                    error: function () { },
                    info: function () { },
                    debug: function () { },
                    dir: function () { },
                    table: function () { },
                    trace: function () { },
                    group: function () { },
                    groupEnd: function () { },
                    clear: function () { },
                    assert: function () { },
                    count: function () { },
                    time: function () { },
                    timeEnd: function () { }
                };
            },
            set: function () { }
        });
    } catch (e) { }

    // 6. Detect DevTools via console timing (non-blocking)
    var _devToolsOpen = false;
    var _checkConsole = function () {
        var start = performance.now();
        // This trick: console.log with %c causes a tiny delay only when DevTools is open
        _devToolsOpen = false;
        var el = new Image();
        Object.defineProperty(el, 'id', {
            get: function () {
                _devToolsOpen = true;
            }
        });
        void (el);
    };
    setInterval(_checkConsole, 2000);

    // 7. Detect DevTools via window size difference
    var _checkDevTools = function () {
        var widthThreshold = window.outerWidth - window.innerWidth > 160;
        var heightThreshold = window.outerHeight - window.innerHeight > 160;
        if (widthThreshold || heightThreshold) {
            // DevTools likely open - clear sensitive data from DOM
            var walletEl = document.getElementById('walletAddress');
            if (walletEl) {
                walletEl.textContent = '***';
                walletEl.removeAttribute('data-full-address');
                walletEl.dataset.fullAddress = '';
            }
        }
    };
    setInterval(_checkDevTools, 1500);

    // 8. Disable copy on page (except input fields)
    document.addEventListener('copy', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        // Allow wallet copy button to work via the dedicated function
        if (e.target.id === 'copyAddress' || e.target.closest('#copyAddress')) return;
        e.preventDefault();
    });

    // 9. CSS user-select: none on body
    document.documentElement.style.webkitUserSelect = 'none';
    document.documentElement.style.userSelect = 'none';
    document.documentElement.style.webkitTouchCallout = 'none';

    // Re-enable for inputs
    var style = document.createElement('style');
    style.textContent = 'input, textarea, [contenteditable] { -webkit-user-select: text !important; user-select: text !important; }';
    document.head.appendChild(style);

})();
