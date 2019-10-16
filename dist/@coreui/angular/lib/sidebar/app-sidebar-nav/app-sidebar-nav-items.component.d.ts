import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export declare class AppSidebarNavItemsComponent {
    private document;
    private renderer;
    router: Router;
    helper: SidebarNavHelper;
    protected _items: any;
    items: Array<any>;
    constructor(document: any, renderer: Renderer2, router: Router, helper: SidebarNavHelper);
    hideMobile(): void;
}
