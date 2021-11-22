import { Directive, HostListener, Input } from '@angular/core';

import { ModalService } from '../modal.service';

@Directive({
  selector: '[cModalToggle]'
})
export class ModalToggleDirective {
  /**
   * Html id attr of modal to dismiss.
   */
  @Input('cModalToggle') id: string | undefined;

  constructor(
    private modalService: ModalService
  ) { }

  @HostListener('click', ['$event'])
  dismiss($event: any): void {
    $event.preventDefault();
    this.modalService.toggle({show: 'toggle', id: this.id});
  }
}
