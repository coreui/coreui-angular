import { Directive, HostListener, inject, input } from '@angular/core';

import { ModalService } from '../modal.service';

@Directive({
  selector: '[cModalToggle]'
})
export class ModalToggleDirective {
  readonly #modalService = inject(ModalService);

  /**
   * Html id attr of modal to dismiss.
   * @default undefined
   */
  readonly toggle = input<string>(undefined, { alias: 'cModalToggle' });

  @HostListener('click', ['$event'])
  dismiss($event: any): void {
    $event.preventDefault();
    this.#modalService.toggle({ show: 'toggle', id: this.toggle() });
  }
}
