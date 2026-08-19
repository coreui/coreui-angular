import { Component, computed, input, InputSignal } from '@angular/core';

import { Positions } from '../coreui.types';

@Component({
  selector: 'c-footer, [cFooter]',
  template: '<ng-content />',
  host: {
    class: 'footer',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()'
  }
})
export class FooterComponent {
  /**
   * Place footer in non-static positions
   * @returns Positions
   */
  readonly position = input<Positions | undefined>();

  /**
   * Default role for footer
   * @returns string
   * @default 'contentinfo'
   */
  readonly role = input<string>('contentinfo');

  readonly hostClasses = computed(() => {
    const position = this.position();
    return {
      footer: true,
      [`footer-${position}`]: !!position
    } as Record<string, boolean>;
  });
}
