import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { INavData } from './app-sidebar-nav';
export declare class AppSidebarNavComponent implements OnChanges {
    router: Router;
    private renderer;
    private hostElement;
    navItems: INavData[];
    role: string;
    navItemsArray: INavData[];
    constructor(router: Router, renderer: Renderer2, hostElement: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
