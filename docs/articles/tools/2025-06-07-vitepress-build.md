
# 搭建 VitePress 个人博客

### 前置准备 {#prerequisites}

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 通过命令行界面 (CLI) 访问 VitePress 的终端。
- [官网 vitepress](https://vitepress.dev/zh/)
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。
  - 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。


::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

:::

### 安装向导 {#setup-wizard}

VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：

::: code-group

```sh [npm]
$ npx vitepress init
```

```sh [yarn]
$ yarn vitepress init
```

:::

将需要回答几个简单的问题：

<<< @/public/file/init.ansi


::: tip 注意

输入以上命令结束后，正式构建了一套独立的 VitePress 站点，可以在当前目录 (`./`) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 `./docs`) 中，以便它与项目的其余部分分开。

假设选择在 `./docs` 中搭建 VitePress 项目，生成的文件结构应该是这样的：

:::

### 文件结构 {#file-structure}

::: code-group

```sh [我的项目布局]
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  ├─ public
|  |  ├─ assets
|  |  └─ file
│  ├─ articles
|  ├─ about.md
│  └─ index.md
└─ package.json
```

```sh [官方项目布局]
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

:::

### 配置文件 {#the-config-file}

配置文件 (`.vitepress/config.mts`) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：

```js [.vitepress/config.mts]
export default {
  // 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // 主题级选项
  }
}
```

::: tip 注意

通过 `themeConfig` 选项配置主题的行为。有关所有配置选项的完整详细信息，请参见[配置参考](../reference/site-config)
或者参见[官方实战配置](https://github.com/vuejs/vitepress/blob/main/docs/zh/config.ts)

`.vitepress` 目录之外的 Markdown 文件被视为**源文件**。

VitePress 使用 **基于文件的路由**：每个 `.md` 文件将在相同的路径被编译成为 `.html` 文件。例如，`index.md` 将会被编译成 `index.html`，可以在生成的 VitePress 站点的根路径 `/` 进行访问。

VitePress 还提供了生成简洁 URL、重写路径和动态生成页面的能力。这些将在[路由指南](./routing)中进行介绍。

:::

### 启动并运行 {#up-and-running}

`docs:dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

::: code-group

```sh [npm]
$ npm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```


:::

开发服务应该会运行在 `http://localhost:5173` 上。在浏览器中访问 URL 以查看新站点的运行情况吧！

### 站点配置 {#site-config}

::: tip 注意

我这里先附带上自己的配置文件，供参考。

