import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AppBreadcrumbService } from './app-breadcrumb.service';
export declare class CuiBreadcrumbComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    service: AppBreadcrumbService;
    fixed: boolean;
    breadcrumbs: any;
    private readonly fixedClass;
    constructor(document: any, renderer: Renderer2, service: AppBreadcrumbService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
}
