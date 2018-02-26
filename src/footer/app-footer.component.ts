import { Component, ElementRef, Input, OnInit  } from '@angular/core';
import { Replace } from './../shared';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <ng-content></ng-content>
    </footer>
  `
})
export class AppFooterComponent implements OnInit {
  @Input() fixed: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    Replace(this.el);
    this.isFixed(this.fixed);
  }

  isFixed(fixed: boolean): void {
    if (this.fixed) { document.querySelector('body').classList.add('footer-fixed'); }
  }
}
