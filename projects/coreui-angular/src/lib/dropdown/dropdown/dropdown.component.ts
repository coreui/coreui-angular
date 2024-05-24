import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  signal,
  SimpleChanges
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { createPopper, Instance, Options, Placement } from '@popperjs/core';

import { ThemeDirective } from '../../shared';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownService } from '../dropdown.service';

// lightweight injection token
export abstract class DropdownToken {}

@Directive({
  selector: '[cDropdownToggle]',
  providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }],
  exportAs: 'cDropdownToggle',
  standalone: true
})
export class DropdownToggleDirective implements AfterViewInit {
  // injections
  readonly #destroyRef = inject(DestroyRef);
  public readonly elementRef = inject(ElementRef);
  #dropdownService = inject(DropdownService);
  public dropdown = inject(DropdownToken, { optional: true });

  /**
   * Toggle the disabled state for the toggler.
   * @type DropdownComponent | undefined
   * @default undefined
   */
  @Input() dropdownComponent?: DropdownComponent;

  /**
   * Disables the toggler.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Enables pseudo element caret on toggler.
   * @type boolean
   */
  @Input() caret = true;

  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns,
   * but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) split: boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-toggle': this.caret,
      'dropdown-toggle-split': this.split,
      disabled: this.disabled
    };
  }

  #ariaExpanded = signal(false);

  @HostBinding('attr.aria-expanded')
  get ariaExpanded() {
    return this.#ariaExpanded();
  }

  @HostListener('click', ['$event'])
  public onClick($event: MouseEvent): void {
    $event.preventDefault();
    !this.disabled && this.#dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
  }

  ngAfterViewInit(): void {
    if (this.dropdownComponent) {
      this.dropdown = this.dropdownComponent;
      this.#dropdownService = this.dropdownComponent?.dropdownService;
    }
    if (this.dropdown) {
      const dropdown = <DropdownComponent>this.dropdown;
      dropdown?.visibleChange?.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((visible) => {
        this.#ariaExpanded.set(visible);
      });
    }
  }
}

