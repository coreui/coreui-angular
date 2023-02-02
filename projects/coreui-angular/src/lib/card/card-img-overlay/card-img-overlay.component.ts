import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-card-img-overlay',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-img-overlay.component.scss'],
  standalone: true
})
export class CardImgOverlayComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-img-overlay': true
    };
  }
}
