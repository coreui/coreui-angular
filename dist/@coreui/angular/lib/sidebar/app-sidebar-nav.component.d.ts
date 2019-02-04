import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
export declare class NavDropdownDirective {
    private el;
    constructor(el: ElementRef);
    toggle(): void;
}
/**
* Allows the dropdown to be toggled via click.
*/
export declare class NavDropdownToggleDirective {
    private dropdown;
    constructor(dropdown: NavDropdownDirective);
    toggleOpen($event: any): void;
}
export declare class AppSidebarNavComponent implements OnChanges {
    navItems: Array<any>;
    true: any;
    role: string;
    navItemsArray: Array<any>;
    isDivider(item: any): boolean;
    isTitle(item: any): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    constructor();
}
export declare class AppSidebarNavItemComponent implements OnInit {
    private router;
    private el;
    item: any;
    constructor(router: Router, el: ElementRef);
    hasClass(): boolean;
    isDropdown(): boolean;
    thisUrl(): any;
    isActive(): boolean;
    ngOnInit(): void;
}
export declare class AppSidebarNavLinkComponent implements OnInit {
    private document;
    private renderer;
    private router;
    private el;
    link: any;
    constructor(document: any, renderer: Renderer2, router: Router, el: ElementRef);
    getClasses(): {
        'nav-link': boolean;
        'disabled': boolean;
        'btn-link': boolean;
    };
    getLinkType(): "disabled" | "" | "external";
    hasVariant(): boolean;
    isBadge(): boolean;
    isDisabled(): boolean;
    isExternalLink(): boolean;
    isIcon(): boolean;
    hideMobile(): void;
    ngOnInit(): void;
}
export declare class AppSidebarNavDropdownComponent implements OnInit {
    private router;
    private el;
    link: any;
    isBadge(): boolean;
    isIcon(): boolean;
    constructor(router: Router, el: ElementRef);
    ngOnInit(): void;
}
export declare class AppSidebarNavTitleComponent implements OnInit {
    private el;
    private renderer;
    title: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
