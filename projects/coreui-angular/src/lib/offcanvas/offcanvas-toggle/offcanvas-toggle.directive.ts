import { Directive, HostListener, Input } from '@angular/core';

import { OffcanvasService } from '../offcanvas.service';

@Directive({
  selector: '[cOffcanvasToggle]'
})
export class OffcanvasToggleDirective {

  /**
   * Html id attr of offcanvas to toggle.
   * @type string
   */
  @Input('cOffcanvasToggle') id?: string;

  constructor(
    private offcanvasService: OffcanvasService
  ) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.offcanvasService.toggle({ show: 'toggle', id: this.id });
  }
}
