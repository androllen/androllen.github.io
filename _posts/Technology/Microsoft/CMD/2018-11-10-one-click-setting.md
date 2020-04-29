---
title: 一键设置系统环境变量脚本
date: 2018-11-10 23:15:39  
tags: CMD 
---

## 系统命令

setx /？

## 系统用法

``` bash
# /M 表示设置到系统变量，取消则默认设置到当前用户的变量中
setx JAVA_HOME "D:\Program Files\Java\jdk1.8.0_40" /M
# 追加到系统Path变量：
setx Path "%Path%;%JAVA_HOME%/bin" /M
# 设置ClassPath
setx ClassPath ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar" /M
```

``` bat
@echo on
set add_path = ""
echo Java环境变量设置
set java_home=D:\Program Files\Java\jdk1.8.0_40
setx JAVA_HOME "%java_home%" /M
setx ClassPath ".;%java_home%\lib\dt.jar;%java_home%\lib\tools.jar" /M
set add_path=%add_path%;%java_home%\bin

echo Maven环境变量设置
set maven_home=D:\Program Files\apache-maven-3.5.2
setx Maven_HOME "%maven_home%" /M
set add_path=%add_path%;%maven_home%\bin

echo 设置Path
setx Path "%Path%%add_path%" /M
pause
```

``` bat
@echo off
set /P NVM_PATH="D:\Program Files\nvm-noinstall\nvm.exe"
setx /M NVM_HOME "%NVM_PATH%"
setx /M NVM_SYMLINK "D:\Program Files\nodejs"
setx /M PATH "%PATH%;%NVM_HOME%;%NVM_SYMLINK%"

if exist "%SYSTEMDRIVE%\Program Files (x86)\" (
set SYS_ARCH=64
) else (
set SYS_ARCH=32
)
(echo root: %NVM_HOME% && echo path: %NVM_SYMLINK% && echo arch: %SYS_ARCH% && echo proxy: none) > %NVM_HOME%\settings.txt

notepad %NVM_HOME%\settings.txt
@echo on
```
