import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  computed,
  ContentChild,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  forwardRef,
  Inject,
  inject,
  input,
  linkedSignal,
  NgZone,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
  signal,
  untracked
} from '@angular/core';
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
  host: {
    '[class]': 'hostClasses()',
    '[attr.aria-expanded]': 'ariaExpanded',
    '(click)': 'onClick($event)'
  }
})
export class DropdownToggleDirective implements AfterViewInit {
  // injections
  readonly #destroyRef = inject(DestroyRef);
  public readonly elementRef = inject(ElementRef);
  #dropdownService = inject(DropdownService);
  public dropdown = inject(DropdownToken, { optional: true });

  /**
   * Reference to dropdown component.
   * @return DropdownComponent | undefined
   * @default undefined
   */
  readonly dropdownComponent = input<DropdownComponent>();

  /**
   * Disables the toggler.
   * @return boolean
   * @default false
   */
  readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });

  /**
   * Enables pseudo element caret on toggler.
   * @return boolean
   */
  readonly caret = input(true);

  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns,
   * but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
   * @return boolean
   * @default false
   */
  readonly split = input<boolean, unknown>(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'dropdown-toggle': this.caret(),
      'dropdown-toggle-split': this.split(),
      disabled: this.disabled()
    } as Record<string, boolean>;
  });

  readonly #ariaExpanded = signal(false);

  get ariaExpanded() {
    return this.#ariaExpanded();
  }

  public onClick($event: MouseEvent): void {
    $event.preventDefault();
    !this.disabled() && this.#dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
  }

  ngAfterViewInit(): void {
    const dropdownComponent = this.dropdownComponent();
    if (dropdownComponent) {
      this.dropdown = dropdownComponent;
      this.#dropdownService = dropdownComponent?.dropdownService;
    }
    if (this.dropdown) {
      const dropdown = <DropdownComponent>this.dropdown;
      dropdown?.visibleChange?.subscribe((visible) => {
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
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: {
    '[class]': 'hostClasses()',
    '[style]': 'hostStyle()',
    '(click)': 'onHostClick($event)'
  }
})
export class DropdownComponent implements AfterContentInit, OnDestroy, OnInit {
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
   * @return {'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}}
   */
  readonly alignment = input<string>();

  /**
   * Automatically close dropdown when clicking outside the dropdown menu.
   */
  readonly autoClose = input<boolean | 'inside' | 'outside'>(true);

  /**
   * Sets a specified  direction and location of the dropdown menu.
   * @return 'dropup' | 'dropend' | 'dropstart'
   */
  readonly direction = input<'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart'>();

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers
   * that may have flipped or altered the originally provided placement property.
   * @return Placement
   */
  readonly placement = input<Placement>('bottom-start');

  /**
   * If you want to disable dynamic positioning set this property to `false`.
   * @return boolean
   * @default true
   */
  readonly popper = input<boolean, unknown>(true, { transform: booleanAttribute });

  /**
   * Optional popper Options object, placement prop takes precedence over
   * @return Partial<Options>
   */
  readonly popperOptionsInput = input<Partial<Options>>({}, { alias: 'popperOptions' });

  readonly popperOptionsEffect = effect(() => {
    this.popperOptions = { ...untracked(this.#popperOptions), ...this.popperOptionsInput() };
  });

  set popperOptions(value: Partial<Options>) {
    this.#popperOptions.update((popperOptions) => ({ ...popperOptions, ...value }));
  }

  get popperOptions(): Partial<Options> {
    let placement = this.placement();
    switch (this.direction()) {
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
    if (this.alignment() === 'end') {
      placement = 'bottom-end';
    }
    this.#popperOptions.update((value) => ({ ...value, placement: placement }));
    return this.#popperOptions();
  }

  readonly #popperOptions = signal<Partial<Options>>({
    placement: this.placement(),
    modifiers: [],
    strategy: 'absolute'
  });

  /**
   * Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item.
   */
  readonly variant = input<('btn-group' | 'dropdown' | 'input-group' | 'nav-item') | undefined>('dropdown');

  /**
   * Toggle the visibility of dropdown menu component.
   * @return boolean
   * @default false
   */
  readonly visibleInput = input<boolean, unknown>(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal({
    source: () => this.visibleInput(),
    computation: (value) => value
  });

  readonly visibleEffect = effect(() => {
    const visible = this.visible();
    this.activeTrap = visible;
    visible ? this.createPopperInstance() : this.destroyPopperInstance();
    this.setVisibleState(visible);
    this.visibleChange.emit(visible);
  });

  readonly visibleChange = output<boolean>();

  dropdownContext = { $implicit: this.visible() };
  @ContentChild(DropdownToggleDirective) _toggler!: DropdownToggleDirective;
  @ContentChild(DropdownMenuDirective) _menu!: DropdownMenuDirective;
  @ContentChild(DropdownMenuDirective, { read: ElementRef }) _menuElementRef!: ElementRef;

  public activeTrap = false;

  private dropdownStateSubscription!: Subscription;
  private popperInstance!: Instance | undefined;
  private listeners: (() => void)[] = [];

  readonly hostClasses = computed(() => {
    const direction = this.direction();
    const variant = this.variant();
    return {
      dropdown: (variant === 'dropdown' || variant === 'nav-item') && !direction,
      [`${direction}`]: !!direction,
      [`${variant}`]: !!variant,
      dropup: direction === 'dropup' || direction === 'dropup-center',
      show: this.visible()
    } as Record<string, boolean>;
  });

  // todo: find better solution
  readonly hostStyle = computed(() => {
    return this.variant() === 'input-group' ? { display: 'contents' } : {};
  });

  private clickedTarget!: HTMLElement;

  onHostClick($event: MouseEvent): void {
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
            state?.visible === 'toggle' ? this.toggleDropdown() : this.visible.set(state.visible);
          }
        });
    } else {
      this.dropdownStateSubscription?.unsubscribe();
    }
  }

  toggleDropdown(): void {
    this.visible.update((visible) => !visible);
  }

  onClick(event: any): void {
    if (!this._toggler?.elementRef.nativeElement.contains(event.target?.closest('[cDropdownToggle]'))) {
      this.toggleDropdown();
    }
  }

  ngAfterContentInit(): void {
    if (this.variant() === 'nav-item') {
      this.renderer.addClass(this._toggler.elementRef.nativeElement, 'nav-link');
    }
  }

  ngOnInit(): void {
    this.setVisibleState(this.visible());
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
        if (this.popper()) {
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
        const autoClose = this.autoClose();
        if (autoClose === true) {
          this.setVisibleState(false);
          return;
        }
        if (this.clickedTarget === target && autoClose === 'inside') {
          this.setVisibleState(false);
          return;
        }
        if (this.clickedTarget !== target && autoClose === 'outside') {
          this.setVisibleState(false);
          return;
        }
      })
    );
    this.listeners.push(
      this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
        if (event.key === 'Escape' && this.autoClose() !== false) {
          event.stopPropagation();
          this.setVisibleState(false);
          return;
        }
      })
    );
    this.listeners.push(
      this.renderer.listen(this.document, 'keyup', (event) => {
        if (
          event.key === 'Tab' &&
          this.autoClose() !== false &&
          !this.elementRef.nativeElement.contains(event.target)
        ) {
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
