import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholder.directive';
import { PlaceholderAnimationDirective } from './placeholder-animation.directive';

@NgModule({
  declarations: [
    PlaceholderDirective,
    PlaceholderAnimationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaceholderDirective,
    PlaceholderAnimationDirective
  ]
})
export class PlaceholderModule {
}
