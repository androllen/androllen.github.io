---
title: UEFI安装Win10
date: 2020-03-23 12:57:49  
tags: win10
author: androllen 
---

### 前言
之前安装Win10操作系统都没有考虑到将U盘格式化为NTFS，将硬盘设置GPT格式，导致无法安装成功  
由于传统安装使用软碟通 UltraISO 安装 Windows 操作系统一般都在4GB一下，安装在 FAT32 文件格式下，从2015年之后的新电脑都支持 UEFI 快速安装，极大的提升了开机时间。  
如果想全新安装Win10，我们要这样做：

![](../assets/20200323140635.png)

### 步骤
1. 下载 Windows 10 iso 镜像文件 [下载地址](https://msdn.itellyou.cn/)
2. 写镜像文件到USB启动盘
   - 下载 Rufus [下载地址](https://rufus.ie/)
   - 加载镜像文件  
      ![](../../assets/20200323132047.png)  

    分区类型GPT：支持UEFI快速启动安装  
    文件系统NTFS：支持大于4GB大文件，写入U盘的文件格式  
   - 写入镜像文件  
      ![](../../assets/20200323135331.png)

3. 两种启动方法  
   - 正常启动的Windows系统下按住 Shift，点击重启键  
    ![](../../assets/20200323140635.png)  

     > Windows 10 将会在重启后进入 NRE 环境，在 RE 环境中选择使用可移动存储设备启动即可使用 U 盘启动
   - 传统启动下按 F12 进入BIOS  
    ![](../../assets/20200323140409.png)  
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


