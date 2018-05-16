import { ElementRef, OnInit } from '@angular/core';
import { AppBreadcrumbService } from './app-breadcrumb.service';
export declare class AppBreadcrumbComponent implements OnInit {
    service: AppBreadcrumbService;
    el: ElementRef;
    fixed: boolean;
    breadcrumbs: any;
    constructor(service: AppBreadcrumbService, el: ElementRef);
    ngOnInit(): void;
    isFixed(fixed: boolean): void;
}
