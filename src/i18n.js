import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import pt from "./assets/i18n/pt.json";
import en from "./assets/i18n/en.json";

export default defineComponent({
  setup() {
    const { rt, tm } = useI18n({
      locale: localStorage.getItem("lang") || "pt",
      fallbackLocale: "en",
      messages: {
        pt: pt,
        en: en,
      },
    });
    return { rt, tm };
  },
});
