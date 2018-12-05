import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Replace } from './../shared';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <ng-content></ng-content>
    </footer>
  `
})
export class AppFooterComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    Replace(this.el);
    this.isFixed(this.fixed);
  }

  ngOnDestroy(): void {
    document.body.classList.remove('footer-fixed');
  }

  isFixed(fixed: boolean): void {
    if (this.fixed) { document.querySelector('body').classList.add('footer-fixed'); }
  }
}
