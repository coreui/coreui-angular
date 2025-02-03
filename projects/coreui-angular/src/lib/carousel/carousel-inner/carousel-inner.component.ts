import { AfterContentChecked, AfterContentInit, Component, contentChildren, inject, signal } from '@angular/core';

import { fadeAnimation, slideAnimation } from '../carousel.animation';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselState } from '../carousel-state';

@Component({
  selector: 'c-carousel-inner',
  templateUrl: './carousel-inner.component.html',
  styleUrls: ['./carousel-inner.component.scss'],
  animations: [slideAnimation, fadeAnimation],
  host: {
    '[class.carousel-inner]': 'true'
  }
})
export class CarouselInnerComponent implements AfterContentInit, AfterContentChecked {
  readonly #carouselState = inject(CarouselState);

  readonly activeIndex = signal<number | undefined>(undefined);
  readonly animate = signal<boolean>(true);
  readonly slide = signal({ left: true });
  readonly transition = signal('slide');

  readonly contentItems = contentChildren(CarouselItemComponent);
  readonly #prevContentItems = signal<CarouselItemComponent[]>([]);

  ngAfterContentInit(): void {
    this.setItems();
  }

  ngAfterContentChecked(): void {
    this.setItems();
    const state = this.#carouselState?.state;
    const nextIndex = state?.activeItemIndex;
    const nextDirection = state?.direction;
    if (this.activeIndex() !== nextIndex) {
      this.animate.set(state?.animate ?? false);
      this.slide.set({ left: nextDirection === 'next' });
      this.activeIndex.set(state?.activeItemIndex);
      this.transition.set(state?.transition ?? 'slide');
    }
  }

  setItems(): void {
    const contentItems = this.contentItems();
    if (this.#prevContentItems() !== contentItems) {
      this.#prevContentItems.set([...contentItems]);
      this.#carouselState.setItems(contentItems);
    }
  }
}
