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
  readonly stacked = input(true);
}
