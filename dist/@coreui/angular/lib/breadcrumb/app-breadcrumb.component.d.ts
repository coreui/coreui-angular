import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AppBreadcrumbService } from './app-breadcrumb.service';
export declare class AppBreadcrumbComponent implements OnInit, OnDestroy {
    service: AppBreadcrumbService;
    el: ElementRef;
    fixed: boolean;
    breadcrumbs: any;
    constructor(service: AppBreadcrumbService, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed: boolean): void;
}
