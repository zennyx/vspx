import { Store } from "vuex";

import Complex from "@/stores/modules/Complex";

export default new Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    complex: Complex
  }
});
