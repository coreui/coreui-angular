import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  OnInit, QueryList,
} from '@angular/core';

import { AccordionService } from '../accordion.service';
import { TemplateIdDirective } from '../../shared';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

let nextId = 0;

@Component({
  selector: 'c-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  exportAs: 'cAccordionItem',
})
export class AccordionItemComponent implements OnInit, OnDestroy, AfterContentInit {

  static ngAcceptInputType_visible: BooleanInput;

  /**
   * Toggle an accordion item programmatically
   * @type boolean
   * @default false
   */
  @Input()
  set visible(value: boolean){
    this._visible = coerceBooleanProperty(value);
  }
  get visible() {
    return this._visible;
  }
  private _visible: boolean = false;

  @Input()
  set open(value: boolean) {
    console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.')
    this.visible = value || this.visible;
  }
  get open() {
    return this.visible;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'accordion-item': true,
    };
  }
  contentId = `accordion-item-${nextId++}`;
  itemContext = { $implicit: this.visible };
  templates: any = {};

  @ContentChildren(TemplateIdDirective, {descendants: true}) contentTemplates!: QueryList<TemplateIdDirective>;

  constructor(
    private accordionService: AccordionService,
  ) { }

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

