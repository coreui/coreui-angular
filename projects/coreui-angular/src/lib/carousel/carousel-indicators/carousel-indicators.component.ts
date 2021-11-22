import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'c-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss'],
})
export class CarouselIndicatorsComponent implements OnInit, OnDestroy {
  items: (number | undefined)[] = [];
  active = 0;

  private carouselIndexSubscription?: Subscription;

  constructor(
    private carouselService: CarouselService,
    private carouselState: CarouselState
  ) {}

  ngOnInit(): void {
    this.carouselStateSubscribe();
  }

  ngOnDestroy(): void {
    this.carouselStateSubscribe(false);
  }

  onClick(index: number): void {
    if (index !== this.active) {
      const direction = index < this.active ? 'prev' : 'next';
      this.carouselState.state = { direction,  activeItemIndex: index };
    }
  }

  private carouselStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        this.items = this.carouselState?.state?.items?.map(item => item.index) ?? [];
        if ('active' in nextIndex) {
          this.active = nextIndex.active ?? 0;
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
}
