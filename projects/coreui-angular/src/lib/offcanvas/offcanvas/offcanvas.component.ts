import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
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
  Renderer2
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
  exportAs: 'cOffcanvas',
  imports: [A11yModule],
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: {
    ngSkipHydration: 'true',
    '[@showHide]': 'this.visible() ? "visible" : "hidden"',
    '[attr.id]': 'id()',
    '[attr.inert]': 'ariaHidden() || null',
    '[attr.role]': 'role()',
    '[attr.aria-modal]': 'ariaModal()',
    '[attr.tabindex]': 'tabIndex',
    '[class]': 'hostClasses()',
    '(@showHide.start)': 'animateStart($event)',
    '(@showHide.done)': 'animateDone($event)',
    '(document:keydown)': 'onKeyDownHandler($event)'
  }
})
export class OffcanvasComponent implements OnInit, OnDestroy {
  readonly #document = inject<Document>(DOCUMENT);
  readonly #platformId = inject(PLATFORM_ID);
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #offcanvasService = inject(OffcanvasService);
  readonly #backdropService = inject(BackdropService);
  readonly #breakpointObserver = inject(BreakpointObserver);
  readonly #destroyRef = inject(DestroyRef);

  /**
   * Apply a backdrop on body while offcanvas is open.
   * @return boolean | 'static'
   * @default true
   */
  readonly backdrop = input<boolean | 'static'>(true);

  /**
   * Closes the offcanvas when escape key is pressed [docs]
   * @return boolean
   * @default true
   */
  readonly keyboard = input(true, { transform: booleanAttribute });

  /**
   * Components placement, there’s no default placement.
   * @return {'start' | 'end' | 'top' | 'bottom'}
   * @default 'start'
   */
  readonly placement = input<string | 'start' | 'end' | 'top' | 'bottom'>('start');

  /**
   * Responsive offcanvas property hides content outside the viewport from a specified breakpoint and down.
   * @return boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
   * @default true
   * @since 4.3.10
   */
  readonly responsive = input<(boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl') | undefined>(true);
  readonly id = input(`offcanvas-${this.placement()}-${nextId++}`);

  /**
   * Default role for offcanvas. [docs]
   * @return string
   * @default 'dialog'
   */
  readonly role = input<string>('dialog');

  /**
   * Set aria-modal html attr for offcanvas. [docs]
   * @return boolean
   * @default true
   */
  readonly ariaModal = input(true, { transform: booleanAttribute });

  #activeBackdrop!: HTMLDivElement;
  #backdropClickSubscription!: Subscription;
  #layoutChangeSubscription!: Subscription;

  /**
   * Allow body scrolling while offcanvas is visible.
   * @return boolean
   * @default false
   */
  readonly scroll = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of offcanvas component.
   * @return boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal({
    source: this.visibleInput,
    computation: (value) => value
  });

  readonly visibleEffect = effect(() => {
    const visible = this.visible();
    if (visible) {
      this.setBackdrop(this.backdrop());
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.layoutChangeSubscribe(visible);
    this.visibleChange.emit(visible);
  });

  /**
   * Event triggered on visible change.
   * @return <boolean>
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

  animateStart(event: AnimationEvent) {
    if (event.toState === 'visible') {
      if (!this.scroll()) {
        this.#backdropService.hideScrollbar();
      }
      this.#renderer.addClass(this.#hostElement.nativeElement, 'showing');
    } else {
      this.#renderer.addClass(this.#hostElement.nativeElement, 'hiding');
    }
  }

  animateDone(event: AnimationEvent) {
    setTimeout(() => {
      if (event.toState === 'visible') {
        this.#renderer.removeClass(this.#hostElement.nativeElement, 'showing');
      }
      if (event.toState === 'hidden') {
        this.#renderer.removeClass(this.#hostElement.nativeElement, 'hiding');
        this.#renderer.removeStyle(this.#document.body, 'overflow');
        this.#renderer.removeStyle(this.#document.body, 'paddingRight');
      }
    });
    this.show = this.visible();
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
  }

  ngOnDestroy(): void {
    this.#offcanvasService.toggle({ show: false, id: this.id() });
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
