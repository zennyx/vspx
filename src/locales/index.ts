import VueI18n from "vue-i18n";

import zhCN from "@/locales/zhCN";

export default new VueI18n({
  locale: "zhHans",
  messages: {
    zhHans: zhCN
  },
  silentFallbackWarn: process.env.NODE_ENV === "production"
});
