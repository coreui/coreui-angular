import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { Router } from '@angular/router';
export declare class AppSidebarNavLinkContentComponent {
    helper: SidebarNavHelper;
    item: any;
    constructor(helper: SidebarNavHelper);
}
export declare class AppSidebarNavLinkComponent implements OnInit, OnDestroy {
    router: Router;
    protected _item: any;
    item: any;
    linkClick: EventEmitter<{}>;
    linkType: string;
    href: string;
    linkActive: boolean;
    private navigationEndObservable;
    private navSubscription;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getLinkType(): "disabled" | "link" | "external";
    isDisabled(): boolean;
    isExternalLink(): boolean;
    linkClicked(): void;
}
