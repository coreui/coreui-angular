import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
  signal,
  untracked,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  imports: [ModalDialogComponent, ModalContentComponent, A11yModule],
  host: {
    class: 'modal',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()',
    '[attr.inert]': 'ariaHidden',
    '[attr.id]': 'id',
    '[attr.aria-modal]': 'ariaModal()',
    '[attr.tabindex]': '-1',
    '[@showHide]': 'animateTrigger()',
    '(@showHide.start)': 'animateStart($event)',
    '(@showHide.done)': 'animateDone($event)',
    '(mousedown)': 'onMouseDownHandler($event)',
    '(click)': 'onClickHandler($event)',
    '(document:keyup)': 'onKeyUpHandler($event)'
  }
})
export class ModalComponent implements OnInit, OnDestroy, AfterViewInit {
  static ngAcceptInputType_ariaModalInput: BooleanInput;
  static ngAcceptInputType_scrollable: BooleanInput;
  static ngAcceptInputType_visibleInput: BooleanInput;

  readonly #document = inject<Document>(DOCUMENT);
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #modalService = inject(ModalService);
  readonly #backdropService = inject(BackdropService);

  readonly #destroyRef = inject(DestroyRef);
  readonly #focusMonitor = inject(FocusMonitor);

  /**
   * Align the modal in the center or top of the screen.
   * @return {'top' | 'center'}
   * @default 'top'
   */
  readonly alignment = input<'top' | 'center'>('top');

  /**
   * Apply a backdrop on body while modal is open.
   * @return boolean | 'static'
   * @default true
   */
  readonly backdrop = input<boolean | 'static'>(true);

  /**
   * Set modal to cover the entire user viewport.
   * @return {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   * @default undefined
   */
  readonly fullscreen = input<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>();

  /**
   * Closes the modal when escape key is pressed.
   * @return boolean
   * @default true
   */
  readonly keyboard = input(true, { transform: booleanAttribute });

  readonly attrId = input<string>(undefined, { alias: 'id' });

  get id() {
    return this.attrId();
  }

  /**
   * Size the component small, large, or extra large.
   * @return {'sm' | 'lg' | 'xl'}
   * @default undefined
   */
  readonly size = input<'sm' | 'lg' | 'xl'>();

  /**
   * Remove animation to create modal that simply appear rather than fade in to view.
   */
  readonly transition = input(true, { transform: booleanAttribute });

  /**
   * Default role for modal
   * @return string
   * @default 'dialog'
   */
  readonly role = input('dialog');

  /**
   * Set aria-modal html attr for modal
   * @type boolean
   * @default null
   */
  readonly ariaModalInput = input(false, { transform: booleanAttribute, alias: 'ariaModal' });

  readonly ariaModal = computed(() => {
    return this.visible() || this.ariaModalInput() ? true : null;
  });

  /**
   * Create a scrollable modal that allows scrolling the modal body.
   * @return boolean
   * @default false
   */
  readonly scrollable = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of modal component.
   * @return boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal(this.visibleInput);

