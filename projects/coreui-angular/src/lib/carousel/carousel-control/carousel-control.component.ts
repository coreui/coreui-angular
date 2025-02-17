import { Component, computed, inject, input, linkedSignal } from '@angular/core';

import { CarouselState } from '../carousel-state';

@Component({
  selector: 'c-carousel-control',
  templateUrl: './carousel-control.component.html',
  exportAs: 'cCarouselControl',
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()',
    '(keyup)': 'onKeyUp($event)',
    '(click)': 'onClick($event)'
  }
})
export class CarouselControlComponent {
  readonly #carouselState = inject(CarouselState);

  /**
   * Carousel control caption. [docs]
   * @return string
   */
  readonly captionInput = input<string | undefined>(undefined, { alias: 'caption' });

  readonly caption = linkedSignal({
    source: this.captionInput,
    computation: (value) => {
      return !!value ? value : this.direction() === 'prev' ? 'Previous' : 'Next';
    }
  });

  /**
   * Carousel control direction.
   * @return {'next' | 'prev'}
   */
  readonly direction = input<'prev' | 'next'>('next');

  /**
   * Carousel control role.
   * @return string
   */
  readonly role = input('button');

  readonly hostClasses = computed(() => {
    return `carousel-control-${this.direction()}`;
  });

  readonly carouselControlIconClass = computed(() => {
    return `carousel-control-${this.direction()}-icon`;
  });

  onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.#play();
    }
    if ($event.key === 'ArrowLeft') {
      this.#play('prev');
    }
    if ($event.key === 'ArrowRight') {
      this.#play('next');
    }
  }

  onClick($event: MouseEvent): void {
    this.#play();
  }

  #play(direction = this.direction()): void {
    const nextIndex = this.#carouselState.direction(direction);
    this.#carouselState.state = { activeItemIndex: nextIndex };
  }
}
