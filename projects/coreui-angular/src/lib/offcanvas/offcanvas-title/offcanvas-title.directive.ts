import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cOffcanvasTitle]'
})
export class OffcanvasTitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'offcanvas-title': true,
    };
  }

}
