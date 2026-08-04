import { Component } from '@angular/core';

@Component({
  selector: 'c-carousel-caption',
  template: '<ng-content />',
  styles: `
    :host {
      display: block;
    }
  `,
  host: {
    '[class.carousel-caption]': 'true'
  }
})
export class CarouselCaptionComponent {}
