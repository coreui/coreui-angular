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
   * Place footer in non-static positions. [docs]
   * @type Positions
   */
  readonly position: InputSignal<Positions | undefined> = input();

  /**
   * Default role for footer. [docs]
   * @return string
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
