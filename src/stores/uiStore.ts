import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isNavBarVisible = ref(true)
  return { isNavBarVisible }
})

export const useAppStore = defineStore('app', () => {
  const showLabel = ref(false)
  const analysisTitle = ref('Ruby on Rails x09sdKH89s 12.07.2021 - 06.09.2025')

  return { showLabel, analysisTitle }
})
