import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'c-carousel-indicators',
  templateUrl: './carousel-indicators.component.html'
})
export class CarouselIndicatorsComponent implements OnInit, OnDestroy {
  readonly #carouselService = inject(CarouselService);
  readonly #carouselState = inject(CarouselState);

  items: (number | undefined)[] = [];
  active = 0;
  #carouselIndexSubscription?: Subscription;

  ngOnInit(): void {
    this.carouselStateSubscribe();
  }

  ngOnDestroy(): void {
    this.carouselStateSubscribe(false);
  }

  onClick(index: number): void {
    if (index !== this.active) {
      const direction = index < this.active ? 'prev' : 'next';
      this.#carouselState.state = { direction, activeItemIndex: index };
    }
  }

  private carouselStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.#carouselIndexSubscription = this.#carouselService.carouselIndex$.subscribe((nextIndex) => {
        this.items = this.#carouselState?.state?.items?.map((item) => item.index) ?? [];
        if ('active' in nextIndex) {
          this.active = nextIndex.active ?? 0;
        }
      });
    } else {
      this.#carouselIndexSubscription?.unsubscribe();
    }
  }
}
