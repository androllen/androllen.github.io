---
title: 使用 VSCode 创建 Django 
date: 2020-04-15 12:45:37  
tags: Python
author: androllen  
---

### 准备
[下载 V1.44.1 VSCode](https://code.visualstudio.com/?wt.mc_id=vscom_downloads)
[下载 V3.7.x  Python](https://www.python.org/)

### 快速创建 Django
  1. mkdir demoDjango
  2. cd demoDjango
  3. code .
  4. Ctrl + j
  5. py -m venv env
  6. Python: Select Interpreter
  7. (cache).\envdjango\Scripts\python.exe
  8. Ctrl + j
  9. .\envdjango\Scripts\activate
  10. pip install django [下载慢请更新淘宝或者清华源](post/update-pip-source.html)
  11. django-admin startproject worker .  **注意这里带点跟不带点的区别，自行搜索**
  12. py manage.py runserver
  13. Git:Initialize Repository -> demoDjango
  14. [下载 gitignore 插件](https://marketplace.visualstudio.com/items?itemName=michelemelluso.gitignore) 添加 .gitignore文件

