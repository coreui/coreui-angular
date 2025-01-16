import { Component, computed, inject } from '@angular/core';
import { ProgressBarDirective } from './progress-bar.directive';

@Component({
  selector: 'c-progress-bar',
  template: '<ng-content />',
  hostDirectives: [
    {
      directive: ProgressBarDirective,
      inputs: ['animated', 'color', 'max', 'role', 'value', 'variant']
    }
  ],
  host: { class: 'progress-bar', '[class]': 'hostClasses()' }
})
export class ProgressBarComponent {
  readonly #progressBarDirective: ProgressBarDirective | null = inject(ProgressBarDirective, { optional: true });

  readonly hostClasses = computed(() => {
    const animated = this.#progressBarDirective?.animated();
    const color = this.#progressBarDirective?.color();
    const variant = this.#progressBarDirective?.variant();
    return {
      'progress-bar': true,
      'progress-bar-animated': !!animated,
      [`progress-bar-${variant}`]: !!variant,
      [`bg-${color}`]: !!color
    } as Record<string, boolean>;
  });
}
