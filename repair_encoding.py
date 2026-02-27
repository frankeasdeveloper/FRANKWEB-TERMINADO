
import os

# Mapeo integral de secuencias mojibake a caracteres originales
mapping = {
    'ðŸš€': '🚀',
    'ðŸ“ˆ': '📈',
    'ðŸ“Š': '📊',
    'ðŸ”¥': '🔥',
    'ðŸ›¡ï¸': '🛡️',
    'âœ…': '✅',
    'â„¹ï¸ ': 'ℹ️',
    'â„¹': 'ℹ️',
    'âœ“': '✓',
    'âœ–': '✖',
    'âœ•': '✕',
    'âœ”': '✔',
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã‘': 'Ñ',
    'Ãš': 'Ú',
    'â— ': '●',
    'ðŸ”´': '🔴',
    'ðŸ’³': '💳',
    'ðŸ“±': '📱',
    'ðŸ“': '📊',
    'ðŸ“•': '📖',
    'ðŸ“§': '📧',
    'âœ‰': '✉',
    'âœ±': '✱',
    'Ã ': 'à',
    'Ã²': 'ò',
    'Ã¹': 'ù',
    'Ã¬': 'ì',
    'Ã¼': 'ü',
    'âž¡ï¸ ': '➡️',
    'âœ ï¸ ': '✍️',
    'ðŸ’°': '💰',
    'ðŸ’¥': '💥',
    'ðŸ’¡': '💡',
    'ðŸ’Ž': '💎',
    'ðŸ” ': '🔍',
    'ðŸŽ¯': '🎯',
    'ðŸ“†': '📅',
    'ðŸ”²': '🆔',
    'âœˆï¸ ': '✈️',
    'ðŸŒ ': '🌍',
    'Ã€': 'À',
    'Ãˆ': 'È',
    'ÃŒ': 'Ì',
    'Ã’': 'Ò',
    'Ã™': 'Ù',
    'ðŸ’¬': '💬',
    'ðŸ“©': '📩',
    'ðŸ“¥': '📥',
    'ðŸš©': '🚩',
    'âš ï¸ ': '⚠️',
    'âœ¸': '✦',
    'âž¤': '➤',
    'â€¢': '•',
    'â€”': '—',
    'â€“': '–',
    'â€˜': '‘',
    'â€™': '’',
    'â€œ': '“',
    'â€ ': '”',
}

files = [
    r"C:\Users\Usuario\Desktop\frankweb\index.html",
    r"C:\Users\Usuario\Desktop\frankweb\i18n.js"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'rb') as f:
        data = f.read()
    
    try:
        content = data.decode('utf-8')
    except UnicodeDecodeError:
        content = data.decode('latin-1')

    original_content = content
    for mojibake, real in mapping.items():
        content = content.replace(mojibake, real)
    
    if content != original_content:
        print(f"Repaired: {file_path}")
        with open(file_path, 'w', encoding='utf-8', newline='') as f:
            f.write(content)

print("Repair completed.")
