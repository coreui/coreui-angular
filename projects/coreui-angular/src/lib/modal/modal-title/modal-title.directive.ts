import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cModalTitle]',
  standalone: true
})
export class ModalTitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-title': true,
    };
  }

}
