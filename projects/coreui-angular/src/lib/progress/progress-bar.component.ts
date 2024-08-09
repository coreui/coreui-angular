import { ChangeDetectionStrategy, Component, HostBinding, inject } from '@angular/core';
import { ProgressBarDirective } from './progress-bar.directive';

@Component({
  selector: 'c-progress-bar',
  template: '<ng-content />',
  standalone: true,
  hostDirectives: [
    {
      directive: ProgressBarDirective,
      inputs: ['animated', 'color', 'max', 'role', 'stacked', 'value', 'variant', 'width']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'progress-bar' }
})
export class ProgressBarComponent {
  readonly #progressBarDirective: ProgressBarDirective | null = inject(ProgressBarDirective, { optional: true });

  @HostBinding('class')
  get hostClasses(): Record<string, boolean> {
    const animated = this.#progressBarDirective?.animated;
    const color = this.#progressBarDirective?.color;
    const variant = this.#progressBarDirective?.variant;
    return {
      'progress-bar': true,
      'progress-bar-animated': !!animated,
      [`progress-bar-${variant}`]: !!variant,
      [`bg-${color}`]: !!color
    };
  }
}
