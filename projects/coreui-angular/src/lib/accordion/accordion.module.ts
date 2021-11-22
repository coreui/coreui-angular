import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionButtonDirective } from './accordion-button/accordion-button.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionService } from './accordion.service';
import { CollapseModule } from '../collapse';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionButtonDirective,
    AccordionItemComponent,
  ],
  imports: [
    CommonModule,
    CollapseModule,
    SharedModule
  ],
  exports: [
    AccordionComponent,
    AccordionButtonDirective,
    AccordionItemComponent,
  ],
  providers: [
    AccordionService
  ]
})
export class AccordionModule {
}
