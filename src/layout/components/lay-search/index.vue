<script setup lang="ts">
import { useBoolean } from '../../hooks/useBoolean'
import SearchModal from './components/SearchModal.vue'

const { bool: show, toggle } = useBoolean()
function handleSearch() {
  toggle()
}
</script>

<template>
  <div>
    <div
      class="search-container w-[40px] h-[48px] flex-c cursor-pointer navbar-bg-hover"
      @click="handleSearch"
    >
      <div class="i-ri-search-line c-text_color_primary" />
    </div>
    <SearchModal v-model:value="show" />
  </div>
</template>
