import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-carousel-caption',
  template: '<ng-content />',
  styleUrls: ['./carousel-caption.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    '[class.carousel-caption]': 'true'
  }
})
export class CarouselCaptionComponent {}
