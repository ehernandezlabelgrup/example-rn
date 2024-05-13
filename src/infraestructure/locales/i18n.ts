// src/infrastructure/locales/i18n.ts
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import HttpApi from 'i18next-http-backend'

i18n
  .use(HttpApi) // Usa Http backend para cargar traducciones
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    supportedLngs: ['en', 'es'], // Idiomas soportados
    fallbackLng: 'es', // Idioma de respaldo

    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: 'https://example.com/locales/{{lng}}', // URL de tu API
    },
    react: {
      useSuspense: false, // Desactiva Suspense para evitar warnings en React Native
    },
  })

export default i18n
