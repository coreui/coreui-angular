import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDirective } from './progress-bar.directive';
import { ProgressStackedComponent } from './progress-stacked.component';

@NgModule({
  exports: [
    ProgressComponent,
    ProgressBarComponent,
    ProgressBarDirective,
    ProgressStackedComponent
  ],
  imports: [
    ProgressComponent,
    ProgressBarComponent,
    ProgressBarDirective,
    ProgressStackedComponent
  ]
})
export class ProgressModule {}
