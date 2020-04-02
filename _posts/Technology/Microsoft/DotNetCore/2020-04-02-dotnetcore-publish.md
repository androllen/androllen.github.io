---
title: 基于DotNetCore WPF 发布单文件包
date: 2020-04-02 18:12:39  
categories: DotNetCore  
---

- GUI发布  
  ![](/assets/posts/20200402180757.png)  
  ![](/assets/posts/20200402180758.png)
- 命令行发布  
  ![](/assets/posts/20200402182927.png)  
  ```
  dotnet publish -r win-x86 -c Release /p:PublishSingleFile=true /p:PublishTrimmed=true
  ```

