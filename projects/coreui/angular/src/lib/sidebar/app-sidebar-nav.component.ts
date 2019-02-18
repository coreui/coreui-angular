import { Component, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './app-sidebar-nav.component.html'
})
export class AppSidebarNavComponent implements OnChanges {
  @Input() navItems: Array<any>;

  @HostBinding('attr.role') role = 'nav';

  public navItemsArray: Array<any>;

  constructor(
    public router: Router,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
  }
}
