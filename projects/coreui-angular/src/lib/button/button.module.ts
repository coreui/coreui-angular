import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDirective } from './button.directive';
import { ButtonCloseDirective } from './button-close.directive';

@NgModule({
  declarations: [
    ButtonDirective,
    ButtonCloseDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonDirective,
    ButtonCloseDirective,
  ]
})
export class ButtonModule { }
