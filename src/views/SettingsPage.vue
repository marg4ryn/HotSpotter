<template>
  <CloseIconButton />
  <PageHeader label="SETTINGS" />
  <div class="content">
    <CollapsibleGroup
      :items="[
        { label: 'Appearance', slotName: 'first' },
        { label: 'Definitions', slotName: 'second' },
        { label: 'Performance', slotName: 'third' },
        { label: 'Notifications', slotName: 'fourth' },
      ]"
    >
      <template #first>
        <SectionHeader label="Main color" />
        <RadioButtonGroup
          v-model="useUserSettingsStore().selectedColor"
          name="color"
          :options="colors"
        />
        <SectionHeader label="Theme" />
        <RadioButtonGroup
          v-model="useUserSettingsStore().selectedTheme"
          name="theme"
          :options="themes"
        />
        <SectionHeader label="Language" />
      </template>

      <template #second>
        <p>In Development</p>
      </template>

      <template #third>
        <p>In Development</p>
      </template>

      <template #fourth>
        <p>In Development</p>
      </template>
    </CollapsibleGroup>
  </div>
</template>

<script setup lang="ts">
  import { useUserSettingsStore } from '@/stores/userSettingsStore'
  import CloseIconButton from '@/components/common/CloseIconButton.vue'
  import PageHeader from '@/components/common/PageHeader.vue'
  import CollapsibleGroup from '@/components/common/CollapsibleGroup.vue'
  import RadioButtonGroup from '@/components/common/RadioButtonGroup.vue'
  import SectionHeader from '@/components/common/SectionHeader.vue'

  const colors = [
    { label: 'Red', value: '#bc1922' },
    { label: 'Blue', value: '#28abf2' },
  ]
  const themes = [
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' },
    { label: 'System', value: 'system' },
  ]
</script>

<style scoped>
  .content {
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
