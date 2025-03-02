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
  
  # 使用 `pip` 命令的时候报 `failed to create process` 重新执行方法一
  ```

- 方法二
  
  ```sh
  # ez_setup.py是python官方给出的一个安装setuptools的工具
  进入ez_setup.py文件夹 python ez_setup.py

  # get-pip.py 是python官方给出的一个安装pip的工具
  进入get-pip.py 文件夹 python get-pip.py
  ```

- 方法三

```sh
# 调用会在当前未安装 pip 的情况下安装 pip
# 如果有旧版的 pip 文件夹先删除，目录在 Lib\site-packages 路径下删掉 pip和pip-23.2.1.dist-info
python -m ensurepip
```


### 最后更新 pip
python -m pip install --upgrade pip


[资料下载](https://files.cnblogs.com/files/luquanmingren/setup-pip.zip)

### pip3 安装 pycrypto 时报错

[Crypto](https://github.com/pycrypto/pycrypto)

[Pycrytodome](https://github.com/sfbahr/PyCrypto-Wheels)

`pycrypto` 已经停止更新  

`pycryptodome`是`pycrypto`的延伸版本,用法是一样的。

``` sh
pip3 install pycryptodome
```

The installer has encountered an unexpected error installing this package. Thismay indicate a problem with this package.The error code is 2503.

使用管理员权限安装

```sh
# 依赖包无法安装到虚拟环境
# pip --version：Fatal error in launcher: Unable to create process using...
python -m pip install --upgrade --force-reinstall pip
```

reference:  
https://blog.csdn.net/qq_34663531/article/details/116981552