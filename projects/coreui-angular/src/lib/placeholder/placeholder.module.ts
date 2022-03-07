import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaceholderDirective
  ]
})
export class PlaceholderModule {
}
