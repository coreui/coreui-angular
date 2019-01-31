import { OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class AppSidebarComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    compact: boolean;
    display: any;
    fixed: boolean;
    minimized: boolean;
    offCanvas: boolean;
    true: any;
    constructor(document: any, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCompact(compact?: boolean): void;
    isFixed(fixed?: boolean): void;
    isMinimized(minimized?: boolean): void;
    isOffCanvas(offCanvas?: boolean): void;
    fixedPosition(fixed?: boolean): void;
    displayBreakpoint(display?: any): void;
}
