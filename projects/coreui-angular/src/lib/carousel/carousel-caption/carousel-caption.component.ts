import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-carousel-caption',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./carousel-caption.component.scss']
})
export class CarouselCaptionComponent {

  @HostBinding('class.carousel-caption') carouselCaptionClass = true;

  constructor() { }

}
