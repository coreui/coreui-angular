import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  Input,
  input,
  InputSignal,
  signal,
  untracked
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, merge, takeWhile } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { TabsService } from '../tabs.service';

@Directive({
  exportAs: 'cTab',
  selector: 'button[cTab]',
  standalone: true,
  host: {
    '[class]': 'hostClasses()',
    type: 'button',
    role: 'tab',
    '[attr.aria-selected]': 'isActive()',
    '[attr.aria-controls]': 'attrAriaControls()',
    '[attr.disabled]': 'attrDisabled() || null',
    '[id]': 'propId()',
    '[tabindex]': 'isActive() ? 0 : -1'
  }
})
export class TabDirective implements FocusableOption {
  readonly #destroyRef = inject(DestroyRef);
  readonly #elementRef = inject(ElementRef);
  readonly #tabsService = inject(TabsService);

  /**
   * Disabled attribute
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute })
  set disabled(value: boolean) {
    this.#disabled.set(value);
  }

  get disabled() {
    return this.#disabled();
  }

  readonly #disabled = signal(false);
  readonly attrDisabled = computed(() => this.#disabled() || null);

  /**
   * Item key.
   * @type string | number
   * @required
   */
  readonly itemKey: InputSignal<string | number> = input.required<string | number>();

  /**
   * Element id attribute
   * @type string
   * @default undefined
   */
  readonly id: InputSignal<string | undefined> = input<string>();

  /**
   * aria-controls attribute
   * @type string
   * @default undefined
   */
  readonly ariaControls: InputSignal<string | undefined> = input<string | undefined>(undefined, {
    alias: 'aria-controls'
  });

  readonly isActive = computed<boolean>(
    () => !this.#disabled() && this.#tabsService.activeItemKey() === this.itemKey()
  );

  readonly hostClasses = computed(() => ({
    'nav-link': true,
    active: this.isActive(),
    disabled: this.#disabled()
  }));

  readonly propId = computed(() => this.id() ?? `${this.#tabsService.id()}-tab-${this.itemKey()}`);

  readonly attrAriaControls = computed(
    () => this.ariaControls() ?? `${this.#tabsService.id()}-panel-${this.itemKey()}`
  );

  disabledEffect = effect(
    () => {
      if (!this.#disabled()) {
        const click$ = fromEvent<MouseEvent>(this.#elementRef.nativeElement, 'click');
        const focusIn$ = fromEvent<FocusEvent>(this.#elementRef.nativeElement, 'focusin');

        merge(focusIn$, click$)
          .pipe(
            filter(($event) => !this.#disabled()),
            tap(($event) => {
              this.#tabsService.activeItemKey.set(untracked(this.itemKey));
            }),
            takeWhile(() => !this.#disabled()),
            takeUntilDestroyed(this.#destroyRef)
          )
          .subscribe();
      }
    },
    { allowSignalWrites: true }
  );

  focus(origin?: FocusOrigin): void {
    this.#elementRef.nativeElement.focus();
  }
}
