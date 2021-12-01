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
  Renderer2,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';

import { ModalService } from '../modal.service';
import { BackdropService } from '../../backdrop/backdrop.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'c-modal',
  animations: [
    trigger('showHide', [
      state(
        'visible',
        style({
          display: 'block'
        })
      ),
      state(
        'hidden',
        style({
          display: 'none'
        })
      ),
      transition('visible <=> *', [animate('300ms')],)
    ])
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'cModal'
})
export class ModalComponent implements OnInit, OnDestroy {

  static ngAcceptInputType_scrollable: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private modalService: ModalService,
    private backdropService: BackdropService
  ) { }

  /**
   * Align the modal in the center or top of the screen.
   * @type {'top' | 'center'}
   * @default 'top'
   */
  @Input() alignment?: 'top' | 'center' = 'top';
  /**
   * Apply a backdrop on body while modal is open.
   * @type boolean | 'static'
   * @default true
   */
  @Input() backdrop: boolean | 'static' = true;
  /**
   * Set modal to cover the entire user viewport.
   * @type {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   * @default undefined
   */
  @Input() fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * Closes the modal when escape key is pressed.
   * @type boolean
   * @default true
   */
  @Input() keyboard = true;
  @Input() id?: string;
  /**
   * Size the component small, large, or extra large.
   */
  @Input() size?: 'sm' | 'lg' | 'xl';
  /**
   * Remove animation to create modal that simply appear rather than fade in to view.
   */
  @Input() transition = true;
  /**
   * Default role for modal. [docs]
   * @type string
   * @default 'dialog'
   */
  @Input() @HostBinding('attr.role') role = 'dialog';
  /**
   * Set aria-modal html attr for modal. [docs]
   * @type boolean
   * @default true
   */
  @Input() @HostBinding('attr.aria-modal') ariaModal = true;

  /**
   * Create a scrollable modal that allows scrolling the modal body.
   * @type boolean
   */
  @Input()
  set scrollable(value: boolean) {
    this._scrollable = coerceBooleanProperty(value);
  }
  get scrollable(): boolean {
    return this._scrollable;
  }
  private _scrollable = false;

  /**
   * Toggle the visibility of modal component.
   * @type boolean
   */
  @Input()
  set visible(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    if(this._visible !== newValue) {
      this._visible = newValue;
      this.setBackdrop(this.backdrop !== false && newValue);
      this.setBodyStyles(newValue);
      this.visibleChange.emit(newValue);
    }
  }
  get visible(): boolean {
    return this._visible;
  }
  private _visible!: boolean;

  /**
   * Event triggered on modal dismiss.
   */
  @Output() visibleChange = new EventEmitter<boolean>();

  @ViewChild(ModalContentComponent, {read: ElementRef}) modalContent!: ElementRef;
  private activeBackdrop!: any;
  private stateToggleSubscription!: Subscription;
  private inBoundingClientRect!: boolean;


  @HostBinding('class')
  get hostClasses(): any {
    return {
      modal: true,
      fade: this.transition,
      show: this.show,
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
  get animateTrigger(): string {
    return this.visible ? 'visible' : 'hidden';
  }

  private _show = true;
  get show(): boolean {
    return this.visible && this._show;
  }
  set show(value: boolean) {
    this._show = value;
  }

  private get scrollbarWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = this.document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs((window?.innerWidth ?? documentWidth) - documentWidth);
    return `${scrollbarWidth}px`;
  }

  @HostListener('@showHide.start', ['$event'])
  animateStart(event: AnimationEvent) {
    this.renderer.setStyle(this.hostElement.nativeElement, 'overflow-y', 'hidden');
    this.show = this.visible;
  }

  @HostListener('@showHide.done', ['$event'])
  animateDone(event: AnimationEvent) {
    const scrollbarWidth = this.scrollbarWidth;
    setTimeout(() => {
      if (event.toState === 'visible') {
        this.inBoundingClientRect = this.modalContent?.nativeElement?.getBoundingClientRect().height <= this.document?.documentElement.clientHeight;
        if (!this.inBoundingClientRect) {
          this.renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
          this.renderer.setStyle(this.document.body, 'padding-right', scrollbarWidth);
        } else {
          this.renderer.removeStyle(this.document.body, 'overflow-y');
          this.renderer.removeStyle(this.document.body, 'padding-right');
        }
        if (this.fullscreen === true) {
          this.renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
        }
        this.renderer.removeStyle(this.hostElement.nativeElement, 'overflow-y');
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.keyboard && this.visible) {
      if (this.backdrop === 'static') {
        this.setStaticBackdrop();
      } else {
        this.modalService.toggle({show: false, modal: this});
      }
    }
  }

  private mouseDownTarget: EventTarget | null = null;

  @HostListener('mousedown', ['$event'])
  public onMouseDownHandler($event: MouseEvent): void {
    this.mouseDownTarget = $event.target;
  }

  @HostListener('click', ['$event'])
  public onClickHandler($event: MouseEvent): void {
    $event.stopPropagation();
    if (this.mouseDownTarget !== $event.target) {
      this.mouseDownTarget = null;
      return;
    }
    if (this.backdrop === 'static') {
      this.setStaticBackdrop();
      return;
    }
    this.modalService.toggle({show: false, modal: this});
  }

  ngOnInit(): void {
    this.stateToggleSubscribe();
  }

  ngOnDestroy(): void {
    this.modalService.toggle({show: false, modal: this});
    this.stateToggleSubscribe(false);
  }

  private stateToggleSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.stateToggleSubscription = this.modalService.modalState$.subscribe(
        (action) => {
          if (this === action.modal || this.id === action.id) {
            if ('show' in action) {
              this.visible = action?.show === 'toggle' ? !this.visible : action.show;
            }
          } else {
            if (this.visible) {
              this.visible = false;
            }
          }
        }
      );
    } else {
      this.stateToggleSubscription.unsubscribe();
    }
  }

  private setBackdrop(setBackdrop: boolean): void {
    if (setBackdrop) {
      this.activeBackdrop = this.backdropService.setBackdrop('modal');
    } else {
      this.activeBackdrop = this.backdropService.clearBackdrop(this.activeBackdrop);
    }
  }

  private setBodyStyles(open: boolean): void {
    if (open) {
      if (this.fullscreen === true) {
        this.renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
      }
      if (this.backdrop === true) {
        this.renderer.addClass(this.document.body, 'modal-open');
      }
    } else {
      this.renderer.removeClass(this.document.body, 'modal-open');
      this.renderer.removeStyle(this.document.body, 'overflow-y');
      this.renderer.removeStyle(this.document.body, 'padding-right');
    }
  }

  private setStaticBackdrop(): void {
    if (this.transition) {
      this.renderer.addClass(this.hostElement.nativeElement, 'modal-static');
      this.renderer.setStyle(this.hostElement.nativeElement, 'overflow-y', 'hidden');
      setTimeout(() => {
        this.renderer.removeClass(this.hostElement.nativeElement, 'modal-static');
        this.renderer.removeStyle(this.hostElement.nativeElement, 'overflow-y');
      }, 400);
    }
  }
}
