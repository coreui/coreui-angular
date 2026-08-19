import { Component, input } from '@angular/core';

@Component({
  selector: 'c-progress-stacked',
  exportAs: 'cProgressStacked',
  template: '<ng-content />',
  styles: `
    :host {
      display: flex;
    }
  `,
  host: { '[class.progress-stacked]': 'stacked()' }
})
export class ProgressStackedComponent {
  /**
   * Toggle the `progress-stacked` class on the host element.
   * @returns boolean
   * @default true
   */
  readonly stacked = input(true);
}
