import { OnInit, Renderer2 } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export declare class AppSidebarNavLinkComponent implements OnInit {
    private document;
    private renderer;
    helper: SidebarNavHelper;
    item: any;
    linkType: string;
    href: string;
    constructor(document: any, renderer: Renderer2, helper: SidebarNavHelper);
    ngOnInit(): void;
    getLinkClass(): {
        'nav-link': boolean;
        'disabled': boolean;
        'btn-link': boolean;
    };
    getLinkType(): "link" | "external";
    hasVariant(): boolean;
    isDisabled(): boolean;
    isExternalLink(): boolean;
    hideMobile(): void;
}
