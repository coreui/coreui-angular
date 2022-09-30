import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';

import { createPopper, Instance, Options, Placement } from '@popperjs/core';

import { DropdownService } from '../dropdown.service';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';

// lightweight injection token
export abstract class DropdownToken {}

@Directive({
  selector: '[cDropdownToggle]',
  providers: [{provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent)}],
  exportAs: 'cDropdownToggle'
})
export class DropdownToggleDirective implements AfterViewInit {

  static ngAcceptInputType_split: BooleanInput;
  static ngAcceptInputType_popper: BooleanInput;

  constructor(
    public elementRef: ElementRef,
    private dropdownService: DropdownService,
    @Optional() public dropdown?: DropdownToken
  ) {}

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
  @Input() disabled?: boolean = false;

  /**
   * Enables pseudo element caret on toggler.
   * @type boolean
   */
  @Input() caret = true;

  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
   * @type boolean
   */
  @Input()
  set split(value: boolean) {
    this._split = coerceBooleanProperty(value);
  }
  get split(): boolean {
    return this._split;
  }
  private _split = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-toggle': this.caret,
      'dropdown-toggle-split': this.split,
      disabled: this.disabled
    };
  }

  @HostListener('click', ['$event'])
  public onClick($event: MouseEvent): void {
    $event.preventDefault();
    !this.disabled && this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
  }

  ngAfterViewInit(): void {
    if (this.dropdownComponent) {
      this.dropdown = this.dropdownComponent;
      this.dropdownService = this.dropdownComponent?.dropdownService;
    }
  }
}

@Component({
  selector: 'c-dropdown',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dropdown.component.scss'],
  exportAs: 'cDropdown',
  providers: [DropdownService]
})
export class DropdownComponent implements AfterContentInit, OnDestroy, OnInit {

  static ngAcceptInputType_dark: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  /**
   * Set alignment of dropdown menu.
   * @type {'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}}
   */
  @Input() alignment?: string;

  @Input() autoClose: boolean | 'inside' | 'outside' = true;

  /**
   * Sets a darker color scheme to match a dark navbar.
   * @type boolean
   * @default false
   */
  @Input()
  set dark(value: boolean) {
    this._dark = coerceBooleanProperty(value);
  };
  get dark() {
    return this._dark;
  }
  private _dark = false;

  /**
   * Sets a specified  direction and location of the dropdown menu.
   * @type 'dropup' | 'dropend' | 'dropstart'
   */
  @Input() direction?: 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart';

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   * @type Placement
   */
  @Input() placement: Placement = 'bottom-start';

  /**
   * If you want to disable dynamic positioning set this property to `false`.
   * @type boolean
   * @default true
   */
  @Input()
  set popper(value: boolean) {
    this._popper = coerceBooleanProperty(value);
  }
  get popper(): boolean {
    return this._popper;
  }
  private _popper = true;

  /**
   * Optional popper Options object, placement prop takes precedence over
   * @type Partial<Options>
   */
  @Input()
  set popperOptions(value: Partial<Options>) {
    this._popperOptions = { ...this._popperOptions, ...value };
  };
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
   * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.
   */
  @Input() variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item' = 'dropdown';

  /**
   * Toggle the visibility of dropdown menu component.
   * @type boolean
   * @default false
   */
  @Input()
  set visible(value: boolean) {
    const _value = coerceBooleanProperty(value);
    this.activeTrap = _value;
    this._visible = _value;
    _value ? this.createPopperInstance() : this.destroyPopperInstance();
    this.visibleChange.emit(_value);
  }
  get visible(): boolean {
    return this._visible;
  }
  private _visible = false;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  dropdownContext = { $implicit: this.visible };
  @ContentChild(DropdownToggleDirective) _toggler!: DropdownToggleDirective;
  @ContentChild(DropdownMenuDirective) _menu!: DropdownMenuDirective;

  public activeTrap = false;

  private dropdownStateSubscription!: Subscription;
  private popperInstance!: Instance | undefined;
  private listeners: (() => void)[] = [];

  constructor(
    @Inject(DOCUMENT) private document: any,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
    public dropdownService: DropdownService
  ) {}

  @HostBinding('class')
  get hostClasses(): any {
    return {
      dropdown:
        (this.variant === 'dropdown' || this.variant === 'nav-item') &&
        !this.direction,
      [`${this.direction}`]: !!this.direction,
      [`${this.variant}`]: !!this.variant,
      'dropup' : this.direction === 'dropup' || this.direction === 'dropup-center',
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
      this.dropdownStateSubscription =
        this.dropdownService.dropdownState$.subscribe((state) => {
          if (this === state.dropdown) {
            if ('visible' in state) {
              state?.visible === 'toggle'
                ? this.toggleDropdown()
                : (this.visible = state.visible);
            }
          }
        });
    } else {
      this.dropdownStateSubscription.unsubscribe();
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
    this.dropdownStateSubscribe();
    this.setVisibleState(this.visible);
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
      this.renderer.listen(this.document, 'keyup', (event) => {
        if (event.key === 'Escape' && this.autoClose !== false) {
          this.setVisibleState(false);
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
