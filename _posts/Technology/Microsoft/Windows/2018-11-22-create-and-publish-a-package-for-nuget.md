---
title: Create and publish a package for NuGet  
date: 2016-12-19 22:42:13  
tags: NuGet UWP  
categories: 命令  
---

闲来无事，想把自己写的控件库push to NuGet share everyone       
这是我的CCUWPToolkit for UWP  
下载地址：[https://www.nuget.org/packages/CCUWPToolkit/](https://www.nuget.org/packages/CCUWPToolkit/)  

# 准备工作
工具|链接|
----|----
VS2015 |[https://www.visualstudio.com/zh-hans/downloads/](https://www.visualstudio.com/zh-hans/downloads/)
NuGet.Tools.vsix for VS2015 | [https://dist.nuget.org/visualstudio-2015-vsix/latest/NuGet.Tools.vsix](https://dist.nuget.org/visualstudio-2015-vsix/latest/NuGet.Tools.vsix)
NuGet|[https://www.nuget.org/downloads](https://www.nuget.org/downloads)  
NuGetPackageExplorer|[NuGetPackageExplorer](https://github.com/NuGetPackageExplorer/NuGetPackageExplorer)
<!-- more --> 
1. NuGet.Tools.vsix下载完成之后 双击直接安装到VS2015上的插件用来安装其他库 可以去项目:菜单->nuget pack 管理器 ->nuget 控制台 输入: Install-Package CCUWPToolkit 即可安装  
1. 从浏览器上下载 NuGet.exe 根据 *官方提示：nuget.exe is the CLI tool itself, not an installer, so be sure to save the downloaded file from your browser instead of running it.*  

>意思是说nuget.exe 不是安装器而是个命令行工具。为了方便发布，从你的浏览器下载把它保存放到 D:\Program Files (x86)\Nuget 目录下而不是运行它。  
>新建一个系统变量NUGET_HOME 值:D:\Program Files (x86)\Nuget\ 添加到path ：%NUGET_HOME% 
>安装完成之后Run Cmd nuget 成功继续往下看，不成功继续配置环境变量。  

# 生成 .nuspec文件
1. 在项目目录下启用命令行工具  
nuget spec   
已成功创建“Package.nuspec”修改成你项目的文件名CCUWPToolkit.nuspec并放到项目目录下
1. 到项目解决方案中点开配置管理器，将所有的项目平台改为Any CPU Debug&Release 编译  
1. 把bin文件夹修改成lib文件夹把Debug文件夹改成uap10.0文件夹   
1. 把Release文件夹里的dll换到uap10.0文件夹里  
1. 把Release文件夹里的Themes里面的文件换到uap10.0下Themes文件夹里   

# 生成 .nupkg包
1. 到项目当前目录下启用命令行工具  
nuget pack CCUWPToolkit.csproj // 生成 CCUWPToolkit.1.0.0.nupkg 
1. 使用`NuGetPackageExplorer`打开 CCUWPToolkit.1.0.0.nupkg  
按照组织如下，修改包  

```
│  CCUWPToolkit.csproj 
|
|  CCUWPToolkit.nuspec 
│
└─lib
    └─uap10.0
        │  CCUWPToolkit.dll
        │  CCUWPToolkit.pdb
        |  CCUWPToolkit.pri
        │  
        └─CCUWPToolkit
            │  CCUWPToolkit.xr.xml
            │
            ├─Properties
            │      CCUWPToolkit.rd.xml
            │
            └─Themes
                    Generic.xbf
```

也就是说把bin\Debug 路径下里的文件全部放到lib\uap10.0 文件夹。这个时候Themes 里面的是源码xaml。我们需要替换成 Release 下的Themes即可。  

# 发布 nupkg包
1. 注册一个 nuget用户 在API Key 这一栏下 单击 copy to clipboard    
1. 命令行发布   
`nuget push CCUWPToolkit.1.0.0.nupkg e92ebc37-1d07-402a-a295-c4ca159d40c5 -Source https://www.nuget.org/api/v2/package`
1. 网站发布  
[https://www.nuget.org/account](https://www.nuget.org/account)选择Upload Your Package来上传你的包
1. NuGetPackageExplorer 发布  
`点击File菜单->发布`
1. 上传完成后打开[https://www.nuget.org/account](https://www.nuget.org/account) [Manage My Packages](https://www.nuget.org/account/Packages)页面进行管理       

详细请移步官网：  
[详情：nuspec](https://docs.nuget.org/ndocs/schema/nuspec)  
[create-and-publish-a-package](https://docs.nuget.org/ndocs/quickstart/create-and-publish-a-package)  
[create-uwp-packages](https://docs.nuget.org/ndocs/guides/create-uwp-packages)
