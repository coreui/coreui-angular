/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideToggleDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, HtmlAttributesDirective } from './layout.directive';
import { ClassToggler } from '../toggle-classes';
export class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLDRCQUE0QixFQUM1QixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qix1QkFBdUIsRUFDeEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUE0QmpELE1BQU0sT0FBTyxZQUFZOzs7WUExQnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLDRCQUE0QjtvQkFDNUIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLDhCQUE4QjtvQkFDOUIsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLDRCQUE0QjtvQkFDNUIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLDhCQUE4QjtvQkFDOUIsdUJBQXVCO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxyXG4gIEJyYW5kTWluaW1pemVEaXJlY3RpdmUsXHJcbiAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcclxuICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxyXG4gIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSxcclxuICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUsXHJcbiAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmVcclxufSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi90b2dnbGUtY2xhc3Nlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQXNpZGVUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxyXG4gICAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUsXHJcbiAgICBIdG1sQXR0cmlidXRlc0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBc2lkZVRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIEJyYW5kTWluaW1pemVEaXJlY3RpdmUsXHJcbiAgICBNb2JpbGVTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSxcclxuICAgIFNpZGViYXJPZmZDYW52YXNDbG9zZURpcmVjdGl2ZSxcclxuICAgIEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENsYXNzVG9nZ2xlclxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7IH1cclxuIl19