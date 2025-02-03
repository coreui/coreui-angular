import { Component } from '@angular/core';

@Component({
  selector: 'c-carousel-caption',
  template: '<ng-content />',
  styleUrls: ['./carousel-caption.component.scss'],
  host: {
    '[class.carousel-caption]': 'true'
  }
})
export class CarouselCaptionComponent {}
