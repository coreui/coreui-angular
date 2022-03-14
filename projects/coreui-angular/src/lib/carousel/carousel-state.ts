import { Injectable } from '@angular/core';
import { ICarouselState } from './carousel-state.type';
import { CarouselService } from './carousel.service';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Injectable()
export class CarouselState {
  private _state: ICarouselState = {
    activeItemIndex: -1,
    animate: true,
    items: [],
    direction: 'next',
    transition: 'slide'
  };

  constructor(private carouselService: CarouselService) {}

  get state(): ICarouselState {
    return this._state;
  }

  set state(state) {
    const prevState = { ...this._state };
    const nextState = { ...this._state, ...state };
    this._state = nextState;
    if (prevState.activeItemIndex !== nextState.activeItemIndex) {
      const activeItemIndex = this.state.activeItemIndex || 0;
      const itemInterval = this.state.items && this.state.items[activeItemIndex]?.interval || -1;
      this.carouselService.setIndex({
        active: nextState.activeItemIndex,
        interval: itemInterval,
        lastItemIndex: (nextState.items?.length ?? 0) - 1
      });
    }
  }

  setItems(newItems: any): void {
    if (newItems.length) {
      const itemsArray = newItems.toArray();
      itemsArray.forEach((item: CarouselItemComponent, i: number) => {
        item.index = i;
      });
      this.state = {
        items: itemsArray
      };
    } else {
      this.reset();
    }
  }

  setNextIndex(nextIndex: any): void {
    this.carouselService.setIndex(nextIndex);
  }

  direction(direction: 'next' | 'prev' = 'next'): number {
    this.state = { direction };
    const { activeItemIndex = -1, items } = this.state;
    const itemsCount = items?.length ?? 0;
    if (itemsCount > 0) {
      return direction === 'next' ?
        (activeItemIndex === itemsCount - 1 ? 0 : activeItemIndex + 1) :
        (activeItemIndex === 0 ? itemsCount - 1 : activeItemIndex - 1);
    } else {
      return 0;
    }
  }

  reset(): void {
    this.state = {
      activeItemIndex: -1,
      animate: true,
      items: [],
      direction: 'next',
      transition: 'slide'
    };
  }
}
