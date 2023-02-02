import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cToasterHost]',
  exportAs: 'cToasterHost',
  standalone: true
})
export class ToasterHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
