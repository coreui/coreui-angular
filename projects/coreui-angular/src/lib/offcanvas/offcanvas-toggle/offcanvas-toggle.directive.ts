import { Directive, inject, input } from '@angular/core';

import { OffcanvasService } from '../offcanvas.service';

@Directive({
  selector: '[cOffcanvasToggle]',
  host: {
    '(click)': 'toggleOpen($event)'
  }
})
export class OffcanvasToggleDirective {
  readonly #offcanvasService = inject(OffcanvasService);

  /**
   * Html id attr of offcanvas to toggle.
   * @return string
   */
  readonly id = input<string>(undefined, { alias: 'cOffcanvasToggle' });

  protected toggleOpen($event: MouseEvent): void {
    $event.preventDefault();
    this.#offcanvasService.toggle({ show: 'toggle', id: this.id() });
  }
}
