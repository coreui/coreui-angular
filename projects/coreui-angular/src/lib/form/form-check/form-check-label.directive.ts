import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'label[cFormCheckLabel]'
})
export class FormCheckLabelDirective {

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'form-check-label': true,
    };
  }

}
