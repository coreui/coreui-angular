import { Injectable } from '@angular/core';
import type { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Injectable()
export class AccordionService {
  items: AccordionItemComponent[] = [];
  alwaysOpen = false;

  addItem(item: AccordionItemComponent): void {
    this.items.push(item);
  }

  removeItem(item: AccordionItemComponent): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  toggleItem(item: AccordionItemComponent): void {
    item.itemVisible.update((value) => !value);
    this.closeOtherItems(item);
  }

  closeOtherItems(openItem: AccordionItemComponent): void {
    if (!this.alwaysOpen) {
      this.items.forEach((item: AccordionItemComponent) => {
        if (item !== openItem) {
          item.itemVisible.set(false);
        }
      });
    }
  }
}
