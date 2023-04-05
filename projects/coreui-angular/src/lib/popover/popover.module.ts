import { NgModule } from '@angular/core';
import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  exports: [
    PopoverDirective,
    PopoverComponent
  ],
  imports: [
    PopoverDirective,
    PopoverComponent
  ]
})
export class PopoverModule {}
