import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  template: `<ng-content></ng-content>`
})
export class AppSidebarHeaderComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-header');
  }

  ngOnInit() { }
}
