---
title: VSCode 配置用户片段
date: 2019-10-17 17:10:37  
tags: python
author: androllen  
---

### 配置 Python 文首注释

- Manage or Preferences -> User Snippets -> python
- 将下面的内容复制进去

  ``` bash
  {
    "HEADER": {
      "prefix": "header",
      "body": [
        "#!/usr/bin/env python",
        "# -*- coding: utf-8 -*-",
        "",
        "#Time: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
        "#Author: androllen",
        "#Contact: androllen#hotmail.com",
        "",
        "$0"
      ],
      "description": "header Comment"
    }
  }
  ```

`Ctrl + j 快速启动虚拟环境`  
> 前提下已经安装过 Python 虚拟环境

### 解决 PIP 安装虚拟环境后仍然安装到全局python和pip

因为这些 python 都找不到虚拟机环境目录，默认使用本地全局环境

1. 不能使用 中文 路径或者中文文件夹名  
1. 不能使用 A-B-C 文件夹  
1. 不能使用 以 点 开头的文件夹

```sh
where py
# 显示 C:\Windows\py.exe 一般是成功的
where pip
# D:\Git Down\django_on_docker\app\env\Scripts\pip.exe
# D:\Microsoft\Python\Python37\Scripts\pip.exe

pip list

Package    Version
---------- -------
pip        19.0.3
setuptools 40.8.0
You are using pip version 19.0.3, however version 20.2b1 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.
```
