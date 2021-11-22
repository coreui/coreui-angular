import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-card-img-overlay',
  templateUrl: './card-img-overlay.component.html',
  styleUrls: ['./card-img-overlay.component.scss']
})
export class CardImgOverlayComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-img-overlay': true
    };
  }
}
