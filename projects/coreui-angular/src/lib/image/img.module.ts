import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';

@NgModule({
  imports: [CommonModule, ImgDirective],
  exports: [ImgDirective],
  declarations: []
})
export class ImgModule {}
