import { Component, computed, effect, inject, input, model } from '@angular/core';
import { TabsService } from './tabs.service';

let nextId = 0;

@Component({
  exportAs: 'cTabs',
  selector: 'c-tabs',
  imports: [],
  template: '<ng-content />',
  styleUrl: './tabs.component.scss',
  providers: [TabsService],
  host: {
    '[id]': 'propId()',
    class: 'tabs'
  }
})
export class TabsComponent {
  readonly tabsService = inject(TabsService);

  /**
   * The active item key.
   * @returns number | string
   */
  readonly activeItemKey = model<number | string>();

  /**
   * The id attribute
   * @returns string
   */
  tabsId = `tabs-${nextId++}`;

  /**
   * HTML id attribute.
   * @returns string | null | undefined
   * @default `tabs-{n}`
   */
  readonly id = input<string | null | undefined>(this.tabsId);

  protected readonly propId = computed(() => this.id() ?? this.tabsId);

  readonly #activeItemEffect = effect(() => {
    this.tabsService.id.set(this.propId());
    this.tabsService.activeItemKey.set(this.activeItemKey());
  });

  readonly #tabsServiceEffect = effect(() => {
    this.activeItemKey.set(this.tabsService.activeItemKey());
  });
}
