---
title: Navicat连接Oracle数据库
date: 2021-03-15 12:57:49  
tags: oracle
author: androllen 
---

### 准备

- instantclient-basic-windows.x64-11.2.0.4.0.zip 
- Navicat 12.0.18_premium_cs_x64.exe

### 连接

```sh
连接名    : test
连接类型  : Basic
主机      : 127.0.0.1  
端口      : 1521
服务名    : ORCL 
用户名    : test
密码      : test

连接测试 -> 确定
```

## Oracle library is not loaded

- [下载 Oracle](https://www.oracle.com/database/technologies/instant-client/downloads.html)
- Oracle 放到任意的位置
- 打开 Navicat -> 工具 -> 选项 -> 环境 -> OCI 环境 -> 打开 Oracle 指定的位置 -> 选择 oci.dll
- 配置完后一定要重新启动Navicat Premium程序，否则配置无法生效！
