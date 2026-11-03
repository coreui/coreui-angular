import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  forwardRef,
  inject,
  Injector,
  input,
  InputSignal
} from '@angular/core';
import { TabDirective } from '../tab/tab.directive';
import { TABS_LIST, TabsService } from '../tabs.service';
import { RtlService } from '../../services';

@Component({
  exportAs: 'cTabsList',
  selector: 'c-tabs-list',
  template: '<ng-content />',
  providers: [{ provide: TABS_LIST, useExisting: forwardRef(() => TabsListComponent) }],
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()',
    '(keydown)': 'onKeyDown($event)'
  }
})
export class TabsListComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #elementRef = inject(ElementRef);
  readonly #injector = inject(Injector);
  readonly tabsService = inject(TabsService);
  readonly #rtlService = inject(RtlService);

  constructor() {
    this.#destroyRef.onDestroy(() => this.#focusKeyManager.destroy());
  }

  /**
   * Specify a layout type for component.
   * @returns 'fill' | 'justified' | undefined
   * @default undefined
   */
  readonly layout: InputSignal<'fill' | 'justified' | undefined> = input();

  /**
   * Set the variant to tabs, pills, underline or enclosed.
   * @returns 'enclosed' | 'enclosed-pills' | 'pills' | 'tabs' | 'underline' | 'underline-border' | undefined
   * @default undefined
   */
  readonly variant: InputSignal<
    'enclosed' | 'enclosed-pills' | 'pills' | 'tabs' | 'underline' | 'underline-border' | undefined
  > = input();

  /**
   * Set the role to tab list.
   * @default 'tablist'
   */
  readonly role = input('tablist');

  readonly hostClasses = computed(() => {
    const layout = this.layout();
    const variant = this.variant();

    return {
      nav: true,
      [`nav-${layout}`]: layout,
      'nav-enclosed': variant === 'enclosed' || variant === 'enclosed-pills',
      [`nav-${variant}`]: variant
    } as Record<string, boolean>;
  });

  readonly tabs = contentChildren(TabDirective, { descendants: true });
  protected readonly tabElements = contentChildren(TabDirective, { descendants: true, read: ElementRef });
  readonly #focusKeyManager = new FocusKeyManager(this.tabs, this.#injector)
    .skipPredicate((tab) => tab.disabled === true)
    .withHomeAndEnd()
    .withWrap();

  readonly #readyTabs = computed(() => {
    const ready = this.tabsService.tabs();
    return this.tabs().filter((tab) => ready.includes(tab));
  });

  /** @internal */
  readonly tabStopKey = computed(() => {
    const key = this.tabsService.activeItemKey();
    if (this.tabsService.tabs().some((tab) => tab.tabsList === this && tab.itemKey() === key)) {
      return key;
    }
    return this.#readyTabs()
      .find((tab) => !tab.disabled)
      ?.itemKey();
  });

  readonly #defaultItemEffect = effect(() => {
    const tabs = this.tabs();
    if (!tabs.length || this.#readyTabs().length < tabs.length || this.tabsService.activeItemKey() != null) {
      return;
    }
    const otherListSelects = () =>
      this.tabsService
        .tabs()
        .some((item) => item.tabsList && item.tabsList !== this && item.tabsList.tabStopKey() != null);
    const tab = tabs.find((item) => !item.disabled) ?? (otherListSelects() ? undefined : tabs[0]);
    if (tab) {
      this.tabsService.activeItemKey.set(tab.itemKey());
    }
  });

  onKeyDown($event: any) {
    if (['ArrowLeft', 'ArrowRight', 'End', 'Home'].includes($event.key)) {
      if ($event.defaultPrevented) {
        return;
      }
      const index = this.tabElements().findIndex((tab) => tab.nativeElement.contains($event.target));
      if (index < 0) {
        return;
      }
      this.#focusKeyManager.withHorizontalOrientation(
        this.#rtlService.isRTL(this.#elementRef.nativeElement) ? 'rtl' : 'ltr'
      );
      this.#focusKeyManager.updateActiveItem(index);
      this.#focusKeyManager.onKeydown($event);
      const tab = this.#focusKeyManager.activeItem;
      if ($event.defaultPrevented && tab && !tab.disabled) {
        this.tabsService.activeItemKey.set(tab.itemKey());
      }
      return;
    }
    if (['Tab'].includes($event.key)) {
      this.#focusKeyManager.tabOut.next();
    }
    return;
  }
}
