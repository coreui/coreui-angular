import { NgModule } from '@angular/core';

import {
  AlignDirective,
  BgColorDirective,
  BorderDirective,
  RoundedDirective,
  ShadowOnScrollDirective,
  TextColorDirective,
  TextBgColorDirective,
} from './public_api';

const UTILITY_DIRECTIVES = [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective];

@NgModule({
  imports: [...UTILITY_DIRECTIVES], exports: [...UTILITY_DIRECTIVES]
})
export class UtilitiesModule {}
