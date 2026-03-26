# Script para desplegar cambios al VPS del Hotel Cantarranas
# Uso: .\deploy.ps1 "Mensaje del commit"

param (
    [string]$CommitMessage = "Update site"
)

Write-Host "--- 🚀 Iniciando despliegue de Hotel Cantarranas ---" -ForegroundColor Cyan

# 1. Guardar cambios localmente y subir a GitHub
Write-Host "1. Subiendo cambios a GitHub..." -ForegroundColor Yellow
git add .
git commit -m $CommitMessage
git push origin main

# 2. Conectar al VPS y actualizar
Write-Host "2. Actualizando servidor en producción..." -ForegroundColor Yellow
ssh -i deploy_key -o StrictHostKeyChecking=no hcantarranas@5.78.199.41 'cd htdocs/cantarranas.hdimpulsodigital.com && git pull origin main && npm install && pm2 restart hotel-cantarranas'

Write-Host "✅ ¡Despliegue completado! El sitio está actualizado en https://cantarranas.hdimpulsodigital.com/" -ForegroundColor Green
