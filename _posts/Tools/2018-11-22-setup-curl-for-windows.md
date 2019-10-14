---
title: 安装Curl for Windows  
date: 2016-12-02 16:44:41  
categories: Curl  
tags: Cmd  
---

大家都在Macbook Pro 电脑上用过自带的 Curl 命令，他可以下载一些文件  
如果想在Windows 上 使用那我们前往[ Curl 官网下载页](https://curl.haxx.se/download.html)

1. 解压到指定的文件夹  
1. 打开Cmd命令输入    
> curl --help  #如果成功会显示帮助信息
1. 添加到环境变量  
> CURL_HOME D:\Program Files (x86)\Curl  
> PATH %CURL_HOME%  
1. 打开Cmd命令输入  
> curl --help  
1. 如果下载json字符串  
> curl http://r.qzone.qq.com/cgi-bin/user/cgi_personal_card?uin=582111807  
1. 如果下载zip包  
> curl -o 1.zip --compressed https://hello_curl.zip   
> 1.zip被存放到当前目录，如果发生重定向的话，可使用里面的地址  