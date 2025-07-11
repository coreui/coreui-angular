import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  inject,
  Input,
  numberAttribute,
  OnChanges,
  OnDestroy,
  output,
  QueryList,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';

import { TabPaneComponent } from '../tab-pane/tab-pane.component';
import { TabService } from '../tab.service';

@Component({
  selector: 'c-tab-content',
  template: '<ng-content />',
  styleUrls: ['./tab-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'cTabContent',
  host: { class: 'tab-content' }
})
export class TabContentComponent implements AfterContentChecked, AfterContentInit, OnChanges, OnDestroy {
  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #tabService = inject(TabService);

  /**
   * Set active tabPane index
   * @type number
   */
  @Input({ transform: numberAttribute })
  set activeTabPaneIdx(value: number) {
    const newValue = value;
    if (this.#activeTabPaneIdx != newValue) {
      this.#activeTabPaneIdx = newValue;
      this.activeTabPaneIdxChange?.emit(newValue);
      this.#changeDetectorRef.markForCheck();
      this.#changeDetectorRef.detectChanges();
    }
  }

  get activeTabPaneIdx() {
    return this.#activeTabPaneIdx;
  }

  #activeTabPaneIdx = -1;

  /**
   * Event emitted on the active tab pane index change.
   */
  readonly activeTabPaneIdxChange = output<number>();

  @ContentChildren(TabPaneComponent) public panes!: QueryList<TabPaneComponent>;
  #tabServiceSubscription!: Subscription;

  ngAfterContentInit(): void {
    this.subscribeTabService();
  }

  ngAfterContentChecked(): void {
    this.panes?.forEach((tabPane, index) => {
      tabPane.tabContent = this;
      tabPane.tabPaneIdx = index;
    });
    this.refreshTabPaneActive(this.activeTabPaneIdx);
    this.#tabService.setActiveTabIdx({ tabContent: this, activeIdx: this.activeTabPaneIdx });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeTabPaneIdx']?.currentValue) {
      this.#tabService.setActiveTabIdx({ tabContent: this, activeIdx: changes['activeTabPaneIdx'].currentValue });
    }
  }

  ngOnDestroy(): void {
    this.subscribeTabService(false);
  }

  subscribeTabService(subscribe: boolean = true) {
    if (subscribe) {
      this.#tabServiceSubscription = this.#tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (this === tabContentState.tabContent) {
          this.activeTabPaneIdx = tabContentState.activeIdx;
        }
      });
    } else {
      this.#tabServiceSubscription?.unsubscribe();
    }
  }

  refreshTabPaneActive(idx: number) {
    // hack for active state pane refresh todo?
    this.panes?.forEach((tabPane, index) => {
      tabPane.active = idx === index;
    });
  }
}
