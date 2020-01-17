import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ClassToggler } from '../toggle-classes';
/**
 * Allows the sidebar to be toggled via click.
 */
export declare class SidebarToggleDirective implements OnInit {
    private classToggler;
    breakpoint: string;
    bp: any;
    constructor(classToggler: ClassToggler);
    ngOnInit(): void;
    toggleOpen($event: any): void;
}
export declare class SidebarMinimizeDirective {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    toggleOpen($event: any): void;
}
export declare class MobileSidebarToggleDirective {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    toggleOpen($event: any): void;
}
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
export declare class SidebarOffCanvasCloseDirective {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    toggleOpen($event: any): void;
}
export declare class BrandMinimizeDirective {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    toggleOpen($event: any): void;
}
/**
 * Allows the aside to be toggled via click.
 */
export declare class AsideToggleDirective implements OnInit {
    private classToggler;
    breakpoint: string;
    bp: any;
    constructor(classToggler: ClassToggler);
    ngOnInit(): void;
    toggleOpen($event: any): void;
}
export declare class HtmlAttributesDirective implements OnInit {
    private renderer;
    private el;
    appHtmlAttr: {
        [key: string]: string;
    };
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private setStyle;
    private addClass;
    private setAttrib;
}
