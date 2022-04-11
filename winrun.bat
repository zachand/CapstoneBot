@echo off
call npm install
call pm2 start ./CapstoneBot.js
echo "Capstone bot is running, press enter to shut it down."
pause >nul
call pm2 stop ./CapstoneBot.js
