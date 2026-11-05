import { Component, HostBinding, Input, OnDestroy, OnInit, Renderer2, DOCUMENT, inject } from '@angular/core';


@Component({
  selector: 'app-footer, cui-footer',
  template: `<ng-content />`,
  standalone: true
})
export class AppFooterComponent implements OnInit, OnDestroy {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);

  @Input() fixed?: boolean;

  private readonly fixedClass = 'footer-fixed';

  @HostBinding('class.app-footer') appFooterClass = true;

  ngOnInit(): void {
    this.isFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }
}
