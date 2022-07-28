import i18n, { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {},
})

export const i18next = i18n
