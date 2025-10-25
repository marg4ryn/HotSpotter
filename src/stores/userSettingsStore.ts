import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSettingsStore = defineStore('userSettings', () => {
  const selectedColor = ref('#bc1922')
  const selectedTheme = ref('dark')

  return { selectedColor, selectedTheme }
})
