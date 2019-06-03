import { async, TestBed } from '@angular/core/testing';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';
describe('AppSidebarNavComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppSidebarNavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppSidebarNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=app-sidebar-nav.component.spec.js.map