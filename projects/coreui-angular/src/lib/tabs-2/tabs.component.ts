import { Component, effect, inject, input, model, ModelSignal } from '@angular/core';
import { TabsService } from './tabs.service';

let nextId = 0;

@Component({
  exportAs: 'cTabs',
  selector: 'c-tabs',
  standalone: true,
  imports: [],
  template: '<ng-content />',
  styleUrl: './tabs.component.scss',
  providers: [TabsService],
  host: {
    '[id]': 'id()',
    class: 'tabs'
  }
})
export class TabsComponent {
  readonly tabsService = inject(TabsService);

  /**
   * The active item key.
   * @type <string | number | undefined>
   */
  readonly activeItemKey: ModelSignal<string | number | undefined> = model<number | string>();

  /**
   * The id attribute
   * @type string
   */
  tabsId = `tabs-${nextId++}`;
  readonly id = input<string>(this.tabsId);

  readonly activeItemEffect = effect(
    () => {
      this.tabsService.id.set(this.id());
      this.tabsService.activeItemKey.set(this.activeItemKey());
    },
    { allowSignalWrites: true }
  );

  readonly tabsServiceEffect = effect(
    () => {
      this.activeItemKey.set(this.tabsService.activeItemKey());
    },
    { allowSignalWrites: true }
  );
}
