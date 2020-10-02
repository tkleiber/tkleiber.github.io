@echo off
rem call FormsAPI Master only for binary oracle forms and reports modules
if "%~x1"==".fmb" goto CheckFormsAPIMaster
if "%~x1"==".mmb" goto CheckFormsAPIMaster
if "%~x1"==".olb" goto CheckFormsAPIMaster
if "%~x1"==".pll" goto CheckFormsAPIMaster
if "%~x1"==".rdf" goto CheckFormsAPIMaster
goto NoExternalDiff

:CheckFormsAPIMaster
rem check if the installation of FormsAPI Master exists
if exist "C:/Oracle/FormsAPIMaster40b450/FapiMaster.exe" goto FormsAPIMaster
goto NoExternalDiff

:FormsAPIMaster
rem call FormsAPI Master
"C:/Oracle/FormsAPIMaster40b450/FapiMaster.exe" /COMPARE /MODULE1=%1 /MODULE2=%2
goto end

:NoExternalDiff
rem inform the user that no other external diff tools are defined
C:\Windows\System32\msg.exe * "No external diff tool found for this file extension!"

:end