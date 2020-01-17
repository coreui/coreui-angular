import {Component, Inject, Input, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

import {SidebarNavHelper} from '../app-sidebar-nav.service';
import {INavData} from '../app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
  template: `
    <ng-container *ngFor="let item of items">
      <ng-container [ngSwitch]="helper.itemType(item)">
        <app-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="item | appSidebarNavItemClass"
          appNavDropdown
          routerLinkActive="open">
        </app-sidebar-nav-dropdown>
        <app-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="item | appSidebarNavItemClass"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-divider>
        <app-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="item | appSidebarNavItemClass"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-title>
        <app-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="item | appSidebarNavItemClass">
        </app-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <app-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="item | appSidebarNavItemClass"
          (linkClick)="hideMobile()"
        >
        </app-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
})
export class AppSidebarNavItemsComponent {

  protected _items: INavData[];

  @Input()
  set items(items: INavData[]) {
    this._items = [...items];
  }
  get items(): INavData[] {
    return this._items;
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    public router: Router,
    public helper: SidebarNavHelper
  ) {}

  public hideMobile() {
    if (this.document.body.classList.contains('sidebar-show')) {
      this.renderer.removeClass(this.document.body, 'sidebar-show');
    }
  }
}
