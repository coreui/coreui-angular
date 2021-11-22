import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-offcanvas-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./offcanvas-body.component.scss']
})
export class OffcanvasBodyComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'offcanvas-body': true,
    };
  }

}
