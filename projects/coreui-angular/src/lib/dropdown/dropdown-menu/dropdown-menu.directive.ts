import {
  AfterContentInit,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  QueryList
} from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';

import { ThemeDirective } from '../../shared/theme.directive';
import { DropdownService } from '../dropdown.service';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';

@Directive({
  selector: '[cDropdownMenu]',
  exportAs: 'cDropdownMenu',
  standalone: true,
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: { class: 'dropdown-menu' }
})
export class DropdownMenuDirective implements OnInit, AfterContentInit {
  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  public readonly elementRef: ElementRef = inject(ElementRef);
  readonly #dropdownService: DropdownService = inject(DropdownService);
  #focusKeyManager!: FocusKeyManager<DropdownItemDirective>;

  /**
   * Set alignment of dropdown menu.
   * @type {'start' | 'end' }
   */
  @Input() alignment?: 'start' | 'end' | string;

  /**
   * Toggle the visibility of dropdown menu component.
   * @type boolean
   */
  @Input() visible: boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-menu': true,
      [`dropdown-menu-${this.alignment}`]: !!this.alignment,
      show: this.visible
    };
  }

  @HostBinding('style') get hostStyles() {
    // workaround for popper position calculate (see also: dropdown.component)
    return {
      visibility: this.visible ? null : '',
      display: this.visible ? null : ''
    };
  }

  @HostListener('keydown', ['$event']) onKeyDown($event: KeyboardEvent): void {
    if (!this.visible) {
      return;
    }
    if (['Space', 'ArrowDown'].includes($event.code)) {
      $event.preventDefault();
    }
    this.#focusKeyManager.onKeydown($event);
  }

  @HostListener('keyup', ['$event']) onKeyUp($event: KeyboardEvent): void {
    if (!this.visible) {
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
            this.visible = state.visible === 'toggle' ? !this.visible : state.visible;
            if (!this.visible) {
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
