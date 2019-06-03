import { async, TestBed } from '@angular/core/testing';
import { AppSidebarNavLinkComponent } from './app-sidebar-nav-link.component';
describe('AppSidebarNavLinkComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppSidebarNavLinkComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppSidebarNavLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=app-sidebar-nav-link.component.spec.js.map