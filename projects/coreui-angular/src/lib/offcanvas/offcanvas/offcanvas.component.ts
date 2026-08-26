import { A11yModule } from '@angular/cdk/a11y';
import { BooleanInput } from '@angular/cdk/coercion';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { DomPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import {
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
  PLATFORM_ID,
  Renderer2,
  untracked
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { BackdropService } from '../../backdrop/backdrop.service';
import { ThemeDirective } from '../../shared';
import { OffcanvasService } from '../offcanvas.service';

let nextId = 0;

@Component({
  selector: 'c-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  exportAs: 'cOffcanvas',
  imports: [A11yModule],
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: {
    '[attr.id]': 'id()',
    '[attr.inert]': 'ariaHidden() || null',
    '[attr.role]': 'role()',
    '[attr.aria-modal]': 'ariaModal()',
    '[attr.tabindex]': 'tabIndex',
    '[class]': 'hostClasses()',
    '(document:keydown)': 'onKeyDownHandler($event)'
  }
})
export class OffcanvasComponent implements OnInit, OnDestroy {
  // Treats input as boolean value, even if provided as string or other types. Uses angular coercion mechanism
  static ngAcceptInputType_ariaModal: BooleanInput;
  static ngAcceptInputType_keyboard: BooleanInput;
  static ngAcceptInputType_scroll: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  readonly #document = inject<Document>(DOCUMENT);
  readonly #platformId = inject(PLATFORM_ID);
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #offcanvasService = inject(OffcanvasService);
  readonly #backdropService = inject(BackdropService);
  readonly #breakpointObserver = inject(BreakpointObserver);
  readonly #destroyRef = inject(DestroyRef);

  /**
   * Apply a backdrop on the body while offcanvas is open.
   * @returns boolean | 'static'
   * @default true
   */
  readonly backdrop = input<boolean | 'static'>(true);

  /**
   * Appends the offcanvas to a specific element. You can pass an HTML element or function that returns a single element. By default, `document.body`.
   * @since 5.7.21
   * @returns Element | (() => Element | null) | null
   * @default document.body
   */
  readonly container = input<Element | (() => Element | null) | null>(this.#document.body);

  /**
   * Closes the offcanvas when the escape key is pressed
   * @returns boolean
   * @default true
   */
  readonly keyboard = input(true, { transform: booleanAttribute });

  /**
   * Component placement
   * @returns string | 'start' | 'end' | 'top' | 'bottom'
   * @default 'start'
   */
  readonly placement = input<string | 'start' | 'end' | 'top' | 'bottom'>('start');

  /**
   * Generates offcanvas using a portal
   * @since 5.7.21
   * @returns boolean
   * @default false
   */
  readonly portal = input(false, { transform: booleanAttribute });

  /**
   * Responsive offcanvas property hides content outside the viewport from a specified breakpoint and down.
   * @returns boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
   * @default true
   * @since 4.3.10
   */
  readonly responsive = input<(boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl') | undefined>(true);

  /**
   * Html id attribute, required for programmatic visibility change.
   * @returns string
   */
  readonly id = input(`offcanvas-${this.placement()}-${nextId++}`);

  /**
   * Default role for offcanvas
   * @returns string
   * @default 'dialog'
   */
  readonly role = input<string>('dialog');

  /**
   * Set aria-modal html attr for offcanvas
   * @returns boolean
   * @default true
   */
  readonly ariaModal = input(true, { transform: booleanAttribute });

  #activeBackdrop!: HTMLDivElement;
  #backdropClickSubscription!: Subscription;
  #layoutChangeSubscription!: Subscription;
  #hideFallbackId?: ReturnType<typeof setTimeout>;
  #isShown = false;

  /**
   * Allow body scrolling while offcanvas is visible.
   * @returns boolean
   * @default false
   */
  readonly scroll = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of offcanvas component.
   * @returns boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal({
    source: this.visibleInput,
    computation: (value) => value
  });

  protected readonly domPortal = new DomPortal(this.#hostElement.nativeElement);
  protected domPortalOutlet!: DomPortalOutlet;

  protected domPortalCleanup = () => {
    if (this.domPortalOutlet?.hasAttached()) {
      this.domPortalOutlet.detach();
    }
  };

  readonly #portalEffect = effect(() => {
    const visible = this.visible();
    const containerInput = this.container();
    const portalEnabled = this.portal();
    untracked(() => {
      if (!visible) {
        return;
      }
      const container = typeof containerInput === 'function' ? containerInput() : containerInput;
      this.domPortalCleanup();
      if (container && portalEnabled) {
        this.domPortalOutlet = new DomPortalOutlet(container);
        this.domPortalOutlet.attach(this.domPortal);
        // Re-inserting the host drops its computed style, so the show classes applied later in
        // this same cycle would have no starting point to animate from. Force a reflow to commit it.
        void this.#hostElement.nativeElement.offsetHeight;
      }
    });
  });

  readonly visibleEffect = effect(() => {
    const visible = this.visible();
    this.animateStart(visible);
    if (visible) {
      this.setBackdrop(this.backdrop());
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.layoutChangeSubscribe(visible);
    this.visibleChange?.emit(visible);
  });

  /**
   * Event triggered on visible change.
   * @returns boolean
   */
  readonly visibleChange = output<boolean>();

  readonly hostClasses = computed(() => {
    const responsive = this.responsive();
    const placement = this.placement();
    const visible = this.visible();
    return {
      offcanvas: typeof responsive === 'boolean',
      [`offcanvas-${responsive}`]: typeof responsive !== 'boolean',
      [`offcanvas-${placement}`]: !!placement,
      show: visible
    } as Record<string, boolean>;
  });

  readonly ariaHidden = computed(() => {
    return this.visible() ? null : true;
  });

  get tabIndex(): string | null {
    return '-1';
  }

  get show(): boolean {
    return this.visible();
  }

  set show(value: boolean) {
    this.visible.set(value);
  }

  get responsiveBreakpoint(): string | false {
    const responsive = this.responsive();
    if (typeof responsive !== 'string') {
      return false;
    }
    const element: Element = this.#document.documentElement;
    const breakpointValue =
      this.#document.defaultView
        ?.getComputedStyle(element)
        ?.getPropertyValue(`--cui-breakpoint-${responsive.trim()}`) ?? false;
    return breakpointValue ? `${parseFloat(breakpointValue.trim()) - 0.02}px` : false;
  }

  animateStart(visible: boolean = this.visible()): void {
    const wasShown = this.#isShown;
    this.#isShown = visible;
    this.#clearHideFallback();
    if (visible) {
      if (!this.scroll()) {
        this.#backdropService.hideScrollbar();
      }
      this.#renderer.removeClass(this.#hostElement.nativeElement, 'hiding');
      this.#renderer.addClass(this.#hostElement.nativeElement, 'showing');
    } else {
      this.#renderer.removeClass(this.#hostElement.nativeElement, 'showing');
      this.#renderer.addClass(this.#hostElement.nativeElement, 'hiding');
      if (wasShown) {
        this.#scheduleHideFallback();
      }
    }
  }

  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.keyboard() && this.visible() && this.backdrop() !== 'static') {
      this.#offcanvasService.toggle({ show: false, id: this.id() });
    }
  }

  ngOnInit(): void {
    this.stateToggleSubscribe();
    setTimeout(() => {
      // hotfix to avoid offcanvas flicker on the first render
      this.#renderer.setStyle(this.#hostElement.nativeElement, 'display', 'flex');
    });

    this.#hostElement.nativeElement.addEventListener('transitionend', this.#handleTransitionEnd);
  }

  ngOnDestroy(): void {
    this.#offcanvasService.toggle({ show: false, id: this.id() });
    this.#removeEventListeners();
    this.#clearHideFallback();
    this.domPortalCleanup();
  }

  readonly #removeEventListeners = () => {
    this.#hostElement.nativeElement.removeEventListener('transitionend', this.#handleTransitionEnd);
  };

  readonly #handleTransitionEnd = (event: TransitionEvent) => {
    const offcanvasElement = this.#hostElement.nativeElement;
    if (event.target === offcanvasElement && event.propertyName === 'transform') {
      if (this.visible()) {
        this.#renderer.removeClass(offcanvasElement, 'showing');
      } else {
        this.#completeHide();
      }
    }
  };

  #completeHide(): void {
    this.#clearHideFallback();
    this.#renderer.removeClass(this.#hostElement.nativeElement, 'hiding');
    this.#renderer.removeStyle(this.#document.body, 'overflow');
    this.#renderer.removeStyle(this.#document.body, 'paddingRight');
    this.domPortalCleanup();
  }

  // `transitionend` never fires when there is nothing to animate — reduced motion, or a responsive
  // offcanvas above its breakpoint — which would leave the body scroll-locked and the host parked
  // in the portal container.
  #scheduleHideFallback(): void {
    const style = this.#document.defaultView?.getComputedStyle(this.#hostElement.nativeElement);
    const duration = Number.parseFloat(style?.transitionDuration ?? '') || 0;
    const delay = Number.parseFloat(style?.transitionDelay ?? '') || 0;
    this.#hideFallbackId = setTimeout(() => this.#completeHide(), (duration + delay) * 1000 + 5);
  }

  #clearHideFallback(): void {
    clearTimeout(this.#hideFallbackId);
    this.#hideFallbackId = undefined;
  }

  setFocus(): void {
    if (isPlatformBrowser(this.#platformId)) {
      setTimeout(() => this.#hostElement.nativeElement.focus());
    }
  }

  private stateToggleSubscribe(): void {
    this.#offcanvasService.offcanvasState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((action) => {
      if (this === action.offcanvas || this.id() === action.id) {
        if ('show' in action) {
          this.visible.update((value) => (action?.show === 'toggle' ? !value : action.show));
        }
      }
    });
  }

  private backdropClickSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.#backdropClickSubscription = this.#backdropService.backdropClick$
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe((clicked) => {
          this.#offcanvasService.toggle({ show: !clicked, id: this.id() });
        });
    } else {
      this.#backdropClickSubscription?.unsubscribe();
    }
  }

  protected setBackdrop(setBackdrop: boolean | 'static'): void {
    this.#activeBackdrop = !!setBackdrop
      ? this.#backdropService.setBackdrop('offcanvas')
      : this.#backdropService.clearBackdrop(this.#activeBackdrop);
    setBackdrop === true ? this.backdropClickSubscribe() : this.backdropClickSubscribe(false);
  }

  private layoutChangeSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      if (!this.responsiveBreakpoint) {
        return;
      }

      const responsiveBreakpoint = `(max-width: ${this.responsiveBreakpoint})`;

      const layoutChanges = this.#breakpointObserver.observe([responsiveBreakpoint]);

      this.#layoutChangeSubscription = layoutChanges
        .pipe(
          filter((breakpointState) => !breakpointState.matches),
          takeUntilDestroyed(this.#destroyRef)
        )
        .subscribe((breakpointState: BreakpointState) => {
          this.visible.set(breakpointState.matches);
        });
    } else {
      this.#layoutChangeSubscription?.unsubscribe();
    }
  }
}
