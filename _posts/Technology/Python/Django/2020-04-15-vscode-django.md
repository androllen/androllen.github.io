---
title: 使用 VSCode 创建 Django 
date: 2020-04-15 12:45:37  
tags: python vscode
author: androllen  
---

### 准备

[下载 V1.44.1 VSCode](https://code.visualstudio.com/?wt.mc_id=vscom_downloads)  
[下载 V3.7.x  Python](https://www.python.org/)

### 快速创建 Django

  1. mkdir demoDjango
  2. cd demoDjango
  3. code .
  4. Ctrl + Shift + P -> Preferences:Open Workspace Settings(JSON)
  5. Ctrl + Shift + P -> Git:Initialize Repository -> demoDjango
  6. Ctrl + Shift + P -> Git:Add to .gitignore
  7. Ctrl + j         -> py -m venv envdjango -> Add env to .gitignore
  8. Ctrl + Shift + P -> Python: Select Interpreter -> (cached).\envdjango\Scripts\python.exe
  9. Ctrl + j         -> activate venv:`.\envdjango\Scripts\activate`
  10. pip install django [下载慢请更新淘宝或者清华源](update-pip-source.html)
  11. django-admin startproject worker .  **注意 `这里带点跟不带点的区别，自行搜索`**
  12. py manage.py runserver
