import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  exports: [
    ProgressComponent,
    ProgressBarComponent
  ],
  imports: [
    ProgressComponent,
    ProgressBarComponent
  ]
})
export class ProgressModule {}
