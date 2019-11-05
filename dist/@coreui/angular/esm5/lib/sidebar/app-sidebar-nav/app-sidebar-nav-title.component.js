import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AppSidebarNavTitleComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            var classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            var wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    };
    AppSidebarNavTitleComponent.prototype.addAttribs = function (attribs, element) {
        if (attribs) {
            for (var attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    };
    AppSidebarNavTitleComponent.prototype.setStyle = function (styles, el) {
        for (var style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    };
    AppSidebarNavTitleComponent.prototype.addClass = function (classes, el) {
        var _this = this;
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter(function (element) { return element.length > 0; }).forEach(function (element) {
            _this.renderer.addClass(el, element);
        });
    };
    AppSidebarNavTitleComponent.prototype.setAttrib = function (key, value, el) {
        this.renderer.setAttribute(el, key, value);
    };
    AppSidebarNavTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavTitleComponent.prototype, "item", void 0);
    AppSidebarNavTitleComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-title, cui-sidebar-nav-title',
            template: ''
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2])
    ], AppSidebarNavTitleComponent);
    return AppSidebarNavTitleComponent;
}());
export { AppSidebarNavTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU05RTtJQUdFLHFDQUNVLEVBQWMsRUFDZCxRQUFtQjtRQURuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMxQixDQUFDO0lBRUosOENBQVEsR0FBUjtRQUNFLElBQU0sYUFBYSxHQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN6RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELElBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUc7WUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRztZQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRU8sZ0RBQVUsR0FBbEIsVUFBbUIsT0FBTyxFQUFFLE9BQU87UUFDakMsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLElBQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUc7b0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztxQkFBTSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTyw4Q0FBUSxHQUFoQixVQUFpQixNQUFNLEVBQUUsRUFBRTtRQUN6QixLQUFLLElBQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVPLDhDQUFRLEdBQWhCLFVBQWlCLE9BQU8sRUFBRSxFQUFFO1FBQTVCLGlCQUtDO1FBSkMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBUyxHQUFqQixVQUFrQixHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUUsQ0FBQztJQUM5QyxDQUFDOztnQkFwRGEsVUFBVTtnQkFDSixTQUFTOztJQUpwQjtRQUFSLEtBQUssRUFBRTs7NkRBQVc7SUFEUiwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhDQUE4QztZQUN4RCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7eUNBS2MsVUFBVTtZQUNKLFNBQVM7T0FMbEIsMkJBQTJCLENBeUR2QztJQUFELGtDQUFDO0NBQUEsQUF6REQsSUF5REM7U0F6RFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi10aXRsZSwgY3VpLXNpZGViYXItbmF2LXRpdGxlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5pdGVtLm5hbWUpO1xyXG5cclxuICAgIGlmICggdGhpcy5pdGVtLmNsYXNzICkge1xyXG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5pdGVtLmNsYXNzO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsIGNsYXNzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggdGhpcy5pdGVtLndyYXBwZXIgKSB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodGhpcy5pdGVtLndyYXBwZXIuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuYWRkQXR0cmlicyh0aGlzLml0ZW0ud3JhcHBlci5hdHRyaWJ1dGVzLCB3cmFwcGVyKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh3cmFwcGVyLCBuYW1lKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCB3cmFwcGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEF0dHJpYnMoYXR0cmlicywgZWxlbWVudCkge1xyXG4gICAgaWYgKGF0dHJpYnMpIHtcclxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJpYnMpIHtcclxuICAgICAgICBpZiAoYXR0ciA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YoYXR0cmlic1thdHRyXSkgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcclxuICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoYXR0cmlic1thdHRyXSwgZWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QXR0cmliKGF0dHIsIGF0dHJpYnNbYXR0cl0sIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMsIGVsKSB7XHJcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzLCBlbCkge1xyXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IChBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKSk7XHJcbiAgICBjbGFzc0FycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5sZW5ndGggPiAwKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBlbGVtZW50ICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmliKGtleSwgdmFsdWUsIGVsKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwga2V5LCB2YWx1ZSApO1xyXG4gIH1cclxufVxyXG4iXX0=