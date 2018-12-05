import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { asideMenuCssClasses, Replace } from './../shared/index';

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

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    Replace(this.el);
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
    this.displayBreakpoint(this.display);
  }

  ngOnDestroy(): void {
      document.body.classList.remove('aside-menu-fixed');
  }

  isFixed(fixed: boolean): void {
    if (this.fixed) { document.querySelector('body').classList.add('aside-menu-fixed'); }
  }

  isOffCanvas(offCanvas: boolean): void {
    if (this.offCanvas) { document.querySelector('body').classList.add('aside-menu-off-canvas'); }
  }

  displayBreakpoint(display: any): void {
    if (this.display !== false ) {
      let cssClass;
      this.display ? cssClass = `aside-menu-${this.display}-show` : cssClass = asideMenuCssClasses[0];
      document.querySelector('body').classList.add(cssClass);
    }
  }
}
