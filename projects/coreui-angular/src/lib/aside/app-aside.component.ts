import { Component, Input, OnInit, OnDestroy, Renderer2, HostBinding, DOCUMENT, inject } from '@angular/core';


import { asideMenuCssClasses } from '../shared';

@Component({
  selector: 'app-aside, cui-aside',
  template: `<ng-content />`,
  standalone: true
})
export class AppAsideComponent implements OnInit, OnDestroy {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);

  @Input() display?: boolean | string;
  @Input() fixed?: boolean;
  @Input() offCanvas?: boolean;

  private readonly fixedClass = 'aside-menu-fixed';

  @HostBinding('class.aside-menu') asideMenuClass = true;

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

  displayBreakpoint(display = this.display): void {
    if (display !== false) {
      const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
      this.renderer.addClass(this.document.body, cssClass);
    }
  }
}
