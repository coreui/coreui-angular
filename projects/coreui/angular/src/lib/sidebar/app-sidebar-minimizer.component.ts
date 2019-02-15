import {Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-sidebar-minimizer',
  template: ``,
})
export class AppSidebarMinimizerComponent implements OnInit {

  @HostBinding('attr.role') role = 'button';

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const body = this.document.body;
    body.classList.contains('sidebar-minimized') ?
      this.renderer.removeClass(body, 'sidebar-minimized') :
      this.renderer.addClass(body, 'sidebar-minimized');
    body.classList.contains('brand-minimized') ?
      this.renderer.removeClass(body, 'brand-minimized') :
      this.renderer.addClass(body, 'brand-minimized');
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-minimizer');
  }

  ngOnInit() {}
}
