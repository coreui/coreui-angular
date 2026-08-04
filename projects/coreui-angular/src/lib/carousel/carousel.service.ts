import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICarouselState } from './carousel-state.type';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

export interface ICarouselIndex {
  active?: number;
  interval?: number;
  lastItemIndex?: number;
}

@Injectable()
export class CarouselService {
  readonly #carouselIndex = new BehaviorSubject<ICarouselIndex>({});
  readonly carouselIndex$ = this.#carouselIndex.asObservable();

  setIndex(index: ICarouselIndex): void {
    this.#carouselIndex.next(index);
  }

  readonly animating = signal(false);

  #state = <ICarouselState>{
    activeItemIndex: -1,
    animate: true,
    items: [],
    direction: 'next',
    transition: 'slide',
    interval: 0
  };

  get state(): ICarouselState {
    return this.#state;
  }

  set state(state) {
    const prevState = { ...this.#state };
    const nextState = { ...this.#state, ...state };
    this.#state = nextState;
    if (prevState.activeItemIndex !== nextState.activeItemIndex) {
      const activeItemIndex = this.state.activeItemIndex || 0;
      const itemInterval = (this.state.items && this.state.items[activeItemIndex]?.interval()) || -1;
      this.setIndex({
        active: nextState.activeItemIndex,
        interval: itemInterval,
        lastItemIndex: (nextState.items?.length ?? 0) - 1
      });
    }
  }

  setItems(newItems: any): void {
    if (newItems.length) {
      const itemsArray = newItems;
      itemsArray.forEach((item: CarouselItemComponent, i: number) => {
        item.index = i;
      });
      this.state = {
        items: [...itemsArray]
      };
    } else {
      this.reset();
    }
  }

  setNextIndex(nextIndex: any): void {
    this.setIndex(nextIndex);
  }

  direction(direction: 'next' | 'prev' = 'next'): number {
    this.state = { direction };
    const { activeItemIndex = -1, items } = this.state;
    const itemsCount = items?.length ?? 0;
    if (itemsCount > 0) {
      return direction === 'next'
        ? activeItemIndex === itemsCount - 1
          ? 0
          : activeItemIndex + 1
        : activeItemIndex === 0
          ? itemsCount - 1
          : activeItemIndex - 1;
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
      transition: 'slide',
      interval: 0
    };
  }
}
