---
title: 基于ffmpeg库的微软开源项目FFmpegInterop for UWP  
date: 2016-12-08 18:48:05  
categories: UWP  
tags: 开源  
---

## FFmpegInterop 简介

FFmpegInterop是一个开源项目，旨在提供一种简单的方法在Windows 10，Windows 8.1和Windows Phone 8.1应用程序中使用FFmpeg播放各种媒体内容。 FFmpegInterop实现了一个MediaStreamSource，它利用FFmpeg来处理媒体，并使用Windows媒体管道进行播放。  

这种方法的优点之一是音频和视频同步由Windows媒体管道处理。您还可以使用Windows内置的音频和视频解码器，允许更好的功耗移动设备。  

FFmpegInterop库托管在Github下，项目地址：[FFmpegInterop库][FFmpegInterop]
<!-- more -->
## 准备工作  

FFmpegInterop 基于[FFmpeg库][FFmpeg]开发的二次开发库 依赖[FFmpeg库][FFmpeg]的lib include 等文件  
那么我们就要对 [FFmpeg库][FFmpeg]进行编译，这里微软的开源项目 [FFmpegInterop库][FFmpegInterop] 提供了很好的帮助  

1. 首先你可以很容易的从git 上克隆出最新的 FFmpeg 版本 存放在本地

    ``` bash
    git clone git://github.com/microsoft/FFmpegInterop.git
    cd FFmpegInterop
    git clone git://source.ffmpeg.org/ffmpeg.git
    ```

2. 下载的时间比较长完成之后你的FFmpegInterop 库文件夹应该是这样的

    ``` bash
    FFmpegInterop\
        ffmpeg\              - 从最新地址获取源码[FFmpeg库][FFmpeg]
        FFmpegInterop\       - FFmpegInterop WinRT 组件
        Samples\             - Media Player applications 实例 in C++, C#, and JavaScript
        Tests\               - FFmpegInterop 单元测试
        BuildFFmpeg.bat      - [关于描述 FFmpeg库 的帮助脚本 ][FFmpeg help script]
        FFmpegConfig.sh      - 含有FFmpeg 配置选项内部脚本
        FFmpegWin8.1.sln     - Microsoft Visual Studio 2013 solution file for Windows 8.1 and Windows Phone 8.1 解决方案
        FFmpegWin10.sln      - Microsoft Visual Studio 2015 solution file for Windows 10 解决方案
        LICENSE
        README.md
    ```

现在你可以按照[how to build FFmpeg for WinRT apps][FFmpeg help script]说明完成设置

## 现在我们开始编译 FFmpeg做准备工作  

1. 安装VS  

> Windows 10 请安装 ​Microsoft Visual Studio 2015
> Windows 8.1 请安装 ​Microsoft Visual Studio 2013

