import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-offcanvas-header',
  template: `<ng-content></ng-content>`,
  standalone: true
})
export class OffcanvasHeaderComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'offcanvas-header': true,
    };
  }

}
