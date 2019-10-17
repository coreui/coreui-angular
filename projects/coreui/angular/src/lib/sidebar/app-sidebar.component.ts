import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostBinding, Inject, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { sidebarCssClasses } from '../shared';

@Component({
  selector: 'app-sidebar, cui-sidebar',
  template: `<ng-content></ng-content>`
})
export class AppSidebarComponent implements OnInit, OnDestroy {
  @Input() compact: boolean;
  @Input() display: any;
  @Input() fixed: boolean;
  @Input() offCanvas: boolean;

  @Input()
  get minimized() {
    return this._minimized;
  }
  set minimized(value: boolean) {
    // only update / emit events when the value changes
    if (this._minimized !== value) {
      this._minimized = value;
      this._updateMinimized(value);
      this.minimizedChange.emit(value);
    }
  }
  private _minimized = false;

  /**
   * Emits whenever the minimized state of the sidebar changes.
   * Primarily used to facilitate two-way binding.
   */
  @Output() minimizedChange = new EventEmitter<boolean>();

  @HostBinding('class.sidebar') _sidebar = true;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.displayBreakpoint(this.display);
    this.isCompact(this.compact);
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
  }

  ngOnDestroy(): void {
    this.minimizedChange.complete();
    this.renderer.removeClass(this.document.body, 'sidebar-fixed');
  }

  isCompact(compact: boolean = this.compact): void {
    if (compact) {
      this.renderer.addClass(this.document.body, 'sidebar-compact');
    }
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, 'sidebar-fixed');
    }
  }

  toggleMinimized(): void {
    this.minimized = !this._minimized;
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

  private _updateMinimized(minimized: boolean): void {
    const body = this.document.body;

    if (minimized) {
      this.renderer.addClass(body, 'sidebar-minimized');
      this.renderer.addClass(body, 'brand-minimized');
    } else {
      this.renderer.removeClass(body, 'sidebar-minimized');
      this.renderer.removeClass(body, 'brand-minimized');
    }
  }
}
