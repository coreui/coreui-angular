import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalloutComponent } from './callout.component';

@NgModule({
  declarations: [CalloutComponent],
  exports: [CalloutComponent],
  imports: [
    CommonModule
  ]
})
export class CalloutModule { }
