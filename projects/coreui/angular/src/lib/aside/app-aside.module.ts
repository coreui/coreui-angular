import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from './../shared/layout/layout.module';

import { AppAsideComponent } from './app-aside.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    AppAsideComponent,
    LayoutModule
  ],
  declarations: [
    AppAsideComponent
  ]
})
export class AppAsideModule {}
