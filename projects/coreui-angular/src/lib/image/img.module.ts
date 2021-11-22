import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImgDirective
  ],
  declarations: [
    ImgDirective
  ],
})
export class ImgModule { }
