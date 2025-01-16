import { Directive, inject, input } from '@angular/core';
import { ToasterService } from './toaster/toaster.service';
import type { ToastComponent } from './toast/toast.component';

@Directive({
  selector: '[cToastClose]',
  exportAs: 'cToastClose',
  host: {
    '(click)': 'toggleOpen($event)'
  }
})
export class ToastCloseDirective {
  readonly #toasterService = inject(ToasterService);

  readonly cToastClose = input<ToastComponent>();

  toggleOpen($event: MouseEvent): void {
    $event.preventDefault();
    this.#toasterService.setState({ show: false, toast: this.cToastClose() });
  }
}
