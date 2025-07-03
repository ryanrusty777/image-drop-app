// app/i18n/client-init.ts
'use client'; //

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@/public/locales/en/common.json';
import jaCommon from '@/public/locales/ja/common.json';
import huCommon from '@/public/locales/hu/common.json';
import deCommon from '@/public/locales/de/common.json';

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en', 'ja', 'hu', 'de'],
      resources: {
        en: { common: enCommon },
        ja: { common: jaCommon },
        hu: { common: huCommon },
        de: { common: deCommon },
      },
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
