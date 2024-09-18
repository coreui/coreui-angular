import { Component, computed, input } from '@angular/core';
import { Colors } from '../coreui.types';

@Component({
  selector: 'c-callout, [cCallout]',
  template: '<ng-content />',
  styleUrls: ['./callout.component.scss'],
  standalone: true,
  host: { class: 'callout', '[class]': 'hostClasses()' }
})
export class CalloutComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  readonly color = input<Colors>();

  readonly hostClasses = computed(() => {
    const color = this.color();
    return {
      callout: true,
      [`callout-${color}`]: !!color
    } as Record<string, boolean>;
  });
}
