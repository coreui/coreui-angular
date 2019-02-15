import { ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class AppHeaderComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private hostElement;
    fixed: boolean;
    navbarBrand: any;
    navbarBrandFull: any;
    navbarBrandMinimized: any;
    navbarBrandText: any;
    navbarBrandHref: any;
    sidebarToggler: any;
    mobileSidebarToggler: any;
    asideMenuToggler: any;
    mobileAsideMenuToggler: any;
    private readonly fixedClass;
    navbarBrandImg: boolean;
    constructor(document: any, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
}
