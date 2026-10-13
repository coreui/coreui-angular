import { booleanAttribute, Component, computed, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { TabContentComponent } from '../tab-content/tab-content.component';
import { ITabContentState, TabService } from '../tab.service';

@Component({
  selector: 'c-tab-pane',
  template: '<ng-content />',
  styleUrls: ['./tab-pane.component.scss'],
  exportAs: 'cTabPane',
  host: {
    class: 'tab-pane',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()'
  }
})
export class TabPaneComponent {
  readonly #tabService = inject(TabService);

  constructor() {
    this.#tabService.activeTabPaneIdx$.pipe(takeUntilDestroyed()).subscribe((tabContentState: ITabContentState) => {
      if (tabContentState.tabContent === this.tabContent) {
        this.active = tabContentState.activeIdx === this.tabPaneIdx;
      }
    });
  }

  /**
   * Element role.
   * @returns string
   * @default 'tabpanel'
   */
  readonly role = input('tabpanel');

  public tabPaneIdx!: number;
  public tabContent!: TabContentComponent;

  set active(value: boolean) {
    this.#active.set(booleanAttribute(value));
  }

  get active(): boolean {
    return this.#active();
  }

  readonly #active = signal(false);

  readonly hostClasses = computed(() => {
    const active = this.#active();
    return {
      'tab-pane': true,
      fade: true,
      show: active,
      active
    } as Record<string, boolean>;
  });
}
