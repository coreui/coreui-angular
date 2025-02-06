import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  computed,
  contentChildren,
  inject,
  signal
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselState } from '../carousel-state';
import { carouselPlay } from '../carousel.animation';

@Component({
  selector: 'c-carousel-inner',
  styleUrls: ['./carousel-inner.component.scss'],
  animations: [carouselPlay],
  template: '<ng-content />',
  host: {
    class: 'carousel-inner',
    '[@carouselPlay]': 'slideType()',
    '[@.disabled]': '!animate()'
  }
})
export class CarouselInnerComponent implements AfterContentInit, AfterContentChecked {
  readonly #carouselState = inject(CarouselState);

  readonly activeIndex = signal<number | undefined>(undefined);
  readonly animate = signal<boolean>(true);
  readonly slide = signal({ left: true });
  readonly transition = signal('crossfade');

  readonly slideType = computed(() => {
    return { left: this.slide().left, type: this.transition() };
  });

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
