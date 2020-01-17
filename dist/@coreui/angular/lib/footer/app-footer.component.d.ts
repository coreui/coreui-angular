import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
export declare class AppFooterComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    fixed: boolean;
    private readonly fixedClass;
    appFooterClass: boolean;
    constructor(document: any, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
}
