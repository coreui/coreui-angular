import { Renderer2 } from '@angular/core';
export declare const ToggleClasses: (Toggle: any, ClassNames: any) => void;
export declare class ClassToggler {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    removeClasses(NewClassNames: any): boolean;
    toggleClasses(Toggle: any, ClassNames: any): void;
}
