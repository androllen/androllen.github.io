---
title: Electron Vue
date: 2020-09-09 20:16:32
tags: electron
--- 

[接上篇文章](../../docs/web/2020-09-08-vue.html)

```sh
# Easily Build Vue.js App For Desktop With Electron
vue add electron-builder
# 运行
yarn electron:serve
# 构建
yarn electron:build
```

- Error
  - Vue Devtools failed to install: Error: net::ERR_CONNECTION_TIMED_OUT

  ```sh
  # 注释掉src/background.js中的以下代码就行了
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  ```

[使用 vue 安装 electron](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/#installation)
[electron-sample](https://github.com/hokein/electron-sample-apps)  
[electronjs](https://www.electronjs.org/docs/tutorial/first-app)
