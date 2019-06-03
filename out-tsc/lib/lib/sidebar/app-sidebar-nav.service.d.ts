export declare class SidebarNavHelper {
    itemType(item: any): "divider" | "title" | "dropdown" | "label" | "empty" | "link";
    getClass(item: any): any;
    isActive(router: any, item: any): any;
    hasBadge: (item: any) => any;
    hasIcon: (item: any) => any;
    getIconClass(item: any): {
        'nav-icon': boolean;
    };
    getBadgeClass(item: any): {
        'badge': boolean;
    };
}
