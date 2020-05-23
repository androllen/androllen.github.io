---
title: 如何在MacOS将macOS Sierra.app保存为dmg文件
date: 2016-11-08 23:27:53  
tags: MacOS   
categories: OS  
---
## 科普  

dmg 在MAC系统上的一个镜象文件  

[这是一篇如何从apple 官网下载的macOS 系统保存为dmg镜像文件](http://www.macx.cn/thread-2169354-1-1.html)  

## 准备  

  Macbook Pro 一台  
  8G U盘一个  
  10.11之后的新版本磁盘管理工具  
<!--more-->
## 开始

1. 从App Store下载 macOS 安装程序，下载完成，会在 应用程序（/Applications）目录下找到类似 安装 macOS Sierra.app（英文系统 Install macOS Sierra.app）  
1. 在桌面创建一个文件夹，命名为：macOS Sierra 10.12.1
1. 用 Finder 将 应用程序 文件夹里的 安装 macOS Sierra.app 移动（拖拽同时按住Command键）到 macOS Sierra 10.12.1 文件夹里（从应用程序移动文件需要输入登录密码）  
1. 去掉 安装 两个汉字（需要输入登录密码）  
1. 打开磁盘工具，菜单：文件 -> 新建镜像 -> 来自文件夹的镜像...，打开桌面上的 macOS Sierra10.12.1 文件夹，存储为名称macOS.dmg、位置桌面、映像格式读/写，点“存储”按钮。此操作目的是创建一个适合大小的dmg文件  
1. 双击打开桌面创建的macOS.dmg，出现 macOS Sierra 10.12.1 卷，在终端里输入：  

    ``` bash
    localhost:~ androllen$ sudo /Users/androllen/Desktop/macOS\ Sierra\ 10.12.1/macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/macOS\ Sierra\ 10.12.1 --applicationpath /Users/androllen/Desktop/macOS\ Sierra\ 10.12.1/macOS\ Sierra.app --nointeraction

    WARNING: Improper use of the sudo command could lead to data loss  
    or the deletion of important system files. Please double-check your  
    typing when using sudo. Type "man sudo" for more information.  

    To proceed, enter your password, or type Ctrl-C to abort.  

    Password:  
    Erasing Disk: 0%... 10%... 20%... 30%...100%...  
    Copying installer files to disk...  
    Copy complete.  
    Making disk bootable...  
    Copying boot files...  
    Copy complete.  
    Done.  
    ```

1. 创建成功，桌面上macOS.dmg的镜像卷标 macOS Sierra 10.12.1 会被改为 Install macOS Sierra。  

    ``` bash
    注1：其中所有的文件路径都可以通过拖入图标的方式获得，不必手动输入。  
    注2：终端里，所有文件和目录中空格会被“\空格”代替。
    ```

1. 推出刚刚创建的 Install macOS Sierra 卷。删除桌面上的 macOS Sierra 10.12.1 文件夹。  
1. 打开磁盘工具，菜单：镜像 -> 转换...，在出现的窗口里选择桌面的macOS.dmg，存储为：macOS Sierra 10.12.1.dmg、位置桌面、映像格式压缩，点“存储”按钮。转换成功后删除桌面上的macOS.dmg。  
1. macOS Sierra 10.12.1.dmg 是我们要的最终文件  
1. 打开磁盘工具，菜单：映像 - 扫描要恢复的映像...，选择macOS Sierra 10.12.1.dmg ,点“打开”，可能会要求输入登录密码，完成扫描  

## U盘安装

1. 插入U盘，打开磁盘工具，选择U盘（不是卷），点抹掉，U盘中的数据会被全部清除，并被重新创建为GUID分区格式，分区为Mac OS 扩展（日志式）  
1. 选择U盘的卷，菜单：编辑 - 恢复，点映像按钮，选择我们前面创建的dmg，然后点恢复  
1. 恢复过程花费的时间跟U盘的写入速度有关，可能会比较慢，完成后，U盘就是一个OSX安装盘了  
1. 连接U盘，启动（或重启）电脑时，按住Option键，会出现引导选项，U盘被正确识别出，进入就可以使用  
1. 如果安装过程出现这个应用程序副本不能验证，在菜单中选择终端程序，用date命令更改当前日期为2015年之前  

```sh
$ date 062614102014.30  
06是月，26是日，14是时，10是分，2014是年，30是秒
```

## 应用程序安装  

1. 将 macOS Sierra 10.12.1.dmg 文件复制到对方的Mac系统上
1. 双击打开 macOS Sierra 10.12.1.dmg 文件 拖动 macOS Sierra.app 文件到应用程序（/Applications）目录，然后推出 Install macOS Sierra 卷  
1. 双击 应用程序（/Applications）目录的 macOS Sierra.app 进入安装向导
1. 如果出现应用程序副本不受信任，需要在系统偏好设置的安全与隐私设置，通用下面选中允许从以下位置下载的应用的“任何来源”。全新Sierra 10.12以后的系统需要执行一条命令才能看见这个选项  

> $ sudo spctl --master-disable
