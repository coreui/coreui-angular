import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  Component,
  DestroyRef,
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
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { A11yModule } from '@angular/cdk/a11y';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

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
  exportAs: 'cOffcanvas',
  standalone: true,
  imports: [A11yModule],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { ngSkipHydration: 'true' }
})
export class OffcanvasComponent implements OnInit, OnDestroy {

  #destroyRef = inject(DestroyRef);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private offcanvasService: OffcanvasService,
    private backdropService: BackdropService,
    private breakpointObserver: BreakpointObserver
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
  @Input({ transform: booleanAttribute }) keyboard = true;

  /**
   * Components placement, there’s no default placement.
   * @type {'start' | 'end' | 'top' | 'bottom'}
   * @default 'start'
   */
  @Input() placement: string | 'start' | 'end' | 'top' | 'bottom' = 'start';

  /**
   * Responsive offcanvas property hides content outside the viewport from a specified breakpoint and down.
   * @type boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
   * @default true
   * @since 4.3.10
   */
  @Input() responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = true;
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
  @Input({ transform: booleanAttribute }) @HostBinding('attr.aria-modal') ariaModal = true;

  #activeBackdrop!: HTMLDivElement;
  #backdropClickSubscription!: Subscription;
  #layoutChangeSubscription!: Subscription;
  #show = false;

  /**
   * Allow body scrolling while offcanvas is visible.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) scroll: boolean = false;

  /**
   * Toggle the visibility of offcanvas component.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute })
  set visible(value: boolean) {
    this.#visible = value;
    if (this.#visible) {
      this.setBackdrop(this.backdrop);
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.layoutChangeSubscribe(this.#visible);
    this.visibleChange.emit(value);
  }

  get visible(): boolean {
    return this.#visible;
  }

  #visible: boolean = false;

  /**
   * Event triggered on visible change.
   * @type EventEmitter<boolean>
   */
  @Output() readonly visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class')
  get hostClasses(): any {
    return {
      offcanvas: typeof this.responsive === 'boolean',
      [`offcanvas-${this.responsive}`]: typeof this.responsive !== 'boolean',
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
    return this.visible && this.#show;
  }

  set show(value: boolean) {
    this.#show = value;
  }

  get responsiveBreakpoint(): string | false {
    if (typeof this.responsive !== 'string') {
      return false;
    }
    const element: Element = this.document.documentElement;
    const responsiveBreakpoint = this.responsive;
    const breakpointValue = getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${responsiveBreakpoint.trim()}`) ?? false;
    return breakpointValue ? `${parseFloat(breakpointValue.trim()) - 0.02}px` : false;
  }

  @HostListener('@showHide.start', ['$event'])
  animateStart(event: AnimationEvent) {
    if (event.toState === 'visible') {
      if (!this.scroll) {
        this.backdropService.hideScrollbar();
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
    this.stateToggleSubscribe();
    setTimeout(() => {
      // hotfix to avoid offcanvas flicker on the first render
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'flex');
    });
  }

  ngOnDestroy(): void {
    this.offcanvasService.toggle({ show: false, id: this.id });
  }

  setFocus(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.hostElement.nativeElement.focus());
    }
  }

  private stateToggleSubscribe(): void {
    this.offcanvasService.offcanvasState$
      .pipe(
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((action) => {
        if (this === action.offcanvas || this.id === action.id) {
          if ('show' in action) {
            this.visible =
              action?.show === 'toggle' ? !this.visible : action.show;
          }
        }
      });
  }

  private backdropClickSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.#backdropClickSubscription =
        this.backdropService.backdropClick$
          .pipe(
            takeUntilDestroyed(this.#destroyRef)
          )
          .subscribe((clicked) => {
            this.offcanvasService.toggle({ show: !clicked, id: this.id });
          });
    } else {
      this.#backdropClickSubscription?.unsubscribe();
    }
  }

  private setBackdrop(setBackdrop: boolean | 'static'): void {
    this.#activeBackdrop = !!setBackdrop ? this.backdropService.setBackdrop('offcanvas')
                                         : this.backdropService.clearBackdrop(this.#activeBackdrop);
    setBackdrop === true ? this.backdropClickSubscribe()
                         : this.backdropClickSubscribe(false);
  }

  private layoutChangeSubscribe(subscribe: boolean = true): void {

    if (subscribe) {

      if (!this.responsiveBreakpoint) {
        return;
      }

      const responsiveBreakpoint = `(max-width: ${this.responsiveBreakpoint})`;

      const layoutChanges = this.breakpointObserver.observe([responsiveBreakpoint]);

      this.#layoutChangeSubscription = layoutChanges
        .pipe(
          filter(breakpointState => !breakpointState.matches),
          takeUntilDestroyed(this.#destroyRef)
        )
        .subscribe(
          (breakpointState: BreakpointState) => {
            this.visible = breakpointState.matches;
          }
        );
    } else {
      this.#layoutChangeSubscription?.unsubscribe();
    }
  }
}
