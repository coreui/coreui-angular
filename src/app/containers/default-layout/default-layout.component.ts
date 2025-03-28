import {Component} from '@angular/core';

import { navItems } from '../../_nav';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
    standalone: false
})
export class DefaultLayoutComponent {
  minimized = false;
  public navItems = [...navItems];

  toggleMinimize(e: boolean) {
    this.minimized = e;
  }
}
