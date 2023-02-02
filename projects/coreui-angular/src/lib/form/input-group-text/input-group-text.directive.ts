import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cInputGroupText]',
  standalone: true
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
