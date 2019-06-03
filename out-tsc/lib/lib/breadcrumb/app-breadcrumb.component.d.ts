import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AppBreadcrumbService } from './app-breadcrumb.service';
export declare class AppBreadcrumbComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    service: AppBreadcrumbService;
    el: ElementRef;
    fixed: boolean;
    breadcrumbs: any;
    private readonly fixedClass;
    constructor(document: any, renderer: Renderer2, service: AppBreadcrumbService, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
}
