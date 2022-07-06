import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavTitleComponent } from './app-sidebar-nav-title.component';

describe('AppSidebarNavTitleComponent', () => {
  let component: AppSidebarNavTitleComponent;
  let fixture: ComponentFixture<AppSidebarNavTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppSidebarNavTitleComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavTitleComponent);
    component = fixture.componentInstance;
    component.item = { title: true, name: 'title'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
