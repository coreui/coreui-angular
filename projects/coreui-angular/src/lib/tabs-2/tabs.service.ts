import { Injectable, InjectionToken, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';
import type { TabPanelComponent } from './tab-panel/tab-panel.component';
import type { TabDirective } from './tab/tab.directive';

/** @internal */
export const TABS_LIST = new InjectionToken<{
  readonly tabStopKey: Signal<string | number | undefined>;
}>('TABS_LIST');

@Injectable()
export class TabsService {
  #activeItemKey: WritableSignal<string | number | undefined> = signal(undefined);
  readonly #panels = signal<readonly TabPanelComponent[]>([]);
  readonly #tabs = signal<readonly TabDirective[]>([]);

  /**
   * The active item key.
   */
  get activeItemKey(): WritableSignal<string | number | undefined> {
    return this.#activeItemKey;
  }

  /**
   * The tab of the active item key.
   * @deprecated Read `activeItemKey` instead. Will be removed in the next major version.
   */
  readonly activeItem: WritableSignal<any> = linkedSignal(() => {
    const key = this.activeItemKey();
    return this.#tabs().find((tab) => tab.itemKey() === key);
  });

  readonly id = signal<string | number | undefined>(undefined);

  /** @internal Tabs whose inputs are set. */
  readonly tabs = this.#tabs.asReadonly();

  /** @internal */
  bindActiveItemKey(activeItemKey: WritableSignal<string | number | undefined>): void {
    this.#activeItemKey = activeItemKey;
  }

  /** @internal */
  register(tab: TabDirective): () => void {
    this.#tabs.update((tabs) => [...tabs, tab]);
    return () => this.#tabs.update((tabs) => tabs.filter((item) => item !== tab));
  }

  /** @internal */
  registerPanel(panel: TabPanelComponent): () => void {
    this.#panels.update((panels) => [...panels, panel]);
    return () => this.#panels.update((panels) => panels.filter((item) => item !== panel));
  }

  /** @internal */
  defaultId(part: 'panel' | 'tab', itemKey: string | number): string {
    return `${this.id()}-${part}-${itemKey}`;
  }

  /** @internal */
  panelId(itemKey: string | number): string {
    return (
      this.#panels()
        .find((panel) => panel.itemKey() === itemKey)
        ?.propId() ?? this.defaultId('panel', itemKey)
    );
  }

  /** @internal */
  tabId(itemKey: string | number): string {
    return (
      this.#tabs()
        .find((tab) => tab.itemKey() === itemKey)
        ?.propId() ?? this.defaultId('tab', itemKey)
    );
  }
}
