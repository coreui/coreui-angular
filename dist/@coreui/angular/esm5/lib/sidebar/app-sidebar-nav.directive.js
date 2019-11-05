import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NavDropdownDirective = __decorate([
        Directive({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());
export { NavDropdownDirective };
/**
 * Allows the dropdown to be toggled via click.
 */
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    NavDropdownToggleDirective.ctorParameters = function () { return [
        { type: NavDropdownDirective }
    ]; };
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
    return NavDropdownToggleDirective;
}());
export { NavDropdownToggleDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUtsRTtJQUVFLDhCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFFdkMscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBSnVCLFVBQVU7O0lBRnZCLG9CQUFvQjtRQUhoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1NBQzdCLENBQUM7eUNBR3dCLFVBQVU7T0FGdkIsb0JBQW9CLENBT2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxvQkFBb0I7QUFTakM7O0dBRUc7QUFJSDtJQUNFLG9DQUFvQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUFHLENBQUM7SUFHdEQsK0NBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBTjZCLG9CQUFvQjs7SUFHbEQ7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Z0VBSWpDO0lBUFUsMEJBQTBCO1FBSHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7U0FDbkMsQ0FBQzt5Q0FFOEIsb0JBQW9CO09BRHZDLDBCQUEwQixDQVF0QztJQUFELGlDQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93bkRpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG93cyB0aGUgZHJvcGRvd24gdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93blRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTmF2RHJvcGRvd25EaXJlY3RpdmUpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==