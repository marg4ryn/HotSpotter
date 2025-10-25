<script setup lang="ts">
  import { computed } from 'vue'
  import { useUIStore } from '@/stores/uiStore'
  import { RouterView } from 'vue-router'
  import { ref, watch } from 'vue'
  import { useUserSettingsStore } from './stores/userSettingsStore'

  import AppBar from '@/components/layout/AppBar.vue'
  import NavBar from '@/components/layout/NavBar.vue'
  import AppFooter from '@/components/layout/AppFooter.vue'
  import MeshGradient from '@/components/layout/MeshGradient.vue'

  const userSettings = useUserSettingsStore()
  const colorPrimary = ref(userSettings.selectedColor)
  const uiStore = useUIStore()
  const isNavBarVisible = computed(() => uiStore.isNavBarVisible)

  const contentMinHeight = computed(() => {
    const appBarHeight = 80
    const navBarHeight = isNavBarVisible.value ? 50 : 0
    return `calc(100vh - ${appBarHeight + navBarHeight}px)`
  })

  watch(
    () => userSettings.selectedColor,
    (newColor) => {
      colorPrimary.value = newColor
      document.documentElement.style.setProperty('--color-primary', newColor)
    }
  )

  watch(
    () => userSettings.selectedTheme,
    (newTheme) => {
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  )
</script>

<template>
  <div class="app">
    <MeshGradient color1="#0d1117" :color2="colorPrimary" class="background-gradient" />
    <AppBar />
    <NavBar v-if="isNavBarVisible" />
    <div class="content" :style="{ minHeight: contentMinHeight }">
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
  .app {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .background-gradient {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  .content {
    @include flex-center;
    flex: 1 0 auto;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 8px;
  }

  AppFooter {
    flex-shrink: 0;
  }
</style>
