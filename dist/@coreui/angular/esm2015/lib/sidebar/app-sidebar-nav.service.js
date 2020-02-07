import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SidebarNavService = class SidebarNavService {
};
SidebarNavService = __decorate([
    Injectable()
], SidebarNavService);
export { SidebarNavService };
let SidebarNavHelper = class SidebarNavHelper {
    constructor() {
        this.hasBadge = (item) => Boolean(item.badge);
        this.hasIcon = (item) => Boolean(item.icon);
    }
    itemType(item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children) {
            return 'dropdown';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    }
    isActive(router, item) {
        return router.isActive(item.url, false);
    }
    getIconClass(item) {
        const classes = {
            'nav-icon': true
        };
        if (this.hasIcon(item)) {
            const icon = item.icon;
            classes[icon] = this.hasIcon(item);
        }
        return classes;
    }
};
SidebarNavHelper = __decorate([
    Injectable()
], SidebarNavHelper);
export { SidebarNavHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxJQUFzQixpQkFBaUIsR0FBdkMsTUFBc0IsaUJBQWlCO0NBS3RDLENBQUE7QUFMcUIsaUJBQWlCO0lBRHRDLFVBQVUsRUFBRTtHQUNTLGlCQUFpQixDQUt0QztTQUxxQixpQkFBaUI7QUFRdkMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFBN0I7UUFzQlMsYUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQVloRCxDQUFDO0lBakNRLFFBQVEsQ0FBQyxJQUFJO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDMUIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUtNLFlBQVksQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUE7QUFuQ1ksZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtHQUNBLGdCQUFnQixDQW1DNUI7U0FuQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSU5hdkRhdGEgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaWRlYmFyTmF2U2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHNpZGViYXItbmF2IGl0ZW1zIGNvbmZpZyBOYXZEYXRhXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0U2lkZWJhck5hdkl0ZW1zQ29uZmlnKCk6IElOYXZEYXRhW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZIZWxwZXIge1xyXG5cclxuICBwdWJsaWMgaXRlbVR5cGUoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uZGl2aWRlcikge1xyXG4gICAgICByZXR1cm4gJ2RpdmlkZXInO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLnRpdGxlKSB7XHJcbiAgICAgIHJldHVybiAndGl0bGUnO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVybiAnZHJvcGRvd24nO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmxhYmVsKSB7XHJcbiAgICAgIHJldHVybiAnbGFiZWwnO1xyXG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAnZW1wdHknO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdsaW5rJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pIHtcclxuICAgIHJldHVybiByb3V0ZXIuaXNBY3RpdmUoaXRlbS51cmwsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNCYWRnZSA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uYmFkZ2UpO1xyXG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcclxuXHJcbiAgcHVibGljIGdldEljb25DbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnbmF2LWljb24nOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuaGFzSWNvbihpdGVtKSkge1xyXG4gICAgICBjb25zdCBpY29uID0gaXRlbS5pY29uO1xyXG4gICAgICBjbGFzc2VzW2ljb25dID0gdGhpcy5oYXNJY29uKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==