# Blooms Academy - Instant Deployment Script
# Run this to get your hosted link!

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  BLOOMS ACADEMY - INSTANT DEPLOYMENT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Install Vercel CLI
Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
npm install -g vercel

Write-Host ""
Write-Host "Deploying your website..." -ForegroundColor Yellow
Write-Host ""

# Deploy
vercel --yes

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your hosted link is shown above!" -ForegroundColor Green
Write-Host "Copy and share it with anyone." -ForegroundColor Green
Write-Host ""

Read-Host "Press Enter to exit"
