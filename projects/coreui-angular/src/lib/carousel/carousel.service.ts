import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ICarouselIndex {
  active?: number;
  interval?: number;
  lastItemIndex?: number;
}

@Injectable()
export class CarouselService {
  private carouselIndex = new BehaviorSubject<ICarouselIndex>({});
  carouselIndex$ = this.carouselIndex.asObservable();

  constructor() {}

  setIndex(index: ICarouselIndex): void {
    this.carouselIndex.next(index);
  }
}
