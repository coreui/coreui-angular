import { booleanAttribute, ChangeDetectorRef, Component, HostBinding, inject, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TabContentComponent } from '../tab-content/tab-content.component';
import { ITabContentState, TabService } from '../tab.service';

@Component({
  selector: 'c-tab-pane',
  template: '<ng-content />',
  styleUrls: ['./tab-pane.component.scss'],
  exportAs: 'cTabPane',
  host: { class: 'tab-pane' }
})
export class TabPaneComponent implements OnDestroy {
  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #tabService = inject(TabService);

  constructor() {
    this.subscribeTabService();
  }

  public tabPaneIdx!: number;
  public tabContent!: TabContentComponent;
  #tabServiceSubscription!: Subscription;

  set active(value: boolean) {
    const newValue = booleanAttribute(value);
    if (this.#active !== newValue) {
      this.#active = newValue;
      this.#changeDetectorRef.markForCheck();
    }
  }

  get active(): boolean {
    return this.#active;
  }

  #active: boolean = false;

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
      this.#tabServiceSubscription = this.#tabService.activeTabPaneIdx$.subscribe(
        (tabContentState: ITabContentState) => {
          if (tabContentState.tabContent === this.tabContent) {
            this.active = tabContentState.activeIdx === this.tabPaneIdx;
          }
        }
      );
    } else {
      this.#tabServiceSubscription?.unsubscribe();
    }
  }
}
