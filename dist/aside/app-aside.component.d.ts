import { OnInit } from '@angular/core';
export declare class AppAsideComponent implements OnInit {
    display: string;
    fixed: boolean;
    offCanvas: boolean;
    constructor();
    ngOnInit(): void;
    isFixed(fixed: boolean): void;
    isOffCanvas(offCanvas: boolean): void;
    displayBreakpoint(display: string): void;
}
