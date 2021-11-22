import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-sidebar-brand',
  templateUrl: './sidebar-brand.component.html'
})
export class SidebarBrandComponent implements OnInit {

  @Input() brandFull?: any;
  @Input() brandNarrow?: any;
  @Input() routerLink?: any[] | string;

  @HostBinding('class.sidebar-brand') sidebarBrandClass = true;

  brandImg = false;

  ngOnInit(): void {
    this.brandImg = Boolean(this.brandFull || this.brandNarrow);
  }
}
