import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-progress-stacked',
  exportAs: 'cProgressStacked',
  template: '<ng-content />',
  styles: `
    :host {
      display: flex;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { '[class.progress-stacked]': 'stacked()' }
})
export class ProgressStackedComponent {
  readonly stacked = input(true);
}
