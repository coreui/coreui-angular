import {
  AfterContentInit,
  booleanAttribute,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList
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
export class AccordionItemComponent implements OnInit, OnDestroy, AfterContentInit {
  constructor(private accordionService: AccordionService) {}

  /**
   * Toggle an accordion item programmatically
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) visible: string | boolean = false;

  @Input()
  set open(value: boolean) {
    console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
    this.visible = value || this.visible;
  }

  get open() {
    return <boolean>this.visible;
  }

  contentId = `accordion-item-${nextId++}`;
  itemContext = { $implicit: <boolean>this.visible };
  templates: any = {};
  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  ngOnInit(): void {
    this.accordionService.addItem(this);
  }

  ngOnDestroy(): void {
    this.accordionService.removeItem(this);
  }

  toggleItem(): void {
    this.accordionService.toggleItem(this);
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }
}