也可以参考官方地址：[VitePress 配置](https://vitepress.dev/zh/reference/site-config)

也可以参考另一个博客配置文件 [DingN03 配置](https://DingN03.github.io/install/vitepress-config)
:::

> [!warning] 注意
> 如果你要使用我的配置文件，请确保目录结构和我的一致，特别是 `./docs/articles` 目录存在
> 

::: details config.mts

```ts:line-numbers
import { defineConfig } from 'vitepress'

process.env.VITE_EXTRA_EXTENSIONS = 'iss,nsi,vbs' // additional values should be comma separated without any spaces - `ini,foo,bar`

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "androllen'blogs",
  description: "a Site",

  lang: 'zh-CN',

  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  ],

  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '大前端', link: '/articles/web/2017-03-07-npm' },
      {
        text: 'Python开发', items: [
          { text: 'python', link: '/articles/python/2016-11-05-python-practice.md' },
          { text: 'django', link: '/articles/python/django/2020-04-15-vscode-django.md' },
          { text: 'flask', link: '/articles/python/flask/2019-05-06-learning-flask' },
        ]
      },
      { text: 'Microsoft', link: '/articles/microsoft/2018-12-11-kms.md' },
      { text: '数据结构与算法', link: '/articles/datastructure/2021-02-23-byte-code.md' },
      { text: '我的日记', link: '/articles/mypost/2016-10-28-self-post.md' },
      { text: '工具箱', link: '/articles/tools/2016-11-18-nvm-install-node-js-for-mac-and-windows.md' },
      {
        text: '其他', items: [
          { text: 'database', link: '/articles/database/mysql/2020-04-12-manual-install-mysql-server.md' },
          { text: 'ruby', link: '/articles/server/2019-10-15-how-use-ruby-build-jekyll.md' },
          { text: 'test', link: '/articles/test/2020-08-05-struts2.md' },
          { text: 'Mac', link: '/articles/system/2018-11-22-macos-app-convert-to-dmg-on-macbook-pro.md' },
          { text: 'Google', link: '/articles/system/2020-01-14-chrome.md' },
          { text: 'Java Vscode', link: '/articles/system/2022-07-31-mavenforjava.md' },
        ]
      },
      { text: '关于我', link: '/about' },
    ],

    sidebar: {
      'articles/tools/': [
        {
          text: '工具箱',
          items: [
            { text: 'Nvm 安装', link: '/articles/tools/2016-11-18-nvm-install-node-js-for-mac-and-windows.md' },
            { text: 'cooledit', link: '/articles/tools/2016-12-02-cool-edit-pro-2-1-for-windows.md' },
            { text: 'devtools', link: '/articles/tools/2016-12-09-dev-tool-for-windows.md' },
            { text: 'sublime', link: '/articles/tools/2017-12-15-sublime-text-3-c-build-encoding.md' },
            { text: 'burp_suite', link: '/articles/tools/2018-11-10-burp_suite_professional.md' },
            { text: 'hexo', link: '/articles/tools/2018-11-22-hexo-blog-build.md' },
            { text: 'painter', link: '/articles/tools/2018-11-22-painter-tool-sai.md' },
            { text: 'blogs', link: '/articles/tools/2018-11-22-the-great-blogs-coding-web.md' },
            { text: 'git', link: '/articles/tools/2019-10-15-git.md' },
            { text: 'software', link: '/articles/tools/2019-10-15-software-key.md' },
            { text: 'uefi install os', link: '/articles/tools/2020-03-23-uefi-usb-install-os.md' },
            { text: 'frp', link: '/articles/tools/2020-05-18-frp-remote.md' },
            { text: 'Adobe', link: '/articles/tools/2020-06-30-pr-ae-c4d.md' },
            { text: 'ffmpeg', link: '/articles/tools/2020-08-15-ffmpeg.md' },
            { text: '联通宽带', link: '/articles/tools/2020-08-25-public-ip-access-web-server.md' },
            { text: 'douyin', link: '/articles/tools/2020-11-30-douyin-live.md' },
            { text: 'WiFi', link: '/articles/tools/2021-12-19-Wi-Fi-Protected.md' },
            { text: 'Morse code', link: '/articles/tools/2023-01-04-Morse-code.md' },
          ]
        }
      ],
      'articles/web/': [
        {
          text: '大前端',
          items: [
            { text: 'NPM', link: '/articles/web/2017-03-07-npm' },
            { text: 'Yarn', link: '/articles/web/2017-03-08-yarn' },
            { text: 'electron', link: '/articles/web/2018-09-09-electron.md' },
            { text: 'typescript', link: '/articles/web/2019-06-09-typescript.md' },
            { text: 'vue', link: '/articles/web/2020-09-08-vue.md' },
            { text: 'electron&vue', link: '/articles/web/2020-09-09-electron-vue.md' },
            { text: 'nodejs', link: '/articles/web/2020-10-19-nodejs.md' },
            { text: 'linkimport', link: '/articles/web/2020-12-21-link-import.md' },
            { text: 'httpcode', link: '/articles/web/2022-06-08-http-response-status-codes.md' },
            { text: '离线部署 elementui', link: '/articles/web/2022-07-07-element-ui.md' },
          ]
        }
      ],
      'articles/microsoft/': [
        {
          text: 'Microsoft',
          items: [
            { text: 'kms激活', link: '/articles/microsoft/2018-12-11-kms.md' },
            { text: 'ffmpeg', link: '/articles/microsoft/2016-12-08-ffmpeg-compile-in-windows10-and-vs2015.md' },
            { text: 'nuget', link: '/articles/microsoft/2016-12-19-create-and-publish-a-package-for-nuget.md' },
            { text: 'bat', link: '/articles/microsoft/2017-03-07-bat.md' },
            { text: 'vlmcsd kms', link: '/articles/microsoft/2018-12-11-vlmcsd-kms.md' },
            { text: 'Windows 10 Install', link: '/articles/microsoft/2019-03-01-install-windows-via-re-without-any-other-external-tools.md' },
            { text: 'cmd命令', link: '/articles/microsoft/2019-10-15-cmd.md' },
            { text: '远程调试', link: '/articles/microsoft/2020-03-20-msdn-ide-debugger-remote.md' },
            { text: '发布dotnetcore', link: '/articles/microsoft/2020-04-02-dotnetcore-publish.md' },
            { text: 'nsis', link: '/articles/microsoft/2020-07-20-wpf-nsis.md' },
            { text: 'nsis自定义', link: '/articles/microsoft/2020-07-23-nsis-duilib.md' },
            { text: 'hardware', link: '/articles/microsoft/2020-08-27-hardware-info.md' },
            { text: 'inno', link: '/articles/microsoft/2020-09-08-wpf-inno.md' },
            { text: '下载Win10', link: '/articles/microsoft/2020-09-27-fast-download-winos.md' },
            { text: '离线下载visual studio', link: '/articles/microsoft/2022-04-18-vs-offline-layout.md' },
          ]
        }
      ],
      'articles/datastructure/': [
        {
          text: 'datastructure',
          items: [
            { text: '原码补码反码', link: '/articles/datastructure/2021-02-23-byte-code.md' },
            { text: 'UDP', link: '/articles/datastructure/2022-04-17-udp.md' },
            { text: '算法', link: '/articles/datastructure/2024-04-09-algorithm.md' },
          ]
        }
      ],
      'articles/python/': [
        {
          text: 'Python',
          items: [
            { text: '练习', link: '/articles/python/2016-11-05-python-practice.md' },
            { text: '配置python', link: '/articles/python/2016-11-17-python-config.md' },
            { text: '配置Vscode', link: '/articles/python/2019-10-17-vscode-config.md' }
          ]
        }
      ],
      'articles/python/django/': [
        {
          text: 'django',
          items: [
            { text: '配置', link: '/articles/python/django/2020-04-15-vscode-django.md' },
          ]
        }
      ],
      'articles/python/flask/': [
        {
          text: 'flask',
          items: [
            { text: '配置', link: '/articles/python/flask/2019-05-06-learning-flask' },
          ]
        }
      ],
      'articles/mypost/': [
        {
          text: '私人属地',
          items: [
            { text: '感想', link: '/articles/mypost/2016-10-28-self-post.md' },
            { text: '数学', link: '/articles/mypost/2010-08-07-math-thinking.md' },
            { text: '数学100', link: '/articles/mypost/2010-08-07-primary-math-100.md' },
            { text: '护发', link: '/articles/mypost/2017-03-07-my-hair-needs-care.md' },
            { text: '日记', link: '/articles/mypost/2017-03-07-self-diary.md' },
            { text: '教育', link: '/articles/mypost/2017-03-07-teacher.md' },
            { text: '青海湖', link: '/articles/mypost/2017-12-16-cycle-lake-ride-a-bike.md' },
            { text: '数学公式', link: '/articles/mypost/2020-09-02-primary-math-cmd.md' },
            { text: '书籍与人物', link: '/articles/mypost/2020-10-01-books-videos.md' },
            { text: '数学思维', link: '/articles/mypost/2021-08-07-math-thinking.md' },
            { text: '英语语法', link: '/articles/mypost/2022-05-04-primary-english.md' },
            { text: '面试', link: '/articles/mypost/2022-05-10-interview.md' },
            { text: '育儿教育', link: '/articles/mypost/2023-06-25-teacher-baby.md' },
            { text: '美食', link: '/articles/mypost/2024-03-25-eating.md' },
            { text: '音乐', link: '/articles/mypost/2024-03-26-music.md' },
          ]
        }
      ],
      'articles/database/': [
        {
          text: 'database',
          items: [
            { text: 'mysql', link: '/articles/database/mysql/2020-04-12-manual-install-mysql-server.md' },
            { text: 'oracle', link: '/articles/database/oracle/2021-03-15-navicat-oracle.md' },
          ]
        }
      ],
      '/about/': [
        {
          text: 'about', link: '/about'
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/androllen/androllen.github.io/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/androllen' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present androllen'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    outline: {
      label: '页面导航'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})

```

:::

#### 说明

| 行号 | 配置项      | 说明                                                                     |
| ---- | ----------- | ------------------------------------------------------------------------ |
| 7    | title       | 网站标题                                                                 |
| 8    | description | 网站描述                                                                 |
| 20   | logo        | 网站图标,对应站点左上角的图标                                            |
| 26   | nav         | 导航栏配置,对应站点顶部的导航栏，会在下方详细说明                        |
| 53   | sidebar     | 侧边栏配置,对应站点左侧的侧边栏，会在下方详细说明                        |
| 192  | editLink    | 编辑链接可让显示链接以编辑 Git 管理服务 (例如 GitHub 或 GitLab) 上的页面 |
| 197  | sociaLinks  | 社交链接配置,对应站点右上角的社交链接                                    |
| 201  | footer      | 页脚配置                                                                 |
| 210  | lastUpdated | 允许自定义上次更新的文本和日期格式                                       |
| 217  | outline     | 将此值设置为 false 可禁止渲染大纲容器                                    |
| 221  | notFound    | 当未找到页面 (404) 时                                                    |


###  VitePress 部署到 GitHub Pages

> [!warning] 注意
> 在提交仓库前请运行 `npm run docs:build` 命令，确保文档在本地构建成功,避免提交至github上出现部署错误。



### 创建github仓库

首先，你需要创建一个 GitHub 仓库，用来存放你的 VitePress 文档。

进入github.com，点击右上角的 `+` 按钮，选择 `New repository`。

![create-repo](/assets/20250608132941.jpg)

> [!TIP] 注意
> 仓库的名字必须为 `{github name}.github.io`，其中 `{github name}` 是你的 GitHub 用户名。
> 
> 例如，我的 GitHub 用户名是 `androllen`，那么我的仓库名应该是 `androllen.github.io`。
> 
> Description 可以输入一些描述，然后点击 `Create repository` 按钮。


### 推送本地仓库到远程仓库

1. 打开 `VSCode` 使用 `Ctrl + Shift+p` 命令 ，输入 `git clone`, 把远程 git 仓库链接 填入输入框进行克隆
2. 点击左侧菜单 `Source Control` 添加 vitepress 项目，并提交
3. 同步到远程git仓库

### 部署配置文件

::: tip 注意
你的默认分支如果是 `master` 那就要和 `第9行` 这里保持一致
:::

::: details deploy.yml

```ts:line-numbers
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [master]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置时区
env:
  TZ: Asia/Shanghai

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  # 允许读取仓库内容的权限。
  contents: read
    # 允许写入 GitHub Pages 的权限。
  pages: write
    # 允许写入 id-token 的权限。
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

# 定义执行任务
jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释
      #   with:
      #     version: 9
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
:::

> [!TIP] 注意
> Setting 配置一样保持一致

![deploy](/assets/20250608135431.jpg)

### 查看部署状态

进入你的 GitHub 仓库，点击 `Actions` 选项卡，查看部署状态。

![查看部署状态](/assets/20250608133950.jpg)

部署成功后，你可以在浏览器中访问 `https://{github name}.github.io` 访问你的 VitePress 文档。

### 后续工作

你可以在本地编辑文档，然后提交到远程仓库，GitHub Actions 会自动部署到 GitHub Pages。

如果需要修改部署配置，请编辑 `.github/workflows/deploy.yml` 文件。

