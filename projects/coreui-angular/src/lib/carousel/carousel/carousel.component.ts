import {
  AfterContentInit,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  Inject,
  inject,
  input,
  linkedSignal,
  OnDestroy,
  OnInit,
  output
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
  providers: [CarouselService, CarouselState, ListenersService],
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  exportAs: 'cCarousel',
  host: {
    class: 'carousel slide',
    '[class.carousel-fade]': 'transition() === "crossfade" && animate()'
  }
})
export class CarouselComponent implements OnInit, OnDestroy, AfterContentInit {
  readonly #hostElement = inject(ElementRef);
  readonly #carouselService = inject(CarouselService);
  readonly #carouselState = inject(CarouselState);
  readonly #intersectionService = inject(IntersectionService);
  readonly #listenersService = inject(ListenersService);

  constructor(@Inject(CarouselConfig) private config: CarouselConfig) {
    this.loadConfig();
  }

  loadConfig() {
    this.activeIndex.set(this.config?.activeIndex ?? this.activeIndex());
    this.animate.set(this.config?.animate ?? this.animate());
    this.direction.set(this.config?.direction ?? this.direction());
    this.interval.set(this.config?.interval ?? this.interval());
  }

  /**
   * Index of the active item.
   * @return number
   */
  readonly activeIndexInput = input<number>(0, { alias: 'activeIndex' });

  readonly activeIndex = linkedSignal({
    source: () => this.activeIndexInput(),
    computation: (value: number) => value
  });

  /**
   * Carousel automatically starts cycle items.
   * @return boolean
   */
  readonly animateInput = input<boolean>(true, { alias: 'animate' });

  readonly animate = linkedSignal({
    source: () => this.animateInput(),
    computation: (value: boolean) => value
  });

  /**
   * Carousel direction. [docs]
   * @return {'next' | 'prev'}
   */
  readonly directionInput = input<'next' | 'prev'>('next', { alias: 'direction' });

  readonly direction = linkedSignal({
    source: () => this.directionInput(),
    computation: (value: 'next' | 'prev') => value
  });

  /**
   * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
   * @return number
   * @default 0
   */
  readonly intervalInput = input<number>(0, { alias: 'interval' });

  readonly interval = linkedSignal({
    source: () => this.intervalInput(),
    computation: (value: number) => value
  });

  readonly #intervalEffect = effect(() => {
    const interval = this.interval();
    this.#carouselState.state = { interval: interval };
    interval ? this.setTimer() : this.resetTimer();
  });

  /**
   * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
   * @return {'hover' | 'focus' | 'click'}
   */
  readonly pause = input<Triggers | Triggers[] | false>('hover');

  /**
   * Support left/right swipe interactions on touchscreen devices.
   * @return boolean
   * @default true
   */
  readonly touch = input<boolean>(true);

  /**
   * Set type of the transition.
   * @return {'slide' | 'crossfade'}
   * @default 'slide'
   */
  readonly transition = input<'slide' | 'crossfade'>('slide');

  /**
   * Set whether the carousel should cycle continuously or have hard stops.
   * @return boolean
   * @default true
   */
  readonly wrap = input<boolean>(true);

  /**
   * Event emitted on carousel item change. [docs]
   * @return number
   */
  readonly itemChange = output<number>();

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
    this.#carouselState.state = {
      activeItemIndex: this.activeIndex(),
      animate: this.animate(),
      interval: this.interval(),
      transition: this.transition()
    };
    this.setListeners();
    this.swipeSubscribe();
  }

  private setListeners(): void {
    const config: IListenersConfig = {
      hostElement: this.#hostElement,
      trigger: this.pause() || [],
      callbackOff: () => {
        this.setTimer();
      },
      callbackOn: () => {
        this.resetTimer();
      }
    };
    this.#listenersService.setListeners(config);
  }

  private clearListeners(): void {
    this.#listenersService.clearListeners();
  }

  set visible(value) {
    this.#visible = value;
  }

  get visible() {
    return this.#visible;
  }

  #visible: boolean = true;

  setTimer(): void {
    const interval = this.activeItemInterval || this.interval();
    const direction = this.direction();
    this.resetTimer();
    if (interval > 0) {
      this.timerId = setTimeout(() => {
        const nextIndex = this.#carouselState.direction(direction);
        this.#carouselState.state = { activeItemIndex: nextIndex };
      }, interval);
    }
  }

  resetTimer(): void {
    clearTimeout(this.timerId);
    this.timerId = undefined;
  }

  private carouselStateSubscribe(): void {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextItem) => {
      if ('active' in nextItem && typeof nextItem.active === 'number') {
        this.itemChange.emit(nextItem.active);
      }
      this.activeItemInterval =
        typeof nextItem.interval === 'number' && nextItem.interval > -1 ? nextItem.interval : this.interval();
      const direction = this.direction();
      const isLastItem =
        (nextItem.active === nextItem.lastItemIndex && direction === 'next') ||
        (nextItem.active === 0 && direction === 'prev');
      !this.wrap() && isLastItem ? this.resetTimer() : this.setTimer();
    });
  }

  private intersectionServiceSubscribe(): void {
    this.#intersectionService.createIntersectionObserver(this.#hostElement);
    this.#intersectionService.intersecting$
      .pipe(
        filter((next) => next.hostElement === this.#hostElement),
        finalize(() => {
          this.#intersectionService.unobserve(this.#hostElement);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((next) => {
        this.visible = next.isIntersecting;
        next.isIntersecting ? this.setTimer() : this.resetTimer();
      });
  }

  private swipeSubscribe(subscribe: boolean = true): void {
    if (this.touch() && subscribe) {
      const carouselElement = this.#hostElement.nativeElement;
      const touchStart$ = fromEvent<TouchEvent>(carouselElement, 'touchstart');
      const touchEnd$ = fromEvent<TouchEvent>(carouselElement, 'touchend');
      const touchMove$ = fromEvent<TouchEvent>(carouselElement, 'touchmove');
      this.swipeSubscription = touchStart$
        .pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))), takeUntilDestroyed(this.#destroyRef))
        .subscribe(([touchstart, [touchend, touchmove]]) => {
          touchstart.stopPropagation();
          touchmove.stopPropagation();
          const distanceX = touchstart.touches[0]?.clientX - touchmove.touches[0]?.clientX || 0;
          if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
            const nextIndex = this.#carouselState.direction(distanceX > 0 ? 'next' : 'prev');
            this.#carouselState.state = { activeItemIndex: nextIndex };
          }
        });
    } else {
      this.swipeSubscription?.unsubscribe();
    }
  }
}
