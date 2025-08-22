<script setup lang="ts">
</script>

<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <span class="text">
          sv:<span id="busuanzi_value_site_pv" class="font-bold"></span>
        </span>
        <span class="text">
          pv:<span id="busuanzi_value_page_pv" class="font-bold"></span>
        </span>
        <span class="text">
          uv:<span id="busuanzi_value_site_uv" class="font-bold"></span>
        </span>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin-top: 0px;
  margin-bottom: 0px;
  min-height: 32px;
}

.container {
  background-color: #1b1b1f;
  border-radius: 8px;
  width: 100%;
  min-height: 32px;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: flex;
  /* 启用 Flexbox 布局 */
  min-height: 32px;
  justify-content: center;
  /* 让所有 flex 项目在主轴（水平方向）上居中排列 */
  align-items: center;
  /* 让所有 flex 项目在交叉轴（垂直方向）上居中对齐 */
  gap: 5px;
}

.text {
  font-size: .825rem;
  line-height: 1.25rem;
}
</style>