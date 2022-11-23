import { createI18n } from "vue-i18n";
import uz from "~/json/uz.json";
import en from "~/json/en.json";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "uz",
  globalInjection: true,
  silentFallbackWarn: true,
  compositionOnly: false,
  fallbackLocale: "uz",
  messages: {
    uz,
    en,
  },
});

export default i18n;
