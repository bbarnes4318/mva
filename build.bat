@echo off
echo Building React frontend...
cd web
npm install
npm run build
cd ..
echo Starting server...
node server.js 