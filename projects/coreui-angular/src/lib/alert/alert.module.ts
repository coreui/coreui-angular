import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { AlertHeadingDirective } from './alert-heading.directive';
import { AlertLinkDirective } from './alert-link.directive';

@NgModule({
  imports: [
    AlertComponent,
    AlertHeadingDirective,
    AlertLinkDirective
  ],
  exports: [
    AlertComponent,
    AlertHeadingDirective,
    AlertLinkDirective
  ]
})
export class AlertModule {}
