import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cToasterHost]',
  exportAs: 'cToasterHost'
})
export class ToasterHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
