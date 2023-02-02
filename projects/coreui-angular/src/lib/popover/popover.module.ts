import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [],
  exports: [
    PopoverDirective,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    PopoverDirective,
    PopoverComponent
  ]
})
export class PopoverModule {}
