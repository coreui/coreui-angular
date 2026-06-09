import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-header-text, [cHeaderText]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'header-text'
  }
})
export class HeaderTextComponent {}
