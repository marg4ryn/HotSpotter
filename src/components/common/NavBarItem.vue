<template>
  <RouterLink :to="to" class="nav-item" :class="{ 'nav-item--active': active }">
    <img v-if="icon" :src="icon" class="nav-item__icon" alt="" />
    <span class="nav-item__text">{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
  defineProps<{
    label: string
    icon?: string
    to: string
    active: boolean
  }>()
</script>

<style lang="scss" scoped>
  .nav-item {
    @include flex-center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      font-weight 0.3s ease;
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
</style>
