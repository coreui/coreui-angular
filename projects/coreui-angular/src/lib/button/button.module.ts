import { NgModule } from '@angular/core';

import { ButtonDirective } from './button.directive';
import { ButtonCloseDirective } from './button-close.directive';

@NgModule({
  imports: [
    ButtonDirective,
    ButtonCloseDirective
  ],
  exports: [
    ButtonDirective,
    ButtonCloseDirective
  ]
})
export class ButtonModule {}
