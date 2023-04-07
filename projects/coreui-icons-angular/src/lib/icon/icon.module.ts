import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';

@NgModule({
  imports: [
    IconComponent,
    IconDirective
  ],
  exports: [
    IconComponent,
    IconDirective
  ]
})
export class IconModule {}
