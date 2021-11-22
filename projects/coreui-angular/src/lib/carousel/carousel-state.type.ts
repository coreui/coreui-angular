import { CarouselItemComponent } from './carousel-item/carousel-item.component';

export interface ICarouselOptions {
  interval?: number;
  animate?: boolean;
  activeIndex?: number;
  direction?: 'next' | 'prev';
  transition?: 'slide' | 'crossfade';
}

export interface ICarouselState {
  activeItemIndex?: number;
  animate?: boolean;
  items?: CarouselItemComponent[];
  direction?: 'next' | 'prev';
  transition?: 'slide' | 'crossfade';
}
