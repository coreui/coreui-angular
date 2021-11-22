import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cPageLink]'
})
export class PageLinkDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'page-link': true,
    };
  }
}
