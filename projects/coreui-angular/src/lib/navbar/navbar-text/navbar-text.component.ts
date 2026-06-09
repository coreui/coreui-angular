import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-navbar-text',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'navbar-text' }
})
export class NavbarTextComponent {}
