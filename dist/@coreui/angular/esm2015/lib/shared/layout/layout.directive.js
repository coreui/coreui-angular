import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
/**
 * Allows the sidebar to be toggled via click.
 */
let SidebarToggleDirective = class SidebarToggleDirective {
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const cssClass = this.bp ? `sidebar-${this.bp}-show` : sidebarCssClasses[0];
        this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
    }
};
SidebarToggleDirective.ctorParameters = () => [
    { type: ClassToggler }
];
__decorate([
    Input('appSidebarToggler'),
    __metadata("design:type", String)
], SidebarToggleDirective.prototype, "breakpoint", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    Directive({
        selector: '[appSidebarToggler]',
        providers: [ClassToggler]
    }),
    __metadata("design:paramtypes", [ClassToggler])
], SidebarToggleDirective);
export { SidebarToggleDirective };
let SidebarMinimizeDirective = class SidebarMinimizeDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
    }
};
SidebarMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarMinimizeDirective.prototype, "toggleOpen", null);
SidebarMinimizeDirective = __decorate([
    Directive({
        selector: '[appSidebarMinimizer]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], SidebarMinimizeDirective);
export { SidebarMinimizeDirective };
let MobileSidebarToggleDirective = class MobileSidebarToggleDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
    }
};
MobileSidebarToggleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    Directive({
        selector: '[appMobileSidebarToggler]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], MobileSidebarToggleDirective);
export { MobileSidebarToggleDirective };
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
let SidebarOffCanvasCloseDirective = class SidebarOffCanvasCloseDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    }
};
SidebarOffCanvasCloseDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    Directive({
        selector: '[appSidebarClose]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], SidebarOffCanvasCloseDirective);
export { SidebarOffCanvasCloseDirective };
let BrandMinimizeDirective = class BrandMinimizeDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    }
};
BrandMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrandMinimizeDirective.prototype, "toggleOpen", null);
BrandMinimizeDirective = __decorate([
    Directive({
        selector: '[appBrandMinimizer]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], BrandMinimizeDirective);
export { BrandMinimizeDirective };
/**
 * Allows the aside to be toggled via click.
 */
let AsideToggleDirective = class AsideToggleDirective {
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const cssClass = this.bp ? `aside-menu-${this.bp}-show` : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    }
};
AsideToggleDirective.ctorParameters = () => [
    { type: ClassToggler }
];
__decorate([
    Input('appAsideMenuToggler'),
    __metadata("design:type", String)
], AsideToggleDirective.prototype, "breakpoint", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    Directive({
        selector: '[appAsideMenuToggler]',
        providers: [ClassToggler]
    }),
    __metadata("design:paramtypes", [ClassToggler])
], AsideToggleDirective);
export { AsideToggleDirective };
let HtmlAttributesDirective = class HtmlAttributesDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        const attribs = this.appHtmlAttr;
        for (const attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    }
    setStyle(styles) {
        for (const style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    }
    addClass(classes) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(this.el.nativeElement, element);
        });
    }
    setAttrib(key, value) {
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    }
};
HtmlAttributesDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], HtmlAttributesDirective.prototype, "appHtmlAttr", void 0);
HtmlAttributesDirective = __decorate([
    Directive({
        selector: '[appHtmlAttr]'
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef])
], HtmlAttributesDirective);
export { HtmlAttributesDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7O0dBRUc7QUFLSCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUdqQyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFDbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1QixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQTs7WUFWbUMsWUFBWTs7QUFGbEI7SUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzswREFBb0I7QUFPL0M7SUFEQyxZQUFZLENBQUMsT0FBTyxF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QyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSztRQUMxQixLQUFLLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQ3FCLFNBQVM7WUFDZixVQUFVOztBQUpmO0lBQVIsS0FBSyxFQUFFOzs0REFBdUM7QUFEcEMsdUJBQXVCO0lBSG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO0tBQzFCLENBQUM7cUNBS29CLFNBQVM7UUFDZixVQUFVO0dBTGIsdUJBQXVCLENBdUNuQztTQXZDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBhc2lkZU1lbnVDc3NDbGFzc2VzLCBzaWRlYmFyQ3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMnO1xyXG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi90b2dnbGUtY2xhc3Nlcyc7XHJcblxyXG4vKipcclxuICogQWxsb3dzIHRoZSBzaWRlYmFyIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhclRvZ2dsZXJdJyxcclxuICBwcm92aWRlcnM6IFtDbGFzc1RvZ2dsZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcFNpZGViYXJUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xyXG4gIHB1YmxpYyBicDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsYXNzVG9nZ2xlcjogQ2xhc3NUb2dnbGVyKSB7fVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3NzQ2xhc3MgPSB0aGlzLmJwID8gYHNpZGViYXItJHt0aGlzLmJwfS1zaG93YCA6IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xyXG4gICAgdGhpcy5jbGFzc1RvZ2dsZXIudG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgc2lkZWJhckNzc0NsYXNzZXMpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1taW5pbWl6ZWQnKSA/XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJykgOlxyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwTW9iaWxlU2lkZWJhclRvZ2dsZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSA/XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpIDpcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93Jyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJDbG9zZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW9mZi1jYW52YXMnKSkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykgP1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpIDpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcEJyYW5kTWluaW1pemVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnYnJhbmQtbWluaW1pemVkJykgP1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKSA6XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBbGxvd3MgdGhlIGFzaWRlIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQXNpZGVNZW51VG9nZ2xlcl0nLFxyXG4gIHByb3ZpZGVyczogW0NsYXNzVG9nZ2xlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcEFzaWRlTWVudVRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIGJwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXIpIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjc3NDbGFzcyA9IHRoaXMuYnAgPyBgYXNpZGUtbWVudS0ke3RoaXMuYnB9LXNob3dgIDogYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcclxuICAgIHRoaXMuY2xhc3NUb2dnbGVyLnRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIGFzaWRlTWVudUNzc0NsYXNzZXMpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwSHRtbEF0dHJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFwcEh0bWxBdHRyOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5hcHBIdG1sQXR0cjtcclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJzKSB7XHJcbiAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYihhdHRyLCBhdHRyaWJzW2F0dHJdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XHJcbiAgICBjb25zdCBjbGFzc0FycmF5ID0gKEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpKTtcclxuICAgIGNsYXNzQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lmxlbmd0aCA+IDApLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmliKGtleSwgdmFsdWUpIHtcclxuICAgIHZhbHVlICE9PSBudWxsID9cclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICkgOlxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==