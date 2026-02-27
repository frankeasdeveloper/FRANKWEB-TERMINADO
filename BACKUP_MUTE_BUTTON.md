# BACKUP - BOTÓN MUTE FLOTANTE
## Fecha: 2026-02-09

Este archivo contiene el backup completo del botón mute flotante que fue removido de la web.
Puedes usar este código para reincorporarlo en el futuro si lo necesitas.

---

## Archivo: floating-buttons-fix.css

### CSS Desktop (Líneas 43-68)

```css
/* Floating Mute Button - ALWAYS VISIBLE */
#floating-mute-btn,
.floating-mute-button {
    position: fixed !important;
    top: 50% !important;
    left: 30px !important;
    transform: translateY(-50%) !important;
    width: 80px !important;
    height: 80px !important;
    z-index: 2147483647 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 50% !important;
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 100, 255, 0.2)) !important;
    border: 3px solid rgba(0, 255, 255, 0.5) !important;
    cursor: pointer !important;
    box-shadow: 0 8px 30px rgba(0, 255, 255, 0.4) !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
}

.floating-mute-button:hover {
    transform: translateY(-50%) scale(1.1) !important;
}
```

### CSS Mobile (Líneas 123-133)

```css
/* Move volume button to visible area within FAQ scroll limit */
#floating-mute-btn,
.floating-mute-button {
    top: 85vh !important;
    bottom: auto !important;
    left: 15px !important;
    transform: none !important;
    width: 56px !important;
    height: 56px !important;
    border-width: 2px !important;
}
```

### CSS Compacto iPhone 12 Pro - styles.css (Líneas ~9191-9198)

```css
/* ---- FLOATING BUTTONS ---- */
#floating-mute-btn,
.floating-mute-button {
    width: 48px !important;
    height: 48px !important;
    bottom: 15px !important;
    left: 15px !important;
}
```

---

## INSTRUCCIONES PARA REINCORPORAR

### Paso 1: Agregar HTML del botón
Agregar este código en `index.html` antes del cierre de `</body>`:

```html
<!-- Floating Mute Button -->
<button id="floating-mute-btn" class="floating-mute-button" aria-label="Mute/Unmute">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ffff" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
</button>
```

### Paso 2: Restaurar CSS
Copiar el código CSS de arriba y pegarlo de vuelta en:
- `floating-buttons-fix.css` (líneas 43-68 y 123-133)
- `styles.css` (líneas ~9191-9198)

### Paso 3: Agregar JavaScript de control
Agregar este script para controlar el mute/unmute:

```javascript
// Mute Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const muteBtn = document.getElementById('floating-mute-btn');
    const heroVideo = document.getElementById('heroVideo');
    let isMuted = true;
    
    if (muteBtn && heroVideo) {
        muteBtn.addEventListener('click', function() {
            isMuted = !isMuted;
            heroVideo.muted = isMuted;
            
            // Cambiar icono según estado
            const svg = muteBtn.querySelector('svg');
            if (isMuted) {
                // Icono muted (sin ondas)
                svg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15" stroke="#00ffff" stroke-width="2"></line><line x1="17" y1="9" x2="23" y2="15" stroke="#00ffff" stroke-width="2"></line>';
            } else {
                // Icono unmuted (con ondas)
                svg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>';
            }
        });
    }
});
```

---

## NOTAS IMPORTANTES

- **Z-index:** El botón tiene z-index máximo (2147483647) para estar siempre visible
- **Mobile:** En mobile (<480px) el botón se posiciona en `top: 85vh` para evitar quedar fuera del scroll
- **Responsivo:** Tamaños: 80px (desktop), 56px (mobile), 48px (iPhone 12 Pro)
- **Colores:** Usa gradiente cyan (0,255,255) con transparencia
- **Interacción:** Hover aplica scale(1.1) en desktop

## FECHA DE ELIMINACIÓN
2026-02-09 16:44

## MOTIVO
Simplificación de la interfaz mobile y eliminación de espacio de scroll innecesario.
