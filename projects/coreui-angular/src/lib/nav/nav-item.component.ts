import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-nav-item',
  template: '<ng-content />',
  styleUrls: ['./nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'nav-item' }
})
export class NavItemComponent {}
