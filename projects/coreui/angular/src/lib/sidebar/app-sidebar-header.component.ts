import { Component, ElementRef, OnInit  } from '@angular/core';

import { Replace } from '../shared';

@Component({
  selector: 'app-sidebar-header',
  template: `
    <div class="sidebar-header">
      <ng-content></ng-content>
    </div>
  `
})
export class AppSidebarHeaderComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    Replace(this.el);
  }
}
