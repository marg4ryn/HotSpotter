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
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const items = [
    { label: t('navbar.summary'), icon: '/icons/loupe.png', to: '/' },
    { label: t('navbar.code-health'), icon: '/icons/cardiogram.png', to: '/code-health' },
    { label: t('navbar.change-coupling'), icon: '/icons/coupling.png', to: '/change-coupling' },
    { label: t('navbar.developers'), icon: '/icons/group.png', to: '/developers' },
    { label: t('navbar.mappings'), icon: '/icons/mapping.png', to: '/mappings' },
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
