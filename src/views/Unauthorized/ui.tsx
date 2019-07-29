import { VNode } from "vue";
import Component, { mixins } from "vue-class-component";

import Api from "@/views/Unauthorized/api";

@Component
export default class Ui extends mixins(Api) {
  public render(): VNode {
    return <div>401</div>;
  }
}
