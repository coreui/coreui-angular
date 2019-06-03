import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
let NavDropdownDirective = class NavDropdownDirective {
    constructor(el) {
        this.el = el;
    }
    toggle() {
        this.el.nativeElement.classList.toggle('open');
    }
};
NavDropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appNavDropdown]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], NavDropdownDirective);
export { NavDropdownDirective };
/**
 * Allows the dropdown to be toggled via click.
 */
let NavDropdownToggleDirective = class NavDropdownToggleDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    }
};
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = tslib_1.__decorate([
    Directive({
        selector: '[appNavDropdownToggle]'
    }),
    tslib_1.__metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);
export { NavDropdownToggleDirective };
//# sourceMappingURL=app-sidebar-nav.directive.js.map