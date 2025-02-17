import { booleanAttribute, Component, DestroyRef, inject, input, linkedSignal } from '@angular/core';

import { CarouselService } from '../carousel.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'c-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  exportAs: 'cCarouselItem',
  host: {
    class: 'carousel-item',
    '[class.active]': 'active()',
    '[attr.role]': 'role()'
  }
})
export class CarouselItemComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #carouselService = inject(CarouselService);

  index?: number;

  /**
   * @ignore
   */
  readonly activeInput = input(false, { transform: booleanAttribute, alias: 'active' });

  readonly active = linkedSignal({
    source: this.activeInput,
    computation: (value) => {
      return value;
    }
  });

  /**
   * Time delay before cycling to next item. If -1, uses carousel interval value.
   * @return number
   * @default -1
   */
  readonly interval = input<number>(-1);

  /**
   * Carousel item role.
   * @return string
   * @default 'group'
   */
  readonly role = input('group');

  constructor() {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextIndex) => {
      if ('active' in nextIndex) {
        this.active.set(nextIndex.active === this.index);
      }
    });
  }
}
