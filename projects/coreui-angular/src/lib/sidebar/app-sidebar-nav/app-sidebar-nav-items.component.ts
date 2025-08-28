import { Component, Inject, Input, Renderer2, forwardRef, DOCUMENT } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { INavData } from '../app-sidebar-nav';
import { HtmlAttributesDirective } from '../../shared';
import { AppSidebarNavItemClassPipe } from './app-sidebar-nav-item-class.pipe';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav-badge.pipe';
import { AppSidebarNavIconPipe } from './app-sidebar-nav-icon.pipe';
import { AppSidebarNavLinkComponent } from './app-sidebar-nav-link.component';
import { AppSidebarNavLabelComponent } from './app-sidebar-nav-label.component';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav-title.component';
import { AppSidebarNavDividerComponent } from './app-sidebar-nav-divider.component';
import { NavDropdownToggleDirective, NavDropdownDirective } from '../app-sidebar-nav.directive';


// lightweight injection token
export abstract class DropdownToken { }

@Component({
    selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
    template: `
    @for (item of items; track item) {
      @switch (helper.itemType(item)) {
        @case ('dropdown') {
          <app-sidebar-nav-dropdown
            [item]="item"
            [class.open]="helper.isActive(router, item)"
            [ngClass]="item | appSidebarNavItemClass"
            appNavDropdown>
          </app-sidebar-nav-dropdown>
        }
        @case ('divider') {
          <app-sidebar-nav-divider
            [item]="item"
            [ngClass]="item | appSidebarNavItemClass"
            [appHtmlAttr]="item.attributes">
          </app-sidebar-nav-divider>
        }
        @case ('title') {
          <app-sidebar-nav-title
            [item]="item"
            [ngClass]="item | appSidebarNavItemClass"
            [appHtmlAttr]="item.attributes">
          </app-sidebar-nav-title>
        }
        @case ('label') {
          <app-sidebar-nav-label
            [item]="item"
            class="nav-item"
            [ngClass]="item | appSidebarNavItemClass">
          </app-sidebar-nav-label>
        }
        @case ('empty') {
        }
        @default {
          <app-sidebar-nav-link
            [item]="item"
            class="nav-item"
            [ngClass]="item | appSidebarNavItemClass"
            (linkClick)="hideMobile()"
            >
          </app-sidebar-nav-link>
        }
      }
    }
    `,
  standalone: true,
  // providers: [{provide: DropdownToken, useExisting: forwardRef(()=> AppSidebarNavDropdownComponent)}],
  imports: [
    NgClass,
    HtmlAttributesDirective,
    AppSidebarNavItemClassPipe,
    forwardRef(() => AppSidebarNavDropdownComponent),
    AppSidebarNavLinkComponent,
    AppSidebarNavLabelComponent,
    AppSidebarNavTitleComponent,
    AppSidebarNavDividerComponent,
    NavDropdownDirective
]
})
export class AppSidebarNavItemsComponent {

  protected _items: INavData[] = [];

  @Input()
  set items(items: INavData[]) {
    this._items = [...items];
  }
  get items(): INavData[] {
    return this._items;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public router: Router,
    public helper: SidebarNavHelper,

  ) { }

  public hideMobile() {
    if (this.document.body.classList.contains('sidebar-show')) {
      this.renderer.removeClass(this.document.body, 'sidebar-show');
    }
  }
}

@Component({
    selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
    template: `
    <a class="nav-link nav-dropdown-toggle"
      appNavDropdownToggle
      [appHtmlAttr]="item.attributes">
      @if (helper.hasIcon(item)) {
        <i [ngClass]="item | appSidebarNavIcon"></i>
      }
      <ng-container>{{item.name}}</ng-container>
      @if (helper.hasBadge(item)) {
        <span [ngClass]="item | appSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
    <app-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children ?? []">
    </app-sidebar-nav-items>
    `,
  styles: [
    '.nav-dropdown-toggle { cursor: pointer; }',
    '.nav-dropdown-items { display: block; }'
  ],
  providers: [SidebarNavHelper],
  standalone: true,
  imports: [NgClass, HtmlAttributesDirective, AppSidebarNavBadgePipe, AppSidebarNavIconPipe, AppSidebarNavItemsComponent, NavDropdownToggleDirective]
})
export class AppSidebarNavDropdownComponent {
  @Input() item: INavData = {};

  constructor(
    public helper: SidebarNavHelper
  ) { }
}

