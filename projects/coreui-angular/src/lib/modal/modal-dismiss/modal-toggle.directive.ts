import { Directive, ElementRef, inject, input } from '@angular/core';

import { ModalService } from '../modal.service';

@Directive({
  selector: '[cModalToggle]',
  host: {
    '(click)': 'dismiss($event)'
  }
})
export class ModalToggleDirective {
  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #modalService = inject(ModalService);

  /**
   * Html id attr of modal to dismiss.
   * @default undefined
   */
  readonly toggle = input<string>(undefined, { alias: 'cModalToggle' });

  dismiss($event: Event): void {
    $event.preventDefault();
    this.#modalService.toggle({ show: 'toggle', id: this.toggle(), trigger: this.#elementRef.nativeElement });
  }
}
