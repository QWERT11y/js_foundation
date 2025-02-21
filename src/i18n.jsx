import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: require('./locales/ru/translation.json') },
    uz: { translation: require('./locales/uz/translation.json') }
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: { escapeValue: false }
});

export default i18n;