import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { sidebarCssClasses } from './../shared';

@Component({
  selector: 'app-sidebar',
  template: `<ng-content></ng-content>`
})
export class AppSidebarComponent implements OnInit {
  @Input() compact: boolean;
  @Input() display: any;
  @Input() fixed: boolean;
  @Input() float: boolean;
  @Input() minimized: boolean;
  @Input() offCanvas: boolean;

  @HostBinding('class.sidebar') true;

  constructor() { }

  ngOnInit() {
    this.displayBreakpoint(this.display);
    this.isCompact(this.compact);
    this.isFixed(this.fixed);
    this.isFloat(this.float);
    this.isMinimized(this.minimized);
    this.isOffCanvas(this.offCanvas);
  }

  isCompact(compact: boolean): void {
    if (this.compact) { document.querySelector('body').classList.add('sidebar-compact'); }
  }

  isFixed(fixed: boolean): void {
    if (this.fixed) { document.querySelector('body').classList.add('sidebar-fixed'); }
  }

  isFloat(float: boolean): void {
    if (this.float) { document.querySelector('body').classList.add('sidebar-float'); }
  }

  isMinimized(minimized: boolean): void {
    if (this.minimized) { document.querySelector('body').classList.add('sidebar-minimized'); }
  }

  isOffCanvas(offCanvas: boolean): void {
    if (this.offCanvas) { document.querySelector('body').classList.add('sidebar-off-canvas'); }
  }

  fixedPosition(fixed: boolean): void {
    if (this.fixed) { document.querySelector('body').classList.add('sidebar-fixed'); }
  }

  displayBreakpoint(display: any): void {
    if (this.display !== false) {
      let cssClass;
      this.display ? cssClass = `sidebar-${this.display}-show` : cssClass = sidebarCssClasses[0];
      document.querySelector('body').classList.add(cssClass);
    }
  }
}
