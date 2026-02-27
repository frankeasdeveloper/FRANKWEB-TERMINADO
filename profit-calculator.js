// ============================================
// PROFIT CALCULATOR - Frank EAs Developer
// SUPPORTS BOTH: Desktop (3 calculators) + Mobile (unified)
// ============================================

(function () {
    'use strict';

    // Robot performance data - DIFFERENTIATED returns
    const robotData = {
        zafiro: {
            name: 'ZAFIRO EA',
            successRate: 85,
            monthlyReturn: 0.15,
            description: 'Premium',
            logo: './LOGOS ORIGINALES/ZAFIRO.webp',
            color: { line: '#FF00FF', bg: 'rgba(255, 0, 255, 0.15)' }
        },
        emerald: {
            name: 'EMERALD EA',
            successRate: 70,
            monthlyReturn: 0.075,
            description: 'Popular',
            logo: './assets/emerald-gem.webp',
            color: { line: '#00FF00', bg: 'rgba(0, 255, 0, 0.15)' }
        },
        diamond: {
            name: 'DIAMOND EA',
            successRate: 58,
            monthlyReturn: 0.0375,
            description: 'Economic',
            logo: './LOGOS ORIGINALES/DIAMOND.webp',
            color: { line: '#00FFFF', bg: 'rgba(0, 255, 255, 0.15)' }
        }
    };

    // Chart instances
    const charts = {};

    // Current EA for unified mobile calculator
    let currentEA = 'zafiro';
    let unifiedChartData = null;

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(initCalculators, 100);
    });

    function initCalculators() {
        // Initialize DESKTOP calculators (3 separate cards)
        initDesktopCalculators();

        // Initialize MOBILE unified calculator
        initMobileCalculator();

        // Initialize CUSTOM NUMBER CONTROLS (+/- buttons)
        initCustomNumberControls();
    }

    function initCustomNumberControls() {
        const wrappers = document.querySelectorAll('.calc-number-wrapper');

        wrappers.forEach(wrapper => {
            const input = wrapper.querySelector('input[type="number"]');
            const decBtn = wrapper.querySelector('.decrement');
            const incBtn = wrapper.querySelector('.increment');

            if (!input || !decBtn || !incBtn) return;

            // Handle Decrement
            decBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const currentVal = parseFloat(input.value) || 0;
                const min = parseFloat(input.getAttribute('min')) || 0;
                const step = parseFloat(input.getAttribute('step')) || 100; // Default step for balance

                if (currentVal > min) {
                    input.value = Math.max(min, currentVal - step);
                    // Trigger input event to recalculate
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });

            // Handle Increment
            incBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const currentVal = parseFloat(input.value) || 0;
                const max = parseFloat(input.getAttribute('max')) || 10000000;
                const step = parseFloat(input.getAttribute('step')) || 100; // Default step for balance

                if (currentVal < max) {
                    input.value = Math.min(max, currentVal + step);
                    // Trigger input event to recalculate
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });
        });
    }

    // ========================================
    // DESKTOP CALCULATORS (Original 3 cards)
    // ========================================
    function initDesktopCalculators() {
        const calcCards = document.querySelectorAll('.calc-card.desktop-calc');

        calcCards.forEach(card => {
            const robotType = card.classList.contains('zafiro') ? 'zafiro' :
                card.classList.contains('emerald') ? 'emerald' : 'diamond';

            setupDesktopCalculator(card, robotType);
            initDesktopChart(robotType);
            calculateDesktopProfit(robotType);
        });
    }

    function setupDesktopCalculator(card, robotType) {
        const balanceInput = card.querySelector('.calc-balance');
        if (balanceInput) {
            balanceInput.addEventListener('input', () => calculateDesktopProfit(robotType));
        }

        const riskButtons = card.querySelectorAll('.risk-btn');
        const customRiskInput = card.querySelector('.calc-custom-risk');

        riskButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                riskButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const wrapper = customRiskInput.closest('.calc-number-wrapper');
                if (btn.dataset.risk === 'custom') {
                    if (wrapper) wrapper.classList.remove('hidden');
                    else customRiskInput.classList.remove('hidden');
                    customRiskInput.focus();
                    if (!customRiskInput.value) {
                        customRiskInput.value = '0.5';
                    }
                } else {
                    if (wrapper) wrapper.classList.add('hidden');
                    else customRiskInput.classList.add('hidden');
                }
                calculateDesktopProfit(robotType);
            });
        });

        if (customRiskInput) {
            ['input', 'change', 'keyup', 'paste'].forEach(eventType => {
                customRiskInput.addEventListener(eventType, function () {
                    const customBtn = card.querySelector('.risk-btn[data-risk="custom"]');
                    if (customBtn && customBtn.classList.contains('active')) {
                        calculateDesktopProfit(robotType);
                    }
                });
            });
        }

        const periodButtons = card.querySelectorAll('.period-btn');
        periodButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                periodButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                calculateDesktopProfit(robotType);
            });
        });
    }

    function getDesktopCalculatorValues(robotType) {
        const card = document.querySelector(`.calc-card.desktop-calc.${robotType}`);
        if (!card) return null;

        let balance = parseFloat(card.querySelector('.calc-balance').value) || 10000;
        balance = Math.min(balance, 10000000);

        const activeRiskBtn = card.querySelector('.risk-btn.active');
        let risk;
        if (activeRiskBtn && activeRiskBtn.dataset.risk === 'custom') {
            const customInput = card.querySelector('.calc-custom-risk');
            risk = parseFloat(customInput.value);
            if (isNaN(risk) || risk <= 0) risk = 0.5;
        } else if (activeRiskBtn) {
            risk = parseFloat(activeRiskBtn.dataset.risk);
        } else {
            risk = 0.5;
        }
        risk = Math.min(Math.max(risk, 0.1), 100);

        const activePeriodBtn = card.querySelector('.period-btn.active');
        const days = parseInt(activePeriodBtn?.dataset.period) || 30;

        return { balance, risk, days };
    }

    function calculateDesktopProfit(robotType) {
        const values = getDesktopCalculatorValues(robotType);
        if (!values) return;

        const { balance, risk, days } = values;
        const robot = robotData[robotType];

        const months = days / 30;
        const riskMultiplier = risk / 0.5;
        const adjustedMonthlyReturn = robot.monthlyReturn * riskMultiplier;

        let finalBalance;
        if (months <= 12) {
            finalBalance = balance * Math.pow(1 + adjustedMonthlyReturn, months);
        } else {
            const firstYear = balance * Math.pow(1 + adjustedMonthlyReturn, 12);
            const remainingMonths = months - 12;
            const reducedReturn = adjustedMonthlyReturn * 0.5;
            finalBalance = firstYear * Math.pow(1 + reducedReturn, remainingMonths);
        }

        finalBalance = Math.min(finalBalance, balance * 50);
        const profit = finalBalance - balance;
        const dataPoints = generateGrowthData(balance, finalBalance, Math.min(months, 120));

        updateValue(`${robotType}Result`, profit, true);
        updateValue(`${robotType}Final`, finalBalance, false);
        updateDesktopChart(robotType, dataPoints);
    }

    function initDesktopChart(robotType) {
        const canvas = document.getElementById(`${robotType}Chart`);
        if (!canvas) return;

        charts[robotType] = {
            canvas,
            color: robotData[robotType].color
        };
    }

    function updateDesktopChart(robotType, data) {
        const chart = charts[robotType];
        if (!chart) return;

        const { canvas, color } = chart;
        drawChart(canvas, data, color);
    }

    // ========================================
    // MOBILE UNIFIED CALCULATOR
    // ========================================
    function initMobileCalculator() {
        const calcCard = document.getElementById('unifiedCalc');
        if (!calcCard) return;

        setupEATabs();
        setupMobileCalculatorInputs();
        initMobileChart();
        calculateMobileProfit();
    }

    function setupEATabs() {
        const tabs = document.querySelectorAll('.ea-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentEA = tab.dataset.ea;
                updateMobileCalculatorAppearance();
                calculateMobileProfit();
            });
        });
    }

    function updateMobileCalculatorAppearance() {
        const calcCard = document.getElementById('unifiedCalc');
        const robot = robotData[currentEA];

        calcCard.dataset.currentEa = currentEA;

        const logoImg = document.getElementById('calcLogoImg');
        if (logoImg) logoImg.src = robot.logo;

        const robotName = document.getElementById('calcRobotName');
        if (robotName) robotName.textContent = robot.name;

        const badge = document.getElementById('calcBadge');
        if (badge) badge.textContent = `${robot.successRate}% Winrate`;
    }

    function setupMobileCalculatorInputs() {
        const calcCard = document.getElementById('unifiedCalc');
        if (!calcCard) return;

        const balanceInput = document.getElementById('unifiedBalance');
        if (balanceInput) {
            balanceInput.addEventListener('input', () => calculateMobileProfit());
        }

        const riskButtons = calcCard.querySelectorAll('.risk-btn');
        const customRiskInput = document.getElementById('unifiedCustomRisk');

        riskButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                riskButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const wrapper = document.getElementById('unifiedCustomRiskWrapper') || customRiskInput.closest('.calc-number-wrapper');
                if (btn.dataset.risk === 'custom') {
                    if (wrapper) wrapper.classList.remove('hidden');
                    else customRiskInput.classList.remove('hidden');
                    customRiskInput.focus();
                    if (!customRiskInput.value) customRiskInput.value = '0.5';
                } else {
                    if (wrapper) wrapper.classList.add('hidden');
                    else customRiskInput.classList.add('hidden');
                }
                calculateMobileProfit();
            });
        });

        if (customRiskInput) {
            ['input', 'change', 'keyup', 'paste'].forEach(eventType => {
                customRiskInput.addEventListener(eventType, function () {
                    const customBtn = calcCard.querySelector('.risk-btn[data-risk="custom"]');
                    if (customBtn && customBtn.classList.contains('active')) {
                        calculateMobileProfit();
                    }
                });
            });
        }

        const periodButtons = calcCard.querySelectorAll('.period-btn');
        periodButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                periodButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                calculateMobileProfit();
            });
        });
    }

    function getMobileCalculatorValues() {
        const calcCard = document.getElementById('unifiedCalc');
        let balance = parseFloat(document.getElementById('unifiedBalance').value) || 10000;
        balance = Math.min(balance, 10000000);

        const activeRiskBtn = calcCard.querySelector('.risk-btn.active');
        let risk;
        if (activeRiskBtn && activeRiskBtn.dataset.risk === 'custom') {
            const customInput = document.getElementById('unifiedCustomRisk');
            risk = parseFloat(customInput.value);
            if (isNaN(risk) || risk <= 0) risk = 0.5;
        } else if (activeRiskBtn) {
            risk = parseFloat(activeRiskBtn.dataset.risk);
        } else {
            risk = 0.5;
        }
        risk = Math.min(Math.max(risk, 0.1), 100);

        const activePeriodBtn = calcCard.querySelector('.period-btn.active');
        const days = parseInt(activePeriodBtn?.dataset.period) || 30;

        return { balance, risk, days };
    }

    function calculateMobileProfit() {
        const { balance, risk, days } = getMobileCalculatorValues();
        const robot = robotData[currentEA];

        const months = days / 30;
        const riskMultiplier = risk / 0.5;
        const adjustedMonthlyReturn = robot.monthlyReturn * riskMultiplier;

        let finalBalance;
        if (months <= 12) {
            finalBalance = balance * Math.pow(1 + adjustedMonthlyReturn, months);
        } else {
            const firstYear = balance * Math.pow(1 + adjustedMonthlyReturn, 12);
            const remainingMonths = months - 12;
            const reducedReturn = adjustedMonthlyReturn * 0.5;
            finalBalance = firstYear * Math.pow(1 + reducedReturn, remainingMonths);
        }

        finalBalance = Math.min(finalBalance, balance * 50);
        const profit = finalBalance - balance;
        const dataPoints = generateGrowthData(balance, finalBalance, Math.min(months, 120));

        updateValue('unifiedResult', profit, true);
        updateValue('unifiedFinal', finalBalance, false);
        updateMobileChart(dataPoints);
    }

    function initMobileChart() {
        const canvas = document.getElementById('unifiedChart');
        if (!canvas) return;
        unifiedChartData = { canvas };
    }

    function updateMobileChart(data) {
        if (!unifiedChartData) return;
        const { canvas } = unifiedChartData;
        const color = robotData[currentEA].color;
        drawChart(canvas, data, color);
    }

    // ========================================
    // SHARED FUNCTIONS
    // ========================================
    function generateGrowthData(startBalance, endBalance, months) {
        const points = [];
        const numPoints = 12;

        for (let i = 0; i <= numPoints; i++) {
            const progress = i / numPoints;
            const eased = progress * progress * (3 - 2 * progress);
            const value = startBalance + (endBalance - startBalance) * eased;
            const variance = 1 + (Math.random() - 0.5) * 0.05;
            points.push(value * (i === numPoints ? 1 : variance));
        }

        return points;
    }

    function updateValue(elementId, value, isProfit) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const formatted = isProfit
            ? `+$${formatNumber(value)}`
            : `$${formatNumber(value)}`;

        element.textContent = formatted;
    }

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        } else if (num >= 100000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return Math.round(num).toLocaleString('en-US');
    }

    function drawChart(canvas, data, color) {
        const ctx = canvas.getContext('2d');

        const rect = canvas.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = 70 * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = '70px';
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = 70;

        ctx.clearRect(0, 0, width, height);

        const padding = { left: 5, right: 5, top: 10, bottom: 10 };
        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;

        const minVal = Math.min(...data) * 0.98;
        const maxVal = Math.max(...data) * 1.02;
        const range = maxVal - minVal || 1;

        // Gradient fill
        const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
        gradient.addColorStop(0, color.bg);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.moveTo(padding.left, height - padding.bottom);

        data.forEach((val, i) => {
            const x = padding.left + (i / (data.length - 1)) * chartWidth;
            const y = padding.top + chartHeight - ((val - minVal) / range) * chartHeight;
            ctx.lineTo(x, y);
        });

        ctx.lineTo(padding.left + chartWidth, height - padding.bottom);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Line
        ctx.beginPath();
        data.forEach((val, i) => {
            const x = padding.left + (i / (data.length - 1)) * chartWidth;
            const y = padding.top + chartHeight - ((val - minVal) / range) * chartHeight;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.strokeStyle = color.line;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = color.line;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // End dot
        const lastX = padding.left + chartWidth;
        const lastY = padding.top + chartHeight - ((data[data.length - 1] - minVal) / range) * chartHeight;

        ctx.beginPath();
        ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
        ctx.fillStyle = color.line;
        ctx.shadowColor = color.line;
        ctx.shadowBlur = 8;
        ctx.fill();
    }

})();
