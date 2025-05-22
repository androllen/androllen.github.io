---
title: Frp and Remote
date: 2020-05-17 23:10:49  
tags: frp remote
outline: deep
---

### 前言

因为出差或者要帮别人改代码，需要你辅助对方，可以使用 `Frp` 内网穿透来远程对方的电脑，效果特别爽，不信可以试试~

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
    tar -xzvf frp_0.33.0_linux_amd64.tar.gz

    ```

- 服务端配置  
  使用默认配置文件 frps.ini

- 服务端启动  
  - Linux  
  `./frps -c ./frps.ini`

    后台运行 nohup ./frps -c frps.ini >/dev/null 2>&1 &

  - Windows  
  `c:\frp\frps.exe -c c:\frp\frps.ini`

- 客户端配置
  - Windows

    ```sh
    # 保存为 frpc.ini
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

    - 第一种方式

      ```sh
      # 保存为 frpc.bat 文件,双击批处理启动
      # 如何一直监听？
      # 先启动远程服务，在启动客户端服务，关闭远程服务后，本地客户端服务就会不停的监听远程服务是否打开
      # "D:\Program Files\frp\frpc.exe" -c "D:\Program Files\frp\frpc.ini"
      cmd /c " "D:\Program Files\frp\frpc.exe" -c "D:\Program Files\frp\frpc.ini" "
      ```

    - 第二种方式

      ```sh
      # 保存为 frpc.vbs 文件
      set ws=WScript.CreateObject("WScript.Shell")
      ws.Run "d:\frp\frpc.exe -c d:\frp\frpc.ini",0
      ```

      `WIN+R` 运行 `Shell:startup` 把 `frpc.vbs` 脚本放进去即可

    - 第三种方式

      用 [winsw](https://github.com/winsw/winsw/releases) 将 frp 注册为系统服务  
      `winsw.exe` 放到frp相同的目录里

      ```sh
      # 保存为 winsw.xml
      <service>
          <id>frp</id>
          <name>frp这里是服务的名称</name>
          <description>这里是服务的介绍，随便写</description>
          <executable>frpc</executable>
          <arguments>-c frpc.ini</arguments>
          <onfailure action="restart" delay="60 sec"/>
          <onfailure action="restart" delay="120 sec"/>
          <logmode>reset</logmode>
      </service>
      ```

      以管理员权限打开一个命令窗口，cd到frp所在目录，执行：

      ```sh
      # winsw 是执行程序
      winsw install
      winsw start
      ```

      卸载服务

      ```sh
      winsw stop
      winsw uninstall
      ```

  - Linux  
    - 添加启动服务

        vim /etc/frp/frp_0.33.0_linux_amd64/frps.service

        ```sh
        # 保存为 frps.service
        [Unit]
        Description=Frp Server Service
        After=network.target

        [Service]
        Type=simple
        User=nobody
        Restart=on-failure
        RestartSec=5s
        ExecStart=/usr/bin/frps -c /etc/frp/frps.ini

        [Install]
        WantedBy=multi-user.target
        ```

    - 设置开机启动  
    `systemctl enable frps.service`  
    - 关闭开机启动  
    `systemctl disable frps.service`
    - 开启服务  
    `systemctl start frps.service`
    - 查看状态  
    `systemctl status frps.service`

### RDP 客户端  

- 打开 `RDP` 软件  
- 点击右上角 +
- ![input ip](../../assets/posts/20200521000231.jpg)  
- ![username](../../assets/posts/20200521000331.jpg)  
- 点击连接

### 问题

  1. 连不上的可能是你的防火墙关闭或者7000端口没有开放  
     - Windows  
      `netstat -ano|findstr 7000`
     - Linux  
      `netstat -anp|grep 7000`
  1. 客户端批处理文件  
  如果包含路径中包含空格使用以上双引号，如果不包含则不用。
