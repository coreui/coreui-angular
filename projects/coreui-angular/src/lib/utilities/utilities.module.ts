import { NgModule } from '@angular/core';
import { BgColorDirective } from './bg-color.directive';
import { BorderDirective } from './border.directive';
import { RoundedDirective } from './rounded.directive';
import { TextColorDirective } from './text-color.directive';
import { AlignDirective } from './align.directive';

@NgModule({
  imports: [
    BgColorDirective,
    BorderDirective,
    RoundedDirective,
    TextColorDirective,
    AlignDirective
  ],
  exports: [
    BgColorDirective,
    BorderDirective,
    RoundedDirective,
    TextColorDirective,
    AlignDirective
  ]
})
export class UtilitiesModule {}
