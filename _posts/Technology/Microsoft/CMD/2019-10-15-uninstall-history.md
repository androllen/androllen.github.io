---
title: 卸载软件历史记录
date: 2019-10-15 18:26:32
tags: CMD
---


### 卸载软件历史记录

1. cmd to regedit 打开注册表定位[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\windows\CurrentVersion\Uninstall]
2. 从文件夹里看 DisplayName 属性 直到找到符合你要删除的软件名
3. 从文件夹里看 InstallSource 属性，看到有路径，去文件夹里找到这个路径下的文件，如果需要修复或者卸载，卸载软件即可。
