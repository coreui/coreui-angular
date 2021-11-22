import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { AlertHeadingDirective } from './alert-heading.directive';
import { AlertLinkDirective } from './alert-link.directive';
import { ButtonModule } from '../button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    AlertComponent,
    AlertHeadingDirective,
    AlertLinkDirective
  ],
  declarations: [
    AlertComponent,
    AlertHeadingDirective,
    AlertLinkDirective
  ]
})
export class AlertModule {}
