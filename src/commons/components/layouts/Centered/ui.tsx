import { VNode } from "vue";
import Component, { mixins } from "vue-class-component";

import Api from "@/commons/components/layouts/Centered/api";

@Component
export default class Ui extends mixins(Api) {
  public render(): VNode {
    return (
      <v-app id="centered">
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <router-view />
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    );
  }
}
