
import os

# Mapeo exhaustivo de patrones mojibake (simples y dobles)
# Incluimos las secuencias literales que el usuario ve en pantalla
mapping = {
    # Doble codificación común y símbolos de diseño
    'âœ“': '✓',   # Checkmark en listas de características
    'âœ–': '✖',   # Cruz en tablas de comparación
    'âžž': '➞',   # Flecha en precios (variante 1)
    'âž¡': '➞',   # Flecha en precios (variante 2)
    'âž¡ï¸ ': '➡️',
    'â†’': '→',   # Flecha simple
    'ðŸš€': '🚀',
    'ðŸ“ˆ': '📈',
    'ðŸ“Š': '📊',
    'ðŸ”¥': '🔥',
    'ðŸ›¡ï¸': '🛡️',
    'âœ…': '✅',
    'âœ•': '✕',
    'âœ”': '✔',
    'ðŸ” ': '🔍',
    'ðŸ’¬': '💬',
    'ðŸ›’': '🛒',
    'ðŸ’’’': '🛒',
    'ðŸ’’‡': '🔊', 
    'ðŸ”±': '📱',
    'ðŸ”´': '🔴',
    'ðŸ’³': '💳',
    'ðŸ“¦': '📦',
    'ðŸŽ—': '🎗️',
    'ðŸŽ ': '🎁',
    'ðŸ †': '🏆',
    'ðŸ”®': '🔮',
    'ðŸ’💚': '💚',
    'ðŸ’š': '💚',
    'âš¡': '⚡',
    'âœ‰': '✉',
    
    # Acentos y caracteres especiales
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã‘': 'Ñ',
    'Ãš': 'Ú',
    'Ã': 'í',
    'â— ': '●',
    'â€”': '—',
    'â€“': '–',
    'â€¢': '•',
    'ï¸\x8f': '', 
}

files = [
    r"C:\Users\Usuario\Desktop\frankweb\index.html",
    r"C:\Users\Usuario\Desktop\frankweb\i18n.js"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    print(f"Deep cleaning: {file_path}")
    
    with open(file_path, 'rb') as f:
        raw_data = f.read()
    
    try:
        content = raw_data.decode('utf-8')
    except:
        content = raw_data.decode('latin-1')
        
    for m, r in mapping.items():
        content = content.replace(m, r)
        
    # Fix recurrente para doble encoding Ã°...
    if 'Ã°' in content:
        try:
            content = content.encode('latin-1').decode('utf-8')
            print(f"Refined encoding fix applied to {file_path}")
        except:
            pass

    with open(file_path, 'w', encoding='utf-8', newline='') as f:
        f.write(content)

print("Final cleanup completed.")
