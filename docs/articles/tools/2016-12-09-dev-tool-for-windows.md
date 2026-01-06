---
title: 开发工具 & 官网 
date: 2016-12-09 15:09:33
tags: official dev tools
categories: 工具
outline: deep
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import {   
  browserUtility,
  databaseUtility,
  remoteUtility,
  searchUtility,
  usbFormattingUtility,
  textEditorUtility,
  codeManageUtility,
  clearUtility,
  captureDataUtility,
  downloadUtility,
  imagesUtility,
  videoMusicUtility,
  graphicsLibrary,
  protectDotNetUtility,
  devOfficial,
  regexUtility,
  webApiUtility,
  snipasteUtility,
  vscodeAutoComplete,
  webCdnUtility,
  wpfPackageUtility } from '../../_data/tools'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>软件工具</template>
    <template #lead>
      平时使用频率最高的软件工具
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>浏览器工具</template>
    <template #lead>轻量、高效的网页浏览工具，满足日常上网和开发调试需求</template>
    <template #members>
      <VPTeamMembers size="small" :members="browserUtility" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>数据库工具</template>
    <template #lead>可视化、多功能的数据库管理与开发工具，适配多种数据库类型</template>
    <template #members>
      <VPTeamMembers size="small" :members="databaseUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 远程连接工具 -->
  <VPTeamPageSection>
    <template #title>远程连接工具</template>
    <template #lead>安全、便捷的远程服务器连接与文件传输工具</template>
    <template #members>
      <VPTeamMembers size="small" :members="remoteUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 搜索工具 -->
  <VPTeamPageSection>
    <template #title>搜索工具</template>
    <template #lead>秒级检索本地文件，大幅提升文件查找效率的实用工具</template>
    <template #members>
      <VPTeamMembers size="small" :members="searchUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 刻盘工具 -->
  <VPTeamPageSection>
    <template #title>刻盘工具</template>
    <template #lead>快速制作可引导USB启动盘，适配各类系统安装场景</template>
    <template #members>
      <VPTeamMembers size="small" :members="usbFormattingUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 文本编辑工具 -->
  <VPTeamPageSection>
    <template #title>文本编辑工具</template>
    <template #lead>轻量、高性能的代码与文本编辑工具，支持丰富扩展</template>
    <template #members>
      <VPTeamMembers size="small" :members="textEditorUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 代码管理工具 -->
  <VPTeamPageSection>
    <template #title>代码管理工具</template>
    <template #lead>分布式版本控制系统，高效管理代码版本与团队协作</template>
    <template #members>
      <VPTeamMembers size="small" :members="codeManageUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 清理垃圾工具 -->
  <VPTeamPageSection>
    <template #title>清理垃圾工具</template>
    <template #lead>分析硬盘占用、清理系统垃圾，优化Windows系统性能</template>
    <template #members>
      <VPTeamMembers size="small" :members="clearUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 抓包工具 -->
  <VPTeamPageSection>
    <template #title>抓包工具</template>
    <template #lead>网络数据包分析、HTTP/HTTPS抓包，助力网络调试与安全测试</template>
    <template #members>
      <VPTeamMembers size="small" :members="captureDataUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 下载工具 -->
  <VPTeamPageSection>
    <template #title>下载工具</template>
    <template #lead>多协议、多线程的下载工具，覆盖命令行与桌面端使用场景</template>
    <template #members>
      <VPTeamMembers size="small" :members="downloadUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 镜像工具 -->
  <VPTeamPageSection>
    <template #title>镜像工具</template>
    <template #lead>系统镜像下载、驱动更新，满足系统安装与硬件适配需求</template>
    <template #members>
      <VPTeamMembers size="small" :members="imagesUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 视频和音乐工具 -->
  <VPTeamPageSection>
    <template #title>视频和音乐工具</template>
    <template #lead>音视频编解码、格式转换，跨平台处理音视频文件</template>
    <template #members>
      <VPTeamMembers size="small" :members="videoMusicUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 图形库 -->
  <VPTeamPageSection>
    <template #title>图形库</template>
    <template #lead>2D图形渲染、数学动画制作，支撑图形化开发需求</template>
    <template #members>
      <VPTeamMembers size="small" :members="graphicsLibrary" />
    </template>
  </VPTeamPageSection>

  <!-- 加壳工具 -->
  <VPTeamPageSection>
    <template #title>加壳工具</template>
    <template #lead>保护.NET应用程序，防止代码被逆向与篡改</template>
    <template #members>
      <VPTeamMembers size="small" :members="protectDotNetUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 官方开发站点工具 -->
  <VPTeamPageSection>
    <template #title>官方开发站点</template>
    <template #lead>编程语言、开发环境、包管理等核心开发资源的官方站点</template>
    <template #members>
      <VPTeamMembers size="small" :members="devOfficial" />
    </template>
  </VPTeamPageSection>

  <!-- 正则工具 -->
  <VPTeamPageSection>
    <template #title>正则工具</template>
    <template #lead>可视化编写、调试正则表达式，提升正则开发效率</template>
    <template #members>
      <VPTeamMembers size="small" :members="regexUtility" />
    </template>
  </VPTeamPageSection>

  <!-- Web API 调试工具 -->
  <VPTeamPageSection>
    <template #title>Web API 调试工具</template>
    <template #lead>API调试、管理、文档生成，助力接口开发与测试</template>
    <template #members>
      <VPTeamMembers size="small" :members="webApiUtility" />
    </template>
  </VPTeamPageSection>

  <!-- 截图工具 -->
  <VPTeamPageSection>
    <template #title>截图工具</template>
    <template #lead>截图、录屏、OCR识别，满足多样化的屏幕内容处理需求</template>
    <template #members>
      <VPTeamMembers size="small" :members="snipasteUtility" />
    </template>
  </VPTeamPageSection>

  <!-- VSCode 自动补全工具 -->
  <VPTeamPageSection>
    <template #title>VSCode 自动补全工具</template>
    <template #lead>智能代码补全，提升VSCode开发效率的辅助工具</template>
    <template #members>
      <VPTeamMembers size="small" :members="vscodeAutoComplete" />
    </template>
  </VPTeamPageSection>

  <!-- 网页加速工具 -->
  <VPTeamPageSection>
    <template #title>网页加速工具</template>
    <template #lead>前端开源项目CDN加速服务，提升网页加载速度</template>
    <template #members>
      <VPTeamMembers size="small" :members="webCdnUtility" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>WPF 打包工具</template>
    <template #lead>制作Windows安装包，适配WPF应用程序的发布部署</template>
    <template #members>
      <VPTeamMembers size="small" :members="wpfPackageUtility" />
    </template>
  </VPTeamPageSection>

</VPTeamPage>