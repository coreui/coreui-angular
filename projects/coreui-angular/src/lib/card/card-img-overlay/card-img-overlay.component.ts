import { Component } from '@angular/core';

@Component({
  selector: 'c-card-img-overlay',
  template: '<ng-content />',
  styleUrls: ['./card-img-overlay.component.scss'],
  host: { class: 'card-img-overlay' }
})
export class CardImgOverlayComponent {}
