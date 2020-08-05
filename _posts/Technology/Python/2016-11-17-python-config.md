---
title: Python 
date: 2016-11-04 12:45:37  
tags: Python
author: androllen  
permalink: post/update-pip-source.html
---

### 更换 PIP 源

  ``` bash
  cmd
  mkdir pip
  cd pip
  cd > pip.ini
  pip.ini
  # 把下面的内容复制进pip.ini
  [global]
  index-url = https://pypi.tuna.tsinghua.edu.cn/simple
  ```

### Python2.7 install pip

- 资料包含：  

  ```sh
  setuptools-33.1.1  
  pip-18.1  
  ez_setup.py  
  get-pip.py  
  ```

- 方法一
  
  ```sh
  先安装 setuptools:
  进入 setuptools 文件夹，运行：python setup.py install

  再安装 pip：
  进入 pip 文件夹，运行：python setup.py install
  ```

- 方法二
  
  ``` sh
  # ez_setup.py是python官方给出的一个安装setuptools的工具
  进入ez_setup.py文件夹 python ez_setup.py

  # get-pip.py 是python官方给出的一个安装pip的工具
  进入get-pip.py 文件夹 python get-pip.py
  ```

- 使用 `pip` 命令的时候报 `failed to create process`
   重新执行方法一

[资料下载](https://files.cnblogs.com/files/luquanmingren/setup-pip.zip)
