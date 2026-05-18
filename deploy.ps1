# =============================================
#   engineraydin.com.tr - Deploy Script
#   Antigravity -> GitHub -> Cloudflare Pages
# =============================================

$repoPath = "C:\Users\alier\Documents\GitHub\engineraydin"
Set-Location $repoPath

Write-Host ""
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "   engineraydin.com.tr Deploy Araci   " -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

# Degisiklik var mi kontrol et
$status = git status --porcelain
if (-not $status) {
    Write-Host "Gonderilebilecek degisiklik yok." -ForegroundColor Yellow
    Write-Host "(Calisma dizini temiz)" -ForegroundColor Gray
    Write-Host ""
    exit 0
}

# Degisiklikleri listele
Write-Host "Degisen dosyalar:" -ForegroundColor White
git status --short
Write-Host ""

# Commit mesaji al
$commitMsg = Read-Host "Commit mesaji girin (Enter = otomatik tarih)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $date = Get-Date -Format "dd.MM.yyyy HH:mm"
    $commitMsg = "Site guncellendi - $date"
}

Write-Host ""
Write-Host "Deploy basliyor..." -ForegroundColor Green
Write-Host ""

# Git islemleri
Write-Host "[1/3] Dosyalar ekleniyor..." -ForegroundColor Gray
git add .

Write-Host "[2/3] Commit olusturuluyor..." -ForegroundColor Gray
git commit -m $commitMsg

Write-Host "[3/3] GitHub'a gonderiliyor..." -ForegroundColor Gray
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=======================================" -ForegroundColor Green
    Write-Host "   BASARIYLA GONDERILDI!              " -ForegroundColor Green
    Write-Host "=======================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Cloudflare Pages deploy ediyor..." -ForegroundColor Cyan
    Write-Host "~1-2 dakika icinde canliya gecer." -ForegroundColor Gray
    Write-Host ""
    $openDash = Read-Host "Cloudflare dashboard acilsin mi? (e/h)"
    if ($openDash -eq "e" -or $openDash -eq "E") {
        Start-Process "https://dash.cloudflare.com/c553d7b7f504d2d13eaa04ef64a9c527/pages/view/engineraydinweb"
    }
} else {
    Write-Host ""
    Write-Host "HATA! Push basarisiz oldu." -ForegroundColor Red
    Write-Host "Antigravity'e hatay bildirin." -ForegroundColor Yellow
}

Write-Host ""
