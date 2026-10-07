import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  AfterContentInit,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  forwardRef,
  inject,
  Injector,
  input,
  linkedSignal,
  OnInit
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';

import { ThemeDirective } from '../../shared/theme.directive';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';
import { BreakpointInfix, DropdownAlignment } from '../../coreui.types';
import { DropdownService } from '../dropdown.service';
import { clicksOnSpace, isEditableTarget, isReplayedEvent } from '../dropdown.utils';

@Directive({
  selector: '[cDropdownMenu]',
  exportAs: 'cDropdownMenu',
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: {
    class: 'dropdown-menu',
    '[class]': 'hostClasses()',
    '[style]': 'hostStyles()',
    '[attr.data-coreui-popper]': 'dataPopper()',
    '(focusin)': 'onFocusIn($event)',
    '(keydown)': 'onKeyDown($event)'
  }
})
export class DropdownMenuDirective implements OnInit, AfterContentInit {
  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #injector = inject(Injector);
  public readonly elementRef: ElementRef = inject(ElementRef);
  readonly #dropdownService: DropdownService = inject(DropdownService);
  #focusKeyManager!: FocusKeyManager<DropdownItemDirective>;

  /**
   * Set alignment of dropdown menu.
   * @returns DropdownAlignment
   */
  readonly alignment = input<DropdownAlignment>();

  /**
   * Toggle the visibility of dropdown menu component.
   * @returns boolean
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal({
    source: this.visibleInput,
    computation: (value) => value
  });

  readonly hostClasses = computed(() => {
    const visible = this.visible();

    return {
      'dropdown-menu': true,
      ...alignmentClasses(this.alignment() ?? this.#dropdownService.alignment()),
      show: visible
    } as Record<string, boolean>;
  });

  readonly hostStyles = computed(() => {
    // workaround for popper position calculate (see also: dropdown.component)
    const visible = this.visible();
    return {
      visibility: visible ? null : '',
      display: visible ? null : ''
    } as Record<string, any>;
  });

  readonly dataPopper = computed(() => (this.#dropdownService.popper() ? null : 'static'));

  onKeyDown($event: KeyboardEvent): void {
    if (!this.visible() || isReplayedEvent($event) || isEditableTarget($event.target)) {
      return;
    }
    if ($event.code === 'ArrowDown' || ($event.code === 'Space' && !this.#clicksOnSpace($event.target))) {
      $event.preventDefault();
    }
    this.#focusKeyManager.onKeydown($event);
  }

  onFocusIn($event: FocusEvent): void {
    const index = this.dropdownItemsContent().findIndex((item) =>
      item.elementRef.nativeElement.contains($event.target)
    );
    if (index > -1) {
      this.#focusKeyManager.updateActiveItem(index);
    }
  }

  readonly dropdownItemsContent = contentChildren<DropdownItemDirective>(
    forwardRef(() => DropdownItemDirective),
    { descendants: true }
  );

  readonly items$ = toObservable(this.dropdownItemsContent);

  ngAfterContentInit(): void {
    this.focusKeyManagerInit();

    this.items$
      .pipe(
        tap((change) => {
          this.focusKeyManagerInit();
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.#dropdownService.dropdownState$
      .pipe(
        tap((state) => {
          if ('visible' in state) {
            this.visible.update((visible) => (state.visible === 'toggle' ? !visible : state.visible));
            if (!this.visible()) {
              this.#focusKeyManager?.setActiveItem(-1);
            }
          }
          if (state.focus && this.visible()) {
            afterNextRender(
              () =>
                state.focus === 'first'
                  ? this.#focusKeyManager.setFirstItemActive()
                  : this.#focusKeyManager.setLastItemActive(),
              { injector: this.#injector }
            );
          }
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  #clicksOnSpace(target: EventTarget | null): boolean {
    return target instanceof Element && clicksOnSpace(target);
  }

  private focusKeyManagerInit(): void {
    this.#focusKeyManager = new FocusKeyManager(this.dropdownItemsContent())
      .withHomeAndEnd()
      .withPageUpDown()
      .withWrap()
      .skipPredicate((dropdownItem) => dropdownItem.disabled === true);
  }
}

const alignmentClasses = (alignment?: DropdownAlignment): Record<string, boolean> => {
  if (!alignment) {
    return {};
  }
  if (typeof alignment === 'string') {
    return { [`dropdown-menu-${alignment}`]: true };
  }
  return Object.fromEntries(
    Object.entries(alignment).map(([breakpoint, direction]) => [
      `dropdown-menu${breakpoint === BreakpointInfix.xs ? '' : `-${breakpoint}`}-${direction}`,
      true
    ])
  );
};
