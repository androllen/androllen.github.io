---
layout: home

hero:
  name: is androllen' blogs
  text: awesome-front-end-world
  tagline: 一个独有的小站
  actions:
    # - theme: brand
    #   text: 什么是 VitePress?
    #   link: https://github.com/vuejs/vitepress
    - theme: alt
      text: 快速开始
      link: /web/2017-03-07-npm
    - theme: alt
      text: GitHub
      link: https://github.com/androllen
  image:
      src: https://vitepress.dev/vitepress-logo-large.webp
      alt: VitePress

features:
  - icon: 🕛
    title: 专注日记
    details: 每天花点时间，很容易就能写下当天最有意义的事，做成一份属于你的日记记录。
  - icon: 🌻
    title: 享受牛马之外的闲散时光
    details: 即便生活忙碌、工作繁重，也要珍惜并安排好属于自己的放松时间，保持身心平衡。
  - icon: 📝
    title: 学习使人进步
    details: 它提醒我们：无论年龄多大、起点多低，只要愿意学习，就永远有机会变得更好。
  - icon: 🚀
    title: 时间过的真是快啊！
    details: 日月如梭，光阴似箭。不要总是追忆过去或者幻想未来，而是要学会珍惜此刻在你身边的人。因为有些人，一旦错过，就再也回不来了。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>