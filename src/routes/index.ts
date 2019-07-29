import Router from "vue-router";

import asterisk from "@/routes/asterisk";
import error from "@/routes/error";
import home from "@/routes/home";
import root from "@/routes/default";

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  // the matching priority is determined by the order of route definition:
  // the earlier a route is defined, the higher priority it gets.
  // make sure to correctly order your routes so that asterisk ones are at the end
  // when using asterisk routes.
  routes: [root, home, error, asterisk]
});
