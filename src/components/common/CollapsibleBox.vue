<template>
  <div class="collapsible-box">
    <div class="collapsible-header" @click="handleClick">
      <h2 class="collapsible-label">{{ label }}</h2>
      <svg
        :class="{ rotated: !isCollapsed }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>

    <div v-show="!isCollapsed" class="collapsible-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({ name: 'CollapsibleBox' })

  defineProps<{
    label: string
    isCollapsed: boolean
  }>()

  const emit = defineEmits<{
    (e: 'toggle'): void
  }>()

  const handleClick = () => {
    emit('toggle')
  }
</script>

<style lang="scss" scoped>
  .collapsible-box {
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    width: 40%;
    border: 1px solid var(--color-button-secondary);
    background-color: var(--color-bg-secondary);
  }

  .collapsible-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    border: 1px solid var(--color-button-secondary);
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--color-bg-secondary);
    }
  }

  .collapsible-label {
    font-weight: 400;
    font-size: 1.1em;
    color: var(--color-on-bg-secondary);
  }

  .collapsible-header svg {
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    transition: transform 0.3s ease;
    color: var(--color-on-bg-secondary);
  }

  .collapsible-header svg.rotated {
    transform: rotate(180deg);
  }

  .collapsible-content {
    padding: 16px;
  }
</style>
