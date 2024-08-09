import {
  AfterContentInit,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, Subscription } from 'rxjs';
import { filter, finalize, withLatestFrom, zipWith } from 'rxjs/operators';

import { IListenersConfig, IntersectionService, ListenersService } from '../../services';

import { Triggers } from '../../coreui.types';
import { ThemeDirective } from '../../shared/theme.directive';
import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { CarouselConfig } from '../carousel.config';

@Component({
  selector: 'c-carousel',
  template: '<ng-content />',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService, CarouselState, CarouselConfig, ListenersService],
  standalone: true,
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: { class: 'carousel slide' }
})
export class CarouselComponent implements OnInit, OnDestroy, AfterContentInit {
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

  /**
   * Index of the active item.
   * @type number
   */
  @Input() activeIndex: number = 0;
  /**
   * Carousel automatically starts cycle items.
   * @type boolean
   */
  @Input() animate: boolean = true;
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
  @Input() interval: number = 0;
  /**
   * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
   * @type {'hover' | 'focus' | 'click'}
   */
  @Input() pause: Triggers | Triggers[] | false = 'hover';
  /**
   * Support left/right swipe interactions on touchscreen devices.
   * @type boolean
   * @default true
   */
  @Input() touch: boolean = true;
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
  @Input() wrap: boolean = true;
  /**
   * Event emitted on carousel item change. [docs]
   * @type number
   */
  @Output() itemChange: EventEmitter<number> = new EventEmitter<number>();

  @HostBinding('class')
  get hostClasses(): any {
    return {
      carousel: true,
      slide: true,
      'carousel-fade': this.transition === 'crossfade'
    };
  }

  private timerId: ReturnType<typeof setTimeout> | undefined;
  private activeItemInterval = 0;
  private swipeSubscription?: Subscription;
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.carouselStateSubscribe();
  }

  ngOnDestroy(): void {
    this.resetTimer();
    this.clearListeners();
    this.swipeSubscribe(false);
  }

  ngAfterContentInit(): void {
    this.intersectionServiceSubscribe();
    this.carouselState.state = { activeItemIndex: this.activeIndex, animate: this.animate };
    this.setListeners();
    this.swipeSubscribe();
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
    this.timerId = undefined;
  }

  private carouselStateSubscribe(): void {
    this.carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextItem) => {
      if ('active' in nextItem) {
        this.itemChange.emit(nextItem.active);
      }
      this.activeItemInterval =
        typeof nextItem.interval === 'number' && nextItem.interval > -1 ? nextItem.interval : this.interval;
      const isLastItem =
        (nextItem.active === nextItem.lastItemIndex && this.direction === 'next') ||
        (nextItem.active === 0 && this.direction === 'prev');
      !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
    });
  }

  private intersectionServiceSubscribe(): void {
    this.intersectionService.createIntersectionObserver(this.hostElement);
    this.intersectionService.intersecting$
      .pipe(
        filter((next) => next.hostElement === this.hostElement),
        finalize(() => {
          this.intersectionService.unobserve(this.hostElement);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((next) => {
        this.visible = next.isIntersecting;
        next.isIntersecting ? this.setTimer() : this.resetTimer();
      });
  }

  private swipeSubscribe(subscribe: boolean = true): void {
    if (this.touch && subscribe) {
      const carouselElement = this.hostElement.nativeElement;
      const touchStart$ = fromEvent<TouchEvent>(carouselElement, 'touchstart');
      const touchEnd$ = fromEvent<TouchEvent>(carouselElement, 'touchend');
      const touchMove$ = fromEvent<TouchEvent>(carouselElement, 'touchmove');
      this.swipeSubscription = touchStart$
        .pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))), takeUntilDestroyed(this.#destroyRef))
        .subscribe(([touchstart, [touchend, touchmove]]) => {
          touchstart.stopPropagation();
          touchmove.stopPropagation();
          const distanceX = touchstart.touches[0].clientX - touchmove.touches[0].clientX;
          if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
            const nextIndex = this.carouselState.direction(distanceX > 0 ? 'next' : 'prev');
            this.carouselState.state = { activeItemIndex: nextIndex };
          }
        });
    } else {
      this.swipeSubscription?.unsubscribe();
    }
  }
}
