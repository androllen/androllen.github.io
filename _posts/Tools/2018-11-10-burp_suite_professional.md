---
title: Burp Suite Professional
date: 2018-11-10 23:15:39  
categories: Test Tools  
---

### Chrome 版本

[Configuring Chrome to work with Burp](https://portswigger.net/support/configuring-chrome-to-work-with-burp)

- 设置代理
  ![1](/assets/posts/20200328214331.png)
  ![1](/assets/posts/20200328214450.png)
- 下载证书  
  <http://burp/>  
  ![1](/assets/posts/20200328214480.png)

- 安装证书
  ![1](/assets/posts/20200328214554.png)
  ![1](/assets/posts/20200328214627.png)
  ![1](/assets/posts/20200328214724.png)
  ![1](/assets/posts/20200328214809.png)

- 设置开关
![1](/assets/posts/20200328220216.png)
  > Proxy中Intercept选项卡，关闭拦截功能“Interception is off”  

### Firefox 版本  

[Configuring Firefox to work with Burp](https://portswigger.net/support/configuring-firefox-to-work-with-burp)

### 手机抓包

- 记录电脑端连接 IP 地址
  > 如果没有 WiFi 路由器，电脑自带无线网卡的情况下下载360免费WiFi客户端
- 设置 Burp 新增本地 WiFi 网卡IP地址
  ![ip](/assets/posts/20200328225511.png)
- 导出当前IP段证书
  > burp.crt
- 手机端设置代理  
  打开手机 WiFi 选择连接的 WiFi 点击进入手动设置服务器(WiFi IP)和端口(WiFi 端口)
- 手机端导入 Burp 证书  
  - 上传到一个可以下载 burp.crt 的网站(Everything)
  - 获取下载连接
  - 手机通过 Safari 浏览器打开下载连接
  - 安装证书

### 双向验证

### 相关链接

1. [抓取手机HTTPS](https://blog.csdn.net/qq_29277155/article/details/52548630)  
2. [苹果手机导入证书](http://blog.sina.com.cn/s/blog_a03baecd0102xc7l.html)
