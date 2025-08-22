import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import MyLayout from './layout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout, // 应用布局组件
  enhanceApp({ app, router }) {
    // app.component('global-home-meta', global)//全局组件

    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
}