import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class TooltipModule { }
