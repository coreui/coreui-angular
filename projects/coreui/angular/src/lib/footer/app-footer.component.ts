import {Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import {Replace} from '../shared';

@Component({
  selector: 'app-footer',
  template: `
    <ng-container class="app-footer"></ng-container>
    <footer class="app-footer">
      <ng-content></ng-content>
    </footer>
  `
})
export class AppFooterComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    Replace(this.el);
    this.isFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'footer-fixed');
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, 'footer-fixed');
    }
  }
}
