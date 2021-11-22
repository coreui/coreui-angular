import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CarouselService } from '../carousel.service';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'c-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnDestroy, AfterViewInit {

  static ngAcceptInputType_active: BooleanInput;
  private _active = false;

  index?: number;
  private carouselIndexSubscription?: Subscription;

  /**
   * @ignore
   */
  @Input()
  set active(value) {
    this._active = coerceBooleanProperty(value);
    this.changeDetectorRef.markForCheck();
  }
  get active(): boolean {
    return this._active;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'carousel-item': true,
      active: this.active,
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
