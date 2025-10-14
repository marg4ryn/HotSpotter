<template>
  <MeshGradient color1="#ff6b6b" color2="#4dabf7" />
</template>

<script setup lang="ts">
  import MeshGradient from '@/components/common/MeshGradient.vue'
</script>

<style scoped>
  :deep(.mesh-gradient) {
    border-radius: 20px;
    height: 400px;
  }
</style>
