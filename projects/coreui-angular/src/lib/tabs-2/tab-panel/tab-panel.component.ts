import { animate, animateChild, AnimationEvent, query, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  InputSignalWithTransform,
  numberAttribute,
  output,
  OutputEmitterRef,
  signal
} from '@angular/core';
import { TabsService } from '../tabs.service';

type AnimateType = 'hide' | 'show';
type VisibleChangeEvent = { itemKey: string | number; visible: boolean };

@Component({
  exportAs: 'cTabPanel',
  selector: 'c-tab-panel',
  template: '<ng-content />',
  host: {
    '[class]': 'hostClasses()',
    '[tabindex]': 'visible() ? tabindex() : -1',
    '[attr.aria-labelledby]': 'attrAriaLabelledBy()',
    '[id]': 'propId()',
    '[attr.role]': 'role()',
    '[@.disabled]': '!transition()',
    '[@fadeInOut]': 'visible() ? "show" : "hide"',
    '(@fadeInOut.done)': 'onAnimationDone($event)'
  },
  animations: [
    trigger('fadeInOut', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      state('void', style({ opacity: 1 })),
      transition('* => *', [query('@*', [animateChild()], { optional: true }), animate('150ms linear')])
    ])
  ]
})
export class TabPanelComponent {
  readonly tabsService = inject(TabsService);

  /**
   * aria-labelledby attribute
   * @type string
   * @default undefined
   */
  readonly ariaLabelledBy: InputSignal<string | undefined> = input<string | undefined>(undefined, {
    alias: 'aria-labelledby'
  });

  /**
   * Element id attribute
   * @type string
   * @default undefined
   */
  readonly id: InputSignal<string | undefined> = input<string>();

  /**
   * Item key.
   * @type string | number
   * @required
   */
  readonly itemKey: InputSignal<string | number> = input.required();

  /**
   * Element role.
   * @type string
   * @default 'tabpanel'
   */
  readonly role: InputSignal<string> = input('tabpanel');

  /**
   * tabindex attribute.
   * @type number
   * @default 0
   */
  readonly tabindex: InputSignalWithTransform<number, unknown> = input(0, { transform: numberAttribute });

  /**
   * Enable fade in transition.
   * @type boolean
   * @default true
   */
  readonly transition: InputSignal<boolean> = input(true);

  /**
   * visible change output
   * @type OutputEmitterRef<VisibleChangeEvent>
   */
  readonly visibleChange: OutputEmitterRef<VisibleChangeEvent> = output<VisibleChangeEvent>();

  readonly show = signal(false);

  readonly visible = computed(() => {
    const visible = this.tabsService.activeItemKey() === this.itemKey() && !this.tabsService.activeItem()?.disabled;
    this.visibleChange?.emit({ itemKey: this.itemKey(), visible });
    return visible;
  });

  readonly propId = computed(() => this.id() ?? `${this.tabsService.id()}-panel-${this.itemKey()}`);

  readonly attrAriaLabelledBy = computed(
    () => this.ariaLabelledBy() ?? `${this.tabsService.id()}-tab-${this.itemKey()}`
  );

  readonly hostClasses = computed(
    () =>
      ({
        'tab-pane': true,
        active: this.show(),
        fade: this.transition(),
        show: this.show(),
        invisible: this.tabsService.activeItem()?.disabled
      }) as Record<string, boolean>
  );

  onAnimationDone($event: AnimationEvent): void {
    this.show.set(this.visible());
  }
}
