import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: "ZH", // 預設語言
  fallbackLocale: "ZH",
  messages: {
    EN: en,
    ZH: zh,
  },
  returnObjects: true,
});

export default i18n;
