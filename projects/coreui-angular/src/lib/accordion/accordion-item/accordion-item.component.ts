import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
  TemplateRef
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { CollapseDirective } from '../../collapse';
import { TemplateIdDirective } from '../../shared';
import { AccordionButtonDirective } from '../accordion-button/accordion-button.directive';
import { AccordionService } from '../accordion.service';

let nextId = 0;

@Component({
  selector: 'c-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  exportAs: 'cAccordionItem',
  imports: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
  host: { class: 'accordion-item' }
})
export class AccordionItemComponent implements OnInit, OnDestroy {
  readonly #accordionService = inject(AccordionService);

  /**
   * Toggle an accordion item programmatically
   * @type boolean
   * @default false
   */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly itemVisible = signal(false);

  readonly #visibleInputChange = effect(() => {
    setTimeout(() => {
      this.itemVisible.set(this.visibleInput());
    });
  });

  set visible(value: boolean) {
    this.itemVisible.set(value);
  }

  get visible() {
    return <boolean>this.itemVisible();
  }

  contentId = `accordion-item-${nextId++}`;

  get itemContext() {
    return { $implicit: <boolean>this.itemVisible() };
  }

  readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  readonly templates = computed(() => {
    return this.contentTemplates().reduce(
      (acc, child) => {
        acc[child.id] = child.templateRef;
        return acc;
      },
      {} as Record<string, TemplateRef<any>>
    );
  });

  ngOnInit(): void {
    this.#accordionService.addItem(this);
  }

  ngOnDestroy(): void {
    this.#accordionService.removeItem(this);
  }

  toggleItem(): void {
    this.#accordionService.toggleItem(this);
  }
}
