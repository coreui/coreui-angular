import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class AppSidebarNavTitleComponent implements OnInit {
    private el;
    private renderer;
    item: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private addAttribs;
    private setStyle;
    private addClass;
    private setAttrib;
}
