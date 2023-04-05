import { NgModule } from '@angular/core';
import { ImgDirective } from './img.directive';

@NgModule({
  imports: [ImgDirective],
  exports: [ImgDirective]
})
export class ImgModule {}
