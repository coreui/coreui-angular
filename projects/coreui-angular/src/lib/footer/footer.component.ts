import { Component, computed, input, InputSignal } from '@angular/core';

import { Positions } from '../coreui.types';

@Component({
  selector: 'c-footer, [cFooter]',
  template: '<ng-content />',
  standalone: true,
  host: {
    class: 'footer',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()'
  }
})
export class FooterComponent {
  /**
   * Place footer in non-static positions. [docs]
   * @type Positions
   */
  readonly position: InputSignal<Positions | undefined> = input();

  /**
   * Default role for footer. [docs]
   * @type string
   * @default 'contentinfo'
   */
  readonly role: InputSignal<string> = input('contentinfo');

  readonly hostClasses = computed(() => {
    return {
      footer: true,
      [`footer-${this.position()}`]: !!this.position()
    } as Record<string, boolean>;
  });
}
