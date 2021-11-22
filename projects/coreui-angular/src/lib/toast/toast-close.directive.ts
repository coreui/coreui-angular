import { Directive, HostListener, Input } from '@angular/core';
import { ToasterService } from './toaster/toaster.service';

@Directive({
  selector: '[cToastClose]',
  exportAs: 'cToastClose'
})
export class ToastCloseDirective {

  @Input('cToastClose') toast: any;

  constructor(private toasterService: ToasterService) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.toasterService.setState({ show: false, toast: this.toast });
  }

}
