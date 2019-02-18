import {Component, Input, Inject, OnInit, OnDestroy, Renderer2, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { sidebarCssClasses } from '../shared';

@Component({
  selector: 'app-sidebar',
  template: `<ng-content></ng-content>`
})
export class AppSidebarComponent implements OnInit, OnDestroy {
  @Input() compact: boolean;
  @Input() display: any;
  @Input() fixed: boolean;
  @Input() minimized: boolean;
  @Input() offCanvas: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar');
  }

  ngOnInit(): void {
    this.displayBreakpoint(this.display);
    this.isCompact(this.compact);
    this.isFixed(this.fixed);
    this.isMinimized(this.minimized);
    this.isOffCanvas(this.offCanvas);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'sidebar-fixed' );
  }

  isCompact(compact: boolean = this.compact): void {
    if (compact) {
      this.renderer.addClass(this.document.body, 'sidebar-compact' );
    }
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, 'sidebar-fixed');
    }
  }

  isMinimized(minimized: boolean = this.minimized): void {
    if (minimized) {
      this.renderer.addClass(this.document.body, 'sidebar-minimized');
    }
  }

  isOffCanvas(offCanvas: boolean = this.offCanvas): void {
    if (offCanvas) {
      this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
    }
  }

  displayBreakpoint(display: any = this.display): void {
    if (display !== false) {
      const cssClass = display ? `sidebar-${display}-show` : sidebarCssClasses[0];
      this.renderer.addClass(this.document.body, cssClass);
    }
  }
}
