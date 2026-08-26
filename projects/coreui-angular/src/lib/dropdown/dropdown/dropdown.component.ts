import {
  AfterViewInit,
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  computed,
  contentChild,
  DestroyRef,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  forwardRef,
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';

import { createPopper, Instance, Options, Placement } from '@popperjs/core';

import { DropdownAlignment } from '../../coreui.types';
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
  readonly #destroyRef = inject(DestroyRef);
  public readonly elementRef = inject(ElementRef);
  #dropdownService = inject(DropdownService);
  public dropdown = inject(DropdownToken, { optional: true });

  /**
   * Reference to dropdown component.
   * @returns DropdownComponent | undefined
   * @default undefined
   */
  readonly dropdownComponent = input<DropdownComponent>();

  /**
   * Disables the toggler.
   * @returns boolean
   * @default false
   */
  readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });

  /**
   * Enables pseudo-element caret on toggler.
   * @returns boolean
   * @default true
   */
  readonly caret = input(true);

  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns,
   * but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
   * @returns boolean
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
      const subscription = dropdown?.visibleChange?.subscribe((visible) => {
        this.#ariaExpanded.set(visible);
      });
      if (subscription) {
        this.#destroyRef.onDestroy(() => {
          subscription.unsubscribe();
        });
      }
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
export class DropdownComponent implements OnDestroy, OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #document = inject(DOCUMENT);
  readonly #elementRef = inject(ElementRef);
  readonly #renderer = inject(Renderer2);
  readonly #ngZone = inject(NgZone);
  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly dropdownService = inject(DropdownService);

  constructor() {
    this.dropdownStateSubscribe();
  }

  /**
   * Set alignment of dropdown menu.
   * @returns DropdownAlignment
   */
  readonly alignment = input<DropdownAlignment>();

  /**
   * Configure the auto close behavior: `true` closes the dropdown on a click inside or
   * outside the menu, `false` only on the toggle button or an explicit hide/toggle call
   * and not on the Esc key, `inside` only on a click inside the menu, `outside` only on
   * a click outside it.
   * @returns boolean | 'inside' | 'outside'
   * @default true
   */
  readonly autoClose = input<boolean | 'inside' | 'outside'>(true);

  /**
   * Sets a specified  direction and location of the dropdown menu.
   * @returns 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart'
   */
  readonly direction = input<'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart'>();

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers
   * that may have flipped or altered the originally provided placement property.
   * @returns Placement
   * @default 'bottom-start'
   */
  readonly placement = input<Placement>('bottom-start');

  /**
   * If you want to disable dynamic positioning set this property to `false`.
   * @returns boolean
   * @default true
   */
  readonly popper = input<boolean, unknown>(true, { transform: booleanAttribute });

  readonly #popperEnabled = computed(() => this.popper() && typeof this.alignment() !== 'object');

  /**
   * Optional Popper.js options object; the `placement` prop takes precedence over the
   * placement set here. See https://popper.js.org/docs/v2/constructors/#options
   * @returns Partial<Options>
   * @default {}
   */
  readonly popperOptionsInput = input<Partial<Options>>({}, { alias: 'popperOptions' });

  readonly #popperOptionsEffect = effect(() => {
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
   * @returns boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal({
    source: this.visibleInput,
    computation: (value) => value
  });

  readonly #visibleEffect = effect(() => {
    const visible = this.visible();
    untracked(() => {
      this.activeTrap = visible;
      visible ? this.createPopperInstance() : this.destroyPopperInstance();
      this.setVisibleState(visible);
      this.visibleChange?.emit(visible);
    });
  });

  /**
   * Event emitted on `visible` change.
   * @returns boolean
   */
  readonly visibleChange = output<boolean>();

  dropdownContext = { $implicit: this.visible() };
  readonly _toggler = contentChild(DropdownToggleDirective);
  readonly _menu = contentChild(DropdownMenuDirective);
  readonly _menuElementRef = contentChild(DropdownMenuDirective, { read: ElementRef });

  public activeTrap = false;

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

  dropdownStateSubscribe(): void {
    this.dropdownService.dropdownState$
      .pipe(
        filter((state) => {
          return this === state.dropdown;
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((state) => {
        if ('visible' in state) {
          state?.visible === 'toggle' ? this.toggleDropdown() : this.visible.set(state.visible);
        }
      });
  }

  toggleDropdown(): void {
    this.visible.update((visible) => !visible);
  }

  onClick(event: any): void {
    if (!this._toggler()?.elementRef.nativeElement.contains(event.target?.closest('[cDropdownToggle]'))) {
      this.toggleDropdown();
    }
  }

  readonly #togglerEffect = effect(() => {
    const variant = this.variant();
    const _toggler = this._toggler();
    if (variant === 'nav-item' && _toggler) {
      this.#renderer.addClass(_toggler.elementRef.nativeElement, 'nav-link');
    }
  });

  ngOnInit(): void {
    this.setVisibleState(this.visible());
  }

  ngOnDestroy(): void {
    this.clearListeners();
    this.destroyPopperInstance();
  }

  setVisibleState(value: boolean): void {
    this.dropdownService.toggle({ visible: value, dropdown: this });
  }

  // todo: turn off popper in navbar-nav
  createPopperInstance(): void {
    const _toggler = this._toggler();
    const _menu = this._menu();
    if (_toggler && _menu) {
      this.#ngZone.runOutsideAngular(() => {
        // workaround for popper position calculate (see also: dropdown-menu.component)
        _menu.elementRef.nativeElement.style.visibility = 'hidden';
        _menu.elementRef.nativeElement.style.display = 'block';
        if (this.#popperEnabled()) {
          this.popperInstance = createPopper(_toggler.elementRef.nativeElement, _menu.elementRef.nativeElement, {
            ...this.popperOptions
          });
        }
        this.#ngZone.run(() => {
          this.setListeners();
          this.#changeDetectorRef.markForCheck();
          this.#changeDetectorRef.detectChanges();
        });
      });
    }
  }

  destroyPopperInstance(): void {
    this.clearListeners();
    this.popperInstance?.destroy();
    this.popperInstance = undefined;
    this.#changeDetectorRef.markForCheck();
  }

  private setListeners(): void {
    this.listeners.push(
      this.#renderer.listen(this.#document, 'click', (event) => {
        const target = event.target as HTMLElement;
        if (this._menuElementRef()?.nativeElement.contains(event.target)) {
          this.clickedTarget = target;
        }
        if (this._toggler()?.elementRef.nativeElement.contains(event.target)) {
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
      this.#renderer.listen(this.#elementRef.nativeElement, 'keyup', (event) => {
        if (event.key === 'Escape' && this.autoClose() !== false) {
          event.stopPropagation();
          this.setVisibleState(false);
          return;
        }
      })
    );
    this.listeners.push(
      this.#renderer.listen(this.#document, 'keyup', (event) => {
        if (
          event.key === 'Tab' &&
          this.autoClose() !== false &&
          !this.#elementRef.nativeElement.contains(event.target)
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
