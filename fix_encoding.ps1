
# Script de Reparación de Codificación - V26
$mapping = @{
    "ðŸš€" = "🚀"
    "ðŸ“ˆ" = "📈"
    "ðŸ“Š" = "📊"
    "ðŸ”¥" = "🔥"
    "ðŸ›¡ï¸" = "🛡️"
    "âœ…" = "✅"
    "â„¹ï¸" = "ℹ️"
    "â„¹" = "ℹ️"
    "âœ“" = "✓"
    "âœ–" = "✖"
    "Ã¡" = "á"
    "Ã©" = "é"
    "Ã­" = "í"
    "Ã³" = "ó"
    "Ãº" = "ú"
    "Ã±" = "ñ"
    "Ãº" = "ú"
    "Ã¡" = "á"
    "Ãš" = "Ú"
    "â— " = "●"
    "ðŸ”´" = "🔴"
    "ðŸ’³" = "💳"
    "ðŸ“±" = "📱"
    "ðŸ“" = "📊"
    "ðŸ“•" = "📖"
    "ðŸ“§" = "📧"
    "âœ‰" = "✉"
    "âœ±" = "✱"
    "âœ–" = "✖"
    "Ã" = "í" # Cuidado con este
}

$files = @(
    "C:\Users\Usuario\Desktop\frankweb\index.html",
    "C:\Users\Usuario\Desktop\frankweb\i18n.js"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Procesando $file..."
        $content = [System.IO.File]::ReadAllText($file)
        
        foreach ($key in $mapping.Keys) {
            $content = $content.Replace($key, $mapping[$key])
        }
        
        # Guardar en UTF-8 sin BOM
        $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($file, $content, $utf8NoBOM)
        Write-Host "Reparado: $file"
    }
}
