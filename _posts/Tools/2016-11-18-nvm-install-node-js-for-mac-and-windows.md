---
title: Nvm 安装 node.js for Mac and Windows  
date: 2016-11-18 01:16:49  
tags:  
categories: Blog  
---

## 在Mac OS上  
### [准备](https://github.com/nvm-sh/nvm#ansible)  
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash  

### 安装Node  
    $ nvm version  
    $ nvm list available  
    $ nvm install lts or nvm install 16.15.0  
    $ nvm use 16.15.0  
    $ nvm list  
    $ node -v  
    $ npm -v  


## 在Windows 上  
### 准备  
1. [免安装nvm-noinstall.zip](https://github.com/coreybutler/nvm-windows/releases)  
2. [推荐-安装版本nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases)  

### 安装  
- 安装`Nvm`目录 设置为 D:\Google\Nvm 和 D:\Google\Nodejs

### 环境变量    
1. 新增 NVM_HOME D:\Google\Nvm  
1. 新增 NVM_SYMLINK D:\Google\Nodejs  
1. 在用户和系统变量顺序为 %NVM_HOME% %NVM_SYMLINK% 
1. 确定
2. 不用设置`NPM`环境变量因为可以通过软链接定位到  

### 安装Node   
1. nvm version  
2. nvm list available  
3. nvm install lts or nvm install 16.15.0  
4. nvm use 16.15.0  
5. nvm list  
6. node -v  
7. npm -v  

## 问题  
- 如果在Mac OS系统控制台 输入nvm --version 没有成功显示版本号 提示：nvm: command not found ？  
  1. 创建一个 .bash_profile 文件放到 home 下 里面存放环境变量
  2. 启动终端Terminal
  3. 进入当前用户的home目录
  输入cd ~
  4. 创建.bash_profile
  输入touch .bash_profile
  1. 编辑.bash_profile文件
  输入open -e .bash_profile
  1. 把这个export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm 写入文件内
  1. 保存文件，关闭.bash_profile
  2. 更新刚配置的环境变量
  输入source .bash_profile
  1. 重新启动终端Terminal
  2. $ nvm --version  

- 在Windows更新nvm  
  - [下载更新程序 nvm-update.zip](https://github.com/coreybutler/nvm-windows/releases)
  - 双击`nvm-update.exe`. 

## 参考
https://github.com/nvm-sh/nvm  
<https://github.com/creationix/nvm>  
<https://github.com/coreybutler/nvm-windows>  
<http://blog.csdn.net/tyro_java/article/details/51232458>
