import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  output,
  signal,
  TemplateRef,
  untracked
} from '@angular/core';

import { CollapseDirective } from '../collapse';
import { BooleanInput } from '../coreui.types';
import { NavGroupItemsComponent } from './nav-group-items.component';
import { NavGroupService } from './nav-group.service';

let nextId = 0;

@Component({
  selector: 'c-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss'],
  imports: [CollapseDirective, NavGroupItemsComponent, NgTemplateOutlet],
  providers: [NavGroupService],
  host: { '[class]': 'hostClasses()' }
})
export class NavGroupComponent {
  static ngAcceptInputType_compact: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  readonly #navGroupService = inject(NavGroupService);
  readonly #parentNavGroupService = inject(NavGroupService, { optional: true, skipSelf: true });

  readonly #id = `nav-group-${nextId++}`;

  constructor() {
    this.#navGroupService.openBranch = () => {
      this.openBranch();
    };
  }

  /**
   * Make nav group items more compact by cutting all `padding` in half.
   * @returns boolean
   * @default false
   */
  readonly compact = input(false, { transform: booleanAttribute });

  /**
   * Set group toggler label.
   * @returns string
   */
  readonly toggler = input<string>();

  /**
   * Template for the group toggler content, receives the visible state as `$implicit`.
   * @returns TemplateRef<{ $implicit: boolean; visible: boolean }>
   */
  readonly togglerTemplate = input<TemplateRef<{ $implicit: boolean; visible: boolean }>>();

  /**
   * Show nav group items. Sets the initial state, and follows every later change.
   * @returns boolean | undefined
   */
  readonly visible = input<boolean | undefined, unknown>(undefined, { transform: booleanAttribute });

  /**
   * Event emitted on visibility change.
   * @returns boolean
   */
  readonly visibleChange = output<boolean>();

  readonly #uncontrolledVisible = signal(false);

  readonly visibleState = computed(() => {
    const parent = this.#parentNavGroupService;
    return parent ? parent.activeId() === this.#id : this.#uncontrolledVisible();
  });

  // the group drops `show` in the same pass, hiding the items before cCollapse can measure them
  readonly display = linkedSignal<boolean, string | null>({
    source: this.visibleState,
    computation: (visible, previous) => (previous?.source && !visible ? 'block' : null)
  });

  readonly hostClasses = computed(() => {
    return {
      'nav-group': true,
      show: this.visibleState()
    } as Record<string, boolean>;
  });

  readonly #visibleEffect = effect(() => {
    const visible = this.visible();
    if (visible === undefined) {
      return;
    }
    untracked(() => {
      this.#setVisible(visible);
    });
  });

  toggleGroup(event: Event): void {
    event.preventDefault();
    const next = !this.visibleState();
    this.#setVisible(next);
    this.visibleChange.emit(next);
  }

  openBranch(): void {
    const parent = this.#parentNavGroupService;
    if (!parent) {
      this.#uncontrolledVisible.set(true);
      return;
    }
    parent.setActiveId(this.#id);
    parent.openBranch();
  }

  onCollapseChange(state: string): void {
    this.display.set(state === 'collapsed' || state === 'open' ? null : 'block');
  }

  #setVisible(visible: boolean): void {
    const parent = this.#parentNavGroupService;
    if (!parent) {
      this.#uncontrolledVisible.set(visible);
      return;
    }
    if (visible) {
      parent.setActiveId(this.#id);
      return;
    }
    if (parent.activeId() === this.#id) {
      parent.setActiveId(undefined);
    }
  }
}
