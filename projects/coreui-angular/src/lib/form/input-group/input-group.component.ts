import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-input-group',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'input-group', '[class]': 'hostClasses()' }
})
export class InputGroupComponent {
  /**
   * Size the component small or large.
   */
  readonly sizing = input<string | 'sm' | 'lg' | ''>('');

  readonly hostClasses = computed(() => {
    const sizing = this.sizing();
    return {
      'input-group': true,
      [`input-group-${sizing}`]: !!sizing
    } as Record<string, boolean>;
  });
}
