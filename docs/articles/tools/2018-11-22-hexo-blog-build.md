---
title: 使用 hexo 托管到 Github 的博客  
date: 2016-11-02 14:45:27  
tags:  
categories: Blog  
outline: deep
---

### 基本流程  

1. 使用在github 建立一个版本库 yourname.github.io  
2. 安装`hexo`需要node.js[使用nvm 安装node.js](./2016-11-18-nvm-install-node-js-for-mac-and-windows.md)  
3. 配置环境变量  
<!-- more -->
1. 安装完成后使用命令行  
   > 测试 nvm v 输出版本号1.1.1  
   > 测试 hexo v 输出版本号3.2.2  

1. 在D盘创建博客文件夹 D://xxxx  
   >$ hexo init #在你指定的文件夹里初始化hexo 项目
   >$ npm install #安装依赖
   >$ hexo g #生成文件
   >$ hexo s #启动服务
   >$ hexo clean #清除服务
   >$ hexo new "my new  post" #生成新文件
   >$ hexo g
   >$ hexo s #启动服务并查看浏览器
   >$ hexo d #部署失败的话 需要安装使用下面命令
   >$ npm install hexo-deployer-git --save
   >$ hexo d #继续失败 需要开启 ssh验证在[这里](http://jingyan.baidu.com/article/d8072ac47aca0fec95cefd2d.html) 配置文件里_config.yml 修改你的 repository: git@github.com:androllen/androllen.github.io.git
   >$ git config --global user.name "androllen"
   >$ git config --global user.emai "androllen@hotmail.com"
   >$ hexo d

------------

### 问题

1. 如果hexo new "一篇文章"的时候，tags: shell 是小写想换成大写？
    > 先把标签注释掉
    > hexo g  
    > hexo s  
    > hexo d
1. 如果想加入 404.html ?  
    > 创建404.html页面 [内容请点击](http://theme-next.iissnan.com/theme-settings.html#volunteer-404)
    > hexo g  
    > hexo s  
    > hexo d  
1. 如果想加入自定义域名?
    > 创建一个 CNAME 名字 无后缀的文件 里面填入你的域名 yourdomain.com/yourdomain.me
    > 在_config.yml 修改 url: <http://yourdomain.com/>
    > hexo g  
    > hexo s  
    > hexo d  
1. 如果想加入自定义 favicon 图标?
    > [从这里下载](https://github.com/favicon.ico)放到source 文件夹即可
    > hexo g  
    > hexo s  
    > hexo d  
1. 如果想加入 README.md ?
    > 在hexo 生成的source 文件夹里右键 Git Bash Here  
    > hexo new "README"  
    > 从 _post 文件夹里找到 README.md 放到source 文件里
    > hexo g  
    > hexo s  
    > hexo d
1. 如果想加入 about ?
    > 在hexo 生成的source 文件夹里右键 Git Bash Here  
    > hexo new page about  
    > 在 index.md 文件里增加你关于个人信息
    > hexo g  
    > hexo s  
    > hexo d
1. 如果想加入 tags ?
    > 在hexo 生成的source 文件夹里右键 Git Bash Here  
    > hexo new page categories  
    > type: "tags" comments: false  
    > hexo g  
    > hexo s  
    > hexo d  
1. 如果想加入 categories ?
    > 在hexo 生成的source 文件夹里右键 Git Bash Here  
    > hexo new page categories  
    > type: "categories" comments: false  
    > hexo g  
    > hexo s  
    > hexo d
1. 如果想加入 捐助图片 和 头像 ?
    > 把支付宝和微信收款图片放到   \themes\next\images\uploads  
    > 在 hexo _config.yml
    > avatar: /images/avatar.png  
    > 在 hexo 的主题_config.yml
    > reward_comment: 坚持原创技术分享，您的支持将鼓励我继续创作！  
    > wechatpay: /images/wechatpay.jpg
    > alipay: /images/alipay.jpg  
    > hexo g  
    > hexo s  
    > hexo d
1. 如果想发布?
    > 在发布的文件夹下，右键 Git Bash Here
    > hexo g  
    > hexo s  
    > hexo d
    >
### 更多请参考  

* [使用nexT主题教程](http://theme-next.iissnan.com)  
