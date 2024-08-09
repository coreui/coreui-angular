import { Directive } from '@angular/core';

@Directive({
  selector: '[cInputGroupText]',
  standalone: true,
  host: { class: 'input-group-text' }
})
export class InputGroupTextDirective {}
