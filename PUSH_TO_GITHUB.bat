@echo off
echo ========================================
echo Pushing Blooms IAS Academy to GitHub
echo ========================================
echo.

cd /d "%~dp0"

echo Checking git status...
git status

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo Done! Check above for any errors.
echo ========================================
pause
