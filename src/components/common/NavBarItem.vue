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
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    position: relative;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-primary);
    }

    &__icon {
      width: 22px;
      height: 22px;
      object-fit: contain;
      transition: transform 0.2s ease-in-out;
    }

    &__text {
      font-size: 16px;
      font-weight: 500;
    }

    &--active {
      color: var(--color-primary);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--color-primary);
        border-radius: 2px;
      }

      .nav-item__icon {
        transform: scale(1.1);
      }
    }
  }
</style>
