import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding, DOCUMENT } from '@angular/core';


import { asideMenuCssClasses } from '../shared';

@Component({
  selector: 'app-aside, cui-aside',
  template: `<ng-content />`,
  standalone: true
})
export class AppAsideComponent implements OnInit, OnDestroy {
  @Input() display: any;
  @Input() fixed?: boolean;
  @Input() offCanvas?: boolean;

  private readonly fixedClass = 'aside-menu-fixed';

  @HostBinding('class.aside-menu') asideMenuClass = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
    this.displayBreakpoint(this.display);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }

  isOffCanvas(offCanvas = this.offCanvas): void {
    if (offCanvas) {
      this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
    }
  }

  displayBreakpoint(display: any = this.display): void {
    if (display !== false) {
      const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
      this.renderer.addClass(this.document.body, cssClass);
    }
  }
}
