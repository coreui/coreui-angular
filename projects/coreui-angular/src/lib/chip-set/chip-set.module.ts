import { NgModule } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { ChipSetComponent } from './chip-set.component';

@NgModule({
  imports: [ChipComponent, ChipSetComponent],
  exports: [ChipComponent, ChipSetComponent]
})
export class ChipSetModule {}
