@echo off
echo ========================================
echo   BLOOMS ACADEMY - INSTANT DEPLOYMENT
echo ========================================
echo.
echo This will deploy your website and give you a hosted link!
echo.
pause

echo Installing Vercel CLI...
call npm install -g vercel

echo.
echo Deploying to Vercel...
echo.
cd /d "%~dp0"
call vercel --yes

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your hosted link is shown above!
echo Copy and share it with anyone.
echo.
pause
