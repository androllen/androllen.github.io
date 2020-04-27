---
title: UEFI 安装 Win10 & Ubuntu
date: 2020-03-23 12:57:49  
tags: Win10 Ubuntu
author: androllen 
---

### Windows 前言
之前安装Win10操作系统都没有考虑到将U盘格式化为NTFS，将硬盘设置GPT格式，导致无法安装成功  
由于传统安装使用软碟通 UltraISO 安装 Windows 操作系统一般都在4GB一下，安装在 FAT32 文件格式下，从2015年之后的新电脑都支持 UEFI 快速安装，极大的提升了开机时间。  

### Windows
1. 下载 Windows 10 iso 镜像文件 [下载地址](https://msdn.itellyou.cn/)
2. 写镜像文件到USB启动盘
   - 下载 Rufus [下载地址](https://rufus.ie/)
   - 加载镜像文件  
      ![](/assets/posts/20200323132047.png)  

    分区类型GPT：支持UEFI快速启动安装  
    文件系统NTFS：支持大于4GB大文件，写入U盘的文件格式  
   - 写入镜像文件  
      ![](/assets/posts/20200323135331.png)

3. 两种启动方法  
   - 正常启动的Windows系统下按住 Shift，点击重启键  
      ![](/assets/posts/20200323140635.png)  

     > Windows 10 将会在重启后进入 NRE 环境，在 RE 环境中选择使用可移动存储设备启动即可使用 U 盘启动
   - 传统启动下按 F12 进入BIOS  
      ![](/assets/posts/20200323140409.png)  
     > 在使用UEFI启动前，我们的硬盘分区表必须是GPT格式。 

   
    

4. 安装系统
   - 简体中文
   - Windows 10 专业版
   - 自定义仅安装Windows 高级
   - 选择 GPT 分区的驱动器  
      - 重新分区,自动分区后就是GPT格式
      - 在写入镜像时设置分区类型GPT格式
      - 安装期间将MBR 磁盘转换为 GPT 磁盘
        - 按下 Shift + F10 启动命令提示符
        - diskpart
        - DISKPART> list disk
           ```
           磁盘 ###  状态           大小     可用     Dyn  Gpt
           --------  -------------  -------  -------  ---  ---
           磁盘 0    联机              111 GB  2048 KB        *
           磁盘 1    联机              465 GB      0 B
           磁盘 2    联机                8 GB  1024 KB
           磁盘 3    联机             7388 MB      0 B
           ```
        - DISKPART> select disk 0
        - DISKPART> clean 
           ```
           clean 命令会清除当前选择磁盘上的所有内容
           ``` 
        - DISKPART> convert gpt
        - DISKPART> exit
   - 后续步骤根据提示完成


### Ubuntu 前言
公司的产品是由 Django for Python 开发，如果要使用我们的系统，这个时候就需要部署 Ubuntu Server 服务器  
- 刻盘(同上)  
- 安装步骤这里略过请自行 Google  
下面的步骤是安装完后需要设置的。

### Ubuntu

- 安装网络设置

  ``` bash
  ifconfig -a
  cd /etc/netplan
  sudo vim 50-cloud-init.yaml

  network:
    version: 2
    ethernets:
      enp0s25:
        dhcp4: true
        
  sudo netplan apply
  ```


- 安装 openssh
sudo apt-get install openssh-server

- 安装阿里源
  如果安装系统的时候，没有设置源请安装下面的步骤操作，已设置请忽略
  ``` bash
  # 使用 putty 远程连接自行 Google
  cd /etc/apt
  cp /sources.list  sources.list.back
  
  deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse  
  deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
  ```

- 更新  
sudo apt-get update

- 安装 docker  
sudo apt-get install docker.io docker-compose

- 从 cats 远程服务器迁移数据到新系统  
sudo rsync -av cats@192.168.0.100:/home/cats/env /home/cats

- 磁盘空间大小  
df -hl
