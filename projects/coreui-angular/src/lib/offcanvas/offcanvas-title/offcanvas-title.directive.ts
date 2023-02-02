import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cOffcanvasTitle]',
  standalone: true
})
export class OffcanvasTitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'offcanvas-title': true,
    };
  }

}
