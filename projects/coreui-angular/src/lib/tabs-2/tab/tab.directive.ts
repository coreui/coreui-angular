import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  linkedSignal,
  NgZone,
  OnInit,
  Renderer2,
  signal
} from '@angular/core';
import { TABS_LIST, TabsService } from '../tabs.service';

@Directive({
  exportAs: 'cTab',
  selector: 'button[cTab]',
  host: {
    '[class]': 'hostClasses()',
    type: 'button',
    role: 'tab',
    '[aria-selected]': 'isActive()',
    '[aria-controls]': 'attrAriaControls()',
    '[attr.aria-disabled]': 'attrAriaDisabled()',
    '[attr.disabled]': 'attrNativeDisabled()',
    '[id]': 'propId()',
    '[attr.tabindex]': 'tabindex()',
    '(click)': 'onClick()',
    '(focusin)': 'focused.set(true)',
    '(focusout)': 'onFocusOut()'
  }
})
export class TabDirective implements FocusableOption, OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #elementRef = inject(ElementRef);
  readonly #ngZone = inject(NgZone);
  readonly #renderer = inject(Renderer2);
  readonly #tabsService = inject(TabsService);

  /** @internal */
  readonly tabsList = inject(TABS_LIST, { optional: true });

  /**
   * Disables the tab. A disabled tab that is selected or has focus stays focusable with `aria-disabled`.
   * @returns boolean
   * @default false
   */
  readonly disabledInput = input(false, { transform: booleanAttribute, alias: 'disabled' });

  readonly #disabled = linkedSignal(this.disabledInput);
  readonly attrDisabled = computed(() => this.#disabled() || null);

  set disabled(value: boolean) {
    this.#disabled.set(value);
  }

  get disabled() {
    return this.#disabled();
  }

  /**
   * Item key.
   * @returns string | number
   * @required
   */
  readonly itemKey: InputSignal<string | number> = input.required<string | number>();

  /**
   * Element id attribute
   * @returns string | null | undefined
   * @default `{c-tabs id}-tab-{itemKey}`
   */
  readonly id: InputSignal<string | null | undefined> = input<string | null | undefined>();

  /**
   * aria-controls attribute
   * @returns string | null | undefined
   * @default `{c-tabs id}-panel-{itemKey}`
   */
  readonly ariaControls: InputSignal<string | null | undefined> = input<string | null | undefined>(undefined, {
    alias: 'aria-controls'
  });

  readonly isActive = linkedSignal(() => this.#tabsService.activeItemKey() === this.itemKey());

  protected readonly focused = signal(false);

  readonly #isTabStop = computed(() =>
    this.tabsList ? this.tabsList.tabStopKey() === this.itemKey() : this.isActive()
  );

  protected readonly tabindex = computed(() => (this.#isTabStop() ? 0 : -1));

  protected readonly attrNativeDisabled = computed(
    () => (this.#disabled() && !this.#isTabStop() && !this.focused()) || null
  );

  protected readonly attrAriaDisabled = computed(() => (this.#disabled() && !this.attrNativeDisabled()) || null);

  readonly hostClasses = computed(() => {
    return {
      'nav-link': true,
      active: this.isActive(),
      disabled: this.#disabled()
    } as Record<string, boolean>;
  });

  readonly propId = computed(() => this.id() ?? `${this.#tabsService.id()}-tab-${this.itemKey()}`);

  readonly attrAriaControls = computed(
    () => this.ariaControls() ?? `${this.#tabsService.id()}-panel-${this.itemKey()}`
  );

  focus(origin?: FocusOrigin): void {
    this.#elementRef.nativeElement.focus();
  }

  ngOnInit(): void {
    const stopDisabledClick = (event: Event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.#ngZone.runOutsideAngular(() => {
      this.#destroyRef.onDestroy(
        this.#renderer.listen(this.#elementRef.nativeElement, 'click', stopDisabledClick, { capture: true })
      );
    });
    this.#destroyRef.onDestroy(this.#tabsService.register(this));
  }

  protected onFocusOut(): void {
    const element: HTMLElement = this.#elementRef.nativeElement;
    this.focused.set((element.getRootNode() as Document | ShadowRoot).activeElement === element);
  }

  protected onClick(): void {
    if (!this.disabled) {
      this.#tabsService.activeItemKey.set(this.itemKey());
    }
  }
}
