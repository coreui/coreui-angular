import {
  AfterViewInit,
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  HostBinding,
  inject,
  Input,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CarouselService } from '../carousel.service';

@Component({
  selector: 'c-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  host: { class: 'carousel-item' }
})
export class CarouselItemComponent implements OnDestroy, AfterViewInit {
  readonly #carouselService = inject(CarouselService);
  readonly #changeDetectorRef = inject(ChangeDetectorRef);

  index?: number;
  #carouselIndexSubscription?: Subscription;

  /**
   * @ignore
   */
  @Input({ transform: booleanAttribute })
  set active(value) {
    this.#active = value;
    this.#changeDetectorRef.markForCheck();
  }

  get active(): boolean {
    return this.#active;
  }

  #active = false;

  /**
   * Time delay before cycling to next item. If -1, uses carousel interval value.
   * @type number
   * @default -1
   */
  @Input() interval: number = -1;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'carousel-item': true,
      active: this.active
    };
  }

  ngOnDestroy(): void {
    this.carouselStateSubscribe(false);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.carouselStateSubscribe();
    });
  }

  private carouselStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.#carouselIndexSubscription = this.#carouselService.carouselIndex$.subscribe((nextIndex) => {
        if ('active' in nextIndex) {
          this.active = nextIndex.active === this.index;
        }
      });
    } else {
      this.#carouselIndexSubscription?.unsubscribe();
    }
  }
}
