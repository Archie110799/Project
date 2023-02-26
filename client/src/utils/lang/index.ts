import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import vn from './vn.json';
import ja from './ja.json';

const resources = {
  en: {
    translation: en,
  },
  vn: {
    translation: vn,
  },
  ja: {
    translation: ja,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'ja',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
