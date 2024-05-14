import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[cElementRef]',
  exportAs: 'cElementRef',
  standalone: true,
})
export class ElementRefDirective {
  public readonly elementRef = inject(ElementRef);
}
