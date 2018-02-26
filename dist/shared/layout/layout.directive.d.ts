import { OnInit } from '@angular/core';
/**
* Allows the sidebar to be toggled via click.
*/
export declare class SidebarToggleDirective implements OnInit {
    breakpoint: string;
    bp: any;
    constructor();
    ngOnInit(): void;
    toggleOpen($event: any): void;
}
export declare class SidebarMinimizeDirective {
    constructor();
    toggleOpen($event: any): void;
}
export declare class MobileSidebarToggleDirective {
    constructor();
    private hasClass(target, elementClassName);
    toggleOpen($event: any): void;
}
/**
* Allows the off-canvas sidebar to be closed via click.
*/
export declare class SidebarOffCanvasCloseDirective {
    constructor();
    private hasClass(target, elementClassName);
    private toggleClass(elem, elementClassName);
    toggleOpen($event: any): void;
}
export declare class BrandMinimizeDirective {
    constructor();
    toggleOpen($event: any): void;
}
/**
* Allows the aside to be toggled via click.
*/
export declare class AsideToggleDirective implements OnInit {
    breakpoint: string;
    bp: any;
    constructor();
    ngOnInit(): void;
    toggleOpen($event: any): void;
}
