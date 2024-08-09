import { booleanAttribute, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TabContentComponent } from '../tab-content/tab-content.component';
import { ITabContentState, TabService } from '../tab.service';

@Component({
  selector: 'c-tab-pane',
  template: '<ng-content />',
  styleUrls: ['./tab-pane.component.scss'],
  exportAs: 'cTabPane',
  standalone: true,
  host: { class: 'tab-pane' }
})
export class TabPaneComponent implements OnDestroy {
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private tabService: TabService
  ) {
    this.subscribeTabService();
  }

  public tabPaneIdx!: number;
  public tabContent!: TabContentComponent;
  private tabServiceSubscription!: Subscription;

  set active(value: boolean) {
    const newValue = booleanAttribute(value);
    if (this._active !== newValue) {
      this._active = newValue;
      this.changeDetectorRef.markForCheck();
    }
  }

  get active(): boolean {
    return this._active;
  }

  private _active: boolean = false;

  @HostBinding('class')
  get hostClasses() {
    return {
      'tab-pane': true,
      fade: true,
      show: this.active,
      active: this.active
    };
  }

  @Input()
  @HostBinding('attr.role')
  role = 'tabpanel';

  ngOnDestroy(): void {
    this.subscribeTabService(false);
  }

  subscribeTabService(subscribe: boolean = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState: ITabContentState) => {
        if (tabContentState.tabContent === this.tabContent) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
}
