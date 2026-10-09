import { Signal, TemplateRef } from '@angular/core';
import type { ChipComponent } from './chip.component';

export abstract class ChipSetRef {
  abstract readonly ariaRemoveLabel: Signal<string | undefined>;
  abstract readonly disabled: Signal<boolean>;
  abstract readonly filter: Signal<boolean>;
  abstract readonly isListbox: Signal<boolean>;
  abstract readonly readonly: Signal<boolean>;
  abstract readonly removable: Signal<boolean>;
  abstract readonly removeIcon: Signal<TemplateRef<unknown> | undefined>;
  abstract readonly selectable: Signal<boolean>;
  abstract readonly selectedIcon: Signal<TemplateRef<unknown> | undefined>;

  abstract isSelected(identity: string): boolean;

  abstract register(chip: ChipComponent): void;

  abstract requestRemove(chip: ChipComponent): void;

  abstract tabIndexFor(chip: ChipComponent): number | null;

  abstract toggle(chip: ChipComponent, selected: boolean): void;

  abstract unregister(chip: ChipComponent): void;
}
