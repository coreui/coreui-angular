import { Directive, HostListener, inject, Input } from '@angular/core';
import { ToasterService } from './toaster/toaster.service';

@Directive({
  selector: '[cToastClose]',
  exportAs: 'cToastClose'
})
export class ToastCloseDirective {
  readonly #toasterService = inject(ToasterService);

  @Input('cToastClose') toast: any;

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.#toasterService.setState({ show: false, toast: this.toast });
  }
}
