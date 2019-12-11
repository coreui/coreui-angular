export interface INavAttributes {
    [propName: string]: any;
}
export interface INavWrapper {
    attributes: INavAttributes;
    element: string;
}
export interface INavBadge {
    text: string;
    variant: string;
    class?: string;
}
export interface INavLabel {
    class?: string;
    variant: string;
}
export interface INavLinkProps {
    queryParams?: {
        [k: string]: any;
    };
    fragment?: string;
    queryParamsHandling?: 'merge' | 'preserve' | '';
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
    state?: {
        [k: string]: any;
    };
    routerLinkActiveOptions?: {
        exact: boolean;
    };
    routerLinkActive?: string | string[];
}
export interface INavData {
    name?: string;
    url?: string | any[];
    href?: string;
    icon?: string;
    badge?: INavBadge;
    title?: boolean;
    children?: INavData[];
    variant?: string;
    attributes?: INavAttributes;
    divider?: boolean;
    class?: string;
    label?: INavLabel;
    wrapper?: INavWrapper;
    linkProps?: INavLinkProps;
}
