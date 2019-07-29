import Vue from "vue";
import Vuetify, {
  VApp,
  VContainer,
  VContent,
  VFooter,
  VIcon,
  VLayout,
  VList,
  VListTile,
  VListTileAction,
  VListTileContent,
  VListTileTitle,
  VNavigationDrawer,
  VSpacer,
  VToolbar,
  VToolbarSideIcon,
  VToolbarTitle
} from "vuetify/lib";
import zhHans from "vuetify/src/locale/zh-Hans";

import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VContainer,
    VContent,
    VFooter,
    VIcon,
    VLayout,
    VList,
    VListTile,
    VListTileAction,
    VListTileContent,
    VListTileTitle,
    VNavigationDrawer,
    VSpacer,
    VToolbar,
    VToolbarSideIcon,
    VToolbarTitle
  },
  iconfont: "fa",
  lang: {
    locales: { zhHans },
    current: "zh-Hans"
  },
  options: {
    customProperties: true
  }
});
