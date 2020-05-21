---
title: Frp and Remote 内网穿透
date: 2020-05-17 23:10:49  
tags: frp remote
---

### 前言

因为出差或者要帮别人改代码，需要你辅助对方，可以使用 Frp 内网穿透来远程对方的电脑，效果特别爽，不信可以试试~

### 准备

- winscp [下载地址](https://winscp.net/eng/download.php)

- 一个VPS or 国内云服务

- Rdp 协议的微软远程工具 [下载地址](https://www.microsoft.com/store/productId/9NBLGGH30H88)

- [frp 下载地址](https://github.com/fatedier/frp/releases)

### 开始

- 登录到VPS  
  - 使用 winscp 登录到远程服务器 VPS 上，具体操作请看 [登录远程服务器](https://github.com/androllen/WeWSL/blob/master/0x02-WSL/05.WSL_Xshell_Xftp/README.md)

    ```sh
    cd /etc
    sudo mkdir frp
    cd frp/
    sudo wget https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_amd64.tar.gz
    tar zxvf frp_0.33.0_linux_amd64.tar.gz

    ```

  - Windows 服务

- 服务端配置  
  使用默认配置文件 frps.ini

- 服务端启动  
  - Linux  
  `./frps -c ./frps.ini`
  - Windows  
  `c:\frp\frps.exe -c c:\frp\frps.ini`

- 客户端配置
  - Windows

    ```sh
    [common]
    server_addr = Your VPS IP address
    server_port = 7000

    [RDP]
    type = tcp
    local_ip = 127.0.0.1
    local_port = 3389
    remote_port = 7001
    [SSH]
    type = tcp
    local_ip = 192.168.0.2
    local_port = 2232
    remote_port = 7002
    ```

    可以变成一个批处理启动文件

    `cmd /c " "D:\Program Files\frp\frpc.exe" -c ./frpc.ini "`  

    以上内容保存 `frpc.bat` 双击启动

  - Linux  
    - 添加启动服务

        vim /etc/frp/frp_0.33.0_linux_amd64/frps.service

        ```cmd
        [Unit]
        Description=frpc
        After=network.target

        [Service]
        Type=simple
        ExecStart= /etc/frp/frp_0.33.0_linux_amd64/frps -c /etc/frp/frp_0.33.0_linux_amd64/frps.ini

        [Install]
        WantedBy=multi-user.target
        ```

      保存为 frps.service 文件

    - 设置开机启动  
    `systemctl enable frps.service`  
    - 关闭开机启动  
    `systemctl disable frps.service`
    - 开启服务  
    `systemctl start frps.service`
    - 查看状态  
    `systemctl status frps.service`
    同样服务端也可以设置

- RDP  
  - 打开 `RDP` 软件  
  - 点击右上角 +
  - ![input ip](../../assets/posts/20200521000231.jpg)  
  - ![username](../../assets/posts/20200521000331.jpg)  
  - 点击连接

- 问题
  1. 连不上的可能是你的防火墙关闭或者7000端口没有开放
     - Windows  
      `netstat -ano|findstr 7000`
     - Linux  
      `netstat -anp|grep 7000`
  2. 客户端批处理文件
  如果包含路径中包含空格使用以上双引号，如果不包含则不用。
