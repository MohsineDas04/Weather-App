import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ar } from "./ar";
import { en } from "./en";
i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      debug: true,
      fallbackLng: "en",
      interpolation: {
         escapeValue: false,
      },
      resources: {
         en: {
            translation: en,
         },
         ar: {
            translation: ar,
         },
      },
   });

export default i18n;
