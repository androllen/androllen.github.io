---
title: 使用 VSCode 创建 Django 
date: 2020-04-15 12:45:37  
outline: deep
---

### 准备

[下载 V1.44.1 VSCode](https://code.visualstudio.com/?wt.mc_id=vscom_downloads)  
[下载 V3.7.x  Python](https://www.python.org/)  
[下载慢请更新淘宝或者清华源](update-pip-source.html)






### 创建 Django

  ```sh
  py -m venv env
  .\env\Scripts\activate
  pip install django==3.2.3
  # 注意 `这里带点跟不带点的区别` 
  django-admin startproject work .
  django-admin startapp chat
  py manage.py runserver
  ```
