import { PipeTransform } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export declare class AppSidebarNavItemClassPipe implements PipeTransform {
    helper: SidebarNavHelper;
    constructor(helper: SidebarNavHelper);
    transform(item: any, ...args: any[]): any;
}
