import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "././assets/tailwind.css";
import { createI18n } from "vue-i18n";
import { defaultLocale, messages } from "@/i18n";
import App from "@/App.vue";

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
});

createApp(App).use(i18n).use(store).use(router).mount("#app");