@Component({
  selector: 'c-dropdown',
  template: '<ng-content />',
  styleUrls: ['./dropdown.component.scss'],
  exportAs: 'cDropdown',
  providers: [DropdownService],
  standalone: true,
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }]
})
export class DropdownComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
    public dropdownService: DropdownService
  ) {
    this.dropdownStateSubscribe();
  }

  /**
   * Set alignment of dropdown menu.
   * @type {'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}}
   */
  @Input() alignment?: string;

  @Input() autoClose: boolean | 'inside' | 'outside' = true;

  /**
   * Sets a specified  direction and location of the dropdown menu.
   * @type 'dropup' | 'dropend' | 'dropstart'
   */
  @Input() direction?: 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart';

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers
   * that may have flipped or altered the originally provided placement property.
   * @type Placement
   */
  @Input() placement: Placement = 'bottom-start';

  /**
   * If you want to disable dynamic positioning set this property to `false`.
   * @type boolean
   * @default true
   */
  @Input({ transform: booleanAttribute }) popper: boolean = true;

  /**
   * Optional popper Options object, placement prop takes precedence over
   * @type Partial<Options>
   */
  @Input()
  set popperOptions(value: Partial<Options>) {
    this._popperOptions = { ...this._popperOptions, ...value };
  }

  get popperOptions(): Partial<Options> {
    let placement = this.placement;
    switch (this.direction) {
      case 'dropup': {
        placement = 'top-start';
        break;
      }
      case 'dropend': {
        placement = 'right-start';
        break;
      }
      case 'dropstart': {
        placement = 'left-start';
        break;
      }
      case 'center': {
        placement = 'bottom';
        break;
      }
      case 'dropup-center': {
        placement = 'top';
        break;
      }
    }
    if (this.alignment === 'end') {
      placement = 'bottom-end';
    }
    this._popperOptions = { ...this._popperOptions, placement: placement };
    return this._popperOptions;
  }

  private _popperOptions: Partial<Options> = {
    placement: this.placement,
    modifiers: [],
    strategy: 'absolute'
  };

  /**
   * Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item.
   */
  @Input() variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item' = 'dropdown';

  /**
   * Toggle the visibility of dropdown menu component.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute })
  set visible(value: boolean) {
    const _value = value;
    if (_value !== this._visible) {
      this.activeTrap = _value;
      this._visible = _value;
      _value ? this.createPopperInstance() : this.destroyPopperInstance();
      this.visibleChange.emit(_value);
    }
  }

  get visible(): boolean {
    return this._visible;
  }

  private _visible = false;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  dropdownContext = { $implicit: this.visible };
  @ContentChild(DropdownToggleDirective) _toggler!: DropdownToggleDirective;
  @ContentChild(DropdownMenuDirective) _menu!: DropdownMenuDirective;
  @ContentChild(DropdownMenuDirective, { read: ElementRef }) _menuElementRef!: ElementRef;

  public activeTrap = false;

  private dropdownStateSubscription!: Subscription;
  private popperInstance!: Instance | undefined;
  private listeners: (() => void)[] = [];

  @HostBinding('class')
  get hostClasses(): any {
    return {
      dropdown: (this.variant === 'dropdown' || this.variant === 'nav-item') && !this.direction,
      [`${this.direction}`]: !!this.direction,
      [`${this.variant}`]: !!this.variant,
      dropup: this.direction === 'dropup' || this.direction === 'dropup-center',
      show: this.visible
    };
  }

  // todo: find better solution
  @HostBinding('style')
  get hostStyle(): any {
    return this.variant === 'input-group' ? { display: 'contents' } : {};
  }

  private clickedTarget!: HTMLElement;

  @HostListener('click', ['$event'])
  private onHostClick($event: MouseEvent): void {
    this.clickedTarget = $event.target as HTMLElement;
  }

  dropdownStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.dropdownStateSubscription = this.dropdownService.dropdownState$
        .pipe(
          filter((state) => {
            return this === state.dropdown;
          })
        )
        .subscribe((state) => {
          if ('visible' in state) {
            state?.visible === 'toggle' ? this.toggleDropdown() : (this.visible = state.visible);
          }
        });
    } else {
      this.dropdownStateSubscription?.unsubscribe();
    }
  }

  toggleDropdown(): void {
    this.visible = !this.visible;
  }

  onClick(event: any): void {
    if (!this._toggler?.elementRef.nativeElement.contains(event.target?.closest('[cDropdownToggle]'))) {
      this.toggleDropdown();
    }
  }

  ngAfterContentInit(): void {
    if (this.variant === 'nav-item') {
      this.renderer.addClass(this._toggler.elementRef.nativeElement, 'nav-link');
    }
  }

  ngOnInit(): void {
    this.setVisibleState(this.visible);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && !changes['visible'].firstChange) {
      this.setVisibleState(changes['visible'].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.clearListeners();
    this.dropdownStateSubscribe(false);
    this.destroyPopperInstance();
  }

  setVisibleState(value: boolean): void {
    this.dropdownService.toggle({ visible: value, dropdown: this });
  }

  // todo: turn off popper in navbar-nav
  createPopperInstance(): void {
    if (this._toggler && this._menu) {
      this.ngZone.runOutsideAngular(() => {
        // workaround for popper position calculate (see also: dropdown-menu.component)
        this._menu.elementRef.nativeElement.style.visibility = 'hidden';
        this._menu.elementRef.nativeElement.style.display = 'block';
        if (this.popper) {
          this.popperInstance = createPopper(
            this._toggler.elementRef.nativeElement,
            this._menu.elementRef.nativeElement,
            { ...this.popperOptions }
          );
        }
        this.ngZone.run(() => {
          this.setListeners();
          this.changeDetectorRef.markForCheck();
          this.changeDetectorRef.detectChanges();
        });
      });
    }
  }

  destroyPopperInstance(): void {
    this.clearListeners();
    this.popperInstance?.destroy();
    this.popperInstance = undefined;
    this.changeDetectorRef.markForCheck();
  }

  private setListeners(): void {
    this.listeners.push(
      this.renderer.listen(this.document, 'click', (event) => {
        const target = event.target as HTMLElement;
        if (this._menuElementRef?.nativeElement.contains(event.target)) {
          this.clickedTarget = target;
        }
        if (this._toggler?.elementRef.nativeElement.contains(event.target)) {
          return;
        }
        if (this.autoClose === true) {
          this.setVisibleState(false);
          return;
        }
        if (this.clickedTarget === target && this.autoClose === 'inside') {
          this.setVisibleState(false);
          return;
        }
        if (this.clickedTarget !== target && this.autoClose === 'outside') {
          this.setVisibleState(false);
          return;
        }
      })
    );
    this.listeners.push(
      this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
        if (event.key === 'Escape' && this.autoClose !== false) {
          event.stopPropagation();
          this.setVisibleState(false);
          return;
        }
      })
    );
    this.listeners.push(
      this.renderer.listen(this.document, 'keyup', (event) => {
        if (event.key === 'Tab' && this.autoClose !== false && !this.elementRef.nativeElement.contains(event.target)) {
          this.setVisibleState(false);
          return;
        }
      })
    );
  }

  private clearListeners(): void {
    this.listeners.forEach((unListen) => {
      unListen();
    });
    // @ts-ignore
    this.listeners.fill(undefined);
    this.listeners = [];
  }
}
