import {
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
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { ISidebarAction, SidebarService } from '../sidebar.service';
import { SidebarBackdropService } from '../sidebar-backdrop/sidebar-backdrop.service';

@Component({
  selector: 'c-sidebar',
  exportAs: 'cSidebar',
  template: '<ng-content></ng-content>',
})
export class SidebarComponent implements OnChanges, OnDestroy, OnInit {

  static ngAcceptInputType_narrow: BooleanInput;
  static ngAcceptInputType_overlaid: BooleanInput;
  static ngAcceptInputType_unfoldable: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  private _narrow = false;
  private _overlaid = false;
  private _unfoldable = false;
  private _visible = false;
  private onMobile = false;
  private layoutChangeSubscription!: Subscription;
  private stateToggleSubscription!: Subscription;

  state: ISidebarAction = {
    sidebar: this
  };

  /**
   * Sets html attribute id. [docs]
   *
   * @type string
   */
  @Input() id?: string;

  /**
   * Make sidebar narrow. [docs]
   * @type boolean
   */
  @Input()
  set narrow(value: boolean) {
    this._narrow = coerceBooleanProperty(value);
  }
  get narrow() {
    return this._narrow;
  }

  /**
   * Set sidebar to overlaid variant.
   * @type boolean
   */
  @Input()
  set overlaid(value: boolean) {
    this._overlaid = coerceBooleanProperty(value);
  }
  get overlaid() {
    return this._overlaid;
  }

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
   */
  @Input()
  set unfoldable(value: boolean) {
    this._unfoldable = coerceBooleanProperty(value);
  }
  get unfoldable() {
    return this._unfoldable;
  }

  /**
   * Toggle the visibility of sidebar component. [docs]
   */
  @Input()
  set visible(value: boolean) {
    this._visible = coerceBooleanProperty(value);
    this.visibleChange.emit(this._visible);
  }
  get visible() {
    return this._visible;
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
        this.visible = newState.visible && !this.overlaid;
      } else if (newState.toggle === 'unfoldable') {
        newState.unfoldable = !this.state.unfoldable;
        this.unfoldable = newState.unfoldable;
      }
    }
    this.state = {
      ...this.state,
      ...newState
    };
    this.state.mobile && this.state.visible ? this.backdropService.setBackdrop(this) : this.backdropService.clearBackdrop();
  }

  get sidebarState(): ISidebarAction {
    return this.state;
  }

  get getMobileBreakpoint(): string {
    const element = this.document.firstElementChild;
    const mobileBreakpoint = getComputedStyle(element).getPropertyValue('--cui-mobile-breakpoint') || 'md';
    const breakpointValue = getComputedStyle(element).getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) || '768px';
    return `${parseFloat(breakpointValue.trim()) - .02}px` || '767.98px';
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
    private sidebarService: SidebarService,
    private backdropService: SidebarBackdropService
  ) {
    this.backdropService.renderer = renderer;
  }

  @HostBinding('class')
  get getClasses(): any {
    const {mobile, unfoldable, visible} = this.sidebarState;
    return {
      sidebar: true,
      'sidebar-fixed': this.position === 'fixed' && !mobile,
      'sidebar-narrow': this.narrow && !this.unfoldable,
      'sidebar-narrow-unfoldable': unfoldable,
      'sidebar-overlaid': this.overlaid,
      [`sidebar-${this.size}`]: !!this.size,
      show: visible && this.onMobile,
      hide: !visible && !this.onMobile
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
          const value = coerceBooleanProperty(changes[propName].currentValue);
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
    this.sidebarService.toggle({
      narrow: this.narrow,
      visible: this.visible,
      unfoldable: this.unfoldable,
      sidebar: this
    });
  }

  private stateToggleSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((state) => {
        if (this === state.sidebar || this.id === state.id) {
          this.sidebarState = state;
        }
      });
    } else {
      this.stateToggleSubscription.unsubscribe();
    }
  }

  layoutChangeSubscribe(subscribe: boolean = true): void {
    const onMobile = `(max-width: ${this.getMobileBreakpoint})`;

    if (subscribe) {
      const layoutChanges = this.breakpointObserver.observe([onMobile]);

      this.layoutChangeSubscription = layoutChanges.subscribe((result: BreakpointState) => {
        const isOnMobile = result.breakpoints[onMobile];
        if (this.onMobile !== isOnMobile) {
          this.onMobile = isOnMobile;
          this.sidebarService.toggle({
            mobile: isOnMobile,
            unfoldable: isOnMobile ? false : this.unfoldable,
            visible: isOnMobile ? false : this.visible,
            sidebar: this
          });
        }
      });
    } else {
      this.layoutChangeSubscription.unsubscribe();
    }
  }
}
