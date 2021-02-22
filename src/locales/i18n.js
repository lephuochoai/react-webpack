import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './vi.json'
import en from './en.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      vi: {
        translation: vi
      }
    },
    lng: 'vi',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
