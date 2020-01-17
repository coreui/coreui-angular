import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppSidebarComponent } from './app-sidebar.component';

describe('AppSidebarComponent', () => {
  let component: AppSidebarComponent;
  let fixture: ComponentFixture<AppSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ AppSidebarComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has sidebar class', () => {
    expect(fixture.nativeElement.classList.contains('sidebar')).toBeTruthy();
  });

  describe('minimized', () => {
    it('updates document.body classes', () => {
      component.minimized = true;
      expect(document.body.classList.contains('sidebar-minimized')).toBeTruthy();
      expect(document.body.classList.contains('brand-minimized')).toBeTruthy();

      component.minimized = false;
      expect(document.body.classList.contains('sidebar-minimized')).toBeFalsy();
      expect(document.body.classList.contains('brand-minimized')).toBeFalsy();
    });

    it('emits only when value changes', async(() => {
      spyOn(component.minimizedChange, 'emit');

      component.minimized = true;
      component.minimized = true;
      component.minimized = false;

      expect(component.minimizedChange.emit).toHaveBeenCalledTimes(2);
    }));
  });
});
