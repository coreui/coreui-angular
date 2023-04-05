import { NgModule } from '@angular/core';

import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { OffcanvasBodyComponent } from './offcanvas-body/offcanvas-body.component';
import { OffcanvasHeaderComponent } from './offcanvas-header/offcanvas-header.component';
import { OffcanvasTitleDirective } from './offcanvas-title/offcanvas-title.directive';
import { OffcanvasToggleDirective } from './offcanvas-toggle/offcanvas-toggle.directive';
import { OffcanvasService } from './offcanvas.service';
import { BackdropService } from '../backdrop/backdrop.service';

@NgModule({
  exports: [
    OffcanvasBodyComponent,
    OffcanvasComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    OffcanvasToggleDirective
  ],
  imports: [
    OffcanvasBodyComponent,
    OffcanvasComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    OffcanvasToggleDirective
  ],
  providers: [
    OffcanvasService,
    BackdropService
  ]
})
export class OffcanvasModule {}
