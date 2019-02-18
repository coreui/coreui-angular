import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export declare class AppSidebarNavItemsComponent {
    router: Router;
    helper: SidebarNavHelper;
    items: Array<any>;
    constructor(router: Router, helper: SidebarNavHelper);
}
