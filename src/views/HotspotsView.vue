<template>
  <MeshGradient color1="#0d1117" color2="#28abf2" />
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
