import { VNode } from "vue";
import Component, { mixins } from "vue-class-component";

import Api from "@/commons/components/layouts/Complex/api";

@Component
export default class Ui extends mixins(Api) {
  public render(): VNode {
    return (
      <v-app id="complex">
        <v-navigation-drawer
          app
          fixed
          right
          clipped
          v-model={this.rightDrawerVisible}
        >
          <v-list dense>
            <v-list-tile onclick={this.onRightDrawerTileClick}>
              <v-list-tile-action>
                <v-icon>fa fa-check</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  Toggle right-aside, {this.$i18n.t("message.hello", ["hello"])}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-right>
          <v-toolbar-side-icon onclick={this.onToolbarLeftIconClick} />
          <v-toolbar-title>Brand</v-toolbar-title>
          <v-spacer />
          <v-toolbar-side-icon onclick={this.onToolbarRightIconClick} />
        </v-toolbar>
        <v-navigation-drawer app fixed v-model={this.leftDrawerVisible}>
          <v-list dense>
            <v-list-tile onclick={this.onLeftDrawerTileClick}>
              <v-list-tile-action>
                <v-icon>fa fa-check</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Toggle left-aside</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        {/*
         * <v-navigation-drawer temporary fixed value={this.leftTempDrawerVisible} { ...{on: { input: this.onInput }}} />
         * is equivalent to the element shown below. And the method "onInput" is：
         *
         * public onInput(value: any): void {
         *   this.leftTempDrawerVisible = value;
         * }
         *
         * Note: the attribute "v-model" can also be written as "vModel".
         */}
        <v-navigation-drawer
          temporary
          fixed
          v-model={this.leftTempDrawerVisible}
        />
        <v-content>
          <router-view />
        </v-content>
        <v-navigation-drawer
          temporary
          fixed
          right
          v-model={this.rightTempDrawerVisible}
        />
        <v-footer app>
          <span>Footer</span>
          <v-spacer />
          <span>&copy; 2019</span>
        </v-footer>
      </v-app>
    );
  }
}
