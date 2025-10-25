<template>
  <h1 class="screen-header">{{ label }}</h1>
</template>

<script setup lang="ts">
  defineProps<{ label: string }>()
</script>

<style lang="scss" scoped>
  .screen-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8em;
    font-weight: 400;
    color: var(--color-on-bg-secondary);
    margin: 8px;
    text-align: center;
  }
</style>
