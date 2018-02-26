import { ElementRef, OnInit } from '@angular/core';
export declare class AppFooterComponent implements OnInit {
    private el;
    fixed: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    isFixed(fixed: boolean): void;
}
