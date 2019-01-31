import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
export declare class AppFooterComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private el;
    fixed: boolean;
    constructor(document: any, renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
}
