/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
export class AppSidebarNavTitleComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const nativeElement = this.el.nativeElement;
        /** @type {?} */
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            /** @type {?} */
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            /** @type {?} */
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    /**
     * @private
     * @param {?} attribs
     * @param {?} element
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    setStyle(styles, el) {
        for (const style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    }
    /**
     * @private
     * @param {?} classes
     * @param {?} el
     * @return {?}
     */
    addClass(classes, el) {
        /** @type {?} */
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((/**
         * @param {?} element
         * @return {?}
         */
        (element) => element.length > 0)).forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.renderer.addClass(el, element);
        }));
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} el
     * @return {?}
     */
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
}
AppSidebarNavTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-title',
                template: ''
            }] }
];
/** @nocollapse */
AppSidebarNavTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
AppSidebarNavTitleComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppSidebarNavTitleComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavTitleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavTitleComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBZSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTTNGLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBR3RDLFlBQ1UsRUFBYyxFQUNkLFFBQW1CO1FBRG5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFSixRQUFROztjQUNBLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztjQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckQsSUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRzs7a0JBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFHOztrQkFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPO1FBQ2pDLElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFHO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFOztjQUNwQixVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUUsVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFFLENBQUM7SUFDOUMsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBTGtCLFVBQVU7WUFBOEIsU0FBUzs7O21CQU9qRSxLQUFLOzs7O0lBQU4sMkNBQW1COzs7OztJQUdqQix5Q0FBc0I7Ozs7O0lBQ3RCLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LXRpdGxlJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuaXRlbS5uYW1lKTtcblxuICAgIGlmICggdGhpcy5pdGVtLmNsYXNzICkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuaXRlbS5jbGFzcztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLml0ZW0ud3JhcHBlciApIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodGhpcy5pdGVtLndyYXBwZXIuZWxlbWVudCk7XG4gICAgICB0aGlzLmFkZEF0dHJpYnModGhpcy5pdGVtLndyYXBwZXIuYXR0cmlidXRlcywgd3JhcHBlcilcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQXR0cmlicyhhdHRyaWJzLCBlbGVtZW50KSB7XG4gICAgaWYgKGF0dHJpYnMpIHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJzKSB7XG4gICAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYihhdHRyLCBhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzLCBlbCkge1xuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NlcywgZWwpIHtcbiAgICBjb25zdCBjbGFzc0FycmF5ID0gKEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpKTtcbiAgICBjbGFzc0FycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5sZW5ndGggPiAwKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgZWxlbWVudCApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSwgZWwpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwga2V5LCB2YWx1ZSApO1xuICB9XG59XG4iXX0=