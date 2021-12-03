import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';

import { TabPaneComponent } from '../tab-pane/tab-pane.component';
import { TabService } from '../tab.service';

@Component({
  selector: 'c-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'cTabContent'
})
export class TabContentComponent implements AfterContentChecked, AfterContentInit, OnChanges, OnDestroy {

  /**
   * Set active tabPane index
   * @type number
   */
  @Input()
  set activeTabPaneIdx(value: number) {
    const newValue = coerceNumberProperty(value);
    if (this._activeTabPaneIdx != newValue) {
      this._activeTabPaneIdx = newValue;
      this.activeTabPaneIdxChange.emit(newValue);
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    }
  };
  get activeTabPaneIdx() {
    return this._activeTabPaneIdx;
  }
  private _activeTabPaneIdx = -1;

  /**
   * Event emited on the active tab pane index change.
   */
  @Output() activeTabPaneIdxChange: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(TabPaneComponent) public panes!: QueryList<TabPaneComponent>;
  private tabServiceSubscription!: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private tabService: TabService
  ) { }

  @HostBinding('class')
  get hostClasses() {
    return {
      'tab-content': true
    };
  }

  ngAfterContentInit(): void {
    this.subscribeTabService();
  }

  ngAfterContentChecked(): void {
    this.panes?.forEach((tabPane, index) => {
      tabPane.tabContent = this;
        tabPane.tabPaneIdx = index;
    });
    this.refreshTabPaneActive(this.activeTabPaneIdx);
    this.tabService.setActiveTabIdx({ tabContent: this, activeIdx: this.activeTabPaneIdx });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeTabPaneIdx']?.currentValue) {
      this.tabService.setActiveTabIdx({ tabContent: this, activeIdx: changes['activeTabPaneIdx'].currentValue });
    }
  }

  ngOnDestroy(): void {
    this.subscribeTabService(false);
  }

  subscribeTabService(subscribe: boolean = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (this === tabContentState.tabContent) {
          this.activeTabPaneIdx = tabContentState.activeIdx;
        }
      });
    } else {
      this.tabServiceSubscription.unsubscribe();
    }
  }

  refreshTabPaneActive(idx: number) {
    // hack for active state pane refresh todo?
    this.panes?.forEach((tabPane, index) => {
      tabPane.active = idx === index;
    });
  }
}
