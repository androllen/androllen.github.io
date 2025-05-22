---
title: Navicat连接Oracle数据库
date: 2021-03-15 12:57:49  
outline: deep
---

### 准备

- Oracle 10g client
- instantclient-basic-windows.x64-12.2.zip 
- Navicat 12.1.11_premium_cs_x64.exe

### 安装

- 安装 Oracle 10g client 客户端程序
- 解压 instantclient-basic-windows.x64-12.2.zip 
- 安装 Navicat 12.1.11_premium_cs_x64.exe
- 打开 Navicat -> 工具 -> 选项 -> 环境 -> OCI 填入 解压的 instantclient 文件夹下的 oci.dll

### 连接

- 新建 Oracle 的连接 

  ```sh
  # 连接局域网内的数据库地址服务
  连接名    : SQDZ
  连接类型  : Basic
  主机      : 192.168.3.110  
  端口      : 1521
  服务名    : SQDZ 
  用户名    : dzte
  密码      : dzte
  ```
- 连接测试 -> 确定
  
## Oracle library is not loaded

- [下载 Oracle](https://www.oracle.com/database/technologies/instant-client/downloads.html)
- Oracle 放到任意的位置
- 打开 Navicat -> 工具 -> 选项 -> 环境 -> OCI 环境 -> 打开 Oracle 指定的位置 -> 选择 oci.dll
- 配置完后一定要重新启动Navicat Premium程序，否则配置无法生效！


### 导出整个库 

```
#  exp 用户名/口令@数据库名   file=导出的文件存储路径
exp username/password@SID file=D:\test.dmp
```

### 导入整个库
imp 用户名/密码@数据库名 full=y file= 文件路径  ignore=y  
imp usename/password@SID full=y  file= D:\test.dmp   ignore=y
