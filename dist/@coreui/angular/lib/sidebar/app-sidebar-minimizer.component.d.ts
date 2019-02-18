import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class AppSidebarMinimizerComponent implements OnInit {
    private document;
    private renderer;
    private hostElement;
    role: string;
    toggleOpen($event: any): void;
    constructor(document: any, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
}
