import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

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
  imports: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective]
})
export class AccordionItemComponent implements OnInit, OnDestroy, AfterContentInit {

  constructor(
    private accordionService: AccordionService
  ) { }

  static ngAcceptInputType_visible: BooleanInput;
  contentId = `accordion-item-${nextId++}`;
  itemContext = { $implicit: this.visible };
  templates: any = {};
  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  private _visible: boolean = false;

  get visible() {
    return this._visible;
  }

  /**
   * Toggle an accordion item programmatically
   * @type boolean
   * @default false
   */
  @Input()
  set visible(value: boolean) {
    this._visible = coerceBooleanProperty(value);
  }

  get open() {
    return this.visible;
  }

  @Input()
  set open(value: boolean) {
    console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
    this.visible = value || this.visible;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'accordion-item': true
    };
  }

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

