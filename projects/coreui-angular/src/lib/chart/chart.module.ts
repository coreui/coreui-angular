import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoZoneBaseChartDirective } from './no-zone-basechart.directive';

@NgModule({
  declarations: [
    NoZoneBaseChartDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoZoneBaseChartDirective
  ]
})
export class ChartModule { }

