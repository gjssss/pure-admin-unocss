<script setup lang="ts">
import { useNav } from '@/layout/hooks/useNav'
import { ref, watch } from 'vue'

const screenIcon = ref()
const { toggle, isFullscreen, Fullscreen, ExitFullscreen } = useNav()

isFullscreen.value = !!(
  document.fullscreenElement
  || document.webkitFullscreenElement
  || document.mozFullScreenElement
  || document.msFullscreenElement
)

watch(
  isFullscreen,
  (full) => {
    screenIcon.value = full ? ExitFullscreen : Fullscreen
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <span class="fullscreen-icon navbar-bg-hover" @click="toggle">
    <div v-if="isFullscreen" class="i-ri-fullscreen-exit-fill c-text_color_primary" />
    <div v-else class="i-ri-fullscreen-fill c-text_color_primary" />
  </span>
</template>
