import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  InputSignal,
  untracked
} from '@angular/core';
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
  readonly #injector = inject(Injector);
  readonly tabsService = inject(TabsService);
  readonly #rtlService = inject(RtlService);

  constructor() {
    this.#focusKeyManager.change.subscribe(() => {
      this.tabsService.activeItemKey.set(this.#focusKeyManager.activeItem?.itemKey());
      this.tabsService.activeItem.set(this.#focusKeyManager.activeItem);
    });
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

  readonly tabs = contentChildren(TabDirective);
  protected readonly tabElements = contentChildren(TabDirective, { read: ElementRef });
  readonly #focusKeyManager = new FocusKeyManager(this.tabs, this.#injector)
    .skipPredicate((tab) => tab.disabled === true)
    .withHomeAndEnd()
    .withWrap();

  readonly #tabsEffect = effect(() => {
    const tabs = this.tabs();
    if (tabs.length === 0) {
      return;
    }

    untracked(() => {
      setTimeout(() => {
        const activeItem = tabs.find((tab) => tab.isActive()) ?? tabs.find((tab) => !tab.disabled) ?? tabs[0];
        this.#focusKeyManager.updateActiveItem(activeItem);
        this.tabsService.activeItemKey.set(activeItem.itemKey());
        this.tabsService.activeItem.set(activeItem);
      });
    });
  });

  onKeyDown($event: any) {
    if (['ArrowLeft', 'ArrowRight', 'End', 'Home'].includes($event.key)) {
      const index = this.tabElements().findIndex((tab) => tab.nativeElement.contains($event.target));
      if (index < 0) {
        return;
      }
      this.#focusKeyManager.withHorizontalOrientation(
        this.#rtlService.isRTL(this.#elementRef.nativeElement) ? 'rtl' : 'ltr'
      );
      this.#focusKeyManager.updateActiveItem(index);
      this.#focusKeyManager.onKeydown($event);
      return;
    }
    if (['Tab'].includes($event.key)) {
      this.#focusKeyManager.tabOut.next();
    }
    return;
  }
}
