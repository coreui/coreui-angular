import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HtmlAttributesDirective } from '../../shared';

@Component({
  selector: 'c-sidebar-brand',
  templateUrl: './sidebar-brand.component.html',
  standalone: true,
  imports: [RouterLink, HtmlAttributesDirective, NgIf, NgClass]
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
