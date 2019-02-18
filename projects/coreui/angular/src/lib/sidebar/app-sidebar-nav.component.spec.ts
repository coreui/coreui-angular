import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavComponent } from './app-sidebar-nav.component';

describe('AppSidebarNavComponent', () => {
  let component: AppSidebarNavComponent;
  let fixture: ComponentFixture<AppSidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNavComponent ]
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
