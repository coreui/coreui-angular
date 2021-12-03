import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { animate, state, style, transition, trigger, } from '@angular/animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';

import { OffcanvasService } from '../offcanvas.service';
import { BackdropService } from '../../backdrop/backdrop.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

let nextId = 0;

@Component({
  selector: 'c-offcanvas',
  animations: [
    trigger('showHide', [
      state(
        'true',
        style({
          visibility: 'visible',
        })
      ),
      state(
        'false',
        style({
          visibility: 'hidden',
        })
      ),
      transition('true => false', [animate('300ms')]),
    ]),
  ],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  exportAs: 'cOffcanvas',
})
export class OffcanvasComponent implements OnChanges, OnInit, OnDestroy {

  static ngAcceptInputType_scroll: BooleanInput;

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private offcanvasService: OffcanvasService,
    private backdropService: BackdropService
  ) { }

  /**
   * Apply a backdrop on body while offcanvas is open.
   * @type boolean
   * @default true
   */
  @Input() backdrop = true;

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
  };
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
   */
  @Input()
  set visible(value: boolean) {
    this._visible = coerceBooleanProperty(value);
    if (value) {
      this.setBackdrop(this.backdrop);
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.setScroll();
    this.visibleChange.emit(value);
  }
  get visible(): boolean {
    return this._visible;
  }
  private _visible!: boolean;

  /**
   * Event triggered on visible change.
   */
  @Output() visibleChange = new EventEmitter<boolean>();

  private activeBackdrop!: any;

  private stateToggleSubscription!: Subscription;
  private backdropClickSubscription!: Subscription;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      offcanvas: true,
      [`offcanvas-${this.placement}`]: !!this.placement,
      show: this.visible,
    };
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): boolean | null {
    return this.visible ? null : true;
  };

  @HostBinding('attr.tabindex')
  get tabIndex(): string | null {
    return '-1';
  }

  @HostBinding('@showHide')
  get animateType(): boolean {
    return this.visible;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.keyboard && this.visible) {
      this.offcanvasService.toggle({ show: false, id: this.id });
    }
  }

  ngOnInit(): void {
    this.setScroll();
    this.stateToggleSubscribe();
  }

  ngOnDestroy(): void {
    this.offcanvasService.toggle({ show: false, id: this.id });
    this.stateToggleSubscribe(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scroll']) {
      this.setScroll();
    }
  }

  private stateToggleSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.stateToggleSubscription = this.offcanvasService.offcanvasState$.subscribe(
        (action) => {
          if (this === action.offcanvas || this.id === action.id) {
            if ('show' in action) {
              this.visible = action?.show === 'toggle' ? !this.visible : action.show;
            }
          }
        }
      );
    } else {
      this.stateToggleSubscription.unsubscribe();
    }
  }

  private backdropClickSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.backdropClickSubscription = this.backdropService.backdropClick$.subscribe(
        (clicked) => {
          this.offcanvasService.toggle({ show: !clicked, id: this.id });
        }
      );
    } else {
      this.backdropClickSubscription?.unsubscribe();
    }
  }

  private setBackdrop(setBackdrop: boolean): void {
    if (setBackdrop) {
      this.activeBackdrop = this.backdropService.setBackdrop('offcanvas');
      this.backdropClickSubscribe();
    } else {
      this.activeBackdrop = this.backdropService.clearBackdrop(this.activeBackdrop);
      this.backdropClickSubscribe(false);
    }
  }

  setFocus(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.hostElement.nativeElement.focus());
    }
  }

  setScroll() {
    if (this.visible) {
      if (!this.scroll) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        this.renderer.setStyle(this.document.body, 'paddingRight.px', '0');
      }
      return;
    }
    if (!this.scroll) {
      this.renderer.removeStyle(this.document.body, 'overflow');
      this.renderer.removeStyle(this.document.body, 'paddingRight');
    }
  }
}
