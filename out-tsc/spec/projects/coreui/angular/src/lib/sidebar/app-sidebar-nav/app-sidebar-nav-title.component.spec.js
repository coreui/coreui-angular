import { async, TestBed } from '@angular/core/testing';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav-title.component';
describe('AppSidebarNavTitleComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppSidebarNavTitleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppSidebarNavTitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=app-sidebar-nav-title.component.spec.js.map