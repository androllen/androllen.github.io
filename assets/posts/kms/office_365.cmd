@ECHO OFF&PUSHD %~DP0

setlocal EnableDelayedExpansion&color 2e & cd /d "%~dp0"
title Office365  Retail转换VL版 by androllen

%1 %2
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :runas","","runas",1)(window.close)&goto :eof
:runas

if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"

if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"


for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

cscript ospp.vbs /unpkey:WFG99 >nul
cscript ospp.vbs /unpkey:DRTFM >nul
cscript ospp.vbs /unpkey:BTDRB >nul
cscript ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 >nul

set KMS_Sev=kms.03k.org

cscript ospp.vbs /sethst:%KMS_Sev% >nul
cscript ospp.vbs /act

echo.
echo 转化完成，按任意键退出！
pause >nul
exit