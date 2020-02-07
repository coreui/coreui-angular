import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
var SidebarNavService = /** @class */ (function () {
    function SidebarNavService() {
    }
    SidebarNavService = __decorate([
        Injectable()
    ], SidebarNavService);
    return SidebarNavService;
}());
export { SidebarNavService };
var SidebarNavHelper = /** @class */ (function () {
    function SidebarNavHelper() {
        this.hasBadge = function (item) { return Boolean(item.badge); };
        this.hasIcon = function (item) { return Boolean(item.icon); };
    }
    SidebarNavHelper.prototype.itemType = function (item) {
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
    };
    SidebarNavHelper.prototype.isActive = function (router, item) {
        return router.isActive(item.url, false);
    };
    SidebarNavHelper.prototype.getIconClass = function (item) {
        var classes = {
            'nav-icon': true
        };
        if (this.hasIcon(item)) {
            var icon = item.icon;
            classes[icon] = this.hasIcon(item);
        }
        return classes;
    };
    SidebarNavHelper = __decorate([
        Injectable()
    ], SidebarNavHelper);
    return SidebarNavHelper;
}());
export { SidebarNavHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQztJQUFBO0lBS0EsQ0FBQztJQUxxQixpQkFBaUI7UUFEdEMsVUFBVSxFQUFFO09BQ1MsaUJBQWlCLENBS3RDO0lBQUQsd0JBQUM7Q0FBQSxBQUxELElBS0M7U0FMcUIsaUJBQWlCO0FBUXZDO0lBQUE7UUFzQlMsYUFBUSxHQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztRQUN6QyxZQUFPLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixDQUFDO0lBWWhELENBQUM7SUFqQ1EsbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSxtQ0FBUSxHQUFmLFVBQWdCLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFLTSx1Q0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQWxDVSxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBbUM1QjtJQUFELHVCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FuQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSU5hdkRhdGEgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaWRlYmFyTmF2U2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHNpZGViYXItbmF2IGl0ZW1zIGNvbmZpZyBOYXZEYXRhXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0U2lkZWJhck5hdkl0ZW1zQ29uZmlnKCk6IElOYXZEYXRhW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZIZWxwZXIge1xyXG5cclxuICBwdWJsaWMgaXRlbVR5cGUoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uZGl2aWRlcikge1xyXG4gICAgICByZXR1cm4gJ2RpdmlkZXInO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLnRpdGxlKSB7XHJcbiAgICAgIHJldHVybiAndGl0bGUnO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVybiAnZHJvcGRvd24nO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmxhYmVsKSB7XHJcbiAgICAgIHJldHVybiAnbGFiZWwnO1xyXG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAnZW1wdHknO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdsaW5rJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pIHtcclxuICAgIHJldHVybiByb3V0ZXIuaXNBY3RpdmUoaXRlbS51cmwsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNCYWRnZSA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uYmFkZ2UpO1xyXG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcclxuXHJcbiAgcHVibGljIGdldEljb25DbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnbmF2LWljb24nOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuaGFzSWNvbihpdGVtKSkge1xyXG4gICAgICBjb25zdCBpY29uID0gaXRlbS5pY29uO1xyXG4gICAgICBjbGFzc2VzW2ljb25dID0gdGhpcy5oYXNJY29uKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==