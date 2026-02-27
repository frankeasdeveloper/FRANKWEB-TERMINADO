// ============================================
// REAL 3D GLASS CUBES WITH GEMS - THREE.JS
// Creates actual 3D glass cubes with gems inside
// Optimized for performance
// ============================================

console.log('🔷 3D Glass Cubes script loaded');

// Initialize Three.js scenes for each gem
function init3DGems() {
    console.log('🔷 Initializing 3D Glass Cubes...');

    const gemContainers = document.querySelectorAll('.product-gem');
    console.log(`🔷 Found ${gemContainers.length} gem containers`);

    gemContainers.forEach((container, index) => {
        console.log(`🔷 Processing gem container ${index + 1}`);

        // Get product type
        const productCard = container.closest('.product-card');
        const isZafiro = productCard.classList.contains('zafiro');
        const isEmerald = productCard.classList.contains('emerald');
        const isDiamond = productCard.classList.contains('diamond');

        const gemType = isZafiro ? 'Zafiro' : isEmerald ? 'Emerald' : 'Diamond';
        console.log(`🔷 Gem type: ${gemType}`);

        // Create scene
        const scene = new THREE.Scene();

        // Create camera
        const camera = new THREE.PerspectiveCamera(
            45,
            1, // Square aspect ratio
            0.1,
            100
        );
        camera.position.set(3, 2, 4);
        camera.lookAt(0, 0, 0);

        // Create renderer with explicit size
        const size = 200;
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(size, size);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio for performance
        renderer.setClearColor(0x000000, 0); // Transparent background

        // Clear container and add canvas
        container.innerHTML = '';
        container.appendChild(renderer.domElement);
        console.log(`🔷 Canvas added to container for ${gemType}`);

        // Determine gem color
        let gemColor, glowColor;

        if (isZafiro) {
            gemColor = 0xa855f7; // Purple
            glowColor = 0xff00ff;
        } else if (isEmerald) {
            gemColor = 0x10b981; // Green
            glowColor = 0x00ff00;
        } else {
            gemColor = 0x06b6d4; // Cyan
            glowColor = 0x00ffff;
        }

        // Create group to hold cube and gem
        const group = new THREE.Group();
        scene.add(group);

        // ===== CREATE GLASS CUBE =====
        const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
        const cubeMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0.1,
            transparent: true,
            opacity: 0.15,
            transmission: 0.9, // Glass transmission
            thickness: 0.5,
            envMapIntensity: 1,
            clearcoat: 1,
            clearcoatRoughness: 0.1
        });
        const glassCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        group.add(glassCube);

        // ===== CREATE GEM INSIDE =====
        const gemGeometry = new THREE.OctahedronGeometry(0.8, 0);
        const gemMaterial = new THREE.MeshPhysicalMaterial({
            color: gemColor,
            metalness: 0.2,
            roughness: 0.2,
            transparent: true,
            opacity: 0.95,
            emissive: gemColor,
            emissiveIntensity: 0.3,
            clearcoat: 1,
            clearcoatRoughness: 0.1
        });
        const gem = new THREE.Mesh(gemGeometry, gemMaterial);
        group.add(gem);

        // ===== ADD GLOW EFFECT =====
        const glowGeometry = new THREE.SphereGeometry(1.2, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: glowColor,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        group.add(glow);

        // ===== LIGHTING =====
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(gemColor, 1, 100);
        pointLight1.position.set(3, 3, 3);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 0.5, 100);
        pointLight2.position.set(-3, -3, 3);
        scene.add(pointLight2);

        // Animation speeds
        let baseSpeed = 0.005;
        let rotationSpeed = baseSpeed;
        let isHovered = false;

        // Animation loop with performance optimization
        let lastTime = 0;
        const targetFPS = 30; // Limit to 30 FPS for performance
        const frameInterval = 1000 / targetFPS;

        function animate(currentTime) {
            requestAnimationFrame(animate);

            // Throttle to target FPS
            const deltaTime = currentTime - lastTime;
            if (deltaTime < frameInterval) return;
            lastTime = currentTime - (deltaTime % frameInterval);

            // Rotate entire group
            group.rotation.y += rotationSpeed;
            group.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;

            // Rotate gem independently for extra effect
            gem.rotation.y -= rotationSpeed * 0.5;
            gem.rotation.x += rotationSpeed * 0.3;

            // Pulsing glow
            const pulse = Math.sin(Date.now() * 0.002) * 0.05 + 0.15;
            glowMaterial.opacity = pulse;
            gemMaterial.emissiveIntensity = 0.2 + pulse;

            // Render scene
            renderer.render(scene, camera);
        }

        // Start animation
        animate(0);
        console.log(`✅ Animation started for ${gemType}`);

        // Hover effects
        container.addEventListener('mouseenter', () => {
            isHovered = true;
            rotationSpeed = baseSpeed * 0.3; // Slow down
        });

        container.addEventListener('mouseleave', () => {
            isHovered = false;
            rotationSpeed = baseSpeed; // Return to normal
        });

        // Handle window resize (debounced)
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                renderer.setSize(size, size);
            }, 250);
        });
    });

    console.log('✅ All 3D glass cubes initialized');
}

// Initialize when ready
console.log('🔷 Checking document state:', document.readyState);

function tryInit() {
    if (typeof THREE === 'undefined') {
        console.error('❌ THREE.js not loaded yet');
        setTimeout(tryInit, 100);
        return;
    }

    console.log('✅ THREE.js is available');

    const containers = document.querySelectorAll('.product-gem');
    if (containers.length === 0) {
        console.warn('⚠️ No .product-gem containers found yet, waiting...');
        setTimeout(tryInit, 100);
        return;
    }

    init3DGems();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInit);
} else {
    tryInit();
}
