import { CarouselItemComponent } from './carousel-item/carousel-item.component';

export interface ICarouselOptions {
  activeIndex?: number;
  animate?: boolean;
  direction?: 'next' | 'prev';
  interval?: number;
  transition?: 'slide' | 'crossfade';
}

export interface ICarouselState {
  activeItemIndex?: number;
  animate?: boolean;
  direction?: 'next' | 'prev';
  interval?: number;
  items?: CarouselItemComponent[];
  transition?: 'slide' | 'crossfade';
}
