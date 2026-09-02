import { Component, computed, effect, ElementRef, inject, input, numberAttribute, output, signal } from '@angular/core';
import getTransitionDurationFromElement from '../../utilities/getTransitionDurationFromElement';
import { TabsService } from '../tabs.service';

export type VisibleChangeEvent = { itemKey: string | number; visible: boolean };

@Component({
  exportAs: 'cTabPanel',
  selector: 'c-tab-panel',
  template: '<ng-content />',
  host: {
    '[class]': 'hostClasses()',
    '[attr.tabindex]': 'visible() ? tabindex() : -1',
    '[aria-labelledby]': 'attrAriaLabelledBy()',
    '[id]': 'propId()',
    '[attr.role]': 'role()',
    '(transitionend)': 'onTransitionEnd($event)'
  }
})
export class TabPanelComponent {
  readonly #tabsService = inject(TabsService);
  readonly #elementRef = inject(ElementRef);

  /**
   * aria-labelledby attribute
   * @returns string
   * @default undefined
   */
  readonly ariaLabelledBy = input<string | undefined>(undefined, {
    alias: 'aria-labelledby'
  });

  /**
   * Element id attribute
   * @returns string
   * @default undefined
   */
  readonly id = input<string>();

  /**
   * Item key.
   * @returns string | number
   * @required
   */
  readonly itemKey = input.required<string | number>();

  /**
   * Element role.
   * @returns string
   * @default 'tabpanel'
   */
  readonly role = input('tabpanel');

  /**
   * tabindex attribute.
   * @returns number
   * @default 0
   */
  readonly tabindex = input(0, { transform: numberAttribute });

  /**
   * Enable fade in transition.
   * @returns boolean
   * @default true
   */
  readonly transition = input(true);

  /**
   * visible change output
   * @returns VisibleChangeEvent
   */
  readonly visibleChange = output<VisibleChangeEvent>();

  protected readonly show = signal(false);

  readonly visible = computed(() => {
    const visible = this.#tabsService.activeItemKey() === this.itemKey() && !this.#tabsService.activeItem()?.disabled;
    this.visibleChange?.emit({ itemKey: this.itemKey(), visible });
    return visible;
  });

  #transitionDuration = 0;

  readonly #visibleEffect = effect(() => {
    const isVisible = this.visible();
    const hasTransition = this.transition();

    if (!hasTransition) {
      this.show.set(isVisible);
    } else {
      requestAnimationFrame(() => {
        if (this.#transitionDuration === 0) {
          this.#transitionDuration = getTransitionDurationFromElement(this.#elementRef.nativeElement);
        }
        setTimeout(() => this.show.set(isVisible), this.#transitionDuration || 0);
      });
    }
  });

  protected readonly propId = computed(() => this.id() ?? `${this.#tabsService.id()}-panel-${this.itemKey()}`);

  protected readonly attrAriaLabelledBy = computed(
    () => this.ariaLabelledBy() ?? `${this.#tabsService.id()}-tab-${this.itemKey()}`
  );

  protected readonly hostClasses = computed(
    () =>
      ({
        'tab-pane': true,
        active: this.visible(),
        fade: this.transition(),
        show: this.show(),
        invisible: this.#tabsService.activeItem()?.disabled
      }) as Record<string, boolean>
  );

  protected onTransitionEnd($event: TransitionEvent): void {
    if ($event.propertyName === 'opacity' && $event.target === this.#elementRef.nativeElement) {
      this.show.set(this.visible());
    }
  }
}
