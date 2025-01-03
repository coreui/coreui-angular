import { booleanAttribute, Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-form-feedback',
  template: '<ng-content />',
  host: { '[class]': 'hostClasses()' }
})
export class FormFeedbackComponent {
  /**
   * If your form layout allows it, you can display validation feedback in a styled tooltip.
   * @default false
   */
  readonly tooltip = input(false, { transform: booleanAttribute });

  /**
   * Set component validation state to valid.
   * @default undefined
   */
  readonly valid = input<boolean>();

  readonly hostClasses = computed(() => {
    const status = this.valid() === true ? 'valid' : 'invalid';
    const type = this.tooltip() ? 'tooltip' : 'feedback';
    return {
      [`${status}-${type}`]: true
      // 'valid-feedback': valid === true && !tooltip,
      // 'valid-tooltip': valid === true && tooltip,
      // 'invalid-feedback': valid !== true && !tooltip,
      // 'invalid-tooltip': valid !== true && tooltip
    };
  });
}
