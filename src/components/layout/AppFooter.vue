<template>
  <footer class="footer">
    <div class="footer-left">2025 {{ t('appname') }}</div>
    <div class="footer-right">
      <a href="/about">{{ t('footer.about') }}</a>
      <a href="/attributes">{{ t('footer.attributes') }}</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--color-bg-secondary);
    color: var(--color-on-bg-secondary);
    font-size: 14px;

    a {
      color: var(--color-on-bg-secondary);
      text-decoration: none;
      margin-left: 15px;
      transition: color 0.2s;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
</style>
