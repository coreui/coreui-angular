import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'c-form-feedback',
  template: '<ng-content></ng-content>'
})
export class FormFeedbackComponent {
  static ngAcceptInputType_tooltip: BooleanInput;

  /**
   * If your form layout allows it, you can display validation feedback in a styled tooltip.
   */
  private _tooltip = false;
  @Input()
  set tooltip(value: boolean) {
    this._tooltip = coerceBooleanProperty(value);
  }
  get tooltip(): boolean {
    return this._tooltip;
  }
  /**
   * Set component validation state to valid.
   */
  @Input() valid?: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'valid-feedback': this.valid === true && !this.tooltip,
      'valid-tooltip': this.valid === true && this.tooltip,
      'invalid-feedback': this.valid !== true && !this.tooltip,
      'invalid-tooltip': this.valid !== true && this.tooltip
    };
  }
}
