import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideToggleDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, HtmlAttributesDirective } from './layout.directive';
import { ClassToggler } from '../toggle-classes';
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [
            AsideToggleDirective,
            BrandMinimizeDirective,
            MobileSidebarToggleDirective,
            SidebarToggleDirective,
            SidebarMinimizeDirective,
            SidebarOffCanvasCloseDirective,
            HtmlAttributesDirective
        ],
        declarations: [
            AsideToggleDirective,
            BrandMinimizeDirective,
            MobileSidebarToggleDirective,
            SidebarToggleDirective,
            SidebarMinimizeDirective,
            SidebarOffCanvasCloseDirective,
            HtmlAttributesDirective
        ],
        providers: [
            ClassToggler
        ]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLDRCQUE0QixFQUM1QixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qix1QkFBdUIsRUFDeEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUE0QmpELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBSSxDQUFBO0FBQWhCLFlBQVk7SUExQnhCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsNEJBQTRCO1lBQzVCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLHVCQUF1QjtTQUN4QjtRQUNELFlBQVksRUFBRTtZQUNaLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsNEJBQTRCO1lBQzVCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLHVCQUF1QjtTQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNULFlBQVk7U0FDYjtLQUNGLENBQUM7R0FDVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBc2lkZVRvZ2dsZURpcmVjdGl2ZSxcclxuICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxyXG4gIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXHJcbiAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcclxuICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXHJcbiAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlLFxyXG4gIEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9sYXlvdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2xhc3NUb2dnbGVyIH0gZnJvbSAnLi4vdG9nZ2xlLWNsYXNzZXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSxcclxuICAgIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlLFxyXG4gICAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXNpZGVUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxyXG4gICAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUsXHJcbiAgICBIdG1sQXR0cmlidXRlc0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbGFzc1RvZ2dsZXJcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XHJcbiJdfQ==