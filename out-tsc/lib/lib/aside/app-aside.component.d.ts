import { ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class AppAsideComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private hostElement;
    display: any;
    fixed: boolean;
    offCanvas: boolean;
    private readonly fixedClass;
    constructor(document: any, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
    isOffCanvas(offCanvas?: boolean): void;
    displayBreakpoint(display?: any): void;
}
