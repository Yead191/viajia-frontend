import i18n from "i18next";
import Backend from "i18next-fs-backend";
import { initReactI18next } from "react-i18next";
import path from "path";

export async function initI18n(lng = "en") {
  if (!i18n.isInitialized) {
    await i18n
      .use(Backend)
      .use(initReactI18next)
      .init({
        lng,
        fallbackLng: "en",
        ns: ["common"],
        defaultNS: "common",
        interpolation: { escapeValue: false },
        backend: {
          loadPath: path.join(process.cwd(), "locales/{{lng}}/{{ns}}.json"),
        },
      });
  } else {
    await i18n.changeLanguage(lng);
  }
  return i18n;
}
