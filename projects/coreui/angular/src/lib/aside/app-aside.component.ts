import {Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { asideMenuCssClasses, Replace } from '../shared';

@Component({
  selector: 'app-aside',
  template: `
    <aside class="aside-menu">
      <ng-content></ng-content>
    </aside>
  `
})
export class AppAsideComponent implements OnInit, OnDestroy {
  @Input() display: any;
  @Input() fixed: boolean;
  @Input() offCanvas: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    Replace(this.el);
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
    this.displayBreakpoint(this.display);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'aside-menu-fixed');
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, 'aside-menu-fixed');
    }
  }

  isOffCanvas(offCanvas: boolean = this.offCanvas): void {
    if (offCanvas) {
      this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
    }
  }

  displayBreakpoint(display: any = this.display): void {
    if (display !== false ) {
      const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
      this.renderer.addClass(this.document.body, cssClass);
    }
  }
}
