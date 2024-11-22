import { Directive } from '@angular/core';

@Directive({
  selector: '[cInputGroupText]',
  host: { class: 'input-group-text' }
})
export class InputGroupTextDirective {}
