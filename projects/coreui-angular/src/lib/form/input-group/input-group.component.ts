import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-input-group',
  template: '<ng-content />',
  host: { class: 'input-group', '[class]': 'hostClasses()' }
})
export class InputGroupComponent {
  /**
   * Size the component small or large.
   */
  readonly sizing = input<'' | 'sm' | 'lg' | string>();

  readonly hostClasses = computed(() => {
    const sizing = this.sizing();
    return {
      'input-group': true,
      [`input-group-${sizing}`]: !!sizing
    } as Record<string, boolean>;
  });
}
