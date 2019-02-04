import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../shared/layout';

import { AppHeaderComponent } from './app-header.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    AppHeaderComponent,
    LayoutModule
  ],
  declarations: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule {}
