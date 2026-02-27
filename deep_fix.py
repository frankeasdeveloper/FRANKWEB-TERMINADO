
import os

# Mapeo de secuencias de doble mojibake detectadas en pantallas
mapping = {
    'ðŸ’’‡': '🔊', # Símbolo de sonido que aparece en mute
    'ðŸ’’’': '🛒', # Carrito
    'ðŸ’¬': '💬',
    'ðŸ” ': '🔍',
    'ðŸ›’': '🛒',
    'ðŸ›¡ï¸': '🛡️',
    'â— ': '●',
    'âœ…': '✅',
    'âœ–': '✖',
    'Ã±': 'ñ',
    'Ã³': 'ó',
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ãº': 'ú',
}

files = [
    r"C:\Users\Usuario\Desktop\frankweb\index.html",
    r"C:\Users\Usuario\Desktop\frankweb\i18n.js"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'rb') as f:
        content_bytes = f.read()

    # Intentamos decodificar asumiendo que es UTF-8 con basura,
    # o Latin-1 si fue guardado como tal.
    try:
        text = content_bytes.decode('utf-8')
    except:
        text = content_bytes.decode('latin-1')

    original_text = text
    for mojibake, real in mapping.items():
        text = text.replace(mojibake, real)
    
    # Caso crítico: doble codificación UTF-8 interpretada como Latin-1 y re-guardada como UTF-8
    # "ðŸš€" es 🚀 en UTF-8 interpretado mal.
    # Si nada cambió, probamos un fix agresivo por regex si fuera necesario, 
    # pero el reemplazo directo suele ser más seguro para archivos ya tocados.
    
    if text != original_text:
        print(f"Repaired: {file_path}")
        with open(file_path, 'w', encoding='utf-8', newline='') as f:
            f.write(text)

print("Deep repair complete.")
