import { ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class AppAsideComponent implements OnInit, OnDestroy {
    private el;
    display: any;
    fixed: boolean;
    offCanvas: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed: boolean): void;
    isOffCanvas(offCanvas: boolean): void;
    displayBreakpoint(display: any): void;
}
