@echo off
echo Building Fair Wreck App for Digital Ocean Deployment...

echo.
echo Step 1: Building React frontend...
cd web
call npm install
call npm run build
cd ..

echo.
echo Step 2: Copying React build to Flask static directory...
if exist "form\web" rmdir /s /q "form\web"
xcopy "web\dist" "form\web\dist" /E /I /Y

echo.
echo Step 3: Installing Python dependencies...
cd form
pip install -r requirements.txt
cd ..

echo.
echo Build complete! 
echo.
echo To run locally:
echo   cd form
echo   python app.py
echo.
echo To deploy to Digital Ocean:
echo   1. Upload the entire 'form' directory
echo   2. Run: pip install -r requirements.txt
echo   3. Set environment variables (EMAIL_USER, EMAIL_PASS, etc.)
echo   4. Run: python app.py
echo.
pause 