import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[cElementRef]',
  exportAs: 'cElementRef'
})
export class ElementRefDirective {
  public readonly elementRef = inject(ElementRef);
}
