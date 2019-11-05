import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
let NavDropdownDirective = class NavDropdownDirective {
    constructor(el) {
        this.el = el;
    }
    toggle() {
        this.el.nativeElement.classList.toggle('open');
    }
};
NavDropdownDirective.ctorParameters = () => [
    { type: ElementRef }
];
NavDropdownDirective = __decorate([
    Directive({
        selector: '[appNavDropdown]'
    }),
    __metadata("design:paramtypes", [ElementRef])
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
NavDropdownToggleDirective.ctorParameters = () => [
    { type: NavDropdownDirective }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    Directive({
        selector: '[appNavDropdownToggle]'
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);
export { NavDropdownToggleDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUtsRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUUvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFFdkMsTUFBTTtRQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGLENBQUE7O1lBTHlCLFVBQVU7O0FBRnZCLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7cUNBR3dCLFVBQVU7R0FGdkIsb0JBQW9CLENBT2hDO1NBUFksb0JBQW9CO0FBU2pDOztHQUVHO0FBSUgsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFDckMsWUFBb0IsUUFBOEI7UUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7SUFBRyxDQUFDO0lBR3RELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBOztZQVArQixvQkFBb0I7O0FBR2xEO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzREQUlqQztBQVBVLDBCQUEwQjtJQUh0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO0tBQ25DLENBQUM7cUNBRThCLG9CQUFvQjtHQUR2QywwQkFBMEIsQ0FRdEM7U0FSWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duRGlyZWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dzIHRoZSBkcm9wZG93biB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duVG9nZ2xlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3Bkb3duOiBOYXZEcm9wZG93bkRpcmVjdGl2ZSkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5kcm9wZG93bi50b2dnbGUoKTtcclxuICB9XHJcbn1cclxuIl19