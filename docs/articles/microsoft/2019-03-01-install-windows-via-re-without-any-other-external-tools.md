---
title: Windows 10 Install
date: 2019-03-01 13:26:32
outline: deep
---

## U盘安装

1. 通过`Rufus`软件，U盘刻录原版镜像文件后
2. 按`F2`或者`F12`进入`BIOS`，设置首选项启动项为`U盘`启动，按`F10`保存，重新启动系统
3. 进入加载系统界面，等待`100%`，结束后拔掉`U盘`，自动重新启动系统
4. 等待`Windows`操作系统安装

## 光盘安装

1. 使用 `软碟通` `UltraISO_9.6` [刻录](https://cn.ultraiso.net/jiaocheng/ke-lu-guang-pan.html)安装，
2. 按`F2`或者`F12`进入`BIOS`,设置首选项启动项为`光盘`启动，按`F10`保存，重新启动系统
3. 进入加载系统界面，等待`100%`,结束后拔掉`光盘`，自动重新启动系统
4. 按`F2`或者`F12`进入`BIOS`,设置首选项启动项为`硬盘`启动，按`F10`保存，重新启动系统
5. 等待`Windows`操作系统安装

## PE安装

通过 `Rufus` 软件，U盘刻录大白菜PE，进入 `BIOS` 操作系统修改启动项，进入后，点击提前放至在 `D` 盘根目录下的操作系统，双击进行安装


## RE 安装

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


## 安装问题

问:Windows 10 无法在驱动器0的分区1上安装

答:通过命令方法，转换磁盘格式

　　1、在当前安装界面按住Shift+F10调出命令提示符窗口；

　　2、输入“diskpart”，按回车执行，进入DISKPART命令模式；

　　3、输入“list disk”回车，列出当前磁盘信息；

　　4、输入“select disk 0”回车，选中磁盘0；

　　5、输入“clean”，删除磁盘分区；

　　6、输入“convert mbr”，回车，将磁盘转换为MBR，或者，输入“convert gpt”将磁盘转换为GPT；

　　7、输入“exit”，回车，退出DISKPART命令模式，再次输入“exit”，回车，退出命令提示符，返回安装界面继续安装系统。
    其实还可以直接格式化当前