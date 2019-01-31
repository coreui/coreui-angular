import { ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class AppAsideComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private el;
    display: any;
    fixed: boolean;
    offCanvas: boolean;
    constructor(document: any, renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
    isOffCanvas(offCanvas?: boolean): void;
    displayBreakpoint(display?: any): void;
}
