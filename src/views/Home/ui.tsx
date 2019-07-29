import { VNode } from "vue";
import Component, { mixins } from "vue-class-component";

import Api from "@/views/Home/api";

@Component
export default class Ui extends mixins(Api) {
  public render(): VNode {
    return <div>Home</div>;
  }
}
