import { Component, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { INavData } from './app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './app-sidebar-nav.component.html'
})
export class AppSidebarNavComponent implements OnChanges {
  @Input() navItems: INavData[] = [];

  @HostBinding('attr.role') role = 'nav';

  public navItemsArray: INavData[] = [];

  constructor(
    public router: Router,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
  }
}
