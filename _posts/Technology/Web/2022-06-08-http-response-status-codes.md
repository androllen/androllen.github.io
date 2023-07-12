---
title: Http 常用状态码
date: 2021-01-23 13:26:49  
tags: http 
---

### 2xx

```sh
# 服务器已成功处理了请求
200
# 
203
```

### 3xx

```sh
# 永久性重定向，表示资源已被分配了新的 URL
301
# 临时性重定向，表示资源临时被分配了新的 URL
302
# 表示资源存在另一个URL，用GET方法获取资源
303
# (未修改)自从上次请求后，请求网页未修改过。服务器返回此响应时，不会返回网页内容
304
```

### 4xx

表示请求可能出错，妨碍了服务器的处理

```sh
# (错误请求)服务器不理解请求的语法
400
# 表示发送的请求需要有通过HTTP认证的认证信息
401
# (禁止)服务器拒绝请求
403
# (未找到)服务器找不到请求地址
404
```

### 5xx

服务器在尝试处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求的错误

```sh
# (服务器内部错误)服务器遇到错误，无法完成请求
500
# 表示服务器处于停机维护或超负载，无法处理请求
503
```