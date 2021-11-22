import {
  AfterContentInit,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { CarouselConfig } from '../carousel.config';

@Component({
  selector: 'c-carousel',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService, CarouselState, CarouselConfig]
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
   */
  @Input() interval = 0;
  /**
   * Set type of the transition.
   * @type {'slide' | 'crossfade'}
   * @default 'slide'
   */
  @Input() transition: 'slide' | 'crossfade' = 'slide';
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

  @HostListener('mouseenter', ['$event'])
  @HostListener('mousedown', ['$event'])
  public onMouseenter($event: MouseEvent): void {
    this.resetTimer();
  }

  @HostListener('mouseleave', ['$event'])
  @HostListener('mouseup', ['$event'])
  public onMouseleave($event: MouseEvent): void {
    this.setTimer();
  }

  constructor(
    @Inject(CarouselConfig) private config: CarouselConfig,
    private carouselService: CarouselService,
    private carouselState: CarouselState
  ) {
    Object.assign(this, config);
  }

  ngOnInit(): void {
    this.carouselStateSubscribe();
  }

  ngOnDestroy(): void {
    this.carouselStateSubscribe(false);
  }

  ngAfterContentInit(): void {
    this.carouselState.state = { activeItemIndex: this.activeIndex, animate: this.animate };
    this.setTimer();
  }

  setTimer(): void {
    this.resetTimer();
    if (this.interval > 0) {
      this.timerId = setTimeout(() => {
        const nextIndex = this.carouselState.direction(this.direction);
        this.carouselState.state = { activeItemIndex: nextIndex };
      }, this.interval);
    }
  }

  resetTimer(): void {
    clearTimeout(this.timerId);
  }

  private carouselStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        if ('active' in nextIndex) {
          this.setTimer();
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
}