1. 安装 MSYS2  下载地址：[MSYS2 建议安装 msys2-x86_64-20150916.exe](https://sourceforge.net/projects/msys2/files/Base/x86_64/)  
安装目录下启动MSYS2 msys2_shell.cmd or msys2_shell.bat  

> $ pacman -Syu
> 尽量安装到简短的目录下
> 有关 MSYS2 安装使用的更多内容，可参阅 [MSYS2 Wiki][MSYS2]

1. 安装配置 YASM  下载地址：[YASM][YASM]  

``` bash
Source .tar.gz （源代码）
Win32 VS2010 .zip (用于 VS2010+ 和 32 位 Windows)
Win64 VS2010 .zip (用于 VS2010+ 和 64 位 Windows)
***Win32 .exe (32 位 Windows 通用)***
***Win64 .exe (64 位 Windows 通用)***
CygWin32 .exe (用于 CygWin)
DOS .exe (用于纯 DOS 或 DJGPP)
```

下载完成后yasm-1.3.0-win64.exe 改名为 yaml.exe，并放置于 MSYS2 安装目录中。例如，MSYS2 安装在 D:\msys64，则将 yaml.exe 放置到 D:\msys64\usr\bin\ 中。  
4. 安装配置 gas-preprocessor  
gas-preprocessor 是用于编译 FFmpeg 的 perl 预处理脚本。  
gas-preprocessor 下载地址：[https://github.com/FFmpeg/gas-preprocessor](https://github.com/FFmpeg/gas-preprocessor)  
下载 gas-preprocessor.pl 文件后放置于 MSYS2 安装目录中。例如，MSYS2 安装在 D:\msys64，则将 gas-preprocessor.pl 放置到 D:\msys64\usr\bin\ 中。  

## 验证 FFmpeg 编译环境  

进行以上步骤之后，编译 FFmpeg 的环境已经基本准备就绪。我们还需要对环境进行一下验证，以保证环境确实准备完毕能够顺利进行编译。  
> 开始-> Visual Studio 2015 -> VS2015 x86 ARM 兼容工具命令提示符  
启动 `VS2015 x86 ARM 兼容工具命令提示符` 在命令行中用 `cd` 定位到 MSYS2 的安装目录，启动 MSYS2：D:\msys64\msys2_shell.cmd  
在启动的 MSYS2 终端中分别运行一下命令观察各便于工具组件是否被正确找到：  
> $ which cl
> /c/Program Files (x86)/Microsoft Visual Studio 14.0/VC/BIN/x86_ARM/cl
> $ which link
> /c/Program Files (x86)/Microsoft Visual Studio 14.0/VC/BIN/x86_ARM/link
> $ which armasm
> /c/Program Files (x86)/Microsoft Visual Studio 14.0/VC/BIN/x86_ARM/armasm
> $ which yasm
> /usr/bin/yasm
> $ which cpp
> /usr/bin/cpp
> $ which gas-preprocessor.pl
> /usr/bin/gas-preprocessor.pl
如果所有组件均在指定位置被找到，则表示 FFmpeg 编译环境已经准备就绪，可以进入下一步骤编译 FFmpeg。  
如果没有通过 VS 提供的 x86 ARM Cross Tools 命令行启动 MSYS2，则 cl, link, armasam 这几个组件有可能定位不到。  
也可以选择将 D:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\BIN\x86_ARM 这个目录加入系统的环境变量。  
再次使用还是没有找到。cl link armasm 不管了。我也存在问题。请大牛帮助。不过最后编译成功了。

## 编译 FFmpeg  

FFmpegInterop 项目中提供了一个名为 BuildFFmpeg.bat 的批处理文件，借助该批处理，可以轻松进行 FFmpeg 的编译工作。  
BuildFFmpeg.bat 接受两个可选参数，第一个参数表明目标平台，第二个参数表明目标架构，例如：

``` bash
BuildFFmpeg.bat win10                     - Build for Windows 10 ARM, x64, and x86
BuildFFmpeg.bat phone8.1 ARM              - Build for Windows Phone 8.1 ARM only
BuildFFmpeg.bat win8.1 x86 x64            - Build for Windows 8.1 x86 and x64 only
BuildFFmpeg.bat phone8.1 win10 ARM        - Build for Windows 10 and Windows Phone 8.1 ARM only
BuildFFmpeg.bat win8.1 phone8.1 win10     - Build all architecture for all target platform
```

编译时间较长，编译完成后批处理会自动退出。编译中会有个Output文件夹不用理会，编译后的输出的文件位于项目的 ffmpeg/Build/目标平台/架构 目录内。  

也可以手动进行编译 FFmpeg[链接地址:](<https://trac.ffmpeg.org/wiki/CompilationGuide/WinRT#Compiling> for Windows 10)

## 编译 FFmpegInterop库  

打开 Win 8.1 或 Win 10 对应的项目解决方案 FFmpegInterop
打开 FFmpegInterop 属性页面  
![ffmpeg_build_bin](/images/ffmpeg_build_bin.png)  
![ffmpeg_build_include](/images/ffmpeg_build_include.png)  
这个时候 FFmpegInterop 提供的 MediaPlayerCS 项目已经做好了相关配置，开始编译,编译成功。

## 引入 FFmpegInterop库

在项目中右键添加项目找到 FFmpegInterop库 并在`项目引用`里添加  

## 相关链接

<http://blog.csdn.net/finewind/article/details/38854517>  
<http://www.cnblogs.com/xylc/p/3683203.html>  
<http://validvoid.net/build-and-use-ffmpeginterop-win10/#ffmpeg>  
<http://blog.csdn.net/hustlx/article/details/51014307>

[YASM]:http://yasm.tortall.net/
[MSYS2]:http://msys2.github.io/
[FFmpeg]:https://github.com/FFmpeg/FFmpeg
[FFmpegInterop]:https://github.com/Microsoft/FFmpegInterop
[FFmpeg help script]:https://trac.ffmpeg.org/wiki/CompilationGuide/WinRT
