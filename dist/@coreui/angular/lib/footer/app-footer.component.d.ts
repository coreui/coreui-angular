import { ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class AppFooterComponent implements OnInit, OnDestroy {
    private el;
    fixed: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed: boolean): void;
}
