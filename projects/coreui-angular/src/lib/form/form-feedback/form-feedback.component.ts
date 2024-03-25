import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-form-feedback',
  template: '<ng-content />',
  standalone: true
})
export class FormFeedbackComponent {

  /**
   * If your form layout allows it, you can display validation feedback in a styled tooltip.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) tooltip: string | boolean = false;

  /**
   * Set component validation state to valid.
   * @type boolean
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
