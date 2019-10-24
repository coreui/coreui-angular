import { OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class AppAsideComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    display: any;
    fixed: boolean;
    offCanvas: boolean;
    private readonly fixedClass;
    _aside: boolean;
    constructor(document: any, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
    isOffCanvas(offCanvas?: boolean): void;
    displayBreakpoint(display?: any): void;
}
