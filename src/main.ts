import Vue from "vue";

import "@/commons/configs";
import App from "@/App";
import i18n from "@/locales";
import router from "@/routes";
import store from "@/stores";

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
