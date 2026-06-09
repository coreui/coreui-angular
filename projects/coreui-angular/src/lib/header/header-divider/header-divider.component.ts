import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-header-divider, [cHeaderDivider]',
  template: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'header-divider'
  }
})
export class HeaderDividerComponent {}
