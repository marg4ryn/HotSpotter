import { createI18n } from 'vue-i18n'
import en from './locales/en.json'

const userLocale = navigator.language.split('-')[0]

export const i18n = createI18n({
  legacy: false,
  locale: ['en'].includes(userLocale) ? userLocale : 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
})
