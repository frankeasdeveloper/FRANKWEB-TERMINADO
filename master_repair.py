
import os

# Mapeo de bytes corruptos a bytes correctos
# Esto soluciona problemas de mojibake multinivel sin depender de la interpretación del editor
replacements = [
    # 1. Escudo con carácter extra (Box/Mojibake)
    (b'\xf0\x9f\x9b\xa1\xef\xb8\x8f\xc2\x8f', b'\xf0\x9f\x9b\xa1\xef\xb8\x8f'),
    (b'\xf0\x9f\x9b\xa1\xef\xb8\x8f \xc2\x8f', b'\xf0\x9f\x9b\xa1\xef\xb8\x8f '),
    
    # 2. Símbolos de tablas (â Œ, âœ“, âžž) en su forma corrupta
    (b'\xc3\xa2\x20\xc5\x92', b'\xe2\x9d\x8c'), # â Œ -> ❌
    (b'\xc3\xa2\xe2\x84\xa2\xe2\x80\x9a', b'\xe2\x9c\x93'), # â„¢â€š -> ✓ (mojibake de ✓)
    (b'\xc3\xa2\xc5\x93\xe2\x80\x9c', b'\xe2\x9c\x93'), # âœ“ -> ✓
    (b'\xc3\xa2\xc5\xbe\xc5\xbe', b'\xe2\x9e\x9e'), # âžž -> ➞

    # 3. Mojibake común de un solo nivel (si Select-String lo leyó así)
    (b'\xe2\x9c\x96', b'\xe2\x9d\x8c'), # ✖ -> ❌ (para consistencia)
    
    # 4. Limpieza de caracteres de control c2 8f (suelen aparecer en mojibake de Powershell)
    (b'\xc2\x8f', b''), 

    # 5. Doble codificación de emojis (Ã°Å¸...)
    (b'\xc3\xb0\xc5\xb8\x9a\x80', b'\xf0\x9f\x9a\x80'), # 🚀
    (b'\xc3\xb0\xc5\xb8\x94\xa5', b'\xf0\x9f\x94\xa5'), # 🔥
    (b'\xc3\xb0\xc5\xb8\x93\x88', b'\xf0\x9f\x93\x88'), # 📈
    (b'\xc3\xb0\xc5\xb8\x93\x8a', b'\xf0\x9f\x93\x8a'), # 📊
    (b'\xc3\xb0\xc5\xb8\x9b\xa1\xc3\xaf\xc2\xb8\xc2\x8f', b'\xf0\x9f\x9b\xa1\xef\xb8\x8f'), # 🛡️
]

files = [
    r"C:\Users\Usuario\Desktop\frankweb\index.html",
    r"C:\Users\Usuario\Desktop\frankweb\i18n.js"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    print(f"Master repairing {file_path}...")
    with open(file_path, 'rb') as f:
        data = f.read()
    
    original_data = data
    for broken, fixed in replacements:
        data = data.replace(broken, fixed)
    
    if data != original_data:
        print(f"Fixed patterns in {file_path}")
        with open(file_path, 'wb') as f:
            f.write(data)
    else:
        print(f"No patterns found in {file_path}")

print("Master encoding repair complete.")
