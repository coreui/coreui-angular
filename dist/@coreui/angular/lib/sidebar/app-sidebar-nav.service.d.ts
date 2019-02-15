export declare class SidebarNavHelper {
    itemType(item: any): "label" | "link" | "title" | "divider" | "dropdown" | "empty";
    getClass(item: any): any;
    isActive(router: any, item: any): any;
    hasBadge: (item: any) => boolean;
    hasIcon: (item: any) => boolean;
    getIconClass(item: any): {
        'nav-icon': boolean;
    };
    getBadgeClass(item: any): {
        'badge': boolean;
    };
}
