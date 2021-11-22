import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty, coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';

@Component({
  selector: 'c-progress',
  template: '<ng-content></ng-content>'
})
export class ProgressComponent {

  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_thin: BooleanInput;
  static ngAcceptInputType_white: BooleanInput;

  /**
   * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
   * @type number
   */
  @Input()
  set height(value: number) {
    this._height = coerceNumberProperty(value);
  }
  get height() {
    return this._height;
  }
  private _height: number = 0;

  /**
   * Displays thin progress.
   * @type boolean
   */
  @Input()
  set thin(value: boolean) {
    this._thin = coerceBooleanProperty(value);
  }
  get thin(): boolean {
    return this._thin;
  }
  private _thin = false;

  /**
   * Change the default color to white.
   * @type boolean
   */
  @Input()
  get white(): boolean {
    return this._white;
  }
  set white(value: boolean) {
    this._white = coerceBooleanProperty(value);
  }
  private _white = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      progress: true,
      'progress-thin': this.thin,
      'progress-white': this.white
    };
  }

  @HostBinding('style.height')
  get hostStyle(): any {
    return !!this.height ? `${this.height}px` : '';
  }
}
