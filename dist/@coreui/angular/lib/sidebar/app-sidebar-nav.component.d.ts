import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
export declare class AppSidebarNavComponent implements OnChanges {
    router: Router;
    private renderer;
    private hostElement;
    navItems: Array<any>;
    role: string;
    navItemsArray: Array<any>;
    constructor(router: Router, renderer: Renderer2, hostElement: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
