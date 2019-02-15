import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-sidebar-form',
  template: `<ng-content></ng-content>`
})
export class AppSidebarFormComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-form');
  }
  ngOnInit() { }
}
