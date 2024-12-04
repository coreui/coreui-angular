import { Directive, HostListener, inject, Input } from '@angular/core';

import { OffcanvasService } from '../offcanvas.service';

@Directive({
  selector: '[cOffcanvasToggle]'
})
export class OffcanvasToggleDirective {
  readonly #offcanvasService = inject(OffcanvasService);

  /**
   * Html id attr of offcanvas to toggle.
   * @type string
   */
  @Input('cOffcanvasToggle') id?: string;

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.#offcanvasService.toggle({ show: 'toggle', id: this.id });
  }
}
