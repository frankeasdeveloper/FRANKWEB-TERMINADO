
import os

# Mapeo de bytes corruptos a bytes correctos (v28 DEFINITIVO)
# Enfocado en los patrones detectados en index.html, styles.css e i18n.js
replacements = [
    # 1. Escudo con carácter extra (Box/Mojibake) en index.html
    (b'\xf0\x9f\x9b\xa1\xef\xb8\x8f\xc2\x8f', b'\xf0\x9f\x9b\xa1\xef\xb8\x8f'),
    (b'\xf0\x9f\x9b\xa1\xef\xb8\x8f \xc2\x8f', b'\xf0\x9f\x9b\xa1\xef\xb8\x8f '),
    
    # 2. Checkmarks y Estrellas en styles.css (Pseudo-elementos)
    (b'\xc3\xa2\xc5\x93\xe2\x80\x9c', b'\xe2\x9c\x93'), # âœ“ -> ✓
    (b'\x63\x6f\x6e\x74\x65\x6e\x74\x3a\x20\x27\xc3\xa2\xc5\x93\xe2\x80\x9c\x27', b"content: '\xe2\x9c\x93'"), 
    (b'\xc3\xa2\xcb\x9c\xe2\x80\xa6', b'\xe2\x98\x85'), # â˜… -> ★
    
    # 3. Cruces y Flechas en index.html (Tablas y Navegación)
    (b'\xc3\xa2\xc2\x9d\xc5\x92', b'\xe2\x9d\x8c'), # â Œ -> ❌
    (b'\xc3\xa2\xc5\xbe\xc5\xbe', b'\xe2\x9e\x9e'), # âžž -> ➞
    (b'\xc3\xa2\xe2\x82\xac\xb9', b'\xe2\x80\xb9'), # â€¹ -> ‹
    (b'\xc3\xa2\xe2\x82\xac\xba', b'\xe2\x80\xba'), # â€º -> ›
    
    # 4. Mojibake en i18n.js (✓ prepended en strings)
    (b'\xc3\xa2\xe2\x84\xa2\xe2\x80\x9a', b'\xe2\x9c\x93'), # Mojibake de ✓ en i18n
    
    # 5. Limpieza de caracteres residuales c2 8f
    (b'\xc2\x8f', b''), 

    # 6. Emojis comunes double-encoded
    (b'\xc3\xb0\xc5\xb8\x9a\x80', b'\xf0\x9f\x9a\x80'), # 🚀
    (b'\xc3\xb0\xc5\xb8\x94\xa5', b'\xf0\x9f\x94\xa5'), # 🔥
    (b'\xc3\xb0\xc5\xb8\x93\x88', b'\xf0\x9f\x93\x88'), # 📈
    (b'\xc3\xb0\xc5\xb8\x93\x8a', b'\xf0\x9f\x93\x8a'), # 📊
    (b'\xc3\xb0\xc5\xb8\x9b\xa1\xc3\xaf\xc2\xb8\xc2\x8f', b'\xf0\x9f\x9b\xa1\xef\xb8\x8f'), # 🛡️
]

files = [
    r"C:\Users\Usuario\Desktop\frankweb\index.html",
    r"C:\Users\Usuario\Desktop\frankweb\styles.css",
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
        print(f"Successfully repaired {file_path}")
        with open(file_path, 'wb') as f:
            f.write(data)
    else:
        print(f"No patterns found in {file_path}")

print("V28 Repair Task Complete.")
