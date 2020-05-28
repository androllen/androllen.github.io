---
title: Windows RE 环境下安装 WIN10
date: 2019-03-01 13:26:32
tags: U盘 镜像 系统
---


### 准备

1. Windows 10 的安装文件  `cn_windows_10_consumer_editions_version_1809_updated_jan_2019_x64_dvd_34b4d4fb.iso`
2. 现有系统是 Windows 10 操作系统
   - 解压 iso 文件  

      将 iso 文件解压到一个文件夹中，例如，我解压到 D:\Windows10 文件夹中。

   - 重启进入 RE 环境  

      现在，在开始菜单中点击电源按钮，这时会弹出电源选择菜单。注意：`请按住 Shift 键不放，然后点击重启按钮`，重启按钮点完之后才能松开 Shift 键。  

   - 进入 RE 环境此时会重启

      Windows RE 指的是 [Windows Recovery Environment 恢复环境](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference)

      点击继续

   - 进入 RE 环境的命令提示符
  
      依次进入 疑难解答 -> 高级选项 -> 命令提示符 -> 选择自己的账号 -> 输入自己的密码  
      注意，在选择命令提示符之后，计算机还会再重启一次，所以需要等一会儿才会到选择账号的界面。

   - 在命令提示符中安装程序

      ```sh
      # 找到解压的系统目录 D:\Windows10
      D:
      cd Windows10
      setup.exe
      ```

   - 安装操作系统

      现在，你应该看到了 `Windows 10` 安装界面  
      然后跳过产品密钥的输入  
      然后可以使用 `自定义` 安装方式  
      还可以格式化所有分区，删除所有磁盘  
