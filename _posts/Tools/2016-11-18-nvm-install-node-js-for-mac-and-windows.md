---
title: Nvm 安装 node.js for Mac and Windows  
date: 2016-11-18 01:16:49  
tags:  
categories: Blog  
---
# 在Mac OS上  
1. 使用系统自带curl命令安装nvm  
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash  
1. 安装完成后  
$ nvm --version  
1. $ nvm ls  
1. $ nvm install stable  
<!-- more --> 

# 在Windows 上  
1. 下载[免安装nvm-Windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.1/nvm-noinstall.zip) 或者[安装版本nvm-Windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.1/nvm-setup.zip)  
1. 解压安装到D:\Google\Nvm 和 D:\Google\Nodejs 目录下  
1. 配置环境变量  
1. nvm --version  
1. nvm install latest 
1. nvm use 5.11.0  

# 问题：  
1. 如果在Mac OS系统控制台 输入nvm --version 没有成功显示版本号 提示：nvm: command not found ？  
    > 1. 创建一个 .bash_profile 文件放到 home 下 里面存放环境变量
    > 1. 启动终端Terminal
    > 1. 进入当前用户的home目录
    >    输入cd ~
    > 1. 创建.bash_profile
        输入touch .bash_profile
    > 1. 编辑.bash_profile文件
        输入open -e .bash_profile
    > 1. 把这个export NVM_DIR="$HOME/.nvm"
    > [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm 写入文件内
    > 1. 保存文件，关闭.bash_profile
    > 1. 更新刚配置的环境变量
        输入source .bash_profile
    > 1. 重新启动终端Terminal
    > 1. $ nvm --version  
1. 在Windows配置环境变量  
    > 1. 新增 NPM_HOME D:\Google\Nvm\Npm  
    > 1. 新增 NVM_HOME D:\Google\Nvm  
    > 1. 新增 NVM_SYMLINK D:\Google\Nodejs  
    > 1. 在Path变量下 %NPM_HOME% 放到最前头   
    > 1. %NVM_HOME%   
    > 1. %NVM_SYMLINK%  
    > 1. 确定  

# 参考：
https://github.com/creationix/nvm  
https://github.com/coreybutler/nvm-windows  
http://blog.csdn.net/tyro_java/article/details/51232458  