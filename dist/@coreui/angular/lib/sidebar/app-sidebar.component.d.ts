import { OnInit, OnDestroy } from '@angular/core';
export declare class AppSidebarComponent implements OnInit, OnDestroy {
    compact: boolean;
    display: any;
    fixed: boolean;
    minimized: boolean;
    offCanvas: boolean;
    true: any;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCompact(compact: boolean): void;
    isFixed(fixed: boolean): void;
    isMinimized(minimized: boolean): void;
    isOffCanvas(offCanvas: boolean): void;
    fixedPosition(fixed: boolean): void;
    displayBreakpoint(display: any): void;
}
