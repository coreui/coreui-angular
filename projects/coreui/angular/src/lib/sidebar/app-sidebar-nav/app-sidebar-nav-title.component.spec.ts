import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavTitleComponent } from './app-sidebar-nav-title.component';

describe('AppSidebarNavTitleComponent', () => {
  let component: AppSidebarNavTitleComponent;
  let fixture: ComponentFixture<AppSidebarNavTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppSidebarNavTitleComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavTitleComponent);
    component = fixture.componentInstance;
    component.item = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
