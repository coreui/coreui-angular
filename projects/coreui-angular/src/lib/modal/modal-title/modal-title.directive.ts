import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cModalTitle]'
})
export class ModalTitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-title': true,
    };
  }

}
