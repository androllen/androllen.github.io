<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";
import DefaultTheme from "vitepress/theme";
import backtotop from "./components/docbacktop.vue";

const { Layout } = DefaultTheme;
const router = useRouter();
const msg_page_pv = ref("");
const msg_site_pv = ref("");
const msg_site_uv = ref("");

// Setup medium zoom with the desired options
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });

  const messageElement = document.querySelector(".message");
  // 第一次运行时存储原始文本
  if (!messageElement.dataset.originalText) {
    messageElement.dataset.originalText = messageElement.textContent;
  }
  // const originalText = "Released under the MIT License.";
  let jsct = localStorage.getItem("visitorCountData");
  let jsonObj = JSON.parse(jsct);
  msg_page_pv.value = jsonObj["page_pv"];
  msg_site_pv.value = jsonObj["site_pv"];
  msg_site_uv.value = jsonObj["site_uv"];

  // 使用存储的原始文本
  messageElement.innerHTML = `${messageElement.dataset.originalText}<br>tpv:${msg_page_pv.value} tv:${msg_site_pv.value} stv:${msg_site_uv.value}`;

};

// Apply medium zoom on load
onMounted(setupMediumZoom);

// Subscribe to route changes to re-apply medium zoom effect
router.onAfterRouteChange = setupMediumZoom;
</script>

<template>
  <Layout v-bind="$attrs">
    <template #doc-footer-before>
      <backtotop />
    </template>
  </Layout>
</template>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}
</style>