import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cInputGroupText]'
})
export class InputGroupTextDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'input-group-text': true,
    };
  }

  constructor() { }

}