  readonly #visibleInputEffect = effect(() => {
    const visible = this.visible();
    untracked(() => {
      this.setBodyStyles(visible);
      this.setBackdrop(this.backdrop() !== false && visible);
      this.visibleChange?.emit(visible);
    });
  });

  readonly #activeElement = signal<HTMLElement | null>(null);

  readonly #visibleEffect = effect(() => {
    const visible = this.visible();
    const afterViewInit = this.#afterViewInit();
    untracked(() => {
      if (visible && afterViewInit) {
        this.#activeElement.set(this.#document.activeElement as HTMLElement);
        // this.#activeElement()?.blur();
        setTimeout(() => {
          const focusable = this.modalContentRef()?.nativeElement.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]), button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
          );
          if (focusable?.length) {
            this.#focusMonitor.focusVia(focusable[0], 'keyboard');
          }
        });
      } else {
        const activeElement = this.#activeElement();
        if (activeElement && this.#document.contains(activeElement)) {
          this.#focusMonitor.focusVia(activeElement, 'keyboard');
          setTimeout(() => {
            // this.#activeElement()?.focus();
            this.#activeElement.set(null);
          });
        }
      }
    });
  });

  /**
   * Event triggered on modal dismiss.
   * @return boolean
   */
  readonly visibleChange = output<boolean>();

  // @ViewChild(ModalContentComponent, { read: ElementRef }) modalContent!: ElementRef;
  // @ViewChild('modalContentRef', { read: ElementRef }) modalContentRef!: ElementRef;
  // readonly modalContentRef = viewChild(ModalContentComponent, { read: ElementRef });
  readonly modalContentRef = viewChild('modalContentRef', { read: ElementRef });

  #activeBackdrop!: any;

  // private inBoundingClientRect!: boolean;

  readonly hostClasses = computed(() => {
    return {
      modal: true,
      fade: this.transition(),
      show: this.show
    } as Record<string, boolean>;
  });

  get ariaHidden(): boolean | null {
    return this.visible() ? null : true;
  }

  readonly animateTrigger = computed(() => {
    return this.visible() ? 'visible' : 'hidden';
  });

  get show(): boolean {
    return this.visible() && this.#show();
  }

  set show(value: boolean) {
    this.#show.set(value);
  }

  readonly #show = signal(true);

  animateStart(event: AnimationEvent) {
    if (event.toState === 'visible') {
      this.#backdropService.hideScrollbar();
      this.#renderer.setStyle(this.#hostElement.nativeElement, 'display', 'block');
    } else {
      if (!this.transition()) {
        this.#renderer.setStyle(this.#hostElement.nativeElement, 'display', 'none');
      }
    }
  }

  animateDone(event: AnimationEvent) {
    setTimeout(() => {
      if (event.toState === 'hidden') {
        this.#renderer.setStyle(this.#hostElement.nativeElement, 'display', 'none');
        this.#backdropService.resetScrollbar();
      }
    });
    this.show = this.visible();
  }

  onKeyUpHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.keyboard() && this.visible()) {
      if (this.backdrop() === 'static') {
        this.setStaticBackdrop();
      } else {
        this.#modalService.toggle({ show: false, modal: this });
      }
    }
  }

  private mouseDownTarget: EventTarget | null = null;

  public onMouseDownHandler($event: MouseEvent): void {
    this.mouseDownTarget = $event.target;
  }

  public onClickHandler($event: MouseEvent): void {
    if (this.mouseDownTarget !== $event.target) {
      this.mouseDownTarget = null;
      return;
    }

    const targetElement = $event.target;
    if (targetElement === this.#hostElement.nativeElement) {
      if (this.backdrop() === 'static') {
        this.setStaticBackdrop();
        return;
      }

      this.#modalService.toggle({ show: false, modal: this });
    }
  }

  ngOnInit(): void {
    this.stateToggleSubscribe();
  }

  readonly #afterViewInit = signal(false);

  ngAfterViewInit(): void {
    this.#afterViewInit.set(true);
  }

  ngOnDestroy(): void {
    this.#modalService.toggle({ show: false, modal: this });
    this.#afterViewInit.set(false);
    this.setBackdrop(false);
  }

  private stateToggleSubscribe(): void {
    this.#modalService.modalState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((action) => {
      if (this === action.modal || this.id === action.id) {
        if ('show' in action) {
          this.visible.update((visible) => (action?.show === 'toggle' ? !visible : action.show));
        }
      } else {
        if (this.visible()) {
          this.visible.set(false);
        }
      }
    });
  }

  private setBackdrop(setBackdrop: boolean): void {
    this.#activeBackdrop = setBackdrop
      ? this.#backdropService.setBackdrop('modal')
      : this.#backdropService.clearBackdrop(this.#activeBackdrop);
  }

  private setBodyStyles(open: boolean): void {
    if (open) {
      if (this.backdrop() === true || this.backdrop() === 'static') {
        this.#renderer.addClass(this.#document.body, 'modal-open');
      }
    } else {
      this.#renderer.removeClass(this.#document.body, 'modal-open');
    }
  }

  private setStaticBackdrop(): void {
    if (this.transition()) {
      this.#renderer.addClass(this.#hostElement.nativeElement, 'modal-static');
      this.#renderer.setStyle(this.#hostElement.nativeElement, 'overflow-y', 'hidden');
      setTimeout(() => {
        this.#renderer.removeClass(this.#hostElement.nativeElement, 'modal-static');
        this.#renderer.removeStyle(this.#hostElement.nativeElement, 'overflow-y');
      }, 300);
    }
  }
}
