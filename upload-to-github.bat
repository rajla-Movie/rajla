@echo off
echo ========================================
echo GitHub Upload Script for gsmovies
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating commit...
git commit -m "Initial commit - Movie streaming website"

echo.
echo ========================================
echo Next Steps:
echo ========================================
echo 1. Go to https://github.com/new
echo 2. Create a new repository named "gsmovies"
echo 3. Make it PUBLIC
echo 4. DO NOT initialize with README
echo 5. Copy the repository URL
echo 6. Run these commands (replace YOUR_USERNAME):
echo.
echo    git branch -M main
echo    git remote add origin https://github.com/YOUR_USERNAME/gsmovies.git
echo    git push -u origin main
echo.
echo 7. Go to Settings ^> Pages and enable GitHub Pages
echo.
pause

