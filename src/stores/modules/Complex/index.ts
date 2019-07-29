import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { namespace } from "vuex-class";

export const StateConnector = namespace("complex");
export type VisiblePayload = { visible: boolean }; // https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types/37233777#37233777
export type VisibleMutation = (payload: VisiblePayload) => void;

/**
 * @see https://github.com/ktsn/vuex-class/issues/40
 * @see https://github.com/championswimmer/vuex-module-decorators
 * @see https://github.com/michaelolof/vuex-class-component
 */
@Module({ namespaced: true })
export default class Complex extends VuexModule {
  public leftDrawerVisible: boolean = true;
  public rightDrawerVisible: boolean = true;
  public leftTempDrawerVisible: boolean = false;
  public rightTempDrawerVisible: boolean = false;

  @Mutation
  public setLeftDrawerVisible(payload: VisiblePayload) {
    this.leftDrawerVisible = payload.visible;
  }

  @Mutation
  public setRightDrawerVisible(payload: VisiblePayload) {
    this.rightDrawerVisible = payload.visible;
  }

  @Mutation
  public setLeftTempDrawerVisible(payload: VisiblePayload) {
    this.leftTempDrawerVisible = payload.visible;
  }

  @Mutation
  public setRightTempDrawerVisible(payload: VisiblePayload) {
    this.rightTempDrawerVisible = payload.visible;
  }
}
