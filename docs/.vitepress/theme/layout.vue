<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";
import DefaultTheme from "vitepress/theme";
import backtotop from "./components/docbacktop.vue";
import { setCountShow } from "./components/tools";

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

  setCountShow();
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