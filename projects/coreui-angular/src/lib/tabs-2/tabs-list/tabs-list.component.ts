import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  HostListener,
  inject,
  input,
  InputSignal,
  untracked
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';
import { TabDirective } from '../tab/tab.directive';
import { TabsService } from '../tabs.service';

@Component({
  exportAs: 'cTabsList',
  selector: 'c-tabs-list',
  standalone: true,
  imports: [TabDirective],
  template: '<ng-content />',
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()'
  }
})
export class TabsListComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly tabsService = inject(TabsService);

  /**
   * Specify a layout type for component.
   * @type 'fill' | 'justified' | undefined
   * @default undefined
   */
  readonly layout: InputSignal<'fill' | 'justified' | undefined> = input();

  /**
   * Set the variant to tabs, pills or underline.
   * @type 'pills' | 'tabs' | 'underline' | 'underline-border' | undefined
   * @default undefined
   */
  readonly variant: InputSignal<'pills' | 'tabs' | 'underline' | 'underline-border' | undefined> = input();

  /**
   * Set the role to tab list.
   * @default 'tablist'
   */
  readonly role = input('tablist');

  readonly hostClasses = computed(() => ({
    nav: true,
    [`nav-${this.layout()}`]: this.layout(),
    [`nav-${this.variant()}`]: this.variant()
  }));

  readonly tabs = contentChildren(TabDirective);
  #focusKeyManager!: FocusKeyManager<TabDirective>;

  readonly tabsEffect = effect(
    () => {
      if (this.tabs().length === 0) {
        return;
      }
      this.#focusKeyManager = new FocusKeyManager(this.tabs())
        .skipPredicate((tab) => tab.disabled === true)
        .withHorizontalOrientation('ltr')
        .withHomeAndEnd()
        .withWrap();

      this.#focusKeyManager.change
        .pipe(
          tap((value) => {
            this.tabsService.activeItemKey.set(this.#focusKeyManager.activeItem?.itemKey());
            this.tabsService.activeItem.set(this.#focusKeyManager.activeItem);
          }),
          takeUntilDestroyed(this.#destroyRef)
        )
        .subscribe();

      const activeItem = this.tabs().find((tab) => untracked(tab.isActive)) ?? this.tabs().find((tab) => !tab.disabled);
      const activeItemIndex = this.tabs().findIndex((tab) => tab === activeItem);
      this.#focusKeyManager?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
      this.tabsService.activeItemKey.set(this.#focusKeyManager.activeItem?.itemKey());
      this.tabsService.activeItem.set(this.#focusKeyManager.activeItem);
    },
    { allowSignalWrites: true }
  );

  tabsServiceEffect = effect(() => {
    const activeItemIndex = this.tabs().findIndex(
      (tab) => untracked(tab.isActive) && untracked(tab.itemKey) === this.tabsService.activeItemKey()
    );
    this.#focusKeyManager?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
  });

  @HostListener('keydown', ['$event'])
  onKeydown($event: any) {
    if (['ArrowLeft', 'ArrowRight'].includes($event.key)) {
      this.#focusKeyManager.onKeydown($event);
      return;
    }
    if (['Tab'].includes($event.key)) {
      this.#focusKeyManager?.tabOut.next();
    }
    return;
  }
}
