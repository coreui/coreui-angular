import {
  booleanAttribute,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { ISidebarAction, SidebarService } from '../sidebar.service';
import { SidebarBackdropService } from '../sidebar-backdrop/sidebar-backdrop.service';

@Component({
  selector: 'c-sidebar',
  exportAs: 'cSidebar',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'sidebar' }
})
export class SidebarComponent implements OnChanges, OnDestroy, OnInit {
  #visible = false;
  #onMobile = false;
  #layoutChangeSubscription!: Subscription;
  #stateToggleSubscription!: Subscription;

  state: ISidebarAction = {
    sidebar: this
  };

  #stateInitial = {
    narrow: false,
    visible: false,
    unfoldable: false
  };

  /**
   * Sets if the color of text should be colored for a light or dark background. [docs]
   *
   * @type 'dark' | 'light'
   */
  @Input() colorScheme?: 'dark' | 'light';

  /**
   * Sets html attribute id. [docs]
   *
   * @type string
   */
  @Input() id?: string;

  /**
   * Make sidebar narrow. [docs]
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) narrow: boolean = false;

  /**
   * Set sidebar to overlaid variant.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) overlaid: boolean = false;

  /**
   * Components placement, there’s no default placement. [docs]
   * @type 'start' | 'end'
   */
  @Input() placement?: 'start' | 'end';

  /**
   * Place sidebar in non-static positions. [docs]
   * @default 'fixed'
   */
  @Input() position: 'fixed' | 'sticky' = 'fixed';

  /**
   * Size the component small, large, or extra large. [docs]
   */
  @Input() size?: 'sm' | 'lg' | 'xl';

  /**
   * Expand narrowed sidebar on hover. [docs]
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) unfoldable: boolean = false;

  /**
   * Toggle the visibility of sidebar component. [docs]
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute })
  set visible(value: boolean) {
    const visible = value;
    if (this.#visible !== visible) {
      this.#visible = visible;
      this.visibleChange.emit(this.#visible);
    }
  }

  get visible() {
    return this.#visible;
  }

  /**
   * Event emitted on visibility change. [docs]
   * @type boolean
   */
  @Output() visibleChange = new EventEmitter<boolean>();

  set sidebarState(value: ISidebarAction) {
    const newState = value;
    if ('toggle' in newState) {
      if (newState.toggle === 'visible') {
        newState.visible = !this.state.visible;
        this.visible = newState.visible;
      } else if (newState.toggle === 'unfoldable') {
        newState.unfoldable = !this.state.unfoldable;
        this.unfoldable = newState.unfoldable;
      }
    } else {
      this.visible = (newState.visible ?? this.visible) && !this.overlaid;
    }
    this.state = {
      ...this.state,
      ...newState
    };
    this.state.mobile && this.state.visible
      ? this.backdropService.setBackdrop(this)
      : this.backdropService.clearBackdrop();
  }

  get sidebarState(): ISidebarAction {
    return this.state;
  }

  get getMobileBreakpoint(): string {
    const element: Element = this.document.documentElement;
    const mobileBreakpoint =
      this.document.defaultView?.getComputedStyle(element)?.getPropertyValue('--cui-mobile-breakpoint') ?? 'md';
    const breakpointValue =
      this.document.defaultView
        ?.getComputedStyle(element)
        ?.getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) ?? '768px';
    return `${parseFloat(breakpointValue.trim()) - 0.02}px`;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
    private sidebarService: SidebarService,
    private backdropService: SidebarBackdropService
  ) {
    this.backdropService.renderer = renderer;
  }

  @HostBinding('class')
  get getClasses(): any {
    const { mobile, visible } = this.sidebarState;
    return {
      sidebar: true,
      'sidebar-fixed': this.position === 'fixed' && !mobile,
      'sidebar-narrow': this.narrow && !this.unfoldable,
      'sidebar-narrow-unfoldable': this.unfoldable,
      'sidebar-overlaid': this.overlaid,
      [`sidebar-${this.placement}`]: !!this.placement,
      [`sidebar-${this.colorScheme}`]: !!this.colorScheme,
      [`sidebar-${this.size}`]: !!this.size,
      show: visible,
      // show: visible && this.#onMobile, //todo: check
      hide: !visible
    };
  }

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
    const oldStateMap = new Map(Object.entries(this.state));
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
      this.sidebarService.toggle(state);
    }
  }

  setInitialState(): void {
    this.#stateInitial = {
      narrow: this.narrow,
      visible: this.visible,
      unfoldable: this.unfoldable
    };
    this.sidebarService.toggle({
      ...this.#stateInitial,
      sidebar: this
    });
  }

  private stateToggleSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.#stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((state) => {
        if (this === state.sidebar || this.id === state.id) {
          this.sidebarState = state;
        }
      });
    } else {
      this.#stateToggleSubscription?.unsubscribe();
    }
  }

  layoutChangeSubscribe(subscribe: boolean = true): void {
    const onMobile = `(max-width: ${this.getMobileBreakpoint})`;

    if (subscribe) {
      const layoutChanges = this.breakpointObserver.observe([onMobile]);

      this.#layoutChangeSubscription = layoutChanges.subscribe((result: BreakpointState) => {
        const isOnMobile = result.breakpoints[onMobile];
        const isUnfoldable = isOnMobile ? false : this.unfoldable;
        if (this.#onMobile !== isOnMobile) {
          this.#onMobile = isOnMobile;
          this.sidebarService.toggle({
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
