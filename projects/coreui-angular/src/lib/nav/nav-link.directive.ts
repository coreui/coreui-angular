import {
  afterNextRender,
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  signal,
  untracked
} from '@angular/core';
import { BooleanInput } from '../coreui.types';
import { NavGroupService } from './nav-group.service';

const DISABLED_ATTR_ELEMENTS = new Set(['button', 'fieldset', 'input', 'optgroup', 'option', 'select', 'textarea']);

@Directive({
  selector: '[cNavLink]',
  host: {
    '[class]': 'hostClasses()',
    '[aria-current]': 'ariaCurrent()',
    '[aria-disabled]': 'ariaDisabled()',
    '[attr.disabled]': 'attrDisabled()',
    '[attr.tabindex]': 'attrTabindex()'
  }
})
export class NavLinkDirective implements OnDestroy {
  static ngAcceptInputType_disabled: BooleanInput;

  readonly #hostElement = inject(ElementRef);
  readonly #navGroupService = inject(NavGroupService, { optional: true });

  #classObserver?: MutationObserver;

  constructor() {
    afterNextRender({
      read: () => {
        this.#observeActiveClass();
      }
    });
  }

  /**
   * Sets .nav-link class to the host
   * @returns boolean
   * @default true
   */
  readonly cNavLink = input(true, { transform: booleanAttribute });

  /**
   * Toggle the active state for the component
   * @returns boolean
   * @default undefined
   */
  readonly active = input<boolean>();

  /**
   * Set disabled attr for the host element
   * @returns boolean
   * @default false
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   * @returns number | undefined
   */
  readonly tabindex = input(undefined, { transform: numberAttribute });

  readonly ariaCurrent = computed(() => {
    return this.active() ? 'page' : null;
  });

  protected ariaDisabled = signal<boolean | null>(null);
  protected attrDisabled = signal<boolean | string | null>(null);
  protected attrTabindex = signal<number | null>(null);

  readonly #disabledEffect = effect(() => {
    const disabled = this.disabled();
    const tabindex = this.tabindex();
    const disabledAttrElement = DISABLED_ATTR_ELEMENTS.has(this.#tagName);
    this.ariaDisabled.set((disabled && !disabledAttrElement) || null);
    this.attrDisabled.set(disabled && disabledAttrElement ? '' : null);
    this.attrTabindex.set(disabled && !disabledAttrElement ? -1 : Number.isNaN(tabindex) ? null : (tabindex ?? null));
  });

  readonly #activeEffect = effect(() => {
    if (this.active()) {
      untracked(() => {
        this.#openBranch();
      });
    }
  });

  readonly hostClasses = computed(() => {
    return {
      'nav-link': this.cNavLink(),
      disabled: this.disabled(),
      active: this.active()
    } as Record<string, boolean>;
  });

  get #tagName(): string {
    return (this.#hostElement.nativeElement as HTMLElement).tagName.toLowerCase();
  }

  ngOnDestroy(): void {
    this.#classObserver?.disconnect();
  }

  #openBranch(): void {
    if (this.#navGroupService?.openOnActive()) {
      this.#navGroupService.openBranch();
    }
  }

  #observeActiveClass(): void {
    const host: HTMLElement = this.#hostElement.nativeElement;

    if (!this.#navGroupService) {
      return;
    }

    let wasActive = host.classList.contains('active');
    if (wasActive) {
      this.#openBranch();
    }

    this.#classObserver = new MutationObserver(() => {
      const active = host.classList.contains('active');
      if (active && !wasActive) {
        this.#openBranch();
      }
      wasActive = active;
    });
    this.#classObserver.observe(host, { attributes: true, attributeFilter: ['class'] });
  }
}
