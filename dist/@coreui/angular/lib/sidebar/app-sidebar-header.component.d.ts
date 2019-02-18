import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class AppSidebarHeaderComponent implements OnInit {
    private renderer;
    private hostElement;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
}
