import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { INavData } from '../app-sidebar-nav';
export declare class AppSidebarNavLinkContentComponent implements OnInit, OnDestroy {
    helper: SidebarNavHelper;
    item: any;
    constructor(helper: SidebarNavHelper);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class AppSidebarNavLinkComponent implements OnInit, OnDestroy {
    router: Router;
    protected _Item: INavData;
    item: INavData;
    linkClick: EventEmitter<any>;
    linkType: string;
    href: string;
    linkActive: boolean;
    private url;
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
