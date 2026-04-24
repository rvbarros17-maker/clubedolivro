@echo off
echo.
echo  Clube Leitura — Deploy
echo ========================
set /p msg=Mensagem do commit (ou Enter para "update"): 
if "%msg%"=="" set msg=update
git add .
git commit -m "%msg%"
git push
echo.
echo  Enviado! Vercel vai atualizar em instantes.
echo  https://app.clubeleitura.com.br
echo.
pause
