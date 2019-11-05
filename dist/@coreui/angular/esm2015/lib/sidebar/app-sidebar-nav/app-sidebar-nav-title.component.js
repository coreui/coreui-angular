import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
let AppSidebarNavTitleComponent = class AppSidebarNavTitleComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        const nativeElement = this.el.nativeElement;
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    addAttribs(attribs, element) {
        if (attribs) {
            for (const attr in attribs) {
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
    }
    setStyle(styles, el) {
        for (const style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    }
    addClass(classes, el) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(el, element);
        });
    }
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
};
AppSidebarNavTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { AppSidebarNavTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU05RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUd0QyxZQUNVLEVBQWMsRUFDZCxRQUFtQjtRQURuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMxQixDQUFDO0lBRUosUUFBUTtRQUNOLE1BQU0sYUFBYSxHQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN6RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELElBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUc7WUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRztZQUN2QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPO1FBQ2pDLElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFHO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzFCLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUUsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFyRGUsVUFBVTtZQUNKLFNBQVM7O0FBSnBCO0lBQVIsS0FBSyxFQUFFOzt5REFBVztBQURSLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOENBQThDO1FBQ3hELFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztxQ0FLYyxVQUFVO1FBQ0osU0FBUztHQUxsQiwyQkFBMkIsQ0F5RHZDO1NBekRZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtdGl0bGUsIGN1aS1zaWRlYmFyLW5hdi10aXRsZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuaXRlbS5uYW1lKTtcclxuXHJcbiAgICBpZiAoIHRoaXMuaXRlbS5jbGFzcyApIHtcclxuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuaXRlbS5jbGFzcztcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCBjbGFzc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHRoaXMuaXRlbS53cmFwcGVyICkge1xyXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMuaXRlbS53cmFwcGVyLmVsZW1lbnQpO1xyXG4gICAgICB0aGlzLmFkZEF0dHJpYnModGhpcy5pdGVtLndyYXBwZXIuYXR0cmlidXRlcywgd3JhcHBlcik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgd3JhcHBlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRBdHRyaWJzKGF0dHJpYnMsIGVsZW1lbnQpIHtcclxuICAgIGlmIChhdHRyaWJzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJzKSB7XHJcbiAgICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3R5bGUoYXR0cmlic1thdHRyXSwgZWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0sIGVsZW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYihhdHRyLCBhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzLCBlbCkge1xyXG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgc3R5bGUsIHN0eWxlc1tzdHlsZV0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NlcywgZWwpIHtcclxuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJykpO1xyXG4gICAgY2xhc3NBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQubGVuZ3RoID4gMCkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgZWxlbWVudCApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEF0dHJpYihrZXksIHZhbHVlLCBlbCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsIGtleSwgdmFsdWUgKTtcclxuICB9XHJcbn1cclxuIl19