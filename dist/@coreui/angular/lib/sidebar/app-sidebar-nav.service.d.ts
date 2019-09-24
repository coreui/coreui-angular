import { INavData } from './app-sidebar-nav';
export declare abstract class SidebarNavService {
    /**
     * Returns a sidebar-nav items config NavData
     */
    abstract getSidebarNavItemsConfig(): INavData[];
}
export declare class SidebarNavHelper {
    itemType(item: any): "label" | "link" | "title" | "divider" | "dropdown" | "empty";
    isActive(router: any, item: any): any;
    hasBadge: (item: any) => boolean;
    hasIcon: (item: any) => boolean;
    getIconClass(item: any): {
        'nav-icon': boolean;
    };
}
