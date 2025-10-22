import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isNavBarVisible = ref(true)
  return { isNavBarVisible }
})
