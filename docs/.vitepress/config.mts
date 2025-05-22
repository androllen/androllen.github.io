import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "androllen'blogs",
  description: "a Site",
  assetsDir: 'static',
  outDir: '../public',
  lang: 'zh-CN',
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '大前端', link: '/web/2017-03-07-npm' },
      {
        text: 'Python开发', items: [
          { text: 'python', link: '/python/2016-11-05-python-practice.md' },
          { text: 'django', link: '/python/django/2020-04-15-vscode-django.md' },
          { text: 'flask', link: '/python/flask/2019-05-06-learning-flask' },
        ]
      },
      { text: 'Microsoft', link: '/microsoft/2018-12-11-kms.md' },
      { text: '数据结构与算法', link: '/datastructure/2021-02-23-byte-code.md' },
      { text: '我的日记', link: '/mypost' },
      { text: '工具箱', link: '/tools/2016-11-18-nvm-install-node-js-for-mac-and-windows.md' },
      {
        text: '其他', items: [
          { text: 'database', link: '/database/mysql/2020-04-12-manual-install-mysql-server.md' },
          { text: 'ruby', link: '/server/2019-10-15-how-use-ruby-build-jekyll.md' },
          { text: 'test', link: '/test/2020-08-05-struts2.md' },
          { text: 'Mac', link: '/system/2018-11-22-macos-app-convert-to-dmg-on-macbook-pro.md' },
          { text: 'Google', link: '/system/2020-01-14-chrome.md' },
          { text: 'Java Vscode', link: '/system/2022-07-31-mavenforjava.md' },
        ]
      },
      { text: '关于我', link: '/about' },
    ],

    sidebar: {
      '/tools/': [
        {
          text: '工具箱',
          items: [
            { text: 'Nvm 安装', link: '/tools/2016-11-18-nvm-install-node-js-for-mac-and-windows.md' },
            { text: 'cooledit', link: '/tools/2016-12-02-cool-edit-pro-2-1-for-windows.md' },
            { text: 'devtools', link: '/tools/2016-12-09-dev-tool-for-windows.md' },
            { text: 'sublime', link: '/tools/2017-12-15-sublime-text-3-c-build-encoding.md' },
            { text: 'burp_suite', link: '/tools/2018-11-10-burp_suite_professional.md' },
            { text: 'hexo', link: '/tools/2018-11-22-hexo-blog-build.md' },
            { text: 'painter', link: '/tools/2018-11-22-painter-tool-sai.md' },
            { text: 'blogs', link: '/tools/2018-11-22-the-great-blogs-coding-web.md' },
            { text: 'git', link: '/tools/2019-10-15-git.md' },
            { text: 'software', link: '/tools/2019-10-15-software-key.md' },
            { text: 'uefi install os', link: '/tools/2020-03-23-uefi-usb-install-os.md' },
            { text: 'frp', link: '/tools/2020-05-18-frp-remote.md' },
            { text: 'Adobe', link: '/tools/2020-06-30-pr-ae-c4d.md' },
            { text: 'ffmpeg', link: '/tools/2020-08-15-ffmpeg.md' },
            { text: '联通宽带', link: '/tools/2020-08-25-public-ip-access-web-server.md' },
            { text: 'douyin', link: '/tools/2020-11-30-douyin-live.md' },
            { text: 'WiFi', link: '/tools/2021-12-19-Wi-Fi-Protected.md' },
            { text: 'Morse code', link: '/tools/2023-01-04-Morse-code.md' },
          ]
        }
      ],
      '/web/': [
        {
          text: '开头',
          items: [
            { text: 'NPM', link: '/web/2017-03-07-npm' },
            { text: 'Yarn', link: '/web/2017-03-08-yarn' },
            { text: 'electron', link: '/web/2018-09-09-electron.md' },
            { text: 'typescript', link: '/web/2019-06-09-typescript.md' },
            { text: 'vue', link: '/web/2020-09-08-vue.md' },
            { text: 'electron&vue', link: '/web/2020-09-09-electron-vue.md' },
            { text: 'nodejs', link: '/web/2020-10-19-nodejs.md' },
            { text: 'linkimport', link: '/web/2020-12-21-link-import.md' },
            { text: 'httpcode', link: '/web/2022-06-08-http-response-status-codes.md' },
            { text: '离线部署 elementui', link: '/web/2022-07-07-element-ui.md' },
          ]
        }
      ],
      '/microsoft/': [
        {
          text: 'Microsoft',
          items: [
            { text: 'kms激活', link: '/microsoft/2018-12-11-kms.md' },
            { text: 'ffmpeg', link: '/microsoft/2016-12-08-ffmpeg-compile-in-windows10-and-vs2015.md' },
            { text: 'nuget', link: '/microsoft/2016-12-19-create-and-publish-a-package-for-nuget.md' },
            { text: 'bat', link: '/microsoft/2017-03-07-bat.md' },
            { text: 'vlmcsd kms', link: '/microsoft/2018-12-11-vlmcsd-kms.md' },
            { text: 'Windows 10 Install', link: '/microsoft/2019-03-01-install-windows-via-re-without-any-other-external-tools.md' },
            { text: 'cmd命令', link: '/microsoft/2019-10-15-cmd.md' },
            { text: '远程调试', link: '/microsoft/2020-03-20-msdn-ide-debugger-remote.md' },
            { text: '发布dotnetcore', link: '/microsoft/2020-04-02-dotnetcore-publish.md' },
            { text: 'nsis', link: '/microsoft/2020-07-20-wpf-nsis.md' },
            { text: 'nsis自定义', link: '/microsoft/2020-07-23-nsis-duilib.md' },
            { text: 'hardware', link: '/microsoft/2020-08-27-hardware-info.md' },
            { text: 'inno', link: '/microsoft/2020-09-08-wpf-inno.md' },
            { text: '下载Win10', link: '/microsoft/2020-09-27-fast-download-winos.md' },
            { text: '离线下载visual studio', link: '/microsoft/2022-04-18-vs-offline-layout.md' },
          ]
        }
      ],
      '/datastructure/': [
        {
          text: 'datastructure',
          items: [
            { text: '原码补码反码', link: '/datastructure/2021-02-23-byte-code.md' },
            { text: 'UDP', link: '/datastructure/2022-04-17-udp.md' },
            { text: '算法', link: '/datastructure/2024-04-09-algorithm.md' },
          ]
        }
      ],
      '/python/': [
        {
          text: 'Python',
          items: [
            { text: '练习', link: '/python/2016-11-05-python-practice.md' },
            { text: '配置python', link: '/python/2016-11-17-python-config.md' },
            { text: '配置Vscode', link: '/python/2019-10-17-vscode-config.md' }
          ]
        }
      ],
      '/python/django/': [
        {
          text: 'django',
          items: [
            { text: '配置', link: '/python/django/2020-04-15-vscode-django.md' },
          ]
        }
      ],
      '/python/flask/': [
        {
          text: 'flask',
          items: [
            { text: '配置', link: '/python/flask/2019-05-06-learning-flask' },
          ]
        }
      ],
      '/mypost/': [
        {
          text: '私人属地',
          items: [
            { text: '私人属地', link: '/mypost/' },
            { text: '数学', link: '/mypost/2010-08-07-math-thinking.md' },
            { text: '数学100', link: '/mypost/2010-08-07-primary-math-100.md' },
            { text: '感想', link: '/mypost/2016-10-28-self-post.md' },
            { text: '护发', link: '/mypost/2017-03-07-my-hair-needs-care.md' },
            { text: '日记', link: '/mypost/2017-03-07-self-diary.md' },
            { text: '教育', link: '/mypost/2017-03-07-teacher.md' },
            { text: '青海湖', link: '/mypost/2017-12-16-cycle-lake-ride-a-bike.md' },
            { text: '数学公式', link: '/mypost/2020-09-02-primary-math-cmd.md' },
            { text: '书籍与人物', link: '/mypost/2020-10-01-books-videos.md' },
            { text: '数学思维', link: '/mypost/2021-08-07-math-thinking.md' },
            { text: '英语语法', link: '/mypost/2022-05-04-primary-english.md' },
            { text: '面试', link: '/mypost/2022-05-10-interview.md' },
            { text: '育儿教育', link: '/mypost/2023-06-25-teacher-baby.md' },
            { text: '美食', link: '/mypost/2024-03-25-eating.md' },
            { text: '音乐', link: '/mypost/2024-03-26-music.md' },
          ]
        }
      ],
      '/database/': [
        {
          text: 'database',
          items: [
            { text: 'mysql', link: '/database/mysql/2020-04-12-manual-install-mysql-server.md' },
            { text: 'oracle', link: '/database/oracle/2021-03-15-navicat-oracle.md' },
          ]
        }
      ],
      '/about/': [
        {
          text: 'about', link: '/about'
        }
      ]
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present androllen'
    }
  }
})
