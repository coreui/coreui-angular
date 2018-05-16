import { ElementRef, OnInit } from '@angular/core';
export declare class AppAsideComponent implements OnInit {
    private el;
    display: any;
    fixed: boolean;
    offCanvas: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    isFixed(fixed: boolean): void;
    isOffCanvas(offCanvas: boolean): void;
    displayBreakpoint(display: any): void;
}
