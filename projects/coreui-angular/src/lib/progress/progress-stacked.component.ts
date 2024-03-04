import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { IProgressBarStacked } from './progress.type';

@Component({
  selector: 'c-progress-stacked',
  standalone: true,
  template: '<ng-content />',
  styles: `:host { display: flex }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressStackedComponent implements IProgressBarStacked {

  @Input()
  @HostBinding('class.progress-stacked') stacked = true;

}
