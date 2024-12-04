import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cToasterHost]',
  exportAs: 'cToasterHost'
})
export class ToasterHostDirective {
  readonly viewContainerRef = inject(ViewContainerRef);
}
