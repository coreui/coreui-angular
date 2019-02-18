/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    AppSidebarNavTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this.el.nativeElement;
        /** @type {?} */
        var name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            /** @type {?} */
            var classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            /** @type {?} */
            var wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    };
    /**
     * @private
     * @param {?} attribs
     * @param {?} element
     * @return {?}
     */
    AppSidebarNavTitleComponent.prototype.addAttribs = /**
     * @private
     * @param {?} attribs
     * @param {?} element
     * @return {?}
     */
    function (attribs, element) {
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
    /**
     * @private
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    AppSidebarNavTitleComponent.prototype.setStyle = /**
     * @private
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    function (styles, el) {
        for (var style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    };
    /**
     * @private
     * @param {?} classes
     * @param {?} el
     * @return {?}
     */
    AppSidebarNavTitleComponent.prototype.addClass = /**
     * @private
     * @param {?} classes
     * @param {?} el
     * @return {?}
     */
    function (classes, el) {
        var _this = this;
        /** @type {?} */
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.length > 0; })).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.renderer.addClass(el, element);
        }));
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} el
     * @return {?}
     */
    AppSidebarNavTitleComponent.prototype.setAttrib = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} el
     * @return {?}
     */
    function (key, value, el) {
        this.renderer.setAttribute(el, key, value);
    };
    AppSidebarNavTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-title',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    AppSidebarNavTitleComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return AppSidebarNavTitleComponent;
}());
export { AppSidebarNavTitleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBZSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNGO0lBT0UscUNBQ1UsRUFBYyxFQUNkLFFBQW1CO1FBRG5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFSiw4Q0FBUTs7O0lBQVI7O1lBQ1EsYUFBYSxHQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBQ2xELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyRCxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFHOztnQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUc7O2dCQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7Ozs7SUFFTyxnREFBVTs7Ozs7O0lBQWxCLFVBQW1CLE9BQU8sRUFBRSxPQUFPO1FBQ2pDLElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxJQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFHO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sOENBQVE7Ozs7OztJQUFoQixVQUFpQixNQUFNLEVBQUUsRUFBRTtRQUN6QixLQUFLLElBQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLDhDQUFROzs7Ozs7SUFBaEIsVUFBaUIsT0FBTyxFQUFFLEVBQUU7UUFBNUIsaUJBS0M7O1lBSk8sVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDaEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTywrQ0FBUzs7Ozs7OztJQUFqQixVQUFrQixHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUUsQ0FBQztJQUM5QyxDQUFDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQUxrQixVQUFVO2dCQUE4QixTQUFTOzs7dUJBT2pFLEtBQUs7O0lBd0RSLGtDQUFDO0NBQUEsQUE3REQsSUE2REM7U0F6RFksMkJBQTJCOzs7SUFDdEMsMkNBQW1COzs7OztJQUdqQix5Q0FBc0I7Ozs7O0lBQ3RCLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LXRpdGxlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5pdGVtLm5hbWUpO1xyXG5cclxuICAgIGlmICggdGhpcy5pdGVtLmNsYXNzICkge1xyXG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5pdGVtLmNsYXNzO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsIGNsYXNzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggdGhpcy5pdGVtLndyYXBwZXIgKSB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodGhpcy5pdGVtLndyYXBwZXIuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuYWRkQXR0cmlicyh0aGlzLml0ZW0ud3JhcHBlci5hdHRyaWJ1dGVzLCB3cmFwcGVyKVxyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHdyYXBwZXIsIG5hbWUpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIHdyYXBwZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBuYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQXR0cmlicyhhdHRyaWJzLCBlbGVtZW50KSB7XHJcbiAgICBpZiAoYXR0cmlicykge1xyXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlicykge1xyXG4gICAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0eWxlKGF0dHJpYnNbYXR0cl0sIGVsZW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xyXG4gICAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWIoYXR0ciwgYXR0cmlic1thdHRyXSwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0eWxlKHN0eWxlcywgZWwpIHtcclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZENsYXNzKGNsYXNzZXMsIGVsKSB7XHJcbiAgICBjb25zdCBjbGFzc0FycmF5ID0gKEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpKTtcclxuICAgIGNsYXNzQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lmxlbmd0aCA+IDApLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsIGVsZW1lbnQgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSwgZWwpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCBrZXksIHZhbHVlICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==