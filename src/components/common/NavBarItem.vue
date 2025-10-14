<template>
  <div class="nav-item-wrapper" @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- Główny link -->
    <RouterLink :to="to" class="nav-item" :class="{ 'nav-item--active': active }">
      <img v-if="icon" :src="icon" class="nav-item__icon" alt="" />
      <span class="nav-item__text">{{ label }}</span>
    </RouterLink>

    <!-- Podmenu -->
    <ul v-if="submenu && submenu.length" class="submenu" :class="{ 'submenu--visible': hover }">
      <li v-for="item in submenu" :key="item.label">
        <RouterLink :to="item.to">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  interface SubmenuItem {
    label: string
    to: string
  }

  defineProps<{
    label: string
    icon?: string
    to: string
    active: boolean
    submenu?: SubmenuItem[]
  }>()

  const hover = ref(false)
</script>

<style lang="scss" scoped>
  .nav-item-wrapper {
    position: relative;
    display: inline-block;

    .nav-item {
      @include flex-center;
      gap: 10px;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      color: var(--color-on-bg-primary);
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      min-width: 200px;
      max-width: 250px;

      &:hover {
        background: linear-gradient(
          to right,
          color-mix(in srgb, var(--color-primary) 50%, transparent) 0%,
          transparent 30%,
          transparent 70%,
          color-mix(in srgb, var(--color-primary) 50%, transparent) 100%
        );
        font-weight: 600;
      }

      &__icon {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      &--active {
        font-weight: 600;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 6px;
          width: 94%;
          height: 3px;
          background-color: var(--color-primary);
          border-radius: 2px;
        }
      }
    }

    .submenu {
      position: absolute;
      top: 100%;
      left: 0;
      margin: 0;
      padding: 5px 0;
      list-style: none;
      background-color: var(--color-bg);
      border-radius: 8px;
      min-width: 180px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;

      li {
        padding: 8px 16px;

        a {
          color: var(--color-on-bg-primary);
          text-decoration: none;

          &:hover {
            color: var(--color-primary);
          }
        }
      }

      &--visible {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
</style>
