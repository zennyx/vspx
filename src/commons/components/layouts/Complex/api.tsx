import Vue from "vue";
import Component from "vue-class-component";

import { StateConnector, VisibleMutation } from "@/stores/modules/Complex";

const { Mutation, State } = StateConnector;

/**
 * @see https://github.com/vuejs/vue-class-component
 */
@Component
export default class Api extends Vue {
  @State("leftDrawerVisible")
  private _leftDrawerVisible: boolean;

  @Mutation("setLeftDrawerVisible")
  private _setLeftDrawerVisible: VisibleMutation;

  @State("rightDrawerVisible")
  private _rightDrawerVisible: boolean;

  @Mutation("setRightDrawerVisible")
  private _setRightDrawerVisible: VisibleMutation;

  @State("leftTempDrawerVisible")
  private _leftTempDrawerVisible: boolean;

  @Mutation("setLeftTempDrawerVisible")
  private _setLeftTempDrawerVisible: VisibleMutation;

  @State("rightTempDrawerVisible")
  private _rightTempDrawerVisible: boolean;

  @Mutation("setRightTempDrawerVisible")
  private _setRightTempDrawerVisible: VisibleMutation;

  public get leftDrawerVisible(): boolean {
    return this._leftDrawerVisible;
  }

  public set leftDrawerVisible(value: boolean) {
    this._setLeftDrawerVisible({
      visible: value
    });
  }

  public get rightDrawerVisible(): boolean {
    return this._rightDrawerVisible;
  }

  public set rightDrawerVisible(value: boolean) {
    this._setRightDrawerVisible({
      visible: value
    });
  }

  public get leftTempDrawerVisible(): boolean {
    return this._leftTempDrawerVisible;
  }

  public set leftTempDrawerVisible(value: boolean) {
    this._setLeftTempDrawerVisible({
      visible: value
    });
  }

  public get rightTempDrawerVisible(): boolean {
    return this._rightTempDrawerVisible;
  }

  public set rightTempDrawerVisible(value: boolean) {
    this._setRightTempDrawerVisible({
      visible: value
    });
  }

  public onToolbarLeftIconClick(event: MouseEvent): void {
    event.stopPropagation();
    this.leftDrawerVisible = !this.leftDrawerVisible;
  }

  public onToolbarRightIconClick(event: MouseEvent): void {
    event.stopPropagation();
    this.rightDrawerVisible = !this.rightDrawerVisible;
  }

  public onLeftDrawerTileClick(event: MouseEvent): void {
    event.stopPropagation();
    this.leftTempDrawerVisible = !this.leftTempDrawerVisible;
  }

  public onRightDrawerTileClick(event: MouseEvent): void {
    event.stopPropagation();
    this.rightTempDrawerVisible = !this.rightTempDrawerVisible;
  }
}
