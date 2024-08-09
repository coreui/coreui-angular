import {
  AfterViewInit,
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CarouselService } from '../carousel.service';

@Component({
  selector: 'c-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  standalone: true,
  host: { class: 'carousel-item' }
})
export class CarouselItemComponent implements OnDestroy, AfterViewInit {
  index?: number;
  private carouselIndexSubscription?: Subscription;

  /**
   * @ignore
   */
  @Input({ transform: booleanAttribute })
  set active(value) {
    this._active = value;
    this.changeDetectorRef.markForCheck();
  }

  get active(): boolean {
    return this._active;
  }

  private _active = false;

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

  constructor(
    private carouselService: CarouselService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

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
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        if ('active' in nextIndex) {
          this.active = nextIndex.active === this.index;
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
}
