import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { INavData } from '../app-sidebar-nav';
export declare class AppSidebarNavItemsComponent {
    private document;
    private renderer;
    router: Router;
    helper: SidebarNavHelper;
    protected _items: INavData[];
    items: INavData[];
    constructor(document: any, renderer: Renderer2, router: Router, helper: SidebarNavHelper);
    hideMobile(): void;
}
