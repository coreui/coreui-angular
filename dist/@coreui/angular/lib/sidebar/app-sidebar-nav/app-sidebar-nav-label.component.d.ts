import { OnInit } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export declare class AppSidebarNavLabelComponent implements OnInit {
    helper: SidebarNavHelper;
    item: any;
    private classes;
    private iconClasses;
    constructor(helper: SidebarNavHelper);
    ngOnInit(): void;
    getItemClass(): {
        'nav-label': boolean;
        active: boolean;
    };
    getLabelIconClass(): {};
}
