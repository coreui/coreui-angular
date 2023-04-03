import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    BrandButtonsComponent
  ]
})
export class ButtonsModule { }
