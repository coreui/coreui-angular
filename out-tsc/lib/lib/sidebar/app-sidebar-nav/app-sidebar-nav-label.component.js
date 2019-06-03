import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavLabelComponent = class AppSidebarNavLabelComponent {
    constructor(helper) {
        this.helper = helper;
    }
    ngOnInit() {
    }
    getItemClass() {
        const labelClass = {
            'nav-label': true,
            'active': true
        };
        const itemClass = this.item.class;
        labelClass[itemClass] = !!itemClass;
        return labelClass;
    }
    getLabelIconClass() {
        const classes = this.helper.getIconClass(this.item);
        const variant = `text-${this.item.label.variant}`;
        classes[variant] = !!variant;
        const labelClass = this.item.label.class;
        classes[labelClass] = !!labelClass;
        return classes;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppSidebarNavLabelComponent.prototype, "item", void 0);
AppSidebarNavLabelComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-nav-label',
        templateUrl: './app-sidebar-nav-label.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavLabelComponent);
export { AppSidebarNavLabelComponent };
//# sourceMappingURL=app-sidebar-nav-label.component.js.map