<script setup lang="ts">
  import { computed } from 'vue'
  import { useUIStore } from '@/stores/uiStore'

  import AppBar from '@/components/layout/AppBar.vue'
  import NavBar from '@/components/layout/NavBar.vue'
  import AppFooter from '@/components/layout/AppFooter.vue'
  import MeshGradient from '@/components/layout/MeshGradient.vue'
  import WelcomeView from './views/WelcomeView.vue'

  const uiStore = useUIStore()
  const isNavBarVisible = computed(() => uiStore.isNavBarVisible)

  const contentMinHeight = computed(() => {
    const appBarHeight = 80
    const navBarHeight = isNavBarVisible.value ? 50 : 0
    return `calc(100vh - ${appBarHeight + navBarHeight}px)`
  })
</script>

<template>
  <div class="app">
    <MeshGradient color1="#0d1117" color2="#28abf2" class="background-gradient" />
    <AppBar />
    <NavBar v-if="isNavBarVisible" />
    <div class="content" :style="{ minHeight: contentMinHeight }">
      <WelcomeView />
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
  }

  .content {
    @include flex-center;
    flex: 1 0 auto;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  AppFooter {
    flex-shrink: 0;
  }
</style>
