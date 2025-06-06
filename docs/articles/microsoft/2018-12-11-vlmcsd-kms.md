---
title: 搭建kms服务器来激活windows(vlmcsd)
date: 2018-12-11 18:26:32
outline: deep
---


## 概述

之前一直不知道怎么去完美的激活windows系统，直到知道了这个，网上的激活软件真的我靠激活后可能会有一大堆垃圾软件在后台下载，算了不说了windows就是这个德行，远离windows保平安。  
话不多说，我们搭建一个windows激活服务来激活虚拟机中的windows7 所以首先要有一台windows7虚拟机，记住该服务允许激活批量授权的windows系统包括批量授权的office，具体的你测试，终于可以在给别人装完系统不漫天百度找激活工具了.

|部署工具|下载地址|
|---|----|
|Deploy KMS Activation|[软件地址](https://docs.microsoft.com/zh-cn/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn502531(v=ws.11))|
|vlmcsd |[软件地址](https://github.com/Wind4/vlmcsd)  

### 部署  

首先下载 `wget https://github.com/Wind4/vlmcsd/releases/download/svn1111/binaries.tar.gz`  
解压 `tar -zxvf binaries.tar.gz`  
之后进入这个文件夹  `cd binaries/Linux/intel/static/`  
反正就是选择对应的系统平台啦  
之后运行下面这个文件 `./vlmcsd-x64-musl-static`  
之后测试一下是不是搭建成功  
首先把下载来的压缩包放到windows下  
使用管理员权限打开cmd  
之后进入目录  `cd \binaries\Windows\intel`  
执行 `C:\binaries\Windows\intel>vlmcs-Windows-x64.exe -v -l 3 192.168.1.100`

### Request Parameters

``` bash
Protocol version                : 6.0
Client is a virtual machine     : No
Licensing status                : 2 (OOB grace)
Remaining time (0 = forever)    : 43200 minutes
Application ID                  : 55c92734-d682-4d71-983e-d6ec3f16059f (Windows)

SKU ID (aka Activation ID)      : 2d5a5a60-3040-48bf-beb0-fcd770c20ce0 (Windows
10 Enterprise 2016 LTSB)
KMS ID (aka KMS counted ID)     : 969fe3c0-a3ec-491a-9f25-423605deb365 (Windows
10 2016 (Volume))
Client machine ID               : 8415f1f2-58e4-46c9-9359-39cd2bef2739
Previous client machine ID      : 00000000-0000-0000-0000-000000000000
Client request timestamp (UTC)  : 2017-10-19 09:14:03
Workstation name                : hack-me.htc.cn
N count policy (minimum clients): 25

Connecting to 192.168.1.100:1688 ... successful

Performing RPC bind ...
... NDR64 ... BTFN ... NDR32 ... successful
Sending activation request (KMS V6) 1 of 1
```

### Response from KMS server

``` bash
Size of KMS Response            : 260 (0x104)
Protocol version                : 6.0
KMS host extended PID           : 03612-00206-492-666887-03-5130-14393.0000-2482
016
KMS host Hardware ID            : 3A1C049600B60076
Client machine ID               : 8415f1f2-58e4-46c9-9359-39cd2bef2739
Client request timestamp (UTC)  : 2017-10-19 09:14:03
KMS host current active clients : 50
Renewal interval policy         : 10080
Activation interval policy      : 120
```

表示搭建成功 `C:\binaries\Windows\intel>`

激活windows  
使用管理员权限打开cmd  
在要激活的windows中输入 `cd /d "%SystemRoot%\system32"`  
之后设置秘钥管理服务器 `slmgr /skms 192.168.1.100`  
激活 `slmgr /ato`  
查看激活时间 `slmgr /xpr`
[如果认为不安全可以自建KMS激活服务器：CentOS安装vlmcsd搭建](https://github.com/Wind4/vlmcsd)
