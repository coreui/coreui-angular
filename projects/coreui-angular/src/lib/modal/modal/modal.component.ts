import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  signal,
  ViewChild,
  WritableSignal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';

import { ModalService } from '../modal.service';
import { BackdropService } from '../../backdrop/backdrop.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'c-modal',
  animations: [
    trigger('showHide', [
      state(
        'visible',
        style({
          // display: 'block'
        })
      ),
      state(
        'hidden',
        style({
          // display: 'none'
        })
      ),
      transition('visible <=> *', [animate('150ms')])
    ])
  ],
  templateUrl: './modal.component.html',
  exportAs: 'cModal',
  standalone: true,
  imports: [ModalDialogComponent, ModalContentComponent, A11yModule],
  host: { class: 'modal' }
})
export class ModalComponent implements OnInit, OnDestroy, AfterViewInit {
  #destroyRef = inject(DestroyRef);
  #focusMonitor = inject(FocusMonitor);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private modalService: ModalService,
    private backdropService: BackdropService
  ) {}

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
  @Input({ transform: booleanAttribute }) keyboard: boolean = true;

  @Input() id?: string;

  /**
   * Size the component small, large, or extra large.
   */
  @Input() size?: 'sm' | 'lg' | 'xl';

  /**
   * Remove animation to create modal that simply appear rather than fade in to view.
   */
  @Input({ transform: booleanAttribute }) transition = true;

  /**
   * Default role for modal. [docs]
   * @type string
   * @default 'dialog'
   */
  @Input() @HostBinding('attr.role') role: string = 'dialog';

  /**
   * Set aria-modal html attr for modal. [docs]
   * @type boolean
   * @default null
   */
  @Input()
  @HostBinding('attr.aria-modal')
  set ariaModal(value: boolean | null) {
    this.#ariaModal = value;
  }

  get ariaModal(): boolean | null {
    return this.visible || this.#ariaModal ? true : null;
  }

  #ariaModal: boolean | null = null;

  /**
   * Create a scrollable modal that allows scrolling the modal body.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) scrollable: boolean = false;

  /**
   * Toggle the visibility of modal component.
   * @type boolean
   */
  @Input({ transform: booleanAttribute })
  set visible(value: boolean) {
    if (this.#visible() !== value) {
      this.#visible.set(value);
      this.setBackdrop(this.backdrop !== false && value);
      this.setBodyStyles(value);
      this.visibleChange.emit(value);
    }
  }

  get visible(): boolean {
    return this.#visible();
  }

  #visible: WritableSignal<boolean> = signal(false);

  #activeElement: HTMLElement | null = null;

  #visibleEffect = effect(() => {
    if (this.#visible() && this.#afterViewInit()) {
      this.#activeElement = this.document.activeElement as HTMLElement;
      // this.#activeElement?.blur();
      setTimeout(() => {
        const focusable = this.modalContentRef.nativeElement.querySelectorAll(
          '[tabindex]:not([tabindex="-1"]), button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
        );
        if (focusable.length) {
          this.#focusMonitor.focusVia(focusable[0], 'keyboard');
        }
      });
    } else {
      if (this.document.contains(this.#activeElement)) {
        setTimeout(() => {
          this.#activeElement?.focus();
          this.#activeElement = null;
        });
      }
    }
  });

  /**
   * Event triggered on modal dismiss.
   */
  @Output() visibleChange = new EventEmitter<boolean>();

  @ViewChild(ModalContentComponent, { read: ElementRef }) modalContent!: ElementRef;
  @ViewChild('modalContentRef', { read: ElementRef }) modalContentRef!: ElementRef;

  #activeBackdrop!: any;

  // private inBoundingClientRect!: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      modal: true,
      fade: this.transition,
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

  private _show = true;

  @HostListener('@showHide.start', ['$event'])
  animateStart(event: AnimationEvent) {
    if (event.toState === 'visible') {
      this.backdropService.hideScrollbar();
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'block');
    } else {
      if (!this.transition) {
        this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
      }
    }
  }

  @HostListener('@showHide.done', ['$event'])
  animateDone(event: AnimationEvent) {
    setTimeout(() => {
      if (event.toState === 'hidden') {
        this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
      }
    });
    this.show = this.visible;
  }

  @HostListener('document:keyup', ['$event'])
  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.keyboard && this.visible) {
      if (this.backdrop === 'static') {
        this.setStaticBackdrop();
      } else {
        this.modalService.toggle({ show: false, modal: this });
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
    if (this.mouseDownTarget !== $event.target) {
      this.mouseDownTarget = null;
      return;
    }

    const targetElement = $event.target;
    if (targetElement === this.hostElement.nativeElement) {
      if (this.backdrop === 'static') {
        this.setStaticBackdrop();
        return;
      }

      this.modalService.toggle({ show: false, modal: this });
    }
  }

  ngOnInit(): void {
    this.stateToggleSubscribe();
  }

  #afterViewInit = signal(false);

  ngAfterViewInit(): void {
    this.#afterViewInit.set(true);
  }

  ngOnDestroy(): void {
    this.modalService.toggle({ show: false, modal: this });
    this.#afterViewInit.set(false);
  }

  private stateToggleSubscribe(): void {
    this.modalService.modalState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((action) => {
      if (this === action.modal || this.id === action.id) {
        if ('show' in action) {
          this.visible = action?.show === 'toggle' ? !this.visible : action.show;
        }
      } else {
        if (this.visible) {
          this.visible = false;
        }
      }
    });
  }

  private setBackdrop(setBackdrop: boolean): void {
    this.#activeBackdrop = setBackdrop
      ? this.backdropService.setBackdrop('modal')
      : this.backdropService.clearBackdrop(this.#activeBackdrop);
  }

  private setBodyStyles(open: boolean): void {
    if (open) {
      if (this.backdrop === true) {
        this.renderer.addClass(this.document.body, 'modal-open');
      }
    } else {
      this.renderer.removeClass(this.document.body, 'modal-open');
    }
  }

  private setStaticBackdrop(): void {
    if (this.transition) {
      this.renderer.addClass(this.hostElement.nativeElement, 'modal-static');
      this.renderer.setStyle(this.hostElement.nativeElement, 'overflow-y', 'hidden');
      setTimeout(() => {
        this.renderer.removeClass(this.hostElement.nativeElement, 'modal-static');
        this.renderer.removeStyle(this.hostElement.nativeElement, 'overflow-y');
      }, 300);
    }
  }
}
