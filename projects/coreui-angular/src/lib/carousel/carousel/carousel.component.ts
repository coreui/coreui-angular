import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';

import { IntersectionService } from '../../services/intersection.service';
import { IListenersConfig, ListenersService } from '../../services/listeners.service';

import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { CarouselConfig } from '../carousel.config';
import { Triggers } from '../../coreui.types';

@Component({
  selector: 'c-carousel',
  template: '<ng-content></ng-content>',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService]
})
export class CarouselComponent implements OnInit, OnDestroy, AfterContentInit {
  /**
   * Index of the active item.
   * @type number
   */
  @Input() activeIndex = 0;
  /**
   * Carousel automatically starts cycle items.
   * @type boolean
   */
  @Input() animate = true;
  /**
   * Add darker controls, indicators, and captions.
   * @type boolean
   */
  @Input() dark?: boolean;
  /**
   * Carousel direction. [docs]
   * @type {'next' | 'prev'}
   */
  @Input() direction: 'next' | 'prev' = 'next';
  /**
   * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
   * @type number
   * @default 0
   */
  @Input() interval = 0;
  /**
   * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
   * @type {'hover' | 'focus' | 'click'}
   */
  @Input() pause: Triggers | Triggers[] | false = 'hover';
  /**
   * Set type of the transition.
   * @type {'slide' | 'crossfade'}
   * @default 'slide'
   */
  @Input() transition: 'slide' | 'crossfade' = 'slide';
  /**
   * Set whether the carousel should cycle continuously or have hard stops.
   * @type boolean
   * @default true
   */
  @Input() wrap = true;
  /**
   * Event emitted on carousel item change. [docs]
   * @type number
   */
  @Output() itemChange = new EventEmitter<number>();

  @HostBinding('class')
  get hostClasses(): any {
    return {
      carousel: true,
      slide: true,
      'carousel-dark': !!this.dark,
      'carousel-fade': this.transition === 'crossfade'
    };
  }

  private carouselIndexSubscription?: Subscription;
  private timerId!: any;
  private intersectingSubscription?: Subscription;
  private activeItemInterval = 0;

  constructor(
    @Inject(CarouselConfig) private config: CarouselConfig,
    private hostElement: ElementRef,
    private carouselService: CarouselService,
    private carouselState: CarouselState,
    private intersectionService: IntersectionService,
    private listenersService: ListenersService
  ) {
    Object.assign(this, config);
  }

  ngOnInit(): void {
    this.carouselStateSubscribe();
  }

  ngOnDestroy(): void {
    this.clearListeners();
    this.carouselStateSubscribe(false);
    this.intersectionServiceSubscribe(false);
  }

  ngAfterContentInit(): void {
    this.intersectionService.createIntersectionObserver(this.hostElement);
    this.intersectionServiceSubscribe();
    this.carouselState.state = { activeItemIndex: this.activeIndex, animate: this.animate };
    this.setListeners();
  }

  private setListeners(): void {
    const config: IListenersConfig = {
      hostElement: this.hostElement,
      trigger: this.pause || [],
      callbackOff: () => {
        this.setTimer();
      },
      callbackOn: () => {
        this.resetTimer();
      }
    };
    this.listenersService.setListeners(config);
  }

  private clearListeners(): void {
    this.listenersService.clearListeners();
  }

  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  private _visible: boolean = true;

  setTimer(): void {
    const interval = this.activeItemInterval || 0;
    this.resetTimer();
    if (interval > 0) {
      this.timerId = setTimeout(() => {
        const nextIndex = this.carouselState.direction(this.direction);
        this.carouselState.state = { activeItemIndex: nextIndex };
      }, interval);
    }
  }

  resetTimer(): void {
    clearTimeout(this.timerId);
  }

  private carouselStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextItem) => {
        if ('active' in nextItem) {
          this.itemChange.emit(nextItem.active);
        }
        this.activeItemInterval = typeof nextItem.interval === 'number' && nextItem.interval > -1 ? nextItem.interval : this.interval;
        const isLastItem = ((nextItem.active === nextItem.lastItemIndex) && this.direction === 'next') || ((nextItem.active === 0) && this.direction === 'prev');
        !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }

  private intersectionServiceSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.intersectingSubscription = this.intersectionService.intersecting$.subscribe(isIntersecting => {
        this.visible = isIntersecting;
        isIntersecting ? this.setTimer() : this.resetTimer();
      });
    } else {
      this.intersectingSubscription?.unsubscribe();
    }
  }
}
