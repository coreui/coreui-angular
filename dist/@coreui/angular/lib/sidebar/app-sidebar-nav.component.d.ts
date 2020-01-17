import { OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { INavData } from './app-sidebar-nav';
export declare class AppSidebarNavComponent implements OnChanges {
    router: Router;
    navItems: INavData[];
    sidebarNavClass: boolean;
    role: string;
    navItemsArray: INavData[];
    constructor(router: Router);
    ngOnChanges(changes: SimpleChanges): void;
}
