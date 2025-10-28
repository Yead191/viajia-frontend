"use client";

import i18next, { i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const initI18n = async (): Promise<i18n> => {
  if (!i18next.isInitialized) {
    await i18next
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        supportedLngs: ["en", "es"],
        fallbackLng: "en",
        defaultNS: "common",
        ns: ["common"],
        interpolation: { escapeValue: false },
        detection: {
          order: ["cookie", "localStorage", "htmlTag", "navigator"],
          caches: ["cookie"],
        },
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      });
  }
  return i18next;
};

initI18n(); // initialize immediately

export default i18next;
