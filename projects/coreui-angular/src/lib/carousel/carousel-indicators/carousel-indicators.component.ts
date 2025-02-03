import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'c-carousel-indicators',
  templateUrl: './carousel-indicators.component.html'
})
export class CarouselIndicatorsComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #carouselService = inject(CarouselService);
  readonly #carouselState = inject(CarouselState);

  items: (number | undefined)[] = [];
  active = 0;

  ngOnInit(): void {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextIndex) => {
      this.items = this.#carouselState?.state?.items?.map((item) => item.index) ?? [];
      if ('active' in nextIndex) {
        this.active = nextIndex.active ?? 0;
      }
    });
  }

  onClick(index: number): void {
    if (index !== this.active) {
      const direction = index < this.active ? 'prev' : 'next';
      this.#carouselState.state = { direction, activeItemIndex: index };
    }
  }
}
