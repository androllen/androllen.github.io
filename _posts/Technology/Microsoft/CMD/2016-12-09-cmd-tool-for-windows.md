---
title: cmd tool for windows  
date: 2016-12-09 15:07:19  
tags: CMD  
---

``` bash
C:\Users\Androllen>d:  

D:\>cd "\Program Files (x86)\Visual Studio 2015\Git\Win10 UWP\FFmpegInterop"  
> 中间有空格的要加双引号  
D:\Program Files (x86)\Visual Studio 2015\Git\Win10 UWP\FFmpegInterop>  
<!-- more -->
D:\FFmpegInterop\ffmpeg>cd \FFmpegInterop
> 从本层文件夹跳到上层
D:\FFmpegInterop>  

D:\Program Files (x86)\Nuget>cd \Program Files (x86)  
D:\Program Files (x86)>  
D:\Program Files (x86)>cd "Visual Studio 2015\Git\Win10 UWP\DemoControl\CCUWPToolkit"  
D:\Program Files (x86)\Visual Studio 2015\Git\Win10 UWP\DemoControl\CCUWPToolkit>  

从本层目录跳到上层目录必须加 \  
从本层目录跳到下层目录不能加 \  
```

| cmd 命令行               | explorer 图形可视化界面           | notepad 文本 | calc 计算器 |
| ------------------------ | --------------------------------- | ------------ | ----------- |
| ls or dir 查看当前文件夹 | explorer . 打开当前目录           |
| md 在当前文件夹创建      | explorer .. 打开上级目录          |
| DEL 删除至少一个文件     | explorer dirname 打开指定任意目录 |

获取hash值 打开PowerShell命令校验文件  
PS D:\Desktop> get-filehash D:\Desktop\Test.md -Algorithm SHA1
获取hash值 打开cmd命令校验文件  
D:\Desktop> certutil -hashfile D:\Desktop\Test.md md5  
