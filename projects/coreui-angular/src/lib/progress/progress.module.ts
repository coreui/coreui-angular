import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [ProgressComponent, ProgressBarComponent],
  exports: [
    ProgressComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgressModule { }
