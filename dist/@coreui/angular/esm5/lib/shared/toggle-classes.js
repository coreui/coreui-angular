import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var RemoveClasses = function (NewClassNames) {
    var MatchClasses = NewClassNames.map(function (Class) { return document.body.classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var ɵ0 = RemoveClasses;
export var ToggleClasses = function (Toggle, ClassNames) {
    var Level = ClassNames.indexOf(Toggle);
    var NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.body.classList.remove(Class); });
    }
    else {
        document.body.classList.add(Toggle);
    }
};
var ClassToggler = /** @class */ (function () {
    function ClassToggler(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    ClassToggler.prototype.removeClasses = function (NewClassNames) {
        var _this = this;
        var MatchClasses = NewClassNames.map(function (Class) { return _this.document.body.classList.contains(Class); });
        return MatchClasses.indexOf(true) !== -1;
    };
    ClassToggler.prototype.toggleClasses = function (Toggle, ClassNames) {
        var _this = this;
        var Level = ClassNames.indexOf(Toggle);
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map(function (Class) { return _this.renderer.removeClass(_this.document.body, Class); });
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    };
    ClassToggler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    ClassToggler = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], ClassToggler);
    return ClassToggler;
}());
export { ClassToggler };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLElBQU0sYUFBYSxHQUFHLFVBQUMsYUFBYTtJQUNsQyxJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7SUFDM0YsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQzs7QUFFRixNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUFNLEVBQUUsVUFBVTtJQUM5QyxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVyRCxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7S0FDckU7U0FBTTtRQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQztBQUNILENBQUMsQ0FBQztBQUdGO0lBRUUsc0JBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDMUIsQ0FBQztJQUVKLG9DQUFhLEdBQWIsVUFBYyxhQUFhO1FBQTNCLGlCQUdDO1FBRkMsSUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztRQUNoRyxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxNQUFNLEVBQUUsVUFBVTtRQUFoQyxpQkFTQztRQVJDLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOztnREFsQkUsTUFBTSxTQUFDLFFBQVE7Z0JBQ0UsU0FBUzs7SUFKbEIsWUFBWTtRQUR4QixVQUFVLEVBQUU7UUFJUixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtpREFDQyxTQUFTO09BSmxCLFlBQVksQ0FzQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5jb25zdCBSZW1vdmVDbGFzc2VzID0gKE5ld0NsYXNzTmFtZXMpID0+IHtcclxuICBjb25zdCBNYXRjaENsYXNzZXMgPSBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzKSk7XHJcbiAgcmV0dXJuIE1hdGNoQ2xhc3Nlcy5pbmRleE9mKHRydWUpICE9PSAtMTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2dnbGVDbGFzc2VzID0gKFRvZ2dsZSwgQ2xhc3NOYW1lcykgPT4ge1xyXG4gIGNvbnN0IExldmVsID0gQ2xhc3NOYW1lcy5pbmRleE9mKFRvZ2dsZSk7XHJcbiAgY29uc3QgTmV3Q2xhc3NOYW1lcyA9IENsYXNzTmFtZXMuc2xpY2UoMCwgTGV2ZWwgKyAxKTtcclxuXHJcbiAgaWYgKFJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykpIHtcclxuICAgIE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChUb2dnbGUpO1xyXG4gIH1cclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsYXNzVG9nZ2xlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgcmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBNYXRjaENsYXNzZXMgPSBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3MpKTtcclxuICAgIHJldHVybiBNYXRjaENsYXNzZXMuaW5kZXhPZih0cnVlKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDbGFzc2VzKFRvZ2dsZSwgQ2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgTGV2ZWwgPSBDbGFzc05hbWVzLmluZGV4T2YoVG9nZ2xlKTtcclxuICAgIGNvbnN0IE5ld0NsYXNzTmFtZXMgPSBDbGFzc05hbWVzLnNsaWNlKDAsIExldmVsICsgMSk7XHJcblxyXG4gICAgaWYgKHRoaXMucmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSkge1xyXG4gICAgICBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBDbGFzcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIFRvZ2dsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==