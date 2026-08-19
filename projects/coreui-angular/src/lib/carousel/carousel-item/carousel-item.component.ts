import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  OnInit,
  signal,
  untracked
} from '@angular/core';

import { CarouselService } from '../carousel.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'c-carousel-item',
  template: `
    <!--    @if (this.activeClass() || (this.orderClassName() && this.directionClassName())) {-->
    <ng-content />
    <!--    }-->
  `,
  exportAs: 'cCarouselItem',
  host: {
    class: 'carousel-item',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()'
  }
})
export class CarouselItemComponent implements OnInit {
  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #destroyRef = inject(DestroyRef);
  readonly #carouselService = inject(CarouselService);

  #timeoutId?: ReturnType<typeof setTimeout> | undefined;
  #rafId?: ReturnType<typeof requestAnimationFrame> | undefined;

  index?: number;

  /**
   * @ignore
   */
  readonly activeInput = input(false, { transform: booleanAttribute, alias: 'active' });

  readonly active = linkedSignal(this.activeInput);

  /**
   * Time delay before cycling to the next item. If -1, uses carousel interval value.
   * @returns number
   * @default -1
   */
  readonly interval = input<number>(-1);

  /**
   * Carousel item role.
   * @returns string
   * @default 'group'
   */
  readonly role = input('group');

  constructor() {
    this.#elementRef.nativeElement.style.transition = '1ms';
  }

  ngOnInit(): void {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextIndex) => {
      if ('active' in nextIndex) {
        if (this.#carouselService.state.animate && this.#elementRef.nativeElement.style.transition !== '') {
          this.#timeoutId = setTimeout(() => {
            this.#elementRef.nativeElement.style.transition = '';
            this.#timeoutId = undefined;
          }, 500);
        }
        this.prevActive.set(this.active());
        this.active.set(nextIndex.active === this.index);
      }
    });

    // Clean up timeout on destroy
    this.#destroyRef.onDestroy(() => {
      if (this.#timeoutId !== undefined) {
        clearTimeout(this.#timeoutId);
      }
      if (this.#rafId !== undefined) {
        cancelAnimationFrame(this.#rafId);
      }
    });
  }

  protected readonly hostClasses = computed(() => {
    const order = this.orderClassName();
    const direction = this.directionClassName();
    return {
      active: this.activeClass(),
      [`${order}`]: !!order,
      [`${direction}`]: !!direction,
      'd-none': !this.activeClass() && !order && !direction
    };
  });

  readonly prevActive = signal(false);
  readonly activeClass = signal(false);
  readonly orderClassName = signal<string>('');
  readonly directionClassName = signal<string>('');

  readonly #activeEffect = effect((OnCleanup) => {
    const active = this.active();
    const prevActive = untracked(this.prevActive);
    const direction = this.#carouselService.state?.direction;

    this.activeClass.set(prevActive);

    if (active) {
      this.orderClassName.set(`carousel-item-${direction}`);
    }

    if (prevActive || active) {
      if (this.#rafId) {
        cancelAnimationFrame(this.#rafId);
      }

      this.#rafId = requestAnimationFrame(() => {
        //  reflow is necessary to proper transition
        void this.#elementRef.nativeElement.offsetHeight;
        this.directionClassName.set(`carousel-item-${direction === 'next' ? 'start' : 'end'}`);
        this.#rafId = undefined;
      });
    }

    const handleTransitionStart = () => {
      if (active) {
        this.#carouselService.animating.set(true);
      }
    };

    const handleTransitionEnd = () => {
      if (active) {
        this.#carouselService.animating.set(false);
      }
      this.directionClassName.set('');
      this.orderClassName.set('');
      this.activeClass.set(active);
    };

    this.#elementRef.nativeElement.addEventListener('transitionstart', handleTransitionStart);
    this.#elementRef.nativeElement.addEventListener('transitionend', handleTransitionEnd);

    OnCleanup(() => {
      this.#elementRef.nativeElement.removeEventListener('transitionstart', handleTransitionStart);
      this.#elementRef.nativeElement.removeEventListener('transitionend', handleTransitionEnd);
    });
  });
}
