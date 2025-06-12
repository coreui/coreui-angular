import {
  booleanAttribute,
  Component,
  computed,
  DOCUMENT,
  effect,
  inject,
  input,
  linkedSignal,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
  signal,
  SimpleChanges
} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { ISidebarAction, SidebarService } from '../sidebar.service';
import { SidebarBackdropService } from '../sidebar-backdrop/sidebar-backdrop.service';

@Component({
  selector: 'c-sidebar',
  exportAs: 'cSidebar',
  template: '<ng-content />',
  host: {
    class: 'sidebar',
    '[class]': 'hostClasses()',
    '[attr.inert]': '!this.sidebarState.visible || null'
  }
})
export class SidebarComponent implements OnChanges, OnDestroy, OnInit {
  readonly #document = inject<Document>(DOCUMENT);
  readonly #renderer = inject(Renderer2);
  readonly #breakpointObserver = inject(BreakpointObserver);
  readonly #sidebarService = inject(SidebarService);
  readonly #backdropService = inject(SidebarBackdropService);

  #onMobile = false;
  #layoutChangeSubscription!: Subscription;
  #stateToggleSubscription!: Subscription;

  readonly state = signal<ISidebarAction>({
    sidebar: this
  });

  #stateInitial = {
    narrow: false,
    visible: false,
    unfoldable: false
  };

  /**
   * Sets if the color of text should be colored for a light or dark background.
   * @return 'dark' | 'light'
   */
  readonly colorScheme = input<'dark' | 'light'>();

  /**
   * Sets html attribute id.
   * @return string
   */
  readonly id = input<string>();

  /**
   * Make sidebar narrow.
   * @return boolean
   * @default false
   */
  readonly narrowInput = input(false, { transform: booleanAttribute, alias: 'narrow' });

  readonly #narrow = linkedSignal(this.narrowInput);

  set narrow(value) {
    this.#narrow.set(value);
  }

  get narrow() {
    return this.#narrow();
  }

  /**
   * Set sidebar to overlaid variant.
   * @return boolean
   * @default false
   */
  readonly overlaid = input(false, { transform: booleanAttribute });

  /**
   * Components placement, there’s no default placement.
   * @return 'start' | 'end'
   */
  readonly placement = input<'start' | 'end'>();

  /**
   * Place sidebar in non-static positions.
   * @return 'fixed' | 'sticky'
   * @default 'fixed'
   */
  readonly position = input<'fixed' | 'sticky'>('fixed');

  /**
   * Size the component small, large, or extra large.
   * @return 'sm' | 'lg' | 'xl'
   */
  readonly size = input<'sm' | 'lg' | 'xl'>();

  /**
   * Expand narrowed sidebar on hover.
   * @type boolean
   * @default false
   */
  readonly unfoldableInput = input(false, { transform: booleanAttribute, alias: 'unfoldable' });

  readonly unfoldable = linkedSignal({
    source: this.unfoldableInput,
    computation: (value) => value
  });

  /**
   * Toggle the visibility of sidebar component.
   * @type boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly #visible = linkedSignal(this.visibleInput);

  readonly #visibleEffect = effect(() => {
    this.visibleChange?.emit(this.#visible());
  });

  set visible(value: boolean) {
    this.#visible.set(value);
  }

  get visible() {
    return this.#visible();
  }

  /**
   * Event emitted on visibility change.
   * @return boolean
   */
  readonly visibleChange = output<boolean>();

  set sidebarState(value: ISidebarAction) {
    const newState = value;
    if ('toggle' in newState) {
      if (newState.toggle === 'visible') {
        newState.visible = !this.state().visible;
        this.#visible.set(newState.visible);
      } else if (newState.toggle === 'unfoldable') {
        newState.unfoldable = !this.state().unfoldable;
        this.unfoldable.set(newState.unfoldable);
      }
    } else {
      this.#visible.update((visible) => (newState.visible ?? visible) && !this.overlaid());
    }
    this.state.update((state) => ({ ...state, ...newState }));
    this.state().mobile && this.state().visible
      ? this.#backdropService.setBackdrop(this)
      : this.#backdropService.clearBackdrop();
  }

  get sidebarState(): ISidebarAction {
    return { ...this.state() };
  }

  get getMobileBreakpoint(): string {
    const element: Element = this.#document.documentElement;
    const mobileBreakpoint =
      this.#document.defaultView?.getComputedStyle(element)?.getPropertyValue('--cui-mobile-breakpoint') ?? 'md';
    const breakpointValue =
      this.#document.defaultView
        ?.getComputedStyle(element)
        ?.getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) ?? '768px';
    return `${parseFloat(breakpointValue.trim()) - 0.02}px`;
  }

  constructor() {
    this.#backdropService.renderer = this.#renderer;
  }

  readonly hostClasses = computed(() => {
    const { mobile, visible } = { ...this.sidebarState };
    const unfoldable = this.unfoldable();
    const placement = this.placement();
    const colorScheme = this.colorScheme();
    const size = this.size();
    return {
      sidebar: true,
      'sidebar-fixed': this.position() === 'fixed' && !mobile,
      'sidebar-narrow': this.#narrow() && !unfoldable,
      'sidebar-narrow-unfoldable': unfoldable,
      'sidebar-overlaid': this.overlaid(),
      [`sidebar-${placement}`]: !!placement,
      [`sidebar-${colorScheme}`]: !!colorScheme,
      [`sidebar-${size}`]: !!size,
      show: visible,
      // show: visible && this.#onMobile, //todo: check
      hide: !visible
    };
  });

  ngOnInit(): void {
    this.setInitialState();
    this.layoutChangeSubscribe();
    this.stateToggleSubscribe();
  }

  ngOnDestroy(): void {
    this.stateToggleSubscribe(false);
    this.layoutChangeSubscribe(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldStateMap = new Map(Object.entries(this.state()));
    const newStateMap = new Map();
    newStateMap.set('sidebar', this);

    const propList = ['visible', 'unfoldable', 'narrow'];

    for (const propName in changes) {
      if (propList.includes(propName)) {
        if (changes[propName] && !changes[propName].firstChange) {
          const value = booleanAttribute(changes[propName].currentValue);
          if (oldStateMap.get(propName) !== value) {
            newStateMap.set(propName, value);
          }
        }
      }
    }

    if (newStateMap.size > 1) {
      const state = Object.fromEntries(newStateMap.entries());
      this.#sidebarService.toggle(state);
    }
  }

  setInitialState(): void {
    this.#stateInitial = {
      narrow: this.#narrow(),
      visible: this.#visible(),
      unfoldable: this.unfoldable()
    };
    this.#sidebarService.toggle({
      ...this.#stateInitial,
      sidebar: this
    });
  }

  private stateToggleSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.#stateToggleSubscription = this.#sidebarService.sidebarState$.subscribe((state) => {
        if (this === state.sidebar || this.id() === state.id) {
          this.sidebarState = { ...state };
        }
      });
    } else {
      this.#stateToggleSubscription?.unsubscribe();
    }
  }

  layoutChangeSubscribe(subscribe: boolean = true): void {
    const onMobile = `(max-width: ${this.getMobileBreakpoint})`;

    if (subscribe) {
      const layoutChanges = this.#breakpointObserver.observe([onMobile]);

      this.#layoutChangeSubscription = layoutChanges.subscribe((result: BreakpointState) => {
        const isOnMobile = result.breakpoints[onMobile];
        const isUnfoldable = isOnMobile ? false : this.unfoldable();
        if (this.#onMobile !== isOnMobile) {
          this.#onMobile = isOnMobile;
          this.#sidebarService.toggle({
            mobile: isOnMobile,
            unfoldable: isUnfoldable,
            visible: isOnMobile ? !isOnMobile : this.#stateInitial.visible,
            sidebar: this
          });
        }
      });
    } else {
      this.#layoutChangeSubscription?.unsubscribe();
    }
  }
}
