import { ElementRef } from '@angular/core';
export declare class NavDropdownDirective {
    private el;
    constructor(el: ElementRef);
    toggle(): void;
}
/**
 * Allows the dropdown to be toggled via click.
 */
export declare class NavDropdownToggleDirective {
    private dropdown;
    constructor(dropdown: NavDropdownDirective);
    toggleOpen($event: any): void;
}
