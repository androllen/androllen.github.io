---
title: Wmic 硬件信息详情
date: 2020-08-27 22:20:32
tags: Windows Management Instrumentation
---


1. 查询`CPU`序列号

    wmic cpu get name,addresswidth,processorid

1. 查询`CPU`信息

    ```sh
    wmic cpu list full
    wmic cpu list brief
    ```

1. 查询`主板`序列号

    wmic baseboard get Manufacturer,Product,Version,SerialNumber

1. 查询`BIOS`版本信息

    ```sh
    wmic bios list brief
    wmic bios list full
    ```

1. 查询`网卡`MAC地址

    ```sh
    wmic nicconfig get macaddress
    getmac
    ```

1. 查询`硬盘`序列号

    wmic diskdrive get serialnumber

1. 查询`内存`

    ```sh
    wmic memorychip get Speed,Manufacturer,PartNumber
    wmic MEMPHYSICAL list brief
    # 查询最大支持内存容量
    wmic MEMPHYSICAL get maxcapacity
    ```

1. 获取磁盘资料

    wmic DISKDRIVE get deviceid,Caption,size,InterfaceType

1. 获取分区资料

    wmic LOGICALDISK get name,Description,filesystem,size,freespace

1. 获取声卡资料

    wmic SOUNDDEV get ProductName

1. 获取屏幕分辨率

    wmic DESKTOPMONITOR where Status='ok' get ScreenHeight,ScreenWidth

1. PROCESS-进程管理

    ```sh
    # 获取进程列表
    wmic process list brief
    # 获取进程路径
    wmic process where name="WeChat.exe" get executablepath
    # 创建新进程
    wmic process call create notepad
    wmic process call create "C:\Program Files\Tencent\QQ\QQ.exe"
    wmic process call create "shutdown.exe -r -f -t 20"
    # 删除指定进程
    wmic process where name="qq.exe" call terminate
    wmic process where processid="2345" delete
    # 删除可疑进程
    wmic process where "name='explorer.exe' and executablepath<>'%SystemDrive%\\windows\\explorer.exe'" delete
    ```

1. USERACCOUNT-用户管理

    ```sh
    # 更改当前用户名
    WMIC USERACCOUNT where "name='%UserName%'" call rename Your-New-UserName
    # 新建用户帮助
    WMIC USERACCOUNT create /?
    ```

1. FSDIR-目录管理

    ```sh
    # 列出c盘下名为test的目录
    wmic FSDIR where "drive='c:' and filename='test'" list
    # 删除c:\good文件夹
    wmic fsdir "c:\\test" call delete
    # 重命名c:\test文件夹为abc
    wmic fsdir "c:\\test" rename "c:\abc"
    wmic fsdir where (name='c:\\test') rename "c:\abc"
    # 复制文件夹
    wmic fsdir where name='d:\\test' call copy "c:\\test"
    ```

1. DATAFILE-文件管理

    ```sh
    # 重命名
    wmic datafile "c:\\test.txt" call rename c:\abc.txt
    ```
