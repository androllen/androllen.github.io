---
title: Visual Studio 2019 C#中远程调试
date: 2020-03-20 12:22:32
tags: IDE debugger
---


### 下载和安装

[Visual Studio 2019](https://visualstudio.microsoft.com/downloads#remote-tools-for-visual-studio-2019)

[Visual Studio 2017](https://my.visualstudio.com/Downloads?q=remote%20tools%20visual%20studio%202017)

[Visual Studio 2015](https://my.visualstudio.com/Downloads?q=remote%20tools%20visual%20studio%202015)

### 设置远程调试器

1. 目标机器上安装远程调试工具，右击远程调试器应用，然后选择以管理员身份运行
  ![view](https://docs.microsoft.com/zh-cn/visualstudio/debugger/media/remotedebuggerconfwizardpage.png?view=vs-2019)
1. 选择配置远程调试，配置防火墙并启动远程调试器
1. 配置完成后，远程调试器窗口会显示
  ![view](https://docs.microsoft.com/zh-cn/visualstudio/debugger/media/remotedebuggerwindow.png?view=vs-2019)
1. 远程调试器现在正在等待连接。 使用服务器名称和端口号显示在 Visual Studio 中设置的远程连接配置。

### 远程调试项目

1. 在“解决方案资源管理器”中，右键单击项目，然后选择“属性”。
2. 在“属性”页上，选择"调试"选项卡。
    ![view](https://docs.microsoft.com/zh-cn/visualstudio/debugger/media/remotedebuggercsharp.png?view=vs-2019)
3. 请确保“工作目录”文本框为空。
4. 选择 "使用远程计算机"，然后在文本框中键入yourmachinename： port （端口号显示在远程调试器窗口中。 每个版本的 Visual Studio 中的端口号递增2。例如：MJO-DL： Visual Studio 2019 上的4024
5. 请确保未选中“启用本机代码调试”。
6. 生成项目,请确保远程调试器正在目标计算机上运行
7. 在 Visual Studio 中，开始调试

### 相关资料

[MSDN C#中远程调试](https://docs.microsoft.com/zh-cn/visualstudio/debugger/remote-debugging-csharp?view=vs-2019)  
[远程调试](https://zhuanlan.zhihu.com/p/29183052)
