import { Directive, HostListener, inject, Input } from '@angular/core';

import { ModalService } from '../modal.service';

@Directive({
  selector: '[cModalToggle]'
})
export class ModalToggleDirective {
  readonly #modalService = inject(ModalService);

  /**
   * Html id attr of modal to dismiss.
   */
  @Input('cModalToggle') id: string | undefined;

  @HostListener('click', ['$event'])
  dismiss($event: any): void {
    $event.preventDefault();
    this.#modalService.toggle({ show: 'toggle', id: this.id });
  }
}
