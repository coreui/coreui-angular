import { NgModule } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';
import { PlaceholderAnimationDirective } from './placeholder-animation.directive';

@NgModule({
  imports: [
    PlaceholderDirective,
    PlaceholderAnimationDirective
  ],
  exports: [
    PlaceholderDirective,
    PlaceholderAnimationDirective
  ]
})
export class PlaceholderModule {
}
