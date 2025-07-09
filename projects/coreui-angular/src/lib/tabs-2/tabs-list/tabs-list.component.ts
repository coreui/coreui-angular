import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  afterEveryRender,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  signal,
  untracked
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';
import { TabDirective } from '../tab/tab.directive';
import { TabsService } from '../tabs.service';
import { RtlService } from '../../services';

@Component({
  exportAs: 'cTabsList',
  selector: 'c-tabs-list',
  template: '<ng-content />',
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()',
    '(keydown)': 'onKeyDown($event)'
  }
})
export class TabsListComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #elementRef = inject(ElementRef);
  readonly tabsService = inject(TabsService);
  readonly #rtlService = inject(RtlService);
  readonly #isRtl = signal(false);

  constructor() {
    afterEveryRender({
      read: () => {
        this.#isRtl.set(this.#rtlService.isRTL(this.#elementRef.nativeElement));
      }
    });
  }

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

  readonly hostClasses = computed(
    () =>
      ({
        nav: true,
        [`nav-${this.layout()}`]: this.layout(),
        [`nav-${this.variant()}`]: this.variant()
      }) as Record<string, boolean>
  );

  readonly tabs = contentChildren(TabDirective);
  #focusKeyManager!: FocusKeyManager<TabDirective>;

  readonly #tabsEffect = effect(() => {
    const tabs = this.tabs();
    if (tabs.length === 0) {
      return;
    }

    const isRtl = this.#isRtl();

    this.#focusKeyManager = new FocusKeyManager(tabs)
      .skipPredicate((tab) => tab.disabled === true)
      .withHorizontalOrientation(isRtl ? 'rtl' : 'ltr')
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

    untracked(() => {
      setTimeout(() => {
        const activeItem = tabs.find((tab) => tab.isActive()) ?? tabs.find((tab) => !tab.disabled);
        const activeItemIndex = tabs.findIndex((tab) => tab === activeItem);
        this.#focusKeyManager?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
        this.tabsService.activeItemKey.set(this.#focusKeyManager.activeItem?.itemKey());
        this.tabsService.activeItem.set(this.#focusKeyManager.activeItem);
      });
    });
  });

  readonly #tabsServiceEffect = effect(() => {
    const activeItemIndex = this.tabs().findIndex(
      (tab) => untracked(tab.isActive) && untracked(tab.itemKey) === this.tabsService.activeItemKey()
    );
    this.#focusKeyManager?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
  });

  onKeyDown($event: any) {
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
