import Vue, { VNode } from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  public render(): VNode {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}
