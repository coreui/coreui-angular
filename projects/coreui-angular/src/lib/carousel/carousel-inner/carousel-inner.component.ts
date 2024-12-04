import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  inject,
  QueryList
} from '@angular/core';

import { fadeAnimation, slideAnimation } from '../carousel.animation';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselState } from '../carousel-state';

@Component({
  selector: 'c-carousel-inner',
  templateUrl: './carousel-inner.component.html',
  styleUrls: ['./carousel-inner.component.scss'],
  animations: [slideAnimation, fadeAnimation]
})
export class CarouselInnerComponent implements AfterContentInit, AfterContentChecked {
  readonly #carouselState = inject(CarouselState);

  @HostBinding('class.carousel-inner') carouselInnerClass = true;
  activeIndex?: number;
  animate?: boolean;
  slide = { left: true };
  transition = 'slide';
  @ContentChildren(CarouselItemComponent) private contentItems!: QueryList<CarouselItemComponent>;
  #prevContentItems!: QueryList<CarouselItemComponent>;

  ngAfterContentInit(): void {
    this.setItems();
  }

  ngAfterContentChecked(): void {
    this.setItems();
    const state = this.#carouselState?.state;
    const nextIndex = state?.activeItemIndex;
    const nextDirection = state?.direction;
    if (this.activeIndex !== nextIndex) {
      this.animate = state?.animate;
      this.slide = { left: nextDirection === 'next' };
      this.activeIndex = state?.activeItemIndex;
      this.transition = state?.transition ?? 'slide';
    }
  }

  setItems(): void {
    if (this.#prevContentItems !== this.contentItems) {
      this.#prevContentItems = this.contentItems;
      this.#carouselState.setItems(this.contentItems);
    }
  }
}
