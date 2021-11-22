import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';

import { CarouselState } from '../carousel-state';

@Component({
  selector: 'c-carousel-control',
  templateUrl: './carousel-control.component.html',
  styleUrls: ['./carousel-control.component.scss'],
})
export class CarouselControlComponent implements AfterViewInit {

  constructor(
    private changeDetector: ChangeDetectorRef,
    private carouselState: CarouselState,
  ) {}

  private _caption?: string;
  /**
   * Carousel control caption. [docs]
   * @type string
   */
  @Input()
  set caption(value) {
    this._caption = value;
  }
  get caption(): string {
    return !!this._caption ? this._caption : this.direction === 'prev' ? 'Previous' : 'Next';
  }
  /**
   * Carousel control direction. [docs]
   * @type {'next' | 'prev'}
   */
  @Input() direction: 'prev' | 'next' = 'next';

  @HostBinding('attr.role')
  get hostRole(): string {
    return 'button';
  }

  @HostBinding('class')
  get hostClasses(): string {
    return `carousel-control-${this.direction}`;
  }

  get carouselControlIconClass(): string {
    return `carousel-control-${this.direction}-icon`;
  }

  @ViewChild('content') content?: ElementRef;

  hasContent = true;

  @HostListener('keyup', ['$event'])
  onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.play();
    }
    if ($event.key === 'ArrowLeft') {
      this.play('prev');
    }
    if ($event.key === 'ArrowRight') {
      this.play('next');
    }
  }

  @HostListener('click', ['$event'])
  public onClick($event: MouseEvent): void {
    this.play();
  }

  ngAfterViewInit(): void  {
    this.hasContent = this.content?.nativeElement.childNodes.length ?? false;
    this.changeDetector.detectChanges();
  }

  private play(direction = this.direction): void  {
    const nextIndex = this.carouselState.direction(direction);
    this.carouselState.state = { activeItemIndex: nextIndex };
  }
}
