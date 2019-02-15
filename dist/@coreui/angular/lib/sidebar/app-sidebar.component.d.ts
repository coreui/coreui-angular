import { OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
export declare class AppSidebarComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private hostElement;
    compact: boolean;
    display: any;
    fixed: boolean;
    minimized: boolean;
    offCanvas: boolean;
    constructor(document: any, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCompact(compact?: boolean): void;
    isFixed(fixed?: boolean): void;
    isMinimized(minimized?: boolean): void;
    isOffCanvas(offCanvas?: boolean): void;
    displayBreakpoint(display?: any): void;
}
