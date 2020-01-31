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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQztJQUFBO0lBS0EsQ0FBQztJQUxxQixpQkFBaUI7UUFEdEMsVUFBVSxFQUFFO09BQ1MsaUJBQWlCLENBS3RDO0lBQUQsd0JBQUM7Q0FBQSxBQUxELElBS0M7U0FMcUIsaUJBQWlCO0FBUXZDO0lBQUE7UUFzQlMsYUFBUSxHQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztRQUN6QyxZQUFPLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixDQUFDO0lBWWhELENBQUM7SUFqQ1EsbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSxtQ0FBUSxHQUFmLFVBQWdCLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFLTSx1Q0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQWxDVSxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBbUM1QjtJQUFELHVCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FuQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJTmF2RGF0YSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpZGViYXJOYXZTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzaWRlYmFyLW5hdiBpdGVtcyBjb25maWcgTmF2RGF0YVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0U2lkZWJhck5hdkl0ZW1zQ29uZmlnKCk6IElOYXZEYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2SGVscGVyIHtcblxuICBwdWJsaWMgaXRlbVR5cGUoaXRlbSkge1xuICAgIGlmIChpdGVtLmRpdmlkZXIpIHtcbiAgICAgIHJldHVybiAnZGl2aWRlcic7XG4gICAgfSBlbHNlIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICByZXR1cm4gJ3RpdGxlJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiAnZHJvcGRvd24nO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xuICAgICAgcmV0dXJuICdsYWJlbCc7XG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ2VtcHR5JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdsaW5rJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUocm91dGVyLCBpdGVtKSB7XG4gICAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZShpdGVtLnVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGhhc0JhZGdlID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5iYWRnZSk7XG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcblxuICBwdWJsaWMgZ2V0SWNvbkNsYXNzKGl0ZW0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ25hdi1pY29uJzogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHRoaXMuaGFzSWNvbihpdGVtKSkge1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0uaWNvbjtcbiAgICAgIGNsYXNzZXNbaWNvbl0gPSB0aGlzLmhhc0ljb24oaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iXX0=