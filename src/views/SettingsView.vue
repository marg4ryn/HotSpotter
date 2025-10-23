<template>
  <InDevelopmentLabel />
</template>

<script setup lang="ts">
  import InDevelopmentLabel from '@/components/layout/InDevelopmentLabel.vue'
  import { onMounted } from 'vue'
  import { useUIStore } from '@/stores/uiStore'

  const uiStore = useUIStore()

  onMounted(() => {
    uiStore.isNavBarVisible = false
  })
</script>

<style scoped></style>
