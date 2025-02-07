import {
  AfterContentInit,
  computed,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  forwardRef,
  inject,
  input,
  linkedSignal,
  OnInit,
  QueryList
} from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';

import { ThemeDirective } from '../../shared/theme.directive';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';
import { DropdownService } from '../dropdown.service';

@Directive({
  selector: '[cDropdownMenu]',
  exportAs: 'cDropdownMenu',
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: {
    class: 'dropdown-menu',
    '[class]': 'hostClasses()',
    '[style]': 'hostStyles()',
    '(keydown)': 'onKeyDown($event)',
    '(keyup)': 'onKeyUp($event)'
  }
})
export class DropdownMenuDirective implements OnInit, AfterContentInit {
  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  public readonly elementRef: ElementRef = inject(ElementRef);
  readonly #dropdownService: DropdownService = inject(DropdownService);
  #focusKeyManager!: FocusKeyManager<DropdownItemDirective>;

  /**
   * Set alignment of dropdown menu.
   * @return 'start' | 'end'
   */
  readonly alignment = input<'start' | 'end' | string>();

  /**
   * Toggle the visibility of dropdown menu component.
   * @return boolean
   */
  readonly visibleInput = input<boolean>(false, { alias: 'visible' });

  readonly visible = linkedSignal({
    source: () => this.visibleInput(),
    computation: (value) => value
  });

  readonly hostClasses = computed(() => {
    const alignment = this.alignment();
    const visible = this.visible();
    return {
      'dropdown-menu': true,
      [`dropdown-menu-${alignment}`]: !!alignment,
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

  onKeyDown($event: KeyboardEvent): void {
    if (!this.visible()) {
      return;
    }
    if (['Space', 'ArrowDown'].includes($event.code)) {
      $event.preventDefault();
    }
    this.#focusKeyManager.onKeydown($event);
  }

  onKeyUp($event: KeyboardEvent): void {
    if (!this.visible()) {
      return;
    }
    if (['Tab'].includes($event.key)) {
      if (this.#focusKeyManager.activeItem) {
        $event.shiftKey ? this.#focusKeyManager.setPreviousItemActive() : this.#focusKeyManager.setNextItemActive();
      } else {
        this.#focusKeyManager.setFirstItemActive();
      }
    }
  }

  @ContentChildren(forwardRef(() => DropdownItemDirective), { descendants: true })
  dropdownItemsContent!: QueryList<DropdownItemDirective>;

  ngAfterContentInit(): void {
    this.focusKeyManagerInit();

    this.dropdownItemsContent.changes
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
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  private focusKeyManagerInit(): void {
    this.#focusKeyManager = new FocusKeyManager(this.dropdownItemsContent)
      .withHomeAndEnd()
      .withPageUpDown()
      .withWrap()
      .skipPredicate((dropdownItem) => dropdownItem.disabled === true);
  }
}
