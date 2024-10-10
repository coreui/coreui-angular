import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  inject,
  Input,
  OnDestroy,
  OnInit,
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
  standalone: true,
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
  @Input({ transform: booleanAttribute }) visible: boolean = false;

  @Input()
  set open(value: boolean) {
    console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
    this.visible = value || this.visible;
  }

  get open() {
    return <boolean>this.visible;
  }

  contentId = `accordion-item-${nextId++}`;

  get itemContext() {
    return { $implicit: <boolean>this.visible };
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
