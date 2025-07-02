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
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
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
