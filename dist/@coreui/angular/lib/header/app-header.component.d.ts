import { ElementRef, OnInit } from '@angular/core';
export declare class AppHeaderComponent implements OnInit {
    private el;
    fixed: boolean;
    navbarBrand: any;
    navbarBrandFull: any;
    navbarBrandMinimized: any;
    sidebarToggler: any;
    mobileSidebarToggler: any;
    asideMenuToggler: any;
    mobileAsideMenuToggler: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    isFixed(fixed: boolean): void;
    imgSrc(brand: any): void;
    imgWidth(brand: any): void;
    imgHeight(brand: any): void;
    imgAlt(brand: any): void;
    breakpoint(breakpoint: any): void;
}
