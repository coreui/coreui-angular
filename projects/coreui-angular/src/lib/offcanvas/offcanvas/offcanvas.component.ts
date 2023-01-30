import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';

import { BackdropService } from '../../backdrop/backdrop.service';
import { OffcanvasService } from '../offcanvas.service';

let nextId = 0;

@Component({
  selector: 'c-offcanvas',
  animations: [
    trigger('showHide', [
      state(
        'visible',
        style({
          // visibility: 'visible'
        })
      ),
      state(
        'hidden',
        style({
          // visibility: 'hidden'
        })
      ),
      transition('visible <=> *', [animate('300ms')])
    ])
  ],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  exportAs: 'cOffcanvas'
})
export class OffcanvasComponent implements OnInit, OnDestroy {

  static ngAcceptInputType_scroll: BooleanInput;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private offcanvasService: OffcanvasService,
    private backdropService: BackdropService
  ) {}

  /**
   * Apply a backdrop on body while offcanvas is open.
   * @type boolean | 'static'
   * @default true
   */
  @Input() backdrop: boolean | 'static' = true;

  /**
   * Closes the offcanvas when escape key is pressed [docs]
   * @type boolean
   * @default true
   */
  @Input() keyboard = true;

  /**
   * Components placement, there’s no default placement.
   * @type {'start' | 'end' | 'top' | 'bottom'}
   * @default 'start'
   */
  @Input() placement: string | 'start' | 'end' | 'top' | 'bottom' = 'start';

  /**
   * Allow body scrolling while offcanvas is visible.
   * @type boolean
   */
  @Input()
  set scroll(value: boolean) {
    this._scroll = coerceBooleanProperty(value);
  }

  get scroll() {
    return this._scroll;
  }

  private _scroll = false;

  @Input() id = `offcanvas-${this.placement}-${nextId++}`;

  /**
   * Default role for offcanvas. [docs]
   * @type string
   * @default 'dialog'
   */
  @Input() @HostBinding('attr.role') role = 'dialog';

  /**
   * Set aria-modal html attr for offcanvas. [docs]
   * @type boolean
   * @default true
   */
  @Input() @HostBinding('attr.aria-modal') ariaModal = true;

  /**
   * Toggle the visibility of offcanvas component.
   * @type boolean
   * @default false
   */
  @Input()
  set visible(value: boolean) {
    this._visible = coerceBooleanProperty(value);
    if (this._visible) {
      this.setBackdrop(this.backdrop);
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.visibleChange.emit(value);
  }

  get visible(): boolean {
    return this._visible;
  }

  private _visible: boolean = false;

  /**
   * Event triggered on visible change.
   */
  @Output() visibleChange = new EventEmitter<boolean>();

  private activeBackdrop!: HTMLDivElement;
  private scrollbarWidth!: string;

  private stateToggleSubscription!: Subscription;
  private backdropClickSubscription!: Subscription;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      offcanvas: true,
      [`offcanvas-${this.placement}`]: !!this.placement,
      show: this.show
    };
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): boolean | null {
    return this.visible ? null : true;
  }

  @HostBinding('attr.tabindex')
  get tabIndex(): string | null {
    return '-1';
  }

  @HostBinding('@showHide')
  get animateTrigger(): string {
    return this.visible ? 'visible' : 'hidden';
  }

  get show(): boolean {
    return this.visible && this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  private _show = false;

  @HostListener('@showHide.start', ['$event'])
  animateStart(event: AnimationEvent) {
    const scrollbarWidth = this.scrollbarWidth;
    if (event.toState === 'visible') {
      if (!this.scroll) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        this.renderer.setStyle(this.document.body, 'padding-right', scrollbarWidth);
      }
      this.renderer.addClass(this.hostElement.nativeElement, 'showing');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'hiding');
    }
  }

  @HostListener('@showHide.done', ['$event'])
  animateDone(event: AnimationEvent) {
    setTimeout(() => {
      if (event.toState === 'visible') {
        this.renderer.removeClass(this.hostElement.nativeElement, 'showing');
      }
      if (event.toState === 'hidden') {
        this.renderer.removeClass(this.hostElement.nativeElement, 'hiding');
        this.renderer.removeStyle(this.document.body, 'overflow');
        this.renderer.removeStyle(this.document.body, 'paddingRight');
      }
    });
    this.show = this.visible;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent): void {
    if (
      event.key === 'Escape' &&
      this.keyboard &&
      this.visible &&
      this.backdrop !== 'static'
    ) {
      this.offcanvasService.toggle({ show: false, id: this.id });
    }
  }

  ngOnInit(): void {
    this.scrollbarWidth = this.backdropService.scrollbarWidth;
    this.stateToggleSubscribe();
    // hotfix to avoid end offcanvas flicker on first render
    this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'flex');
  }

  ngOnDestroy(): void {
    this.offcanvasService.toggle({ show: false, id: this.id });
    this.stateToggleSubscribe(false);
  }

  private stateToggleSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.stateToggleSubscription =
        this.offcanvasService.offcanvasState$.subscribe((action) => {
          if (this === action.offcanvas || this.id === action.id) {
            if ('show' in action) {
              this.visible =
                action?.show === 'toggle' ? !this.visible : action.show;
            }
          }
        });
    } else {
      this.stateToggleSubscription.unsubscribe();
    }
  }

  private backdropClickSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.backdropClickSubscription =
        this.backdropService.backdropClick$.subscribe((clicked) => {
          this.offcanvasService.toggle({ show: !clicked, id: this.id });
        });
    } else {
      this.backdropClickSubscription?.unsubscribe();
    }
  }

  private setBackdrop(setBackdrop: boolean | 'static'): void {
    this.scrollbarWidth = this.backdropService.scrollbarWidth;
    this.activeBackdrop = !!setBackdrop ? this.backdropService.setBackdrop('offcanvas')
                                        : this.backdropService.clearBackdrop(this.activeBackdrop);
    setBackdrop === true ? this.backdropClickSubscribe()
                         : this.backdropClickSubscribe(false);
  }

  setFocus(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.hostElement.nativeElement.focus());
    }
  }
}
