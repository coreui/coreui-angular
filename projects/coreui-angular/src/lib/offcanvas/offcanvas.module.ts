import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';

import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { OffcanvasBodyComponent } from './offcanvas-body/offcanvas-body.component';
import { OffcanvasHeaderComponent } from './offcanvas-header/offcanvas-header.component';
import { OffcanvasTitleDirective } from './offcanvas-title/offcanvas-title.directive';
import { OffcanvasToggleDirective } from './offcanvas-toggle/offcanvas-toggle.directive';
import { OffcanvasService } from './offcanvas.service';
import { BackdropService } from '../backdrop/backdrop.service';

@NgModule({
  declarations: [
    OffcanvasComponent,
    OffcanvasBodyComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    OffcanvasToggleDirective
  ],
  exports: [
    OffcanvasComponent,
    OffcanvasBodyComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    OffcanvasToggleDirective
  ],
  imports: [
    CommonModule,
    A11yModule
  ],
  providers: [
    OffcanvasService,
    BackdropService
  ],
})
export class OffcanvasModule { }
