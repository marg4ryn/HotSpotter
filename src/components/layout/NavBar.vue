<template>
  <nav class="nav-bar">
    <NavBarItem
      v-for="item in items"
      :key="item.label"
      :label="item.label"
      :icon="item.icon"
      :to="item.to"
      :active="$route.path === item.to"
    />
  </nav>
</template>

<script setup lang="ts">
  import NavBarItem from '../common/NavBarItem.vue'

  const items = [
    { label: 'Summary', icon: '/icons/loupe.png', to: '/' },
    { label: 'Code Health', icon: '/icons/cardiogram.png', to: '/code-health' },
    { label: 'Change Coupling', icon: '/icons/coupling.png', to: '/change-coupling' },
    { label: 'Developers', icon: '/icons/group.png', to: '/developers' },
    { label: 'Mappings', icon: '/icons/mapping.png', to: '/mappings' },
  ]
</script>

<style scoped lang="scss">
  .nav-bar {
    width: 100%;
    background-color: var(--color-bg-primary);
    color: var(--color-on-bg-primary);
    display: flex;
    align-items: center;
    padding: 0 20px;
    flex-shrink: 0;
  }
</style>
