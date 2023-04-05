import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionButtonDirective } from './accordion-button/accordion-button.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionService } from './accordion.service';

@NgModule({
  imports: [
    AccordionButtonDirective,
    AccordionComponent,
    AccordionItemComponent
  ],
  exports: [
    AccordionComponent,
    AccordionButtonDirective,
    AccordionItemComponent
  ],
  providers: [
    AccordionService
  ]
})
export class AccordionModule {
}
