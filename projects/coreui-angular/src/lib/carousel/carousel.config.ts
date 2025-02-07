import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarouselConfig {
  /* Animate transition of slides */
  activeIndex = 0;
  /* Animate transition of slides */
  animate = true;
  /* Default direction of auto changing of slides */
  direction: 'next' | 'prev' = 'next';
  /* Default interval of auto changing of slides */
  interval = 0;
}
