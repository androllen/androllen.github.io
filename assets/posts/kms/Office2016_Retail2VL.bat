@ECHO OFF&PUSHD %~DP0

setlocal EnableDelayedExpansion&color 2e & cd /d "%~dp0"
title Office2016 Retailת��VL��    by - CSDN  ywd1992

%1 %2
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :runas","","runas",1)(window.close)&goto :eof
:runas

if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"

:WH
cls
echo.
echo                         ѡ����Ҫת����Office�汾���
echo.
echo --------------------------------------------------------------------------------                                                         
echo                 1. ���۰� Office Pro Plus 2016 ת��ΪVL��
echo.
echo                 2. ���۰� Office Visio Pro 2016 ת��ΪVL��
echo.
echo                 3. ���۰� Office Project Pro 2016 ת��ΪVL��
echo.
echo. --------------------------------------------------------------------------------
                                                        
set /p tsk="��������Ҫת����Office�汾��š��س���ȷ�ϣ�1-3��: "
if not defined tsk goto:err
if %tsk%==1 goto:1
if %tsk%==2 goto:2
if %tsk%==3 goto:3

:err
goto:WH

:1
cls

echo ��������Office2016���ۼ���...
cscript ospp.vbs /rearm

echo ���ڰ�װ KMS ���֤...
for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo ���ڰ�װ MAK ���֤...
for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo ���ڰ�װ KMS ��Կ...
cscript ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99

goto :e

:2
cls

echo ��������Visio2016���ۼ���...
cscript ospp.vbs /rearm

echo ���ڰ�װ KMS ���֤...
for /f %%x in ('dir /b ..\root\Licenses16\visio???vl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo ���ڰ�װ MAK ���֤...
for /f %%x in ('dir /b ..\root\Licenses16\visio???vl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo ���ڰ�װ KMS ��Կ...
cscript ospp.vbs /inpkey:PD3PC-RHNGV-FXJ29-8JK7D-RJRJK

goto :e

:3
cls

echo ��������Project2016���ۼ���...
cscript ospp.vbs /rearm

echo ���ڰ�װ KMS ���֤...
for /f %%x in ('dir /b ..\root\Licenses16\project???vl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo ���ڰ�װ MAK ���֤...
for /f %%x in ('dir /b ..\root\Licenses16\project???vl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo ���ڰ�װ KMS ��Կ...
cscript ospp.vbs /inpkey:YG9NW-3K39V-2T3HJ-93F3Q-G83KT

goto :e

:e
echo.
echo ת����ɣ���������˳���
pause >nul
exit