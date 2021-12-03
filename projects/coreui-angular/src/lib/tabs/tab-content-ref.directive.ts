import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { TabService } from './tab.service';

@Directive({
  selector: '[cTabContent]',
})
export class TabContentRefDirective implements OnChanges, OnDestroy, OnInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private tabService: TabService
  ) { }

  static ngAcceptInputType_disabled: BooleanInput;
  private tabServiceSubscription!: Subscription;

  /**
   * Template Ref
   * @type TemplateRef
   */
  @Input('cTabContent') tabContentRef!: any;

  /**
   * Set active state of tab content
   * @type boolean
   */
  @Input()
  set active(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    if (this._active !== newValue) {
      this._active = newValue;
      this.changeDetectorRef.detectChanges();
    }
  }
  get active() {
    return this._active;
  }
  private _active = false;

  /**
   * Set disabled state of tab content
   * @type boolean
   */
  @Input()
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled(): boolean {
    return this._disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
  }
  private _disabled = false;

  /**
   * c-tab-pane index respectively
   * @type number
   */
  @Input() tabPaneIdx = -1;

  @HostBinding('class')
  get hostClasses() {
    return {
      active: this.active,
      disabled: this.disabled
    };
  }

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean | null {
    return this.disabled || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? '' : null;
  };

  @HostBinding('attr.tabindex')
  get getTabindex(): string | null {
    return this.disabled ? '-1' : null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['active']?.currentValue) {
      this.setActiveTabPane();
    }
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.setActiveTabPane();
  }

  setActiveTabPane() {
    setTimeout(() => {
      if (this.tabPaneIdx < this.tabContentRef.panes.length) {
        this.active = true;
        this.tabService.setActiveTabIdx({ tabContent: this.tabContentRef, activeIdx: this.tabPaneIdx });
      } else {
        this.active = false;
      }
    });
  }

  ngOnInit(): void {
    this.subscribeTabService();
  }

  ngOnDestroy(): void {
    this.subscribeTabService(false);
  }

  subscribeTabService(subscribe: boolean = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContentRef) {
          this.active = (tabContentState.activeIdx === this.tabPaneIdx);
        }
      });
    } else {
      this.tabServiceSubscription.unsubscribe();
    }
  }
}
