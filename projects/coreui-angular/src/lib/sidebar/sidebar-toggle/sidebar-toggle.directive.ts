import { Directive, inject, input } from '@angular/core';

import { SidebarService } from '../sidebar.service';

/**
 * Allows the sidebar to be toggled/folded via click on host element.
 */
@Directive({
  selector: '[cSidebarToggle]',
  exportAs: 'cSidebarToggle',
  host: {
    '(click)': 'toggleOpen($event)'
  }
})
export class SidebarToggleDirective {
  readonly #sidebarService = inject(SidebarService);

  /**
   * Id of sidebar for toggle action.
   * @return string
   */
  readonly id = input<string>(undefined, { alias: 'cSidebarToggle' });
  /**
   * Sidebar property name for toggle action.
   *
   * @return 'visible' | 'unfoldable'
   * @default 'visible'
   */
  readonly toggle = input<'visible' | 'unfoldable'>('visible');

  toggleOpen($event: any): void {
    $event.preventDefault();
    this.#sidebarService.toggle({ toggle: this.toggle(), id: this.id() });
  }
}
