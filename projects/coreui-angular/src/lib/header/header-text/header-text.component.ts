import { Component } from '@angular/core';

@Component({
  selector: 'c-header-text, [cHeaderText]',
  template: '<ng-content />',
  host: {
    class: 'header-text'
  }
})
export class HeaderTextComponent {}
