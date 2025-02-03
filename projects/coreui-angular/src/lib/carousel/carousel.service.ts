import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
